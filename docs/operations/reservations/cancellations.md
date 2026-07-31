---
sidebar_position: 5
---

# Cancellations

The **Cancellations** view lists all cancelled reservations. Use it to review cancellation history, filter by reason or date, and manage cancellation records.

## Access

From the sidebar: **Reservation** → **Cancellations** tab.

## What You See

Cancelled reservations with:
- Reservation ID and guest name
- Original arrival and departure dates
- Cancellation date
- Cancellation reason
- Room type and rate

## Cancelling a Reservation

To cancel a reservation:

1. Open the reservation from the **All Reservations** list.
2. Click **Cancel** from the reservation actions.
3. A modal appears — select a **Cancellation Reason** from the dropdown.
4. Confirm. The status changes to **Cancelled** and the reservation moves to the Cancellations list.

Cancellation reasons are configured in [Configuration → Reservation Setup → Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons).

:::caution
Cancelling sets the reservation status to **Cancelled** and releases its room assignment. There is no "undo cancel" action that puts the reservation back to a bookable state. A user with the **Move Back Reservation** permission (`move_back_reservation`, shared with delete permissions) can delete the cancellation record from the Cancellations list, but this only removes the historical record — it does **not** automatically restore the reservation's status or room assignment. In practice, treat cancellation as final: create a new reservation instead of trying to reinstate a cancelled one.
:::

## Cancellation Reasons

Cancellation reasons are required when cancelling. Common examples:
- Guest Request
- No Show
- Duplicate Booking
- Rate Not Available
- Property Request

Add or manage reasons in **Configuration → Reservation Setup → Cancellation Reasons**.

## Filtering Cancellations

Use filters to narrow the list by:
- Date range (cancellation date or original arrival date)
- Cancellation reason
- Guest name or reservation ID
- Room type

## See also

- [All Reservations](/operations/reservations/list) — Cancel from the reservation detail.
- [Reservations Overview](/operations/reservations/overview) — Statuses and workflow.
- [Configuration → Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons) — Set up cancellation reason codes.
