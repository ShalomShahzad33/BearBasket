# BearBasket 🐻🧺

A modern e-commerce cart demo built with React, TypeScript, Zustand, and Tailwind CSS.

---

## 🌐 Live Demo

Try BearBasket in your browser — no install required:

**👉 [https://bear-basket.vercel.app/](https://bear-basket.vercel.app/)**

Hosted on [Vercel](https://vercel.com/).

---

## ✨ Highlights

- 🛍️ Product catalog with responsive card layout
- ➕ Add-to-cart interactions with animated feedback
- 🧮 Quantity-aware cart total and order summary
- 🗑️ Remove item + clear cart actions
- 💾 Persistent cart state using `zustand/middleware/persist`
- 🎨 Clean modern UI with Tailwind CSS + Lucide icons

---

## 🧱 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Routing:** React Router
- **State Management:** Zustand
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Linting:** ESLint + TypeScript ESLint + React Hooks plugin

---

## 🗂️ Project Structure

```text
BearBasket/
├── src/
│   ├── assets/               # Product images
│   ├── components/
│   │   ├── Header.tsx
│   │   └── ProductsList.tsx
│   ├── constants/
│   │   └── Products.ts       # Static product seed data
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Cart.tsx
│   │   └── Layout.tsx
│   ├── store/
│   │   └── CartStore.ts      # Zustand cart logic
│   ├── Types/
│   │   └── Product.ts
│   ├── index.css
│   └── main.tsx
├── vite.config.ts
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1) Clone the repo

```bash
git clone https://github.com/ShalomShahzad33/BearBasket
cd BearBasket
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

---

## 📜 Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint across the project

---

## 🧠 How Cart State Works

- Cart data lives in `src/store/CartStore.ts`.
- `addToCart` either increments quantity or inserts a new item.
- `removeFromCart` removes an item by normalized numeric ID.
- `clearCart` empties the basket.
- Data is persisted under `cart-storage` in browser storage so refreshes keep cart state.

---

## 🎯 Current UX Features

- Beautiful dark-themed storefront hero and product grid
- Add-to-cart success badge and button state transition
- Rich cart page with:
  - empty state design
  - item quantity display
  - order summary with total item count
  - free shipping display
  - remove and clear-cart controls

---

## ⭐ Star on GitHub

If BearBasket helped you learn something new — or you just like the UI — a star goes a long way. It helps others find the project and keeps development moving.

---

## 📄 License

[MIT](https://mit-license.org/)
