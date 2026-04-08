---
sidebar_position: 4
---

# Journal by Transaction

**Journal by Transaction** provides a detailed view of all billing items and payments posted within a cash register session or date range. It is used to audit and reconcile transactions across reservations, cashiers, and room types.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or [Cashiering Overview](/docs/operations/cashiering/overview) for cashier-related issues.
:::

## Access

From the sidebar: **Cashiering** → **Journal by Transaction**. You must complete **Cash Register Login** first if prompted.

## Filters

| Filter | Description |
|--------|-------------|
| Date Range | Start and end date for the journal. Defaults to the current business date. |
| Room Class | Filter by room class. |
| Room Type | Filter by room type (narrows when room class is selected). |
| Room | Filter by a specific room number. |
| Cashier | Filter by a specific cash register user, or view all. |
| Group By | Group results by Reservation No, Cashier, Transaction Code, or Room No. |
| Columns | Toggle which columns are visible in the table. |

## Tabs

The journal is split into four tabs:

| Tab | Description |
|-----|-------------|
| Items | All active (non-voided) billing charges posted in the selected range. |
| Payments | All active (non-voided) payments posted in the selected range. |
| Voided Items | Charges that have been voided. Shown in red. |
| Voided Payments | Payments that have been voided. Shown in red. |

Each tab shows a count of records in its label.

## Grouping

When **Group By** is set to anything other than "No Grouping", the table switches to a tree/grouped view. Each group can be expanded to see individual transactions within it.

Available groupings:
- **No Grouping** — flat list, sorted by reservation then transaction code and date
- **Group by Reservation No** — one group per reservation
- **Group by Cashier** — one group per cash register user
- **Group by Transaction Code** — one group per transaction code
- **Group by Room No** — one group per room

## Columns

Typical columns for Items include: reservation ID, room number, guest name, transaction code, description, quantity, unit price, total amount, business date, posted date, cashier.

Typical columns for Payments include: reservation ID, room number, guest name, payment code, amount, business date, cashier.

Use the **Columns** toggle to show or hide specific columns. Your column preferences are saved per browser session.

## Common FAQs

**Why don't I see any data?**
Check that the date range is correct and that transactions were posted on those dates. If filtering by cashier, ensure the correct cashier is selected.

**What is the difference between Items and Voided Items?**
Items shows active charges. Voided Items shows charges that were voided — they are still recorded for audit purposes but do not count toward the guest balance.

**Can I export the journal?**
Export functionality depends on your configuration. Check for an export button on the page.

## See also

- [Transaction](/docs/operations/cashiering/transaction) — Post charges and payments on individual folios.
- [Cashier Shift](/docs/operations/cashiering/cashier-shift) — Open and close shifts; reconcile daily activity.
- [Room Routing](/docs/operations/cashiering/room-routing) — View and manage routing rules across reservations.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment reports by date range.
- [Night Audit](/docs/operations/night-audit) — Close the business date after reconciling cashier activity.
