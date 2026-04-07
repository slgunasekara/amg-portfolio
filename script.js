/* ============================================================
   script.js  —  Portfolio JavaScript
   Features: Dark/Light mode, Techie Name Animation, All UI Logic
   ============================================================ */

/* ============================================================
   THEME TOGGLE — Dark / Light Mode
   ============================================================ */
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);

    // Update mobile menu label
    const mmIcon = document.getElementById('mmThemeIcon');
    const mmLabel = document.getElementById('mmThemeLabel');
    if (mmIcon && mmLabel) {
        if (theme === 'dark') {
            mmIcon.className = 'fas fa-moon';
            mmLabel.textContent = 'Dark';
        } else {
            mmIcon.className = 'fas fa-sun';
            mmLabel.textContent = 'Light';
        }
    }
}

function toggleTheme() {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

// Apply saved theme on load
applyTheme(currentTheme);

// Theme toggle button click
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}

/* ============================================================
   LOADER
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    // SVG gradient for loader ring
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.querySelector('.ld-ring-svg');
    if (svg) {
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
        svg.prepend(defs);
    }

    // Loader progress animation
    const ring = document.getElementById('ldRingFill');
    const pct = document.getElementById('ldPercent');
    const txt = document.getElementById('ldText');
    const msgs = ['Loading assets...', 'Initializing UI...', 'Building portfolio...', 'Almost ready...', 'Welcome!'];
    const circumference = 2 * Math.PI * 70;
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 8 + 2;
        if (progress > 100) progress = 100;
        if (ring) ring.style.strokeDashoffset = circumference - (progress / 100) * circumference;
        if (pct) pct.textContent = Math.round(progress) + '%';
        if (txt) txt.textContent = msgs[Math.min(Math.floor(progress / 25), msgs.length - 1)];
        if (progress >= 100) clearInterval(interval);
    }, 60);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
        initAnimations();
        startTechieNameAnimation();
    }, 2000);
});

/* ============================================================
   TECHIE NAME ANIMATION — Scramble / Decode Effect
   ============================================================ */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>';
const CHARS_SINHALA = ['@','#','$','%','&','!','?','<','>','|','~','^'];

function scrambleText(element, finalText, duration, delay, onComplete) {
    const totalChars = finalText.length;
    let frame = 0;
    const totalFrames = Math.floor(duration / 16); // ~60fps
    const revealPerFrame = totalChars / totalFrames;
    let revealed = 0;

    // Show cursor while animating
    const cursor = document.querySelector('.name-cursor-bar');
    if (cursor) cursor.classList.add('active');

    setTimeout(() => {
        const interval = setInterval(() => {
            revealed = Math.min(revealed + revealPerFrame, totalChars);
            const revealedCount = Math.floor(revealed);

            let display = '';
            for (let i = 0; i < totalChars; i++) {
                if (finalText[i] === ' ') {
                    display += ' ';
                } else if (finalText[i] === '.') {
                    display += i < revealedCount ? '.' : CHARS[Math.floor(Math.random() * CHARS.length)];
                } else if (i < revealedCount) {
                    display += finalText[i];
                } else {
                    display += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            element.textContent = display;

            frame++;
            if (revealed >= totalChars) {
                clearInterval(interval);
                element.textContent = finalText;
                if (onComplete) onComplete();
            }
        }, 16);
    }, delay);
}

function startTechieNameAnimation() {
    const line1 = document.getElementById('nameLine1');
    const line2 = document.getElementById('nameLine2');
    const cursor = document.querySelector('.name-cursor-bar');

    if (!line1 || !line2) return;

    const text1 = 'A.Praveena Dhanushka';
    const text2 = 'Mendis Gunasekara';

    // Start with empty
    line1.textContent = '';
    line2.textContent = '';

    // Animate line 1 first
    scrambleText(line1, text1, 900, 400, () => {
        // Then animate line 2
        scrambleText(line2, text2, 1000, 100, () => {
            // Hide cursor after both done
            if (cursor) {
                setTimeout(() => {
                    cursor.classList.remove('active');
                    // Add glitch effect after decode completes
                    line2.classList.add('glitch-anim');
                }, 600);
            }
        });
    });
}

// Re-trigger animation when hero section is hovered (fun effect)
let nameAnimCooldown = false;
const heroSection = document.getElementById('home');
if (heroSection) {
    heroSection.addEventListener('click', () => {
        if (nameAnimCooldown) return;
        nameAnimCooldown = true;
        const line1 = document.getElementById('nameLine1');
        const line2 = document.getElementById('nameLine2');
        if (line1) line2.classList.remove('glitch-anim');
        startTechieNameAnimation();
        setTimeout(() => { nameAnimCooldown = false; }, 3000);
    });
}

/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
const pcv = document.getElementById('pcv');
const pc = pcv ? pcv.getContext('2d') : null;
let pts = [];

function rzParticles() {
    if (!pcv) return;
    pcv.width = window.innerWidth;
    pcv.height = window.innerHeight;
}
rzParticles();
window.addEventListener('resize', rzParticles);

if (pc) {
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
        pts.forEach(p => {
            pc.beginPath();
            pc.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            pc.fillStyle = `rgba(37,99,235,${p.o})`;
            pc.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > pcv.width) p.dx *= -1;
            if (p.y < 0 || p.y > pcv.height) p.dy *= -1;
        });
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
                if (d < 100) {
                    pc.beginPath();
                    pc.strokeStyle = `rgba(37,99,235,${.06 * (1 - d / 100)})`;
                    pc.lineWidth = .5;
                    pc.moveTo(pts[i].x, pts[i].y);
                    pc.lineTo(pts[j].x, pts[j].y);
                    pc.stroke();
                }
            }
        }
        requestAnimationFrame(drawPts);
    }
    drawPts();
}

/* ============================================================
   HERO CANVAS — FLOATING BUBBLES
   ============================================================ */
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
            x: Math.random() * hcv.width,
            y: Math.random() * hcv.height,
            r: Math.random() * 40 + 15,
            dx: (Math.random() - .5) * .3,
            dy: -(Math.random() * .4 + .1),
            o: Math.random() * .06 + .02,
            color: Math.random() > .5 ? '37,99,235' : (Math.random() > .5 ? '14,165,233' : '79,70,229')
        });
    }

    function drawHero() {
        hctx.clearRect(0, 0, hcv.width, hcv.height);
        bubbles.forEach(b => {
            const grad = hctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
            grad.addColorStop(0, `rgba(${b.color},${b.o})`);
            grad.addColorStop(1, `rgba(${b.color},0)`);
            hctx.beginPath();
            hctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            hctx.fillStyle = grad;
            hctx.fill();
            b.x += b.dx; b.y += b.dy;
            if (b.x < -b.r) b.x = hcv.width + b.r;
            if (b.x > hcv.width + b.r) b.x = -b.r;
            if (b.y < -b.r) { b.y = hcv.height + b.r; b.x = Math.random() * hcv.width; }
        });
        requestAnimationFrame(drawHero);
    }
    drawHero();
})();

/* ============================================================
   NAVBAR
   ============================================================ */
const nb = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (nb) nb.classList.toggle('sc', window.scrollY > 50);
    const btt = document.getElementById('btt');
    if (btt) btt.classList.toggle('on', window.scrollY > 400);
    updateActiveNav();
});

const hbg = document.getElementById('hbg');
const mm = document.getElementById('mm');
if (hbg) {
    hbg.addEventListener('click', () => {
        hbg.classList.toggle('on');
        if (mm) mm.classList.toggle('on');
    });
}

function cm() {
    if (hbg) hbg.classList.remove('on');
    if (mm) mm.classList.remove('on');
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

/* ============================================================
   TYPED EFFECT
   ============================================================ */
const words = [
    'Full-Stack Developer', 'AI/ML Engineer', 'Business Owner',
    'UI/UX Designer', 'Java Developer', 'Python Programmer',
    'Problem Solver', 'Tech Entrepreneur'
];
let wi = 0, ci = 0, del = false;
const tEl = document.getElementById('typed');

function type() {
    if (!tEl) return;
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
setTimeout(type, 2500);

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const rvEls = document.querySelectorAll('.rv,.rvl,.rvr');
const ro = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 40);
            ro.unobserve(e.target);
        }
    });
}, { threshold: .1 });
rvEls.forEach(el => ro.observe(el));

/* ============================================================
   SKILL BARS
   ============================================================ */
const sbo = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skfill').forEach(f => f.style.width = f.dataset.w + '%');
            sbo.unobserve(e.target);
        }
    });
}, { threshold: .25 });
document.querySelectorAll('.sc2').forEach(el => sbo.observe(el));

/* ============================================================
   STAT COUNTERS
   ============================================================ */
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
    }, { threshold: .5 });
    const hstats = document.querySelector('.hstats');
    if (hstats) statObs.observe(hstats);
}

/* ============================================================
   PROJECTS DATA + MODAL
   ============================================================ */
const projectsData = [
    {
        id: 0, title: "Stock Management System", tag: "Java / CLI",
        course: "PRF Coursework — Programming Fundamentals",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        desc: "A comprehensive CLI-based stock management system built in Java as part of the Programming Fundamentals coursework. The system provides complete inventory lifecycle management with real-time stock tracking and automated alerts.",
        features: ["Real-time inventory tracking","Automated low-stock alerts","Stock level management","Robust data validation","Comprehensive reporting","Data persistence with file I/O"],
        tech: ["Java","CLI","OOP","Data Structures","File I/O","Collections API"],
        github: "https://github.com/slgunasekara", status: "Completed"
    },
    {
        id: 1, title: "Connect Four Game with AI", tag: "Java / AI",
        course: "OOP Coursework — Object-Oriented Programming",
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        desc: "A fully-featured Connect Four implementation featuring an intelligent AI opponent powered by the Minimax algorithm with Alpha-Beta pruning. Demonstrates advanced OOP principles including inheritance, polymorphism, and encapsulation.",
        features: ["Minimax AI algorithm","Alpha-Beta pruning for performance","Multiple difficulty levels","Graphical board display","Win detection logic","Player vs Player mode"],
        tech: ["Java","Minimax Algorithm","Alpha-Beta Pruning","OOP","Game Theory","Swing GUI"],
        github: "https://github.com/slgunasekara", status: "Completed"
    },
    {
        id: 2, title: "Point of Sale (POS) System", tag: "JavaFX / MySQL",
        course: "GDSE Semester Final Project",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        desc: "A full-featured Point of Sale system built with JavaFX and MySQL, designed for small to medium retail businesses. Handles complete sales lifecycle from inventory management to billing and customer relationship management.",
        features: ["Complete inventory management","Real-time billing & invoices","Customer database CRM","Sales reports & analytics","MySQL database integration","User authentication & roles","Layered architecture pattern"],
        tech: ["JavaFX","MySQL","JDBC","CRUD","GUI","Layered Architecture","JasperReports"],
        github: "https://github.com/slgunasekara", status: "Completed"
    },
    {
        id: 3, title: "UI/UX for Special Needs Students", tag: "Figma / UI/UX",
        course: "IIT Foundation — Innovative Solutions Module",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        desc: "An accessibility-focused UI/UX design project creating an inclusive digital learning platform for students with special needs. Developed through extensive user research and iterative prototyping following WCAG 2.1 guidelines.",
        features: ["WCAG 2.1 accessibility compliance","User research & personas","Iterative prototype testing","High-contrast color modes","Screen reader compatibility","Simplified navigation patterns","Interactive Figma prototype"],
        tech: ["Figma","UI/UX Design","Accessibility","User Research","Prototyping","WCAG 2.1"],
        github: "https://github.com/slgunasekara", status: "Completed"
    }
];

function openProject(id) {
    const p = projectsData[id];
    if (!p) return;
    document.getElementById('pm-img').src = p.img;
    document.getElementById('pm-tag').textContent = p.tag;
    document.getElementById('pm-title').textContent = p.title;
    document.getElementById('pm-course').innerHTML = '<i class="fas fa-graduation-cap"></i> ' + p.course;
    document.getElementById('pm-desc').textContent = p.desc;
    document.getElementById('pm-features').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('pm-tech').innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');
    document.getElementById('pm-gh-btn').href = p.github;
    document.getElementById('pm-status').innerHTML = `<i class="fas fa-check-circle"></i> ${p.status}`;
    document.getElementById('projectModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal(e, force) {
    if (!force && e && e.target !== document.getElementById('projectModal')) return;
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = '';
}

/* ============================================================
   EXPERIENCE DATA + MODAL
   ============================================================ */
const experienceData = [
    {
        id: 0, title: "Undergraduate Student",
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
        tags: ["AI/ML","Full-Stack","Python","Java","Spring Boot","Linux","MySQL","PostgreSQL"]
    },
    {
        id: 1, title: "Business Owner & Director",
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
        tags: ["Operations Management","Financial Oversight","Digital Marketing","Leadership","Customer Service","Fleet Management"]
    }
];

function openExp(id) {
    const ex = experienceData[id];
    if (!ex) return;
    document.getElementById('em-img').src = ex.img;
    document.getElementById('em-icon').className = 'fas ' + ex.icon;
    document.getElementById('em-title').textContent = ex.title;
    document.getElementById('em-org').textContent = ex.org;
    document.getElementById('em-period').innerHTML = '<i class="fas fa-calendar-alt"></i> ' + ex.period;
    document.getElementById('em-location').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + ex.location;
    document.getElementById('em-desc').textContent = ex.desc;
    document.getElementById('em-achievements').innerHTML = ex.achievements.map(a => `<li>${a}</li>`).join('');
    document.getElementById('em-tags').innerHTML = ex.tags.map(t => `<span>${t}</span>`).join('');
    document.getElementById('expModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeExpModal(e, force) {
    if (!force && e && e.target !== document.getElementById('expModal')) return;
    document.getElementById('expModal').classList.remove('open');
    document.body.style.overflow = '';
}

// Close modals on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeProjectModal(null, true);
        closeExpModal(null, true);
        closeLightbox();
    }
});

/* ============================================================
   GALLERY — LIGHTBOX
   ============================================================ */
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
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
}

function lbNav(dir) {
    if (!lbImages.length) return;
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    setLbContent(lbIndex);
}

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
});

const lb = document.getElementById('lightbox');
if (lb) {
    lb.addEventListener('click', function (e) {
        if (e.target === this) closeLightbox();
    });
}

/* ============================================================
   PROFESSIONAL SKILLS TAG ANIMATION
   ============================================================ */
const tagsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.ptag').forEach(tag => tag.style.animationPlayState = 'running');
            tagsObs.unobserve(e.target);
        }
    });
}, { threshold: .3 });
document.querySelectorAll('.ptags').forEach(el => {
    el.querySelectorAll('.ptag').forEach(t => t.style.animationPlayState = 'paused');
    tagsObs.observe(el);
});

/* ============================================================
   TILT EFFECT — PROJECT CARDS
   ============================================================ */
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

/* ============================================================
   TILT EFFECT — EXPERIENCE CARDS
   ============================================================ */
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

/* ============================================================
   EMAIL COPY
   ============================================================ */
(function () {
    const EMAIL = 'praveengunasekara7@gmail.com';
    const toast = document.getElementById('emailToast');

    function showToast() {
        if (!toast) return;
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
        navigator.clipboard.writeText(EMAIL).then(showToast).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = EMAIL;
            ta.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast();
        });
    }

    document.querySelectorAll('.copy-email').forEach(el => {
        el.addEventListener('click', copyEmail);
    });
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
function sendMsg() {
    const n = document.getElementById('fn')?.value.trim();
    const e = document.getElementById('fe')?.value.trim();
    const s = document.getElementById('fs')?.value.trim();
    const m = document.getElementById('fm')?.value.trim();
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
    window.location.href = `mailto:praveengunasekara7@gmail.com?subject=${encodeURIComponent(s || 'Portfolio Contact')}&body=${encodeURIComponent('Name: ' + n + '\nEmail: ' + e + '\n\n' + m)}`;
    msg.textContent = '✓ Opening your email client...';
    msg.className = 'fmsg ok';
    setTimeout(() => msg.textContent = '', 4000);
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
