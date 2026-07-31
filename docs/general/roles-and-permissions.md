---
sidebar_position: 6
---

# Roles and Permissions

What you see and can do in the PMS depends on your **user permissions**. Permissions are assigned by your administrator through **user groups** or direct user rights. This page summarises **which menu areas typically require which access**.

## Sidebar Menu and Access

If you **do not see** a menu item, your user probably does not have the permission needed for that part of the system.

| Menu or section | What you need (typical) |
|-----------------|-------------------------|
| **Dashboard** | No special permission; usually visible to all logged-in users. |
| **Profile** (Individual / Company / Travel Agent) | Permission to view at least one profile type (individual, company, or travel agent). |
| **Reservation** | Permission to view, add, or edit reservations. |
| **Front Desk** (Room plan, In-house, Checked-out) | Permission to view reservations and/or to check in / check out, and often account-receivable access. |
| **Cashiering** (Transaction, Cashier shift, Quick checkout, Journal by Transaction, Room Routing) | Cashier permission. You also must log in to a **cash register** before using cashier screens. Room Routing additionally requires the **Manage Room Routing** permission. |
| **Housekeeping** | Permission to view room status, out-of-order, maintenance, tasks, and/or lost & found. |
| **Night Audit** | Night audit permission. |
| **Report** | Permission to view reports. |
| **Operations → General →** [**User Activity Logs**](/operations/general/user-activity-logs) | Permission to view user activity logs. |
| **System Settings** | At least one permission in setup (e.g. rooms, rates, reservation setup, profiles, cashiering, housekeeping, account receivables). The full System Settings menu shows all config areas your account can access. |

## Permission Types

Permissions are usually grouped by **area**:

- **Profile management** — Individual, company, travel agent (view / add / edit / delete).
- **Reservation management** — Reservations (view / add / edit / delete), check-in, check-out, cancel, waitlist.
- **Front desk / AR** — Account receivable, in-house, checked-out, room plan.
- **Cashier** — View cashier, use transaction / shift / quick checkout.
- **Housekeeping** — Room status, out-of-order, maintenance, tasks, lost & found, sections, attendants, etc.
- **Night audit** — Run night audit, view runs and reports.
- **Reports** — View (and sometimes generate or export) reports.
- **User activity log** — View (and sometimes export) activity logs.
- **Setup / configuration** — Each setup area (e.g. rooms, rates, transaction codes, users) has its own view / add / edit / delete permissions.

Your administrator assigns these through **user groups** or per-user settings in **System Settings → Users / User groups**.

## Managing Groups and Permissions

Administrators manage access from **System Settings → Users / User groups**:

- **Create a group** — give it a name, then select the permissions it should grant.
- **Edit a group** — change its name or add/remove permissions at any time; changes apply immediately to every user in the group.
- **Delete a group** — removes the group; users who were in it lose the permissions it granted (unless they have those permissions directly or through another group).

When assigning permissions (to a group or directly to a user), the permission list is **organized by app area**, for example **Billing Transaction**, **Reservation**, **Housekeeping**, **Front Desk**, and so on. Each area lists its own view/add/edit/delete-style permissions, which makes it easier to find and grant only what a role actually needs (e.g. give the front desk group everything under "Front Desk" and "Billing Transaction" without touching Housekeeping or Setup permissions).

## Admin Type (Super Admin / Admin / User)

Every user account has an **admin type** in addition to any groups or direct permissions:

- **Super Admin** — full, unrestricted access to every module, every hotel, and every setting. Bypasses hotel scoping and every permission check entirely. **Only one true superuser account can exist in the system** — attempting to mark a second account as superuser is rejected.
- **Admin** — despite the name, this is **not** a special access level and does not bypass permission checks. An Admin account's access is governed entirely by its groups and direct permissions, exactly like **User (Regular)**. Use it only as a label to distinguish administrative staff — grant actual access through groups/permissions as usual.
- **User (Regular)** — access is governed entirely by the groups and direct permissions assigned to the account, per the tables above.

Your administrator sets the admin type when creating or editing a user account.

## Multi-Property Access

If your property runs multiple hotels, a user account can be scoped to **one hotel** using the **Allowed Hotel** field on their profile. If that field is **left empty, the user has access to all hotels** — it is not restricted to a single default hotel; this applies to any account, regardless of admin type. Only **Super Admin** accounts always have access to all hotels regardless of the Allowed Hotel field — **Admin** is not special-cased and follows the same empty-Allowed-Hotel rule as a regular user. This hotel-based data separation is applied screen by screen, so it may not cover every area of the system equally — if you notice data from another property where you shouldn't, report it to your administrator.

## Cash Register Users

Cashiers can be given a **separate cash-register login** that is distinct from their regular staff account:

- A **Cash Register User** is linked to a regular user account but has its own **register ID** and **password**, and signs in at a dedicated **cash register login** screen rather than the normal staff login.
- It can be scoped to a specific hotel, independent of the linked user's own hotel access.
- Each cash register user has a **shift drop limit** (maximum number of shift drops allowed per business date). Every shift drop is recorded, and the count of drops already used for the current business date is tracked against this limit.
- Cash register logins are managed by an administrator from the cashiering / users setup area, separately from regular staff user accounts.

## Login Page Behaviour

A few things you may notice on the **login** screen:

- **Database selector** — if your deployment hosts more than one property database, a **Database** dropdown appears above the username field so you pick the correct one before signing in. If your deployment only has one database, this dropdown is hidden and the database is selected automatically.
- **Too many attempts** — repeated failed login attempts (wrong username/password) are temporarily throttled. After too many tries, the **Sign in** button is disabled and shows **"Too many attempts — retry in Xs"** with a live countdown; wait for it to reach 0 before trying again.
- **Logged out for night audit** — if you were signed out automatically because **night audit** was run, the login page shows an overlay message that you were logged out for night audit, along with a countdown before you can sign in again.

## What to Do If You Need Access

- **Missing menu or button** — Ask your administrator to grant the right permissions or add you to a user group that has them.
- **“Access denied” or similar** — You tried an action your account is not allowed to do; request the specific permission (e.g. “edit reservations”, “run night audit”) from your admin.

Exact permission names and behaviour can vary by deployment; your administrator has the definitive list for your property.
