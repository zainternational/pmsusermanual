---
sidebar_position: 7
---

# Screenshot Guide

Adding screenshots to the manual makes it easier for users to follow. This page lists **recommended screenshots** and where to use them. Save images under `static/img/docs/` and reference them in the docs as `/img/docs/<filename>.png`.

## Must-Have Screenshot Checklist

When adding or updating procedures, prioritize these screenshots so the manual stays usable:

| Priority | Screenshot | Doc(s) | Filename |
|----------|------------|--------|----------|
| **Must** | Login screen | [Intro](/docs/intro) | `login.png` |
| **Must** | Dashboard | [Dashboard](/docs/operations/dashboard) | `dashboard.png` |
| **Must** | Reservation list or new-reservation form | [Reservations](/docs/operations/reservations/overview) | `reservation-list.png` or `reservation-form.png` |
| **Must** | Transaction / folio | [Cashiering](/docs/operations/cashiering/overview) | `folio.png` |
| **Must** | Night audit (runs or run dialog) | [Night Audit](/docs/operations/night-audit) | `night-audit.png` |

See [Technical and maintenance](/docs/technical/maintenance) for the full checklist (including “nice to have” items).

## Recommended Screenshots (Full List)

| # | Description | Suggested filename | Use in doc(s) |
|---|-------------|--------------------|----------------|
| 1 | **Login screen** — Username and password fields, Login button | `login.png` | [Introduction](/docs/intro) |
| 2 | **Dashboard** — Overview stats, widgets, quick actions | `dashboard.png` | [Dashboard](/docs/operations/dashboard) |
| 3 | **Main sidebar** — Full menu (Dashboard, Profile, Reservation, Front desk, etc.) | `sidebar.png` | [Introduction](/docs/intro) |
| 4 | **Reservation list** — Table with confirmation, guest, room, dates, status | `reservation-list.png` | [Reservations](/docs/operations/reservations/overview) |
| 5 | **New reservation form** — Guest, dates, room type, rate, main fields | `reservation-form.png` | [Reservations](/docs/operations/reservations/overview) |
| 6 | **Room plan** — Rooms by floor/type with status and guest names | `room-plan.png` | [Front Desk](/docs/operations/front-desk/overview) |
| 7 | **Transaction / folio** — Charges, payments, balance for one reservation | `folio.png` | [Cashiering](/docs/operations/cashiering/overview) |
| 8 | **Housekeeping management** — Tabs (Room status, Tasks, Lost & found, etc.) | `housekeeping.png` | [Housekeeping](/docs/operations/housekeeping/overview) |
| 9 | **Night audit** — Audit runs list or Run night audit dialog | `night-audit.png` | [Night Audit](/docs/operations/night-audit) |
| 10 | **Notifications bell** — Bell icon with unread count in header | `notifications-bell.png` | [Notifications](/docs/general/notifications) |
| 11 | **Change password** — Current password, new password, confirm fields | `change-password.png` | [Profile and Security](/docs/general/profile-and-security) |
| 12 | **System Settings** — Configuration menu or main config landing | `configuration.png` | [Configuration overview](/docs/configuration/overview) |

## How to Add a Screenshot in a Doc

1. Save the image under `pmsusermanual/static/img/docs/` (create the folder if needed).
2. In the markdown file, add:
   ```markdown
   ![Short description of what the image shows](/img/docs/filename.png)
   ```
3. Optionally add a caption:
   ```markdown
   ![Login screen](/img/docs/login.png)

   *Figure: Login screen with username and password fields.*
   ```

## Tips

- Use **PNG** for clarity; **JPEG** is fine for photos if file size is an issue.
- Crop to the relevant area (e.g. one form or one list) so the image stays clear.
- Blur or redact real guest names, confirmation numbers, or amounts if needed for privacy.
- Keep filenames short and lowercase (e.g. `login.png`, `room-plan.png`).

## Placeholders in the Docs

Some docs include a short “Suggested screenshot” note where an image would help. Replace that text with the actual image markdown once the screenshot is added. If you prefer not to use images yet, you can leave the note as-is so future editors know where to add one.
