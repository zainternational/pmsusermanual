---
sidebar_position: 3
---

# Checked-Out

The **Checked-Out** list shows all reservations that have been checked out. Use it to review departure history, open folios for post-checkout adjustments, and move reservations back to in-house if a checkout was made in error.

:::tip **Having a problem?**
See [Troubleshooting](#troubleshooting) below or the main [Troubleshooting](/docs/general/troubleshooting) page.
:::

## Access

From the sidebar: **Front Desk** → **Checked-Out**.

## Filters

The same filter set as In-House is available:

| Filter | Description |
|--------|-------------|
| Search | Free-text search across guest name, reservation ID, room number. |
| Arrival Date | Filter by original arrival date range. |
| Departure Date | Filter by departure date range. |
| Reservation Status | Filter by status. |
| Reservation ID | Filter by specific reservation number. |
| Group ID | Filter by group booking ID. |
| Guest Name | Filter by guest name. |
| Company Name | Filter by company profile. |
| Travel Agent Name | Filter by travel agent profile. |
| Room Type | Filter by room type. |

## Table Columns

Same configurable columns as In-House. Use the **Columns** toggle to show or hide specific columns.

## Row Actions

| Action | Description |
|--------|-------------|
| Open Reservation | Navigate to the full reservation detail page. |
| Open Folio | Open the guest's folio in Cashiering → Transaction for post-checkout review or adjustments. |
| Billing | Open a quick billing modal. |
| Alerts | View reservation alerts. |
| Comments | View and add internal comments. |
| Messages | View and add guest-facing messages. |
| Deposit Ledger | View the deposit ledger (requires Deposit Ledger permission). |
| Move Back to In-House | Undo a checkout — moves the reservation back to In-House status. Requires `move_back_reservation` permission. |

## Moving Back to In-House

If a checkout was processed in error:

1. Find the reservation in the Checked-Out list.
2. Click **Move Back to In-House**.
3. A confirmation dialog shows the room and guest name.
4. Confirm. The reservation status returns to **In-House** and it reappears in the In-House list.

This action requires the **Move Back Reservation** permission. Ask your administrator if the option is not visible.

## Post-Checkout Folio Access

After checkout, the folio remains accessible from the Checked-Out list. Use **Open Folio** to:
- Review charges and payments
- Post any missed charges (if your property allows post-checkout posting)
- Print a final folio for the guest

## Group Reservations

Group reservations are shown together with expand/collapse controls, same as In-House.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Checked-Out list is empty** | Date filter may be excluding the records you need. | Widen the departure date range filter. Checked-out records are filtered by departure date by default. |
| **Cannot move back to in-house** | Missing permission or the room is now occupied by another guest. | Confirm you have `move_back_reservation` permission. Check if the room has been reassigned to another reservation. |
| **Folio shows wrong balance after checkout** | Post-checkout charges or adjustments may have been made. | Open the folio in Cashiering → Transaction to review all items and payments. |

## See also

- [In-House](/docs/operations/front-desk/in-house) — Currently checked-in guests.
- [Room Plan](/docs/operations/front-desk/room-plan) — Room availability calendar.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Post-checkout folio access.
- [Billing Reports](/docs/operations/reports/billing) — Revenue and payment reports including checked-out folios.
