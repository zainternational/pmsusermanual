---
sidebar_position: 0
---

# Reports Overview

The **Report** module provides predefined reports for reservations, front desk, guest **profiles** (guest information, guest record, repeated guest, guest birthday), **billing (including folio summary)**, housekeeping, financial (billing, trial balance, manager report), and **night audit**. Use it to run **folio**, **cash register**, and **night audit** reports from one place. In the app, **Report** is a menu of groups; some groups list several sub-reports to choose from.

:::tip **Having a problem?**  
See the main [Troubleshooting](/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting for [Reservations](/operations/reservations/overview#troubleshooting), [Front Desk](/operations/front-desk/overview), [Cashiering](/operations/cashiering/overview), [Housekeeping](/operations/housekeeping/overview), [Night Audit](/operations/night-audit#troubleshooting), [Dashboard](/operations/dashboard#troubleshooting), [Configuration](/configuration/overview#troubleshooting), and [Profiles](/operations/profiles/overview#troubleshooting).
:::

Reports are organized into **groups** in the sidebar. Some groups contain a single report; others (**Profile**, **Financial**) contain several sub-reports you pick from a dropdown/tab list on the group's page.

| Group | Sub-report(s) | Purpose |
|-------|----------------|---------|
| Reservation | Reservation | Arrivals/departures, in-house, pickup, cancellations, revenue or occupancy by segment/source/rate. |
| Frontdesk | Frontdesk | Room occupancy, room status summary, arrivals/departures/in-house for a business date. |
| Profile | [Guest Information](/operations/reports/guest-information) | In-house guest list with full profile details (passport, visa, nationality, VIP level) for a business date. |
| Profile | [Guest Record](/operations/reports/guest-record) | Per-profile stay history and revenue statistics. |
| Profile | [Repeated Guest](/operations/reports/repeated-guest) | Guests with multiple stays and revenue summary. |
| Profile | [Guest Birthday](/operations/reports/guest-birthday) | Guests with birthdays in a selected date range. |
| Housekeeping | Housekeeping | Room status, task completion, lost & found log, maintenance log, out-of-order list. |
| Financial | [Billing](/operations/reports/billing) | Revenue by transaction code or category, payments by type, outstanding balances, folio summary. |
| Financial | [Trial Balance](/operations/reports/trial-balance) | Opera-style daily trial balance snapshot (revenue/non-revenue/payment sections, guest & deposit ledger) for a **completed night audit run**. |
| Financial | [Manager Report](/operations/reports/manager-report) | Consolidated daily summary: occupancy, revenue, payments, outstanding, and breakdowns by transaction code, payment type, and room type. |
| Night Audit | Night Audit | Daily summary, revenue summary, room revenue, exceptions, guest ledger for the audit date. |

## Access

From the sidebar, click **Report**. Choose a group (Reservation, Frontdesk, Profile, Housekeeping, Financial, Night Audit). If the group has more than one sub-report (Profile, Financial), select the specific sub-report from the dropdown/tab list on that group's page.

What you see is gated by **granular per-report permissions** — each report group in the sidebar only appears if your role has been granted the matching permission:

| Report | Permission |
|--------|------------|
| Reservation | `view_reservation_report` |
| Frontdesk | `view_frontdesk_report` |
| Profile (Guest Information, Guest Birthday, Guest Record, Repeated Guest) | `view_frontdesk_report` |
| Billing (Financial) | `view_billing_report` |
| Housekeeping | `view_housekeeping_report` |
| Night Audit | `view_night_audit_report` |
| Trial Balance (Financial) | `view_trial_balance_report` |
| Manager Report (Financial) | `view_manager_report` |

:::note
All four Profile group reports (Guest Information, Guest Birthday, Guest Record, Repeated Guest) share the same `view_frontdesk_report` permission as the Frontdesk report — they are not gated separately. Granting `view_frontdesk_report` gives access to all of them together.
:::

If a report is missing from your sidebar, ask an administrator to grant the corresponding permission under [Roles and permissions](/general/roles-and-permissions).

## Using a Report

1. **Select group (and sub-report, if applicable)** — Reservation, Frontdesk, Profile, Housekeeping, Financial, or Night Audit.
2. **Set filters** — Date range, property, department, status, etc. For the **Trial Balance** report, you must first select a **completed night-audit run** from the list of past runs — the report is generated for that specific audit run, not a free-form date range.
3. **Run / Apply** — Generate the report.
4. **View** — Results appear in a table or summary.
5. **Export** — If available, export to Excel, PDF, or CSV for accounting or management.

## See also

- [Night Audit](/operations/night-audit) — Run night audit; reports from each run and [Night Audit reports](/operations/reports/night-audit) (daily summary, guest ledger, folio data).
- [Cashiering](/operations/cashiering/overview) — Transaction, Cashier Shift, folio and **cash register** data; [Billing reports](/operations/reports/billing) for revenue and outstanding balances.
- [Reservations](/operations/reservations/overview) — For reservation and occupancy data.
- [Housekeeping](/operations/housekeeping/overview) — For room status and tasks.
