# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Setup and development
pnpm install                    # Install dependencies
pnpm dev                       # Start dev server (localhost:5173)

# Code quality
pnpm lint                      # Run Biome linter
pnpm lint:fix                  # Fix linting issues
pnpm format:fix                # Fix formatting issues

# Testing
pnpm test                      # Run Vitest unit tests
pnpm test:ui                   # Run Playwright E2E tests

# Build
pnpm build                     # TypeScript + Vite build
pnpm preview                   # Preview production build
```

## Architecture

**React 19 + TanStack Router SPA:**
- File-based routing with lazy loading (routes end in `.lazy.tsx`)
- TanStack Router plugin auto-generates `routeTree.gen.ts`
- All routes are children of `__root.tsx` with shared Material-UI layout

**State Management:**
- **Zustand + Immer**: Global client state (see `src/components/ui/Snackbar/store.ts`)
- **TanStack Query**: Server state with devtools enabled, caching disabled for development
- **React 19 hooks**: useActionState, useOptimistic for forms and optimistic updates
- **Custom hooks**: Web storage abstractions (`useLocalStorage`, `useSessionStorage`, `useIndexedDB`)

**Component Structure:**
- `src/components/ui/`: Reusable components with co-located hooks/stores
- `src/components/layout/`: Layout components (MainLayout, CenterizedLayout)
- `src/components/feature/`: Business logic components
- `src/pages/`: Route components with nested `components/` directories

**Key Patterns:**
- Co-location: hooks and stores live next to components that use them
- Material-UI v7 with custom dark theme and Emotion styling
- Path alias `~/` maps to `./src/`
- Promise-based IndexedDB operations wrapped in React hooks

## Build Configuration

- **Vite 6+** with React SWC plugin for fast builds
- **Biome** for linting/formatting (not ESLint/Prettier)
- **TypeScript 5.8+** with strict configuration
- **GitHub Pages** deployment with base path `/ui-playground/`
- **pnpm** package manager with Volta for Node version management

## Testing Setup

- **Playwright**: E2E tests in `tests/` directory, auto-starts dev server
- **Vitest**: Unit tests with in-source testing support
- Playwright runs only Chromium browser by default