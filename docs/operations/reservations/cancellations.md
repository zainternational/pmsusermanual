---
sidebar_position: 5
---

# Cancellations

The **Cancellations** view lists all cancelled reservations. Use it to review cancellation history, filter by reason or date, and manage cancellation records.

## Access

From the sidebar: **Reservation** → **Cancellations** tab.

## What You See

Cancelled reservations with these columns:

| Column | Description |
|--------|-------------|
| Reservation ID | The cancelled reservation's ID. |
| Guest Name | Name on the cancelled booking. |
| Email | Guest email — used as the default recipient when emailing the cancellation letter. |
| Room Type | Room type of the original booking. |
| Arrival / Departure | The original stay dates. |
| Cancellation Reason | The reason chosen when cancelling. |
| Note | Free-text note entered with the cancellation. |
| Cancelled By | The user who cancelled the reservation. |
| Cancelled At | Date and time of the cancellation. |
| Actions | View the cancellation letter, or delete the record (permission-controlled). |

## Cancellation Letter

Click the view action on a cancellation row to open the **Cancellation Letter** — a printable confirmation that the booking was cancelled, generated from the reservation's details.

From the preview window you can:

| Action | Description |
|--------|-------------|
| Print | Opens the print dialog for the letter. |
| Download | Saves the letter as a PDF. |
| Email | Opens a compose window with the guest's email address and a cancellation subject pre-filled, and attaches the letter as a PDF. Edit the recipient, subject, or message before sending. |
| Close | Closes the preview without sending anything. |

Send the letter to the guest when they ask for written confirmation of a cancellation, or keep a printed copy for the property's records.

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

## Searching Cancellations

The Cancellations tab has a single **Search cancellations…** box above the list. Typing filters the list across the cancellation records — use it to find a booking by reservation ID or guest name. There are no separate date, reason, or room-type filter dropdowns on this tab.

Use the column toggle beside the search box to hide columns you don't need — see [Screen Basics](/general/screen-basics#showing-and-hiding-table-columns).

## See also

- [All Reservations](/operations/reservations/list) — Cancel from the reservation detail.
- [Reservations Overview](/operations/reservations/overview) — Statuses and workflow.
- [Configuration → Cancellation Reasons](/configuration/reservation-setup/cancellation-reasons) — Set up cancellation reason codes.
