/* ==========================================================================
   Portfolio.

   One line of what it is, one line of what it changed. Nothing else — no
   architecture, no implementation detail, no self-audit. If someone wants
   depth they can ask on a call, and you control how much you give them.

   `outcome` is the whole point of each row. TODO where you haven't given me
   a real figure — those render as a visible marker so they can't ship
   quietly. Filling them is the single highest-value edit to this site.
   ========================================================================== */

/* One accent per sector. Muted and closely valued so six colours read as a
   set rather than a rainbow — each is used only for the chip and a hairline
   at the top of the card. */
export const sectors = {
  legal: { label: "Legal", color: "#3B5BDB", tint: "#EEF1FE" },
  "internal-ops": { label: "Internal ops", color: "#C0703A", tint: "#FDF2E9" },
  mining: { label: "Mining", color: "#8A6D3B", tint: "#F8F2E6" },
  edutech: { label: "Education", color: "#6741D9", tint: "#F1EDFD" },
  transportation: { label: "Logistics", color: "#0B7285", tint: "#E6F3F5" },
  healthtech: { label: "Health", color: "#2B8A5A", tint: "#E8F5EE" },
};

export const projects = [
  {
    sector: "internal-ops",
    title: "Sales conversation QA at full coverage",
    meta: "AI Engineer · enterprise sales org",
    one: "Two analysts were hand-picking about 1% of calls to review. We ingested every call instead — roughly 17,000 a day — running local NLP for phrase detection and an LLM to score each conversation against the sales playbook.",
    outcome: "Review coverage 1% → 100%. Sales conversion up 20%.",
  },
  {
    sector: "legal",
    title: "Jury-instruction drafting from a filed court checklist",
    meta: "Design and build, end to end · law firm, Los Angeles",
    one: "Before an eviction trial both sides file a checklist of the jury instructions they want read — 15–25 per case, each one full of blanks a paralegal retyped by hand from the complaint, down to which verb agrees with how many defendants there are. The app reads the filed checklist, fills what it can from a 96-template library, and returns a Word draft that highlights every value it filled in yellow and every blank it couldn’t in red. It never picks which instructions apply, and it never hides a gap behind a plausible guess.",
    outcome:
      "A 22-instruction case drafted in about a minute. 70 of the 96 templates need no model call at all.",
    // TODO: the business number, once you have it — cases processed, before/
    // after time per case, or rework rate. That would be stronger than the
    // engineering timings above.
  },
  {
    sector: "mining",
    title: "AI opportunity assessment and ROI model",
    meta: "AI lead · global copper & gold producer",
    one: "Mapped candidate AI use cases across the operation, scored each on value and feasibility, built the ROI model that ranked them, and selected the shortlist that went forward to build. Delivered alongside McKinsey and FTI Consulting.",
    outcome: "TODO: modelled annual value, or shortlist size against candidates screened",
  },
  {
    sector: "internal-ops",
    title: "Enterprise knowledge assistant",
    meta: "AI Engineer · under NDA",
    one: "Retrieval over the company’s own policy, procedure and wiki estate, answering staff questions with the source attached so an answer can be checked rather than taken on trust.",
    outcome: "TODO: questions answered per month, or support tickets deflected",
  },
  {
    sector: "legal",
    title: "Voice agent for intake triage",
    meta: "AI Engineer · law firm, Los Angeles",
    one: "Answers inbound calls, gathers the facts a triage decision actually needs, classifies the matter and routes it — handing off to a person the moment the call moves past what it should decide.",
    outcome: "TODO: calls handled, or change in response time",
  },
  {
    sector: "internal-ops",
    title: "HR assistant for employee questions",
    meta: "AI Engineer · under NDA",
    one: "Answers what HR fields a hundred times a month — leave remaining, sick-leave policy, public holidays — by querying the HR system for that specific employee rather than quoting the handbook.",
    outcome: "TODO: HR tickets deflected per month",
  },
  {
    sector: "internal-ops",
    title: "Resume screening",
    meta: "AI Engineer · under NDA",
    one: "Structured extraction from inbound CVs scored against explicit role criteria, so recruiters open a ranked shortlist instead of a folder — with the rubric written down and auditable rather than buried in a model’s judgment.",
    outcome: "TODO: applications processed per month, change in screening time",
  },
  {
    sector: "internal-ops",
    title: "New-employee onboarding concierge",
    meta: "AI Engineer · under NDA",
    one: "Walks a new hire through their first weeks — what’s next, who to meet, which systems to request — grounded in the company’s own onboarding material.",
    outcome: "TODO: time-to-productivity, or questions handled without a human",
  },
  {
    sector: "legal",
    title: "Expungement eligibility screening",
    meta: "AI Technical Lead · Stanford Law School",
    one: "Screening whether a criminal record qualifies for expungement — a rules-heavy problem where a confident wrong answer costs somebody their record clearance.",
    outcome: "Access-to-justice tooling, in use at the Legal Design Lab.",
  },
  {
    sector: "edutech",
    title: "Student assistant for a CS department",
    meta: "AI Engineer · large public university, California",
    one: "Grounded in course material, department policy and administrative process, absorbing the routine questions that otherwise queue at office hours.",
    outcome: "TODO: students served, or questions handled per term",
  },
  {
    sector: "transportation",
    title: "Dispatch automation for road freight",
    meta: "Founder · international freight operator",
    one: "Load-to-driver assignment automated end to end — incoming loads matched against capacity, driver hours and position — moving the dispatcher to handling only the exceptions.",
    outcome: "TODO: loads dispatched per day, or dispatcher hours returned",
  },
  {
    sector: "healthtech",
    title: "Remote breath-alcohol monitoring",
    meta: "Founder & inventor · patent PL247981B1",
    one: "A wireless breathalyser with CNN face recognition and biometric authentication, so a remote test can be trusted to belong to the right person at the right moment.",
    outcome: "Patent granted. Piloted in transplant-qualification monitoring.",
  },
];
