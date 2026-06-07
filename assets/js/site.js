// Limitless Power Solutions — site scripts
// Shared header/footer injection + nav toggle

(function () {
  const BRAND_MARK = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/>
</svg>`;

  const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'microgrid.html', label: 'Microgrid' },
    { href: 'research.html', label: 'Research' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'impact.html', label: 'Impact' },
    { href: 'investors.html', label: 'Investors' },
    { href: 'contact.html', label: 'Contact' },
  ];

  function getCurrentFile() {
    const p = window.location.pathname;
    const f = p.substring(p.lastIndexOf('/') + 1);
    return f || 'index.html';
  }

  function buildHeader() {
    const current = getCurrentFile();
    const links = NAV_LINKS.map(l =>
      `<a href="${l.href}" ${current === l.href ? 'class="active"' : ''}>${l.label}</a>`
    ).join('');

    return `
<header class="site-header">
  <div class="container site-header__inner">
    <a href="index.html" class="brand" aria-label="Limitless Power Solutions home">
      <span class="brand__mark">${BRAND_MARK}</span>
      <span class="brand__name">
        <span>Limitless Power</span>
        <small>Solution Concepts</small>
      </span>
    </a>
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <nav class="site-nav" aria-label="Main">
      ${links}
      <a href="contact.html#quote" class="btn btn--gold">Request a Quote</a>
    </nav>
  </div>
</header>`;
  }

  function buildFooter() {
    return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand" aria-label="Limitless Power Solutions home">
          <span class="brand__mark">${BRAND_MARK}</span>
          <span class="brand__name">
            <span>Limitless Power</span>
            <small>Solution Concepts</small>
          </span>
        </a>
        <p>Renewable power systems engineered for uninterrupted business operations and resilient communities across Nigeria.</p>
        <p style="font-size:0.78rem; color: var(--ink-400); margin-top:1rem;">
          CAC&nbsp;Reg.&nbsp;No.&nbsp;BN 8752639 &nbsp;·&nbsp; TIN&nbsp;33455754-0001
        </p>
      </div>
      <div>
        <h4>Solutions</h4>
        <a href="services.html#solar">Solar Power Systems</a>
        <a href="services.html#storage">Energy Storage</a>
        <a href="services.html#ems">Energy Management</a>
        <a href="services.html#support">Maintenance & Support</a>
      </div>
      <div>
        <h4>Initiatives</h4>
        <a href="microgrid.html">Community Microgrids</a>
        <a href="research.html">Research & Innovation</a>
        <a href="projects.html">Projects</a>
        <a href="impact.html">Impact</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:ogundipe72@gmail.com">ogundipe72@gmail.com</a>
        <a href="tel:+2348065188043">+234 806 518 8043</a>
        <p style="margin:0.5rem 0 0; color: var(--ink-300); font-size:0.85rem;">
          14 Shina Olubode Street,<br/>Osogbo, Osun State, Nigeria
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year">2026</span> Limitless Power Solution Concepts. All rights reserved.</span>
      <span><a href="investors.html">Investors</a> · <a href="contact.html">Partner with us</a></span>
    </div>
  </div>
</footer>`;
  }

  function inject() {
    const headerSlot = document.querySelector('[data-include="header"]');
    const footerSlot = document.querySelector('[data-include="footer"]');
    if (headerSlot) headerSlot.outerHTML = buildHeader();
    if (footerSlot) footerSlot.outerHTML = buildFooter();

    // Nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    }

    // Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
