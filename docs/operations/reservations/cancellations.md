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

Cancellation reasons are configured in [Configuration → Reservation Setup → Cancellation Reasons](/docs/configuration/reservation-setup/cancellation-reasons).

:::caution
Cancellation cannot be undone. If you need to reinstate a cancelled reservation, create a new one.
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

- [All Reservations](/docs/operations/reservations/list) — Cancel from the reservation detail.
- [Reservations Overview](/docs/operations/reservations/overview) — Statuses and workflow.
- [Configuration → Cancellation Reasons](/docs/configuration/reservation-setup/cancellation-reasons) — Set up cancellation reason codes.
