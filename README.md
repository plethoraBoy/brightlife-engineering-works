# Brightlife Engineering Works

Live site: https://brightlife-engineering-works.vercel.app

Marketing site rebuilt on **Next.js 16 (App Router)** with a new "OPS DECK"
visual system: brutalist structure, aurora-lit dark panels, HUD telemetry
motifs and pop-charge accents. This is a full rework — the previous dark
"SIGNAL" and paper "FIELD GUIDE" designs are gone.

## Stack

- Next.js 16 · React 19 · TypeScript (strict)
- framer-motion for motion
- react-icons for UI glyphs
- Firebase Firestore for the contact form

## Routes

| Route | Description |
| --- | --- |
| `/` | Operations hero with live feed monitor, capability ticker, remit, 14-system catalogue, protocol, brief and final channel |
| `/services` | System architecture map: five chapters with technical plates and a sticky index |
| `/contact` | Correspondence deck: dossier, map and enquiry console |

## Getting started

```bash
yarn install
yarn dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173).

```bash
yarn build   # production build
yarn start   # serve the production build
yarn lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx          root layout, fonts, metadata, global shell
    page.tsx            home
    globals.css         OPS DECK tokens + global utilities
    services/           systems route
    contact/            contact route
  components/
    Brand, SiteNav, SiteFooter, ScrollTools, Reveal
    deck/               home page sections
  lib/
    content.ts          single source of truth for site copy/data
    firebase.ts         Firebase app + Firestore instance
```

## Contact form

Submissions are written to the `contacts` collection in Firestore with
`name`, `email`, `message` and `timestamp`. Firebase web config lives in
`src/lib/firebase.ts`.
