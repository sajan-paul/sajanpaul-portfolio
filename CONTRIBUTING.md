# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Follow the project's coding standards
- Test your changes before submitting

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/my-portfolio.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test your changes: `npm run dev`
7. Commit your changes following the [commit guidelines](#commit-guidelines)
8. Push to your fork: `git push origin feature/your-feature-name`
9. Open a Pull Request

## Project Structure

### Components Organization

Components are organized into logical directories:

- **`components/layout/`**: Layout-related components (Layout, Navbar, Footer, SectionIndicator)
- **`components/sections/`**: Page section components (Hero, About, Services, Skills, Projects, Blog, Contact)
- **`components/ui/`**: Reusable UI components (Buttons, ThemeToggle, CustomCursor)
- **`components/common/`**: Common utilities and shared components

### Import Guidelines

Use index files for cleaner imports:

```jsx
// ✅ Good - Using index exports
import { Layout } from '../components/layout';
import { HeroSection, AboutSection } from '../components/sections';
import { ArrowButton } from '../components/ui';

// ❌ Avoid - Direct file imports
import Layout from '../components/layout/Layout';
```

### Image Assets

All images are organized in `public/images/`:
- Profile images: `public/images/profile/`
- Project images: `public/images/projects/`
- Blog images: `public/images/blog/`

Always use the organized paths:
```jsx
// ✅ Good
<img src="/images/profile/logo.png" alt="Logo" />

// ❌ Avoid
<img src="/logo.png" alt="Logo" />
```

## Development Workflow

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding standards
3. **Test locally** using `npm run dev`
4. **Check for linting errors**: `npm run lint`
5. **Commit your changes** with descriptive messages
6. **Push to your fork** and create a Pull Request

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and single-purpose

```jsx
// ✅ Good - Clear, focused component
const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Component logic here
  
  return (
    <section id="hero">
      {/* JSX content */}
    </section>
  );
};
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use semantic class names when needed

```jsx
// ✅ Good - Tailwind utilities
<div className="flex flex-col md:flex-row gap-4 p-6">

// ✅ Good - Custom classes for complex styles
<div className="container-custom fancy-button">
```

### File Naming

- Use PascalCase for component files: `HeroSection.jsx`
- Use camelCase for utilities: `formatDate.js`
- Use kebab-case for data files: `social-links.json`

## Component Guidelines

### Component Structure

1. **Imports** (external libraries first, then local)
2. **Component definition**
3. **Hooks and state**
4. **Helper functions**
5. **Event handlers**
6. **Return statement**

```jsx
// 1. Imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout';

// 2. Component
const MyComponent = () => {
  // 3. Hooks
  const [state, setState] = useState(null);
  
  // 4. Helpers
  const handleClick = () => {
    // Logic
  };
  
  // 5. Return
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

### Props

- Use descriptive prop names
- Provide default values when appropriate
- Document complex props with JSDoc comments

```jsx
/**
 * Button component with arrow animation
 * @param {string} color - Button color variant
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 */
const ArrowButton = ({ color = 'purple', onClick, children }) => {
  // Component implementation
};
```

## Commit Guidelines

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(sections): add new project carousel component
fix(layout): resolve mobile navigation menu issue
docs(readme): update project structure documentation
refactor(components): reorganize component structure
style(ui): improve button hover animations
```

## Pull Request Process

1. **Update your branch** with the latest changes from main
2. **Ensure all tests pass** and there are no linting errors
3. **Write a clear PR description**:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots (if UI changes)
4. **Request review** from maintainers
5. **Address feedback** and update the PR as needed
6. **Wait for approval** before merging

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Steps to test the changes:
1. Step one
2. Step two

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Questions?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Contact the maintainer directly
- Check existing issues and PRs for similar questions

Thank you for contributing! 🎉

