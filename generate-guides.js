const fs = require('fs');
const path = require('path');

// Load partners data
const { partnersData } = require("./scripts/partners-data.js");

// Updated guide template with Nexio hybrid styling (guides use white cards throughout)
function generateGuideHTML(partner) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${partner.name} - ${partner.category} Partner | Nexio Ecosystem</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/nexio.css">
</head>
<body class="hide-scrollbar">
    <!-- Background Grid Pattern -->
    <div class="background-tiles"></div>
    
    <!-- Border Container -->
    <div class="border-container">
        <div class="border"></div>
    </div>
    
    <!-- Custom Cursor -->
    <div id="custom-cursor">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" class="cursor">
            <path d="M11.3302 15.3435L14.8443 13.3928C15.3442 13.1152 15.658 12.592 15.6675 12.0203L15.7343 8.00178C15.7438 7.43037 15.4479 6.89726 14.9578 6.60319L11.5124 4.53549C11.0222 4.24131 10.4123 4.23101 9.91239 4.5085L6.39834 6.45923C5.89842 6.73675 5.58458 7.25993 5.57508 7.83163L5.50826 11.8502C5.49876 12.4216 5.79474 12.9547 6.28478 13.2488L9.73024 15.3165C10.2205 15.6107 10.8304 15.621 11.3302 15.3435Z" stroke-width="1.5" class="cursor-path"></path>
        </svg>
    </div>

    <!-- Navigation -->
    <nav class="nav-bar">
        <div id="logo" class="logo-brandname"><svg data-w-id="logo-cube" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48" fill="none" class="nav-logo"><path d="M7.56308 14.2019V19.375L9.764 20.6579V24.6309L8.65679 25.2793L6.05078 23.9549L2 25.9828V28.6728L3.90387 29.5971H3.91737L2 30.3834V32.6872L4.579 34.3978C5.22712 34.8254 6.06429 34.8392 6.72591 34.4391L9.49395 32.7424C9.80451 32.5492 10.007 32.2043 10.007 31.8181V31.018L15.084 27.9555C15.4621 27.7348 15.6916 27.3209 15.6916 26.8657V20.0234C15.6781 20.0234 18.0681 18.6163 18.0681 18.6163L18.0951 14.1881L12.8156 11.1118L7.57658 14.2019H7.56308Z" fill="#073252"/><path d="M16.799 14.34L12.7617 12.05C12.7077 12.0224 12.6537 12.0224 12.5997 12.05L8.61642 14.3951C8.5084 14.4641 8.5084 14.6159 8.61642 14.6848L12.7212 16.9196C12.7752 16.9472 12.8292 16.9472 12.8697 16.9196L16.799 14.6297C16.907 14.5607 16.907 14.4089 16.799 14.34Z" fill="#FC5C21"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100" fill="none" class="nav-brand"><path d="M3.85352 51.368C3.85352 37.19 3.85352 23.0158 3.85352 8.83769C3.85352 6.2574 4.82799 5.28254 7.4421 5.2748C13.0454 5.25933 18.6526 5.32896 24.2559 5.22838C26.2938 5.19356 27.3379 6.24193 28.0301 7.88991C28.4516 8.89572 28.7185 9.96343 29.0665 11.0002C29.7509 13.0234 30.6519 13.2903 32.2413 11.8397C35.826 8.57077 39.8903 6.11814 44.5887 4.92664C56.0931 2.01365 67.1334 2.87246 77.0484 9.93635C84.6162 15.329 88.2473 23.1705 89.7245 32.1377C90.2157 35.128 90.4013 38.1493 90.4013 41.1823C90.4013 58.6447 90.4051 76.1071 90.4013 93.5695C90.4013 96.351 89.3881 97.3452 86.5691 97.3452C80.4476 97.3529 74.3261 97.3529 68.2084 97.3452C65.691 97.3452 64.5812 96.2581 64.5812 93.7707C64.5812 76.6294 64.5734 59.4919 64.585 42.3505C64.585 40.0836 64.3917 37.8437 63.8233 35.6542C62.3886 30.1261 58.9779 26.5786 53.2199 25.832C45.8455 24.8804 39.0086 25.9829 34.1052 32.3156C31.1237 36.1648 29.925 40.7683 29.8321 45.5227C29.6311 55.8284 29.6813 66.138 29.6465 76.4475C29.6272 82.2464 29.6465 88.0453 29.6388 93.8442C29.6349 96.2349 28.5096 97.3374 26.1121 97.3413C19.9287 97.3413 13.7415 97.3452 7.55813 97.3413C4.83961 97.3413 3.85352 96.3626 3.85352 93.6894C3.85352 79.5771 3.85352 65.4648 3.85352 51.3525V51.368Z" fill="#073252"/></svg></div>
        <div class="nav-center">
        <ul class="nav-links desktop-only">
            <li><a href="/" class="nav-link">home</a></li>
            <li><a href="../index.html" class="nav-link active">ecosystem</a></li>
            <li><a href="/blog" class="nav-link">blog</a></li>
            <li><a href="/docs" class="nav-link">docs</a></li>
        </ul>
        </div>
        <div id="mobile-menu-button" class="mobile-menu-button mobile-only">
            <div class="horizontal-line"></div>
            <div class="vertical-line"></div>
        </div>
        <a href="#" class="button desktop-only">start building</a>
    </nav>
    <div id="mobile-menu" class="mobile-menu mobile-only">
        <div class="mobile-menu-dropdown">
            <a href="/" class="nav-link mobile">home</a>
            <a href="../index.html" class="nav-link mobile">ecosystem</a>
            <a href="/blog" class="nav-link mobile">blog</a>
            <a href="/docs" class="nav-link mobile">docs</a>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Breadcrumb -->
        <div class="container">
            <div class="breadcrumb">
                <div class="breadcrumb-list">
                    <a href="/">home</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="../index.html">ecosystem</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${partner.name.toLowerCase()}</span>
                </div>
            </div>

            <!-- Project Header - White Card -->
            <header class="project-header">
                <div class="project-logo" style="${partner.logo?.gradient ? `background: ${partner.logo.gradient}` : partner.logo?.backgroundColor ? `background-color: ${partner.logo.backgroundColor}` : ''}">
                    ${partner.logo?.text || partner.name.charAt(0)}
                </div>
                <div class="project-info">
                    <div class="label">project</div>
                    <h1 class="project-name">${partner.name}</h1>
                    <p class="project-tagline">${partner.tagline || partner.description}</p>
                    <div class="project-badges">
                        <span class="badge badge-category">${partner.category}</span>
                        <span class="badge badge-status${partner.status === 'Testnet' ? ' testnet' : ''}">${partner.status || 'active'}</span>
                        <span class="badge badge-nexio">nexio ready</span>
                    </div>
                </div>
                <div class="project-actions">
                    ${partner.website ? `<a href="${partner.website}" class="btn btn-primary" target="_blank">launch app →</a>` : ''}
                    ${partner.documentation ? `<a href="${partner.documentation}" class="btn btn-secondary" target="_blank">documentation</a>` : ''}
                </div>
            </header>

            <!-- Content Grid -->
            <div class="content-grid">
                <!-- Main Content - All White Cards -->
                <div class="main-sections">
                    <!-- Quick Info Section -->
                    <section class="section">
                        <h2 class="section-title">
                            <div class="section-icon">📋</div>
                            quick overview
                        </h2>
                        <div class="section-content">
                            <p class="paragraph">${partner.description}</p>
                            ${partner.extendedDescription ? `<p class="paragraph">${partner.extendedDescription}</p>` : ''}
                            
                            ${partner.keyFeatures && partner.keyFeatures.length > 0 ? `
                            <h3 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--secondary);">key features</h3>
                            <ul class="features-list">
                                ${partner.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            ` : ''}
                        </div>
                    </section>

                    <!-- How to Use Section -->
                    <section class="section">
                        <h2 class="section-title">
                            <div class="section-icon">🚀</div>
                            how to use ${partner.name.toLowerCase()}
                        </h2>
                        <div class="section-content">
                            ${partner.prerequisites && partner.prerequisites.length > 0 ? `
                            <h3 style="margin-bottom: 1rem; color: var(--secondary);">prerequisites</h3>
                            <ul class="features-list">
                                ${partner.prerequisites.map(req => `<li>${req}</li>`).join('')}
                            </ul>
                            ` : ''}

                            ${partner.howToUse && partner.howToUse.length > 0 ? `
                            <h3 style="margin: 1.5rem 0 1rem; color: var(--secondary);">getting started</h3>
                            <ol class="steps-list">
                                ${partner.howToUse.map(step => `
                                    <li class="step">
                                        <div class="step-number">${step.step}</div>
                                        <div class="step-content">
                                            <h4>${step.title}</h4>
                                            <p class="paragraph">${step.description}</p>
                                        </div>
                                    </li>
                                `).join('')}
                            </ol>
                            ` : ''}

                            ${partner.tips && partner.tips.length > 0 ? `
                            <h3 style="margin: 1.5rem 0 1rem; color: var(--secondary);">tips & best practices</h3>
                            <ul class="features-list">
                                ${partner.tips.map(tip => `<li>${tip}</li>`).join('')}
                            </ul>
                            ` : ''}
                        </div>
                    </section>

                    ${partner.strategies && partner.strategies.length > 0 ? `
                    <!-- Strategies Section -->
                    <section class="section">
                        <h2 class="section-title">
                            <div class="section-icon">💡</div>
                            popular strategies
                        </h2>
                        <div class="section-content">
                            <div class="strategy-grid">
                                ${partner.strategies.map(strategy => `
                                    <div class="strategy-card">
                                        <div class="strategy-header">
                                            <span class="strategy-title">${strategy.name}</span>
                                            <span class="strategy-apy">${strategy.apy || strategy.returns || strategy.winRate || strategy.leverage || 'variable'}</span>
                                        </div>
                                        <p class="strategy-description">${strategy.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </section>
                    ` : ''}

                    ${partner.faq && partner.faq.length > 0 ? `
                    <!-- FAQ Section -->
                    <section class="section">
                        <h2 class="section-title">
                            <div class="section-icon">❓</div>
                            frequently asked questions
                        </h2>
                        <div class="section-content">
                            <div class="faq-list">
                                ${partner.faq.map((item, index) => `
                                    <div class="faq-item">
                                        <div class="faq-question">${item.question}</div>
                                        <div class="faq-answer">
                                            <p class="paragraph">${item.answer}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </section>
                    ` : ''}
                </div>

                <!-- Sidebar - All White Cards -->
                <aside class="sidebar">
                    ${partner.metrics && Object.keys(partner.metrics).length > 0 ? `
                    <!-- Stats Section -->
                    <div class="sidebar-section">
                        <h3 class="sidebar-title">📊 ${partner.category === 'DeFi' ? 'protocol stats' : 'platform stats'}</h3>
                        <div class="info-list">
                            ${Object.entries(partner.metrics).map(([key, value]) => `
                                <div class="info-item">
                                    <span class="info-label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim().toLowerCase()}</span>
                                    <span class="info-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    <!-- Resources -->
                    <div class="sidebar-section">
                        <h3 class="sidebar-title">🔗 resources</h3>
                        <div class="info-list">
                            ${partner.website ? `<a href="${partner.website}" target="_blank" class="btn btn-primary" style="width: 100%;">official website</a>` : ''}
                            ${partner.documentation ? `<a href="${partner.documentation}" target="_blank" class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;">documentation</a>` : ''}
                        </div>
                        
                        ${partner.twitter || partner.discord ? `
                        <h4 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--secondary);">social links</h4>
                        <div class="social-links">
                            ${partner.twitter ? `<a href="https://twitter.com/${partner.twitter.replace('@', '')}" class="social-link" target="_blank">𝕏</a>` : ''}
                            ${partner.discord ? `<a href="${partner.discord}" class="social-link" target="_blank">💬</a>` : ''}
                        </div>
                        ` : ''}
                    </div>

                    <!-- Security Status -->
                    <div class="sidebar-section">
                        <h3 class="sidebar-title">🛡️ security status</h3>
                        <div class="info-list">
                            <div class="info-item">
                                <span class="info-label">audit status</span>
                                <span class="info-value">${partner.securityStatus?.audited ? '✓ audited' : '⚠️ unaudited'}</span>
                            </div>
                            ${partner.securityStatus?.auditors && partner.securityStatus.auditors.length > 0 ? `
                                <div class="info-item">
                                    <span class="info-label">security partners</span>
                                    <span class="info-value">${partner.securityStatus.auditors.join(', ')}</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="risk-card">
                            <div class="risk-level ${partner.securityStatus?.riskLevel?.toLowerCase() || 'medium'}">
                                <span>⬤</span> ${partner.securityStatus?.riskLevel || 'medium'} risk
                            </div>
                            <p class="risk-description">${partner.securityStatus?.riskDescription || 'Standard DeFi protocol risks apply.'}</p>
                        </div>
                    </div>

                    <!-- Support -->
                    <div class="sidebar-section">
                        <h3 class="sidebar-title">🤝 get support</h3>
                        <p class="paragraph" style="margin-bottom: 1rem;">need help? join the community for support.</p>
                        ${partner.discord ? `<a href="${partner.discord}" class="btn btn-primary" style="width: 100%;" target="_blank">join discord</a>` : '<a href="#" class="btn btn-primary" style="width: 100%;">contact support</a>'}
                    </div>
                </aside>
            </div>
        </div>
    </div>

    <script>
        // Custom cursor implementation
        const cursor = document.getElementById('custom-cursor');
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        // Check if it's a touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (!isTouchDevice && window.innerWidth > 991) {
            cursor.style.display = 'block';
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Smooth cursor animation
            function animateCursor() {
                const dx = mouseX - cursorX;
                const dy = mouseY - cursorY;
                
                cursorX += dx * 0.125;
                cursorY += dy * 0.125;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            }
            animateCursor();
            
            // Add hover effects
            const interactiveElements = document.querySelectorAll('a, button, .faq-question');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                });
            });
        } else {
            cursor.style.display = 'none';
        }

        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
            });
        });

        // Page load animations
        window.addEventListener('load', () => {
            // Animate sections in
            const sections = document.querySelectorAll('.section, .sidebar-section, .project-header');
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    section.style.transition = 'all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    </script>
</body>
</html>`;
}

// Create guides directory if it doesn't exist
if (!fs.existsSync('guides')) {
    fs.mkdirSync('guides');
    console.log('✅ Created guides directory');
}

// Generate all guide pages
let successCount = 0;
let errorCount = 0;

console.log('🎨 Generating Nexio-styled guides with hybrid card system...\n');

Object.entries(partnersData).forEach(([slug, partner]) => {
    try {
        const html = generateGuideHTML(partner);
        const filename = path.join('guides', `${slug}.html`);
        fs.writeFileSync(filename, html);
        console.log(`✅ Generated guide: ${filename}`);
        successCount++;
    } catch (error) {
        console.error(`❌ Error generating guide for ${slug}:`, error.message);
        errorCount++;
    }
});

console.log('\n========================================');
console.log(`✨ Nexio hybrid guide generation complete!`);
console.log(`✅ Successfully generated: ${successCount} guides`);
if (errorCount > 0) {
    console.log(`❌ Errors encountered: ${errorCount}`);
}
console.log('🎨 Design System: Hybrid card approach implemented');
console.log('📋 Featured cards: Up Network, LYNC, Mosaic, Lunch (white with dark text)');
console.log('🔍 Grid cards: All 24 partners (transparent with white text)');
console.log('📄 Guide pages: Consistent white cards throughout');
console.log('========================================\n');

// List all generated files
console.log('📁 Generated files:');
const files = fs.readdirSync('guides');
files.forEach(file => {
    console.log(`   - guides/${file}`);
});

console.log('\n🔧 Implementation Instructions:');
console.log('1. Replace styles/nexio.css with the hybrid version');
console.log('2. Replace index.html with the updated version');
console.log('3. Replace scripts/ecosystem.js with the enhanced version');
console.log('4. All guide pages now use consistent white card styling');
console.log('5. Test locally to see the hybrid card system in action');
console.log('\n🎯 Result: Perfect balance of visual hierarchy and readability!');
