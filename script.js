// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '72px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(10,11,15,0.98)';
      links.style.padding = '24px var(--edge)';
      links.style.gap = '18px';
      links.style.borderBottom = '1px solid var(--line)';
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // contact form — submits to Web3Forms, delivers to your inbox
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const status = document.querySelector('#form-status');
      const original = btn.textContent;

      btn.textContent = 'Sending...';
      btn.disabled = true;
      if (status) { status.textContent = ''; status.style.color = ''; }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        const result = await response.json();

        if (result.success) {
          btn.textContent = 'Sent — we\'ll be in touch';
          if (status) { status.textContent = 'Thanks — your message is in.'; status.style.color = 'var(--blue)'; }
          form.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        btn.textContent = original;
        if (status) { status.textContent = 'Something went wrong — try again, or email us directly.'; status.style.color = 'var(--danger)'; }
      } finally {
        setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3500);
      }
    });
  }
});
