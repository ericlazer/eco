const fs = require('fs');
const path = require('path');

// Load partners data - Make sure the path is correct
const { partnersData } = require("./scripts/partners-data.js");
// Guide template
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
<body>
    <!-- Background Pattern -->
    <div class="background-tiles"></div>

    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <a href="/" class="logo">nex<span>io</span></a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/index.html">Ecosystem</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/docs">Docs</a></li>
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
            <div class="breadcrumb-list">
                <a href="/">Home</a>
                <span class="breadcrumb-separator">›</span>
                <a href="/index.html">Ecosystem</a>
                <span class="breadcrumb-separator">›</span>
                <span>${partner.name}</span>
            </div>
        </div>

        <!-- Project Header -->
        <header class="project-header">
            <div class="project-logo" style="${partner.logo.gradient ? `background: ${partner.logo.gradient}` : `background-color: ${partner.logo.backgroundColor}`}">
                ${partner.logo.text}
            </div>
            <div class="project-info">
                <h1 class="project-name">${partner.name}</h1>
                <p class="project-tagline">${partner.tagline}</p>
                <div class="project-badges">
                    <span class="badge badge-category">${partner.category}</span>
                    <span class="badge badge-status${partner.status === 'Testnet' ? ' testnet' : ''}">${partner.status}</span>
                    <span class="badge badge-nexio">Movement Ready</span>
                </div>
            </div>
            <div class="project-actions">
                ${partner.website ? `<a href="${partner.website}" class="btn btn-primary" target="_blank">Launch App →</a>` : ''}
                ${partner.documentation ? `<a href="${partner.documentation}" class="btn btn-secondary" target="_blank">Documentation</a>` : ''}
            </div>
        </header>

        <!-- Content Grid -->
        <div class="content-grid">
            <!-- Main Content -->
            <div class="main-sections">
                <!-- Quick Info Section -->
                <section class="section">
                    <h2 class="section-title">
                        <div class="section-icon">📋</div>
                        Quick Overview
                    </h2>
                    <div class="section-content">
                        <p>${partner.description}</p>
                        <p>${partner.extendedDescription}</p>
                        
                        ${partner.keyFeatures && partner.keyFeatures.length > 0 ? `
                        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Key Features</h3>
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
                        How to Use ${partner.name}
                    </h2>
                    <div class="section-content">
                        ${partner.prerequisites && partner.prerequisites.length > 0 ? `
                        <h3 style="margin-bottom: 1rem;">Prerequisites</h3>
                        <ul class="features-list">
                            ${partner.prerequisites.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                        ` : ''}

                        ${partner.howToUse && partner.howToUse.length > 0 ? `
                        <h3 style="margin: 1.5rem 0 1rem;">Getting Started</h3>
                        <ol class="steps-list">
                            ${partner.howToUse.map(step => `
                                <li class="step">
                                    <div class="step-number">${step.step}</div>
                                    <div class="step-content">
                                        <h4>${step.title}</h4>
                                        <p>${step.description}</p>
                                    </div>
                                </li>
                            `).join('')}
                        </ol>
                        ` : ''}

                        ${partner.tips && partner.tips.length > 0 ? `
                        <h3 style="margin: 1.5rem 0 1rem;">Tips & Best Practices</h3>
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
                        Popular Strategies
                    </h2>
                    <div class="section-content">
                        <div class="strategy-grid">
                            ${partner.strategies.map(strategy => `
                                <div class="strategy-card">
                                    <div class="strategy-header">
                                        <span class="strategy-title">${strategy.name}</span>
                                        <span class="strategy-apy">${strategy.apy || strategy.returns || strategy.winRate || strategy.leverage || 'Variable'}</span>
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
                        Frequently Asked Questions
                    </h2>
                    <div class="section-content">
                        <div class="faq-list">
                            ${partner.faq.map((item, index) => `
                                <div class="faq-item">
                                    <div class="faq-question">${item.question}</div>
                                    <div class="faq-answer">
                                        <p>${item.answer}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
                ` : ''}
            </div>

            <!-- Sidebar -->
            <aside class="sidebar">
                ${partner.metrics && Object.keys(partner.metrics).length > 0 ? `
                <!-- Stats Section -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">📊 ${partner.category === 'DeFi' ? 'Protocol Stats' : 'Platform Stats'}</h3>
                    <div class="info-list">
                        ${Object.entries(partner.metrics).map(([key, value]) => `
                            <div class="info-item">
                                <span class="info-label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span class="info-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Resources -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">🔗 Resources</h3>
                    <div class="info-list">
                        ${partner.website ? `<a href="${partner.website}" target="_blank" class="btn btn-secondary" style="width: 100%;">Official Website</a>` : ''}
                        ${partner.documentation ? `<a href="${partner.documentation}" target="_blank" class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;">Documentation</a>` : ''}
                    </div>
                    
                    ${partner.twitter || partner.discord ? `
                    <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Social Links</h4>
                    <div class="social-links">
                        ${partner.twitter ? `<a href="https://twitter.com/${partner.twitter.replace('@', '')}" class="social-link" target="_blank">𝕏</a>` : ''}
                        ${partner.discord ? `<a href="${partner.discord}" class="social-link" target="_blank">💬</a>` : ''}
                    </div>
                    ` : ''}
                </div>

                <!-- Security Status -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">🛡️ Security Status</h3>
                    <div class="info-list">
                        <div class="info-item">
                            <span class="info-label">Audit Status</span>
                            <span class="info-value">${partner.securityStatus.audited ? '✓ Audited' : '⚠️ Unaudited'}</span>
                        </div>
                        ${partner.securityStatus.auditors && partner.securityStatus.auditors.length > 0 ? `
                            <div class="info-item">
                                <span class="info-label">Security Partners</span>
                                <span class="info-value">${partner.securityStatus.auditors.join(', ')}</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="risk-card">
                        <div class="risk-level ${partner.securityStatus.riskLevel.toLowerCase()}">
                            <span>⬤</span> ${partner.securityStatus.riskLevel} Risk
                        </div>
                        <p class="risk-description">${partner.securityStatus.riskDescription}</p>
                    </div>
                </div>

                <!-- Support -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">🤝 Get Support</h3>
                    <p style="color: var(--gray-700); margin-bottom: 1rem;">Need help? Join the community for support.</p>
                    ${partner.discord ? `<a href="${partner.discord}" class="btn btn-primary" style="width: 100%;" target="_blank">Join Discord</a>` : '<a href="#" class="btn btn-primary" style="width: 100%;">Contact Support</a>'}
                </div>
            </aside>
        </div>
    </div>

    <script>
        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
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
console.log(`✨ Guide generation complete!`);
console.log(`✅ Successfully generated: ${successCount} guides`);
if (errorCount > 0) {
    console.log(`❌ Errors encountered: ${errorCount}`);
}
console.log('========================================\n');

// List all generated files
console.log('📁 Generated files:');
const files = fs.readdirSync('guides');
files.forEach(file => {
    console.log(`   - guides/${file}`);
});
