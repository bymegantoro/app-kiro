# Bayu Megantoro — Portfolio

Website portofolio personal modern untuk **Bayu Megantoro**, Full Stack AI Engineer.
Dibangun dengan HTML + CSS murni dan sedikit vanilla JavaScript — tanpa framework,
tanpa build step, siap jalan di production dengan membuka `index.html`.

## ✨ Tema & Gaya

- Dark modern developer portfolio
- Animated gradient background + floating glow blobs
- Glassmorphism cards
- Soft glowing accent colors (ungu → cyan)
- Transisi halus, hover animation, floating UI effects
- Hero dengan typewriter effect + animated particles
- Typografi modern (Space Grotesk + Inter)
- Fully responsive: Mobile · Tablet · Desktop

## 📁 Struktur Folder

```
app-kiro/
├── index.html            # Halaman utama (single-page scroll)
├── readme.md
├── components/           # Potongan HTML reusable (referensi)
│   ├── navbar.html
│   ├── hero.html
│   └── about.html
├── pages/                # (disiapkan untuk halaman tambahan)
├── assets/               # Gambar, resume, ikon
│   └── README.md
├── css/
│   ├── base.css          # Tokens, reset, background, typografi
│   ├── components.css     # Glass, button, navbar, cards reusable
│   ├── sections.css      # Layout Hero & About
│   └── responsive.css    # Breakpoints Mobile/Tablet/Desktop
└── js/
    ├── navbar.js         # Scroll state, mobile menu, scroll-spy
    ├── hero.js           # Typewriter + particles
    ├── about.js          # Animated statistic counters
    └── main.js           # Scroll reveal animations
```

## 🚀 Menjalankan

Cukup buka `index.html` di browser. Atau jalankan static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Lalu buka `http://localhost:8000`.

## 🧩 Status Pengembangan

Section yang sudah tersedia:

- [x] Navbar (sticky, scroll-spy, mobile menu)
- [x] Hero section (badge, typewriter, foto placeholder, CTA, particles)
- [x] About section (bio, highlights, animated stats)
- [ ] Skills
- [ ] Projects
- [ ] Work Experience
- [ ] Testimonials
- [ ] Contact
- [ ] Footer

> Section berikutnya ditambahkan bertahap sesuai konfirmasi.

## 👤 Kontak

- **Email:** vita@prestasijunior.org
- **Lokasi:** Jakarta, Indonesia
- **Portfolio:** www.vitaanggraeni.dev
- **GitHub:** github.com/vitaanggraenisdev
- **LinkedIn:** linkedin.com/in/vitaanggraenidev
- **Twitter/X:** x.com/vitaanggraenidev
