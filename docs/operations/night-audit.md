---
sidebar_position: 7
---

# Night Audit

**Night Audit** is the end-of-day process that closes the business date, posts room revenue, and produces reports. It is typically run once per property per day.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

:::info **Suggested screenshot**  
Add a screenshot of the Night Audit screen (audit runs list or Run night audit dialog) here. Save as `static/img/docs/night-audit.png`. See [Screenshot guide](/docs/general/screenshot-guide).
:::

## Accessing Night Audit

From the sidebar, click **Night Audit**. You see **Audit Runs** and related tabs (e.g. Overview, Reservations, Revenue, Payments, Room Status, Exceptions, Reports, Guest Ledger).

## Audit Runs

An **audit run** is one execution of the night audit for a given **business date**.

### Running Night Audit

1. Open **Night Audit** and choose **Run Night Audit** (or similar).
2. Confirm the **business date** to be closed (often today or the date you are closing).
3. Start the run. The system will:
   - Validate data (e.g. open balances, exceptions)
   - **Post room charges** for in-house stays for that date
   - Roll **system date** to the next business day (if configured)
   - Generate or update **audit reports**

4. Resolve any **exceptions** reported before or after the run, if required by your procedures.

### Post Room Charge

**Post Room Charge** posts room revenue to guest folios for the relevant night. It uses:

- In-house reservations for the audit date
- Rate and room assignment from the reservation

You can run it as part of the full audit or, in some setups, from a separate **Post Room Charge** screen (e.g. from Night Audit or Cashiering).

### Viewing Past Runs

- **Audit Runs** table lists previous runs with date, status, and user.
- Open a run to see its **summary**, **reservations**, **revenue**, **payments**, **room status**, **exceptions**, **reports**, and **guest ledger** for that date.

## Tabs and Summaries

### Overview

High-level totals: room revenue, other revenue, payments, occupancy, etc., for the audit date.

### Reservations

Reservations that were in-house or otherwise included in that audit run (arrivals, departures, stayovers).

### Revenue

Revenue breakdown by type (e.g. room, tax, other). Used to verify totals.

### Payments

Payments posted on that date or linked to the audit. Helps reconcile front office and cashier.

### Room Status

Snapshot of room status (e.g. occupied, vacant, out of order) at audit time.

### Exceptions

Items that need attention, for example:

- Folios with **balance** (guest balance not zero)
- **High balance** or **credit** limits
- **Missing** or **invalid** data
- **Rate** or **posting** issues

Resolve exceptions as per your policy; some systems allow marking an exception as “resolved” with a note.

### Reports

Lists **night audit reports** generated for that run (e.g. daily summary, revenue, occupancy). Open or export as configured.

### Guest Ledger

Guest ledger view for the audit date: charges and payments per reservation/guest.

## System Date

Night audit usually **advances the system (business) date** to the next day. That date is used as “today” for:

- New reservations and searches
- Rate and availability
- Reporting

The **Dashboard** and **System Date** widget show the current business date when your property uses it.

## Best Practices

- Run night audit **once per day** after all front office and cashier activity for that date is done.
- **Reconcile** cashier shifts and folios before running.
- **Review exceptions** and fix critical items before closing the date.
- **Back up** or export audit reports if required for accounting or compliance.

## Common FAQs

**Why don't I see the Night Audit menu?**  
Your user may not have night audit permission. Ask your administrator to grant access so you can run night audit and view runs and reports.

**When should I run night audit?**  
Run it **once per day**, after all front-office and cashier activity for that business date is done. Reconcile cashier shifts and fix critical exceptions before running.

**What happens to the system date when I run night audit?**  
Night audit usually **advances the system (business) date** to the next day. That date becomes “today” for new reservations, rates, and reporting. The Dashboard shows the current business date when your property uses it.

**Can I run night audit more than once for the same date?**  
Typically no. One audit run per property per business date is the norm. Running again may overwrite or conflict. If you must re-run, follow your property’s procedure and any vendor guidance.

**Where do I see exceptions before or after the run?**  
Open **Night Audit** and use the **Exceptions** tab (or the exceptions section of the run). Resolve critical items (e.g. open balances, invalid data) before closing the date, and document as per your policy.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Night audit fails or shows exceptions** | Open balances, invalid data, or missing room charges; cashier shifts not closed if required. | Resolve listed exceptions (post missing room charges, correct rates, close shifts). Fix critical items before running again. |
| **System date did not advance** | Run may have been in report-only or dry-run mode; or an error stopped the run. | Check the audit run status and logs. Ensure you ran the full night audit (not report-only). Re-run if allowed by your procedure. |
| **Room charges not posted** | Run failed before posting; or in-house reservations had no rate/room. | Fix exceptions and run again, or use **Post Room Charge** from Night Audit or Cashiering for the relevant date. Ensure in-house reservations have rate and room. |
| **Cannot open a past audit run** | Permission or date range may restrict which runs you see. | Confirm you have permission to view night audit runs. If filtered by date, adjust the filter to include that run. |
| **Reports empty or wrong totals** | Wrong audit run or business date selected; or data not yet generated. | Pick the correct audit run or business date for the report. Ensure the run completed successfully before opening reports. |

For login, permissions, wrong property, and other general issues, see [Troubleshooting](/docs/general/troubleshooting).

## See also

- [Cashiering](/docs/operations/cashiering/overview) — Close **cash register** shifts and reconcile **folio**s before night audit; Post Room Charge from [Transaction](/docs/operations/cashiering/transaction) if needed.
- [Reports](/docs/operations/reports/overview) — [Night Audit reports](/docs/operations/reports/night-audit) (daily summary, revenue, guest ledger, **folio** data) and [Billing](/docs/operations/reports/billing) for revenue and balances.
- [Reservations](/docs/operations/reservations/overview) / [Front Desk](/docs/operations/front-desk/overview) — In-house reservations and room/rate data feed room charges and audit reports.
- [Configuration overview](/docs/configuration/overview) — System date, transaction codes, and audit settings under System Settings.
