# Training Management Platform - Requirements

## 1. Objective

Build a web-based training management platform for Boys’ Brigade officers and leadership teams to:

- Track officer training records
- Submit training requests/forms
- Route approvals through a structured workflow
- Maintain a catalogue of courses and curated curriculums
- Monitor training progress across companies
- Reduce fragmented spreadsheets/manual approvals

The platform must be publicly accessible via internet login (not dependent on Microsoft enterprise accounts).

---

## 2. Personas

| Persona | Description |
|---|---|
| Training Comm | Overall training administrators managing curriculums, approvals, and reporting |
| Captain | Company-level leader overseeing officers and approving submissions |
| Chaplain | Leadership reviewer approving submissions and monitoring progress |
| Officer | Individual volunteer officer attending and submitting trainings |

---

## 3. Core Features

### 3.1 Officer Directory Lookup

The platform shall assume an existing officer list is available as the source of truth.

The platform must be able to:

- Query the existing officer list
- Search officers by name, company, email, rank, or status
- Reference officer records when creating training submissions and training records
- Use officer metadata to determine company, captain, and chaplain relationships
- Show whether each officer has fulfilled or not fulfilled the applicable requirements matrix
- Treat officer profile creation, editing, assignment, adding, deleting, and archiving as out of scope

#### Officer Metadata

| Field | Type | Validation / Logic |
|---|---|---|
| Officer ID | External/System Reference | Must uniquely identify the officer from the existing officer list. |
| Full Name | Text | Must be available from the officer list. |
| Rank | Dropdown | Must be available from the officer list; used to determine outstanding mandatory curriculums. |
| Appointment | Text | Optional. |
| Company | Dropdown | Must be available from the officer list. |
| Email | Email | Must be available from the officer list; used as the login identifier. |
| Phone Number | Text | Optional. |
| Status | Active/Inactive | Must be available from the officer list; inactive officers should not be selectable for new submissions unless explicitly allowed by Training Comm. |
| Date Joined | Date | Optional. |
| Captain | User Reference | Must be available from the officer list; used to determine approval routing. |
| Chaplain | User Reference | Must be available from the officer list; used to determine approval routing. |

#### Officer Directory Logic

- Officer records are queried from an existing officer list and are not created or edited in this platform.
- Officer listing should only show whether an officer has fulfilled or not fulfilled the applicable requirements matrix.
- Training Comm cannot add or delete officers in this platform.
- Training Comm is responsible for managing the requirements matrix used to determine whether an officer has completed the necessary training before moving to the next rank or appointment.

---

### 3.2 Training Records

Training records represent the trainings an officer has already undergone.

Each officer shall have a centralized training history that is separate from the curriculum and course catalogue.

Training records can originate from:
- Manual entry by Training Comm
- Approved submissions after the training has been completed or attended

#### Training Record Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Training Record ID | System Generated | Must be unique. |
| Officer | Reference | Must reference an officer from the existing officer list. |
| Curriculum | Reference | Optional reference to the curriculum completed, where applicable. |
| Training Name | Text | Required when the completed training is not tied to an existing curriculum. |
| Training Provider | Text | Required when available from the curriculum or submission. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Certificate Upload | File | Optional. |
| Expiry Date | Date | Optional; captured only when the completed training or certificate has an expiry date. |
| Status | Completed / Pending / Expired | Auto-derived from completion and expiry dates where possible. |
| Submission Reference | Reference | Required when the record originates from a training submission. |

#### Training Record Logic

- Training records can be created manually by Training Comm or generated from approved submissions.
- Training records are historical records of what an officer has completed or attended.
- Training records must not be treated as the source list of available curriculums or courses.

#### Training Record Reporting

Training Comm must be able to export:

- Officer training history
- Company compliance reports
- Expiring certifications report
- Pending approvals report

Supported export formats:

- CSV
- Excel

---

### 3.3 Curriculum Management

Training Comm must be able to:

- Define curated curriculums from one or more courses
- Map curriculums to rank for now
- Map curriculum preconditions, where preconditions are other curriculums
- Manage the requirements matrix for rank and appointment progression

#### Curriculum Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Curriculum ID | System Generated | Must be unique. |
| Curriculum Name | Text | Required. |
| Description | Text | Optional. |
| Courses | Course Foreign Keys | A curriculum must be linked to one or more courses through foreign key references. |
| Mapped Ranks | Multi-select: OCT / 2LT / LTA | Used to define which ranks the curriculum applies to. |
| Preconditions | Curriculum Foreign Keys | Optional; references other curriculums that must be completed before this curriculum. |
| Active | Boolean | Archived curriculums should not be selectable for new submissions. |

#### Curriculum Logic

- Curriculums and courses must be linked using foreign keys.
- A curriculum may contain one or more courses.
- A curriculum may have zero or more prerequisite curriculums as preconditions.
- Curriculum preconditions must not create circular dependencies.
- Courses can be reused across multiple curriculums.
- Course order is maintained per curriculum.

#### Initial Curriculums

| Curriculum | Description |
|---|---|
| OCO | Required for new officers to become OCT and for inactive officers to be reinstated. |
| BOTC | Required for OCT officers to progress to 2LT. |
| AOTC | Required for 2LT officers to progress to LTA. |

#### Rank-Based Mandatory Training

- Training Comm can map curriculums to OCT, 2LT, and LTA.
- The platform uses the officer's rank from the existing officer list to determine outstanding mandatory trainings.

#### Requirements Matrix

Training Comm must be able to manage the list of requirements used to validate officer progression.

| Field | Type | Validation / Logic |
|---|---|---|
| Requirement ID | System Generated | Must be unique. |
| Requirement Name | Text | Required. |
| Applies To Rank | Multi-select: OCT / 2LT / LTA | Optional; used when the requirement applies to rank progression. |
| Applies To Appointment | Text / Dropdown | Optional; used when the requirement applies to appointment progression. |
| Requirement Type | Dropdown | Curriculum / Non-curriculum requirement. |
| Required Curriculums | Curriculum Foreign Keys | Optional; used when the requirement is fulfilled by completing one or more curriculums. |
| Non-Curriculum Requirement Details | Text | Optional; used for requirements that are not courses or curriculums. |
| Active | Boolean | Inactive requirements should not be used for fulfilment checks. |

The platform shall compare each officer's training records against the requirements matrix and display only `Fulfilled` or `Not Fulfilled` on the officer listing.

#### Initial Requirements Matrix

| Requirement | Applies To | Fulfilment Logic |
|---|---|---|
| Reinstatement after inactive status | Inactive officers | Officer must complete OCO before being reinstated back to their rank. |
| New officer progression to OCT | New officers | Officer must complete OCO to become OCT. |
| Progression to 2LT | OCT officers | Officer must complete BOTC to become 2LT. |
| Progression to LTA | 2LT officers | Officer must complete AOTC to become LTA. |

The requirements matrix must support future requirements that may not be linked to courses or curriculums.

---

### 3.4 Course Management

Training Comm must be able to:

- Create courses
- Edit courses
- Archive courses
- Mark courses as pre-approved
- Classify courses as internal or external
- Map course preconditions, where preconditions are other courses
- Add courses to curriculums
- Remove courses from curriculums
- Reorder courses within a curriculum

#### Course Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course ID | System Generated | Must be unique. |
| Course Name | Text | Required. |
| Description | Text | Optional. |
| Course Source | Dropdown: Internal / External | Required; must be Internal or External. |
| Provider | Text | Required for external courses. |
| Pre-Approved | Boolean | Set by Training Comm when adding or editing a course. |
| Duration | Number | Must be a positive number when provided. |
| Preconditions | Course Foreign Keys | Optional; references other courses that must be completed before this course. |
| Active | Boolean | Archived courses should not be added to new or active curriculums. |

#### Course Logic

- Courses and curriculums must be linked using foreign keys.
- Courses can be reused across multiple curriculums.
- A course may have zero or more prerequisite courses as preconditions.
- Course preconditions must not create circular dependencies.
- Course order is maintained per curriculum.

---

### 3.5 Training Submission

Officers must be able to submit training requests for:

- Themselves
- A group of officers

#### Common Submission Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Submission ID | System Generated | Must be unique. |
| Officer | Auto-populated | Auto-populated from the logged-in user. |
| Submission Type | Dropdown | Must be New course or Pre-approved course. |
| Submission For | Dropdown | Must be Myself or Group. |
| Participants | Officer References | Required when Submission For is Group. |
| Remarks | Text | Optional. |
| Submission Status | System | Auto-managed by workflow. |
| Current Approver | System | Auto-managed by workflow. |
| Submitted Timestamp | System | Auto-generated on submission. |

#### 3.5.1 New Courses

New course submissions are used when the requested course is not in the pre-approved course catalogue.

##### Approval Workflow

```text
Officer
   ↓
Captain Approval
   ↓
Chaplain Approval
   ↓
Training Comm Approval
   ↓
Training Record Created
```

##### New Course Submission Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course Name | Text | Required. |
| Course Provider | Text | Required. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Cost Per Pax | Currency | Required and must be zero or greater. |
| Minimum Pax to Start Course | Number | Required and must be at least 1. |
| Description | Text | Required. |
| Objective | Text | Required. |
| Justification | Text | Required. |
| Certificate Upload | File | Optional. |

#### 3.5.2 Pre-Approved Courses

- Training Comm can set whether a course is pre-approved when adding or editing a course.
- Pre-approved course submissions skip Training Comm approval.

##### Approval Workflow

```text
Officer
   ↓
Captain Approval
   ↓
Chaplain Approval
   ↓
Approved
   ↓
Training Record Created
```

##### Pre-Approved Course Submission Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course | Dropdown | Must be selected from the existing pre-approved course catalogue. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Certificate Upload | File | Optional. |

#### Toast Notifications

Toast notifications shall be used for immediate user feedback, including:

- Submission created
- Submission approved
- Submission rejected
- Submission returned for amendment
- Submission validation errors
- Draft or form save status

---

### 3.6 Approval Workflow Rules

#### Approval Actions

Captain, Chaplain, and Training Comm must be able to:

- Approve submissions
- Reject submissions
- Return submissions for amendment
- Add remarks/comments
- View approval history

#### Approval Metadata

| Field | Type | Validation / Logic |
|---|---|---|
| Approver | User Reference | Must be the current approver assigned by the workflow. |
| Action | Approve / Reject / Return | Must be Approve, Reject, or Return. |
| Remarks | Text | Required when rejecting or returning a submission. |
| Timestamp | System | Auto-generated when the approval action is submitted. |

#### Approval Logic

- Every approval action must be retained in chronological order.

---

### 3.7 Dashboards

#### Officer Dashboard

Features:

- Own training records
- Pending submissions
- Expiring certifications
- Outstanding mandatory trainings

---

#### Captain Dashboard

Features:

- View officers under their company
- View officers’ training progress
- Pending approvals queue
- Expiring certifications
- Company training compliance overview

##### Suggested Metrics

| Metric |
|---|
| Total Officers |
| Trainings Completed |
| Trainings Expiring Soon |
| Pending Approvals |
| Mandatory Training Compliance % |

---

#### Chaplain Dashboard

Features:

- View officers under assigned companies
- Approval queue
- Training compliance overview
- Expiring certifications

---

#### Training Comm Dashboard

Features:

- Global training statistics
- Pending approvals
- Curriculum and course management
- Officer list lookup
- Compliance tracking
- Export reports

---

### 3.10 Audit Trail

All major actions within the platform must be logged.

#### Audit Events

- Login activity
- Submission creation
- Submission approval/rejection
- Officer updates
- Curriculum updates
- Course updates
- Requirements matrix updates
- Role changes

### 3.12 Suggested Database Tables

| Table |
|---|
| users |
| officers |
| companies |
| curriculums |
| courses |
| curriculum_courses |
| requirements_matrix |
| requirement_curriculums |
| training_records |
| training_submissions |
| approval_logs |
| audit_logs |

---

## 4. Authentication & Access

- Publicly accessible web application
- Email/password login
- Role-based access control (RBAC)
- Single account per officer
- Users can only access authorized records

### Roles

| Role | Permissions | Validation / Logic |
|---|---|---|
| Officer | Submit forms, view own trainings | Officers can only view their own training records and submissions. |
| Captain | View officers under company, approve/reject submissions | Captains can only view officers under their company. |
| Chaplain | Review approvals after captain | Chaplains can only view officers under assigned companies. |
| Training Comm | Full system administration | Training Comm has full administration access. |

### Access Logic

- Users must authenticate with email and password.
- Each officer should have only one account.
- Users can only perform actions allowed by their assigned role.
