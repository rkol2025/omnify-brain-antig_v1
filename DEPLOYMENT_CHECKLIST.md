# Deployment Checklist: Omnify Brain MVP

## 1. Project Configuration
- [x] **.gitignore**: Verified to include `node_modules`, `.next`, `.env`. Added exception for `.env.example`.
- [x] **package.json**: Scripts updated (`build`, `start`, `lint`).
- [x] **Environment**: Created `.env.example` for reference. No active env vars required for MVP.

## 2. Code Quality
- [x] **Type Safety**: `npm run type-check` passed (0 errors).
- [x] **Linting**: `npm run lint` configuration verified.
- [x] **Imports**: Verified usage of `@/` aliases.
- [x] **Build**: `npm run build` verified locally.

## 3. Vercel Deployment Steps
1.  **Push to GitHub**: Commit all changes and push to `main` branch.
2.  **Import Project**: Go to Vercel Dashboard -> Add New -> Project -> Import from GitHub.
3.  **Configure Project**:
    *   **Framework Preset**: Next.js
    *   **Root Directory**: `./`
    *   **Build Command**: `next build` (default)
    *   **Output Directory**: `.next` (default)
    *   **Install Command**: `npm install` (default)
4.  **Environment Variables**: None required for MVP.
5.  **Deploy**: Click "Deploy".

## 4. Post-Deployment Verification
- [ ] **Dashboard Load**: Verify `https://[your-project].vercel.app/dashboard` loads.
- [ ] **Data Availability**: Check if `/api/brain/data` returns JSON.
    *   *Note*: Since `npm run brain` writes to the filesystem, the Vercel deployment will need to run the seed/brain script during build or have the data pre-generated and committed.
    *   **Recommendation**: For this MVP, ensure `src/data/outputs/*.json` are committed to the repo so they exist in the Vercel build.

## 5. Critical Note on Data Persistence
The current MVP writes to the local filesystem (`src/data/outputs`). Vercel's filesystem is ephemeral.
*   **Solution for MVP**: Commit the generated JSON files to git. The API route reads from these files.
*   **Solution for Phase 2**: Move to a database (PostgreSQL) or Vercel Blob Storage.
