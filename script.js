/* ===== DATA ===== */
const EMAIL = 'praveengunasekara7' + '@' + 'gmail.com';
const GH = 'https://github.com/slgunasekara';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const bars = [['Java', 90], ['Python', 82], ['JavaScript', 75], ['PHP', 65], ['MySQL / PostgreSQL', 80], ['HTML / CSS', 88], ['JavaFX', 72], ['OOP / Design Patterns', 85]];
const tech = [
  ['fa-brands fa-java', 'Java', '#f89820'], ['fa-brands fa-python', 'Python', '#ffd43b'], ['fa-brands fa-js', 'JavaScript', '#f7df1e'], ['fa-solid fa-code', 'TypeScript', '#4b9bff'],
  ['fa-brands fa-react', 'React', '#61dafb'], ['fa-brands fa-node-js', 'MERN stack', '#6cc24a'], ['fa-solid fa-leaf', 'Spring Boot', '#6db33f'], ['fa-brands fa-php', 'PHP', '#9aa5e8'], ['fa-solid fa-window-maximize', 'JavaFX', '#ff8a3d'],
  ['fa-brands fa-html5', 'HTML', '#e44d26'], ['fa-brands fa-css3-alt', 'CSS', '#4c8bf5'],
  ['fa-solid fa-database', 'MySQL', '#4aa3df'], ['fa-solid fa-server', 'PostgreSQL', '#5b9bd5'], ['fa-solid fa-layer-group', 'MongoDB', '#4db33d'],
  ['fa-solid fa-brain', 'AI / ML', '#c084fc'], ['fa-solid fa-square-root-variable', 'NumPy', '#4dabcf'], ['fa-solid fa-table', 'Pandas', '#f472b6'], ['fa-solid fa-diagram-project', 'MLflow', '#38bdf8'], ['fa-brands fa-docker', 'Docker', '#2496ed'],
  ['fa-brands fa-github', 'GitHub', '#e6edf3'], ['fa-brands fa-git-alt', 'Git', '#f05133'], ['fa-solid fa-desktop', 'IntelliJ IDEA', '#fe5d8f'], ['fa-brands fa-linux', 'Linux', '#fcc624'],
  ['fa-brands fa-figma', 'Figma', '#f97362'], ['fa-solid fa-palette', 'Photoshop', '#31a8ff'], ['fa-solid fa-file-excel', 'Excel', '#21c47a'], ['fa-brands fa-google', 'Google Workspace', '#ea4335'],
  ['fa-solid fa-gamepad', '2D game dev', '#22d3ee'], ['fa-solid fa-camera', 'Photography', '#ec4899']];
const comps = [
  ['Full stack development', 'React.js, TypeScript, MERN stack, Spring Boot / Spring Framework, JavaFX and REST-based web applications, Java, Python'],
  ['AI & machine learning', 'Python, NumPy, Pandas, regression, XGBoost / LightGBM / CatBoost, CNNs and transfer learning (ResNet)'],
  ['NLP, LLMs & MLOps', 'Transformers, prompt engineering, LLM fine-tuning, RAG, vector databases, Docker, MLflow, CI/CD, AI agents'],
  ['Databases', 'MySQL, PostgreSQL, SQL, MongoDB and database management systems'],
  ['Business management', 'Operations, finance, accounting, account management, marketing and customer service'],
  ['Teamwork & problem solving', 'OOP, algorithms and problem solving (HackerRank certified), team building and communication']];
const pro = ['Team building', 'Problem solving', 'Strategic planning', 'Data analysis', 'Finance & accounting', 'Marketing', 'Customer service', 'Business management', 'Communication', 'Research', 'Web development', 'UI/UX', 'Data science', 'Desktop apps'];

const brands = {
  slt: { name: 'SL Travel Buddy', img: 'assets/brand/sltravelbuddy.png', links: [
    ['fa-brands fa-instagram', 'Instagram', 'https://www.instagram.com/sl_travel_buddy/'],
    ['fa-brands fa-facebook', 'Facebook', 'https://www.facebook.com/profile.php?id=61595471847249'],
    ['fa-brands fa-tiktok', 'TikTok', 'https://www.tiktok.com/@sl.travel.buddy'],
    ['fa-brands fa-linkedin-in', 'LinkedIn', 'https://www.linkedin.com/in/sl-travel-buddy-045545416/'],
    ['fa-brands fa-whatsapp', 'WhatsApp', 'https://wa.me/94754424053?text=Hello%2C%20I%20am%20interested%20in%20your%20software%20services.'],
    ['fa-brands fa-github', 'GitHub', 'https://github.com/sltravelbuddy'],
    ['fa-solid fa-globe', 'Head company site', 'https://slgunasekara.github.io/AMGLankaGroup/']] },
  aml: { name: 'AMG Lanka Group (Pvt) Ltd', img: 'assets/brand/amg-lanka-group.png', links: [
    ['fa-solid fa-globe', 'Company website', 'https://slgunasekara.github.io/AMGLankaGroup/'],
    ['fa-brands fa-facebook', 'Facebook', 'https://www.facebook.com/profile.php?id=61593002227316'],
    ['fa-brands fa-tiktok', 'TikTok', 'https://www.tiktok.com/@amglanka'],
    ['fa-brands fa-linkedin-in', 'LinkedIn', 'https://www.linkedin.com/company/amg-lanka-group/posts/?feedView=all']] }
};
const socialHTML = k => k && brands[k] ? `<h4>Find us online</h4><div class="socials">${brands[k].links.map(l => `<a class="key" href="${l[2]}" target="_blank" rel="noopener"><i class="${l[0]}"></i> ${l[1]}</a>`).join('')}</div>` : '';

const thumb = x => x.img ? `<img class="${x.logo ? 'logo' : ''}" src="${x.img}" alt="${esc(x.t || x.org || '')}" loading="lazy">` : `<div class="ph"><i class="${x.icon || 'fa-solid fa-code'}"></i></div>`;
const projects = [
  { t: 'SL Travel Buddy', tag: 'Web app / Bus booking', course: 'AMG Lanka Group product', img: 'assets/brand/sltravelbuddy.png', logo: 1,
    d: 'A bus booking platform for Sri Lanka with a company console for operators, buses, routes and fares, plus For Hire bookings and a contact page. Built by AMG Lanka Group.',
    f: ['Operator console for buses, routes and fares', 'Online seat booking', 'For Hire requests', '3D bus experience on the company site'], tech: ['Web', 'Booking', 'Operators', '3D'], gh: 'https://slgunasekara.github.io/AMGLankaGroup/', ghl: 'Open company site', st: 'In development', brand: 'slt' },
  { t: 'Bus Booking System', tag: 'MERN + TypeScript', course: 'AMG Lanka Group', icon: 'fa-solid fa-bus', d: 'A bus booking platform built for AMG Lanka Group with the MERN stack and TypeScript.', f: [], tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'], gh: GH, st: '' },
  { t: 'Bus Fleet Management System', tag: 'Spring Boot / React / PostgreSQL', course: 'AMG Lanka Group', icon: 'fa-solid fa-van-shuttle', d: 'A bus business fleet management application built for AMG Lanka Group.', f: [], tech: ['Spring Boot', 'React', 'PostgreSQL'], gh: GH, st: '' },
  { t: 'FairVision', tag: 'AI / Deep learning', course: 'AI & ML research project', icon: 'fa-solid fa-eye', d: 'Detecting and mitigating bias in a CNN-based age group classification system using the FairFace dataset.', f: [], tech: ['Python', 'CNN', 'FairFace', 'Bias mitigation'], gh: GH, st: '' },
  { t: 'AI & ML Engineer capstone', tag: 'AI / ML / MLOps', course: 'Certified AI & ML Engineer programme, IJSE', icon: 'fa-solid fa-robot', d: 'Capstone project covering machine learning, deep learning, NLP and LLMs, RAG and MLOps deployment.', f: [], tech: ['Python', 'Deep learning', 'NLP / LLMs', 'RAG', 'MLOps'], gh: GH, st: 'Completed' },
  { t: 'AMG Lanka Group website', tag: 'HTML / CSS / JS', course: 'AMG Lanka Group', img: 'assets/brand/amg-lanka-group.png', logo: 1, d: 'The company website for AMG Lanka Group.', f: [], tech: ['HTML', 'CSS', 'JavaScript'], gh: 'https://slgunasekara.github.io/AMGLankaGroup/', ghl: 'Open company site', st: '', brand: 'aml' },
  { t: 'Lagoon Villa hotel website', tag: 'HTML / CSS / JS', course: 'Client website', icon: 'fa-solid fa-hotel', d: 'A website for the hotel Lagoon Villa.', f: [], tech: ['HTML', 'CSS', 'JavaScript'], gh: GH, st: '' },
  { t: 'Mental Health Center Management System', tag: 'Java / JavaFX desktop', course: 'IJSE', icon: 'fa-solid fa-heart-pulse', d: 'A desktop application in Java with layered architecture, ORM, JavaFX and MySQL.', f: [], tech: ['Java', 'Layered architecture', 'ORM', 'JavaFX', 'MySQL'], gh: GH, st: '' },
  { t: 'Student Management System', tag: 'Java / JavaFX desktop', course: 'IJSE', icon: 'fa-solid fa-user-graduate', d: 'A desktop application in Java with layered architecture, ORM, JavaFX and MySQL.', f: [], tech: ['Java', 'Layered architecture', 'ORM', 'JavaFX', 'MySQL'], gh: GH, st: '' },
  { t: 'Supermarket POS web application', tag: 'HTML / CSS / JS / MySQL', course: 'IJSE', icon: 'fa-solid fa-cart-shopping', d: 'A point of sale web application for a supermarket.', f: [], tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'], gh: GH, st: '' },
  { t: 'SL Travel Buddy Fleet Management', tag: 'Java / JavaFX / MySQL', course: 'SL Travel Buddy', icon: 'fa-solid fa-bus-simple', d: 'A fleet management desktop application with MVC and layered architecture in Java and JavaFX.', f: [], tech: ['Java', 'JavaFX', 'MySQL', 'MVC'], gh: GH, st: '', brand: 'slt' },
  { t: 'Spring Boot back-end application', tag: 'Spring Boot', course: 'IJSE Graduate Diploma in Software Engineering', icon: 'fa-solid fa-leaf', d: 'A back-end application developed with Spring Boot during the diploma.', f: [], tech: ['Spring Boot', 'Java', 'REST'], gh: GH, st: '' },
  { t: 'Stock Management System', tag: 'Java / CLI', course: 'PRF coursework, Programming Fundamentals', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    d: 'A CLI stock management system in Java with inventory tracking, stock levels and validated data handling.',
    f: ['Real-time inventory tracking', 'Low-stock alerts', 'Stock level management', 'Robust data validation', 'Reporting', 'File I/O persistence'], tech: ['Java', 'CLI', 'OOP', 'Data structures', 'File I/O'], gh: GH, st: 'Completed' },
  { t: 'Connect Four with AI', tag: 'Java / AI', course: 'OOP coursework, Object-Oriented Programming', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    d: 'Connect Four with an AI opponent using Minimax and alpha-beta pruning, showing inheritance, polymorphism and encapsulation.',
    f: ['Minimax AI', 'Alpha-beta pruning', 'Multiple difficulty levels', 'Graphical board', 'Win detection', 'Player vs player'], tech: ['Java', 'Minimax', 'Alpha-beta', 'OOP', 'Swing'], gh: GH, st: 'Completed' },
  { t: 'Point of Sale (POS) System', tag: 'JavaFX / MySQL', course: 'GDSE semester final project', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    d: 'A POS system for small and medium retail with inventory, billing, customer handling and full MySQL integration.',
    f: ['Inventory management', 'Billing and invoices', 'Customer database', 'Sales reports', 'MySQL integration', 'Authentication and roles', 'Layered architecture'], tech: ['JavaFX', 'MySQL', 'JDBC', 'CRUD', 'JasperReports'], gh: GH, st: 'Completed' },
  { t: 'UI/UX for Special Needs Students', tag: 'Figma / UI/UX', course: 'IIT Foundation, Innovative Solutions module', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    d: 'An accessibility-focused learning platform design for students with special needs, built on user research and iterative Figma prototyping.',
    f: ['WCAG 2.1 compliance', 'User research and personas', 'Iterative prototype testing', 'High-contrast modes', 'Screen reader support', 'Simplified navigation'], tech: ['Figma', 'UI/UX', 'Accessibility', 'Prototyping'], gh: GH, st: 'Completed' }
];

const A = 'assets/assignments/';
const mk = (folder, n, imgPre, vidPre, pages, vids) => pages.map((p, i) => ({
  n: 'Task ' + String(i + 1).padStart(2, '0'), page: A + folder + '/assignment/' + p,
  img: A + folder + '/' + imgPre + '/image/' + (folder.endsWith('01') && i === 5 ? 'Taks_06' : 'Task_' + String(i + 1).padStart(2, '0')) + '.png',
  vid: vids ? A + folder + '/' + vidPre + '/video/Task_' + String(i + 1).padStart(2, '0') + '.mp4' : null
}));
const t = n => Array.from({ length: n }, (_, i) => 'Task_' + String(i + 1).padStart(2, '0') + '.html');
const assignments = [
  { name: 'Assignment 01', title: 'HTML & CSS fundamentals', tasks: mk('assignment 01', 6, 'ass_1_assets', 'ass_1_assets', t(6), false) },
  { name: 'Assignment 02', title: 'Layouts and styling', tasks: mk('assignment 02', 7, 'ass_2_assets', 'ass_2_assets', t(7), true) },
  { name: 'Assignment 03', title: 'Assignment 03', tasks: mk('assignment 03', 1, 'ass_3_assets', 'ass_3_assets', ['index.html'], true) },
  { name: 'Assignment 04', title: 'Assignment 04', tasks: mk('assignment 04', 1, 'ass_4_assets', 'ass_4_assets', ['index.html'], true) }
];

const edu = [
  ['Jan 2025 to May 2027', 'Graduate Diploma in Software Engineering (GDSE)', 'IJSE | Institute of Software Engineering', 'Computer Science: full-stack development, AI/ML, database management.'],
  ['Feb 2025 to Feb 2028', 'BSc (Hons) Computer Software Engineering', 'The University of Bolton', 'Degree programme delivered with IJSE. Data analysis, Linux, software engineering.'],
  ['Nov 2025 to Jun 2026', 'Certified AI & ML Engineer (CAME)', 'IJSE | Institute of Software Engineering', 'Completed with A+ (94/100). Certificate issued 3 September 2026.'],
  ['Feb 2025 to Sep 2025', 'Certificate Course in English Language', 'University of Colombo', 'English language proficiency programme.'],
  ['Dec 2022 to Dec 2023', 'Web Development & 2D Game Development', 'Java Institute for Advanced Technology', 'Web fundamentals and 2D game development with Java.'],
  ['2020 to 2024', 'Advanced Level: Combined Maths, Physics, Chemistry', 'G/Sri Devananda College, Ambalangoda', 'Prefect team, chess team, football team, science and maths groups.'],
  ['2014 to 2019', 'Ordinary Level', 'G/Sri Devananda College, Ambalangoda', 'Chess team, football team, art and science groups.']
];

const exps = [
  { t: 'Founder', org: 'AMG Lanka Group (Pvt) Ltd', per: 'August 2026 to present', loc: 'Hikkaduwa, Sri Lanka', img: 'assets/brand/amg-lanka-group.png', logo: 1,
    d: 'Founded AMG Lanka Group to launch new business ventures and grow the passenger transport business.',
    a: ['Plans to expand the bus fleet through tenders', 'Lead business planning and decision-making alongside ongoing software and product development', 'Launched the AMG Lanka Group company site'], tags: ['Leadership', 'Software engineering', 'Product', 'Strategy'], brand: 'aml' },
  { t: 'Founder', org: 'SL Travel Buddy', per: '2025 to present', loc: 'Sri Lanka', img: 'assets/brand/sltravelbuddy.png', logo: 1,
    d: 'An app for passenger services in Sri Lanka, covering bus booking and travel information.',
    a: ['Built a MERN + TypeScript bus booking web application', 'Manage the project end to end: requirements, design, development and version control with Git/GitHub'], tags: ['Product', 'Problem solving', 'Web'], brand: 'slt' },
  { t: 'Owner / Manager', org: 'Gunasekara Travels', per: 'July 1991 to August 2026 (family business)', loc: 'Seenigama, Hikkaduwa, Sri Lanka', img: 'assets/brand/gunasekara-travels.jpg', logo: 1,
    d: 'Family-owned bus travel business in Hikkaduwa, Galle, established in 1991.',
    a: ['Manage day-to-day operations, including finance, accounting and account management', 'Handle customer service, communication and marketing for passenger travel services', 'Combine business experience with technical skills to find where software can improve passenger services'], tags: ['Operations', 'Finance', 'Marketing', 'Customer service', 'Fleet'] },
  { t: 'Student', org: 'IJSE | Institute of Software Engineering', per: 'February 2025 to present', loc: 'Colombo, Sri Lanka', img: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80',
    d: 'Graduate Diploma in Software Engineering alongside the AI & ML Engineer program: Spring Boot, layered architecture, MySQL, PostgreSQL, machine learning.',
    a: ['Built a full POS system as a semester project', 'Completed the Certified AI & ML Engineer program, A+', 'Earned seven HackerRank skill certificates'], tags: ['AI/ML', 'Java', 'Python', 'Spring Boot', 'Linux', 'SQL'] }
];

const certs = [['Problem Solving (Basic)', 'problem-solving', 'OED500785F89'], ['React (Basic)', 'react', 'AA1D5504FD1A'], ['Python (Basic)', 'python', '1BD73D532BDB'], ['JavaScript (Basic)', 'javascript', '3871CDD55681'], ['CSS (Basic)', 'css', '77CC1FC83E76'], ['SQL (Basic)', 'sql', '9C9D66780400'], ['Java (Basic)', 'java', '8EB4F2B43394']]
  .map(c => ({ src: `assets/certificates/hr-${c[1]}.png`, cap: `HackerRank ${c[0]}, credential ${c[2]}` }));
const certsAll = [{ src: 'assets/certificates/came-certificate.png', cap: 'IJSE Certified AI & ML Engineer, CAME-2026-10015' }, { src: 'assets/certificates/came-transcript.png', cap: 'IJSE official academic transcript, overall A+ (94/100)' }, ...certs];

const gallery = [
  ['assets/gallery/ijse.png', 'Campus life', 'IJSE'], ['assets/gallery/FB_IMG_1755176113507.jpg', 'Gunasekara Travels', 'Our fleet'],
  ['assets/gallery/IMG_20250331_143040.jpg', 'Businessman', 'AMG Group'], ['assets/gallery/IMG_20250401_130609.jpg', 'On the road', 'Gunasekara Travels journeys'],
  ['assets/gallery/santa-fe.jpg', 'My vehicle', 'Hyundai Santa Fe'], ['assets/gallery/My%20image%20.jpg', 'AMG', ''], ['assets/gallery/My%20image%202.png', 'AMG', ''], ['assets/gallery/amg.png', 'Character', '']
];

/* ===== RENDER ===== */
$('#bars').innerHTML = bars.map(b => `<div class="bar"><div><span>${b[0]}</span><span>${b[1]}%</span></div><i><b data-w="${b[1]}"></b></i></div>`).join('');
$('#techChips').innerHTML = tech.map((x, i) => `<span class="chip tc" style="--c:${x[2]};--d:${(i % 9) * .35}s"><i class="${x[0]}"></i>${x[1]}</span>`).join('');
$('#compGrid').innerHTML = comps.map(c => `<article class="glass pad rv" data-tilt><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('');
$('#proChips').innerHTML = pro.map(x => `<span class="chip">${esc(x)}</span>`).join('');
$('#projectCards').innerHTML = projects.map((p, i) => `<button class="glass card rv" data-tilt data-proj="${i}"><div class="th">${thumb(p)}<span class="tag">${esc(p.tag)}</span></div><div class="bd"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="tags">${p.tech.slice(0, 4).map(x => `<span>${esc(x)}</span>`).join('')}</div></div></button>`).join('');
$('#eduList').innerHTML = edu.map(e => `<article class="glass tl rv"><time>${e[0]}</time><h3>${e[1]}</h3><p class="org">${e[2]}</p><p>${e[3]}</p></article>`).join('');
$('#expCards').innerHTML = exps.map((e, i) => `<button class="glass card rv" data-tilt data-exp="${i}"><div class="th">${thumb(e)}</div><div class="bd"><h3>${esc(e.t)}, ${esc(e.org)}</h3><p class="muted">${esc(e.per)}</p><p>${esc(e.d)}</p><div class="tags">${e.tags.map(x => `<span>${esc(x)}</span>`).join('')}</div></div></button>`).join('');
$('#hrGrid').innerHTML = certs.map((c, i) => `<div class="glass cert rv"><img src="${c.src}" alt="${esc(c.cap)}" data-lb="certs" data-i="${i + 2}" loading="lazy"></div>`).join('');
$('#galGrid').innerHTML = gallery.map((g, i) => `<button class="glass gi rv" data-lb="gal" data-i="${i}"><img src="${g[0]}" alt="${esc(g[1])}" loading="lazy">${g[1] ? `<span>${esc(g[1])}</span>` : ''}</button>`).join('');
$('#mail').textContent = EMAIL;

/* assignments */
let curA = 0;
function renderAsgn() {
  const a = assignments[curA];
  $('#asgnTabs').innerHTML = assignments.map((x, i) => `<button class="key ${i === curA ? 'on key-blue' : ''}" data-tab="${i}">${x.name}</button>`).join('') + `<a class="key" href="${GH}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>`;
  $('#asgnSub').textContent = `${a.title}. ${a.tasks.length} task${a.tasks.length > 1 ? 's' : ''}: select a card to run it${a.tasks[0].vid ? ' or watch the demo' : ''}.`;
  $('#asgnCards').innerHTML = a.tasks.map((k, i) => `<button class="glass card" data-tilt data-task="${i}"><div class="th"><img src="${encodeURI(k.img)}" alt="${k.n}" loading="lazy" onerror="this.style.display='none'"></div><div class="bd"><h3>${k.n}</h3><p class="muted">${a.name}</p></div></button>`).join('');
  bindTilt();
}
renderAsgn();

/* ===== OVERLAYS ===== */
const modal = $('#modal'), mBody = $('#modalBody'), lb = $('#lb'), run = $('#run');
let lbSet = [], lbI = 0, lastFocus = null;
const open = el => { lastFocus = document.activeElement; el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('.close,[data-close]', el)?.focus(); };
const closeAll = () => { [modal, lb, run].forEach(o => { o.classList.remove('open'); o.setAttribute('aria-hidden', 'true'); }); $('#runFrame').src = 'about:blank'; mBody.innerHTML = ''; document.body.style.overflow = ''; lastFocus?.focus(); };
const showLb = () => { const x = lbSet[lbI]; $('#lbImg').src = x.src; $('#lbImg').alt = x.cap; $('#lbCap').textContent = x.cap; };
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
  if (lb.classList.contains('open')) { if (e.key === 'ArrowRight') $('.lb-next').click(); if (e.key === 'ArrowLeft') $('.lb-prev').click(); }
});
document.addEventListener('click', e => {
  const c = e.target.closest('[data-close]'); if (c || e.target.classList.contains('overlay') && !run.contains(e.target)) return closeAll();
  const p = e.target.closest('[data-proj]');
  if (p) { const x = projects[+p.dataset.proj]; mBody.innerHTML = `<div class="mh">${thumb(x)}</div><div class="mb"><h3>${esc(x.t)}</h3><p class="muted">${[x.course, x.st].filter(Boolean).map(esc).join(' | ')}</p><p>${esc(x.d)}</p>${x.f && x.f.length ? `<h4>Key features</h4><ul>${x.f.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}<h4>Tech stack</h4><div class="chips small">${x.tech.map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div><p><a class="key key-blue" style="margin-top:1.2rem" href="${x.gh}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> ${x.ghl || 'View on GitHub'}</a></p>${socialHTML(x.brand)}</div>`; return open(modal); }
  const x2 = e.target.closest('[data-exp]');
  if (x2) { const x = exps[+x2.dataset.exp]; mBody.innerHTML = `<div class="mh">${thumb(x)}</div><div class="mb"><h3>${esc(x.t)}, ${esc(x.org)}</h3><p class="muted">${esc(x.per)} | ${esc(x.loc)}</p><p>${esc(x.d)}</p><h4>Highlights</h4><ul>${x.a.map(f => `<li>${esc(f)}</li>`).join('')}</ul><div class="chips small">${x.tags.map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div>${socialHTML(x.brand)}</div>`; return open(modal); }
  const bt = e.target.closest('[data-brand]');
  if (bt) { const b = brands[bt.dataset.brand]; mBody.innerHTML = `<div class="mh"><img class="logo" src="${b.img}" alt=""></div><div class="mb"><h3>${esc(b.name)}</h3>${socialHTML(bt.dataset.brand)}</div>`; return open(modal); }
  const tb = e.target.closest('[data-tab]'); if (tb) { curA = +tb.dataset.tab; return renderAsgn(); }
  const tk = e.target.closest('[data-task]');
  if (tk) { const a = assignments[curA], k = a.tasks[+tk.dataset.task];
    mBody.innerHTML = `<div class="mh"><img src="${encodeURI(k.img)}" alt=""></div><div class="mb"><h3>${a.name}: ${k.n}</h3><p class="muted">${a.title}</p><p style="margin-top:1rem;display:flex;gap:.8rem;flex-wrap:wrap"><button class="key key-blue" data-runpage="${encodeURI(k.page)}" data-runname="${a.name} ${k.n}"><i class="fa-solid fa-play"></i> Run code</button><a class="key" href="${GH}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a></p>${k.vid ? `<video controls playsinline preload="metadata" src="${encodeURI(k.vid)}"></video>` : ''}</div>`; return open(modal); }
  const rp = e.target.closest('[data-runpage]'); if (rp) { modal.classList.remove('open'); $('#runTitle').textContent = rp.dataset.runname; $('#runFrame').src = rp.dataset.runpage; return open(run); }
  const l = e.target.closest('[data-lb]'); if (l) { lbSet = l.dataset.lb === 'gal' ? gallery.map(g => ({ src: g[0], cap: [g[1], g[2]].filter(Boolean).join(': ') })) : certsAll; lbI = +l.dataset.i; showLb(); return open(lb); }
  if (e.target.closest('.lb-prev')) { lbI = (lbI - 1 + lbSet.length) % lbSet.length; showLb(); }
  if (e.target.closest('.lb-next')) { lbI = (lbI + 1) % lbSet.length; showLb(); }
  const m = e.target.closest('.copy-email'); if (m) { e.preventDefault(); navigator.clipboard?.writeText(EMAIL).then(() => { const T = $('#toast'); T.classList.add('show'); setTimeout(() => T.classList.remove('show'), 1800); }); }
});

/* contact form -> opens the user's mail app */
$('#cform').addEventListener('submit', e => {
  e.preventDefault();
  const body = `${$('#fm').value}\n\nFrom: ${$('#fn').value} (${$('#fe').value})`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent($('#fs').value || 'Portfolio message')}&body=${encodeURIComponent(body)}`;
  $('#fmsg').textContent = 'Opening your email app. If nothing opens, write to ' + EMAIL + '.';
});

/* ===== NAV, REVEAL, TYPED, TILT ===== */
const hbg = $('#hbg'), links = $('#navlinks');
hbg.onclick = () => { const o = links.classList.toggle('open'); hbg.setAttribute('aria-expanded', o); };
links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); hbg.setAttribute('aria-expanded', false); } });

const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); $$('[data-w]', x.target).forEach(b => b.style.width = b.dataset.w + '%'); io.unobserve(x.target); } }), { threshold: .12 });
$$('.rv').forEach(el => io.observe(el));
$$('.bar').forEach(el => io.observe(el)); // fills bars when scrolled to
const barIO = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { $$('[data-w]', x.target).forEach(b => b.style.width = b.dataset.w + '%'); barIO.unobserve(x.target); } }), { threshold: .2 });
$$('#bars').forEach(el => barIO.observe(el));

const secIO = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) $$('#navlinks a[data-s]').forEach(a => a.classList.toggle('active', a.dataset.s === x.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
$$('main section').forEach(s => secIO.observe(s));

const words = ['Building full stack apps with MERN and Spring Boot.', 'Applying machine learning and generative AI.', 'Running a bus company and a software studio.'];
let wi = 0, ci = 0, del = false;
(function type() {
  const w = words[wi], el = $('#typed');
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) { el.textContent = words[0]; return; }
  el.textContent = w.slice(0, ci += del ? -1 : 1);
  let d = del ? 28 : 55;
  if (!del && ci === w.length) { del = true; d = 1600; } else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 350; }
  setTimeout(type, d);
})();

function bindTilt() {
  if (matchMedia('(hover:none)').matches) return;
  $$('[data-tilt]:not([data-bound])').forEach(el => {
    el.dataset.bound = 1;
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateZ(0)`; });
    el.addEventListener('pointerleave', () => el.style.transform = '');
  });
}
bindTilt();

window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 700));
$('#bgv').play?.().catch(() => { });

/* ===== 3D GLASS MODEL (scroll driven) ===== */
(function () {
  if (typeof THREE === 'undefined') return;
  const cv = $('#gl');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(40, 1, .1, 100);
  cam.position.z = 9;

  // procedural studio environment so glass has something to reflect
  const ec = document.createElement('canvas'); ec.width = 512; ec.height = 256;
  const g = ec.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#9fd0ff'); gr.addColorStop(.45, '#1d4ed8'); gr.addColorStop(.55, '#06122e'); gr.addColorStop(1, '#e9b949');
  g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
  g.fillStyle = 'rgba(255,255,255,.95)'; g.fillRect(60, 40, 90, 50); g.fillRect(330, 70, 120, 30); g.fillRect(220, 150, 60, 40);
  const env = new THREE.CanvasTexture(ec); env.mapping = THREE.EquirectangularReflectionMapping;

  const glass = c => new THREE.MeshPhysicalMaterial({ color: c, metalness: .1, roughness: .04, transparent: true, opacity: .55, envMap: env, envMapIntensity: 1.6, clearcoat: 1, clearcoatRoughness: .05, reflectivity: .9, side: THREE.DoubleSide });
  const root = new THREE.Group(); scene.add(root);
  // only glass diamonds (octahedra), orbiting a common centre
  const orbs = [], N = 14;
  for (let i = 0; i < N; i++) {
    const big = i < 5, sz = big ? .3 + Math.random() * .2 : .12 + Math.random() * .12;
    const o = new THREE.Mesh(new THREE.OctahedronGeometry(sz), glass(i % 3 === 0 ? 0xffffff : i % 3 === 1 ? 0x38bdf8 : 0x7fb7ff));
    o.scale.y = 1.5; // taller, diamond-like
    o.userData = { a: i / N * Math.PI * 2, r: 2.0 + Math.random() * 1.4, s: .15 + Math.random() * .3, y: (Math.random() - .5) * 4 };
    orbs.push(o); root.add(o);
  }
  scene.add(new THREE.AmbientLight(0xffffff, .5));
  const l1 = new THREE.PointLight(0x60a5fa, 2.2, 30); l1.position.set(5, 4, 6); scene.add(l1);
  const l2 = new THREE.PointLight(0xe9b949, 1.6, 30); l2.position.set(-5, -3, 4); scene.add(l2);

  const size = () => { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  size(); addEventListener('resize', size);
  let tp = 0, p = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
  addEventListener('pointermove', e => { tmx = e.clientX / innerWidth - .5; tmy = e.clientY / innerHeight - .5; });
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  let vis = true; document.addEventListener('visibilitychange', () => vis = !document.hidden);

  (function loop(t) {
    requestAnimationFrame(loop); if (!vis) return;
    const max = document.documentElement.scrollHeight - innerHeight; tp = max > 0 ? scrollY / max : 0;
    p += (tp - p) * .06; mx += (tmx - mx) * .05; my += (tmy - my) * .05;
    const wide = innerWidth > 860, sec = t * .001;
    // glides from the hero (right) down the page, swinging left and right of the content
    const x = wide ? (p < .06 ? 2.2 : Math.cos(p * Math.PI * 7) * 2.6) : 0;
    const y = wide ? Math.sin(p * Math.PI * 3) * .6 : -1.4 + Math.sin(p * Math.PI * 4) * .5;
    root.position.set(x + mx * .5, y - my * .4, 0);
    const s = wide ? 1 : .55; root.scale.setScalar(s * (1 + Math.sin(p * Math.PI * 2) * .12));
    root.rotation.y = p * Math.PI * 6 + mx * .8 + (reduce ? 0 : sec * .12);
    root.rotation.x = my * .4;
    orbs.forEach((o, i) => { const d = o.userData, a = d.a + sec * d.s + p * 5; o.position.set(Math.cos(a) * d.r, d.y + Math.sin(a * 1.3) * .4, Math.sin(a) * d.r * .35); o.rotation.x = a * .6; o.rotation.y = a * .9; });
    cv.style.opacity = wide ? 1 : .55;
    renderer.render(scene, cam);
  })(0);
})();
