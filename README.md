# MOHRISKA Website

Production-ready, mobile-first website for MOHRISKA — a pop-up electronic nightclub in Falun, Sweden.

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Notes

- Event data lives in `src/data/events.js`.
- Poster and photo placeholders live in `public/images/` with TODO comments in the data file to replace them with real assets.
- All ticket buttons open Ticketmaster in a new tab with a redirect toast.
