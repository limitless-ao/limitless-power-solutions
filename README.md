# Limitless Power Solution Concepts — Website

Official digital presence for **Limitless Power Solution Concepts** (BN&nbsp;8752639) — a Nigerian renewable-energy business delivering solar systems, energy storage, energy management and community microgrids.

🌐 **Live site:** https://limitlesspower.example.com  *(replace once deployed)*

---

## ✨ What's in this repo

A static, multi-page website (HTML / CSS / vanilla JS) — no build step, no framework lock-in, deployable anywhere static hosting works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3 + CloudFront).

```
index.html          # Home
about.html          # About / mission / vision / registration
services.html       # Solar / Storage / EMS / Maintenance
microgrid.html      # Community Microgrid initiative (SustainGrid)
research.html       # R&D — Integrated Renewable Energy System
projects.html       # Portfolio
impact.html         # Environmental / economic / social impact + SDGs
investors.html      # Business model + funding tracks + grant readiness
contact.html        # Contact form + office details
assets/
├── css/main.css    # Single design-system stylesheet
├── js/site.js      # Shared header/footer injection + nav toggle
└── img/            # Place real project photos here
docs/
├── SITEMAP.md
├── BUSINESS_STRUCTURE.md
├── GRANT_READINESS.md
└── CONTENT_OUTLINE.md
```

---

## 🚀 Quick start

```bash
# 1. Clone
git clone <your-repo-url>
cd limitless-power-solutions

# 2. Serve locally (any static server works)
npx serve
#   or
python3 -m http.server 8080

# 3. Open
http://localhost:8080
```

No dependencies. No build pipeline. Just HTML.

---

## 🌍 Deploy

### GitHub Pages
1. Push to `main`.
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
3. Site goes live at `https://<user>.github.io/<repo>/`.

### Netlify / Vercel
- Connect the repo. Leave **publish directory** as the root. No build command needed.

### Custom domain
- Add a `CNAME` file in the repo root containing your domain (e.g. `limitlesspower.com`).
- Configure DNS A/CNAME records per your host's docs.

---

## 🎨 Design system

A single CSS file (`assets/css/main.css`) defines the entire visual language:

- **Palette:** deep navy (`--navy-900`) + sun-gold (`--gold-500`) + neutral inks
- **Type:** Fraunces (display) + Manrope (sans) — Google Fonts
- **Components:** buttons, cards, hero, CTA strip, stats, table, form fields, steps, pills

To rebrand, edit the CSS variables at the top of `main.css`.

---

## 🖼 Replacing placeholders

The site uses labelled `placeholder-img` blocks where real photos belong. To replace:

1. Drop high-res JPG/PNG images into `assets/img/`.
2. In the relevant HTML file, replace:
   ```html
   <div class="placeholder-img">…</div>
   ```
   with:
   ```html
   <img src="assets/img/your-photo.jpg" alt="Descriptive alt text" />
   ```
3. Aim for 16:9 or 4:3 aspect ratios at 1600px+ wide.

**Recommended photo list** — see `docs/CONTENT_OUTLINE.md`.

---

## 🛠 Editing content

- **Header & footer** are injected by `assets/js/site.js` — edit `NAV_LINKS`, contact details, etc. there once and they propagate site-wide.
- **Page content** lives in each `.html` file and uses semantic markup with utility classes from the design system.

---

## ✉️ The contact form (already configured ✅)

The contact form (`contact.html`) submits through **[Web3Forms](https://web3forms.com)** — a free service that delivers form submissions to your email. No server or database required; it works on GitHub Pages.

**It's already wired up** with your access key and will deliver messages to `ogundipe72@gmail.com`. Submissions also appear in your Web3Forms dashboard.

**To change the destination email or key later:** open `contact.html` and edit this line:
```html
<input type="hidden" name="access_key" value="5e35cab7-a3a7-49ab-aec2-b7093f3c49cb" />
```

**What you get:** email delivery, a submissions dashboard, spam filtering (a honeypot field is already wired in), and a free tier of 250 submissions/month. To switch providers later (Formspree, Formspark), just change the form's `fetch` URL in the inline script at the bottom of `contact.html`.

---

## 📄 Strategic documents

- [`docs/SITEMAP.md`](docs/SITEMAP.md) — site structure & navigation
- [`docs/CONTENT_OUTLINE.md`](docs/CONTENT_OUTLINE.md) — per-page content brief
- [`docs/BUSINESS_STRUCTURE.md`](docs/BUSINESS_STRUCTURE.md) — operating model, units, revenue streams
- [`docs/GRANT_READINESS.md`](docs/GRANT_READINESS.md) — funding tracks & checklist

---

## 📞 Business contact

**Limitless Power Solution Concepts**
14 Shina Olubode Street, Osogbo, Osun State, Nigeria
✉ ogundipe72@gmail.com · 📞 +234 806 518 8043
CAC BN&nbsp;8752639 · TIN&nbsp;33455754-0001

---

## 📜 License

Source code: MIT. Brand, logos and copy: © Limitless Power Solution Concepts.
