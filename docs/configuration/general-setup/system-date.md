---
sidebar_position: 2
---

# System Date (Business Date)

The **business date** is the property's "today" for reservations, rates, night audit, and reporting. It is stored and controlled separately from the server's actual calendar date, so front desk and audit screens can be advanced deliberately at day-end rather than following the clock automatically.

## Access

**Configuration → General Configuration → Business Date**

## Fields

| Field | Description |
|-------|-------------|
| Business Date | The effective date used across front desk, night audit, and reports. |
| Active Status | Whether this business date record is the one currently in effect. Only one active record applies per hotel scope at a time. |
| Hotel (scope) | Set automatically to the currently selected hotel when a new business date is created. When empty, the record applies to all hotels. |

## Permissions

Viewing the current business date does not require a specific permission — it is readable by any authenticated user (and even unauthenticated dashboard requests) so other modules can display it. **Changing** the business date requires the **Edit Business Date** permission (`BUSINESS_DATE_MANAGEMENT.EDIT_BUSINESS_DATE`). Users without this permission see the current date read-only, with a message explaining they lack access to change it.

## How it works

1. The Business Date page shows the current active business date and its status (Active/Inactive), plus a summary of any pending or in-progress night audit runs for that hotel.
2. Click **Set** (first time) or **Update** to open the edit modal, choose a new **Business Date**, and set **Active Status**.
3. Saving updates the existing active record for the current hotel (a new record is only created if none exists yet).
4. **Night audit interaction:** running a night audit for the current business date automatically advances the active business date to the next day once the audit completes successfully — you do not need to manually update the date after every audit. Manually changing the business date directly (bypassing night audit) is also possible if you have the Edit permission, and any pending night audit runs for the date being left are marked complete as part of that change.
5. The Business Date record is scoped **per hotel**: if you operate multiple hotels, each hotel can have its own independent business date. Switching the selected hotel (via the hotel selector) shows that hotel's business date.

## Common FAQs

**Why can't I change the business date?**
You need the **Edit Business Date** permission. If you have it and the save still fails, there is usually operational data (open night audit run, active reservations) tied to the current date — check **User Activity Logs** for the detailed reason.

**Does changing the business date replace running night audit?**
No — night audit performs the actual close-of-day processing (charges, reports, room status). Manually changing the business date only updates the "today" pointer; use it for correcting a misconfigured date, not as a substitute for the night audit run.

**I manage more than one hotel — do they share the same business date?**
No. Business Date is scoped per hotel via the **Hotel** field. Each hotel's business date advances independently as its own night audit runs.

## See also

- [Night Audit](/operations/reports/night-audit) — The process that advances the business date.
- [First-Time Setup](/configuration/first-time-setup) — Initial business date configuration.
