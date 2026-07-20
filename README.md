# GIF Project

A simple web app for building a personal GIF library. Find a GIF you like anywhere on the web, copy its link, paste it in, and it's saved to your collection for quick access later.

Built with [Angular](https://angular.dev) and [Angular Material](https://material.angular.io).

## How it works

1. Copy the link to a GIF you would like to save.
2. Click **Add GIF** in the top bar.
3. Paste a direct link to a GIF into the input field. A live preview renders as you type, and invalid links are flagged automatically.
4. Click **Confirm** to save it to your collection.
5. Your GIFs are displayed in a masonry-style grid on the dashboard. Hover over a GIF to reveal a delete button.

All data is currently persisted to the browser's `localStorage`, so your collection is local to whichever browser you use.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (see `package.json` for the Angular CLI/toolchain versions)
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm start
```

Then open `http://localhost:4200/` in your browser. 

## Project structure

```
src/app/
├── add-gif-modal/       # Dialog for pasting in a GIF link, with live preview/validation
├── add-gif-service/      # AddGifService, localStorage persistence
├── dashboard/            # Masonry grid that renders the GIFs in the selected category
├── gif/                  # Single GIF tile (image + delete action)
├── sidebar/               # Category list and "add category" entry point (WIP)
└── top-bar/               # Top navigation bar, opens the Add GIF dialog
```

## Planned features

- **Categorization** — organize saved GIFs into custom categories/folders, choose a category from the sidebar, and have the dashboard display only the GIFs in that category. (The underlying data model and service methods already support this; wiring up category selection end-to-end is in progress.)
- **Search** — search across your saved GIFs to quickly find the one you want.
- **Click-to-copy** — click a GIF in the dashboard to copy its link straight to your clipboard, ready to paste wherever you need it.
