# Memory Game

A card-matching memory game built with **React** and **Vite**. Flip cards, find matching pairs, and test your recall — fast to run locally and easy to extend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Linting](#linting)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

## Features

- Classic flip-and-match memory game mechanics
- Built with React 19 for a fast, component-driven UI
- Powered by Vite for near-instant dev server startup and hot module replacement (HMR)
- Linted with ESLint for consistent code quality

## Tech Stack

| Category   | Technology         |
|------------|---------------------|
| Framework  | React 19            |
| Build Tool | Vite 8              |
| Linting    | ESLint              |
| Language   | JavaScript (ES Modules) |

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (bundled with Node.js) or an alternative package manager (yarn/pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/musicalace50/memory-game.git
   cd memory-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at the URL printed in the terminal (typically `http://localhost:5173`).

### Available Scripts

| Command           | Description                                      |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Starts the development server with HMR             |
| `npm run build`   | Builds the app for production                      |
| `npm run preview` | Serves the production build locally for preview    |
| `npm run lint`    | Runs ESLint across the project                      |

## Project Structure

```
memory-game/
├── public/          # Static assets
├── src/             # Application source code
├── index.html        # HTML entry point
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
└── package.json      # Project metadata and dependencies
```

## Linting

This project uses ESLint to enforce code quality and consistency. Run the linter with:

```bash
npm run lint
```
