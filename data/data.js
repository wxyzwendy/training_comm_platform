/* ================================================================
   data.js — BB Training Portal shared data store
   Load BEFORE each page's own <script>.
   ================================================================ */
'use strict';

const BB = {};

// ── 1. Officers ──────────────────────────────────────────────────
// status: 'active' | 'inactive'
// Inactive officers are excluded from normal course selections;
// specific curriculum eligibility to be defined separately.
BB.officers = {
  tg: { id:'tg', name:'Theodor Gunawan', initials:'TG', rank:'LTA',  company:'Alpha', role:'officer',  status:'active',   bg:'#dbeafe', fg:'#1d4ed8' },
  js: { id:'js', name:'John Seet',       initials:'JS', rank:'LTA',  company:'Alpha', role:'captain',  status:'active',   bg:'#dcfce7', fg:'#166534' },
  jg: { id:'jg', name:'Joseph Goh',      initials:'JG', rank:'Rev',  company:null,    role:'chaplain', status:'active',   bg:'#fef9c3', fg:'#713f12' },
  wt: { id:'wt', name:'Wendy Tio',       initials:'WT', rank:'2LT',  company:null,    role:'comm',     status:'active',   bg:'#fef3c7', fg:'#b45309' },
  pr: { id:'pr', name:'Priya Raj',       initials:'PR', rank:'2LT',  company:'Alpha', role:'officer',  status:'active',   bg:'#f3e8ff', fg:'#7c3aed' },
  sl: { id:'sl', name:'Samuel Lim',      initials:'SL', rank:'2LT',  company:'Alpha', role:'officer',  status:'inactive', bg:'#fef9c3', fg:'#854d0e' },
  aw: { id:'aw', name:'Ahmad Wafi',      initials:'AW', rank:'OCT',  company:'Bravo', role:'officer',  status:'active',   bg:'#f4f4f5', fg:'#71717a' },
  ly: { id:'ly', name:'Lena Yeo',        initials:'LY', rank:'LT',   company:'Alpha', role:'officer',  status:'inactive', bg:'#fce7f3', fg:'#9d174d' },
};

// ── 2. Pre-approved course catalogue ─────────────────────────────
BB.courses = {
  fa1:         { name:’First Aid Level 1’,                   category:’First Aid & Safety’,    provider:’Red Cross Singapore’,                    duration:’3 days’, cert:’Yes · 2-year validity’,  description:’A comprehensive first aid course covering recognition and management of medical emergencies, wound care, fractures, shock, and basic life support.’,                                                                         objectives:[‘Recognise and respond to a range of medical emergencies’,’Perform basic wound care, bandaging, and fracture management’,’Assist casualties experiencing shock, burns, or sudden illness’] },
  fa2:         { name:’First Aid Level 2’,                   category:’First Aid & Safety’,    provider:’Red Cross Singapore’,                    duration:’4 days’, cert:’Yes · 2-year validity’,  description:’Advanced first aid course covering all Level 1 content plus rescue breathing, spinal injury management, and triage for mass casualty situations.’,                                                                           objectives:[‘Apply advanced first aid techniques including spinal precautions’,’Perform rescue breathing and manage airway obstructions’,’Conduct basic triage in mass casualty scenarios’] },
  cpr:         { name:’CPR + AED Certification’,             category:’First Aid & Safety’,    provider:’Singapore Heart Foundation’,             duration:’1 day’,  cert:’Yes · 2-year validity’,  description:’Teaches cardiopulmonary resuscitation (CPR) and the use of automated external defibrillators (AED) for emergency cardiac response for adults, children, and infants.’,                                                       objectives:[‘Perform hands-on CPR on adults, children, and infants’,’Operate an AED device confidently in an emergency’,’Understand the chain of survival and when to call for help’] },
  rifle:       { name:’Rifle Range Safety’,                  category:’First Aid & Safety’,    provider:"Boys’ Brigade Singapore HQ",             duration:’1 day’,  cert:’Yes · 3-year validity’,  description:’Range Safety Officer certification required to supervise BB rifle shooting activities. Covers range commands, safety protocols, and emergency procedures.’,                                                                   objectives:[‘Conduct safe and compliant rifle range sessions for Boys’,’Issue and enforce range commands according to BB protocols’,’Respond appropriately to range emergencies and incidents’] },
  oco:         { name:’OCO — Officer Cadet Officers Course’,  category:’Officer Track’,         provider:"Boys’ Brigade Singapore HQ",             duration:’5 days’, cert:’Yes · No expiry’,        description:"Entry-level foundation course for all new BB officers. Covers BB history and philosophy, programme planning, pastoral care, and administrative responsibilities.",                                                            objectives:["Understand the vision, mission, and heritage of the Boys’ Brigade","Plan and execute age-appropriate BB programmes","Fulfil the OCO requirement for formal officer appointment"] },
  botc:        { name:’BOTC — Basic Officer Training Course’, category:’Officer Track’,         provider:"Boys’ Brigade Singapore HQ",             duration:’5 days’, cert:’Yes · No expiry’,        description:’Intermediate course for practising officers. Deepens programme planning skills, introduces mentoring and leadership principles, and covers company administrative management.’,                                               objectives:[‘Design and evaluate structured BB programmes for different age groups’,’Apply mentoring and coaching techniques with junior officers’,’Manage company administration and records effectively’] },
  aotc:        { name:’AOTC — Advanced Officer Training Course’, category:’Officer Track’,      provider:"Boys’ Brigade Singapore HQ",             duration:’5 days’, cert:’Yes · No expiry’,        description:’Senior-level course preparing officers for captaincy. Covers strategic programme design, financial management, officer development, and company leadership.’,                                                                objectives:[‘Lead and develop a team of junior officers’,’Formulate long-term company strategy aligned with BB objectives’,’Fulfil the AOTC requirement for LTA to Captain promotion’] },
  safeguard:   { name:’Safeguarding Children & Youth’,        category:’Safeguarding & Welfare’, provider:’Ministry of Social and Family Development’, duration:’1 day’, cert:’Yes · 3-year validity’, description:’Mandatory certification for all officers working with minors. Covers recognition of abuse and neglect, reporting obligations, and principles for safe programming.’,                                                         objectives:[‘Identify signs of abuse, neglect, and exploitation in youth’,’Understand statutory reporting obligations and procedures’,’Implement safe programming principles in BB activities’] },
  mentalhealth:{ name:’Youth Mental Health Awareness’,        category:’Safeguarding & Welfare’, provider:’Institute of Mental Health’,             duration:’1 day’,  cert:’Yes · No expiry’,        description:’Workshop equipping officers to recognise and respond to mental health challenges in youth, with strategies for pastoral support and referral.’,                                                                               objectives:[‘Identify signs of stress, anxiety, and depression in youth’,’Apply practical pastoral support strategies in a BB context’,’Know when and how to refer youth to professional help’] },
  youthwork:   { name:’Youth Work Certificate’,               category:’Youth Development’,     provider:’National Youth Council’,                 duration:’3 days’, cert:’Yes · No expiry’,        description:’Foundational certificate in youth development practice covering theories of adolescent development, facilitation skills, and programme design.’,                                                                              objectives:[‘Apply key theories of adolescent development to programming’,’Facilitate group activities and discussions with youth effectively’,’Design youth development programmes with clear outcomes’] },
  outdoor:     { name:’Outdoor Adventure Leadership’,         category:’Youth Development’,     provider:’Outward Bound Singapore’,                duration:’5 days’, cert:’Yes · No expiry’,        description:’Leadership development through outdoor challenges, covering expedition planning, campcraft, navigation, risk management, and group dynamics facilitation.’,                                                                   objectives:[‘Plan and lead safe outdoor expeditions and activities’,’Apply risk assessment and management for outdoor environments’,’Facilitate group learning through outdoor challenge experiences’] },
  drill:       { name:’Drill Instruction Course’,             category:’Drill & Leadership’,    provider:"Boys’ Brigade Singapore HQ",             duration:’2 days’, cert:’Yes · No expiry’,        description:’Covers precision drill commands, marching formations, and instructional techniques for conducting drill sessions with BB Boys and junior officers.’,                                                                           objectives:[‘Issue and correct drill commands to the required standard’,’Lead marching formations and ceremonial parades’,’Teach drill to Boys and junior officers systematically’] },
};

// ── 3. Training Records ───────────────────────────────────────────
BB.records = [
  // Theodor Gunawan (tg) — LTA, Alpha
  { id:'tg-oco',          officerId:'tg', courseKey:'oco',         category:'mandatory', completed:'15 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0043' },
  { id:'tg-botc',         officerId:'tg', courseKey:'botc',        category:'mandatory', completed:'5 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0112' },
  { id:'tg-cpr',          officerId:'tg', courseKey:'cpr',         category:'recurring', completed:'22 Jan 2023', expiry:'21 Jun 2025', status:'expiring', certNo:'SHF-CPR-2023-7841', expiryNote:'28 days left' },
  { id:'tg-safeguard',    officerId:'tg', courseKey:'safeguard',   category:'mandatory', completed:'10 Aug 2022', expiry:'10 Aug 2025', status:'active',   certNo:'MSF-SCY-2022-3310' },
  { id:'tg-mentalhealth', officerId:'tg', courseKey:'mentalhealth',category:'elective',  completed:'3 Mar 2023',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2023-0087' },
  { id:'tg-rifle',        officerId:'tg', courseKey:'rifle',       category:'elective',  completed:'18 Nov 2022', expiry:'18 Nov 2025', status:'active',   certNo:'BB-RSA-2022-0204' },
  { id:'tg-outdoor',      officerId:'tg', courseKey:'outdoor',     category:'elective',  completed:'2 Jul 2021',  expiry:null,          status:'active',   certNo:'OBS-OAL-2021-1152' },
  { id:'tg-drill',        officerId:'tg', courseKey:'drill',       category:'elective',  completed:'14 Sep 2020', expiry:null,          status:'active',   certNo:'BB-DIC-2020-0078' },
  // John Seet (js) — LTA/Captain, Alpha
  { id:'js-oco',          officerId:'js', courseKey:'oco',         category:'mandatory', completed:'12 Jan 2019', expiry:null,          status:'active',   certNo:'OCO-2019-0021' },
  { id:'js-botc',         officerId:'js', courseKey:'botc',        category:'mandatory', completed:'8 Mar 2020',  expiry:null,          status:'active',   certNo:'BOTC-2020-0044' },
  { id:'js-aotc',         officerId:'js', courseKey:'aotc',        category:'mandatory', completed:'5 Jun 2021',  expiry:null,          status:'active',   certNo:'AOTC-2021-0009' },
  { id:'js-fa2',          officerId:'js', courseKey:'fa2',         category:'mandatory', completed:'20 May 2021', expiry:'20 May 2023', status:'expired',  certNo:'RC-FA2-2021-0558' },
  { id:'js-safeguard',    officerId:'js', courseKey:'safeguard',   category:'mandatory', completed:'14 Mar 2022', expiry:'14 Mar 2025', status:'active',   certNo:'MSF-SCY-2022-1104' },
  { id:'js-cpr',          officerId:'js', courseKey:'cpr',         category:'recurring', completed:'9 Feb 2023',  expiry:'9 Feb 2025',  status:'active',   certNo:'SHF-CPR-2023-2291' },
  { id:'js-mentalhealth', officerId:'js', courseKey:'mentalhealth',category:'elective',  completed:'3 Aug 2022',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0044' },
  // Joseph Goh (jg) — Chaplain
  { id:'jg-orientation',  officerId:'jg', courseName:'BB Chaplaincy Orientation', provider:"Boys' Brigade Singapore HQ",
    category:'mandatory', completed:'5 Aug 2017', expiry:null, status:'active', certNo:'CHAP-2017-0003',
    description:"Foundation orientation covering the role and responsibilities of a BB Chaplain, pastoral principles, and safeguarding in a youth organisation context." },
  { id:'jg-safeguard',    officerId:'jg', courseKey:'safeguard',   category:'mandatory', completed:'20 Jan 2022', expiry:'20 Jan 2025', status:'active',   certNo:'MSF-SCY-2022-0088' },
  { id:'jg-mentalhealth', officerId:'jg', courseKey:'mentalhealth',category:'mandatory', completed:'11 Mar 2022', expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0019' },
  { id:'jg-cpr',          officerId:'jg', courseKey:'cpr',         category:'recurring', completed:'14 Feb 2024', expiry:'14 Feb 2026', status:'active',   certNo:'SHF-CPR-2024-0312' },
  { id:'jg-pastoral',     officerId:'jg', courseName:'Pastoral Care in Youth Organisations', provider:'Trinity Theological College',
    category:'elective', completed:'7 Oct 2020', expiry:null, status:'active', certNo:'TTC-PCYO-2020-0041',
    description:'Covers pastoral counselling techniques, crisis response, and spiritual formation within youth ministry contexts.' },
  // Wendy Tio (wt) — Training Comm
  { id:'wt-safeguard',    officerId:'wt', courseKey:'safeguard',   category:'mandatory', completed:'5 Apr 2023',  expiry:'5 Apr 2026',  status:'active',   certNo:'MSF-SCY-2023-0441' },
  { id:'wt-mentalhealth', officerId:'wt', courseKey:'mentalhealth',category:'elective',  completed:'8 Sep 2022',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0071' },
  // Priya Raj (pr) — 2LT, Alpha
  { id:'pr-oco',          officerId:'pr', courseKey:'oco',         category:'mandatory', completed:'12 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0039' },
  { id:'pr-botc',         officerId:'pr', courseKey:'botc',        category:'mandatory', completed:'4 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0108' },
  { id:'pr-aotc',         officerId:'pr', courseKey:'aotc',        category:'mandatory', completed:'18 Jun 2023', expiry:null,          status:'active',   certNo:'AOTC-2023-0022' },
  // Samuel Lim (sl) — 2LT, Alpha
  { id:'sl-oco',          officerId:'sl', courseKey:'oco',         category:'mandatory', completed:'14 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0041' },
  { id:'sl-botc',         officerId:'sl', courseKey:'botc',        category:'mandatory', completed:'6 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0114' },
  { id:'sl-cpr',          officerId:'sl', courseKey:'cpr',         category:'recurring', completed:'10 Jan 2023', expiry:'30 Jun 2025', status:'expiring', certNo:'SHF-CPR-2023-0944', expiryNote:'37 days left' },
  // Ahmad Wafi (aw) — OCT, Bravo
  { id:'aw-oco',          officerId:'aw', courseKey:'oco',         category:'mandatory', completed:'16 Jan 2023', expiry:null,          status:'active',   certNo:'OCO-2023-0007' },
  { id:'aw-cpr',          officerId:'aw', courseKey:'cpr',         category:'recurring', completed:'5 Mar 2023',  expiry:'5 Mar 2025',  status:'active',   certNo:'SHF-CPR-2023-3102' },
  // Lena Yeo (ly) — LT, Alpha
  { id:'ly-aotc',         officerId:'ly', courseKey:'aotc',        category:'mandatory', completed:'2 Jul 2022',  expiry:null,          status:'active',   certNo:'AOTC-2022-0015' },
];

// ── 4. Submissions ────────────────────────────────────────────────
// stage: 'captain' | 'chaplain' | 'comm' | 'done'
BB.submissions = {
  'SUB-00045': {
    ref:'SUB-00045', officerId:'tg', courseKey:'oco', type:'preapproved',
    dates:'15 Jan 2021', submitted:'5 Nov 2020', cost:'Nil',
    status:'approved', stage:'done',
    purpose:'Entry-level officer course. Fulfils OCO requirement for officer appointment.',
    remarks:'Certificate issued by BB HQ.',
  },
  'SUB-00071': {
    ref:'SUB-00071', officerId:'tg', courseKey:'botc', type:'preapproved',
    dates:'5 Mar 2022', submitted:'10 Feb 2022', cost:'Nil',
    status:'approved', stage:'done',
    purpose:'Fulfils BOTC requirement for LTA consideration.',
    remarks:'Certificate issued by BB HQ.',
  },
  'SUB-00098': {
    ref:'SUB-00098', officerId:'tg', courseKey:'cpr', type:'preapproved',
    dates:'22 Jan 2023', submitted:'3 Jan 2023', cost:'Nil (company-sponsored)',
    status:'approved', stage:'done',
    purpose:'CPR+AED certification for camp and activity facilitation.',
    remarks:'Approved. Certificate expires 21 Jun 2025.',
  },
  'SUB-00124': {
    ref:'SUB-00124', officerId:'tg', courseKey:'fa1', type:'preapproved',
    dates:'10–12 Jun 2025', submitted:'22 May 2025', cost:'Nil (company-sponsored)',
    status:'pending', stage:'chaplain',
    purpose:'Renewing First Aid certification before expiry to maintain readiness for camp and activity facilitation.',
    remarks:'Approved by LTA Seet on 23 May 2025. Forwarded to Chaplain for endorsement.',
    captainApproved:'LTA John Seet · 23 May 2025',
  },
  'SUB-00127': {
    ref:'SUB-00127', officerId:'tg', courseName:'Leadership & Management Workshop', provider:'NTUC Learning Hub', type:'new',
    dates:'15–16 Jul 2025', submitted:'23 May 2025', cost:'$120 / pax',
    status:'pending', stage:'captain',
    purpose:'Relevant to leadership development required for LTA progression. Course covers conflict resolution and team management.',
    remarks:'Pending initial review by LTA Seet.',
  },
  'SUB-00129': {
    ref:'SUB-00129', officerId:'aw', courseKey:'safeguard', type:'preapproved',
    dates:'7 Jun 2025', submitted:'19 May 2025', cost:'Nil',
    status:'pending', stage:'chaplain',
    purpose:'Mandatory certification renewal. Needed to remain authorised for youth-facing programme roles.',
    captainApproved:'Capt Marcus Ng · 21 May 2025',
  },
  'SUB-00131': {
    ref:'SUB-00131', officerId:'pr', courseKey:'youthwork', type:'preapproved',
    dates:'2–4 Jun 2025', submitted:'22 May 2025', cost:'Nil (company-sponsored)',
    status:'pending', stage:'captain',
    purpose:'To better support our Boys through structured youth development frameworks in weekly meetings.',
  },
  'SUB-00133': {
    ref:'SUB-00133', officerId:'sl', courseKey:'cpr', type:'preapproved',
    dates:'5 Jun 2025', submitted:'21 May 2025', cost:'Nil (company-sponsored)',
    status:'pending', stage:'captain',
    purpose:'Renewal — current certification expires 30 Jun 2025. Mandatory for camp leadership roles.',
  },
};

// ── 5. Endorsement History (past chaplain decisions) ──────────────
BB.endorsementHistory = [
  { ref:'SUB-00118', officerId:'aw', courseName:'Youth Mental Health Awareness', decision:'returned',  date:'10 May 2025', note:'Returned to officer' },
  { ref:'SUB-00108', officerId:'tg', courseKey:'outdoor',  decision:'endorsed', date:'2 Apr 2025',   note:'Completed' },
  { ref:'SUB-00101', officerId:'ly', courseKey:'aotc',     decision:'endorsed', date:'18 Mar 2025',  note:'Training Comm' },
  { ref:'SUB-00095', officerId:'sl', courseKey:'rifle',    decision:'endorsed', date:'5 Mar 2025',   note:'Completed' },
];

// ── 6. Helper utilities ───────────────────────────────────────────

BB._label = function(text) {
  return `<div style="font-size:0.75rem;color:var(--muted-fg);margin-bottom:0.25rem;">${text}</div>`;
};

BB.avatarHTML = function(officerId, extraStyle) {
  const o = BB.officers[officerId];
  if (!o) return `<div class="avatar avatar-sm">${officerId.toUpperCase()}</div>`;
  const s = extraStyle || '';
  return `<div class="avatar avatar-sm" style="background:${o.bg};color:${o.fg};flex-shrink:0;${s}">${o.initials}</div>`;
};

BB.officerCell = function(officerId) {
  const o = BB.officers[officerId];
  if (!o) return officerId;
  return `<div style="display:flex;align-items:center;gap:0.5rem;">
    ${BB.avatarHTML(officerId)}
    <div>
      <div style="font-weight:500;font-size:0.875rem;">${o.name}</div>
      <div style="font-size:0.75rem;color:var(--muted-fg);">${o.rank}</div>
    </div>
  </div>`;
};

BB.statusPill = function(status) {
  if (status === 'expired')  return `<span class="status-pill" style="background:#fef2f2;color:var(--destructive);">Expired</span>`;
  if (status === 'expiring') return `<span class="status-pill" style="background:#fef3c7;color:#92400e;">Expiring Soon</span>`;
  if (status === 'returned') return `<span class="status-pill" style="background:#fef3c7;color:#92400e;">Returned</span>`;
  if (status === 'pending')  return `<span class="status-pill pending">Pending</span>`;
  if (status === 'endorsed') return `<span class="status-pill approved">Endorsed</span>`;
  return `<span class="status-pill approved">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
};

BB.categoryChip = function(cat) {
  const labels = { mandatory:'Mandatory', recurring:'Recurring', elective:'Elective' };
  return `<span class="chip">${labels[cat] || cat}</span>`;
};

BB.courseName = function(sub) {
  if (sub.courseKey && BB.courses[sub.courseKey]) return BB.courses[sub.courseKey].name;
  return sub.courseName || '—';
};

BB.courseProvider = function(sub) {
  if (sub.courseKey && BB.courses[sub.courseKey]) return BB.courses[sub.courseKey].provider;
  return sub.provider || '—';
};

BB.recordCourseName = function(rec) {
  if (rec.courseKey && BB.courses[rec.courseKey]) return BB.courses[rec.courseKey].name;
  return rec.courseName || '—';
};

BB.stageLabel = function(sub) {
  if (sub.stage === 'captain') {
    const o = BB.officers[sub.officerId];
    if (o && o.company === 'Alpha') return 'LTA Seet';
    return 'Captain';
  }
  if (sub.stage === 'chaplain') return 'Rev Goh';
  if (sub.stage === 'comm')     return 'Training Comm';
  return 'Done';
};

// ── 7. Approval Stepper HTML ──────────────────────────────────────
/*
 * Generates the 5-step approval stepper HTML for a submission.
 * stage:  'captain' | 'chaplain' | 'comm'  (current review stage)
 * status: 'pending' | 'approved' | 'returned' | 'completed'
 *
 * Step mapping:
 *   1 — Initiation            (always done once submitted)
 *   2 — Captain's Approval
 *   3 — Chaplain's Approval
 *   4 — Training Comm's Approval
 *   5 — Closure
 */
BB.approvalStepperHTML = function(stage, status) {
  const steps = [
    'Initiation',
    "Captain's Approval",
    "Chaplain's Approval",
    "Training Comm's Approval",
    'Closure',
  ];

  // Map stage → active step index (0-based)
  const stageIndex = { captain: 1, chaplain: 2, comm: 3 };
  let activeIdx = stageIndex[stage] !== undefined ? stageIndex[stage] : 1;
  if (status === 'completed') activeIdx = 4;

  const stepHTML = steps.map(function(label, i) {
    let cls = 'form-step';
    if (i < activeIdx)      cls += ' done';
    else if (i === activeIdx) cls += status === 'returned' ? ' returned' : ' active';

    return '<div class="' + cls + '">'
      + '<div class="form-step-num">' + (i + 1) + '</div>'
      + '<div class="form-step-label">' + label + '</div>'
      + '</div>';
  }).join('');

  return '<div class="form-steps form-steps-left" style="margin-bottom:1.25rem;">' + stepHTML + '</div>';
};

// ── 8. Detail HTML generators ─────────────────────────────────────

BB.submissionDetailHTML = function(ref, role) {
  // role: 'officer' | 'captain' | 'chaplain' | 'comm'
  const sub = BB.submissions[ref];
  if (!sub) return '<p style="color:var(--muted-fg);">Submission not found.</p>';
  const o   = BB.officers[sub.officerId] || {};
  const cName    = BB.courseName(sub);
  const cProvider = BB.courseProvider(sub);

  let rows = '';

  if (role !== 'officer') {
    rows += `<div>${BB._label('Officer')}<div style="font-weight:500;">${o.name} · ${o.rank}${o.company ? ' · ' + o.company : ''}</div></div>`;
  }
  rows += `<div>${BB._label('Type')}<div>${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</div></div>`;
  rows += `<div>${BB._label('Provider')}<div>${cProvider}</div></div>`;
  rows += `<div>${BB._label('Dates')}<div>${sub.dates || '—'}</div></div>`;
  if (sub.cost) rows += `<div>${BB._label('Cost')}<div>${sub.cost}</div></div>`;
  if (sub.captainApproved) {
    rows += `<div>${BB._label('Captain')}<div style="color:var(--success);font-weight:500;">✓ ${sub.captainApproved}</div></div>`;
  }
  if (sub.status === 'pending') {
    const stageMap = {
      captain:  `Awaiting ${BB.stageLabel(sub)}'s approval`,
      chaplain: `Awaiting Rev Goh's endorsement`,
      comm:     'Awaiting Training Comm review',
    };
    rows += `<div style="grid-column:1/-1;">${BB._label('Current Stage')}<div style="font-weight:500;color:var(--warning);">⏳ ${stageMap[sub.stage] || sub.stage}</div></div>`;
  }
  if (sub.purpose) rows += `<div style="grid-column:1/-1;">${BB._label('Purpose / Justification')}<div style="color:var(--muted-fg);">${sub.purpose}</div></div>`;
  if (sub.remarks) rows += `<div style="grid-column:1/-1;">${BB._label('Remarks')}<div style="color:var(--muted-fg);">${sub.remarks}</div></div>`;

  const stepper = BB.approvalStepperHTML(sub.stage, sub.status);
  return stepper + `<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.875rem 2rem;font-size:0.875rem;">${rows}</div>`;
};

BB.recordDetailHTML = function(recordId) {
  const rec = BB.records.find(r => r.id === recordId);
  if (!rec) return '<p style="color:var(--muted-fg);">Record not found.</p>';
  const course   = rec.courseKey ? BB.courses[rec.courseKey] : null;
  const provider = course ? course.provider : (rec.provider || '—');
  const desc     = course ? course.description : (rec.description || null);

  let expiryHTML;
  if (!rec.expiry) {
    expiryHTML = `<div style="color:var(--muted-fg);">No expiry</div>`;
  } else if (rec.status === 'expired') {
    expiryHTML = `<div style="color:var(--destructive);font-weight:600;">${rec.expiry}</div>`;
  } else if (rec.status === 'expiring') {
    expiryHTML = `<div style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' · ' + rec.expiryNote : ''}</div>`;
  } else {
    expiryHTML = `<div>${rec.expiry}</div>`;
  }

  let rows = '';
  rows += `<div>${BB._label('Provider')}<div>${provider}</div></div>`;
  rows += `<div>${BB._label('Completed')}<div style="font-weight:500;">${rec.completed}</div></div>`;
  rows += `<div>${BB._label('Certificate No.')}<div style="font-family:monospace;">${rec.certNo || '—'}</div></div>`;
  rows += `<div>${BB._label('Expiry')}${expiryHTML}</div>`;
  rows += `<div>${BB._label('Status')}${BB.statusPill(rec.status)}</div>`;
  rows += `<div>${BB._label('Category')}<div>${rec.category.charAt(0).toUpperCase() + rec.category.slice(1)}</div></div>`;
  if (desc) rows += `<div style="grid-column:1/-1;">${BB._label('Description')}<div style="color:var(--muted-fg);">${desc}</div></div>`;
  if (rec.status === 'expiring') {
    rows += `<div style="grid-column:1/-1;padding-top:0.5rem;border-top:1px solid var(--border);">
      <a href="submit.html" class="btn btn-default btn-sm">Submit Renewal Request</a>
    </div>`;
  }

  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem 2rem;font-size:0.875rem;">${rows}</div>`;
};

// ── 8. Table render functions ─────────────────────────────────────

/* Officer — active submissions (dashboard card table) */
BB.renderOfficerActiveSubmissions = function(officerId, tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(s => s.officerId === officerId && s.status === 'pending');
  if (!subs.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No active submissions</td></tr>`;
    return;
  }
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    return `<tr onclick="openSubmissionDetail('${sub.ref}')">
      <td data-label="Course / Training">
        <div style="font-weight:500;font-size:0.875rem;">${cName}</div>
        <div style="font-size:0.75rem;color:var(--muted-fg);">#${sub.ref} · ${BB.courseProvider(sub)}</div>
      </td>
      <td data-label="Type" style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td data-label="Dates" style="font-size:0.8125rem;">${sub.dates}</td>
      <td data-label="Current Stage">
        <div style="display:flex;align-items:center;gap:0.375rem;font-size:0.8125rem;">
          <span style="width:0.5rem;height:0.5rem;border-radius:50%;background:#f59e0b;flex-shrink:0;display:inline-block;"></span>
          ${BB.stageLabel(sub)}
        </div>
      </td>
      <td data-label="Status">${BB.statusPill('pending')}</td>
      <td data-label="Action" style="text-align:right;"><button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openSubmissionDetail('${sub.ref}')">View</button></td>
    </tr>`;
  }).join('');
};

/* Officer — full submissions table (My Submissions section) */
BB.renderOfficerSubmissionsTable = function(officerId, tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(s => s.officerId === officerId)
    .sort((a, b) => parseInt(b.ref.slice(4)) - parseInt(a.ref.slice(4)));
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    const stageText = sub.status === 'pending'
      ? `Awaiting ${BB.stageLabel(sub)}`
      : (sub.status === 'approved' ? 'Completed' : sub.status);
    return `<tr data-search="${sub.ref.toLowerCase()} ${cName.toLowerCase()}" data-status="${sub.status}">
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${sub.ref}</td>
      <td style="font-weight:500;">${cName}</td>
      <td style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${sub.submitted}</td>
      <td style="font-size:0.8125rem;">${sub.dates}</td>
      <td>${BB.statusPill(sub.status)}</td>
      <td style="text-align:right;"><button class="btn btn-ghost btn-sm" onclick="openSubmissionDetail('${sub.ref}')">View</button></td>
    </tr>`;
  }).join('');
};

/* Officer — training records table */
BB.renderOfficerRecordsTable = function(officerId, tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => r.officerId === officerId);
  tbody.innerHTML = recs.map(rec => {
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring'
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' · ' + rec.expiryNote : ''}</span>`
          : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    const trackBadge = (rec.courseKey === 'oco' || rec.courseKey === 'botc' || rec.courseKey === 'aotc')
      ? `<span class="badge badge-secondary">${rec.courseKey.toUpperCase()} Track</span>`
      : `<span class="badge">General</span>`;
    return `<tr data-rec-status="${rec.status}" data-rec-search="${cName.toLowerCase()}">
      <td style="font-weight:500;">${cName}</td>
      <td>${BB.categoryChip(rec.category)}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
      <td>${trackBadge}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="openRecordDetail('${rec.id}')">View details</button></td>
    </tr>`;
  }).join('');
};

/* Captain — pending approvals (submissions at 'captain' stage for a company) */
BB.renderCaptainApprovalsTable = function(company, tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions).filter(s => {
    const o = BB.officers[s.officerId];
    return s.status === 'pending' && s.stage === 'captain' && o && o.company === company;
  });
  if (!subs.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No pending approvals</td></tr>`;
    return;
  }
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    const o = BB.officers[sub.officerId] || {};
    return `<tr data-search="${sub.ref.toLowerCase()} ${(o.name||'').toLowerCase()} ${cName.toLowerCase()}" data-type="${sub.type}">
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${sub.ref}</td>
      <td>${BB.officerCell(sub.officerId)}</td>
      <td style="font-weight:500;">${cName}</td>
      <td style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${sub.submitted}</td>
      <td>
        <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
          <button class="btn btn-ghost btn-sm" onclick="openDetailDialog('${sub.ref}')">View</button>
          <button class="btn btn-outline btn-sm" style="color:var(--destructive);border-color:var(--destructive);" onclick="openReturnDialog('${sub.ref}','','${cName.replace(/'/g,"\\'")}')">Return</button>
          <button class="btn btn-default btn-sm" onclick="openApproveDialog('${sub.ref}','','${cName.replace(/'/g,"\\'")}')">Approve</button>
        </div>
      </td>
    </tr>`;
  }).join('');
};

/* Captain — my records table */
BB.renderCaptainMyRecordsTable = function(officerId, tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => r.officerId === officerId);
  tbody.innerHTML = recs.map(rec => {
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring' ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}</span>` : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    const trackBadge = (rec.courseKey === 'oco' || rec.courseKey === 'botc' || rec.courseKey === 'aotc')
      ? `<span class="badge badge-secondary">${rec.courseKey.toUpperCase()} Track</span>`
      : `<span class="badge">General</span>`;
    return `<tr>
      <td style="font-weight:500;">${cName}</td>
      <td>${BB.categoryChip(rec.category)}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
      <td>${trackBadge}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="openCapRecordDetail('${rec.id}')">View details</button></td>
    </tr>`;
  }).join('');
};

/* Captain — company records table */
BB.renderCaptainCompanyRecordsTable = function(company, tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => {
    const o = BB.officers[r.officerId];
    return o && o.company === company && o.role === 'officer';
  });
  tbody.innerHTML = recs.map(rec => {
    const o = BB.officers[rec.officerId];
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring'
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' · ' + rec.expiryNote : ''}</span>`
          : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    return `<tr data-officer="${rec.officerId}" data-search="${(o ? o.name : '').toLowerCase()} ${cName.toLowerCase()}">
      <td>${BB.officerCell(rec.officerId)}</td>
      <td style="font-weight:500;">${cName}</td>
      <td>${BB.categoryChip(rec.category)}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
    </tr>`;
  }).join('');
};

/* Chaplain — pending endorsements */
BB.renderChaplainEndorsementsTable = function(tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(s => s.status === 'pending' && s.stage === 'chaplain');
  if (!subs.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No pending endorsements</td></tr>`;
    return;
  }
  tbody.innerHTML = subs.map(sub => {
    const o = BB.officers[sub.officerId] || {};
    const cName = BB.courseName(sub);
    const capHTML = sub.captainApproved
      ? `<span style="color:var(--success);font-weight:500;">✓ ${sub.captainApproved}</span>`
      : `<span style="color:var(--muted-fg);">—</span>`;
    return `<tr data-search="${sub.ref.toLowerCase()} ${(o.name||'').toLowerCase()} ${cName.toLowerCase()}" data-company="${(o.company||'').toLowerCase()}">
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${sub.ref}</td>
      <td>${BB.officerCell(sub.officerId)}</td>
      <td style="color:var(--muted-fg);">${o.company || '—'}</td>
      <td style="font-weight:500;">${cName}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${sub.submitted}</td>
      <td style="font-size:0.8125rem;">${capHTML}</td>
      <td>
        <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
          <button class="btn btn-ghost btn-sm" onclick="openDetailDialog('${sub.ref}')">View</button>
          <button class="btn btn-outline btn-sm" style="color:var(--destructive);border-color:var(--destructive);" onclick="openReturnDialog('${sub.ref}','','${cName.replace(/'/g,"\\'")}')">Return</button>
          <button class="btn btn-default btn-sm" onclick="openEndorseDialog('${sub.ref}','','${cName.replace(/'/g,"\\'")}')">Endorse</button>
        </div>
      </td>
    </tr>`;
  }).join('');
};

/* Chaplain — endorsement history */
BB.renderChaplainEndorsementHistory = function(tbody) {
  if (!tbody) return;
  tbody.innerHTML = BB.endorsementHistory.map(h => {
    const o = BB.officers[h.officerId] || {};
    const cName = h.courseKey ? (BB.courses[h.courseKey]?.name || h.courseKey) : (h.courseName || '—');
    const pill = h.decision === 'endorsed'
      ? `<span class="status-pill approved">Endorsed</span>`
      : `<span class="status-pill" style="background:#fef3c7;color:#92400e;">Returned</span>`;
    return `<tr>
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${h.ref}</td>
      <td>${BB.officerCell(h.officerId)}</td>
      <td>${cName}</td>
      <td>${pill}</td>
      <td style="color:var(--muted-fg);">${h.date}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${h.note}</td>
    </tr>`;
  }).join('');
};

/* Chaplain — my records table */
BB.renderChaplainMyRecordsTable = function(officerId, tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => r.officerId === officerId);
  tbody.innerHTML = recs.map(rec => {
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring' ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}</span>` : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    return `<tr>
      <td style="font-weight:500;">${cName}</td>
      <td>${BB.categoryChip(rec.category)}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="openChapRecordDetail('${rec.id}')">View details</button></td>
    </tr>`;
  }).join('');
};

/* Chaplain — officers overview (all officer records across all companies) */
BB.renderChaplainOfficersOverviewTable = function(tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => BB.officers[r.officerId]?.role === 'officer');
  tbody.innerHTML = recs.map(rec => {
    const o = BB.officers[rec.officerId];
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring'
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' · ' + rec.expiryNote : ''}</span>`
          : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    return `<tr data-company="${(o?.company||'').toLowerCase()}" data-search="${(o?.name||'').toLowerCase()} ${cName.toLowerCase()} ${(o?.company||'').toLowerCase()}">
      <td>${BB.officerCell(rec.officerId)}</td>
      <td style="color:var(--muted-fg);">${o?.company || '—'}</td>
      <td style="font-weight:500;">${cName}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
    </tr>`;
  }).join('');
};

/* ── Load user-submitted entries from localStorage (user testing) ──────────
   submit.html writes new submissions to localStorage key 'bb_user_submissions'.
   This snippet merges them into BB.submissions so all pages see the new data. */
(function () {
  try {
    const stored = JSON.parse(localStorage.getItem('bb_user_submissions') || '[]');
    stored.forEach(function (sub) {
      if (sub && sub.ref && !BB.submissions[sub.ref]) {
        BB.submissions[sub.ref] = sub;
      }
    });
  } catch (e) { console.warn('BB: localStorage load failed', e); }
})();
