document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('header nav');
    if (!nav) return;

    const navItemsWithDropdown = nav.querySelectorAll('.nav-item');

    function isMobile() {
        return window.innerWidth <= 900;
    }

    function setupDropdowns() {
        navItemsWithDropdown.forEach(item => {
            const trigger = item.querySelector('button.nav-dropdown-trigger');
            const dropdown = item.querySelector('.dropdown');

            if (!trigger || !dropdown) return;

            // Toggle on click for mobile
            trigger.addEventListener('click', (e) => {
                if (isMobile()) {
                    e.preventDefault();
                    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                    // Close all other dropdowns
                    navItemsWithDropdown.forEach(otherItem => {
                        otherItem.querySelector('button.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
                    });
                    // Toggle current dropdown
                    trigger.setAttribute('aria-expanded', !isExpanded);
                }
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!item.contains(e.target)) {
                    trigger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    function resetDropdownsOnResize() {
        navItemsWithDropdown.forEach(item => item.querySelector('button.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false'));
    }

    setupDropdowns();
    window.addEventListener('resize', resetDropdownsOnResize);
});