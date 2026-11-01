# Drevoxa Digital Website

MERN stack website for Drevoxa Digital: React (Vite) and Tailwind CSS v3 on the frontend, Express, Mongoose and MongoDB on the backend. JavaScript throughout.

```text
drevoxa-digital/
  frontend/   React app (Vite, Tailwind, React Router, Axios, Lucide)
  backend/    Express REST API (Mongoose, validation, rate limiting)
  README.md
  .gitignore
```

## Requirements

* Node.js 18 or newer
* A MongoDB database (local, or a free MongoDB Atlas cluster)

## Run locally

**1. Backend**

```bash
cd backend
npm install
cp .env.example .env        # then edit MONGODB_URI
npm run seed                # optional: loads the placeholder projects into MongoDB
npm run dev                 # http://localhost:5000
```

**2. Frontend** (second terminal)

```bash
cd frontend
npm install
cp .env.example .env        # leave VITE_API_URL empty in development
npm run dev                 # http://localhost:5173
```

In development Vite proxies `/api` to `http://localhost:5000`.

## API

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/api/contact` | Validates, sanitizes and stores an inquiry. Returns 201 only after it is saved. |
| GET | `/api/projects` | Lists projects. Optional `?category=` and `?featured=true`. |
| GET | `/api/projects/:slug` | Returns one project. |
| GET | `/api/health` | Health check. |

Contact protections: server-side validation (express-validator), HTML and control-character stripping, JSON body limit of 20 KB, a hidden honeypot field, 5 submissions per hour per IP, and a general 200 requests per 15 minutes limit on `/api`. If MongoDB is unreachable the API returns 503 and the form shows an error instead of a success message.

No administrative endpoints exist. Inquiries are read directly in MongoDB (Atlas UI or Compass); the `inquiries` collection has a `status` field (`new`, `in-progress`, `closed`). If an admin dashboard is added later, every admin route must be authenticated and authorized.

## Portfolio content

Project data lives in `backend/data/projects.json` (loaded by `npm run seed`) and a copy at `frontend/src/data/projects.json`. The frontend reads the API and falls back to its local copy if the API is unreachable or the database is empty. **When you change projects, update both files** (or seed the database and keep the local copy in sync).

The six current entries are **placeholders** (`isPlaceholder: true`), shown with a visible "Placeholder" label and artwork in `frontend/public/projects/`. To replace one: add an optimized image to `frontend/public/projects/`, edit the entry, and set `isPlaceholder` to `false`. Valid categories: Web Development, Graphic Design, Brand Identity, Social Media Design.

## Production build

```bash
cd frontend
echo "VITE_API_URL=https://your-api-domain.com" > .env.production
npm run build               # outputs frontend/dist
```

Deploy `frontend/dist` to any static host. `frontend/public/_redirects` (Netlify, Cloudflare Pages) and `frontend/vercel.json` (Vercel) make direct visits to routes such as `/services` work. For other hosts, configure a fallback to `index.html`.

Deploy `backend` to a Node host (Render, Railway, a VPS). Set these environment variables on the host, not in Git:

```text
NODE_ENV=production
PORT=<provided by host>
MONGODB_URI=<Atlas connection string>
CLIENT_URL=https://www.your-domain.com
TRUST_PROXY=1
```

## Pre-launch checklist

Items marked **Needs you** cannot be completed from the code alone.

**Content and business details**
- [ ] **Needs you:** Replace the six placeholder projects with real work (see above), or remove the Our Work links until ready.
- [ ] **Needs you:** Fill in `frontend/src/config/site.js` (email, phone, address, legal name, jurisdiction, review date). Empty contact values stay hidden.
- [ ] **Needs you:** Complete every `[bracketed]` placeholder in `Privacy.jsx` and `Terms.jsx`, and have both reviewed by a qualified person.
- [ ] **Needs you:** Replace the typographic wordmark (`components/Wordmark.jsx`) and `public/favicon.svg` if an official logo exists.
- [ ] Confirm the services listed on the Services page match what is actually offered (maintenance, scheduling and account management are written as "where agreed").

**Domain and hosting**
- [ ] **Needs you:** Deploy frontend and backend, connect the custom domain, configure DNS, confirm HTTPS.
- [ ] Replace `www.your-domain.com` in `public/sitemap.xml` and `public/robots.txt`. Remove placeholder project URLs from the sitemap until they are real.
- [ ] Add `og:url` and a 1200x630 PNG `og:image` in `frontend/index.html`.
- [ ] Open `/`, `/services`, `/work`, `/work/<slug>`, `/contact`, `/privacy-policy`, `/terms-and-conditions` and a bad URL directly on the production domain.
- [ ] Check the hosting provider's dashboard for any injected badge or branding and disable it. The source contains none.

**Functionality**
- [ ] Production environment variables set (`MONGODB_URI`, `CLIENT_URL`, `TRUST_PROXY`, `VITE_API_URL`).
- [ ] Submit the contact form on production and confirm the document appears in the `inquiries` collection.
- [ ] Test the error state (stop the API briefly) and the validation messages.
- [ ] Restrict the MongoDB user to the one database and use an IP allowlist where the host allows it.
- [ ] Decide how inquiries will be monitored (email alerts are not built in).

**Quality**
- [ ] `npm run build` completes with no errors.
- [ ] Check layouts at roughly 360, 768, 1024 and 1440 px for horizontal overflow.
- [ ] Keyboard check: skip link, mobile menu (Escape closes it), filter buttons, form.
- [ ] Run Lighthouse for accessibility, SEO and performance, and fix anything it reports.

## Design notes

Brand colors, Cinzel and DM Sans are defined in `tailwind.config.js` and `src/index.css` (including the `.cinzel` and `.para` classes). Gold is used for borders, rules and accents; it is not used for text on cream because the contrast is too low. Motion is limited to hover transitions, a 150 ms mobile menu fade, and everything is disabled under `prefers-reduced-motion`.
