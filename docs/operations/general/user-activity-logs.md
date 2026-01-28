---
sidebar_position: 0
---

# User Activity Logs

**User Activity Logs** record actions performed by users in the PMS (e.g. login, reservation change, payment, configuration change). Use them for auditing and troubleshooting.

## Accessing User Activity Logs

From the sidebar: **Operations → General → User Activity Logs**. Visibility depends on **user permissions** (e.g. `view_useractivitylog`).

## What You See

The log list typically shows:

- **Date / time** — When the action occurred
- **User** — Who performed it
- **Action** — Type of action (e.g. Login, Create Reservation, Post Payment, Edit Room)
- **Module** or **screen** — Where it was done
- **Details** — Object ID, old/new values, or summary (depending on configuration)

Use **filters** (date range, user, action, module) to narrow results.

## Viewing Details

Click a row (or use **View**) to open the full log entry. You may see:

- Request method and endpoint (for API actions)
- Request/response summary or body (if logged)
- Changed fields (before/after) for updates
- IP address or session (if captured)

## Export

If available, **export** logs to CSV or Excel for auditing or compliance.

## Use Cases

- **Auditing** — Who did what and when
- **Troubleshooting** — Trace back a change (e.g. rate, reservation, payment)
- **Security** — Detect unusual or unauthorized activity
- **Compliance** — Retain evidence of user actions

## Configuration

What is logged (e.g. which modules, which fields) is usually controlled in the **backend** or **user activity log** configuration. Contact your administrator to change what is captured.
