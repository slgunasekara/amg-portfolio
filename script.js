/* ===== EMAIL INJECTION (prevents Cloudflare obfuscation) ===== */
(function () {
    const u = 'praveengunasekara7';
    const d = 'gmail.com';
    const email = u + '@' + d;

    // Inject into all display spots
    const heroEl = document.getElementById('heroEmail');
    if (heroEl) heroEl.textContent = email;

    const contactEl = document.getElementById('contactEmail');
    if (contactEl) contactEl.textContent = email;

    // Store for copy function
    window._AMG_EMAIL = email;
})();

/* ===== DARK MODE TOGGLE ===== */
(function () {
    const STORAGE_KEY = 'amg-theme';
    const checkbox = document.getElementById('dmToggle');
    const html = document.documentElement;

    function setTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            if (checkbox) checkbox.checked = true;
            localStorage.setItem(STORAGE_KEY, 'dark');
        } else {
            html.removeAttribute('data-theme');
            if (checkbox) checkbox.checked = false;
            localStorage.setItem(STORAGE_KEY, 'light');
        }
    }

    // Apply saved theme immediately
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        setTheme(saved);
    } else {
        // Sync with OS preference if no saved preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) setTheme('dark');
    }

    // Listen to checkbox change
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            setTheme(checkbox.checked ? 'dark' : 'light');
        });
    }

    // Listen for OS theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

/* ===== PROJECTS DATA ===== */
const projectsData = [
    {
        id: 0,
        title: "Stock Management System",
        tag: "Java / CLI",
        course: "PRF Coursework — Programming Fundamentals",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        desc: "A comprehensive CLI-based stock management system built in Java as part of the Programming Fundamentals coursework. The system provides complete inventory lifecycle management with real-time stock tracking and automated alerts.",
        features: [
            "Real-time inventory tracking", "Automated low-stock alerts",
            "Stock level management", "Robust data validation",
            "Comprehensive reporting", "Data persistence with file I/O"
        ],
        tech: ["Java", "CLI", "OOP", "Data Structures", "File I/O", "Collections API"],
        github: "https://github.com/slgunasekara",
        status: "Completed"
    },
    {
        id: 1,
        title: "Connect Four Game with AI",
        tag: "Java / AI",
        course: "OOP Coursework — Object-Oriented Programming",
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        desc: "A fully-featured Connect Four implementation featuring an intelligent AI opponent powered by the Minimax algorithm with Alpha-Beta pruning. Demonstrates advanced OOP principles including inheritance, polymorphism, and encapsulation.",
        features: [
            "Minimax AI algorithm", "Alpha-Beta pruning for performance",
            "Multiple difficulty levels", "Graphical board display",
            "Win detection logic", "Player vs Player mode"
        ],
        tech: ["Java", "Minimax Algorithm", "Alpha-Beta Pruning", "OOP", "Game Theory", "Swing GUI"],
        github: "https://github.com/slgunasekara",
        status: "Completed"
    },
    {
        id: 2,
        title: "Point of Sale (POS) System",
        tag: "JavaFX / MySQL",
        course: "GDSE Semester Final Project",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        desc: "A full-featured Point of Sale system built with JavaFX and MySQL, designed for small to medium retail businesses. Handles complete sales lifecycle from inventory management to billing and customer relationship management.",
        features: [
            "Complete inventory management", "Real-time billing & invoices",
            "Customer database CRM", "Sales reports & analytics",
            "MySQL database integration", "User authentication & roles",
            "Layered architecture pattern"
        ],
        tech: ["JavaFX", "MySQL", "JDBC", "CRUD", "GUI", "Layered Architecture", "JasperReports"],
        github: "https://github.com/slgunasekara",
        status: "Completed"
    },
    {
        id: 3,
        title: "UI/UX for Special Needs Students",
        tag: "Figma / UI/UX",
        course: "IIT Foundation — Innovative Solutions Module",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        desc: "An accessibility-focused UI/UX design project creating an inclusive digital learning platform for students with special needs. Developed through extensive user research and iterative prototyping following WCAG 2.1 guidelines.",
        features: [
            "WCAG 2.1 accessibility compliance", "User research & personas",
            "Iterative prototype testing", "High-contrast color modes",
            "Screen reader compatibility", "Simplified navigation patterns",
            "Interactive Figma prototype"
        ],
        tech: ["Figma", "UI/UX Design", "Accessibility", "User Research", "Prototyping", "WCAG 2.1"],
        github: "https://github.com/slgunasekara",
        status: "Completed"
    }
];

/* ===== EXPERIENCE DATA ===== */
const experienceData = [
    {
        id: 0,
        title: "Undergraduate Student",
        org: "IJSE — Institute of Software Engineering",
        period: "February 2025 – Present",
        location: "Colombo, Sri Lanka",
        icon: "fa-laptop-code",
        img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&q=80",
        desc: "Currently pursuing a Graduate Diploma in Software Engineering with a specialization in AI/ML. The program covers advanced topics including machine learning, neural networks, full-stack development with Java Spring Boot, database design, and software architecture patterns.",
        achievements: [
            "Completed Programming Fundamentals with distinction",
            "Built a fully functional POS system as the semester final project",
            "Pursuing parallel Certificate in AI & ML Engineering (CAME)",
            "Active participation in IJSE workshops and tech events",
            "Mastered layered architecture and design patterns (MVC, Singleton, Factory)",
            "Studying advanced database management with MySQL and PostgreSQL"
        ],
        tags: ["AI/ML", "Full-Stack", "Python", "Java", "Spring Boot", "Linux", "MySQL", "PostgreSQL"]
    },
    {
        id: 1,
        title: "Business Owner & Director",
        org: "Gunasekara Travels",
        period: "July 2022 – Present",
        location: "Seenigama, Hikkaduwa, Sri Lanka",
        icon: "fa-plane-departure",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
        desc: "Founded and operate Gunasekara Travels, a growing travel and transportation company serving the Southern Province of Sri Lanka. Manage all aspects of the business including route planning, fleet management, customer relations, financial oversight, and digital marketing strategies.",
        achievements: [
            "Successfully operated for 3+ years with consistent business growth",
            "Built a loyal customer base across the Southern Province",
            "Managed complete financial operations including bookkeeping and payroll",
            "Developed digital marketing strategies increasing customer acquisition",
            "Implemented efficient route management for Galle–Colombo and Matara–Colombo",
            "Maintained consistently high customer satisfaction and retention rates"
        ],
        tags: ["Operations Management", "Financial Oversight", "Digital Marketing", "Leadership", "Customer Service", "Fleet Management"]
    }
];

/* ===== LOADER ===== */
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        const svgNS = 'http://www.w3.org/2000/svg';
        const defs = document.createElementNS(svgNS, 'defs');
        const lg = document.createElementNS(svgNS, 'linearGradient');
        lg.id = 'ldGradient';
        lg.setAttribute('x1', '0%'); lg.setAttribute('y1', '0%');
        lg.setAttribute('x2', '100%'); lg.setAttribute('y2', '0%');
        const s1 = document.createElementNS(svgNS, 'stop');
        s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#1e3a8a');
        const s2 = document.createElementNS(svgNS, 'stop');
        s2.setAttribute('offset', '50%'); s2.setAttribute('stop-color', '#2563eb');
        const s3 = document.createElementNS(svgNS, 'stop');
        s3.setAttribute('offset', '100%'); s3.setAttribute('stop-color', '#0ea5e9');
        lg.append(s1, s2, s3);
        defs.append(lg);
        document.querySelector('.ld-ring-svg').prepend(defs);

        const lp = document.getElementById('ldParticles');
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 5 + 2;
            p.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(37,99,235,${Math.random() * .15 + .05});left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation:ldPartFloat ${Math.random() * 8 + 6}s ease-in-out ${Math.random() * -8}s infinite`;
            lp.append(p);
        }
        const style = document.createElement('style');
        style.textContent = '@keyframes ldPartFloat{0%,100%{transform:translateY(0) scale(1);opacity:.3}50%{transform:translateY(-30px) scale(1.2);opacity:.7}}';
        document.head.append(style);

        const ring = document.getElementById('ldRingFill');
        const pct = document.getElementById('ldPercent');
        const txt = document.getElementById('ldText');
        const circumference = 2 * Math.PI * 70;
        const msgs = ['Loading assets...', 'Initializing UI...', 'Building portfolio...', 'Almost ready...', 'Welcome!'];
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 2;
            if (progress > 100) progress = 100;
            const offset = circumference - (progress / 100) * circumference;
            ring.style.strokeDashoffset = offset;
            pct.textContent = Math.round(progress) + '%';
            txt.textContent = msgs[Math.min(Math.floor(progress / 25), msgs.length - 1)];
            if (progress >= 100) clearInterval(interval);
        }, 60);
    })();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('done');
        initAnimations();
    }, 2000);
});

/* ===== PARTICLES ===== */
const pcv = document.getElementById('pcv');
const pc = pcv.getContext('2d');
let pts = [];

function rz() {
    pcv.width = window.innerWidth;
    pcv.height = window.innerHeight;
}

rz();
window.addEventListener('resize', rz);

for (let i = 0; i < 60; i++) {
    pts.push({
        x: Math.random() * pcv.width,
        y: Math.random() * pcv.height,
        r: Math.random() * 1.4 + .3,
        dx: (Math.random() - .5) * .22,
        dy: (Math.random() - .5) * .22,
        o: Math.random() * .25 + .05
    });
}

function drawPts() {
    pc.clearRect(0, 0, pcv.width, pcv.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? '96,165,250' : '37,99,235';

    pts.forEach(p => {
        pc.beginPath();
        pc.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        pc.fillStyle = `rgba(${particleColor},${p.o})`;
        pc.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > pcv.width) p.dx *= -1;
        if (p.y < 0 || p.y > pcv.height) p.dy *= -1;
    });
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 100) {
            pc.beginPath();
            pc.strokeStyle = `rgba(${particleColor},${.06 * (1 - d / 100)})`;
            pc.lineWidth = .5;
            pc.moveTo(pts[i].x, pts[i].y);
            pc.lineTo(pts[j].x, pts[j].y);
            pc.stroke();
        }
    }
    requestAnimationFrame(drawPts);
}

drawPts();

/* ===== HERO CANVAS BUBBLES ===== */
(function () {
    const hcv = document.getElementById('heroCanvas');
    if (!hcv) return;
    const hctx = hcv.getContext('2d');
    let bubbles = [];

    function resizeHero() {
        hcv.width = hcv.offsetWidth;
        hcv.height = hcv.offsetHeight;
    }

    resizeHero();
    window.addEventListener('resize', resizeHero);

    for (let i = 0; i < 18; i++) {
        bubbles.push({
            x: Math.random() * hcv.width, y: Math.random() * hcv.height,
            r: Math.random() * 40 + 15,
            dx: (Math.random() - .5) * .3, dy: -(Math.random() * .4 + .1),
            o: Math.random() * .06 + .02,
            color: Math.random() > .5 ? '37,99,235' : (Math.random() > .5 ? '14,165,233' : '79,70,229')
        });
    }

    function drawHero() {
        hctx.clearRect(0, 0, hcv.width, hcv.height);
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        bubbles.forEach(b => {
            const opacity = isDark ? b.o * 2.5 : b.o;
            const grad = hctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
            grad.addColorStop(0, `rgba(${b.color},${opacity})`);
            grad.addColorStop(1, `rgba(${b.color},0)`);
            hctx.beginPath();
            hctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            hctx.fillStyle = grad;
            hctx.fill();
            b.x += b.dx;
            b.y += b.dy;
            if (b.x < -b.r) b.x = hcv.width + b.r;
            if (b.x > hcv.width + b.r) b.x = -b.r;
            if (b.y < -b.r) { b.y = hcv.height + b.r; b.x = Math.random() * hcv.width; }
        });
        requestAnimationFrame(drawHero);
    }

    drawHero();
})();

/* ===== HERO CURSOR TRAIL ===== */
(function () {
    const canvas = document.getElementById('heroCursorCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let trail = [];
    let inHero = false;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    const heroSec = document.getElementById('home');
    heroSec.addEventListener('mouseenter', () => { inHero = true; canvas.style.opacity = '1'; });
    heroSec.addEventListener('mouseleave', () => { inHero = false; canvas.style.opacity = '0'; });

    document.addEventListener('mousemove', e => {
        if (!inHero) return;
        for (let i = 0; i < 3; i++) {
            trail.push({
                x: e.clientX + (Math.random() - .5) * 8, y: e.clientY + (Math.random() - .5) * 8,
                r: Math.random() * 5 + 2, life: 1,
                color: Math.random() > .5 ? '37,99,235' : (Math.random() > .5 ? '14,165,233' : '79,70,229'),
                vx: (Math.random() - .5) * 1.5, vy: (Math.random() - .5) * 1.5 - .5
            });
        }
    });

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        trail = trail.filter(p => p.life > 0);
        trail.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color},${p.life * .4})`;
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            p.life -= .035;
        });
        requestAnimationFrame(drawTrail);
    }

    drawTrail();
})();

/* ===== NAV ===== */
const nb = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nb.classList.toggle('sc', window.scrollY > 50);
    document.getElementById('btt').classList.toggle('on', window.scrollY > 400);
    updateActiveNav();
});

const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
hbg.addEventListener('click', () => {
    hbg.classList.toggle('on');
    mm.classList.toggle('on');
});

function cm() {
    hbg.classList.remove('on');
    mm.classList.remove('on');
}

function updateActiveNav() {
    const secs = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nl-a');
    let current = 'home';
    secs.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(l => {
        l.classList.toggle('active', l.dataset.sec === current);
    });
}

/* ===== TYPED ===== */
const words = ['Full-Stack Developer', 'AI/ML Engineer', 'Business Owner', 'UI/UX Designer', 'Java Developer', 'Python Programmer', 'Problem Solver', 'Tech Entrepreneur'];
let wi = 0, ci = 0, del = false;
const tEl = document.getElementById('typed');

function type() {
    const w = words[wi];
    if (!del) {
        tEl.textContent = w.slice(0, ++ci);
        if (ci === w.length) { del = true; setTimeout(type, 2000); return; }
    } else {
        tEl.textContent = w.slice(0, --ci);
        if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, del ? 48 : 78);
}

setTimeout(type, 2000);

/* ===== SCROLL REVEAL ===== */
const rvEls = document.querySelectorAll('.rv,.rvl,.rvr');
const ro = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 40);
            ro.unobserve(e.target);
        }
    });
}, {threshold: .1});
rvEls.forEach(el => ro.observe(el));

/* ===== SKILL BARS ===== */
const sbo = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skfill').forEach(f => f.style.width = f.dataset.w + '%');
            sbo.unobserve(e.target);
        }
    });
}, {threshold: .25});
document.querySelectorAll('.sc2').forEach(el => sbo.observe(el));

/* ===== STAT COUNTERS ===== */
function initAnimations() {
    const statObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('[data-count]').forEach(el => {
                    const target = parseInt(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    let c = 0;
                    const inc = Math.ceil(target / 30);
                    const t = setInterval(() => {
                        c = Math.min(c + inc, target);
                        el.textContent = c + suffix;
                        if (c >= target) clearInterval(t);
                    }, 60);
                });
                statObs.unobserve(e.target);
            }
        });
    }, {threshold: .5});
    const hstats = document.querySelector('.hstats');
    if (hstats) statObs.observe(hstats);
}

/* ===== ORBITAL TOOLTIP ===== */
(function () {
    const tip = document.getElementById('orbTip');
    if (!tip) return;
    const labels = {
        'fa-github': 'GitHub', 'fa-linux': 'Linux', 'fa-database': 'MySQL',
        'fa-java': 'Java', 'fa-python': 'Python', 'fa-desktop': 'IntelliJ IDEA',
        'fa-html5': 'HTML5', 'fa-css3-alt': 'CSS3', 'fa-js': 'JavaScript',
        'fa-code': 'C++', 'fa-leaf': 'Spring Boot', 'fa-brain': 'AI / ML',
        'fa-gamepad': 'Game Dev', 'fa-camera': 'Photography'
    };
    document.querySelectorAll('.orb-node').forEach(node => {
        const icon = node.querySelector('i');
        if (!icon) return;
        let label = '';
        for (const [cls, lbl] of Object.entries(labels)) {
            if (icon.classList.contains(cls)) { label = lbl; break; }
        }
        if (!label) label = node.querySelector('span')?.textContent || '';
        node.addEventListener('mouseenter', () => { tip.textContent = '◆ ' + label + ' ◆'; tip.style.opacity = '1'; });
        node.addEventListener('mouseleave', () => { tip.style.opacity = '0'; });
    });
})();

/* ===== PROJECT MODAL ===== */
function openProject(id) {
    const p = projectsData[id];
    if (!p) return;
    document.getElementById('pm-img').src = p.img;
    document.getElementById('pm-tag').textContent = p.tag;
    document.getElementById('pm-title').textContent = p.title;
    document.getElementById('pm-course').innerHTML = '<i class="fas fa-graduation-cap"></i> ' + p.course;
    document.getElementById('pm-desc').textContent = p.desc;
    const feat = document.getElementById('pm-features');
    feat.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    const tech = document.getElementById('pm-tech');
    tech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');
    const ghBtn = document.getElementById('pm-gh-btn');
    ghBtn.href = p.github;
    document.getElementById('pm-status').innerHTML = `<i class="fas fa-check-circle"></i> ${p.status}`;
    const modal = document.getElementById('projectModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal(e, force) {
    if (!force && e && e.target !== document.getElementById('projectModal')) return;
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = '';
}

/* ===== EXPERIENCE MODAL ===== */
function openExp(id) {
    const ex = experienceData[id];
    if (!ex) return;
    document.getElementById('em-img').src = ex.img;
    const iconEl = document.getElementById('em-icon');
    iconEl.className = 'fas ' + ex.icon;
    document.getElementById('em-title').textContent = ex.title;
    document.getElementById('em-org').textContent = ex.org;
    document.getElementById('em-period').innerHTML = '<i class="fas fa-calendar-alt"></i> ' + ex.period;
    document.getElementById('em-location').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + ex.location;
    document.getElementById('em-desc').textContent = ex.desc;
    const ach = document.getElementById('em-achievements');
    ach.innerHTML = ex.achievements.map(a => `<li>${a}</li>`).join('');
    const tags = document.getElementById('em-tags');
    tags.innerHTML = ex.tags.map(t => `<span>${t}</span>`).join('');
    const modal = document.getElementById('expModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeExpModal(e, force) {
    if (!force && e && e.target !== document.getElementById('expModal')) return;
    document.getElementById('expModal').classList.remove('open');
    document.body.style.overflow = '';
}

/* Close modals on Escape */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (document.getElementById('fsRunOverlay').style.display !== 'none') {
            tmCloseFullscreen(); return;
        }
        closeProjectModal(null, true);
        closeExpModal(null, true);
        closeTaskModal(null, true);
        closeLightbox();
    }
});

/* ===== GALLERY LIGHTBOX ===== */
let lbImages = [], lbIndex = 0;

function buildLbImages() {
    lbImages = [];
    document.querySelectorAll('.gallery-item').forEach(item => {
        const img = item.querySelector('img');
        lbImages.push({
            src: img.src,
            title: item.querySelector('.gallery-caption h4')?.textContent || '',
            desc: item.querySelector('.gallery-caption p')?.textContent || ''
        });
    });
}

function openLightbox(item) {
    buildLbImages();
    const src = item.querySelector('img').src;
    lbIndex = lbImages.findIndex(i => i.src === src);
    if (lbIndex === -1) lbIndex = 0;
    setLbContent(lbIndex);
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function setLbContent(idx) {
    const d = lbImages[idx];
    if (!d) return;
    const img = document.getElementById('lbImg');
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = d.src;
        img.style.opacity = '1';
        img.style.transition = 'opacity .3s ease';
    }, 150);
    document.getElementById('lbTitle').textContent = d.title;
    document.getElementById('lbDesc').textContent = d.desc;
    document.getElementById('lbCounter').textContent = (idx + 1) + ' / ' + lbImages.length;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function lbNav(dir) {
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    setLbContent(lbIndex);
}

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
});
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});

/* ===== GALLERY LOAD MORE ===== */
const extraPhotos = [
    { src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80", title: "Deep Focus", desc: "Late night debugging session" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80", title: "Development", desc: "Building great products" },
    { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80", title: "Clean Code", desc: "Writing beautiful code" },
    { src: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=600&q=80", title: "Sri Lanka Beauty", desc: "Lush landscapes" },
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", title: "Highlands", desc: "Mountain adventures" },
    { src: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80", title: "Ocean View", desc: "Hikkaduwa beaches" },
    { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80", title: "Tech Setup", desc: "My workspace" },
    { src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80", title: "Night Coding", desc: "Building the future" },
    { src: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=600&q=80", title: "Team Moments", desc: "Collaboration at IJSE" }
];
let extraLoaded = 0;
const LOAD_COUNT = 3;

function loadMorePhotos() {
    const grid = document.getElementById('galleryGrid');
    const btn = document.getElementById('loadMoreBtn');
    const batch = extraPhotos.slice(extraLoaded, extraLoaded + LOAD_COUNT);
    if (batch.length === 0) {
        btn.textContent = '✓ All photos loaded';
        btn.disabled = true;
        btn.style.opacity = '.5';
        return;
    }
    batch.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.setProperty('--rd', (i * 0.08) + 's');
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy"/>
            <div class="gallery-zoom"><i class="fas fa-expand-alt"></i></div>
            <div class="gallery-overlay"><div class="gallery-caption"><h4>${photo.title}</h4><p>${photo.desc}</p></div></div>
        `;
        item.addEventListener('click', () => openLightbox(item));
        grid.appendChild(item);
    });
    extraLoaded += LOAD_COUNT;
    if (extraLoaded >= extraPhotos.length) {
        btn.textContent = '✓ All photos loaded';
        btn.disabled = true;
        btn.style.opacity = '.5';
    }
}

/* ===== EMAIL COPY ===== */
(function () {
    function getEmail() {
        return window._AMG_EMAIL || ('praveengunasekara7' + '@' + 'gmail.com');
    }

    const toast = document.getElementById('emailToast');

    function showToast() {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        clearTimeout(toast._t);
        toast._t = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(80px)';
        }, 2200);
    }

    function copyEmail(e) {
        e.preventDefault();
        const EMAIL = getEmail();
        navigator.clipboard.writeText(EMAIL).then(showToast).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = EMAIL;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast();
        });
    }

    document.querySelectorAll('.copy-email').forEach(el => {
        el.addEventListener('click', copyEmail);
        el.addEventListener('mouseenter', () => { el.style.color = 'var(--blue)'; });
        el.addEventListener('mouseleave', () => { el.style.color = ''; });
    });
})();

/* ===== CONTACT ===== */
function getEmail() {
    return window._AMG_EMAIL || ('praveengunasekara7' + '@' + 'gmail.com');
}

function sendMsg() {
    const n = document.getElementById('fn').value.trim();
    const e = document.getElementById('fe').value.trim();
    const s = document.getElementById('fs').value.trim();
    const m = document.getElementById('fm').value.trim();
    const msg = document.getElementById('fmsg');
    if (!n || !e || !m) {
        msg.textContent = '⚠ Please fill in all required fields.';
        msg.className = 'fmsg err';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
        msg.textContent = '⚠ Enter a valid email address.';
        msg.className = 'fmsg err';
        return;
    }
    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(s || 'Portfolio Contact')}&body=${encodeURIComponent('Name: ' + n + '\nEmail: ' + e + '\n\n' + m)}`;
    msg.textContent = '✓ Opening your email client...';
    msg.className = 'fmsg ok';
    setTimeout(() => msg.textContent = '', 4000);
}

/* ===== ASSIGNMENTS DATA ===== */
const assignmentsData = [
    {
        label: "Assignment 01",
        githubUrl: "https://github.com/slgunasekara",
        tasks: [
            {
                num: "Task 01",
                title: "CSS Grid Layout & Viewport Design",
                desc: "A responsive CSS grid layout demonstrating advanced viewport-based sizing and coordinate systems. Features dynamic grid areas with precise percentage-based positioning and overflow control.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Task_01.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_01.html",
                videoFile: null
            },
            {
                num: "Task 02",
                title: "Flexbox & Responsive Components",
                desc: "Flexbox-based responsive component layout exploring alignment, justify-content, and fluid sizing techniques for modern web design.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Task_02.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_02.html",
                videoFile: null
            },
            {
                num: "Task 03",
                title: "CSS Selectors & Specificity",
                desc: "Deep dive into CSS selectors including combinators, pseudo-classes, and specificity rules to craft precise styling without JavaScript.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Task_03.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_03.html",
                videoFile: null
            },
            {
                num: "Task 04",
                title: "Typography & Color Systems",
                desc: "Exploration of web typography hierarchy, custom color palettes, CSS variables, and consistent design systems across components.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Task_04.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_04.html",
                videoFile: null
            },
            {
                num: "Task 05",
                title: "Box Model & Spacing",
                desc: "Practical exploration of the CSS box model — margin, padding, border-box sizing, and their effects on layout and element dimensions.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Task_05.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_05.html",
                videoFile: null
            },
            {
                num: "Task 06",
                title: "Positioning & Z-Index",
                desc: "Mastering CSS positioning contexts — static, relative, absolute, fixed and sticky — combined with z-index layering for complex UI overlays.",
                thumb: "assets/assignments/assignment 01/ass_1_assets/image/Taks_06.png",
                taskFile: "assets/assignments/assignment 01/assignment/Task_06.html",
                videoFile: null
            }
        ]
    },
    {
        label: "Assignment 02",
        githubUrl: "https://github.com/slgunasekara",
        tasks: [
            {
                num: "Task 01",
                title: "CSS Animations & Keyframes",
                desc: "Smooth CSS-only animations using @keyframes, animation timing functions, and iteration control for engaging UI motion.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_01.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_01.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_01.mp4"
            },
            {
                num: "Task 02",
                title: "Hover Transitions & Micro-Interactions",
                desc: "Rich hover-state micro-interactions using CSS transitions, transform, and filter effects to craft delightful interactive elements.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_02.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_02.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_02.mp4"
            },
            {
                num: "Task 03",
                title: "3D Transforms & Perspective",
                desc: "CSS 3D transforms including rotateX/Y/Z, perspective, and backface-visibility to build immersive flip-card and depth effects.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_03.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_03.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_03.mp4"
            },
            {
                num: "Task 04",
                title: "Canvas & JavaScript Drawing",
                desc: "HTML5 Canvas API usage for programmatic 2D drawing — paths, arcs, gradients, and animation frames for dynamic visual content.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_04.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_04.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_04.mp4"
            },
            {
                num: "Task 05",
                title: "DOM Manipulation & Events",
                desc: "Real-time DOM manipulation responding to user events — click, input, resize — to build interactive UI components purely with vanilla JavaScript.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_05.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_05.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_05.mp4"
            },
            {
                num: "Task 06",
                title: "CSS Variables & Theming",
                desc: "Dynamic theming system using CSS custom properties, JavaScript variable overrides, and live theme-switching without page reload.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_06.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_06.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_06.mp4"
            },
            {
                num: "Task 07",
                title: "Responsive Navigation & Layout",
                desc: "Fully responsive navigation system with mobile hamburger menu, smooth scroll, and adaptive layout breakpoints.",
                thumb: "assets/assignments/assignment 02/ass_2_assets/image/Task_07.png",
                taskFile: "assets/assignments/assignment 02/assignment/Task_07.html",
                videoFile: "assets/assignments/assignment 02/ass_2_assets/video/Task_07.mp4"
            }
        ]
    }
];

/* ===== ASSIGNMENT TASK CARD BUILDER ===== */
/* ===== ASSIGNMENT STEPPER — single shared panel ===== */
let _activeAsgnTab = 0;

function buildAsgnPanel(asgnIdx) {
    const asgn = assignmentsData[asgnIdx];
    const track = document.getElementById('asgnTrack');
    const dotsEl = document.getElementById('asgnDots');
    if (!track || !dotsEl) return;

    track.innerHTML = '';
    dotsEl.innerHTML = '';

    asgn.tasks.forEach((task, i) => {
        const slide = document.createElement('div');
        slide.className = 'ds-slide';
        slide.innerHTML = `
            <div class="asgn-task-card" onclick="openTaskModal(${asgnIdx}, ${i})">
                <div class="atc-thumb">
                    <img src="${task.thumb}" alt="${task.title}" loading="lazy"
                         onerror="this.parentElement.style.background='var(--bg2)';this.style.display='none'"/>
                    <div class="atc-thumb-overlay"></div>
                    <span class="atc-num">${task.num}</span>
                    ${task.videoFile ? '<span class="atc-has-video"><i class="fas fa-video"></i> Video</span>' : ''}
                </div>
                <div class="atc-body">
                    <div class="atc-title">${task.title}</div>
                    <p class="atc-desc">${task.desc}</p>
                    <div class="atc-footer">
                        <button class="atc-run-btn" onclick="event.stopPropagation();openTaskModal(${asgnIdx},${i},true)">
                            <i class="fas fa-play"></i> Run
                        </button>
                        <span class="atc-click-hint"><i class="fas fa-info-circle"></i> Click for details</span>
                    </div>
                </div>
            </div>`;
        track.appendChild(slide);

        const dot = document.createElement('span');
        dot.className = 'ds-dot' + (i === 0 ? ' active' : '');
        dot.dataset.idx = i;
        dotsEl.appendChild(dot);
    });

    // Reset track position to 0
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    requestAnimationFrame(() => {
        track.style.transition = '';
        initDotStepper('asgnTrack', 'asgnDots', 'asgnPrev', 'asgnNext');
    });
}

function switchAsgnTab(idx) {
    if (idx === _activeAsgnTab) return;
    _activeAsgnTab = idx;

    // Update tab button states
    document.querySelectorAll('.asgn-tab').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
    });

    const asgn = assignmentsData[idx];
    const panel = document.getElementById('asgnPanel');

    // Fade out → swap content → fade in
    panel.classList.add('switching');
    setTimeout(() => {
        document.getElementById('apNum').textContent = String(idx + 1).padStart(2, '0');
        document.getElementById('apTitle').textContent = asgn.label;
        document.getElementById('apSub').textContent = idx === 0 ? 'HTML & CSS Fundamentals' : 'CSS Animations & Interactive UI';
        document.getElementById('apGhBtn').href = asgn.githubUrl;
        buildAsgnPanel(idx);
        panel.classList.remove('switching');
        panel.classList.add('entering');
        setTimeout(() => panel.classList.remove('entering'), 250);
    }, 180);
}

/* ===== DOT STEPPER ENGINE ===== */
function initDotStepper(trackId, dotsId, prevId, nextId) {
    const track = document.getElementById(trackId);
    const dotsEl = document.getElementById(dotsId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    if (!track) return;

    // Remove old listeners by cloning buttons
    if (prevBtn) {
        const p2 = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(p2, prevBtn);
    }
    if (nextBtn) {
        const n2 = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(n2, nextBtn);
    }
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    let current = 0;
    const slides = () => track.querySelectorAll('.ds-slide');
    const dots = () => dotsEl ? dotsEl.querySelectorAll('.ds-dot') : [];

    function goTo(idx) {
        const count = slides().length;
        if (count === 0) return;
        current = ((idx % count) + count) % count;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots().forEach((d, i) => d.classList.toggle('active', i === current));
        if (prev) prev.disabled = current === 0;
        if (next) next.disabled = current === count - 1;
    }

    if (prev) prev.addEventListener('click', () => goTo(current - 1));
    if (next) next.addEventListener('click', () => goTo(current + 1));

    if (dotsEl) {
        const newDots = dotsEl.cloneNode(true);
        dotsEl.parentNode.replaceChild(newDots, dotsEl);
        document.getElementById(dotsId).addEventListener('click', e => {
            const dot = e.target.closest('.ds-dot');
            if (dot) goTo(parseInt(dot.dataset.idx));
        });
    }

    // Touch/swipe support
    let touchStartX = 0;
    const wrap = track.parentElement;
    wrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, {passive: true});
    wrap.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    }, {passive: true});

    goTo(0);
}

/* ===== INIT ALL STEPPERS ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Projects stepper
    initDotStepper('projectsTrack', 'projectsDots', 'projectsPrev', 'projectsNext');
    // Load assignment 01 by default
    buildAsgnPanel(0);
});

/* ===== TASK MODAL ===== */
let _tmData = null;

function openTaskModal(asgnIdx, taskIdx, autoRun) {
    const asgn = assignmentsData[asgnIdx];
    const task = asgn.tasks[taskIdx];
    _tmData = task;

    document.getElementById('tm-asgn-badge').textContent = asgn.label;
    document.getElementById('tm-task-num').textContent = task.num;
    document.getElementById('tm-title').textContent = task.title;
    document.getElementById('tm-desc').textContent = task.desc;

    // Show/hide video button
    const vidBtn = document.getElementById('tmVidBtn');
    vidBtn.style.display = task.videoFile ? 'inline-flex' : 'none';
    vidBtn.classList.remove('active');
    vidBtn.innerHTML = '<i class="fas fa-video"></i> Watch Demo';

    document.getElementById('tmGhBtn').href = asgn.githubUrl;

    // Reset video area
    const vidArea = document.getElementById('tmVideoArea');
    const video = document.getElementById('tmVideo');
    vidArea.style.display = 'none';
    video.pause();
    video.removeAttribute('src');
    video.load();

    const modal = document.getElementById('taskModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (autoRun) setTimeout(() => tmOpenFullscreen(), 120);
}

/* Open task in a true fullscreen overlay */
function tmOpenFullscreen() {
    if (!_tmData) return;
    const overlay = document.getElementById('fsRunOverlay');
    const iframe = document.getElementById('fsrIframe');
    const title = document.getElementById('fsrTitle');

    title.textContent = (_tmData.num || '') + ' — ' + (_tmData.title || '');
    iframe.src = '';                  // clear first to force reload
    requestAnimationFrame(() => {
        iframe.src = _tmData.taskFile;
    });

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function tmCloseFullscreen() {
    const overlay = document.getElementById('fsRunOverlay');
    const iframe = document.getElementById('fsrIframe');
    iframe.src = '';
    overlay.style.display = 'none';
    // keep task modal open if it was open
}

/* Video toggle — set src directly on <video>, no <source> needed */
function tmToggleVideo() {
    if (!_tmData || !_tmData.videoFile) return;
    const area = document.getElementById('tmVideoArea');
    const video = document.getElementById('tmVideo');
    const btn = document.getElementById('tmVidBtn');
    const isOpen = area.style.display !== 'none';
    if (isOpen) {
        video.pause();
        video.removeAttribute('src');
        video.load();
        area.style.display = 'none';
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-video"></i> Watch Demo';
    } else {
        area.style.display = 'block';
        video.src = _tmData.videoFile;   // set directly — most reliable cross-browser
        video.load();
        video.play().catch(() => {});     // autoplay; gracefully fail if blocked
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-stop"></i> Close Video';
    }
}

function closeTaskModal(e, force) {
    if (!force && e && e.target !== document.getElementById('taskModal')) return;
    document.getElementById('taskModal').classList.remove('open');
    document.body.style.overflow = '';
    const video = document.getElementById('tmVideo');
    video.pause();
    video.removeAttribute('src');
    video.load();
    _tmData = null;
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    });
});

/* ===== PROFESSIONAL SKILLS TAG ANIMATION ===== */
const tagsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.ptag').forEach(tag => tag.style.animationPlayState = 'running');
            tagsObs.unobserve(e.target);
        }
    });
}, {threshold: .3});
document.querySelectorAll('.ptags').forEach(el => {
    el.querySelectorAll('.ptag').forEach(t => t.style.animationPlayState = 'paused');
    tagsObs.observe(el);
});

/* ===== TILT — EXPERIENCE CARDS ===== */
document.querySelectorAll('.exc').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
        card.style.transition = 'box-shadow .3s, border-color .3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = '.4s';
    });
});

/* ===== TILT — PROJECT CARDS ===== */
document.querySelectorAll('.pc').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `translateY(-10px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
        card.style.transition = 'box-shadow .3s, border-color .3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = '.4s';
    });
});
