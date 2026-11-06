/* ============================================================
   Shared poll content + live-polling config (used by the big
   screen and the phone voting page)
   ============================================================ */
const LIVE = {
  url: "https://gfkracmsreovffmsyzwp.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdma3JhY21zcmVvdmZmbXN5endwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5NTU4NjYsImV4cCI6MjEwOTUzMTg2Nn0.MppeTKP2YEMaRTILwnGU0LMx8PAsDJ_j-iNN8PrxlE0",
  secret: "gvnqxlsZf0JB2CMn",            // host-only actions (change question, reset votes)
  voteUrl: "__VOTE_URL__",                 // what the QR code points at
  voteShort: "__VOTE_SHORT__",             // what's printed under the QR
};

const WARMUP = {
  q:"When a graduate underperforms, what's your first response?",
  options:["Training","A manager conversation","Change the role or tasks","Wait and see"],
};

// Work Ready Skills – the printed dictionary on every table (name, short definition)
const WORK_READY = [
  ["Adaptable","Meeting changing demands and finding the best fit."],
  ["Analysis","Analysing things, working out what is happening and why."],
  ["Collaboration","Achieving results by working as part of a team."],
  ["Creativity","Coming up with new ideas and new ways of doing things."],
  ["Curiosity","Being interested in everything, seeking out new information."],
  ["Drive","Being self-motivated and pushing hard to succeed."],
  ["Explainer","Simplifying things so that others can understand."],
  ["Growth","Looking for ways to grow and develop, whatever you are doing."],
  ["Implementer","Turning ideas and plans into practical solutions."],
  ["Initiative","Taking the initiative and making decisions, to get things started."],
  ["Judgement","Making the right decision quickly."],
  ["Learning Agility","Learning things quickly and applying the new learning."],
  ["Personal Responsibility","Being accountable and taking ownership of decisions."],
  ["Pride","Producing work that is of the highest standard and quality."],
  ["Relationship Manager","Building relationships to achieve objectives."],
  ["Resilience","Taking hardships easily, recovering quickly and moving on."],
  ["Resolver","Solving problems, the more difficult the better."],
  ["Self-awareness","Knowing yourself well, understanding your own behaviour."],
  ["Social Adaptability","Adapting behaviour to different social situations."],
  ["Technology Focus","Focusing on technology, keeping up to date with new developments."],
];
const TOP20 = WORK_READY.map(x=>x[0]);
const WR_DEF = Object.fromEntries(WORK_READY);

// The two "you decide" patterns (skill names shown on the phone)
const DECIDE = [
  {key:"decide1", skill:"Curiosity",  title:"A cluster of unrealised strengths"},
  {key:"decide2", skill:"Resilience", title:"A cluster of weaknesses"},
];
const DECIDE_OPTIONS = [["a","Development need","Train it."],["b","Opportunity gap","Change the work."]];
