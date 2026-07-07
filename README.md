# Lumière AI — Website

Dark, sleek multi-page site: Home, Services, About, Contact.
Plain HTML/CSS/JS — no build step, no dependencies, free to host forever.

## File structure
```
lumiere-site/
├── index.html      Home
├── services.html    Services
├── about.html        About
├── contact.html     Contact
├── styles.css        Shared styles
├── script.js          Shared JS (nav, animations, form)
```

## How to update content later
Every page is plain HTML — open the file, edit the text between the tags, save.
Shared look (colors, fonts, spacing) lives in `styles.css` at the top under `:root`.
To add a new page: copy `about.html`, rename it, update the `<nav>` links across
all pages to include it.

## Deploy for free — two options

### Option A: Vercel (recommended — auto-deploys on every push)
1. Push this folder to a GitHub repo (e.g. `lumiere-ai/website`).
2. Go to https://vercel.com → sign up with GitHub (free).
3. "Add New Project" → import that repo → deploy (no config needed, it's static HTML).
4. You get a free `*.vercel.app` URL immediately.
5. In Vercel project settings → Domains → add your custom domain (e.g. `lumiereai.me`)
   and follow the DNS instructions it gives you.
6. From now on: edit files → `git commit` → `git push` → site updates automatically in ~30s.

### Option B: GitHub Pages (simplest, zero extra accounts)
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Source: "Deploy from branch" → branch `main`, folder `/root`.
3. Save. Your site is live at `https://<username>.github.io/<repo>/` in a minute or two.
4. To use your custom domain: Settings → Pages → add your domain under "Custom domain",
   then add the DNS records GitHub shows you (usually a `CNAME` record at your domain registrar).

## Free domain (GitHub Student Developer Pack)
If your friend's GitHub Student Pack includes a free domain offer (commonly a `.me` via
Namecheap, free for 1 year), redeem it at https://education.github.com/pack under his
account, then point the domain's DNS at whichever host you chose above.

## Quick local preview
Just open `index.html` directly in a browser — no server needed.
Or, for a local dev server: `python3 -m http.server` from inside this folder, then visit
`http://localhost:8000`.
