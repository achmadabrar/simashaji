# PROJECT_CONTEXT

## 📌 Project Name

SIMASHAJI – Web Application

## 🛠 Tech Stack

- Framework: Next.js (TypeScript)
- Styling: Tailwind CSS
- Backend/API: Node.js (Express)
- Language: TypeScript, JavaScript
- Assets: SVG & PNG images
- Config: ESLint, PostCSS, TSConfig
- Auth : JWT
- DB : MySQL

---

## 📂 Folder Structure

### Root

apps/
├── api/ # Backend API service
│ ├── node_modules/
│ └── src/
│ ├── middleware/
│ │ ├── auth.js
│ ├── routes/
│ │ ├── auth.js
│ └── index.js
│ ├── .env.backup
│ ├── package.json
│ └── package-lock.json

├── web/ # Frontend (Next.js)
├── .next/
├── node_modules/
├── public/
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
└── src/
├── app/
│ ├── admin-dashboard/
│ │ └── page.tsx
│ ├── auth/
│ ├── faq/
│ ├── fav/
│ ├── hall/
│ ├── history/
│ ├── manasik/
│ ├── meeting-room/
│ ├── my-bookings/
│ ├── rooms/
│ ├── setting/
│ ├── terms-conditions/
│ ├── user/
│ └── user-profile/
├── assets/
│ ├── chat_icon.svg
│ ├── logo_simashaji_1.png
│ ├── logo_simashaji.png
│ ├── search_icon.png
│ └── star.png
├── components/
│ ├── Footer.tsx
│ └── Header.tsx
├── lib/
│ └── api.ts
├── globals.css
├── layout.tsx
└── page.tsx

config files:

eslint.config.mjs

next.config.ts

postcss.config.mjs

tsconfig.json

package.json

package-lock.json

README.md

markdown
Copy
Edit

---

## 🌐 Pages Overview

### **Frontend Pages (Next.js)**

apps/
┣ api/
┃ ┣ src/
┃ ┃ ┣ config/
┃ ┃ ┃ ┗ passport.js
┃ ┃ ┣ middleware/
┃ ┃ ┃ ┗ auth.js
┃ ┃ ┣ routes/
┃ ┃ ┃ ┗ auth.js
┃ ┃ ┗ index.js
┃ ┣ .env.backup
┃ ┣ .env.backup2
┃ ┣ package-lock.json
┃ ┣ package.json
┃ ┗ test-jwt.js
┣ web/
┃ ┣ public/
┃ ┃ ┣ file.svg
┃ ┃ ┣ globe.svg
┃ ┃ ┣ next.svg
┃ ┃ ┣ vercel.svg
┃ ┃ ┗ window.svg
┃ ┣ src/
┃ ┃ ┣ app/
┃ ┃ ┃ ┣ admin/
┃ ┃ ┃ ┃ ┣ add-space/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ admins/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ asrama/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ bookings/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ reports/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┗ layout.tsx
┃ ┃ ┃ ┣ auth/
┃ ┃ ┃ ┃ ┣ login/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┗ register/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ faq/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ fav/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ hall/
┃ ┃ ┃ ┃ ┣ hall.tsx
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ history/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ manasik/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ meeting-room/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ rooms/
┃ ┃ ┃ ┃ ┣ page.tsx
┃ ┃ ┃ ┃ ┗ test.tsx
┃ ┃ ┃ ┣ terms-conditions/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ users/
┃ ┃ ┃ ┃ ┣ mybookings/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ setting/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┣ user/
┃ ┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┃ ┗ user-profile/
┃ ┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┃ ┣ favicon.ico
┃ ┃ ┃ ┣ globals.css
┃ ┃ ┃ ┣ layout.tsx
┃ ┃ ┃ ┣ page-old.tsx
┃ ┃ ┃ ┗ page.tsx
┃ ┃ ┣ assets/
┃ ┃ ┃ ┣ chat*icon.svg
┃ ┃ ┃ ┣ logo_simashaji.png
┃ ┃ ┃ ┣ logo_simashaji*.png
┃ ┃ ┃ ┣ search_icon.png
┃ ┃ ┃ ┗ star.png
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ ApiDebug.tsx
┃ ┃ ┃ ┣ AuthComponents.tsx
┃ ┃ ┃ ┣ DashboardIcons.tsx
┃ ┃ ┃ ┣ Footer.tsx
┃ ┃ ┃ ┣ Header.tsx
┃ ┃ ┃ ┣ ProtectedRoute.tsx
┃ ┃ ┃ ┣ SpaceCard.tsx
┃ ┃ ┃ ┣ SpaceList.tsx
┃ ┃ ┃ ┗ Tabs.tsx
┃ ┃ ┣ data/
┃ ┃ ┃ ┗ spaces.ts
┃ ┃ ┣ hooks/
┃ ┃ ┃ ┗ useAuth.tsx
┃ ┃ ┣ lib/
┃ ┃ ┃ ┣ api-1.ts
┃ ┃ ┃ ┗ api.ts
┃ ┃ ┗ providers/
┃ ┃ ┗ AuthProvider.tsx
┃ ┣ .env.local
┃ ┣ .gitignore
┃ ┣ README.md
┃ ┣ eslint.config.mjs
┃ ┣ next-env.d.ts
┃ ┣ next.config.ts
┃ ┣ package-lock.json
┃ ┣ package.json
┃ ┣ postcss.config.mjs
┃ ┗ tsconfig.json
┗ PROJECT_CONTEXT.md

---

## 📌 Notes

- All styling is in `globals.css` using TailwindCSS.
- Shared UI components: `Header.tsx`, `Footer.tsx` in `components/`.
- API calls handled in `lib/api.ts`.
- Assets stored in `src/assets` for frontend.
- `apps/api` handles backend service with `index.js`.
- ESLint and PostCSS are configured for linting and styles processing.
- TypeScript config in `tsconfig.json`.

---

## 💡 Usage

When starting a new chat:

1. Paste this file at the start.
2. Add your new question/request.
3. The AI will understand your folder structure, files, and tech stack instantly.

Existing ERD :
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Admin │1 *│ Asrama │1 *│ Space │
├────────────┤ ├────────────┤ ├────────────┤
│ id │ │ id │ │ id │
│ name │ │ name │ │ name │
│ email │ │ address │ │ type │
│ phone │ │ city │ │ capacity │
└────────────┘ │ province │ │ price/day │
│ contactNo │ │ images[] │
│ lat,lng │ │ amenities[]│
└────────────┘ └────────────┘
│
│1
│
┌────────────┐
│ Booking │
├────────────┤
│ id │
│ spaceId │
│ userEmail │
│ checkIn/out│
│ totalPrice │
│ status │
└────────────┘
┌──────────────┐ ┌───────────────┐ ┌───────────────┐
│ Admin │ 1 _ │ Asrama │ 1 _ │ Space │
├──────────────┤ ├───────────────┤ ├───────────────┤
│ id │ │ id │ │ id │
│ name │ │ name │ │ name │
│ email │ │ address │ │ type │
│ phone │ │ city │ │ capacity │
│ password │ │ province │ │ price_per_day │
│ created_at │ │ contact_no │ │ images[] │
│ updated_at │ │ lat, lng │ │ amenities[] │
└──────────────┘ │ admin_id (FK) │ │ asrama_id (FK)│
│ description │ │ description │
│ images[] │ │ size │
│ rating │ │ rating │
│ total_reviews │ │ total_reviews │
└───────────────┘ └───────────────┘
│
│ 1
│
┌───────────────┐
│ Booking │
├───────────────┤
│ id │
│ space_id (FK) │
│ user_id (FK) │
│ check_in/out │
│ total_days │
│ total_price │
│ status │
│ payment_mtdFK │
│ paid_at │
│ guest_count │
│ special_req │
│ notes │
└───────────────┘
│
│ n
│
┌───────────────┐ │
│ Review │ <────────────────┘
├───────────────┤
│ id │
│ booking_id FK │
│ user_id (FK) │
│ space_id (FK) │
│ rating │
│ comment │
│ cleanliness │
│ location │
│ amenities │
│ service │
└───────────────┘

┌─────────────────┐ ┌──────────────────┐ ┌───────────────────┐
│ User │ 1 n │ PaymentMethod │ 1 n │ Booking │
├─────────────────┤ ├──────────────────┤ ├───────────────────┤
│ id │ │ id │ │ (lihat di atas) │
│ email │ │ user_id (FK) │ └───────────────────┘
│ name │ │ type │
│ phone │ │ card_number │
│ membership_type │ │ card_holder │
│ points │ │ expiry_month │
│ rating │ │ expiry_year │
│ total_bookings │ │ is_default │
│ joined_at │ │ is_active │
│ password │ └──────────────────┘
└─────────────────┘
│ 1
│
┌──────────────────┐
│ UserFavorite │
├──────────────────┤
│ id │
│ user_id (FK) │
│ space_id (FK) │
│ added_at │
└──────────────────┘

┌──────────────────┐
│ UserNotification │
├──────────────────┤
│ id │
│ user_id (FK) │
│ booking_reminders│
│ promotional_offers│
│ newsletter │
│ upcoming_bookings│
│ email_notif │
│ push_notif │
└──────────────────┘

┌──────────────────┐
│ Notification │
├──────────────────┤
│ id │
│ user_id (FK) │
│ title │
│ message │
│ type │
│ is_read │
│ data (JSON) │
└──────────────────┘
