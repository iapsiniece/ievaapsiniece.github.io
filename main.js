/* =========================================================
   Small helpers used on every page. You don't need to edit
   this file.
   ========================================================= */

// 1. Mobile menu button
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });
}

// 2. Keep the year in the footer up to date
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

// 3. Contact form: send without leaving the page and show a message
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.className = 'form-status err';
      status.textContent = 'The form is not connected yet. Add your Formspree form ID in index.html.';
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Sending…';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        status.className = 'form-status ok';
        status.textContent = 'Message sent. Thank you — I\'ll reply soon.';
      } else {
        throw new Error();
      }
    } catch {
      status.className = 'form-status err';
      status.textContent = 'Your message wasn\'t sent. Check your connection and try again.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send message';
    }
  });
}
