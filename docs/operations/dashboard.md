---
sidebar_position: 2
---

# Dashboard

The Dashboard is the home screen after login. It shows an overview of your property's status and quick links to common tasks.

![Dashboard](/img/docs/dashboard.png)

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules (reservations, front desk, cashiering, housekeeping, night audit, configuration, profiles), see the main [Troubleshooting](/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

## Overview Statistics

The dashboard displays:

- **Room overview** — Total rooms and occupancy rate
- **Today's stats** — Check-ins, arrivals, check-outs, in-house, cancellations, waitlist, reservations made today, logged-in users, revenue
- **Room status** — Total, available, occupied, assigned rooms (and assigned rooms by room type), maintenance, out of order
- **Complimentary stats** — House use, complimentary, and normal (paid) stays among today's in-house reservations
- **7-day revenue trend** — Revenue for the business date and the 6 days before it
- **Housekeeping** — Vacant clean/dirty, occupied clean/dirty, pick-up, inspected, out of order, out of service

## Key Widgets

### Overview Stats Card

Shows 4 key property metrics at a glance:

| Stat | Description |
|------|-------------|
| Total Rooms | Total number of rooms in the property. |
| Occupancy | Percentage of rooms currently occupied. |
| Checked In Today | Number of reservations checked in today. |
| Logged-in Users | Number of users currently logged in (active in the last 30 seconds). |

Available Rooms is **not** part of this card — it is shown in its own **Available Rooms Card** below.

### Today's Activity

Beyond the Overview Stats Card, the dashboard also surfaces today's activity in numbers:

| Stat | Description |
|------|-------------|
| Arrivals | Reservations arriving today (excluding cancelled, no-show, waitlist). |
| Cancellations | Reservations arriving today that were cancelled. |
| Waitlist | Reservations arriving today that are on the waitlist. |
| Reservations Made Today | Reservations created today, regardless of arrival date. |

### Room Status / Assigned Rooms

The **room status** summary shows total, available, and occupied room counts, plus **assigned rooms** — the count of today's arrivals that already have a room number assigned — broken down by room type so you can see, for example, how many Deluxe vs. Standard rooms are assigned for today's arrivals.

### Complimentary Stats

Shows how many of today's in-house reservations are:

- **House Use** — stays on a rate flagged as house use in Rate Setup.
- **Complimentary** — stays on a rate flagged as complimentary in Rate Setup.
- **Normal** — regular paid stays.

Each is shown as a count and percentage of today's in-house reservations. This is driven by the House Use / Complimentary flags configured on the rate code in **Configuration → Rate Setup**.

### Available Rooms Card

Shows a breakdown of available rooms by room type or room class. Use this to quickly see what you can sell or assign to walk-in guests.

### Housekeeping Card

Summarises housekeeping statuses across all rooms:

| Status | Meaning |
|--------|---------|
| Vacant Clean | Room is empty and ready to sell. |
| Vacant Dirty | Room is empty but needs cleaning. |
| Occupied Clean | Guest is in-house and room has been serviced. |
| Occupied Dirty | Guest is in-house and room needs servicing. |
| Pick-up | Room needs a quick tidy (pick-up service). |
| Inspected | Room has been inspected and approved. |
| Out of Order | Room is blocked and not available. |
| Out of Service | Room is temporarily unavailable. |

### Revenue Chart

A bar or line chart showing revenue for the business date and the 6 days before it (7 days total). Used for a quick visual of revenue performance. Hover over bars to see exact amounts. If a day has no billing transactions posted, its revenue instead falls back to the total revenue from that day's latest **completed Night Audit run** (if one exists), so the chart still reflects days closed out through night audit.

### VIP Levels Chart

A chart showing the distribution of in-house or arriving guests by VIP level. Useful for prioritising service for high-value guests.

### Complimentary Chart

Shows complimentary (comp) stays — reservations where the rate is zero or marked as complimentary. Useful for tracking comp usage.

### Reservation Details Card

Shows recent or upcoming reservations with guest name, room type, arrival/departure, status, and number of nights. Use it to see the latest booking activity.

### System Date

If your property uses a **system date** (business date) different from the actual date, it is shown on the dashboard. Night audit advances this date.

## Quick Actions

Common actions are available as buttons or links:

- **View reservations** — Go to the reservation list
- **New reservation** — Open the new reservation form
- **Room plan** — Open the front desk room plan
- **Housekeeping** — Open housekeeping management

Use these to move quickly from the dashboard into the right module.

## Navigation From Dashboard

From the dashboard you can go to:

- **Reservation** — List and new reservation
- **Front Desk → Room Plan** — Room plan view
- **Housekeeping** — Housekeeping management

Exact labels and actions depend on product version and permissions.

## Common FAQs

**Why don't I see the Dashboard after login?**  
The Dashboard is the default home after login. If you are sent somewhere else, your role or configuration may define a different landing page. Use the **Dashboard** item in the sidebar to open it.

**What is the system date on the dashboard?**  
If your property uses a **system (business) date** different from the real date, it is shown on the dashboard. Night audit advances this date. New reservations, rates, and reports use the business date as "today."

**How do I go to a new reservation from the dashboard?**  
Use the **New reservation** quick action (or equivalent). It opens the new-reservation form. You can also go to **Reservation** in the sidebar and click **New Reservation**.

**Why do my dashboard numbers not match other screens?**  
Dashboard stats are often cached or calculated at a specific time. Room plan and reports use live or filtered data. Check date filters and system date; refresh the dashboard if your product supports it.

**Where do I see today's check-ins and check-outs?**  
The dashboard shows **Today's stats** (check-ins, check-outs). For the full list, use **Reservation** (filter by arrival/departure date) or **Front Desk → In-House** and **Checked-Out**.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Dashboard shows wrong property** | The active property (hotel) is not the one you expect. | Use the **hotel switcher** (if multi-property) to select the correct property. |
| **Widget or stat missing** | Your permissions or configuration may hide that widget. | Confirm your role can see that stat. Some widgets depend on System Settings (e.g. VIP, revenue). |
| **Quick action does nothing or is missing** | Permission or product version may not include that action. | Check [Roles and permissions](/general/roles-and-permissions). Use the sidebar to go to the module (e.g. Reservation, Housekeeping) if the quick action is hidden. |
| **System date is behind or ahead** | Night audit may not have been run, or was run for a different date. | Night audit advances the business date. Ensure it is run once per day; check with your night auditor or administrator. |

For login, permissions, wrong property, and other general issues, see [Troubleshooting](/general/troubleshooting).

## See also

- [Reservations](/operations/reservations/overview) — List and new reservation; quick actions from dashboard.
- [Front Desk](/operations/front-desk/overview) — Room plan quick action.
- [Housekeeping](/operations/housekeeping/overview) — Housekeeping quick action; dashboard housekeeping summary.
- [Reports](/operations/reports/overview) — For detailed reports, use **Report** in the sidebar.
