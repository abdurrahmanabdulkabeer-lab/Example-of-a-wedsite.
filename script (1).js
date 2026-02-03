// Small JS for mobile nav and contact form simple handling
document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const shown = nav.style.display === 'flex' || nav.style.display === '';
    nav.style.display = shown ? 'none' : 'flex';
  });

  // contact form (simple client-side demo)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.';
      return;
    }
    // Replace with real submission (server or email service) when ready.
    status.textContent = 'Thank you! Your message has been recorded. Please contact the masjid directly for urgent matters.';
    form.reset();
  });
});