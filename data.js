const portfolioData = {
    // ========== SITE CONFIGURATION ==========
    "site": {
        "pageTitle": "Raviprasad | QA Engineer",
        "metaDescription": "Portfolio of Raviprasad - Quality Assurance Engineer & Software Test Engineer.",
        "faviconText": "RC",
        "logo": {
            "text": "RC",
            "dotColor": "accent"
        },
        "nav": [
            { "text": "About", "link": "#about" },
            { "text": "Skills", "link": "#skills" },
            { "text": "Experience", "link": "#experience" },
            { "text": "Projects", "link": "#projects" },
            { "text": "Contact", "link": "#contact", "isButton": true }
        ],
        "headers": {
            "about": "About Me",
            "skills": "Technical Skills",
            "experience": "Experience",
            "projects": "Featured Projects",
            "contact": "Get In Touch"
        },
        "labels": {
            "about": "Background",
            "skills": "Expertise",
            "experience": "Career",
            "projects": "Work",
            "contact": "Contact"
        },
        "uiText": {
            "heroGreeting": "QA Engineer & Test Automation",
            "heroButtons": {
                "viewProjects": "View Projects",
                "contactMe": "Contact Me"
            },
            "contactTagline": "Feel free to reach out for collaborations or just a friendly hello!",
            "resumeButtonText": "View Resume"
        }
    },

    // ========== HERO SECTION ==========
    "hero": {
        "name": "Raviprasad",
        "role": "Quality Assurance Engineer",
        "tagline": "Ensuring high-quality, defect-free software releases with {{yearsExp}}+ years of expertise in Manual, API & Automation Testing."
    },

    // ========== ABOUT SECTION ==========
    "about": {
        "text": [
            "I am a <strong>Quality Assurance Engineer</strong> with over 4 years of experience specializing in Manual & Automation Testing of web and API-based applications being based in Bengaluru, India.",
            "My expertise lies in test case design, functional and regression testing, defect management, and requirement analysis. I thrive in Agile environments, collaborating closely with development teams to ensure seamless and defect-free software releases.",
            "Currently, I work as a Sr. Quality Engineer at <strong>Cognizant</strong>, where I have led QA teams, optimized regression suites, and delivered multiple major projects with zero critical post-production defects."
        ],
        "stats": [
            { "label": "Years Exp.", "auto": "yearsExp" },
            { "label": "Issues Resolved", "value": "200+" },
            { "label": "Test Coverage", "value": "95%+" }
        ]
    },

    // ========== SKILLS SECTION ==========
    "skills": [
        {
            "category": "Testing & QA",
            "icon": "fas fa-vial",
            "items": ["Manual Testing", "Functional & Regression", "Smoke & Sanity", "API Testing", "Defect Management", "Agile (Scrum)", "Requirement Analysis"]
        },
        {
            "category": "Tools",
            "icon": "fas fa-tools",
            "items": ["JIRA & Confluence", "Postman", "GitHub", "Oracle SQL Developer", "SauceLabs"]
        },
        {
            "category": "Languages & Frameworks",
            "icon": "fas fa-code",
            "items": ["Playwright", "TypeScript", "JavaScript", "Python & Pytest", "SQL / MongoDB / Oracle", "Selenium (Java — basic)"]
        },
        {
            "category": "AI & Dev Tools",
            "icon": "fas fa-robot",
            "items": ["Prompt Engineering", "AI-assisted Development", "GitHub Copilot", "Claude (Anthropic)", "ChatGPT"]
        }
    ],

    // ========== EXPERIENCE SECTION ==========
    "experience": [
        {
            "company": "Cognizant",
            "companyType": "Full-time",
            "companyStartDate": "2021-08",
            "companyEndDate": null,
            "roles": [
                {
                    "title": "Associate - Sr. Quality Engineer",
                    "startDate": "2023-10",
                    "endDate": null,
                    "location": "Bengaluru, Karnataka, India",
                    "workType": "Hybrid",
                    "points": [
                        "Supported UAT activities by validating business workflows and resolving test discrepancies.",
                        "Mentored and guided <strong>5+ junior testers</strong>, improving productivity and test quality within onboarding weeks.",
                        "Delivered <strong>4 major and 5 short-term projects</strong> with zero critical post-production defects.",
                        "Improved test execution efficiency by <strong>25%</strong> through optimized regression suites.",
                        "Reported and resolved <strong>200+ issues</strong> across projects, including 15+ critical defects.",
                        "Received multiple <strong>Coral Awards</strong> for delivery excellence and proactive QA ownership."
                    ]
                },
                {
                    "title": "Programmer Analyst - Quality Engineer",
                    "startDate": "2022-08",
                    "endDate": "2023-10",
                    "location": "Bengaluru, Karnataka, India",
                    "workType": "Hybrid",
                    "points": [
                        "Conducted API testing using <strong>Postman</strong> and verified responses for data consistency and accuracy.",
                        "Participated in requirement analysis and sprint planning sessions, ensuring complete test coverage.",
                        "Reported, tracked, and verified bugs through <strong>JIRA</strong>, collaborating with dev teams for quick resolution.",
                        "Delivered detailed test summary reports, metrics, and daily status updates to project stakeholders."
                    ]
                },
                {
                    "title": "Programmer Analyst Trainee",
                    "startDate": "2021-08",
                    "endDate": "2022-08",
                    "location": "Chennai, Tamil Nadu, India",
                    "workType": "Remote",
                    "points": [
                        "Performed smoke, functional, regression, and integration testing across web and backend platforms.",
                        "Designed, reviewed, and executed test cases and scenarios based on business and technical requirements."
                    ]
                }
            ]
        }
    ],

    // ========== PROJECTS SECTION ==========
    "projects": [
        {
            "title": "LMS Migration — SumTotal to Absorb",
            "desc": "Led end-to-end QA for a full LMS platform migration. Validated data accuracy, API integrations, and system stability across pre- and post-migration environments.",
            "highlights": [
                "Ran <strong>end-to-end functional and regression testing</strong> across pre- and post-migration environments",
                "Validated <strong>API integrations via Postman</strong> for data consistency between source and target systems",
                "Led a <strong>3-member QA team</strong> for test planning, execution, and sign-off"
            ],
            "tags": ["Migration Testing", "API Testing", "Team Lead", "LMS"]
        },
        {
            "title": "Member Address Change — US Healthcare (CA)",
            "desc": "Owned QA for end-to-end member address change workflows in a US healthcare platform, including premium recalculation validation and backend data integrity.",
            "highlights": [
                "Tested <strong>end-to-end address change workflows</strong> and validated downstream premium recalculations",
                "Verified <strong>backend data integrity and API-UI sync</strong> across multiple service layers",
                "Built <strong>reusable regression suites</strong> that reduced re-test effort on subsequent releases"
            ],
            "tags": ["Healthcare", "Regression Testing", "API", "Backend Validation"]
        },
        {
            "title": "Dashboard Redesign — US Healthcare (CA)",
            "desc": "Cross-browser and UI validation for redesigned dashboards across web and mobile. Worked directly with design and dev teams on UX parity and defect resolution.",
            "highlights": [
                "Logged and closed <strong>65+ defects</strong> across browsers and mobile viewports",
                "Performed <strong>cross-browser UI validation</strong> on Chrome, Firefox, Safari, and Edge",
                "Collaborated with design and dev on <strong>UX testing</strong> and visual regression sign-off"
            ],
            "tags": ["UI/UX Testing", "Cross-browser", "Mobile", "Visual Regression"]
        },
        {
            "title": "Broker Portal — US Healthcare (CA)",
            "desc": "Functional and end-to-end testing of broker workflows including user activation, permission management, and real-time data synchronization between portals.",
            "highlights": [
                "Validated <strong>broker user activation flows</strong> and permission-based access controls",
                "Tested <strong>real-time data sync</strong> between the broker portal and backend systems",
                "Executed <strong>end-to-end workflow scenarios</strong> covering edge cases and boundary conditions"
            ],
            "tags": ["Functional Testing", "Workflow Testing", "Data Sync"]
        },
        {
            "title": "CSAdmin Portal — US Healthcare (CA)",
            "desc": "Tested admin and permission modules for a customer service administration portal. Delivered releases with zero major post-launch issues and full requirement traceability.",
            "highlights": [
                "Tested <strong>admin module and role-based permission controls</strong> end-to-end",
                "Ensured <strong>100% requirement traceability</strong> across test cases and acceptance criteria",
                "Delivered releases with <strong>zero major post-launch issues</strong>"
            ],
            "tags": ["Admin Testing", "Permission Testing", "Traceability"]
        },
        {
            "title": "Employer Portal — US Healthcare (CA)",
            "desc": "Data migration and functionality testing for employer-specific modules. Improved JIRA and Confluence documentation standards for audit readiness.",
            "highlights": [
                "Performed <strong>data migration validation</strong> and functionality testing for employer modules",
                "Improved <strong>JIRA and Confluence documentation</strong> standards for audit readiness",
                "Verified <strong>employer-specific data flows</strong> and cross-module integration points"
            ],
            "tags": ["Data Migration", "Integration Testing", "Documentation"]
        },
        {
            "title": "Ravionus — Developer Tools Platform",
            "personal": true,
            "desc": "Built a production developer tools web platform from scratch — 21 tools, 11 interactive playgrounds, and a full QA automation strategy with 1,374 Playwright tests across a 41-job CI/CD pipeline.",
            "highlights": [
                "Authored <strong>1,374 end-to-end Playwright tests</strong> across 34 spec files — 3-tier classification: Smoke (~130), Functional (~1,240), Regression (~1,374)",
                "Designed a <strong>41-job GitHub Actions pipeline</strong> with path-filtered CI; ~50% runtime reduction via npm + Playwright browser caching",
                "Implemented <strong>scheduled test strategy</strong>: daily smoke runs (Mon–Sat, 02:00 UTC) and weekly full regression (Sunday) with manual <code>workflow_dispatch</code> override",
                "Shipped a <strong>zero-dependency static platform</strong> with 21 developer tools (JSON, YAML, JWT decoder, regex, QR, diff, hash, etc.) and 11 interactive playgrounds — hosted on GitHub Pages"
            ],
            "tags": ["Playwright", "GitHub Actions", "CI/CD", "Vanilla JS", "GitHub Pages"],
            "liveUrl": "https://ravionus.com",
            "repoUrl": "https://github.com/Ravionus/ravionus.com"
        }
    ],

    // ========== CONTACT SECTION ==========
    "contact": {
        "email": "Raviprasad.QE@gmail.com",
        "phone": "+91 99727 64442",
        "linkedin": "https://www.linkedin.com/in/raviprasad07",
        "github": "https://github.com/raviprasadchowdhary",
        "resume": "https://docs.google.com/document/d/1mLQI7Il4niwXlHIlWKsII5V25bYkxTuxziNc3h75HoM/edit?usp=sharing"
    }
};
