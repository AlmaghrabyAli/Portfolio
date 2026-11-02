document.addEventListener('DOMContentLoaded', () => {

    // --- Language Switcher ---
    const langToggleBtn = document.getElementById('lang-toggle');

    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            experience: "Experience",
            services: "Services",
            heroSubtitle: "Full-Stack Developer (.NET & React)",
            heroText: "I build responsive full-stack web applications with React and ASP.NET Core, from clean, user-focused interfaces to reliable APIs and SQL Server databases.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            aboutTitle: "About Me",
            aboutText1: "I'm a Computer Science student at the Faculty of Computers and Artificial Intelligence, University of Sadat City, and a full-stack developer working with React and ASP.NET Core. I enjoy turning ideas into complete web applications, from the interface people see to the logic and data behind it.",
            aboutText2: "I care about clean structure, readable code, and interfaces that are simple to use. Competitive programming taught me to break problems down and work under time pressure, and I'm always learning new tools to build better software.",
            skillsTitle: "Technical Skills",
            projectsTitle: "Featured Projects",
            experienceTitle: "Experience",
            servicesTitle: "Services",
            objectiveTitle: "Career Objective",
                        objectiveQuote: "\"To grow as a full-stack developer by building reliable, user-focused web applications with React and ASP.NET Core, contributing to impactful software products, and continuously sharpening my skills alongside strong engineering teams.\"",
            contactTitle: "Get In Touch",
            contactText: "Feel free to reach out for collaborations or project inquiries.",
            sendMessage: "Send Message",
            footer: "&copy; 2026 Almaghraby Ali Abdalshafy. All rights reserved.",
            expStatusCurrent: "Current",
            expStatusDone: "Completed",
            exp1Role: "Full Stack Development Intern · Remote",
            exp1B1: "Building full-stack projects with React, ASP.NET Core, and SQL Server.",
            exp1B2: "Working on a personal portfolio, an expense tracker, an e-commerce website, and a learning management system.",
            exp2Role: "Web Development using .NET Track",
            exp2B1: "Completed an intensive 144-hour training in web development with .NET.",
            exp2B2: "Learned C# and object-oriented programming concepts.",
            exp2B3: "Covered SQL Server fundamentals and relational database design.",
            exp2B4: "Learned LINQ for querying and manipulating data.",
            exp3Role: "React Front-End Web Developer Track",
            exp3B1: "Completed 200+ hours of hands-on React training.",
            exp3B2: "Built front-end applications with HTML5, CSS3, JavaScript, and React.",
            exp3B3: "Used Git and GitHub, and learned Node.js and Express basics.",
            exp3B4: "Developed a capstone project combining React and Node.js.",
            exp4Role: "Web Design Summer Training Program",
            exp4B1: "Trained in HTML, CSS, Bootstrap, and JavaScript.",
            exp4B2: "Built 5+ responsive, user-friendly web pages.",
            exp4B3: "Finished with a 95.5% final score.",
            exp5Role: "Team Member",
            exp5B1: "Competed among 100+ teams.",
            exp5B2: "Solved algorithmic challenges in C++ under time pressure.",
            svcSubtitle: "End-to-end web development, from clean interfaces to reliable APIs and databases.",
            svc1Title: "Full-Stack Web Applications",
            svc1Desc: "From the interface people see to the API and database behind it.",
            svc2Title: "Front-End & Responsive UI",
            svc2Desc: "Fast, accessible interfaces that look sharp on every screen.",
            svc3Title: "REST API & Backend",
            svc3Desc: "Well-structured APIs connected to carefully designed databases.",
            svc4Title: "Website Redesign",
            svc4Desc: "Cleaner structure, better design, and improved performance.",
            svc5Title: "Portfolio & Landing Pages",
            svc5Desc: "Professional pages that turn visitors into conversations."
        },
        ar: {
            home: "الرئيسية",
            about: "عنّي",
            skills: "المهارات",
            projects: "المشاريع",
            contact: "تواصل معي",
            experience: "الخبرة",
            services: "الخدمات",
            heroSubtitle: "مطور Full-Stack (.NET و React)",
            heroText: "أبني تطبيقات ويب متكاملة ومتجاوبة باستخدام React وASP.NET Core، من واجهات نظيفة تركز على المستخدم إلى واجهات برمجية موثوقة وقواعد بيانات SQL Server.",
            viewProjects: "عرض المشاريع",
            contactMe: "تواصل معي",
            aboutTitle: "نبذة عنّي",
            aboutText1: "أنا طالب علوم حاسب في كلية الحاسبات والذكاء الاصطناعي، جامعة مدينة السادات، ومطور Full-Stack أعمل بتقنيات React وASP.NET Core. أستمتع بتحويل الأفكار إلى تطبيقات ويب متكاملة، من الواجهة التي يراها الناس إلى المنطق والبيانات خلفها.",
            aboutText2: "أهتم بالهيكلة النظيفة والكود المقروء والواجهات البسيطة في الاستخدام. علّمتني البرمجة التنافسية تقسيم المشكلات والعمل تحت ضغط الوقت، وأتعلم دائمًا أدوات جديدة لبناء برمجيات أفضل.",
            skillsTitle: "المهارات التقنية",
            projectsTitle: "أبرز المشاريع",
            experienceTitle: "الخبرة",
            servicesTitle: "الخدمات",
            objectiveTitle: "الهدف الوظيفي",
             objectiveQuote: "\"أن أنمو كمطور Full-Stack من خلال بناء تطبيقات ويب موثوقة تركّز على المستخدم باستخدام React وASP.NET Core، والمساهمة في منتجات برمجية ذات تأثير، وصقل مهاراتي باستمرار بجانب فرق هندسية قوية.\"",
            contactTitle: "تواصل معي",
            contactText: "لا تتردد في التواصل للتعاون أو الاستفسار عن المشاريع.",
            sendMessage: "إرسال الرسالة",
            footer: "&copy; 2026 المغربي علي عبد الشافي. جميع الحقوق محفوظة.",
            expStatusCurrent: "حالي",
            expStatusDone: "مكتمل",
            exp1Role: "متدرب تطوير Full Stack · عن بُعد",
            exp1B1: "أبني مشاريع Full-Stack باستخدام React وASP.NET Core وSQL Server.",
            exp1B2: "أعمل على موقع شخصي وتطبيق لتتبع المصروفات وموقع تجارة إلكترونية ونظام لإدارة التعلم.",
            exp2Role: "مسار تطوير الويب باستخدام .NET",
            exp2B1: "أنهيت تدريبًا مكثفًا لمدة 144 ساعة في تطوير الويب باستخدام .NET.",
            exp2B2: "تعلمت C# ومفاهيم البرمجة كائنية التوجه.",
            exp2B3: "تناولت أساسيات SQL Server وتصميم قواعد البيانات العلائقية.",
            exp2B4: "تعلمت LINQ للاستعلام عن البيانات ومعالجتها.",
            exp3Role: "مسار مطور واجهات React الأمامية",
            exp3B1: "أكملت أكثر من 200 ساعة تدريب عملي على React.",
            exp3B2: "بنيت تطبيقات واجهات أمامية باستخدام HTML5 وCSS3 وJavaScript وReact.",
            exp3B3: "استخدمت Git وGitHub، وتعلمت أساسيات Node.js وExpress.",
            exp3B4: "طورت مشروعًا ختاميًا يجمع بين React وNode.js.",
            exp4Role: "برنامج التدريب الصيفي لتصميم الويب",
            exp4B1: "تدربت على HTML وCSS وBootstrap وJavaScript.",
            exp4B2: "بنيت أكثر من 5 صفحات ويب متجاوبة وسهلة الاستخدام.",
            exp4B3: "أنهيت البرنامج بدرجة نهائية 95.5%.",
            exp5Role: "عضو فريق",
            exp5B1: "شاركت ضمن أكثر من 100 فريق متنافس.",
            exp5B2: "حللت تحديات خوارزمية بلغة C++ تحت ضغط الوقت.",
            svcSubtitle: "تطوير ويب متكامل، من واجهات نظيفة إلى واجهات برمجية وقواعد بيانات موثوقة.",
            svc1Title: "تطبيقات ويب متكاملة (Full-Stack)",
            svc1Desc: "من الواجهة التي يراها المستخدم إلى الـ API وقاعدة البيانات خلفها.",
            svc2Title: "واجهات أمامية متجاوبة",
            svc2Desc: "واجهات سريعة وسهلة الاستخدام تظهر بشكل ممتاز على كل الشاشات.",
            svc3Title: "واجهات برمجية (REST API) وباك إند",
            svc3Desc: "واجهات برمجية منظمة متصلة بقواعد بيانات مصممة بعناية.",
            svc4Title: "إعادة تصميم المواقع",
            svc4Desc: "هيكلة أنظف وتصميم أفضل وأداء محسّن.",
            svc5Title: "صفحات شخصية وصفحات هبوط",
            svc5Desc: "صفحات احترافية تحوّل الزوار إلى تواصل حقيقي."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem('lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        if (langToggleBtn) langToggleBtn.innerText = lang === 'en' ? 'AR' : 'EN';

        const t = translations[lang];

        // Update Nav (by href, not by order)
        const navLabels = {
            '#hero': t.home,
            '#about': t.about,
            '#skills': t.skills,
            '#projects': t.projects,
            '#experience': t.experience,
            '#services': t.services,
            '#contact': t.contact
        };
        document.querySelectorAll('.nav-list .nav-link').forEach(link => {
            const label = navLabels[link.getAttribute('href')];
            if (label) link.innerText = label;
        });

        // Helper to update text safely
        const update = (sel, txt) => { const el = document.querySelector(sel); if (el) el.innerText = txt; };

        // Hero (do NOT touch .hero-name — it stays in English in both languages)
        update('.hero-role', t.heroSubtitle);
        update('.hero-desc', t.heroText);
        const heroProjectsBtn = document.querySelector('#hero a[href="#projects"].btn-primary');
        if (heroProjectsBtn) heroProjectsBtn.innerText = t.viewProjects;
        const heroContactBtn = document.querySelector('#hero a[href="#contact"].btn-outline');
        if (heroContactBtn) heroContactBtn.innerText = t.contactMe;

        update('#about .section-title', t.aboutTitle);

        const aboutPs = document.querySelectorAll('#about .about-content p');
        if (aboutPs.length >= 1) aboutPs[0].innerText = t.aboutText1;
        if (aboutPs.length >= 2) aboutPs[1].innerText = t.aboutText2;

        update('#skills .section-title', t.skillsTitle);
        update('#projects .section-title', t.projectsTitle);
        update('#experience .section-title', t.experienceTitle);
        update('#services .section-title', t.servicesTitle);
        update('#career-objective .section-title', t.objectiveTitle);
        update('.objective-quote', t.objectiveQuote);
        update('#contact .section-title', t.contactTitle);

        const contactP = document.querySelector('#contact .contact-info p');
        if (contactP) contactP.innerText = t.contactText;

        const submitBtn = document.querySelector('.contact-form button');
        if (submitBtn) submitBtn.innerText = t.sendMessage;

        const footerP = document.querySelector('.footer p');
        if (footerP) footerP.innerHTML = t.footer;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            if (t && t[el.dataset.i18n] !== undefined) {
                el.textContent = t[el.dataset.i18n];
            }
        });
    }

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
        } else {
            mobileMenu.classList.add('open');
            hamburger.classList.add('active');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // --- Smooth Scroll with Offset for Fixed Header ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translate(0, 0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // --- Form Handling (Mock) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...'; // This should ideally be translated too
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent!'; // And this
                btn.style.backgroundColor = 'var(--accent-color)';
                contactForm.reset();

                setTimeout(() => {
                    // btn.innerText = originalText; Using translated text would be better
                    // To keep it simple, we revert to current lang translation
                    const current = localStorage.getItem('lang') || 'en';
                    btn.innerText = translations[current].sendMessage;

                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1000);
        });
    }

    // --- Background Dots Animation ---
    const dotsContainer = document.getElementById('hero-bg-dots');
    const heroImgWrapper = document.getElementById('hero-img-wrapper');
    const heroSection = document.getElementById('hero');

    if (dotsContainer) {
        // Create random dots
        for (let i = 0; i < 50; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');

            // Random positioning
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            dot.style.left = `${x}%`;
            dot.style.top = `${y}%`;

            // Random size variation
            const size = Math.random() * 3 + 2;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;

            dotsContainer.appendChild(dot);
        }

        // Parallax Effect
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            // Move dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                const speed = (index % 5) + 1; // Varying speeds
                const moveX = (x * 50 * speed) - (25 * speed);
                const moveY = (y * 50 * speed) - (25 * speed);
                dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            // Move Image Wrapper (Inverse Parallax)
            if (heroImgWrapper) {
                const imgMoveX = (x * 30) - 15;
                const imgMoveY = (y * 30) - 15;
                heroImgWrapper.style.transform = `rotateY(${imgMoveX}deg) rotateX(${-imgMoveY}deg)`;
            }
        });

        // Reset image on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            if (heroImgWrapper) {
                heroImgWrapper.style.transform = 'rotateY(0) rotateX(0)';
            }
        });
    }

    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Tech icon graceful fallback
    document.querySelectorAll('.skills-chip-list img, .marquee-track img').forEach(function(img) {
        img.addEventListener('error', function () {
            this.style.display = 'none';
        });
    });

    // Project image fallback -- show CSS placeholder when image fails to load
    document.querySelectorAll('.project-card .project-img').forEach(function(img) {
        img.addEventListener('error', function () {
            this.closest('.project-card').classList.add('img-error');
        });
    });

});