# Codex Communion

**A comprehensive collection of Catholic websites, media, tools, and communities.**

Codex Communion is a digital directory that serves as a comprehensive resource hub for the Catholic community. For more about the inspiration and history behind this project, see our [Introduction](docs/intro.md).

## 🌟 What is Codex Communion?

This project organizes and catalogues Catholic resources across various categories:

- **Communities**: Forums, religious orders, organizations, and social media groups
- **Devotion**: Prayer resources, saints' hagiographies, events, and calendars  
- **Media**: Art, films, music, hymns, podcasts, and YouTube channels
- **Tools**: Books, libraries, mobile apps, online courses, and GitHub projects
- **Websites**: Official Church sites, Catholic news, apologetics, and theology resources

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18.0 or higher)
- **npm** package manager

### Clone the Repository

```bash
git clone https://github.com/codexcommunion/codexcommunion.com.git
cd codexcommunion.com
```

### Installation

Install all dependencies:

```bash
npm install
```

### Local Development

Start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## 🔧 Available Scripts

- **`npm start`** - Start the development server
- **`npm run build`** - Generate static content for production
- **`npm run serve`** - Serve the built website locally
- **`npm run clear`** - Clear the Docusaurus cache
- **`npm run typecheck`** - Run TypeScript type checking
- **`npm run deploy`** - Deploy to GitHub Pages

## 🏗️ Build

Generate static content for production:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 🚀 Deployment

### GitHub Pages

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

This command is a convenient way to build the website and push to the `gh-pages` branch for GitHub Pages hosting.

## 📁 Project Structure

```
codexcommunion.com/
├── docs/                    # Documentation pages
│   ├── communities/         # Community resources
│   ├── devotion/           # Devotional resources
│   ├── media/              # Media resources
│   ├── tools/              # Tools and applications
│   └── websites/           # Website directories
├── blog/                   # Blog posts
├── src/                    # React components and pages
│   ├── components/         # Reusable React components
│   ├── css/               # Global styles
│   └── pages/             # Additional pages
├── static/                # Static assets (images, etc.)
└── docusaurus.config.ts   # Docusaurus configuration
```

## 🛠️ Technology Stack

This website is built using:

- **[Docusaurus](https://docusaurus.io/)** - Modern static website generator
- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **MDX** - Markdown with React components

## 🤝 Contributing

We welcome contributions to help expand and improve this Catholic resource directory! Please see our [Contributing Guide](docs/contributing.md) for guidelines on how to contribute.

