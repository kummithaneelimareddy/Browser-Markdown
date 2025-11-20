# Browser Markdown Editor

Minimal React + TypeScript + Vite starter with a small two‑pane Markdown editor..

## Features
- Two‑pane editor: contentEditable Markdown input + live HTML preview
- Lightweight regex-based parser (headings, blockquotes, lists, links, bold, italic, inline code)
- Light / Dark theme toggle
- Vite + TypeScript + ESLint configured

## Requirements
- Node.js 18+
- npm / yarn / pnpm
  
## Demo video
[click to watch demo](https://capgemini-my.sharepoint.com/:v:/p/kummitha_neelima/IQCTFdg5t3srQJtiCrL3VdX7AV9HQj4AsYYgl3S_mR_7BbQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=tb6QdM)

## Quick start (Windows)
1. Install dependencies
   npm install
2. Start dev server
   npm run dev
3. Build
   npm run build
4. Lint
   npm run lint

(Check package.json for exact script names.)

## Project layout
- src/App.tsx — main editor + preview (parseMarkdown)
- src/main.tsx — app entry
- src/App.css, src/index.css — styles
- vite.config.ts — Vite config
- eslint.config.js — ESLint config
- tsconfig.app.json, tsconfig.node.json — TypeScript configs
- src/assets — icons used in UI

## Important notes
- The included markdown parser is minimal and regex-based. It is not a full CommonMark implementation. For production use, replace with a proper parser (e.g. react-markdown, markdown-it).
- Preview uses `dangerouslySetInnerHTML`. Sanitize any untrusted input (e.g. DOMPurify) before rendering to avoid XSS.
- The editor uses a `contentEditable` div (no textarea). Implement placeholder behavior with CSS/data-attributes; do not use `placeholder` on a div.
- Enabling type-aware ESLint rules requires parserOptions.project to reference valid tsconfig files and will slow lint runs.

## Recommendations
- Replace ad-hoc parser with a library for correctness and safety.
- Sanitize HTML before injecting.
- Run type-checked ESLint in CI; use lighter checks locally to reduce friction.

## Contributing
- Run lint (and tests if added) before opening PRs.
- Keep changes focused and update README when adding scripts/configs.




## License
[MIT](https://github.com/kummithaneelimareddy/learn-react/blob/main/LICENSE)


