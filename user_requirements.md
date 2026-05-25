# Training Management Platform - Requirements

## 1. Objective

Build a web-based training management platform for Boys' Brigade officers and leadership teams to:

- Provide a simple mobile-friendly platform for officers to apply for training
- Route training submissions through Captain, Chaplain, and Training Comm where required
- Maintain a controlled course catalogue managed by Training Comm
- Maintain curated curriculums/pathways made up of courses
- Track training completion records based on approved submissions and completion evidence
- Manage officer training requirements by rank, appointment, status, and continuous training needs
- Track annual course funding allowance and company-fund usage
- Monitor officer training progress across companies
- Reduce fragmented spreadsheets, manual approvals, and inconsistent course-name handling

The platform must be publicly accessible via internet login and must not depend on Microsoft enterprise accounts.

---

## 2. Personas

| Persona | Description |
|---|---|
| Officer | Individual volunteer officer who applies for training, uploads completion evidence, and views own training progress. |
| Captain | Company-level approver who reviews training submissions and funding implications for officers under their company. |
| Chaplain | Leadership reviewer who approves submissions after Captain approval and monitors assigned officers' progress. |
| Training Comm | Overall training administrator responsible for course catalogue, curriculums/pathways, requirements matrix, funding release, completion validation, and reporting. |

---

## 3. Core Features

### 3.1 Operating Model

The platform shall separate the following concepts clearly.

| Concept | Definition | Managed By |
|---|---|---|
| Course | A reusable training programme or module. This is the actual payable/attendable training item. | Training Comm |
| Course Offering / Training Session | A scheduled run of a course with fixed dates, usually organised or published by Training Comm. | Training Comm |
| Curriculum / Pathway | A curated pathway made up of one or more courses, including mandatory and optional courses. Examples: OCO, BOTC, AOTC. | Training Comm |
| Requirements Matrix | Policy rules that define which training is mandatory, progression-related, appointment-related, reinstatement-related, or recommended. | Training Comm |
| Training Submission | A request to attend or claim a training. | Officer, Captain, Chaplain, Training Comm |
| New as-is Training | A free-text training request submitted as-is by an officer when the training is not selected from the controlled catalogue. | Officer submits; Training Comm reviews/maps |
| Training Record | System-created proof that an officer has completed training. | System-generated after approved completion evidence |
| Officer Annual Course Allowance | Annual $200 course funding allowance per officer. Applies to courses only, not pathways directly. | System-tracked; Training Comm releases funding |

#### Key Design Rules

- Course catalogue management, curriculum management, requirements management, submissions, records, and finance must not be treated as the same object.
- Course catalogue records must be controlled master data managed by Training Comm.
- Curriculums/pathways define training structure only. They do not decide who is compliant.
- The Requirements Matrix decides whether training is mandatory, optional, progression-related, appointment-related, or recommended.
- Training approval means approval to attend or claim training. It does not automatically mean training has been completed.
- Training records must be system-created only after completion conditions are met.
- Funding approval must be separated from course recognition. A course can be recognised without being funded, and funding can be approved without creating a new catalogue course.

---

### 3.2 Officer Directory Lookup

The platform shall assume an existing officer list is available as the source of truth.

The platform must be able to:

- Query the existing officer list
- Search officers by name, company, email, rank, appointment, or status
- Reference officer records when creating training submissions and training records
- Use officer metadata to determine company, Captain, and Chaplain relationships
- Calculate officer training status against the applicable requirements matrix
- Surface sanity-check alerts where training completion and officer metadata appear inconsistent
- Treat officer profile creation, editing, assignment, adding, deleting, and archiving as out of scope

#### Officer Metadata

| Field | Type | Validation / Logic |
|---|---|---|
| Officer ID | External/System Reference | Must uniquely identify the officer from the existing officer list. |
| Full Name | Text | Must be available from the officer list. |
| Rank | Dropdown | Must be available from the officer list; used with appointment/status to determine applicable requirements. |
| Appointment | Text/Dropdown | Used with rank/status to determine appointment-based requirements. |
| Company | Dropdown | Must be available from the officer list. |
| Email | Email | Must be available from the officer list; used as the login identifier. |
| Phone Number | Text | Optional. |
| Status | Active/Inactive | Must be available from the officer list. Inactive officers should not be selectable for new submissions unless explicitly allowed by Training Comm. |
| Date Joined | Date | Optional. |
| Captain | User Reference | Must be available from the officer list; used to determine approval routing. |
| Chaplain | User Reference | Must be available from the officer list; used to determine approval routing. |

#### Officer Directory Logic

- Officer records are queried from an existing officer list and are not created or edited in this platform.
- The platform does not update officer rank, appointment, or status.
- The platform only calculates and displays whether training requirements are fulfilled, recommended, outstanding, or require sanity review.
- Example sanity check: officer has completed AOTC but rank remains 2LT.
- Officer-facing screens should remain simple and mobile-friendly.
- Training Comm may view expanded fulfilment reasons where needed.

#### Officer Training Status Labels

| Status Label | Meaning |
|---|---|
| Fulfilled | Applicable mandatory baseline or appointment requirements have been met. |
| Action Required | A mandatory or appointment requirement is outstanding. |
| Eligible for Progression | Progression-related pathway has been completed. |
| Progression Available | Optional next progression pathway exists but is not mandatory. |
| Recommended Training Pending | Good-to-have continuous training is outstanding. |
| Sanity Check | Training record and officer metadata may be inconsistent. |

---

### 3.3 Course Catalogue Management

The course catalogue is a controlled master list of recognised/selectable courses.

Training Comm must be able to:

- Create courses through Course Management only
- Edit course metadata
- Archive courses
- Classify courses as internal or external
- Define whether a course can be self-arranged
- Define whether a course can have Training Comm-organised offerings
- Define whether certificate upload is required
- Define whether the course is finance-eligible
- Manage course aliases for search and duplicate prevention
- Manage course preconditions, where applicable

#### Course Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course ID | System Generated | Must be unique. |
| Canonical Course Name | Text | Required. This is the controlled display name. |
| Course Aliases | Text List | Optional; used for search and matching common officer-entered names. |
| Description | Text | Optional. |
| Course Category | Dropdown/Text | Optional; e.g. First Aid, Leadership, Safety, Drill, Pastoral, etc. |
| Course Source | Dropdown: Internal / External | Required. |
| Provider | Reference/Text | Required for external courses. |
| Recognition Status | Dropdown | Draft / Recognised / Archived. Only recognised active courses are selectable by officers. |
| Self-Arrangement Allowed | Boolean | If true, officers may apply using their own provider/session dates. |
| Training Comm Offering Allowed | Boolean | If true, Training Comm may create official course offerings/sessions. |
| Certificate Required | Dropdown | Required / Not Applicable / Optional. Used to determine completion evidence requirements. |
| Finance Eligible | Boolean | Defines whether officer allowance/company funds can be applied. |
| Duration | Number | Must be a positive number when provided. |
| Preconditions | Course Foreign Keys | Optional; references other courses that should be completed before this course. |
| Active | Boolean | Archived courses should not be selectable for new submissions or added to new active curriculums. |

#### Course Logic

- Officers cannot directly create catalogue course records.
- Catalogue creation must not happen automatically from a training approval.
- Approval of a New as-is training request must not create or update a course catalogue record.
- If a New as-is request should later become part of the controlled catalogue, Training Comm must create or update the catalogue record separately through Course Management.
- Courses can be reused across multiple curriculums/pathways.
- Course preconditions must not create circular dependencies.
- Course aliases should be used to help officers find existing recognised courses without polluting the controlled course list.

---

### 3.4 Course Offering / Training Session Management

Course offerings represent scheduled runs of recognised courses.

Training Comm must be able to:

- Create course offerings for recognised courses
- Set offering dates and capacity
- Mark whether the offering is recurring or ad hoc
- Open/close offerings for officer application
- Cancel offerings where required

#### Course Offering Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Offering ID | System Generated | Must be unique. |
| Course | Course Reference | Required; must reference an active recognised course. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Provider | Reference/Text | Defaults from course but can be overridden if required. |
| Location / Mode | Text/Dropdown | Optional; e.g. physical, online, hybrid. |
| Capacity | Number | Optional; must be positive when provided. |
| Organised By Training Comm | Boolean | True where Training Comm liaises with the provider and publishes the session. |
| Recurrence Type | Dropdown | One-off / Recurring / Ad hoc. Used for administration only. |
| Application Open | Boolean | Closed offerings should not be selectable for new submissions. |
| Active | Boolean | Cancelled/archived offerings should not be selectable. |

#### Offering Logic

- Course dates belong to course offerings or self-arranged submissions, not to the course master record.
- Recurring vs ad hoc does not determine whether a course is recognised.
- A recognised course may have Training Comm-organised offerings and may also allow officers to self-arrange alternative dates, depending on the course setting.

---

### 3.5 Curriculum / Pathway Management

Curriculums are pathways made up of courses. Examples include OCO, BOTC, and AOTC.

Training Comm must be able to:

- Define curated curriculums/pathways from one or more courses
- Add mandatory and optional courses to a curriculum
- Reorder courses within a curriculum
- Set curriculum completion rules
- Map curriculum preconditions, where preconditions are other curriculums
- Archive curriculums that are no longer active

#### Curriculum Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Curriculum ID | System Generated | Must be unique. |
| Curriculum Name | Text | Required. |
| Description | Text | Optional. |
| Curriculum Type | Dropdown | Rank Pathway / Appointment Pathway / Reinstatement / Continuous Training / Other. |
| Courses | Course Foreign Keys | A curriculum must be linked to one or more courses. |
| Course Requirement Type | Per-course Dropdown | Mandatory / Optional. |
| Course Order | Number | Maintained per curriculum. |
| Completion Rule | Dropdown/Text | Complete all mandatory courses / Complete X of Y / Manual Training Comm verification. |
| Preconditions | Curriculum Foreign Keys | Optional; references other curriculums that should be completed before this curriculum. |
| Active | Boolean | Archived curriculums should not be selectable for new requirements. |

#### Curriculum Logic

- Curriculums/pathways define training structure only.
- Curriculums do not directly determine whether an officer is non-compliant.
- The Requirements Matrix determines how curriculums are applied to rank, appointment, reinstatement, and continuous training scenarios.
- A curriculum may contain one or more courses.
- A curriculum may contain both mandatory and optional courses.
- A course may be reused across multiple curriculums.
- Curriculum preconditions must not create circular dependencies.

#### Initial Curriculums / Pathways

| Curriculum / Pathway | Description |
|---|---|
| OCO | Officer Cadet pathway. Required for new officer progression and may be required for reinstatement scenarios. |
| BOTC | Basic Officers Training Course pathway. Relevant for officers pursuing progression from OCT to 2LT. |
| AOTC | Advanced Officers Training Course pathway. Relevant for officers pursuing progression from 2LT to LTA. |

---

### 3.6 Requirements Matrix Management

The Requirements Matrix defines training policy rules.

Training Comm must be able to manage requirements based on:

- Rank
- Appointment
- Officer status
- Target rank or appointment, where applicable
- Reinstatement scenarios
- Continuous training expectations

#### Requirement Categories

| Category | Meaning |
|---|---|
| Mandatory Baseline | Required for the officer's current role/status. Missing items should show as Action Required. |
| Progression Requirement | Required only if the officer is pursuing a target rank/appointment. Missing items should not automatically make the officer non-compliant. |
| Appointment Requirement | Required for a specific appointment. |
| Reinstatement Requirement | Required for inactive officers to be reinstated. |
| Recommended Continuous Training | Good-to-have training. Missing items should not show as compliance failure. |

#### Requirement Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Requirement ID | System Generated | Must be unique. |
| Requirement Name | Text | Required. |
| Requirement Category | Dropdown | Mandatory Baseline / Progression Requirement / Appointment Requirement / Reinstatement Requirement / Recommended Continuous Training. |
| Applies To Rank | Multi-select | Optional; used when requirement depends on current rank. |
| Target Rank | Dropdown | Optional; used for progression requirements. |
| Applies To Appointment | Text/Dropdown | Optional; used for appointment-based requirements. |
| Target Appointment | Text/Dropdown | Optional; used for appointment progression requirements. |
| Applies To Status | Dropdown | Optional; e.g. Active / Inactive. |
| Fulfilled By Type | Dropdown | Course / Curriculum / Manual Condition / Equivalent Mapping / Combination. |
| Required Courses | Course Foreign Keys | Optional. |
| Required Curriculums | Curriculum Foreign Keys | Optional. |
| Non-Course Requirement Details | Text | Optional; used for requirements not fulfilled by courses/curriculums. |
| Equivalent Mapping Allowed | Boolean | If true, Training Comm-approved equivalent mappings may fulfil the requirement. |
| Active | Boolean | Inactive requirements should not be used for fulfilment checks. |

#### Requirements Matrix Logic

- The platform shall compare officer training records against the applicable requirements matrix.
- Rank alone must not imply that a progression pathway is mandatory.
- Example: A 2LT who has not taken AOTC should not automatically be marked Not Fulfilled unless they are pursuing LTA or AOTC is explicitly defined as mandatory for their appointment/status.
- Officer-facing screens should show simple status labels.
- Training Comm may expand a status to view the reason, e.g. missing BOTC record, certificate expired, equivalent mapping pending, or sanity check triggered.
- Only catalogue courses, curriculums, or Training Comm-approved equivalent mappings should fulfil formal requirements by default.
- New as-is trainings do not fulfil requirements unless mapped as Exact Match or approved Equivalent, subject to the requirement rule.

#### Initial Requirements Matrix

| Requirement | Category | Applies To | Fulfilment Logic |
|---|---|---|---|
| New officer progression to OCT | Progression Requirement | New officer / target rank OCT | Complete OCO pathway. |
| Reinstatement after inactive status | Reinstatement Requirement | Inactive officers | Complete OCO pathway or Training Comm-approved reinstatement equivalent. |
| Progression to 2LT | Progression Requirement | Current rank OCT / target rank 2LT | Complete BOTC pathway. |
| Progression to LTA | Progression Requirement | Current rank 2LT / target rank LTA | Complete AOTC pathway. |
| Continuous training | Recommended Continuous Training | Active officers | Recommended courses/curriculums as defined by Training Comm. |

---

### 3.7 Training Submission Management

Officers must be able to submit training requests for:

- Themselves
- A group of officers

#### Submission Types

| Submission Type | Meaning |
|---|---|
| Catalogue Offering | Officer selects a recognised course and a Training Comm-published session/date. |
| Self-arranged Catalogue Course | Officer selects a recognised course but enters own training dates/provider arrangement where allowed. |
| New as-is Training | Officer enters free-text training details because the training is not selected from the controlled course catalogue. |

#### Common Submission Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Submission ID | System Generated | Must be unique. |
| Submitted By | Officer Reference | Auto-populated from the logged-in user. |
| Submission Type | Dropdown | Catalogue Offering / Self-arranged Catalogue Course / New as-is Training. |
| Submission For | Dropdown | Myself / Group. |
| Participants | Officer References | Required when Submission For is Group. |
| Remarks | Text | Optional. |
| Submission Status | System | Auto-managed by workflow. |
| Current Approver | System | Auto-managed by workflow. |
| Submitted Timestamp | System | Auto-generated on submission. |

#### Participant Eligibility Logic

- Eligibility checks must be performed per participant.
- If one participant is ineligible, only that participant should be excluded.
- The entire group submission should not be blocked unless no participants remain eligible.
- The UI should show the number of selected, eligible, and excluded participants.
- Excluded participant reasons should be viewable on expand.

Example:

```text
12 selected
10 eligible
2 excluded
```

---

### 3.8 Catalogue Offering Submission

Catalogue Offering submissions are used when Training Comm has published a recognised course session.

#### Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course | Course Reference | Required; must be an active recognised course. |
| Offering | Course Offering Reference | Required; must be open for application. |
| Participants | Officer References | Required based on Submission For. |
| Course Fee | Currency | Defaults from offering/course where available; must be zero or greater. |
| Funding Mode | Dropdown | Officer Annual Allowance / Self-Pay / Company Funds / No Cost. |
| Remarks | Text | Optional. |

#### Workflow

```text
Officer Submission
   ↓
Captain Approval
   ↓
Chaplain Approval
   ↓
Training Comm Funding Release, if funding is required
   ↓
Approved to Attend
   ↓
Completion Evidence Upload, unless not applicable
   ↓
Training Record Created
```

#### Logic

- Training Comm does not need to re-review course recognition for Catalogue Offering submissions.
- Training Comm funding release is required before any officer allowance or company funds are committed.
- If the course is free and no funding is required, funding release may be marked as Not Applicable.

---

### 3.9 Self-arranged Catalogue Course Submission

Self-arranged Catalogue Course submissions are used when the course is recognised, but the officer arranges the session directly with the provider.

#### Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Course | Course Reference | Required; must be an active recognised course with Self-Arrangement Allowed = true. |
| Provider | Text/Reference | Defaults from course but can be updated if required. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Course Fee | Currency | Required and must be zero or greater. |
| Funding Mode | Dropdown | Officer Annual Allowance / Self-Pay / Company Funds / No Cost. |
| Certificate Upload | File | Not required at application stage. Required at completion stage unless Certificate Required = Not Applicable. |
| Remarks | Text | Optional. |

#### Workflow

```text
Officer Submission
   ↓
Captain Approval
   ↓
Chaplain Approval
   ↓
Training Comm Funding Release, if funding is required
   ↓
Approved to Attend
   ↓
Completion Evidence Upload, unless not applicable
   ↓
Training Record Created
```

#### Logic

- Training Comm does not need to re-review course recognition for self-arranged recognised courses.
- The officer-entered dates apply only to that submission and do not update the course catalogue.

---

### 3.10 New as-is Training Submission and Catalogue Mapping

New as-is Training submissions are used when the officer wants to apply for training that is not selected from the controlled course catalogue.

This does not mean the officer is creating a new catalogue course. The submitted details are stored as-is for that submission.

#### Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Submitted Course Name | Free-text | Required. Preserved as originally submitted. |
| Submitted Provider Name | Free-text | Required. Preserved as originally submitted. |
| Course URL / Brochure | URL/File | Optional but recommended. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Course Fee | Currency | Required and must be zero or greater. |
| Minimum Pax to Start Course | Number | Optional; must be at least 1 when provided. |
| Description | Text | Required. |
| Objective | Text | Required. |
| Justification | Text | Required. |
| Funding Mode | Dropdown | Officer Annual Allowance / Self-Pay / Company Funds / No Cost. |
| Certificate Upload | File | Not required at application stage. Required at completion stage unless Training Comm marks certificate as not applicable. |

#### Training Comm Mapping Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Mapped Course | Course Reference | Optional; Training Comm may map the submission to an existing catalogue course. |
| Mapping Type | Dropdown | Exact Match / Equivalent / Related Only / Unmapped. |
| Mapping Remarks | Text | Required when Mapping Type is Equivalent or Related Only. |
| Mapping Reviewed By | User Reference | Auto-populated when mapping is saved. |
| Mapping Reviewed Timestamp | System | Auto-generated. |
| Certificate Requirement Override | Dropdown | Required / Not Applicable / Optional. Used where the submission is not mapped to a catalogue course. |

#### Mapping Type Logic

| Mapping Type | Meaning | Requirement Fulfilment Impact |
|---|---|---|
| Exact Match | Officer's submitted training is the same as an existing catalogue course. | May fulfil requirements linked to the mapped course. |
| Equivalent | Training is not identical but Training Comm accepts it as equivalent. | May fulfil requirements only where equivalent mapping is allowed. |
| Related Only | Training is related but not accepted as fulfilling the requirement. | Does not fulfil formal requirements. Useful for reporting only. |
| Unmapped | Training remains standalone New as-is training. | Does not fulfil formal requirements unless a separate manual override exists. |

#### New as-is Workflow

```text
Officer Submission
   ↓
Captain Approval
   ↓
Chaplain Approval
   ↓
Training Comm Training Review
      - approve / reject / return request
      - optionally map to existing catalogue course
      - set certificate requirement if unmapped
   ↓
Training Comm Funding Release, if funding is required
   ↓
Approved to Attend
   ↓
Completion Evidence Upload, unless not applicable
   ↓
Training Record Created
```

#### New as-is Logic

- New as-is submitted course details must be preserved for audit purposes.
- Training Comm may update mapping details, but should not overwrite the original submitted course name/provider.
- Mapping a New as-is request to an existing catalogue course does not create a new catalogue course.
- Approval of New as-is training does not automatically create or update a course catalogue record.
- If Training Comm wants the training to become selectable in future, Training Comm must create or update the course separately through Course Management.
- New as-is training records should display the mapped catalogue course where available and preserve the original submitted name on expand.

Example display:

```text
Singapore Red Cross - Standard First Aid + AED
Originally submitted as: Red Cross first aid course
Mapping: Exact Match
```

---

### 3.11 Approval Workflow Rules

#### Approval Stages

| Stage | Required For | Purpose |
|---|---|---|
| Captain Approval | All submissions | Company-level review of training need, participant suitability, and funding implications. |
| Chaplain Approval | All submissions | Leadership review after Captain approval. |
| Training Comm Training Review | New as-is submissions only | Review whether the training request is acceptable and optionally map it to the catalogue. |
| Training Comm Funding Release | Any submission consuming officer allowance or company funds | Approve funding commitment before budget is committed. |

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
| Approval Stage | Dropdown | Captain / Chaplain / Training Comm Training Review / Training Comm Funding Release. |
| Action | Dropdown | Approve / Reject / Return. |
| Remarks | Text | Required when rejecting or returning a submission. Required for company-fund approvals. |
| Timestamp | System | Auto-generated when the approval action is submitted. |

#### Approval Logic

- Every approval action must be retained in chronological order.
- Captain approval must happen before Chaplain approval.
- Chaplain approval must happen before Training Comm review/funding release where applicable.
- Training Comm course/training review and funding release are separate concepts, even if performed by the same user.
- Recognised catalogue submissions skip Training Comm training review but may still require Training Comm funding release.
- A submission becomes Approved to Attend only after all required approval stages are completed.
- A training record must not be created at approval stage.

---

### 3.12 Completion Evidence and Training Records

Training records represent completed trainings.

Training records must originate from approved submissions after completion conditions are met.

#### Training Record Creation Rule

The system shall create a training record only when:

```text
Approved to Attend submission
+ Course/training end date reached or completion marked
+ Certificate/evidence uploaded, unless certificate is not applicable
+ Completion validation passed
```

#### Certificate Logic

| Certificate Setting | Completion Requirement |
|---|---|
| Required | Certificate/evidence upload is mandatory before training record creation. |
| Not Applicable | Training record can be created without certificate upload. |
| Optional | Certificate upload is allowed but not required. |

#### Training Record Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Training Record ID | System Generated | Must be unique. |
| Officer | Reference | Must reference an officer from the existing officer list. |
| Source Submission | Reference | Required. |
| Catalogue Course | Course Reference | Optional; populated when submission is a catalogue course or New as-is mapped to catalogue. |
| Curriculum | Reference | Optional; derived where the completed course contributes to a curriculum/pathway. |
| Original Submitted Training Name | Text | Required for New as-is submissions. |
| Training Provider | Text/Reference | Required where available from course/submission. |
| Start Date | Date | Required. |
| End Date | Date | Required and must be on or after Start Date. |
| Certificate Upload | File | Required unless certificate is not applicable. |
| Expiry Date | Date | Optional; captured only when the completed training/certificate has an expiry date. |
| Mapping Type | Dropdown | Optional; populated for New as-is mapped submissions. |
| Status | Completed / Expired | Auto-derived from completion and expiry dates where possible. |
| Created Timestamp | System | Auto-generated when record is created. |

#### Training Record Logic

- Training records are historical records of what an officer has completed or attended.
- Training records must not be treated as the source list of available curriculums or courses.
- Training records should be created by the system, not manually created as standalone records.
- Training Comm may validate completion evidence where required.
- Expired certifications should not fulfil requirements that require a currently valid certification.

---

### 3.13 Finance Management

Each officer is allocated $200 per calendar year for course funding.

#### Finance Rules

| Rule | Requirement |
|---|---|
| Annual Allowance | $200 per officer per calendar year. |
| Expiry | Unused balance expires at the end of the calendar year. No carry-forward. |
| Applies To | Courses only. Does not apply directly to curriculums/pathways. |
| Budget Year | Based on course/training start date. |
| Commitment Point | Budget is committed only after Training Comm funding release approval. |
| Usage Point | Budget is marked as used only after training record is created. |

#### Funding Modes

| Funding Mode | Meaning |
|---|---|
| Officer Annual Allowance | Uses the officer's annual $200 course allowance. |
| Self-Pay | Officer pays the shortfall or full amount personally. |
| Company Funds | Company pays the shortfall or full amount. Captain and Chaplain must approve with caution. |
| No Cost | No funding required. |

#### Officer Budget Fields

| Field | Type | Validation / Logic |
|---|---|---|
| Officer | Reference | Required. |
| Budget Year | Year | Calendar year. |
| Annual Allowance | Currency | Defaults to $200. |
| Pending Amount | Currency | Submitted but not yet released by Training Comm. |
| Committed Amount | Currency | Approved by Training Comm funding release but not yet completed. |
| Used Amount | Currency | Completed training records consuming allowance. |
| Released Amount | Currency | Amount released due to rejection, cancellation, expiry, or withdrawal. |
| Available Balance | Currency | Annual Allowance minus Committed Amount minus Used Amount. |

#### Budget Transaction States

| State | Meaning |
|---|---|
| Pending | Submission created but funding has not yet been released by Training Comm. |
| Committed | Training Comm approved funding release. |
| Used | Training record created after completion. |
| Released | Submission rejected, cancelled, expired, or withdrawn. |
| Not Applicable | No funding is required. |

#### Course Cost and Shortfall Logic

If course cost exceeds the officer's available allowance, the officer must select how the shortfall will be handled:

| Option | Logic |
|---|---|
| Self-Pay | Officer acknowledges that they will pay the shortfall. |
| Company Funds | Company-fund amount and justification are required. Captain and Chaplain must see explicit warning before approval. |

Example:

```text
Course Fee: $280
Officer Allowance Available: $200
Shortfall: $80
Funding Selection: Company Funds
```

Captain and Chaplain must see:

```text
Company Funds Requested: $80
Approval of this submission authorises use of company funds. Please review with caution.
```

#### Group Submission Finance Logic

- Finance calculation must be performed per participant.
- If one participant has insufficient allowance and does not choose self-pay/company funds, only that participant should be excluded.
- The whole group submission should not be blocked unless no participants remain eligible.
- Company funds must be shown clearly to Captain and Chaplain for each affected participant.

---

### 3.14 Dashboards and Reporting

#### Officer Dashboard

Features:

- Own training records
- Pending submissions
- Approved to Attend submissions
- Completion evidence pending
- Expiring certifications
- Mandatory/action-required training status
- Progression available status
- Recommended continuous training
- Annual course allowance balance

#### Captain Dashboard

Features:

- Officers under their company
- Officers' training progress
- Pending approvals queue
- Funding requests requiring caution
- Company training compliance overview
- Expiring certifications
- Company-fund usage overview

Suggested metrics:

| Metric |
|---|
| Total Officers |
| Trainings Completed |
| Trainings Expiring Soon |
| Pending Approvals |
| Action Required Count |
| Eligible for Progression Count |
| Officer Allowance Used |
| Company Funds Requested/Approved |

#### Chaplain Dashboard

Features:

- Officers under assigned companies
- Approval queue
- Training compliance overview
- Expiring certifications
- Funding requests requiring caution

#### Training Comm Dashboard

Features:

- Global training statistics
- Pending approvals
- New as-is training review queue
- Funding release queue
- Course catalogue management
- Course offering/session management
- Curriculum/pathway management
- Requirements matrix management
- Officer list lookup
- Compliance tracking
- Budget and funding reports
- Export reports

#### Exports

Training Comm must be able to export:

- Officer training history
- Company compliance reports
- Expiring certifications report
- Pending approvals report
- New as-is submissions report
- Course catalogue report
- Curriculum/pathway report
- Annual allowance usage report
- Company funds usage report

Supported export formats:

- CSV
- Excel

---

### 3.15 Notifications and User Feedback

Toast notifications shall be used for immediate user feedback, including:

- Submission created
- Submission approved
- Submission rejected
- Submission returned for amendment
- Completion evidence uploaded
- Training record created
- Funding released
- Company funds warning acknowledged
- Submission validation errors
- Draft or form save status

Where required, the system should also provide in-app notifications for:

- Pending approvals
- Returned submissions
- Completion evidence reminders
- Expiring certifications
- Funding release actions

---

### 3.16 Audit Trail

All major actions within the platform must be logged.

#### Audit Events

- Login activity
- Submission creation
- Submission amendment
- Submission approval/rejection/return
- Training Comm mapping updates for New as-is submissions
- Completion evidence upload
- Training record creation
- Course catalogue updates
- Course offering updates
- Curriculum/pathway updates
- Requirements matrix updates
- Funding release approval
- Budget transaction state changes
- Company-fund approvals
- Role changes

#### Audit Logic

- Audit logs must retain who performed the action, what changed, when it changed, and the relevant record reference.
- Original New as-is submitted course details must remain preserved even if Training Comm maps the submission to a catalogue course.
- Approval history must remain chronological and viewable by authorised users.

---

### 3.17 Suggested Database Tables

| Table | Purpose |
|---|---|
| users | Authenticated platform users and roles. |
| officers | Cached/reference officer records from the external officer list. |
| companies | Company metadata. |
| courses | Controlled course catalogue. |
| course_aliases | Alternate course names for search/matching. |
| providers | Provider master records. |
| provider_aliases | Alternate provider names for search/matching. |
| course_offerings | Scheduled course sessions. |
| curriculums | Curriculum/pathway master records. |
| curriculum_courses | Course-to-curriculum mapping with order and mandatory/optional flag. |
| requirements_matrix | Requirement rules by rank, appointment, status, and category. |
| requirement_courses | Course mappings for requirements. |
| requirement_curriculums | Curriculum mappings for requirements. |
| training_submissions | Main submission records. |
| training_submission_participants | Participant-level submission records and eligibility results. |
| new_as_is_training_details | Free-text submitted training details for New as-is submissions. |
| submission_course_mappings | Training Comm mapping of New as-is submissions to catalogue courses. |
| approval_logs | Chronological approval history. |
| completion_evidence | Uploaded certificates/evidence. |
| training_records | System-created completed training records. |
| officer_training_budgets | Annual officer course allowance balances. |
| budget_transactions | Pending/committed/used/released funding transactions. |
| audit_logs | System audit trail. |

---

## 4. Authentication & Access

- Publicly accessible web application
- Email/password login
- Role-based access control (RBAC)
- Single account per officer
- Users can only access authorised records

### Roles

| Role | Permissions | Validation / Logic |
|---|---|---|
| Officer | Submit forms, view own trainings, upload completion evidence, view own allowance balance | Officers can only view their own training records, submissions, and funding usage. |
| Captain | View officers under company, approve/reject/return submissions, review company-fund requests | Captains can only view officers under their company. Company-fund warnings must be explicit. |
| Chaplain | Review approvals after Captain, view assigned officers/companies, review company-fund requests | Chaplains can only view officers under assigned companies. |
| Training Comm | Full training administration | Training Comm manages catalogue, offerings, curriculums, requirements matrix, New as-is mapping, funding release, reports, and audit review. |

### Access Logic

- Users must authenticate with email and password.
- Each officer should have only one account.
- Users can only perform actions allowed by their assigned role.
- Role assignment and changes must be audited.
- Mobile usability should be prioritised for officer, Captain, and Chaplain workflows.
