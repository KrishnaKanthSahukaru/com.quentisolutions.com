document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieModal = document.getElementById('cookie-modal');

    if (!cookieBanner || !cookieModal) {
        return;
    }

    const cookieAccept = document.getElementById('cookie-accept');
    const cookieClose = document.getElementById('cookie-close');
    const cookieSettings = document.getElementById('cookie-settings');
    const cookieModalClose = document.getElementById('cookie-modal-close');
    const cookieModalShowMore = document.getElementById('cookie-modal-showmore');
    const cookieModalText = document.getElementById('cookie-modal-text');
    const saveAcceptBtn = document.getElementById('cookie-save-accept');

    // --- Event Listeners ---

    cookieClose.addEventListener('click', () => cookieBanner.style.display = 'none');
    cookieAccept.addEventListener('click', () => cookieBanner.style.display = 'none');
    cookieSettings.addEventListener('click', () => modal.style.display = 'flex');
    cookieModalClose.addEventListener('click', () => modal.style.display = 'none');
    cookieModal.addEventListener('click', (e) => {
        if (e.target === cookieModal) cookieModal.style.display = 'none';
    });

    // "Show More" logic for privacy overview text
    if (cookieModalText && cookieModalShowMore) {
        const fullText = cookieModalText.getAttribute('data-full-text');
        const shortText = fullText.slice(0, 258) + (fullText.length > 258 ? '...' : '');
        cookieModalText.textContent = shortText;
        cookieModalShowMore.style.display = fullText.length > 258 ? 'inline-block' : 'none';

        cookieModalShowMore.addEventListener('click', () => {
            cookieModalText.textContent = fullText;
            cookieModalShowMore.style.display = 'none';
        });
    }

    // Logic for all toggle switches
    const cookieSwitches = document.querySelectorAll('.cookie-switch input[type="checkbox"]');
    cookieSwitches.forEach(input => {
        const switchEl = input.parentElement;
        const knob = switchEl.querySelector('.cookie-slider');
        const updateSwitch = () => {
            if (input.checked) {
                knob.style.transform = 'translateX(18px)';
                switchEl.style.backgroundColor = '#1a237e';
            } else {
                knob.style.transform = 'translateX(0)';
                switchEl.style.backgroundColor = '#ccc';
            }
        };
        input.addEventListener('change', updateSwitch);
        updateSwitch(); // Initial state
    });

    // Expand/collapse logic for cookie descriptions
    const expandBtns = document.querySelectorAll('.cookie-expand');
    expandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const desc = btn.closest('.cookie-category').querySelector('.cookie-desc');
            const isExpanded = desc.style.display === 'block';
            desc.style.display = isExpanded ? 'none' : 'block';
            btn.setAttribute('aria-expanded', !isExpanded);
            btn.innerHTML = isExpanded ? '&#9654;' : '&#9660;';
        });
    });

    // "Save & Accept" button
    if (saveAcceptBtn) {
        saveAcceptBtn.addEventListener('click', () => {
            const settings = {
                functional: document.getElementById('functional-toggle')?.checked,
                analytics: document.getElementById('analytics-toggle')?.checked,
                performance: document.getElementById('performance-toggle')?.checked,
                advertisement: document.getElementById('advertisement-toggle')?.checked,
                social: document.getElementById('social-toggle')?.checked,
                unclassified: document.getElementById('unclassified-toggle')?.checked
            };
            console.log('Cookie settings saved:', settings);
            // You can store settings in localStorage or send to a server here
            
            if (cookieModal) cookieModal.style.display = 'none';
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
});