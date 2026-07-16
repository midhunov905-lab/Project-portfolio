# Midh — Portfolio Site

A minimal one-page portfolio (About + Contact), plain HTML/CSS/JS, no build step.

## Files
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — replays the waveform animation on scroll

## Before you push
Open `index.html` and swap the placeholder contact info for your real ones:
- `your.email@example.com`
- `github.com/your-username`
- `linkedin.com/in/your-profile`

## Push it to GitHub + go live with GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio`), no README/gitignore needed.
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "first commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait ~1 minute, then your site is live at:
   `https://your-username.github.io/portfolio/`

## Making future updates
```bash
git add .
git commit -m "update: whatever you changed"
git push
```
GitHub Pages redeploys automatically a minute or two after every push.
