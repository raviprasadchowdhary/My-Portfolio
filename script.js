document.addEventListener('DOMContentLoaded', () => {
    // --- Dynamic Content Loading ---
    function loadContent() {
        if (typeof portfolioData === 'undefined') {
            console.error('Data file not found!');
            return;
        }

        const data = portfolioData;

        // --- Site Config ---
        // Logo
        const logo = document.getElementById('site-logo');
        logo.innerHTML = `${data.site.logo.text}<span class="dot">.</span>`;
        // Nav
        const navList = document.getElementById('nav-links');
        navList.innerHTML = data.site.nav.map(item => `
            <li><a href="${item.link}" class="${item.isButton ? 'btn-primary' : ''}">${item.text}</a></li>
        `).join('');
        // Section Headers
        setLink('header-about', data.site.headers.about);
        setLink('header-skills', data.site.headers.skills);
        setLink('header-experience', data.site.headers.experience);
        setLink('header-projects', data.site.headers.projects);
        setLink('header-contact', data.site.headers.contact);

        // --- Personal Content ---
        // Hero Section
        setLink('hero-name', data.personal.name); // Using safe setter function
        // Special case for hero name which is an H1, not a link usually, but let's keep it simple
        document.getElementById('hero-name').textContent = data.personal.name;
        document.getElementById('hero-role').textContent = data.personal.role;
        document.getElementById('hero-tagline').textContent = data.personal.tagline;

        // Hero Socials
        const heroSocial = document.getElementById('hero-social');
        heroSocial.innerHTML = `
            <a href="${data.personal.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="${data.personal.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="mailto:${data.personal.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
        `;

        // About Section
        const aboutText = document.getElementById('about-text');
        aboutText.innerHTML = data.about.text.map(para => `<p>${para}</p>`).join('');

        const aboutStats = document.getElementById('about-stats');
        aboutStats.innerHTML = data.about.stats.map(stat => `
            <div class="stat-item">
                <span class="stat-number">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');

        // Skills Section
        const skillsGrid = document.getElementById('skills-grid');
        skillsGrid.innerHTML = data.skills.map(skill => `
            <div class="skill-category">
                <h3><i class="${skill.icon}"></i> ${skill.category}</h3>
                <ul>
                    ${skill.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        // Experience Section
        const expTimeline = document.getElementById('experience-timeline');
        expTimeline.innerHTML = data.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-content">
                    <h3>${exp.role}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                    <ul>
                        ${exp.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Projects Section
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = data.projects.map(project => `
            <article class="project-card">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        // Contact Section
        const contactMethods = document.getElementById('contact-methods');
        contactMethods.innerHTML = `
            <a href="mailto:${data.personal.email}" class="contact-card">
                <i class="fas fa-envelope"></i>
                <span>${data.personal.email}</span>
            </a>
            <a href="${data.personal.linkedin}" target="_blank" class="contact-card">
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
            </a>
            <a href="tel:${data.personal.phone.replace(/\s+/g, '')}" class="contact-card">
                <i class="fas fa-phone"></i>
                <span>${data.personal.phone}</span>
            </a>
        `;

        // Resume Link
        const resumeLink = document.getElementById('resume-link');
        resumeLink.href = data.personal.resume;

        // Footer
        document.getElementById('footer-name').textContent = data.personal.name;
        const footerSocial = document.getElementById('footer-social');
        footerSocial.innerHTML = `
            <a href="${data.personal.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="${data.personal.github}" target="_blank"><i class="fab fa-github"></i></a>
        `;
    }

    // Initialize Content
    loadContent();

    // Helper (unused for H1 but good to have)
    function setLink(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    // --- End Dynamic Content Loading ---

    // DOM Elements
    // DOM Elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        }
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation class to sections (need to add CSS for this)
    document.querySelectorAll('.section, .project-card, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Helper for the inline styles above to work with the observer
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Dynamic Year in Footer - Immediate Execution Check
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Fallback: Run immediately in case DOMContentLoaded already fired
(function () {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan && !yearSpan.textContent) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();
