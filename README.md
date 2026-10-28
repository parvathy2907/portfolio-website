# Parvathy Krishna A | Portfolio

Personal portfolio website of **Parvathy Krishna A**, software engineer and final-year B.Tech Computer Science and Engineering student at Amrita Vishwa Vidyapeetham (graduating 2027).

The site presents my projects, experience, skills and certifications, with a light and dark theme and subtle animations throughout.

## Sections

- **Hero**: introduction, roles and links to GitHub and LinkedIn
- **About**: background and focus areas
- **Skills**: languages, web development, systems and security, data and tools
- **Projects**: DEFENSIQ, Dynamic Price Wars, Replate, Distributed Log Processing, Epidemic Simulator and Smart Vending Machine Network, each with an animated illustration
- **Experience**: internship timeline, certifications and education
- **Contact**: email and LinkedIn

## Features

- Light and dark themes that follow the system setting, with a manual toggle that is remembered
- Responsive layout for phones, tablets and desktops
- Scroll-triggered reveal animations, scroll progress bar and active-section highlighting
- Animated SVG illustrations for each project
- Card spotlight, gradient borders and cursor glow on hover
- Respects the "reduce motion" accessibility setting
- No build step and no dependencies

## Tech stack

| Area | Technology |
|---|---|
| Markup | HTML5 (semantic sections, inline SVG icons and illustrations) |
| Styling | CSS3: custom properties for theming, Flexbox, CSS Grid, keyframe and scroll-driven animations, `@property`, `color-mix()` |
| Scripting | Vanilla JavaScript (ES5+): Intersection and Mutation Observers, Clipboard API, `localStorage` |
| Fonts | Google Fonts: Plus Jakarta Sans and JetBrains Mono |
| Hosting | GitHub Pages |

## Project structure

```text
portfolio-website/
├── index.html        # page markup
├── favicon.svg
├── css/
│   ├── base.css      # colour tokens, layout, navigation, shared components
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── experience.css
│   ├── contact.css
│   └── effects.css   # hover and pointer effects
└── js/
    ├── theme.js      # light / dark toggle
    ├── nav.js        # menu, scroll progress, active section
    ├── effects.js    # card spotlight and cursor glow
    └── contact.js    # send email button
```

## Run locally

No installation is needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.

The site will be published at `https://parvathy2907.github.io/portfolio-website/`.

## Contact

- Email: parvathykrishna896@gmail.com
- LinkedIn: [linkedin.com/in/parvathykrishna2907](https://www.linkedin.com/in/parvathykrishna2907)
- GitHub: [github.com/parvathy2907](https://github.com/parvathy2907)
