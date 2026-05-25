/* ================================================================
   data.js - BB Training Portal shared data store
   Load BEFORE each page's own <script>.
   ================================================================ */
'use strict';

const BB = {};

// '" -' 1. Officers '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
// status: 'active' | 'inactive'
// Inactive officers are excluded from normal course selections;
// specific curriculum eligibility to be defined separately.
BB.officers = {
  //         id   name                    initials  rank     appointment           company   role       status      email                           captain  chaplain  bg          fg
  tg: { id:'tg', name:'Theodor Gunawan', initials:'TG', rank:'LTA',  appointment:'Asst Sec',  company:'Alpha', role:'officer',  status:'active',   email:'tg@bb-alpha.sg',   captain:'js', chaplain:'jg', bg:'#dbeafe', fg:'#1d4ed8' },
  js: { id:'js', name:'John Seet',       initials:'JS', rank:'LTA',  appointment:'Captain',   company:'Alpha', role:'captain',  status:'active',   email:'js@bb-alpha.sg',   captain:null, chaplain:'jg', bg:'#dcfce7', fg:'#166534' },
  jg: { id:'jg', name:'Joseph Goh',      initials:'JG', rank:'Rev',  appointment:'Chaplain',  company:null,    role:'chaplain', status:'active',   email:'jg@bb-sg.org',     captain:null, chaplain:null, bg:'#fef9c3', fg:'#713f12' },
  wt: { id:'wt', name:'Wendy Tio',       initials:'WT', rank:'2LT',  appointment:'Training Comm', company:null, role:'comm',   status:'active',   email:'wt@bb-sg.org',     captain:null, chaplain:null, bg:'#fef3c7', fg:'#b45309' },
  pr: { id:'pr', name:'Priya Raj',       initials:'PR', rank:'2LT',  appointment:null,        company:'Alpha', role:'officer',  status:'active',   email:'pr@bb-alpha.sg',   captain:'js', chaplain:'jg', bg:'#f3e8ff', fg:'#7c3aed' },
  sl: { id:'sl', name:'Samuel Lim',      initials:'SL', rank:'2LT',  appointment:null,        company:'Alpha', role:'officer',  status:'inactive', email:'sl@bb-alpha.sg',   captain:'js', chaplain:'jg', bg:'#fef9c3', fg:'#854d0e' },
  aw: { id:'aw', name:'Ahmad Wafi',      initials:'AW', rank:'OCT',  appointment:null,        company:'Bravo', role:'officer',  status:'active',   email:'aw@bb-bravo.sg',   captain:null, chaplain:'jg', bg:'#f4f4f5', fg:'#71717a' },
  ly: { id:'ly', name:'Lena Yeo',        initials:'LY', rank:'LT',   appointment:null,        company:'Alpha', role:'officer',  status:'inactive', email:'ly@bb-alpha.sg',   captain:'js', chaplain:'jg', bg:'#fce7f3', fg:'#9d174d' },
};

// '" -' 2. Pre-approved course catalogue '" - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
BB.courses = {
  fa1:         { name:'First Aid Level 1',                   category:'First Aid & Safety',    provider:'Red Cross Singapore',                    duration:'3 days', cost:'$45/pax',  cert:'Yes � 2-year validity',  description:'A comprehensive first aid course covering recognition and management of medical emergencies, wound care, fractures, shock, and basic life support.',                                                                         objectives:['Recognise and respond to a range of medical emergencies','Perform basic wound care, bandaging, and fracture management','Assist casualties experiencing shock, burns, or sudden illness'] },
  fa2:         { name:'First Aid Level 2',                   category:'First Aid & Safety',    provider:'Red Cross Singapore',                    duration:'4 days', cost:'$80/pax',  cert:'Yes � 2-year validity',  description:'Advanced first aid course covering all Level 1 content plus rescue breathing, spinal injury management, and triage for mass casualty situations.',                                                                           objectives:['Apply advanced first aid techniques including spinal precautions','Perform rescue breathing and manage airway obstructions','Conduct basic triage in mass casualty scenarios'] },
  cpr:         { name:'CPR + AED Certification',             category:'First Aid & Safety',    provider:'Singapore Heart Foundation',             duration:'1 day',  cost:'$35/pax',  cert:'Yes � 2-year validity',  description:'Teaches cardiopulmonary resuscitation (CPR) and the use of automated external defibrillators (AED) for emergency cardiac response for adults, children, and infants.',                                                       objectives:['Perform hands-on CPR on adults, children, and infants','Operate an AED device confidently in an emergency','Understand the chain of survival and when to call for help'] },
  rifle:       { name:'Rifle Range Safety',                  category:'First Aid & Safety',    provider:"Boys' Brigade Singapore HQ",             duration:'1 day',  cost:'Nil',   cert:'Yes � 3-year validity',  description:'Range Safety Officer certification required to supervise BB rifle shooting activities. Covers range commands, safety protocols, and emergency procedures.',                                                                   objectives:['Conduct safe and compliant rifle range sessions for Boys','Issue and enforce range commands according to BB protocols','Respond appropriately to range emergencies and incidents'] },
  oco:         { name:'OCO - Officer Cadet Officers Course',  category:'Officer Track',         provider:"Boys' Brigade Singapore HQ",             duration:'5 days', cost:'Nil',   cert:'Yes � No expiry',        description:"Entry-level foundation course for all new BB officers. Covers BB history and philosophy, programme planning, pastoral care, and administrative responsibilities.",                                                            objectives:["Understand the vision, mission, and heritage of the Boys' Brigade","Plan and execute age-appropriate BB programmes","Fulfil the OCO requirement for formal officer appointment"] },
  botc:        { name:'BOTC - Basic Officer Training Course', category:'Officer Track',         provider:"Boys' Brigade Singapore HQ",             duration:'5 days', cost:'Nil',   cert:'Yes � No expiry',        description:'Intermediate course for practising officers. Deepens programme planning skills, introduces mentoring and leadership principles, and covers company administrative management.',                                               objectives:['Design and evaluate structured BB programmes for different age groups','Apply mentoring and coaching techniques with junior officers','Manage company administration and records effectively'] },
  aotc:        { name:'AOTC - Advanced Officer Training Course', category:'Officer Track',      provider:"Boys' Brigade Singapore HQ",             duration:'5 days', cost:'Nil',   cert:'Yes � No expiry',        description:'Senior-level course preparing officers for captaincy. Covers strategic programme design, financial management, officer development, and company leadership.',                                                                objectives:['Lead and develop a team of junior officers','Formulate long-term company strategy aligned with BB objectives','Fulfil the AOTC requirement for LTA to Captain promotion'] },
  safeguard:   { name:'Safeguarding Children & Youth',        category:'Safeguarding & Welfare', provider:'Ministry of Social and Family Development', duration:'1 day', cost:'$25/pax', cert:'Yes � 3-year validity', description:'Mandatory certification for all officers working with minors. Covers recognition of abuse and neglect, reporting obligations, and principles for safe programming.',                                                         objectives:['Identify signs of abuse, neglect, and exploitation in youth','Understand statutory reporting obligations and procedures','Implement safe programming principles in BB activities'] },
  mentalhealth:{ name:'Youth Mental Health Awareness',        category:'Safeguarding & Welfare', provider:'Institute of Mental Health',             duration:'1 day',  cost:'$60/pax',  cert:'Yes � No expiry',        description:'Workshop equipping officers to recognise and respond to mental health challenges in youth, with strategies for pastoral support and referral.',                                                                               objectives:['Identify signs of stress, anxiety, and depression in youth','Apply practical pastoral support strategies in a BB context','Know when and how to refer youth to professional help'] },
  youthwork:   { name:'Youth Work Certificate',               category:'Youth Development',     provider:'National Youth Council',                 duration:'3 days', cost:'$120/pax', cert:'Yes � No expiry',        description:'Foundational certificate in youth development practice covering theories of adolescent development, facilitation skills, and programme design.',                                                                              objectives:['Apply key theories of adolescent development to programming','Facilitate group activities and discussions with youth effectively','Design youth development programmes with clear outcomes'] },
  outdoor:     { name:'Outdoor Adventure Leadership',         category:'Youth Development',     provider:'Outward Bound Singapore',                duration:'5 days', cost:'$180/pax', cert:'Yes � No expiry',        description:'Leadership development through outdoor challenges, covering expedition planning, campcraft, navigation, risk management, and group dynamics facilitation.',                                                                   objectives:['Plan and lead safe outdoor expeditions and activities','Apply risk assessment and management for outdoor environments','Facilitate group learning through outdoor challenge experiences'] },
  drill:       { name:'Drill Instruction Course',             category:'Drill & Leadership',    provider:"Boys' Brigade Singapore HQ",             duration:'2 days', cost:'Nil',   cert:'Yes � No expiry',        description:'Covers precision drill commands, marching formations, and instructional techniques for conducting drill sessions with BB Boys and junior officers.',                                                                           objectives:['Issue and correct drill commands to the required standard','Lead marching formations and ceremonial parades','Teach drill to Boys and junior officers systematically'] },
};


// '" -' 2b. Course metadata (extended fields per requirements §3.3) '" - - - - - - - - - - - - - - -'
// source: 'internal' | 'external'
// selfArrangementAllowed: officer may arrange own session
// tcOfferingAllowed: TC may publish scheduled sessions
// certificateRequired: 'required' | 'not-applicable' | 'optional'
// financeEligible: annual allowance / company funds may apply
// status: 'recognised' | 'draft' | 'archived'
// active: derived from status; archived courses are not selectable for new submissions
// aliases: alternative names for search/matching
// preconditions: array of courseKeys that should be completed before this course
// durationDays: numeric duration in days (requirements §3.3 says positive number)
BB.coursesMeta = {
  fa1:         { source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:3, aliases:['FA1','Standard First Aid','SFA'] },
  fa2:         { source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:['fa1'],  durationDays:4, aliases:['FA2','Advanced First Aid'] },
  cpr:         { source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:1, aliases:['CPR','AED','CPR AED'] },
  rifle:       { source:'internal', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:false, status:'recognised', active:true,  preconditions:[],       durationDays:1, aliases:['Range Safety','RSO'] },
  oco:         { source:'internal', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:false, status:'recognised', active:true,  preconditions:[],       durationDays:5, aliases:['OCO','Officer Cadet'] },
  botc:        { source:'internal', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:false, status:'recognised', active:true,  preconditions:['oco'],  durationDays:5, aliases:['BOTC','Basic Officers'] },
  aotc:        { source:'internal', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:false, status:'recognised', active:true,  preconditions:['botc'], durationDays:5, aliases:['AOTC','Advanced Officers'] },
  safeguard:   { source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:1, aliases:['Safeguarding','SCY'] },
  mentalhealth:{ source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:false, certificateRequired:'not-applicable', financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:1, aliases:['Mental Health','YMHA'] },
  youthwork:   { source:'external', selfArrangementAllowed:true,  tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:3, aliases:['Youth Work','YWC'] },
  outdoor:     { source:'external', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:true,  status:'recognised', active:true,  preconditions:[],       durationDays:5, aliases:['OBS','Outdoor Leadership'] },
  drill:       { source:'internal', selfArrangementAllowed:false, tcOfferingAllowed:true,  certificateRequired:'required',       financeEligible:false, status:'recognised', active:true,  preconditions:[],       durationDays:2, aliases:['DIC','Drill'] },
};

// Helper: returns true if a course is selectable for new submissions
BB.isCourseActive = function(courseKey) {
  const m = BB.coursesMeta[courseKey];
  return m ? (m.active && m.status === 'recognised') : false;
};

// '" -' 3. Training Records '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
BB.records = [
  // Theodor Gunawan (tg) - LTA, Alpha
  { id:'tg-oco',          officerId:'tg', courseKey:'oco',         category:'mandatory', completed:'15 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0043' },
  { id:'tg-botc',         officerId:'tg', courseKey:'botc',        category:'mandatory', completed:'5 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0112' },
  { id:'tg-cpr',          officerId:'tg', courseKey:'cpr',         category:'recurring', completed:'22 Jan 2023', expiry:'21 Jun 2025', status:'expiring', certNo:'SHF-CPR-2023-7841', expiryNote:'28 days left' },
  { id:'tg-safeguard',    officerId:'tg', courseKey:'safeguard',   category:'mandatory', completed:'10 Aug 2022', expiry:'10 Aug 2025', status:'expiring', certNo:'MSF-SCY-2022-3310', expiryNote:'77 days left' },
  { id:'tg-mentalhealth', officerId:'tg', courseKey:'mentalhealth',category:'elective',  completed:'3 Mar 2023',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2023-0087' },
  { id:'tg-rifle',        officerId:'tg', courseKey:'rifle',       category:'elective',  completed:'18 Nov 2022', expiry:'18 Nov 2025', status:'active',   certNo:'BB-RSA-2022-0204' },
  { id:'tg-outdoor',      officerId:'tg', courseKey:'outdoor',     category:'elective',  completed:'2 Jul 2021',  expiry:null,          status:'active',   certNo:'OBS-OAL-2021-1152' },
  { id:'tg-drill',        officerId:'tg', courseKey:'drill',       category:'elective',  completed:'14 Sep 2020', expiry:null,          status:'active',   certNo:'BB-DIC-2020-0078' },
  // John Seet (js) - LTA/Captain, Alpha
  { id:'js-oco',          officerId:'js', courseKey:'oco',         category:'mandatory', completed:'12 Jan 2019', expiry:null,          status:'active',   certNo:'OCO-2019-0021' },
  { id:'js-botc',         officerId:'js', courseKey:'botc',        category:'mandatory', completed:'8 Mar 2020',  expiry:null,          status:'active',   certNo:'BOTC-2020-0044' },
  { id:'js-aotc',         officerId:'js', courseKey:'aotc',        category:'mandatory', completed:'5 Jun 2021',  expiry:null,          status:'active',   certNo:'AOTC-2021-0009' },
  { id:'js-fa2',          officerId:'js', courseKey:'fa2',         category:'mandatory', completed:'20 May 2021', expiry:'20 May 2023', status:'expired',  certNo:'RC-FA2-2021-0558' },
  { id:'js-safeguard',    officerId:'js', courseKey:'safeguard',   category:'mandatory', completed:'14 Mar 2022', expiry:'14 Mar 2025', status:'expired',  certNo:'MSF-SCY-2022-1104' },
  { id:'js-cpr',          officerId:'js', courseKey:'cpr',         category:'recurring', completed:'9 Feb 2023',  expiry:'9 Feb 2025',  status:'expired',  certNo:'SHF-CPR-2023-2291' },
  { id:'js-mentalhealth', officerId:'js', courseKey:'mentalhealth',category:'elective',  completed:'3 Aug 2022',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0044' },
  // Joseph Goh (jg) - Chaplain
  { id:'jg-orientation',  officerId:'jg', courseName:'BB Chaplaincy Orientation', provider:"Boys' Brigade Singapore HQ",
    category:'mandatory', completed:'5 Aug 2017', expiry:null, status:'active', certNo:'CHAP-2017-0003',
    description:"Foundation orientation covering the role and responsibilities of a BB Chaplain, pastoral principles, and safeguarding in a youth organisation context." },
  { id:'jg-safeguard',    officerId:'jg', courseKey:'safeguard',   category:'mandatory', completed:'20 Jan 2022', expiry:'20 Jan 2025', status:'expired',  certNo:'MSF-SCY-2022-0088' },
  { id:'jg-mentalhealth', officerId:'jg', courseKey:'mentalhealth',category:'mandatory', completed:'11 Mar 2022', expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0019' },
  { id:'jg-cpr',          officerId:'jg', courseKey:'cpr',         category:'recurring', completed:'14 Feb 2024', expiry:'14 Feb 2026', status:'active',   certNo:'SHF-CPR-2024-0312' },
  { id:'jg-pastoral',     officerId:'jg', courseName:'Pastoral Care in Youth Organisations', provider:'Trinity Theological College',
    category:'elective', completed:'7 Oct 2020', expiry:null, status:'active', certNo:'TTC-PCYO-2020-0041',
    description:'Covers pastoral counselling techniques, crisis response, and spiritual formation within youth ministry contexts.' },
  // Wendy Tio (wt) - Training Comm
  { id:'wt-safeguard',    officerId:'wt', courseKey:'safeguard',   category:'mandatory', completed:'5 Apr 2023',  expiry:'5 Apr 2026',  status:'active',   certNo:'MSF-SCY-2023-0441' },
  { id:'wt-mentalhealth', officerId:'wt', courseKey:'mentalhealth',category:'elective',  completed:'8 Sep 2022',  expiry:null,          status:'active',   certNo:'IMH-YMHA-2022-0071' },
  // Priya Raj (pr) - 2LT, Alpha
  { id:'pr-oco',          officerId:'pr', courseKey:'oco',         category:'mandatory', completed:'12 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0039' },
  { id:'pr-botc',         officerId:'pr', courseKey:'botc',        category:'mandatory', completed:'4 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0108' },
  { id:'pr-aotc',         officerId:'pr', courseKey:'aotc',        category:'mandatory', completed:'18 Jun 2023', expiry:null,          status:'active',   certNo:'AOTC-2023-0022' },
  { id:'pr-cpr',          officerId:'pr', courseKey:'cpr',         category:'recurring', completed:'20 Apr 2024', expiry:'20 Apr 2026', status:'active',   certNo:'SHF-CPR-2024-1872' },
  { id:'pr-safeguard',    officerId:'pr', courseKey:'safeguard',   category:'mandatory', completed:'10 Mar 2023', expiry:'10 Mar 2026', status:'active',   certNo:'MSF-SCY-2023-0318' },
  // Samuel Lim (sl) - 2LT, Alpha
  { id:'sl-oco',          officerId:'sl', courseKey:'oco',         category:'mandatory', completed:'14 Jan 2021', expiry:null,          status:'active',   certNo:'OCO-2021-0041' },
  { id:'sl-botc',         officerId:'sl', courseKey:'botc',        category:'mandatory', completed:'6 Mar 2022',  expiry:null,          status:'active',   certNo:'BOTC-2022-0114' },
  { id:'sl-cpr',          officerId:'sl', courseKey:'cpr',         category:'recurring', completed:'10 Jan 2023', expiry:'30 Jun 2025', status:'expiring', certNo:'SHF-CPR-2023-0944', expiryNote:'37 days left' },
  { id:'sl-safeguard',    officerId:'sl', courseKey:'safeguard',   category:'mandatory', completed:'14 Jan 2023', expiry:'14 Jan 2026', status:'active',   certNo:'MSF-SCY-2023-0109' },
  // Ahmad Wafi (aw) - OCT, Bravo
  { id:'aw-oco',          officerId:'aw', courseKey:'oco',         category:'mandatory', completed:'16 Jan 2023', expiry:null,          status:'active',   certNo:'OCO-2023-0007' },
  { id:'aw-cpr',          officerId:'aw', courseKey:'cpr',         category:'recurring', completed:'5 Mar 2023',  expiry:'5 Mar 2025',  status:'expired',  certNo:'SHF-CPR-2023-3102' },
  // Lena Yeo (ly) - LT, Alpha (inactive)
  { id:'ly-oco',          officerId:'ly', courseKey:'oco',         category:'mandatory', completed:'15 Jan 2019', expiry:null,          status:'active',   certNo:'OCO-2019-0027' },
  { id:'ly-botc',         officerId:'ly', courseKey:'botc',        category:'mandatory', completed:'8 Mar 2020',  expiry:null,          status:'active',   certNo:'BOTC-2020-0051' },
  { id:'ly-aotc',         officerId:'ly', courseKey:'aotc',        category:'mandatory', completed:'2 Jul 2022',  expiry:null,          status:'active',   certNo:'AOTC-2022-0015' },
  { id:'ly-cpr',          officerId:'ly', courseKey:'cpr',         category:'recurring', completed:'5 Jan 2023',  expiry:'5 Jan 2025',  status:'expired',  certNo:'SHF-CPR-2023-0117' },
  { id:'ly-safeguard',    officerId:'ly', courseKey:'safeguard',   category:'mandatory', completed:'12 Feb 2022', expiry:'12 Feb 2025', status:'expired',  certNo:'MSF-SCY-2022-0201' },
];

// '" -' 4. Submissions '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
// stage: 'captain' | 'chaplain' | 'comm' | 'done'
BB.submissions = {
  'SUB-00045': {
    ref:'SUB-00045', officerId:'tg', courseKey:'oco', type:'preapproved',
    dates:'15 Jan 2021', submitted:'5 Nov 2020', cost:'Nil', fundingMode:'no-cost',
    status:'approved', stage:'done',
    purpose:'Entry-level officer course. Fulfils OCO requirement for officer appointment.',
    remarks:'Certificate issued by BB HQ.',
  },
  'SUB-00071': {
    ref:'SUB-00071', officerId:'tg', courseKey:'botc', type:'preapproved',
    dates:'5 Mar 2022', submitted:'10 Feb 2022', cost:'Nil', fundingMode:'no-cost',
    status:'approved', stage:'done',
    purpose:'Fulfils BOTC requirement for LTA consideration.',
    remarks:'Certificate issued by BB HQ.',
  },
  'SUB-00098': {
    ref:'SUB-00098', officerId:'tg', courseKey:'cpr', type:'preapproved',
    dates:'22 Jan 2023', submitted:'3 Jan 2023', cost:'Nil', fundingMode:'company-funds',
    status:'approved', stage:'done',
    purpose:'CPR+AED certification for camp and activity facilitation.',
    remarks:'Approved. Certificate expires 21 Jun 2025.',
  },
  'SUB-00124': {
    ref:'SUB-00124', officerId:'tg', courseKey:'fa1', type:'preapproved',
    dates:'- Jun 2025', submitted:'22 May 2025', cost:'Nil', fundingMode:'company-funds',
    status:'pending', stage:'chaplain',
    purpose:'Renewing First Aid certification before expiry to maintain readiness for camp and activity facilitation.',
    remarks:'Approved by LTA Seet on 23 May 2025. Forwarded to Chaplain for endorsement.',
    captainApproved:'LTA John Seet � 23 May 2025',
  },
  'SUB-00127': {
    ref:'SUB-00127', officerId:'tg', courseName:'Leadership & Management Workshop', provider:'NTUC Learning Hub', type:'new',
    dates:'- Jul 2025', submitted:'23 May 2025', cost:'$120/pax', fundingMode:'allowance',
    status:'pending', stage:'captain',
    purpose:'Relevant to leadership development required for LTA progression. Course covers conflict resolution and team management.',
    remarks:'Pending initial review by LTA Seet.',
  },
  'SUB-00129': {
    ref:'SUB-00129', officerId:'aw', courseKey:'safeguard', type:'preapproved',
    dates:'7 Jun 2025', submitted:'19 May 2025', cost:'Nil', fundingMode:'no-cost',
    status:'pending', stage:'chaplain',
    purpose:'Mandatory certification renewal. Needed to remain authorised for youth-facing programme roles.',
    captainApproved:'Capt Marcus Ng � 21 May 2025',
  },
  'SUB-00131': {
    ref:'SUB-00131', officerId:'pr', courseKey:'youthwork', type:'preapproved',
    dates:'- Jun 2025', submitted:'22 May 2025', cost:'Nil', fundingMode:'company-funds',
    status:'pending', stage:'captain',
    purpose:'To better support our Boys through structured youth development frameworks in weekly meetings.',
  },
  'SUB-00133': {
    ref:'SUB-00133', officerId:'sl', courseKey:'cpr', type:'preapproved',
    dates:'5 Jun 2025', submitted:'21 May 2025', cost:'Nil', fundingMode:'company-funds',
    status:'pending', stage:'captain',
    purpose:'Renewal - current certification expires 30 Jun 2025. Mandatory for camp leadership roles.',
  },
  'SUB-00135': {
    ref:'SUB-00135', officerId:'tg', courseKey:'youthwork', type:'preapproved',
    dates:'10–12 Jun 2025', submitted:'1 Apr 2025', cost:'Nil', fundingMode:'company-funds',
    status:'approved', stage:'closure', closureStatus:'pending',
    for:'others',
    traineeList: [
      { id:'pr', name:'Priya Raj', rank:'2LT', unit:'Alpha' },
      { id:'sl', name:'Samuel Lim', rank:'2LT', unit:'Alpha' },
    ],
    purpose:'Youth development certificate for company officers attending the Jun intake.',
    captainApproved:'LTA John Seet � 5 Apr 2025',
    remarks:'Fully approved. Awaiting certificate upload to close submission.',
  },
  'SUB-00128': {
    ref:'SUB-00128', officerId:'tg', courseKey:'fa2', type:'preapproved',
    dates:'14–16 Jul 2025', submitted:'20 May 2025', cost:'$80/pax', fundingMode:'allowance',
    status:'approved', stage:'funding-release',
    purpose:'Advancing first aid knowledge to Level 2 for camp medical officer duties.',
    captainApproved:'LTA John Seet — 21 May 2025',
    chaplainEndorsed:'Rev Joseph Goh — 23 May 2025',
  },
  'SUB-00136': {
    ref:'SUB-00136', officerId:'tg', courseKey:'fa1', type:'preapproved',
    dates:'10 Jun 2025', submitted:'24 May 2025', cost:'$45/pax', fundingMode:'self-pay',
    status:'pending', stage:'captain',
    purpose:'First Aid Level 1 certification to strengthen emergency response capability at company events and camps.',
    remarks:'Pending initial review by LTA Seet.',
  },
};

// '" -' 5. Course Offerings '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
// Scheduled runs of recognised courses, published by Training Comm
BB.offerings = {
  'OFF-2506-FA1':  { id:'OFF-2506-FA1',  courseKey:'fa1',        startDate:'10 Jun 2025', endDate:'12 Jun 2025', provider:'Red Cross Singapore',                    location:'Red Cross HQ, Thomson Rd',   capacity:20, organizedByTC:true, applicationOpen:true,  active:true  },
  'OFF-2506-SAFE': { id:'OFF-2506-SAFE', courseKey:'safeguard',  startDate:'7 Jun 2025',  endDate:'7 Jun 2025',  provider:'Ministry of Social and Family Development', location:'MCCY Building, Napier Rd',   capacity:30, organizedByTC:true, applicationOpen:true,  active:true  },
  'OFF-2506-CPR':  { id:'OFF-2506-CPR',  courseKey:'cpr',        startDate:'5 Jun 2025',  endDate:'5 Jun 2025',  provider:'Singapore Heart Foundation',             location:'SHF Training Centre, Outram', capacity:15, organizedByTC:true, applicationOpen:true,  active:true  },
  'OFF-2507-YW':   { id:'OFF-2507-YW',   courseKey:'youthwork',  startDate:'8 Jul 2025',  endDate:'10 Jul 2025', provider:'National Youth Council',                 location:'NYCHub, Orchard',             capacity:25, organizedByTC:true, applicationOpen:false, active:true  },
  'OFF-2508-OBS':  { id:'OFF-2508-OBS',  courseKey:'outdoor',    startDate:'18 Aug 2025', endDate:'22 Aug 2025', provider:'Outward Bound Singapore',                location:'OBS, Pulau Ubin',             capacity:12, organizedByTC:true, applicationOpen:false, active:true  },
};

// '" -' 6. Officer Annual Budgets '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
// Tracks each officer's $200/year course funding allowance
// Available Balance = annualAllowance - committedAmount - usedAmount
BB.budgets = {
  'tg-2025': { officerId:'tg', year:2025, annualAllowance:200, pendingAmount:120, committedAmount:80, usedAmount:0,  releasedAmount:0 },
  'pr-2025': { officerId:'pr', year:2025, annualAllowance:200, pendingAmount:0,   committedAmount:0,  usedAmount:0,  releasedAmount:0 },
  'sl-2025': { officerId:'sl', year:2025, annualAllowance:200, pendingAmount:0,   committedAmount:0,  usedAmount:0,  releasedAmount:0 },
  'aw-2025': { officerId:'aw', year:2025, annualAllowance:200, pendingAmount:0,   committedAmount:0,  usedAmount:0,  releasedAmount:0 },
  'js-2025': { officerId:'js', year:2025, annualAllowance:200, pendingAmount:0,   committedAmount:0,  usedAmount:0,  releasedAmount:0 },
};

// '" -' 7. Endorsement History (past chaplain decisions) '" - - - - - - - - - - - - -'
BB.endorsementHistory = [
  { ref:'SUB-00118', officerId:'pr', courseKey:'botc',                           decision:'endorsed', date:'15 May 2025', note:'Forwarded to Comm' },
  { ref:'SUB-00112', officerId:'aw', courseName:'Youth Mental Health Awareness', decision:'returned', date:'10 May 2025', note:'Returned to officer' },
  { ref:'SUB-00108', officerId:'tg', courseKey:'outdoor',                        decision:'endorsed', date:'2 Apr 2025',  note:'Completed' },
  { ref:'SUB-00101', officerId:'ly', courseKey:'aotc',                           decision:'endorsed', date:'18 Mar 2025', note:'Training Comm' },
  { ref:'SUB-00095', officerId:'sl', courseKey:'rifle',                          decision:'endorsed', date:'5 Mar 2025',  note:'Completed' },
];

// '" -' 6. Helper utilities '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'

BB.fundingModeLabel = function(mode) {
  const m = { 'allowance':'Officer Annual Allowance', 'company-funds':'Coy Funds', 'self-pay':'Self-Pay', 'others':'Others', 'no-cost':'No Cost' };
  return m[mode] || (mode ? mode : '—');
};

BB._needsFundingRelease = function(sub) {
  return sub.fundingMode === 'allowance' || sub.fundingMode === 'company-funds';
};

BB.getOfficerBudget = function(officerId, year) {
  const key = officerId + '-' + (year || new Date().getFullYear());
  const b = BB.budgets[key];
  if (!b) return { annualAllowance:200, pendingAmount:0, committedAmount:0, usedAmount:0, releasedAmount:0 };
  return b;
};

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
  return sub.courseName || '-';
};

BB.courseProvider = function(sub) {
  if (sub.courseKey && BB.courses[sub.courseKey]) return BB.courses[sub.courseKey].provider;
  return sub.provider || '-';
};

BB.courseCost = function(sub) {
  if (sub.courseKey && BB.courses[sub.courseKey]) return BB.courses[sub.courseKey].cost || sub.cost || '-';
  return sub.cost || '-';
};

BB.recordCourseName = function(rec) {
  if (rec.courseKey && BB.courses[rec.courseKey]) return BB.courses[rec.courseKey].name;
  return rec.courseName || '-';
};

BB.stageLabel = function(sub) {
  // Accept either a submission object or a stage string directly
  const stage = (typeof sub === 'string') ? sub : sub.stage;
  if (stage === 'captain') {
    const officerId = (typeof sub === 'object') ? sub.officerId : null;
    const o = officerId ? BB.officers[officerId] : null;
    if (o && o.company === 'Alpha') return 'LTA Seet';
    return 'Captain';
  }
  if (stage === 'chaplain')        return 'Rev Goh';
  if (stage === 'comm')            return 'Training Comm';
  if (stage === 'funding-release') return 'Funding Release';
  if (stage === 'closure')         return 'Awaiting Closure';
  return 'Done';
};

// Exact human-readable status label for a submission
BB.submissionStatusLabel = function(sub) {
  if (sub.status === 'returned') return 'Returned';
  if (sub.status === 'rejected') return 'Rejected';
  if (sub.stage === 'captain')         return 'Awaiting Captain';
  if (sub.stage === 'chaplain')        return 'Awaiting Chaplain';
  if (sub.stage === 'comm')            return 'Awaiting Training Comm';
  if (sub.stage === 'funding-release') return 'Awaiting Funding Release';
  if (sub.stage === 'closure')         return 'Awaiting Closure';
  if (sub.stage === 'done') {
    if (sub.closureOutcome === 'cancelled') return 'Cancelled';
    if (sub.status === 'completed' || sub.closureStatus === 'completed') return 'Completed';
    return 'Closed';
  }
  return 'Pending';
};

// Styled pill for a submission status
BB.submissionStatusPill = function(sub) {
  const label = BB.submissionStatusLabel(sub);
  if (label === 'Completed')
    return '<span class="status-pill approved">' + label + '</span>';
  if (label === 'Rejected' || label === 'Cancelled')
    return '<span class="status-pill expired">' + label + '</span>';
  if (label === 'Returned')
    return '<span class="status-pill" style="background:#fef3c7;color:#92400e;">' + label + '</span>';
  if (label === 'Awaiting Closure')
    return '<span class="status-pill" style="background:#eff6ff;color:#1d4ed8;">' + label + '</span>';
  if (label === 'Awaiting Funding Release')
    return '<span class="status-pill" style="background:#fffbeb;color:#92400e;">' + label + '</span>';
  // All other "Awaiting ..." states
  return '<span class="status-pill pending">' + label + '</span>';
};

// '" -' 7. Approval Stepper HTML '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
/*
 * Generates the 5-step approval stepper HTML for a submission.
 * stage:  'captain' | 'chaplain' | 'comm'  (current review stage)
 * status: 'pending' | 'approved' | 'returned' | 'completed'
 *
 * Step mapping:
 *   1 - Initiation            (always done once submitted)
 *   2 - Captain's Approval
 *   3 - Chaplain's Approval
 *   4 - Training Comm's Approval
 *   5 - Closure
 */
BB.approvalStepperHTML = function(stage, status) {
  const steps = [
    'Initiation',
    "Captain's Approval",
    "Chaplain's Approval",
    "Training Comm's Approval",
    'Closure',
  ];

  // Map stage '�' active step index (0-based)
  const stageIndex = { captain: 1, chaplain: 2, comm: 3, 'funding-release': 4, closure: 4 };
  let activeIdx = stageIndex[stage] !== undefined ? stageIndex[stage] : 1;
  const allDone = status === 'completed';

  const stepHTML = steps.map(function(label, i) {
    let cls = 'form-step';
    if (allDone || i < activeIdx) cls += ' done';
    else if (i === activeIdx) cls += status === 'returned' ? ' returned' : ' active';

    return '<div class="' + cls + '">'
      + '<div class="form-step-num">' + (i + 1) + '</div>'
      + '<div class="form-step-label">' + label + '</div>'
      + '</div>';
  }).join('');

  return '<div class="form-steps form-steps-left" style="margin-bottom:1.25rem;">' + stepHTML + '</div>';
};

// '" -' 8. Detail HTML generators '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'

BB.submissionDetailHTML = function(ref, role) {
  // role: 'officer' | 'captain' | 'chaplain' | 'comm'
  const sub = BB.submissions[ref];
  if (!sub) return '<p style="color:var(--muted-fg);">Submission not found.</p>';
  const o   = BB.officers[sub.officerId] || {};
  const cName    = BB.courseName(sub);
  const cProvider = BB.courseProvider(sub);

  let rows = '';

  if (role !== 'officer') {
    rows += `<div>${BB._label('Officer')}<div style="font-weight:500;">${o.name} � ${o.rank}${o.company ? ' � ' + o.company : ''}</div></div>`;
  }
  if (sub.submittedBy && sub.submittedBy !== sub.officerId) {
    const submitter = BB.officers[sub.submittedBy] || {};
    rows += `<div>${BB._label('Submitted By')}<div style="font-weight:500;">${submitter.name || sub.submittedBy}</div></div>`;
  }
  rows += `<div>${BB._label('Type')}<div>${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</div></div>`;
  const submissionTrainees = BB.getSubmissionTrainees(sub);
  const traineeNames = submissionTrainees.map(function(t) { return t.name; }).join(', ');
  if (traineeNames && submissionTrainees.length > 1) {
    rows += `<div style="grid-column:1/-1;">${BB._label('Trainees')}<div>${traineeNames}</div></div>`;
  }
  rows += `<div>${BB._label('Provider')}<div>${cProvider}</div></div>`;
  rows += `<div>${BB._label('Dates')}<div>${sub.dates || '-'}</div></div>`;
  if (BB.courseCost(sub) !== '-') rows += `<div>${BB._label('Cost')}<div>${BB.courseCost(sub)}</div></div>`;
  if (sub.priceScreenshotName) {
    rows += `<div style="grid-column:1/-1;">${BB._label('Price Evidence')}<div style="font-weight:500;">${sub.priceScreenshotName}</div><div style="font-size:0.75rem;color:var(--muted-fg);margin-top:0.125rem;">Screenshot should show course name, provider, and price.</div></div>`;
  }
  if (sub.captainApproved) {
    rows += `<div>${BB._label('Captain')}<div style="color:var(--success);font-weight:500;">? ${sub.captainApproved}</div></div>`;
  }
  if (sub.status === 'pending') {
    const stageMap = {
      captain:  `Awaiting ${BB.stageLabel(sub)}'s approval`,
      chaplain: `Awaiting Rev Goh's endorsement`,
      comm:     'Awaiting Training Comm review',
    };
    rows += `<div style="grid-column:1/-1;">${BB._label('Current Stage')}<div style="font-weight:500;color:var(--warning);">Pending: ${stageMap[sub.stage] || sub.stage}</div></div>`;
  }
  if (sub.stage === 'funding-release') {
    rows += `<div style="grid-column:1/-1;">${BB._label('Current Stage')}<div style="font-weight:500;color:var(--warning);">Awaiting Funding Release — approved to attend once funding is confirmed.</div></div>`;
  }
  if (sub.fundingMode) {
    const isCompanyFunds = sub.fundingMode === 'company-funds';
    rows += `<div>${BB._label('Funding Mode')}<div style="font-weight:500;${isCompanyFunds ? 'color:#b45309;' : ''}">${BB.fundingModeLabel(sub.fundingMode)}</div></div>`;
    if (sub.fundingRemarks) {
      rows += `<div style="grid-column:1/-1;">${BB._label('Funding Remarks')}<div style="color:var(--muted-fg);">${sub.fundingRemarks}</div></div>`;
    }
    if (isCompanyFunds && (role === 'captain' || role === 'chaplain')) {
      rows += `<div style="grid-column:1/-1;"><div class="alert alert-warning" style="padding:0.5rem 0.75rem;margin-top:0.25rem;"><div class="alert-body"><div class="alert-title" style="font-size:0.8125rem;">Coy Funds Requested</div><div class="alert-description" style="font-size:0.75rem;">Approving this submission authorises use of Coy Funds. Please review with caution before approving.</div></div></div></div>`;
    }
  }
  if (sub.fundingReleased) {
    rows += `<div>${BB._label('Funding Released')}<div style="color:var(--success);font-weight:500;">✓ ${sub.fundingReleased}</div></div>`;
  }
  if (sub.purpose) rows += `<div style="grid-column:1/-1;">${BB._label('Purpose / Justification')}<div style="color:var(--muted-fg);">${sub.purpose}</div></div>`;
  if (sub.remarks) rows += `<div style="grid-column:1/-1;">${BB._label('Remarks')}<div style="color:var(--muted-fg);">${sub.remarks}</div></div>`;

  // Training Comm: new-as-is mapping section
  if (role === 'comm' && sub.type === 'new') {
    const mapping = sub.mappingType || 'unmapped';
    rows += `<div style="grid-column:1/-1;padding-top:0.875rem;border-top:1px solid var(--border);">
      ${BB._label('Catalogue Mapping (Training Comm)')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
        <div class="form-group"><label class="label" style="font-size:0.75rem;">Mapping Type</label>
          <select class="input" style="font-size:0.8125rem;">
            <option value="unmapped" ${mapping==='unmapped'?'selected':''}>Unmapped — standalone</option>
            <option value="exact"    ${mapping==='exact'   ?'selected':''}>Exact Match</option>
            <option value="equivalent" ${mapping==='equivalent'?'selected':''}>Equivalent</option>
            <option value="related"  ${mapping==='related' ?'selected':''}>Related Only</option>
          </select>
        </div>
        <div class="form-group"><label class="label" style="font-size:0.75rem;">Map to Catalogue Course</label>
          <select class="input" style="font-size:0.8125rem;">
            <option value="">— none —</option>
            ${Object.entries(BB.courses).map(([k,c]) => `<option value="${k}">${c.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group" style="margin-top:0.5rem;"><label class="label" style="font-size:0.75rem;">Mapping Remarks <span style="font-weight:400;color:var(--muted-fg);">(required for Equivalent / Related Only)</span></label>
        <textarea class="input" rows="2" style="font-size:0.8125rem;" placeholder="Explain the mapping decision…"></textarea>
      </div>
    </div>`;
  }

  const stepper = BB.approvalStepperHTML(sub.stage, sub.status);
  if (role === 'officer' && sub.stage === 'closure' && sub.closureStatus === 'pending') {
    rows += `<div style="grid-column:1/-1;padding-top:0.875rem;border-top:1px solid var(--border);">
      <a href="submit.html?ref=${ref}" class="btn btn-outline" style="width:100%;justify-content:center;color:var(--success);border-color:var(--success);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1rem;height:1rem;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Complete closure &mdash; upload certificates
      </a>
    </div>`;
  }

  return stepper + `<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.875rem 2rem;font-size:0.875rem;">${rows}</div>`;
};

/** Officers included on a submission (self or trainee list). */
BB.getSubmissionTrainees = function(sub) {
  if (!sub) return [];
  if (sub.traineeList && sub.traineeList.length) return sub.traineeList;
  if (sub.for === 'others' && sub.trainees) {
    return String(sub.trainees).split(',').map(function(name) {
      name = name.trim();
      const found = Object.values(BB.officers).find(function(o) { return o.name === name; });
      return found
        ? { id: found.id, name: found.name, rank: found.rank, unit: found.company || '' }
        : { id: null, name: name, rank: '', unit: '' };
    });
  }
  const o = BB.officers[sub.officerId];
  if (!o) return [];
  return [{ id: o.id, name: o.name, rank: o.rank, unit: o.company || '' }];
};

BB.recordDetailHTML = function(recordId) {
  const rec = BB.records.find(r => r.id === recordId);
  if (!rec) return '<p style="color:var(--muted-fg);">Record not found.</p>';
  const course   = rec.courseKey ? BB.courses[rec.courseKey] : null;
  const provider = course ? course.provider : (rec.provider || '-');
  const desc     = course ? course.description : (rec.description || null);

  let expiryHTML;
  if (!rec.expiry) {
    expiryHTML = `<div style="color:var(--muted-fg);">No expiry</div>`;
  } else if (rec.status === 'expired') {
    expiryHTML = `<div style="color:var(--destructive);font-weight:600;">${rec.expiry}</div>`;
  } else if (rec.status === 'expiring') {
    expiryHTML = `<div style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' � ' + rec.expiryNote : ''}</div>`;
  } else {
    expiryHTML = `<div>${rec.expiry}</div>`;
  }

  let rows = '';
  rows += `<div>${BB._label('Provider')}<div>${provider}</div></div>`;
  rows += `<div>${BB._label('Completed')}<div style="font-weight:500;">${rec.completed}</div></div>`;
  rows += `<div>${BB._label('Certificate No.')}<div style="font-family:monospace;">${rec.certNo || '-'}</div></div>`;
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

// '" -' 8. Table render functions '" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'

/* Officer - active submissions (dashboard card table) */
BB.renderOfficerActiveSubmissions = function(officerId, tbody) {
  if (!tbody) return;
  const activeStages = ['captain','chaplain','comm','funding-release','closure'];
  const subs = Object.values(BB.submissions)
    .filter(s => (s.officerId === officerId || s.submittedBy === officerId) && activeStages.includes(s.stage));
  if (!subs.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No active submissions</td></tr>`;
    return;
  }
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    const forOfficer = BB.officers[sub.officerId];
    const metaPrefix = sub.submittedBy === officerId && sub.officerId !== officerId && forOfficer
      ? 'For ' + forOfficer.name + ' · '
      : '';
    return `<tr onclick="openSubmissionDetail('${sub.ref}')">
      <td data-label="Course / Training">
        <div style="font-weight:500;font-size:0.875rem;">${cName}</div>
        <div style="font-size:0.75rem;color:var(--muted-fg);">#${sub.ref} · ${metaPrefix}${BB.courseProvider(sub)}</div>
      </td>
      <td data-label="Type" style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td data-label="Dates" style="font-size:0.8125rem;">${sub.dates}</td>
      <td data-label="Cost" style="font-size:0.8125rem;">${(sub.type === 'preapproved' && sub.courseKey && BB.courses[sub.courseKey] ? BB.courses[sub.courseKey].cost : sub.cost) || '—'}</td>
      <td data-label="Status">${BB.submissionStatusPill(sub)}</td>
      <td data-label="Action" style="text-align:right;"><button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openSubmissionDetail('${sub.ref}')">View</button></td>
    </tr>`;
  }).join('');
};

/* Upcoming Courses card — active submissions with future-ish dates, sorted by date */
BB.renderUpcomingCourses = function(officerId, container) {
  if (!container) return;
  const activeStages = ['captain','chaplain','comm','funding-release','closure'];
  const subs = Object.values(BB.submissions)
    .filter(s => (s.officerId === officerId || s.submittedBy === officerId) && activeStages.includes(s.stage))
    .sort((a, b) => {
      // sort by first 4-digit year found in dates string, then by month-day number
      const key = s => parseInt((s.dates || '').replace(/[^0-9 ]/g,' ').trim().split(/\s+/).find(n => n.length >= 2) || '0');
      return key(a) - key(b);
    });
  if (!subs.length) {
    container.innerHTML = '<p style="font-size:.875rem;color:var(--muted-fg);padding:0.25rem 0;">No upcoming courses.</p>';
    return;
  }
  container.innerHTML = subs.map(s => {
    const cName = BB.courseName(s);
    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.625rem 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="(typeof openSubmissionDetail==='function'?openSubmissionDetail:openDetailDialog)('${s.ref}')">
      <div style="min-width:0;">
        <div style="font-size:.8125rem;font-weight:500;color:var(--fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${cName}</div>
        <div style="font-size:.75rem;color:var(--muted-fg);margin-top:.125rem;">${s.dates || '—'}</div>
      </div>
      <div style="flex-shrink:0;">${BB.submissionStatusPill(s)}</div>
    </div>`;
  }).join('');
};

/* Officer - full submissions table (My Submissions section) */
BB.renderOfficerSubmissionsTable = function(officerId, tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(s => s.officerId === officerId || s.submittedBy === officerId)
    .sort((a, b) => parseInt(b.ref.slice(4)) - parseInt(a.ref.slice(4)));
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    const forOfficer = BB.officers[sub.officerId];
    const courseLabel = sub.submittedBy === officerId && sub.officerId !== officerId && forOfficer
      ? `${cName}<div style="font-size:0.75rem;color:var(--muted-fg);margin-top:0.125rem;">For ${forOfficer.name}</div>`
      : cName;
    return `<tr data-search="${sub.ref.toLowerCase()} ${cName.toLowerCase()} ${(forOfficer?.name || '').toLowerCase()}" data-status="${sub.status}" style="cursor:pointer;" onclick="openSubmissionDetail('${sub.ref}')">
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${sub.ref}</td>
      <td style="font-weight:500;">${courseLabel}</td>
      <td style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${sub.submitted}</td>
      <td style="font-size:0.8125rem;">${sub.dates || '—'}</td>
      <td>${BB.submissionStatusPill(sub)}</td>
      <td style="text-align:right;" onclick="event.stopPropagation()"><button class="btn btn-ghost btn-sm" onclick="openSubmissionDetail('${sub.ref}')">View</button></td>
    </tr>`;
  }).join('');
};

/* Officer - training records table */
BB.renderOfficerRecordsTable = function(officerId, tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => r.officerId === officerId);
  tbody.innerHTML = recs.map(rec => {
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring'
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' � ' + rec.expiryNote : ''}</span>`
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

/* Captain - pending approvals (submissions at 'captain' stage for a company) */
BB.renderCaptainPendingTable = function(company, tbody, limit) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions).filter(s => {
    const o = BB.officers[s.officerId];
    return s.status === 'pending' && s.stage === 'captain' && o && o.company === company;
  }).slice(0, limit || undefined);
  if (!subs.length) {
    tbody.innerHTML = `<tr class="table-empty-row"><td colspan="6" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No pending approvals</td></tr>`;
    return;
  }
  tbody.innerHTML = subs.map(sub => {
    const cName = BB.courseName(sub);
    const o = BB.officers[sub.officerId] || {};
    const isCompanyFunds = sub.fundingMode === 'company-funds';
    const fundingLabel = isCompanyFunds ? 'Coy Funds' : BB.fundingModeLabel(sub.fundingMode);
    const fundingBadge = isCompanyFunds
      ? '<span class="badge badge-destructive" style="font-size:.7rem;">Coy Funds</span>'
      : '<span class="badge badge-secondary" style="font-size:.7rem;">' + fundingLabel + '</span>';
    return `<tr data-search="${sub.ref.toLowerCase()} ${(o.name||'').toLowerCase()} ${cName.toLowerCase()}" data-type="${sub.type}" style="cursor:pointer;" onclick="window.location.href='submit.html?ref=${sub.ref}&role=captain'">
      <td data-label="Course / Training">
        <div style="font-weight:500;font-size:0.875rem;">${cName}</div>
        <div style="font-size:0.75rem;color:var(--muted-fg);">#${sub.ref} · ${o.name || 'Officer'} · ${BB.courseProvider(sub)}</div>
      </td>
      <td data-label="Type" style="font-size:0.8125rem;">${sub.type === 'preapproved' ? 'Pre-approved' : 'New Course'}</td>
      <td data-label="Dates" style="font-size:0.8125rem;">${sub.dates || '—'}</td>
      <td data-label="Current Stage">
        <div style="display:flex;align-items:center;gap:0.375rem;font-size:0.8125rem;">
          <span style="width:0.5rem;height:0.5rem;border-radius:50%;background:#f59e0b;flex-shrink:0;display:inline-block;"></span>
          Your review
        </div>
      </td>
      <td data-label="Funding">${fundingBadge}</td>
      <td data-label="Action" style="text-align:right;" onclick="event.stopPropagation()"><a href="submit.html?ref=${sub.ref}&role=captain" class="btn btn-ghost btn-sm">Review</a></td>
    </tr>`;
  }).join('');
};

BB.renderCaptainApprovalsTable = function(company, tbody) {
  BB.renderCaptainPendingTable(company, tbody);
};

/* Captain - my records table */
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
    return `<tr data-rec-status="${rec.status}" data-rec-search="${cName.toLowerCase()}">
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

/* Captain - company records table */
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
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' � ' + rec.expiryNote : ''}</span>`
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

/* Chaplain - pending endorsements */
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
      ? `<span style="color:var(--success);font-weight:500;">? ${sub.captainApproved}</span>`
      : `<span style="color:var(--muted-fg);"> -</span>`;
    return `<tr data-search="${sub.ref.toLowerCase()} ${(o.name||'').toLowerCase()} ${cName.toLowerCase()}" data-company="${(o.company||'').toLowerCase()}" style="cursor:pointer;" onclick="window.location.href='submit.html?ref=${sub.ref}&role=chaplain'">
      <td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#${sub.ref}</td>
      <td>${BB.officerCell(sub.officerId)}</td>
      <td style="color:var(--muted-fg);">${o.company || '-'}</td>
      <td style="font-weight:500;">${cName}</td>
      <td style="font-size:0.8125rem;color:var(--muted-fg);">${sub.submitted}</td>
      <td style="font-size:0.8125rem;">${capHTML}</td>
      <td onclick="event.stopPropagation()">
        <a href="submit.html?ref=${sub.ref}&role=chaplain" class="btn btn-default btn-sm">Review</a>
      </td>
    </tr>`;
  }).join('');
};

/* Chaplain - endorsement history */
BB.renderChaplainEndorsementHistory = function(tbody) {
  if (!tbody) return;
  tbody.innerHTML = BB.endorsementHistory.map(h => {
    const o = BB.officers[h.officerId] || {};
    const cName = h.courseKey ? (BB.courses[h.courseKey]?.name || h.courseKey) : (h.courseName || '-');
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

/* Chaplain - my records table */
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

/* Chaplain - officers overview (all officer records across all companies) */
BB.renderChaplainOfficersOverviewTable = function(tbody) {
  if (!tbody) return;
  const recs = BB.records.filter(r => BB.officers[r.officerId]?.role === 'officer');
  tbody.innerHTML = recs.map(rec => {
    const o = BB.officers[rec.officerId];
    const cName = BB.recordCourseName(rec);
    const expHTML = rec.expiry
      ? (rec.status === 'expiring'
          ? `<span style="color:var(--destructive);font-weight:600;">${rec.expiry}${rec.expiryNote ? ' � ' + rec.expiryNote : ''}</span>`
          : rec.expiry)
      : `<span style="color:var(--muted-fg);">No expiry</span>`;
    return `<tr data-company="${(o?.company||'').toLowerCase()}" data-search="${(o?.name||'').toLowerCase()} ${cName.toLowerCase()} ${(o?.company||'').toLowerCase()}">
      <td>${BB.officerCell(rec.officerId)}</td>
      <td style="color:var(--muted-fg);">${o?.company || '-'}</td>
      <td style="font-weight:500;">${cName}</td>
      <td>${rec.completed}</td>
      <td>${expHTML}</td>
      <td>${BB.statusPill(rec.status)}</td>
    </tr>`;
  }).join('');
};

/* ?? User submissions (localStorage sync) ????????????????????????? */
BB._jsStr = function(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
};

BB.persistSubmission = function(sub) {
  if (!sub || !sub.ref) return;
  BB.submissions[sub.ref] = sub;
  try {
    const stored = JSON.parse(localStorage.getItem('bb_user_submissions') || '[]');
    const i = stored.findIndex(function(s) { return s && s.ref === sub.ref; });
    if (i >= 0) stored[i] = sub;
    else stored.push(sub);
    localStorage.setItem('bb_user_submissions', JSON.stringify(stored));
  } catch (e) { console.warn('BB: persist failed', e); }
};

BB.loadUserSubmissions = function() {
  try {
    const stored = JSON.parse(localStorage.getItem('bb_user_submissions') || '[]');
    stored.forEach(function(sub) {
      if (sub && sub.ref) BB.submissions[sub.ref] = sub;
    });
  } catch (e) { console.warn('BB: load failed', e); }
};

BB.advanceSubmission = function(ref, action, role, note) {
  const sub = BB.submissions[ref];
  if (!sub) return null;
  const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  if (action === 'return') {
    sub.status = 'returned';
    sub.remarks = (sub.remarks ? sub.remarks + ' ' : '') + 'Returned: ' + (note || '');
    BB.persistSubmission(sub);
    return sub;
  }

  if (role === 'captain' && action === 'approve') {
    sub.captainApproved = 'LTA John Seet � ' + now;
    sub.stage = 'chaplain';
    sub.status = 'pending';
  } else if (role === 'chaplain' && action === 'endorse') {
    sub.chaplainEndorsed = 'Rev Joseph Goh — ' + now;
    if (sub.type === 'new') {
      sub.stage = 'comm';
      sub.status = 'pending';
    } else if (BB._needsFundingRelease(sub)) {
      sub.stage = 'funding-release';
      sub.status = 'approved';
    } else {
      sub.stage = 'closure';
      sub.closureStatus = 'pending';
      sub.status = 'approved';
    }
  } else if (role === 'comm' && action === 'approve') {
    sub.commApproved = 'Training Comm — ' + now;
    if (BB._needsFundingRelease(sub)) {
      sub.stage = 'funding-release';
      sub.status = 'approved';
    } else {
      sub.stage = 'closure';
      sub.closureStatus = 'pending';
      sub.status = 'approved';
    }
  } else if (role === 'comm' && action === 'release-funding') {
    sub.fundingReleased = 'Training Comm — ' + now;
    sub.stage = 'closure';
    sub.closureStatus = 'pending';
    sub.status = 'approved';
  } else if (role === 'comm' && action === 'reject') {
    sub.status = 'rejected';
    sub.stage = 'done';
  }

  if (note) sub.remarks = (sub.remarks ? sub.remarks + ' ' : '') + note;
  BB.persistSubmission(sub);
  return sub;
};

BB.submissionCardHTML = function(sub, role) {
  const o = BB.officers[sub.officerId] || {};
  const cName = BB.courseName(sub);
  const typeLabel = sub.type === 'preapproved' ? 'Pre-approved' : 'New Course';
  const cost = sub.cost || '�';
  const meta = typeLabel + ' � ' + (o.name || '�') + ' � ' + (sub.dates || '�') + ' � ' + cost;
  const purpose = sub.purpose
    ? '<div style="font-size:0.8125rem;color:var(--muted-fg);margin:0.5rem 0 0.625rem;"><strong style="color:var(--fg);">Purpose:</strong> ' + sub.purpose + '</div>'
    : '';
  const jsName = BB._jsStr(o.name);
  const jsCourse = BB._jsStr(cName);
  const companyLine = o.company ? ' � ' + o.company + ' Company' : '';

  // Icon SVGs for action buttons
  const iconReturn   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:0.875rem;height:0.875rem;"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>';
  const iconApprove  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:0.875rem;height:0.875rem;"><polyline points="20 6 9 17 4 12"/></svg>';
  const iconEndorse  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:0.875rem;height:0.875rem;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  const iconReject   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:0.875rem;height:0.875rem;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const actionBar    = (btns) => '<div style="display:flex;border-top:1px solid var(--border);margin-top:0.625rem;">' + btns + '</div>';
  const actionBtn    = (label, icon, style, onclick) =>
    '<button onclick="' + onclick + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.375rem;padding:.5rem;font-size:.8125rem;font-weight:500;border:none;background:none;cursor:pointer;border-right:1px solid var(--border);' + style + '">' + icon + label + '</button>';
  const actionBtnLast= (label, icon, style, onclick) =>
    '<button onclick="' + onclick + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.375rem;padding:.5rem;font-size:.8125rem;font-weight:500;border:none;background:none;cursor:pointer;' + style + '">' + icon + label + '</button>';

  const reviewUrl = function(r) {
    return 'submit.html?ref=' + sub.ref + '&role=' + r;
  };
  const cardTop = '<div class="submission-card" style="cursor:pointer;" onclick="window.location.href=\'' + reviewUrl(role || 'captain') + '\'">'
    + '<div class="submission-card-header"><div><div class="submission-card-title">' + cName + '</div><div class="submission-card-meta">' + meta + '</div></div>' + BB.submissionStatusPill(sub) + '</div>'
    + purpose;
  const refLine = '<div style="font-size:0.75rem;color:var(--muted-fg);padding:.5rem 0 .25rem;">#' + sub.ref + companyLine + '</div>';

  if (role === 'captain') {
    return cardTop + refLine
      + actionBar(actionBtnLast('Review', iconApprove, 'color:var(--primary);', 'event.stopPropagation();window.location.href=\'' + reviewUrl('captain') + '\''))
      + '</div>';
  }

  if (role === 'chaplain') {
    const capBadge = sub.captainApproved
      ? '<div style="display:flex;align-items:center;gap:0.375rem;padding:0.25rem 0.625rem;background:#f0fdf4;border-radius:var(--radius-sm);margin:.375rem 0;font-size:.75rem;"><svg viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.875rem;height:.875rem;"><polyline points="20 6 9 17 4 12"/></svg><span style="color:#166534;font-weight:500;">' + sub.captainApproved + '</span></div>'
      : '';
    return cardTop + capBadge + refLine
      + actionBar(actionBtnLast('Review', iconEndorse, 'color:var(--primary);', 'event.stopPropagation();window.location.href=\'' + reviewUrl('chaplain') + '\''))
      + '</div>';
  }

  if (role === 'comm') {
    return cardTop + refLine
      + actionBar(actionBtnLast('Review', iconApprove, 'color:var(--primary);', 'event.stopPropagation();window.location.href=\'' + reviewUrl('comm') + '\''))
      + '</div>';
  }

  return cardTop + refLine + '</div>';
};

BB.renderCaptainPendingCards = function(container, company, limit) {
  BB.renderCaptainPendingTable(company, container, limit || 10);
};

BB.renderChaplainPendingCards = function(container, limit) {
  if (!container) return;
  const subs = Object.values(BB.submissions)
    .filter(function(s) { return s.status === 'pending' && s.stage === 'chaplain'; })
    .slice(0, limit || 10);
  container.innerHTML = subs.length
    ? subs.map(function(s) { return BB.submissionCardHTML(s, 'chaplain'); }).join('')
    : '<p style="font-size:0.8125rem;color:var(--muted-fg);padding:0.5rem 0;">No submissions awaiting endorsement.</p>';
};

BB.renderCommApprovalsTable = function(tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(function(s) { return s.status === 'pending' && s.stage === 'comm'; });
  if (!subs.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No submissions awaiting Training Comm review</td></tr>';
    return;
  }
  tbody.innerHTML = subs.map(function(sub) {
    const o = BB.officers[sub.officerId] || {};
    const cName = BB.courseName(sub);
    const jsCourse = BB._jsStr(cName);
    const typeBadge = sub.type === 'preapproved'
      ? '<span class="badge badge-success" style="font-size:.7rem;">Pre-approved</span>'
      : '<span class="badge badge-secondary" style="font-size:.7rem;">New Course</span>';
    return '<tr data-search="' + sub.ref.toLowerCase() + ' ' + (o.name || '').toLowerCase() + ' ' + cName.toLowerCase() + '" style="cursor:pointer;" onclick="window.location.href=\'submit.html?ref=' + sub.ref + '&role=comm\'">'  
      + '<td style="font-family:monospace;font-size:0.8rem;color:var(--muted-fg);">#' + sub.ref + '</td>'
      + '<td>' + BB.officerCell(sub.officerId) + '</td>'
      + '<td><div style="font-weight:500;">' + cName + '</div></td>'
      + '<td>' + typeBadge + '</td>'
      + '<td style="font-size:0.8125rem;color:var(--muted-fg);">' + (sub.dates || '—') + '</td>'
      + '<td>' + BB.submissionStatusPill(sub) + '</td>'
      + '<td onclick="event.stopPropagation()"><a href="submit.html?ref=' + sub.ref + '&role=comm" class="btn btn-default btn-sm">Review</a></td></tr>';
  }).join('');
  const countEl = document.getElementById('approval-count');
  if (countEl) countEl.textContent = subs.length + ' awaiting review';
};

BB.loadUserSubmissions();

/* Training Comm - funding release queue */
BB.renderCommFundingQueue = function(tbody) {
  if (!tbody) return;
  const subs = Object.values(BB.submissions)
    .filter(function(s) { return s.stage === 'funding-release'; });
  if (!subs.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No submissions awaiting funding release</td></tr>';
    return;
  }
  tbody.innerHTML = subs.map(function(sub) {
    const o = BB.officers[sub.officerId] || {};
    const cName = BB.courseName(sub);
    const jsCourse = BB._jsStr(cName);
    const isCompanyFunds = sub.fundingMode === 'company-funds';
    const fundingBadge = isCompanyFunds
      ? '<span class="badge badge-destructive" style="font-size:.7rem;">Coy Funds</span>'
      : '<span class="badge badge-warning" style="font-size:.7rem;">Annual Allowance</span>';
    const warnFlag = isCompanyFunds
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:.875rem;height:.875rem;color:var(--destructive);flex-shrink:0;" title="Company funds — review with caution"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> '
      : '';
    return '<tr>'
      + '<td>' + BB.officerCell(sub.officerId) + '</td>'
      + '<td><div class="font-medium text-sm">' + cName + '</div><div class="text-xs text-muted">#' + sub.ref + '</div></td>'
      + '<td>' + fundingBadge + '</td>'
      + '<td class="text-sm" style="display:flex;align-items:center;gap:.25rem;">' + warnFlag + (sub.cost || '—') + '</td>'
      + '<td class="text-sm">' + (sub.dates || '—') + '</td>'
      + '<td><div style="display:flex;align-items:center;gap:.25rem;font-size:.8125rem;color:var(--muted-fg);">'
      + (sub.chaplainEndorsed ? '<svg viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5" style="width:.875rem;height:.875rem;flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg> Chaplain endorsed' : '—')
      + '</div></td>'
      + '<td><div class="flex gap-1">'
      + '<button class="btn btn-default btn-sm" onclick="releaseFunding(\'' + sub.ref + '\',\'' + jsCourse + '\')">Release Funding</button>'
      + '<button class="btn btn-ghost btn-sm" onclick="openFundingDetailDialog(\'' + sub.ref + '\')">View</button>'
      + '</div></td></tr>';
  }).join('');
  const countEl = document.getElementById('funding-count');
  if (countEl) countEl.textContent = subs.length + ' awaiting release';
};

/* Training Comm - course offerings table */
BB.renderCommOfferingsTable = function(tbody) {
  if (!tbody) return;
  const offerings = Object.values(BB.offerings || {});
  if (!offerings.length) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--muted-fg);padding:1.5rem;">No course offerings defined. Add one to publish a scheduled session for officers.</td></tr>';
    return;
  }
  tbody.innerHTML = offerings.map(function(off) {
    const c = BB.courses[off.courseKey] || {};
    const meta = BB.coursesMeta ? (BB.coursesMeta[off.courseKey] || {}) : {};
    const srcChip = (meta.source === 'internal')
      ? '<span class="chip chip-success" style="padding:.1rem .45rem;font-size:.7rem;">Internal</span>'
      : '<span class="chip chip-primary" style="padding:.1rem .45rem;font-size:.7rem;">External</span>';
    const statusPill = !off.active
      ? '<span class="status-pill expired">Cancelled</span>'
      : (off.applicationOpen ? '<span class="status-pill approved">Open</span>' : '<span class="status-pill" style="background:#fef3c7;color:#92400e;">Closed</span>');
    return '<tr>'
      + '<td><div class="font-medium text-sm">' + (c.name || off.courseKey) + '</div></td>'
      + '<td>' + srcChip + '</td>'
      + '<td class="text-sm">' + off.startDate + '</td>'
      + '<td class="text-sm">' + off.endDate + '</td>'
      + '<td class="text-sm text-muted">' + (off.provider || c.provider || '—') + '</td>'
      + '<td class="text-sm text-muted">' + (off.location || '—') + '</td>'
      + '<td class="text-sm">' + (off.capacity ? off.capacity + ' pax' : '—') + '</td>'
      + '<td>' + statusPill + '</td>'
      + '<td><div class="flex gap-1">'
      + '<button class="btn btn-ghost btn-icon btn-sm" title="Edit" onclick="showToast(\'info\',\'Edit Offering\',\'Opening offering editor…\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>'
      + (off.applicationOpen
         ? '<button class="btn btn-ghost btn-icon btn-sm" title="Close applications" onclick="showToast(\'info\',\'Applications closed\',\'This offering is now closed for applications.\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>'
         : '<button class="btn btn-ghost btn-icon btn-sm" title="Open applications" onclick="showToast(\'info\',\'Applications opened\',\'Officers can now apply for this offering.\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg></button>')
      + '</div></td></tr>';
  }).join('');
};
