---
sidebar_position: 2
---

# In-House

The **In-House** list shows all reservations currently checked in. Use it to find guests, open folios, process check-outs, move rooms, and manage alerts, comments, and messages.

:::tip **Having a problem?**
See [Troubleshooting](#troubleshooting) below or the main [Troubleshooting](/docs/general/troubleshooting) page.
:::

## Access

From the sidebar: **Front Desk** → **In-House**.

## Filters

| Filter | Description |
|--------|-------------|
| Search | Free-text search across guest name, reservation ID, room number. |
| Arrival Date | Filter by arrival date range. |
| Departure Date | Filter by departure date range. |
| Reservation Status | Filter by status (In-House, etc.). |
| Reservation ID | Filter by specific reservation number. |
| Group ID | Filter by group booking ID. |
| Guest Name | Filter by guest name. |
| Company Name | Filter by company profile. |
| Travel Agent Name | Filter by travel agent profile. |
| Room Type | Filter by room type. |

Click **Clear Filters** to reset all filters at once.

## Table Columns

Columns are configurable — use the **Columns** toggle to show or hide specific columns. Typical columns include:

- Reservation ID, Guest Name, Room Number, Room Type
- Arrival Date, Departure Date, Nights
- Status, Reservation Type
- Rate Amount, Market, Source
- Company, Travel Agent
- Alerts, Comments, Messages (count badges)

## Row Actions

Each reservation row has action buttons (visible on hover or in the action menu):

| Action | Description |
|--------|-------------|
| Open Reservation | Navigate to the full reservation detail page. |
| Check Out | Check out the guest. Shows a confirmation dialog with room and guest name. If the reservation has Check Out alerts, they are shown first. |
| Room Move | Move the guest to a different room of the same type (see [Room Move](#room-move) below). |
| Open Folio | Open the guest's folio in Cashiering → Transaction. |
| Billing | Open a quick billing modal for the reservation. |
| Alerts | View and manage reservation alerts. |
| Comments | View and add internal comments. |
| Messages | View and add guest-facing messages. |
| Deposit Ledger | View the deposit ledger (requires Deposit Ledger permission). |
| Move Back to Arrival | Undo a check-in — moves the reservation back to Reserved/Arrival status. Only allowed if the folio has no charges or payments. |
| Cancel | Cancel the reservation. Only allowed if the folio has no charges or payments. |

## Check Out

To check out a guest:

1. Click **Check Out** on the reservation row.
2. If the reservation has **Check Out alerts**, a modal shows them first — review and close.
3. A confirmation dialog shows the room number and guest name.
4. Confirm. The status changes to **Checked Out** and the reservation moves to the Checked-Out list.
5. The room status updates to **Vacant Dirty** — housekeeping will clean it.

:::caution
Settle the folio balance before checking out. An outstanding balance does not block checkout but should be resolved per your property's policy.
:::

## Room Move

To move an in-house guest to a different room:

1. Click **Room Move** on the reservation row.
2. **Step 1** — Optionally update the status of the room the guest is leaving (Clean, Dirty, Inspected, Pickup). This is optional; skip to go straight to step 2.
3. **Step 2** — Select the destination room. Only rooms of the **same room type** as the current room are shown. Only vacant/available rooms appear.
4. Click **Move to room**. The reservation is updated, the old room status is set to Vacant, and the new room status is set to Occupied.

:::note
Room Move only works within the same room type. To move a guest to a different room type, edit the reservation directly.
:::

## Group Reservations

Reservations belonging to a group are shown together. Use **Expand All** / **Collapse All** to toggle group rows. Group ID and group name are shown in the group header row.

## Alerts on Check Out

If a reservation has alerts configured to display at **Check Out**, they appear in a read-only modal before the checkout confirmation. Review the alerts and close the modal to proceed with checkout.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **In-House list is empty** | Filter or permission issue. | Check date range and filters. Confirm your user has permission to view in-house reservations. |
| **Cannot check out — folio has charges** | The system warns but does not block checkout. | Settle the folio in Cashiering → Transaction before checking out, per your property's policy. |
| **Cannot cancel — reservation has charges** | Cancellation is blocked when the folio has items or payments. | Void or settle all transactions first, then cancel. |
| **Cannot move back to arrival — has charges** | Move back is blocked when the folio has items or payments. | Void or settle all transactions first, then move back. |
| **Room Move shows no destination rooms** | No vacant rooms of the same type are available. | Check room availability in Housekeeping → Room Status or Room Chart. |

## See also

- [Checked-Out](/docs/operations/front-desk/checked-out) — Departed guests.
- [Room Plan](/docs/operations/front-desk/room-plan) — Calendar view of room availability.
- [Cashiering → Transaction](/docs/operations/cashiering/transaction) — Post charges and take payments on the folio.
- [Reservations → Departures](/docs/operations/reservations/departures) — Today's expected departures.
- [Housekeeping → Room Status](/docs/operations/housekeeping/room-status) — Room becomes Vacant Dirty after checkout.
