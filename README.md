# PurpleStyle — Women's Fashion Store

A responsive React + Vite storefront prototype for women's fashion. Built with JSX, CSS, React hooks, Lucide icons, and browser LocalStorage.

## Features
- 20 sample products across 10 categories, product details, sizes, ratings, and discount pricing
- Live product search, category and price filters, and sorting
- Cart quantity controls, remove actions, subtotal, delivery charge, and free delivery threshold
- Wishlist with LocalStorage persistence
- Validated demo checkout and persistent order history
- Demo login/sign-up with password visibility toggle; only demo name/email are stored, never passwords
- Responsive desktop/mobile navigation, empty states, image fallback, and toast feedback

## Requirements
Node.js 18+ recommended.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Notes
- Product photos are loaded from Unsplash. An in-app fallback appears if an image cannot load; internet access is needed for remote photos and Google Fonts.
- This is a front-end demo. Login is not real authentication, orders are stored only in the current browser, and checkout does not collect payment details or process payments. A production application needs a secure backend, server-side validation, proper authentication, a database, and a payment provider integration.
