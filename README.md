# Rosemond Ampomah - Portfolio

A minimalist, terminal-inspired portfolio website built with React and TypeScript. Features a clean dark aesthetic with a focus on readability and user experience.

## Features

- **Three Page Layout**
  -  About - Personal introduction with tags and social links
  -  Experience - Detailed work history and career timeline
  -  Projects - Showcase of development projects with live links

- **Design Highlights**
  -  Dark terminal-inspired aesthetic
  -  JetBrains Mono monospace font
  -  Gold accent color scheme (#d4af37)
  -  Fully responsive design
  -  Smooth page transitions
  -  Working social media links (GitHub, LinkedIn, Twitter, Email)

##  Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.12
- **Icons:** Lucide React
- **Build Tool:** Vite 6.3.5
- **Font:** JetBrains Mono (Google Fonts)

##  Installation

### Prerequisites

- Node.js 18+ ([Download here](https://nodejs.org/))
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rosemond-kay/Portfolio-Website-Rosemond
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

##  Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

#### **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### **Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

#### **GitHub Pages**
1. Build the project: `npm run build`
2. Push the `dist` folder to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

##  Customization

### Update Personal Information

**About Page** (`/src/app/components/About.tsx`)
```typescript
// Update tags
const tags = [
  'your-skill-1',
  'your-skill-2',
  // ...
];

// Update bio paragraphs
// Update social media links
```

**Experience Page** (`/src/app/components/Experience.tsx`)
```typescript
const experiences: ExperienceItem[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start - End Date",
    duration: "X years Y months",
    description: "Your description",
    technologies: ["Tech1", "Tech2"]
  },
  // Add more experiences
];
```

**Projects Page** (`/src/app/components/Projects.tsx`)
```typescript
const projects: Project[] = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-project.com"
  },
  // Add more projects
];
```

### Update Social Media Links

In `/src/app/components/About.tsx`, update the URLs:

```typescript
<a href="https://github.com/YOUR_USERNAME" ... >
<a href="https://twitter.com/YOUR_USERNAME" ... >
<a href="https://linkedin.com/in/YOUR_USERNAME" ... >
<a href="mailto:YOUR_EMAIL@example.com" ... >
```

### Change Colors

The main accent color is gold (#d4af37). To change it:

1. Search for `#d4af37` in all component files
2. Replace with your preferred color
3. Update hover states for consistency

### Change Font

In `/src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Then update the font family in `/src/app/App.tsx`:
```typescript
className="... font-['YOUR_FONT',monospace] ..."
```

##  Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx          # About page component
│   │   │   ├── Experience.tsx     # Experience page component
│   │   │   └── Projects.tsx       # Projects page component
│   │   └── App.tsx                # Main app with routing
│   ├── styles/
│   │   ├── fonts.css              # Font imports
│   │   ├── index.css              # Main styles & animations
│   │   ├── tailwind.css           # Tailwind directives
│   │   └── theme.css              # Theme variables
│   └── imports/                   # Figma assets (if any)
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite configuration
├── postcss.config.mjs             # PostCSS configuration
└── README.md                      # You are here!
```

##  Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is [MIT](LICENSE) licensed.

##  Author

**Rosemond Ampomah**

- GitHub: [@Rosemond Kay](https://github.com/Rosemond-kay)
- LinkedIn: [Rosemond Ampomah](https://linkedin.com/in/rosemondampomah)
- Twitter: [@_ewura_abena_](https://twitter.com/_ewura_abena_)
- Email: amprosemond@gmail.com

##  Acknowledgments

- Design inspiration from terminal-based UIs
- Icons by [Lucide](https://lucide.dev/)
- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

---
