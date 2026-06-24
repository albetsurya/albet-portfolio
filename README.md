# Portfolio – Albet Surya Kembara

VS Code–themed developer portfolio powered by **Vite** and a **Google Sheets** backend via Apps Script.

## Project Structure

```
portfolio-vite/
├── index.html          # App shell (tabs, sidebar, sections skeleton)
├── vite.config.js
├── package.json
└── src/
    ├── main.js         # Entry point – orchestrates fetch → render → show
    ├── api.js          # Google Sheets API fetch logic
    ├── renderer.js     # DOM rendering helpers (one function per section)
    └── style.css       # Animations, scrollbar, cursor-blink, base styles
```

## Getting Started

```bash
npm install
npm run dev       # Development server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Configuration

To point to your own Google Apps Script endpoint, edit the `API_URL` constant in `src/api.js`:

```js
const API_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
```

## Deployment

After `npm run build`, deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
