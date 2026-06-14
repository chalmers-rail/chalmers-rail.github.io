/* ── RAIL Lab news entries — edit this file to update both news.html and the homepage preview ──
   Each entry: { date, sortDate, category, title, link, linkText, body, tags }
   - sortDate: ISO date "YYYY-MM-DD" — used for ordering (newest first)
   - date: display string shown on the page
   - link / linkText: optional external link shown top-right on news.html
   - body: HTML string for the full news.html card body (can be empty string)
   - tags: array of strings (shown on news.html only)
   Entries should be kept newest-first by sortDate; the homepage shows the first 5.
*/
const RAIL_NEWS = [
  {
    sortDate: "2026-06-14",
    date: "14 June 2026",
    category: "Service",
    title: "Shivesh Kumar serves as General Chair of IPRoMM 2026, Bengaluru",
    link: "https://ipromm2026.ammindia.org/",
    linkText: "Conference website →",
    body: `<p>Shivesh Kumar is serving as General Chair of the 4th International and 16th National
Conference on Industrial Problems on Machines and Mechanisms (IPRoMM 2026),
to be held December 20–22, 2026 at Amrita School of Engineering, Amrita Vishwa
Vidyapeetham, Bengaluru, India.</p>
<p><strong>Important Deadlines (Full-length Papers):</strong><br>
Submission deadline: 30 June 2026 · Acceptance notification: 30 September 2026 · Camera-ready due: 31 October 2026</p>`,
    tags: ["IPRoMM 2026", "General Chair", "Conference", "Mechanisms"],
  },
  {
    sortDate: "2026-06-10",
    date: "10 June 2026",
    category: "Open Position",
    title: "Postdoc opening: Modeling of Human-like Balance and Step Recovery",
    link: "https://www.chalmers.se/en/about-chalmers/work-with-us/vacancies/?rmpage=job&rmjob=14944&rmlang=UK",
    linkText: "Apply →",
    body: `<p>We are looking for a postdoctoral researcher to join the Division of Dynamics at
Chalmers. This is an exciting opportunity to transfer cutting-edge methods from
humanoid robotics to biomechanics and transport safety.
<strong>Application deadline: 15 August 2026. Expected start: January 2027.</strong></p>`,
    tags: ["Postdoc", "Biomechanics", "Humanoid robotics", "Transport safety"],
  },
  {
    sortDate: "2026-06-09",
    date: "9 June 2026",
    category: "Competition",
    title: "AI Olympics with RealAIGym — official IJCAI-ECAI 2026 competition",
    link: "https://www.linkedin.com/posts/dfki-robotics-athleticintelligence-ugcPost-7467899206545002498-rmgu/",
    linkText: "LinkedIn post →",
    body: `<p>The fourth edition of the AI Olympics with RealAIGym is running as an official competition
at IJCAI-ECAI 2026, co-organised by DFKI Robotics Innovation Center and RAIL.
Teams must develop a control policy for a two-link robotic swing-up problem — bringing the
robot from arbitrary initial states to an upright position, robustly against external
disturbances — using only the CloudPendulum online testbed with no prior system knowledge.
Winners will present their results to an international audience at IJCAI-ECAI 2026.</p>
<p><strong>Registration deadline: 30 June 2026.</strong></p>`,
    tags: ["AI Olympics", "IJCAI-ECAI 2026", "CloudPendulum", "Reinforcement learning", "Benchmarking"],
  },
  {
    sortDate: "2026-06-09",
    date: "9 June 2026",
    category: "Award",
    title: "Yu-Hung Pai wins Jury Award at Chalmers Doctoral Day Pitch Competition",
    link: "https://www.linkedin.com/posts/yu-hung-pai-05aa72184_jury-award-2-minute-pitch-competition-ugcPost-7467559826194354176-WWPW/",
    linkText: "LinkedIn post →",
    body: `<p>RAIL PhD student Yu-Hung Pai won the Jury Award at the inaugural 2-minute pitch competition
held during Chalmers Doctoral Day, organised by the Chalmers Doctoral Student Guild.
His pitch, <em>Creating a Doctor for Rotating Machinery</em>, represented the Division of
Dynamics, Department of Mechanical Engineering.</p>`,
    tags: ["Award", "Yu-Hung Pai", "Chalmers Doctoral Day"],
  },
  {
    sortDate: "2026-06-25",
    date: "25 June 2026",
    category: "Talk · Outreach",
    title: "Humanoid Robotics on Stage at Almedalen 2026, Visby",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7468213126006644736/",
    linkText: "LinkedIn post →",
    body: `<p>Shivesh Kumar will present at <em>Humanoid Robotics on Stage: Is Sweden Ready for Physical AI?</em>,
a Chalmers event at Almedalen 2026 (Almedalsarenan, Sankt Hansgatan 21, Visby),
Thursday 25 June, 12:45–13:15. The session brings humanoid robotics into the national
policy debate on Sweden's readiness for physical AI.</p>`,
    tags: ["Almedalen", "Humanoid robots", "Physical AI", "Visby"],
  },
  {
    sortDate: "2026-06-05",
    date: "5 June 2026",
    category: "Talk",
    title: "Invited lecture at PKM 2026 Summer School, Montpellier",
    link: "https://www.linkedin.com/posts/shivesh-kumar-09044218_robotics-pkm2026-parallelrobots-ugcPost-7464243149230571520-om8c/",
    linkText: "LinkedIn post →",
    body: `<p>Shivesh Kumar will lecture at the Fourth Summer School on Parallel Kinematic Manipulators
(PKM 2026), hosted at LIRMM, University of Montpellier, France (September 21–25, 2026).
The lecture covers legged robots with kinematic loops and hybrid robot modelling, presenting
a computationally efficient approach for loop-closure constraints and actuation-space control.</p>`,
    tags: ["Invited lecture", "Parallel robots", "Montpellier", "Sep 2026"],
  },
  {
    sortDate: "2026-06-02",
    date: "2 June 2026",
    category: "People",
    title: "Farhad Mehdifar joins RAIL as Postdoctoral Researcher",
    link: "",
    linkText: "",
    body: `<p>Farhad Mehdifar has joined the lab as a postdoctoral researcher, working on
<a href="projects.html">AI-based Holistic Co-Design of Legged Robots</a>,
funded by the SSF Future Research Leader grant (FFL-9). Welcome, Farhad!</p>`,
    tags: [],
  },
  {
    sortDate: "2026-06-01",
    date: "1 June 2026",
    category: "Funding",
    title: "New Chalmers AoA Transport grant: Human Balance and Step Recovery",
    link: "https://research.chalmers.se/en/project/12868",
    linkText: "Project page →",
    body: `<p>RAIL has received a 2 MSEK grant from Chalmers Area of Advance Transport (2027–2028)
for the project <em>Modeling of Human Balance and Step Recovery in Public Transportation</em>.
The project applies reinforcement learning and model predictive control to simulate
human balance responses in transit vehicles, with applications in autonomous vehicle
design and rehabilitation aids.</p>`,
    tags: ["AoA Transport", "2 MSEK", "2027–2028"],
  },
  {
    sortDate: "2026-05-14",
    date: "14 May 2026",
    category: "Talk · Outreach",
    title: "Keynote at Elektronikmässan 2026, Gothenburg",
    link: "https://www.linkedin.com/posts/shivesh-kumar-09044218_humanoidrobots-physicalai-robotics-ugcPost-7451551077092651008-Oyq6/",
    linkText: "LinkedIn post →",
    body: `<p>Shivesh Kumar delivered a keynote at Elektronikmässan 2026 in Gothenburg on the rise of
humanoid robots and physical AI — covering the transition from research prototypes to
industrial deployment, and the enabling role of dynamics, control, AI, and mechatronic design.
The talk was followed by a fireside chat with Mehrdad Farimani and Leila Khammari on
electronics and humanoid robotics in manufacturing.</p>
<p>RAIL also showcased robots at the exhibition, giving engineers and industry leaders
hands-on interaction with the lab's work.</p>`,
    tags: ["Keynote", "Humanoid robots", "Physical AI", "Industry outreach"],
  },
];

/* Sort by sortDate descending — ensures order is always correct regardless of entry position */
RAIL_NEWS.sort(function(a, b) { return b.sortDate.localeCompare(a.sortDate); });
