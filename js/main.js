// MW Executive Representation & Advisory — site scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 12 ? '0 8px 24px rgba(0,0,0,0.25)' : 'none';
    });
  }

  // Contact form submission (Formspree-compatible AJAX)
  const form = document.querySelector('.contact-form');
  if (form) {
    const status = document.querySelector('.form-status');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          status.textContent = 'Thank you — your message has been sent. We will respond within one business day.';
          status.classList.add('is-visible');
          form.reset();
        } else {
          status.textContent = 'Something went wrong sending your message. Please email info@mwexecutive.com directly.';
          status.classList.add('is-visible');
        }
      } catch (err) {
        status.textContent = 'Something went wrong sending your message. Please email info@mwexecutive.com directly.';
        status.classList.add('is-visible');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  // Set active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === current) a.setAttribute('aria-current', 'page');
  });
});
