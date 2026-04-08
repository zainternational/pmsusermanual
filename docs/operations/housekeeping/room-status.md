---
sidebar_position: 1
---

# Room Status

The **Room Status** tab shows the current housekeeping status of every room. Use it to see which rooms are ready to sell, need cleaning, or are out of order — and to update statuses in bulk.

:::tip **Having a problem?**
See [Housekeeping Overview](/docs/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Room Status** tab.

## Status Summary Cards

At the top of the tab, summary cards show counts for each status category across all rooms. This gives a quick occupancy and cleanliness snapshot.

## Room Status Values

| Status | Code | Meaning |
|--------|------|---------|
| Vacant Clean | VC | Room is empty and clean — ready to sell and assign. |
| Vacant Dirty | VD | Room is empty but needs cleaning before it can be sold. |
| Occupied Clean | OC | Guest is in-house; room has been cleaned. |
| Occupied Dirty | OD | Guest is in-house; room has not been cleaned yet. |
| Pick-up | PU | Room needs a quick service/pick-up (e.g. towels, trash). |
| Inspected | IN | Room has been inspected and approved by a supervisor. |
| Out of Order | OOO | Room is not available for sale (e.g. under repair). Driven by an active Out of Order record. |
| Out of Service | OOS | Room is temporarily withdrawn from inventory. Driven by an active Out of Order record with Out of Service status. |

Out of Order and Out of Service statuses are automatically applied when an active [Out of Order](/docs/operations/housekeeping/out-of-order) record exists for the room. When the OOO record is completed (returned to service), the room reverts to the return status set on that record.

## Filters and Search

- **Search** — Filter by room number, room type name, or floor name.
- **Floor filter** — Column filter in the table to show only specific floors.
- **Refresh** — Reload the latest room statuses from the server.

## Updating Room Status

You can update one or multiple rooms at once:

1. Select one or more rooms using the checkboxes in the table.
2. Click **Update Selected (N)** — the count shows how many rooms are selected.
3. In the **Update Room Status** modal, choose the new status:
   - Clean
   - Dirty
   - Inspected
   - Pickup
4. Click **Update Rooms**. All selected rooms are updated simultaneously.

:::note
The update modal only shows housekeeping statuses (Clean, Dirty, Inspected, Pickup). Out of Order and Out of Service are managed from the [Out of Order](/docs/operations/housekeeping/out-of-order) tab.
:::

## Table Columns

Typical columns: Room Number, Floor, Room Type, FO Status (Front Office), Reservation Status, Housekeeping Status, Last Updated.

## Integration with Front Desk

Room status directly affects check-in availability. A room must be **Vacant Clean** (or equivalent ready status) before a guest can be checked in from Front Desk or Reservations. After checkout, the room automatically becomes **Vacant Dirty** — housekeeping staff update it to Clean after servicing.

## See also

- [Out of Order](/docs/operations/housekeeping/out-of-order) — Mark rooms as OOO/OOS; drives the OOO status shown here.
- [Tasks](/docs/operations/housekeeping/tasks) — Assign cleaning tasks to attendants.
- [Room Chart](/docs/operations/housekeeping/room-chart) — Visual floor-by-floor status grid.
- [Front Desk → Room Plan](/docs/operations/front-desk/room-plan) — Room plan uses housekeeping status for availability.
- [Configuration → Housekeeping Setup](/docs/configuration/housekeeping-setup/overview) — Room status codes, sections, attendants.
