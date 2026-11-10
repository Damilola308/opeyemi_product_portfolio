# THE CURIOUS LAB

A Next.js portfolio starter for Opeyemi Ogunbona, with an experimental editorial design system.

## Included
- Responsive sidebar navigation and homepage with an interactive, pointer-responsive hero
- Motion for React animations (staggered reveals, scroll reveals, page transitions) that respect `prefers-reduced-motion`
- About, Work, Experiments, Notes and Contact pages
- Dynamic case-study pages for Klaridge and EpiTrack
- Central project data in `data/projects.ts`
- Central profile/contact details in `data/profile.ts`
- Plum / ivory / electric purple / orange / blue / yellow design system in `app/theme.css`

## Run locally
1. Install Node.js 20 or later.
2. Extract the ZIP and open the project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Before publishing
- Fill in `linkedin` and `github` in `data/profile.ts`. Empty fields are hidden automatically.
- Add the remaining designed projects once their names, descriptions and images are ready.
- Check the EpiTrack case study: its data is explicitly described as simulated, not live surveillance.
- Review all copy and links before deployment.

## Deploy
Push the project to a Git repository and import it into Vercel, or use another host that supports Next.js. Set the production environment according to the host's Next.js instructions.
