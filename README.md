# 🚀 Developer Portfolio | Md. Moynul Islam

A modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed with clean code architecture, smooth micro-interactions, responsive dark/light modes, and an interactive project modal viewer.

![Portfolio Banner](https://raw.githubusercontent.com/md-moynul/portfolio/main/public/images/smart-health.png)

---

## ✨ Features

- ⚡ **Next.js 15 & React 19**: Built with the latest App Router paradigm for speed and optimal performance.
- 🎨 **Sleek Modern UI/UX**: Glassmorphism aesthetic, custom dynamic cursor, active navigation pill indicator, and glowing gradient visual effects.
- 🌙 **Dark & Light Mode**: Full theme customization powered by `next-themes`.
- 📜 **Lenis Smooth Scroll**: Butter-smooth physics-based smooth scrolling across all browsers.
- 📱 **Mobile First & Responsive**: Optimized interactive navigation drawer and custom responsive layouts.
- 🖼️ **Interactive Project Showcase**: Filter projects by stack/category, page-based pagination, and a modal view with live preview links & GitHub repository shortcuts.
- 📧 **Direct Contact Integration**: Integrated Web3Forms with automatic fallback handling.
- 📄 **Resume Integration**: Direct cloud link access to view and download resume.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Google Material Symbols](https://fonts.google.com/icons)

---

## 🚀 Quick Start

### Prerequisites

Ensure you have Node.js (v18.0 or later) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/md-moynul/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000` to view the application.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── data/
│   │   └── projects.json      # Projects data source
│   ├── images/                 # Project screenshots & assets
│   └── moynul.png             # Profile image
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS & design tokens
│   │   ├── layout.js          # Root layout & providers
│   │   └── page.js            # Main home page entry
│   └── components/
│       ├── Navbar.jsx         # Header & floating glass navigation
│       ├── Hero.jsx           # Intro hero banner & action buttons
│       ├── About.jsx          # Experience & bio section
│       ├── Skills.jsx         # Technical skills matrix
│       ├── Projects.jsx       # Interactive portfolio & modal viewer
│       ├── Education.jsx      # Education timeline
│       ├── Contact.jsx        # Contact form with email API
│       ├── Footer.jsx         # Page footer
│       ├── SmoothScroll.jsx   # Lenis smooth scroll provider
│       └── ThemeToggle.jsx    # Dark/Light mode switcher
├── package.json
└── README.md
```

---

## 📬 Contact & Socials

- **Email**: [mdoynulislam.dev@gmail.com](mailto:mdoynulislam.dev@gmail.com)
- **LinkedIn**: [Md. Moynul Islam](https://www.linkedin.com/in/md-moynul-islam47/)
- **GitHub**: [@md-moynul](https://github.com/md-moynul)
- **Facebook**: [Md Moynul Islam](https://www.facebook.com/mdmoynulislam8)

---

⭐ Designed & Built with ❤️ by **Md. Moynul Islam**
