// Generate partner cards dynamically
function generatePartnerCards() {
    const partnersGrid = document.getElementById('partnersGrid');
    const partnerEntries = Object.entries(partnersData);
    
    partnersGrid.innerHTML = partnerEntries.map(([id, partner], index) => `
        <div class="partner-card" data-category="${partner.category.toLowerCase()}" onclick="openModal('${id}')" style="animation-delay: ${index * 0.05}s">
            <div class="partner-logo" style="${partner.logo.gradient ? `background: ${partner.logo.gradient}` : `background-color: ${partner.logo.backgroundColor}`}">
                ${partner.logo.text}
            </div>
            <div class="partner-name">${partner.name}</div>
            <div class="partner-category">${partner.category}</div>
        </div>
    `).join('');
}

// Generate spotlight cards for featured partners
function generateSpotlight() {
    const grid = document.getElementById('spotlightGrid');
    if (!grid) return;

    const featured = Object.entries(partnersData).slice(0, 4);
    grid.innerHTML = featured.map(([id, partner]) => `
        <div class="spotlight-card" onclick="openModal('${id}')">
            <div class="spotlight-icon" style="${partner.logo.gradient ? `background: ${partner.logo.gradient}` : `background-color: ${partner.logo.backgroundColor}`}">
                ${partner.logo.text}
            </div>
            <h3>${partner.name}</h3>
            <p>${partner.tagline}</p>
        </div>
    `).join('');
}

// Open modal with partner details
function openModal(partnerId) {
    const partner = partnersData[partnerId];
    if (!partner) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div class="modal-logo" style="${partner.logo.gradient ? `background: ${partner.logo.gradient}` : `background-color: ${partner.logo.backgroundColor}`}">
                ${partner.logo.text}
            </div>
            <h2 class="modal-title">${partner.name}</h2>
            <div class="modal-tags">
                <span class="modal-tag">${partner.category}</span>
                <span class="modal-tag">${partner.status}</span>
            </div>
        </div>
        <div class="modal-body">
            <p class="modal-description">${partner.description}</p>
            
            <div class="modal-actions">
                <a href="guides/${partner.slug}.html" class="btn btn-primary">
                    View Guide →
                </a>
                ${partner.website ? `
                    <a href="${partner.website}" target="_blank" rel="noopener" class="btn btn-secondary">
                        Visit Website ↗
                    </a>
                ` : ''}
            </div>
            
            <div class="modal-info">
                ${partner.keyFeatures ? `
                    <div class="modal-info-item">
                        <div class="modal-info-label">Features</div>
                        <div class="modal-info-value">${partner.keyFeatures.slice(0, 3).join(' • ')}</div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Filter partners by category
function filterPartners(category) {
    const tabs = document.querySelectorAll('.category-tab');
    const cards = document.querySelectorAll('.partner-card');

    // Update active tab
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase() === category || 
            (category === 'all' && tab.textContent === 'All')) {
            tab.classList.add('active');
        }
    });

    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category.toLowerCase() === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    generatePartnerCards();
    generateSpotlight();
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
