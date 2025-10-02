# Tic Tac Toe – Ocean Professional

A modern, minimalist Tic Tac Toe built with Next.js App Router.

- Ocean Professional theme: blue (#2563EB) primary, amber (#F59E0B) accent
- Subtle gradients, rounded corners, soft shadows
- Responsive, centered 3×3 board
- 2‑player local play with active player indicator
- Winner/tie detection and reset controls

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project Structure

- `src/app/page.tsx` — Main game page
- `src/components/Board.tsx` — Board and cells
- `src/components/Controls.tsx` — Status and actions
- `src/lib/game.ts` — Game logic and state helpers
- `src/app/globals.css` — Theme and styles

## Design

- Background: #f9fafb; Surface: #ffffff; Text: #111827
- Primary: #2563EB; Accent: #F59E0B; Error: #EF4444
- Smooth hover/active transitions and clear focus styles

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Lint
