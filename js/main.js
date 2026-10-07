document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var formMessage = document.getElementById('formMessage');
            // Simulate form submission
            formMessage.textContent = 'Thank you, ' + name + '! Your message has been sent.';
            contactForm.reset();
        });
    }
});
