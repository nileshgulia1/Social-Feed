# React Social Feed App

Live demo: https://snazzy-selkie-f2376a.netlify.app/

A modern social media feed application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📱 Modern, responsive design
- 🔐 Authentication modal
- 📝 Post creation and editing
- 👤 User profiles with avatars
- 💡 Emoji reactions
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 📘 Full TypeScript support

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** or **yarn** package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd project
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Start the development server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The application will start on `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthModal.tsx   # Authentication modal
│   ├── Feed.tsx        # Main feed component
│   ├── Header.tsx      # App header
│   ├── Post.tsx        # Individual post component
│   └── PostEditor.tsx  # Post creation/editing
├── hooks/              # Custom React hooks
│   └── useAuth.tsx     # Authentication hook
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Development

### Hot Reload

The development server supports hot module replacement (HMR), so changes to your code will be reflected immediately in the browser.

### Code Linting

This project uses ESLint for code quality. Run the linter with:

```bash
npm run lint
```

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Configuration

- **Vite Config**: `vite.config.ts`
- **TypeScript Config**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Tailwind Config**: `tailwind.config.js`
- **PostCSS Config**: `postcss.config.js`
- **ESLint Config**: `eslint.config.js`

## Browser Support

This project supports all modern browsers that support ES modules.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.
