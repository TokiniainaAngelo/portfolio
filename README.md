# Angelo Ramananjoelina — Portfolio

Premium Angular portfolio showcasing my work as a Fullstack JavaScript Engineer & Technical Lead.

## Tech Stack

- **Angular 19** — Standalone components, Signals, new control flow
- **TypeScript** — Strict mode
- **Tailwind CSS** — Utility-first styling with dark mode
- **Custom i18n** — Signal-based EN/FR translations
- **Scroll Animations** — IntersectionObserver-based reveal

## Features

- Dark/Light mode toggle with persistence
- English/French language switch
- Responsive design (mobile-first)
- Scroll progress indicator
- Scroll-reveal animations
- Glass morphism navbar with auto-hide
- SEO meta tags & Open Graph
- ARIA accessibility attributes
- Konami code easter egg
- Custom SVG favicon

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build
```

The dev server runs at `http://localhost:4200/`.

## Project Structure

```
src/app/
├── core/
│   ├── data/          # Translations & portfolio data
│   ├── models/        # TypeScript interfaces
│   └── services/      # Theme, Translation, Scroll services
├── shared/
│   ├── components/    # Navbar, Footer, ScrollProgress, ThemeToggle
│   └── directives/    # ScrollAnimate directive
├── sections/          # Hero, About, Projects, Skills, Experience, Contact
├── pages/             # Home page (composes all sections)
├── app.component.ts   # Root component
├── app.config.ts      # App configuration
└── app.routes.ts      # Lazy-loaded routes
```

## Customization

### Content
Edit `src/app/core/data/translations.ts` to update all portfolio content (both EN and FR).

### Colors
Edit `tailwind.config.js` to change the primary color palette. The default uses indigo (#6366f1).

### Contact Form
The form currently simulates submission. To connect it to a real backend:

1. **Formspree**: Create a form at [formspree.io](https://formspree.io), then update the `onSubmit()` method in `contact.component.ts`
2. **EmailJS**: Use [emailjs.com](https://www.emailjs.com) for client-side email
3. **Custom backend**: POST to your own API endpoint

### Social Links
Update the GitHub and LinkedIn URLs in `footer.component.ts` and `contact.component.ts`.

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
ng build
# Deploy the dist/angelo-portfolio/browser folder
```

### Firebase
```bash
npm install -g firebase-tools
firebase init hosting
ng build
firebase deploy
```

## Performance

- Lazy-loaded routes
- Async animations
- Optimized font loading with `display=swap`
- Tailwind CSS purging in production
- IntersectionObserver for scroll animations (no scroll event overhead)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Focus-visible outlines
- Color contrast meets AA standards
- Reduced motion support via CSS

## License

MIT
