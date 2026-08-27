# Deploy Scripts

PowerShell scripts for publishing the **Hotelium PMS Manual** and syncing the **hotelium.com.mm** marketing site on the production server.

These scripts use **PuTTY** (`plink` / `pscp`) with a `.ppk` SSH key — the same setup as logging in via PuTTY.

## Requirements

- **Windows** with PowerShell
- **Node.js** ≥ 20 (for `npm run build`)
- **PuTTY** installed (default paths):
  - `C:\Program Files\PuTTY\plink.exe`
  - `C:\Program Files\PuTTY\pscp.exe`
- **SSH key** (`.ppk`) with access to the server

## Server layout

`/var/www/hotelium` is a **shared webroot**: this repo owns the `docs/`
subtree, and the separate `pmswebsite-html` repo owns everything else. Two
consequences that are easy to get wrong:

- The website deploy (`rsync --delete` from `pmswebsite-html`) must keep
  `--exclude 'docs'`, or it erases the manual. That exclude is documented in
  that repo's README.
- The manual's nginx rules (`location ^~ /docs/`, its own CSP snippet, the
  `/docs` → `/docs/` redirect) live in `pmswebsite-html/deploy/nginx/`, not
  here — a Docusaurus build needs inline script/style, which the marketing
  site's stricter CSP blocks.

### Current setup — subfolder (`/docs/`)

| Path on server | Purpose |
|----------------|---------|
| `/var/www/hotelium/docs/` | PMS manual (Docusaurus build) → https://hotelium.com.mm/docs/ |
| `/var/www/hotelium/index.html` | Main marketing site → https://hotelium.com.mm/ |

### Alternative — subdomain (`docs.hotelium.com.mm`)

| Path on server | Purpose |
|----------------|---------|
| `/var/www/docs.hotelium.com.mm/` | PMS manual at site root → https://docs.hotelium.com.mm/ |
| `/var/www/hotelium/index.html` | Main marketing site (unchanged) |

See [Subdomain deployment](#subdomain-deployment-docshoteliumcommm) below if you prefer a separate subdomain instead of `/docs/`.

## Quick start

From the project root (`pmsusermanual/`):

```bash
# Show all commands
npm run deploy:help

# Build manual + upload to server
npm run deploy:manual

# Download main site index.html for editing
npm run site:download

# Upload edited index.html back (creates server backup)
npm run site:upload
```

## npm scripts

| Command | Description |
|---------|-------------|
| `npm run deploy:manual` | Run `npm run build`, then upload `build/` to `/var/www/hotelium/docs/` |
| `npm run deploy:manual:upload` | Upload existing `build/` only (skip build) |
| `npm run site:download` | Download server `index.html` → `scripts/local/site-index.html` |
| `npm run site:upload` | Upload `scripts/local/site-index.html` → server (with backup) |
| `npm run deploy:help` | Print command summary |

## PowerShell (direct)

```powershell
.\scripts\deploy-manual.ps1
.\scripts\deploy-manual.ps1 -SkipBuild

.\scripts\download-site-index.ps1
.\scripts\download-site-index.ps1 -OutputPath .\my-index.html

.\scripts\upload-site-index.ps1
.\scripts\upload-site-index.ps1 -InputPath .\my-index.html
.\scripts\upload-site-index.ps1 -SkipBackup

.\scripts\deploy.ps1 help
.\scripts\deploy.ps1 manual
.\scripts\deploy.ps1 site-download
.\scripts\deploy.ps1 site-upload
```

## Typical workflows

### Update the PMS manual

After editing files under `docs/` or `src/`:

```bash
npm run deploy:manual
```

If you already ran `npm run build` and only need to re-upload:

```bash
npm run deploy:manual:upload
```

### Update the main website (index.html)

> **The website is not maintained here.** Its source of truth is the separate
> `pmswebsite-html` repo, which deploys the whole webroot (`index.html`, CSS,
> JS, images, nginx config). These two commands exist only as a shortcut for
> touching the live `index.html` without a full site deploy.
>
> `scripts/local/site-index.html` is a gitignored cache, and nothing keeps it
> in sync. If it is older than the last website deploy, `site:upload` silently
> reverts the live site to whatever that stale copy holds — this is exactly how
> the site ended up four commits behind between May and August 2026.
>
> Always `site:download` immediately before editing, never upload a copy you
> did not just download, and mirror any change you make back into
> `pmswebsite-html/index.html` — otherwise the next website deploy overwrites
> it right back.

```bash
npm run site:download          # ALWAYS start here — never trust the local copy
# Edit scripts/local/site-index.html
npm run site:upload
```

Each upload creates a timestamped backup on the server, e.g.:

`/var/www/hotelium/index.html.bak.20260523-143000`

Those backups land **inside the public webroot**. The nginx config in
`pmswebsite-html` returns 404 for `*.bak*`, but clean them up anyway — one from
May sat there readable at `https://www.hotelium.com.mm/index.html.bak.20260523`
until August 2026.

## Subdomain deployment (`docs.hotelium.com.mm`)

Use this when the manual should live on its **own subdomain** (e.g. `https://docs.hotelium.com.mm/quickstart/`) instead of `https://hotelium.com.mm/docs/`.

### Comparison

| | Subfolder (current) | Subdomain |
|--|---------------------|-----------|
| **URL** | `hotelium.com.mm/docs/` | `docs.hotelium.com.mm/` |
| **Docusaurus `baseUrl`** | `/docs/` | `/` |
| **Server upload path** | `/var/www/hotelium/docs/` | `/var/www/docs.hotelium.com.mm/` |
| **Nginx** | `location /docs/` on main site | Separate `server` block |
| **DNS** | Not required | A record `docs` → server IP |
| **Main site links** | `href="/docs/"` | `href="https://docs.hotelium.com.mm/"` |

### Step 1 — DNS

Add an **A record** at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | `docs` | `13.229.150.25` |

Wait for DNS to propagate, then continue.

### Step 2 — `docusaurus.config.js`

Switch from subfolder to subdomain:

```js
// Option B: hotelium.com.mm/docs/ (subfolder) — comment out
// url: 'https://hotelium.com.mm',
// baseUrl: '/docs/',

// Option C: docs.hotelium.com.mm (subdomain)
url: 'https://docs.hotelium.com.mm',
baseUrl: '/',
```

Also update the back-to-top script path:

```js
scripts: [
  { src: '/js/back-to-top.js', defer: true },
],
```

Keep `routeBasePath: '/'` and `docsRouteBasePath: '/'` as they are — doc URLs become `https://docs.hotelium.com.mm/quickstart/` (not `/docs/docs/...`).

Rebuild:

```bash
npm run build
```

### Step 3 — Deploy script config

In `deploy-config.local.ps1`, point uploads to the subdomain web root:

```powershell
@{
    ManualRemotePath = '/var/www/docs.hotelium.com.mm'
}
```

Then deploy:

```bash
npm run deploy:manual
```

### Step 4 — Nginx (on server)

Create `/etc/nginx/sites-available/docs.hotelium.com.mm`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name docs.hotelium.com.mm;

    root /var/www/docs.hotelium.com.mm;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/docs.hotelium.com.mm /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5 — SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d docs.hotelium.com.mm
```

### Step 6 — Main site links (`index.html`)

Update documentation links on the marketing site from `/docs/` to the subdomain:

```html
<a href="https://docs.hotelium.com.mm/" target="_blank" rel="noopener noreferrer">Documentation</a>
```

Make this edit in the **`pmswebsite-html` repo** and deploy from there — that
repo owns `index.html`. Editing it through `site:download` / `site:upload`
here leaves the change untracked, and the next website deploy reverts it. That
is exactly what happened when these links were first moved to `/docs/` in May
2026: the live site kept the edit, the repo never learned about it, and the
two drifted apart for three months.

### Step 7 — Optional cleanup

If you no longer use the subfolder, you can remove the old nginx block from `/etc/nginx/sites-available/hotelium`:

```nginx
# Remove these if switching fully to subdomain:
# location = /docs { ... }
# location /docs/ { ... }
```

And optionally delete `/var/www/hotelium/docs/` on the server.

### Switching back to subfolder

Reverse the steps: restore `url` / `baseUrl` in `docusaurus.config.js`, set `ManualRemotePath = '/var/www/hotelium/docs'`, restore nginx `location /docs/`, rebuild, and redeploy.

## Configuration

Default settings are in `Deploy-Common.ps1`. To override on your machine:

1. Copy `deploy-config.example.ps1` → `deploy-config.local.ps1`
2. Edit values (PPK path, server IP, remote paths)
3. `deploy-config.local.ps1` is gitignored — safe for machine-specific paths

Example `deploy-config.local.ps1`:

```powershell
@{
    ServerHost = '13.229.150.25'
    ServerUser = 'ubuntu'
    PpkPath    = 'D:\ZA\Documents - Hotelium\7.Key\7CHotelium\hotelium_key.ppk'

    # Subfolder (default): hotelium.com.mm/docs/
    ManualRemotePath = '/var/www/hotelium/docs'

    # Subdomain: docs.hotelium.com.mm/
    # ManualRemotePath = '/var/www/docs.hotelium.com.mm'
}
```

## File reference

| File | Role |
|------|------|
| `Deploy-Common.ps1` | Shared config, SSH upload/download helpers |
| `deploy-config.example.ps1` | Config template |
| `deploy-config.local.ps1` | Optional local overrides (not in git) |
| `deploy-manual.ps1` | Build + upload manual |
| `download-site-index.ps1` | Download marketing site index |
| `upload-site-index.ps1` | Upload marketing site index |
| `deploy.ps1` | Wrapper / help |
| `local/` | Downloaded `site-index.html` (gitignored) |
| `init-gh-pages.sh` | GitHub Pages bootstrap (separate from hotelium.com.mm deploy) |

## Troubleshooting

**`Missing PpkPath` / `Missing PlinkPath`**

- Install [PuTTY](https://www.putty.org/) or update paths in `deploy-config.local.ps1`.

**`npm run build failed`**

- Fix broken doc links locally first. The build fails on broken internal links (`onBrokenLinks: 'throw'`).

**`Permission denied (publickey)`**

- Check the `.ppk` path and that the key matches the server user (`ubuntu`).
- Confirm PuTTY can connect: `plink -i "path\to\key.ppk" ubuntu@13.229.150.25`

**PowerShell execution policy**

- npm scripts use `-ExecutionPolicy Bypass`. If running `.ps1` directly fails, use:

  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File scripts/deploy-manual.ps1
  ```

**Manual works locally but not on the live site**

- **Subfolder:** `docusaurus.config.js` needs `url: 'https://hotelium.com.mm'` and `baseUrl: '/docs/'`. Nginx must have `location /docs/`.
- **Subdomain:** needs `url: 'https://docs.hotelium.com.mm'` and `baseUrl: '/'`. Check DNS, nginx server block, and SSL for `docs.hotelium.com.mm`.
- Rebuild and redeploy: `npm run deploy:manual`.

## See also

- Project [README.md](../README.md) — Docusaurus dev setup
- [internal/technical/maintenance.md](../internal/technical/maintenance.md) — Internal maintainer guidelines (not published)
