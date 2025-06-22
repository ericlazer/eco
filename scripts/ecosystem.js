// Ecosystem page functionality with Nexio hybrid card styling

document.addEventListener('DOMContentLoaded', function() {
    loadSpotlightPartners();
    loadAllPartners();
    setupModalHandling();
    setupCursorEffects();
    setupMobileMenu();
});

// Featured/Spotlight partners (from your current featured section)
const spotlightPartners = [
    'up-network',
    'lync', 
    'mosaic',
    'lunch'
];

function loadSpotlightPartners() {
    const spotlightGrid = document.getElementById('spotlightGrid');
    if (!spotlightGrid) return;

    spotlightGrid.innerHTML = '';
    
    spotlightPartners.forEach(slug => {
        const partner = partnersData[slug];
        if (!partner) return;

        const spotlightCard = createSpotlightCard(partner, slug);
        spotlightGrid.appendChild(spotlightCard);
    });
}

function createSpotlightCard(partner, slug) {
    const card = document.createElement('div');
    card.className = 'spotlight-card'; // White card with dark text
    card.onclick = () => openModal(partner, slug);
    
    // Create icon with proper Nexio styling
    const icon = document.createElement('div');
    icon.className = 'spotlight-icon';
    
    if (partner.logo && partner.logo.text) {
        icon.textContent = partner.logo.text;
        if (partner.logo.gradient) {
            icon.style.background = partner.logo.gradient;
        } else if (partner.logo.backgroundColor) {
            icon.style.backgroundColor = partner.logo.backgroundColor;
        }
    } else {
        // Fallback to first letter
        icon.textContent = partner.name.charAt(0);
    }
    
    const title = document.createElement('h3');
    title.textContent = partner.name;
    
    const description = document.createElement('p');
    description.textContent = partner.description;
    
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);
    
    return card;
}

function loadAllPartners() {
    const partnersGrid = document.getElementById('partnersGrid');
    if (!partnersGrid) return;

    partnersGrid.innerHTML = '';
    
    Object.entries(partnersData).forEach(([slug, partner]) => {
        const partnerCard = createPartnerCard(partner, slug);
        partnersGrid.appendChild(partnerCard);
    });
}

function createPartnerCard(partner, slug) {
    const card = document.createElement('div');
    card.className = 'partner-card'; // Transparent card with white text
    card.dataset.category = partner.category.toLowerCase();
    card.onclick = () => openModal(partner, slug);
    
    // Create logo with Nexio styling
    const logo = document.createElement('div');
    logo.className = 'partner-logo';
    
    if (partner.logo && partner.logo.text) {
        logo.textContent = partner.logo.text;
        if (partner.logo.gradient) {
            logo.style.background = partner.logo.gradient;
        } else if (partner.logo.backgroundColor) {
            logo.style.backgroundColor = partner.logo.backgroundColor;
        }
    } else {
        // Fallback to first letter
        logo.textContent = partner.name.charAt(0);
    }
    
    const name = document.createElement('div');
    name.className = 'partner-name';
    name.textContent = partner.name;
    
    const category = document.createElement('div');
    category.className = 'partner-category';
    category.textContent = partner.category;
    
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(category);
    
    return card;
}

function filterPartners(category) {
    const tabs = document.querySelectorAll('.category-tab');
    const cards = document.querySelectorAll('.partner-card');
    
    // Update active tab with Nexio styling
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase() === category || 
            (category === 'all' && tab.textContent.toLowerCase() === 'all')) {
            tab.classList.add('active');
        }
    });
    
    // Filter cards with staggered animation
    cards.forEach((card, index) => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            // Add staggered animation for visible cards
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50); // Faster stagger for better UX
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 150);
        }
    });
}

function openModal(partner, slug) {
    const modal = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    // Create modal content with Nexio styling (white card with dark text)
    modalContent.innerHTML = `
        <div class="modal-header">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div class="modal-logo">${partner.logo?.text || partner.name.charAt(0)}</div>
            <h2 class="modal-title">${partner.name}</h2>
            <div class="modal-tags">
                <span class="modal-tag">${partner.category}</span>
                <span class="modal-tag">${partner.status || 'active'}</span>
                <span class="modal-tag">nexio ready</span>
            </div>
        </div>
        <div class="modal-body">
            <p class="modal-description">${partner.description}</p>
            ${partner.extendedDescription ? `<p class="modal-description">${partner.extendedDescription}</p>` : ''}
            
            <div class="modal-actions">
                <a href="guides/${slug}.html" class="btn btn-primary">view guide →</a>
                ${partner.website ? `<a href="${partner.website}" target="_blank" class="btn btn-secondary">launch app</a>` : ''}
            </div>
            
            <div class="modal-info">
                ${partner.metrics ? Object.entries(partner.metrics).map(([key, value]) => `
                    <div class="modal-info-item">
                        <span class="modal-info-label">${formatLabel(key)}</span>
                        <span class="modal-info-value">${value}</span>
                    </div>
                `).join('') : ''}
                
                ${partner.keyFeatures ? `
                    <div class="modal-info-item">
                        <span class="modal-info-label">key features</span>
                        <span class="modal-info-value">${partner.keyFeatures.join(', ')}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Apply logo styling if available
    const modalLogo = modalContent.querySelector('.modal-logo');
    if (partner.logo) {
        if (partner.logo.gradient) {
            modalLogo.style.background = partner.logo.gradient;
        } else if (partner.logo.backgroundColor) {
            modalLogo.style.backgroundColor = partner.logo.backgroundColor;
        }
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update cursor hover effects for new modal elements
    setTimeout(() => {
        setupCursorEffects();
    }, 100);
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function formatLabel(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase());
}

function setupModalHandling() {
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function setupCursorEffects() {
    // Enhanced cursor effects for Nexio elements
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    
    // Remove existing listeners to avoid duplicates
    const interactiveElements = document.querySelectorAll(
        'a, button, .category-tab, .partner-card, .spotlight-card, .modal-close'
    );
    
    interactiveElements.forEach(el => {
        // Remove existing listeners
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        
        // Add new listeners
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    function handleMouseEnter() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.3)';
        cursor.style.opacity = '0.8';
    }
    
    function handleMouseLeave() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '1';
    }
}

function setupMobileMenu() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!button || !menu) return;
    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('active');
    });
}

// Animation utilities for Nexio-style effects
function animateCardsIn() {
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    const partnerCards = document.querySelectorAll('.partner-card');
    
    // Animate spotlight cards first (white cards)
    spotlightCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Animate partner cards after spotlight cards (transparent cards)
    setTimeout(() => {
        partnerCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50); // Faster stagger for grid
        });
    }, spotlightCards.length * 150 + 300);
}

// Enhanced hover effects for hybrid card system
function enhanceCardInteractions() {
    // Spotlight cards (white) - more dramatic hover effect
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Partner cards (transparent) - subtle glow effect
    document.querySelectorAll('.partner-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.background = 'rgba(255, 255, 255, 0.2)';
            card.style.borderColor = 'rgba(252, 92, 33, 0.5)';
            card.style.boxShadow = '0 12px 32px rgba(252, 92, 33, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.background = 'rgba(255, 255, 255, 0.12)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            card.style.boxShadow = 'none';
        });
    });
}

// Initialize animations and interactions
window.addEventListener('load', () => {
    setTimeout(() => {
        animateCardsIn();
        enhanceCardInteractions();
    }, 300);
});

// Performance optimization - debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        setupCursorEffects();
    }, 250);
});

// Export for global access
window.filterPartners = filterPartners;
window.openModal = openModal;
window.closeModal = closeModal;
