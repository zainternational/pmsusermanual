---
sidebar_position: 5
---

# Room Routing

**Room Routing** (also called Room Routing History) shows all routing rules that have been set up across reservations for a selected date range. It is used to review and audit how charges are being routed between rooms, folios, or payers.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or [Cashiering Overview](/docs/operations/cashiering/overview) for cashier-related issues.
:::

## Access

From the sidebar: **Cashiering** → **Room Routing**. You must have the **Manage Room Routing** permission. Complete **Cash Register Login** first if prompted.

## Filters

| Filter | Description |
|--------|-------------|
| Date Range | Business date range to search routing records. Defaults to the current business date. |
| Room | Filter by a specific room number. |

Filters apply automatically as you change them (with a short debounce delay).

## What the List Shows

The routing list displays all routing rules that match the selected filters. Each row shows the source reservation/room and the target (where charges are being routed to), along with the routing code and applicable transaction codes.

Routing rules are set up per reservation from the **Transaction** screen (folio routing/split). This screen gives a property-wide view across all reservations.

## Routing in the Transaction Screen

Routing is configured per reservation from **Cashiering → Transaction**. When you open a reservation's folio, you can:

- Add a routing rule to send specific charges to another room, folio, or payer (e.g. company, travel agent)
- Specify which transaction codes are routed
- Set a routing code that determines the routing behaviour

The Room Routing History page is a read-only overview of all active routing rules across the property.

## Common FAQs

**Why is the list empty?**
No routing rules have been set up for the selected date range and room filter. Routing rules are created per reservation from the Transaction screen.

**Who can access Room Routing?**
Users with the **Manage Room Routing** permission. Ask your administrator to grant this if you need access.

**How do I set up routing for a reservation?**
Open the reservation in **Cashiering → Transaction**, then use the routing/split folio section to add a routing rule.

## See also

- [Transaction](/docs/operations/cashiering/transaction) — Where routing rules are created per reservation (folio routing/split).
- [Journal by Transaction](/docs/operations/cashiering/journal-by-transaction) — Detailed view of all posted items and payments.
- [Cashiering Overview](/docs/operations/cashiering/overview) — Overview of all cashiering screens.
- [Configuration → Routing Codes](/docs/configuration/cashiering-setup/routing-codes) — Set up routing codes used in routing rules.
