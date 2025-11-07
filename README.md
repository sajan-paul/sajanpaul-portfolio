# My Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and experience as a full-stack developer.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎨 **Beautiful Animations**: Smooth transitions and interactions with Framer Motion
- 📝 **Blog System**: Markdown-based blog with dynamic routing
- 📧 **Contact Form**: Integrated contact form with EmailJS
- ⚡ **Performance Optimized**: Fast loading times and SEO-friendly
- 🎯 **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: JSON + Markdown
- **Deployment**: Vercel (Recommended)

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in the `data/` directory:

- `bio.json` - Personal information and about section
- `skills.json` - Skills and expertise
- `projects.json` - Featured projects and portfolio items
- `education.json` - Education and certifications
- `socialLinks.json` - Social media and contact links

### Styling

The project uses Tailwind CSS with custom configuration:

- `tailwind.config.js` - Tailwind configuration
- `styles/globals.css` - Global styles and utilities
- `styles/animations.css` - Custom animations
- `styles/theme.css` - Theme variables and dark mode

### Content Management

#### Blog Posts

Add new blog posts by creating markdown files in the `posts/` directory:

```markdown
---
title: "Your Blog Post Title"
excerpt: "Brief description of your post"
date: "2023-12-01"
category: "Web Development"
readTime: "5"
image: "https://example.com/image.jpg"
tags: ["React", "Next.js", "Tutorial"]
likes: 0
---

# Your Blog Post Content

Write your blog post content here using Markdown.
```

#### Projects

Add new projects by updating `data/projects.json`:

```json
{
  "id": "project-slug",
  "title": "Project Title",
  "description": "Brief project description",
  "image": "/projects/project-image.png",
  "technologies": ["React", "Node.js", "MongoDB"],
  "liveUrl": "https://project-demo.com",
  "githubUrl": "https://github.com/username/project",
  "featured": true,
  "status": "Completed",
  "year": 2023,
  "category": "Full Stack"
}
```

## Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the EmailJS configuration in `components/ContactForm.jsx`:

```jsx
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Great for static sites
- **AWS**: Using AWS Amplify
- **Docker**: Containerized deployment

## Project Structure

```
my-portfolio/
├── components/              # React components (organized by category)
│   ├── layout/             # Layout components (Layout, Navbar, Footer, SectionIndicator)
│   ├── sections/           # Page sections (Hero, About, Services, Skills, Projects, Blog, Contact)
│   ├── ui/                 # Reusable UI components (Buttons, ThemeToggle, CustomCursor)
│   ├── common/             # Common utilities (Pattern)
│   └── index.js            # Component exports (if needed)
├── data/                   # JSON data files
│   ├── bio.json           # Personal information
│   ├── skills.json        # Skills data
│   ├── projects.json      # Projects data
│   └── socialLinks.json   # Social media links
├── pages/                  # Next.js pages
│   ├── _app.js            # App wrapper
│   ├── index.jsx          # Home page
│   ├── projects/          # Projects page
│   └── blog/              # Blog posts
├── public/                 # Static assets
│   ├── images/            # Organized image assets
│   │   ├── profile/       # Profile images (logo, profile pics)
│   │   ├── projects/      # Project thumbnails
│   │   └── blog/          # Blog post images
│   └── favicon.ico        # Site favicon
├── styles/                 # CSS and styling
│   ├── globals.css        # Global styles
│   ├── vue-carousel.css   # Carousel styles
│   ├── marquee-carousel.css
│   └── owl-carousel.css
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: john.doe@example.com
- **LinkedIn**: [linkedin.com/in/johndoe](https://linkedin.com/in/johndoe)
- **GitHub**: [github.com/johndoe](https://github.com/johndoe)

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons






