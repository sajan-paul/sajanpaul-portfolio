# Project Structure Documentation

This document provides a detailed overview of the project's file organization and structure.

## Directory Overview

### `/components`
React components organized by functionality:

#### `/components/layout`
Layout-related components that wrap or structure the entire application:
- `Layout.jsx` - Main layout wrapper with Head, Navbar, Footer
- `Navbar.jsx` - Navigation bar component
- `Footer.jsx` - Footer component with social links and quick links
- `SectionIndicator.jsx` - Right-side section indicator for navigation
- `index.js` - Barrel export for layout components

#### `/components/sections`
Page section components displayed on the main page:
- `HeroSection.jsx` - Hero/landing section with animated role text
- `AboutSection.jsx` - About me section
- `ServicesSection.jsx` - Services offered section
- `SkillsSection.jsx` - Skills and expertise showcase
- `ProjectCarousel.jsx` - Interactive projects carousel
- `BlogSection.jsx` - Blog posts section
- `ContactForm.jsx` - Contact form with EmailJS integration
- `index.js` - Barrel export for section components

#### `/components/ui`
Reusable UI components used across the application:
- `ArrowButton.jsx` - Button component with arrow animation
- `ResumeButton.jsx` - Resume download button
- `NextButton.jsx` - Next/forward navigation button
- `ThemeToggle.jsx` - Dark/light theme toggle (currently disabled)
- `CustomCursor.jsx` - Custom cursor component
- `index.js` - Barrel export for UI components

#### `/components/common`
Common utility components:
- `Pattern.jsx` - Background pattern component
- `index.js` - Barrel export for common components

### `/data`
JSON data files containing static content:
- `bio.json` - Personal information, bio, contact details
- `skills.json` - Skills and expertise data
- `projects.json` - Projects data (currently projects are defined in components)
- `socialLinks.json` - Social media links and contact information

### `/pages`
Next.js pages and routing:
- `_app.js` - App wrapper with global styles and dark mode setup
- `index.jsx` - Home page combining all sections
- `projects/index.jsx` - Projects showcase page with category filtering
- `blog/building-my-portfolio-website.jsx` - Blog post page

### `/public`
Static assets served directly:

#### `/public/images`
Organized image assets:
- `/images/profile/` - Profile images (logo.png, profile.png, home (1).png)
- `/images/projects/` - Project thumbnails (calculator.png, todolist.png, weather.png, etc.)
- `/images/blog/` - Blog post images (portfolio.png)

### `/styles`
CSS stylesheets:
- `globals.css` - Global styles, Tailwind imports, custom CSS variables
- `vue-carousel.css` - Styles for the Vue-style carousel component
- `marquee-carousel.css` - Styles for marquee carousel (if used)
- `owl-carousel.css` - Styles for Owl Carousel (if used)

## Import Patterns

### Component Imports

Use barrel exports from index files:

```jsx
// ✅ Recommended - Clean imports
import { Layout } from '../components/layout';
import { HeroSection, AboutSection } from '../components/sections';
import { ArrowButton } from '../components/ui';
import { Pattern } from '../components/common';

// ❌ Avoid - Direct file imports
import Layout from '../components/layout/Layout';
```

### Image Imports

Always use organized image paths:

```jsx
// ✅ Recommended
<img src="/images/profile/logo.png" />
<img src="/images/projects/calculator.png" />
<img src="/images/blog/portfolio.png" />

// ❌ Avoid
<img src="/logo.png" />
<img src="/project/calculator.png" />
```

### Data Imports

Import JSON data directly:

```jsx
import bioData from '../data/bio.json';
import skillsData from '../data/skills.json';
import socialLinksData from '../data/socialLinks.json';
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.jsx`)
- **Pages**: camelCase or kebab-case (e.g., `index.jsx`, `building-my-portfolio-website.jsx`)
- **Data files**: camelCase (e.g., `bio.json`, `socialLinks.json`)
- **Image files**: kebab-case or descriptive names (e.g., `logo.png`, `home (1).png`)

## Adding New Components

### Adding a New Section Component

1. Create the component in `/components/sections/`
2. Export it from `/components/sections/index.js`
3. Import and use in `pages/index.jsx`

```jsx
// components/sections/NewSection.jsx
const NewSection = () => {
  return <section id="new-section">...</section>;
};

export default NewSection;

// components/sections/index.js
export { default as NewSection } from './NewSection';

// pages/index.jsx
import { NewSection } from '../components/sections';
```

### Adding a New UI Component

1. Create the component in `/components/ui/`
2. Export it from `/components/ui/index.js`
3. Import where needed

### Adding New Images

1. Place images in appropriate `/public/images/` subdirectory
2. Use the organized path in components:
   - Profile images → `/images/profile/`
   - Project images → `/images/projects/`
   - Blog images → `/images/blog/`

## Best Practices

1. **Component Organization**: Keep components in their appropriate directories
2. **Import Consistency**: Use barrel exports for cleaner imports
3. **Image Organization**: Always use organized image paths
4. **Code Comments**: Add comments for complex logic
5. **Single Responsibility**: Each component should have a single, clear purpose
6. **Reusability**: Extract reusable logic into UI components
7. **Naming**: Use descriptive, consistent naming conventions

## Maintenance

When adding new features:
1. Follow the existing structure
2. Update relevant index.js files
3. Update image paths if adding new assets
4. Update this documentation if structure changes

## Questions?

Refer to:
- `README.md` - General project information
- `CONTRIBUTING.md` - Contribution guidelines
- Component files - Inline comments and JSDoc

