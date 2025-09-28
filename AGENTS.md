# Repository Guidelines
## Environment & Tooling
Volta pins Node 22.15.0 and pnpm 10.17.1; run `volta install` if your toolchain drifts. Install deps with `pnpm install` and update Playwright browsers via `pnpm exec playwright install` before running UI specs.

## Project Structure & Module Organization
All runtime code lives in `src/`: `pages/` contains routed screens, `components/` reusable UI, `routes/` plus generated `routeTree.gen.ts` drive TanStack Router, and `providers/` wires global context. Supporting code sits in `config/`, `styles/`, `types/`, and `utils/`. Static assets belong in `public/`, documentation in `docs/`, and Playwright assets in `tests/integration/`. The build output under `dist/` is disposable and should stay untracked.

## Build, Test, and Development Commands
- `pnpm dev` – start Vite locally on port 5173 with hot reload.
- `pnpm build` – type-check with `tsc` then emit the production bundle to `dist/`.
- `pnpm preview` – serve the last build for manual smoke testing.
- `pnpm lint` / `pnpm lint:fix` – run Biome linting, optionally applying fixes.
- `pnpm format` / `pnpm format:fix` – enforce Biome layout rules.
- `pnpm test` – execute Vitest suites; add `--watch` while iterating.
- `pnpm test:ui` – run Playwright end-to-end coverage; pass `--headed` or `--debug` when needed.
- `pnpm deploy` – build and publish to GitHub Pages.

## Coding Style & Naming Conventions
Favor functional React 19 components in TypeScript. Use PascalCase for components (`FeatureCard.tsx`), camelCase for hooks/utilities, and kebab-case for static assets. Two-space indentation, single quotes, and strict typings are expected. Prefer named exports except for entry points, and colocate helper styles with the component or the shared `styles/` folder. Document any `// biome-ignore` directives inline.

## Testing Guidelines
Write Vitest specs alongside the implementation as `<name>.test.ts` to cover hooks, utilities, and critical component behavior. Place Playwright specs in `tests/integration/` with filenames like `navigation.spec.ts`. Focus assertions on observable outcomes instead of implementation details, and reset state between tests. Before opening a PR, run `pnpm test` followed by `pnpm test:ui` and include the results in the description.

## Commit & Pull Request Guidelines
Keep commits focused and written in the imperative mood, mirroring existing messages such as `build(deps): bump vite`. Add explanatory bodies when behavior changes. PRs should outline the intent, list verification steps, attach screenshots for UI updates, and reference related issues or tasks. Request review from maintainers who own the touched areas and rebase onto `main` prior to merge.
