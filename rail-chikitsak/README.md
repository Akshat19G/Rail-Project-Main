# Rail Chikitsak — Intelligent Railway Medical Emergency Response

React 19 + TypeScript + TanStack Start + Tailwind CSS v4 + Supabase.

## Run locally (VS Code)

```sh
npm install
npm run dev        # http://localhost:8080
```

The included `.env` already has the backend URL and publishable key, so it works out of the box.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it on Vercel (Framework preset: **Other** — `vercel.json` handles the rest).
3. Add these Environment Variables in Vercel → Settings → Environment Variables
   (copy the values from `.env` / `.env.example`):

   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - (optional) `SUPABASE_SERVICE_ROLE_KEY` — only for seeding the one-click demo accounts

4. Deploy. The build outputs `.vercel/output` via the Nitro `vercel` preset.

For any other host set `NITRO_PRESET` (e.g. `node-server`, `netlify`) before `npm run build`.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — ESLint
