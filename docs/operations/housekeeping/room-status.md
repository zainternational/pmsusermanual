---
sidebar_position: 1
---

# Room Status

The **Room Status** tab shows the current housekeeping status of every room. Use it to see which rooms are ready to sell, need cleaning, or are out of order — and to update statuses in bulk.

:::tip **Having a problem?**
See [Housekeeping Overview](/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Room Status** tab.

## Status Summary Cards

At the top of the tab, summary cards show counts for each status category across all rooms. This gives a quick occupancy and cleanliness snapshot.

## Room Status Values

A room's status is actually two independent fields, shown as separate columns on this tab:

| Field | Values | Meaning |
|-------|--------|---------|
| Housekeeping Status | Clean, Dirty, Inspected, Pickup | The cleaning state of the room, set by housekeeping staff. |
| FO Status (Front Office) | Vacant, Occupied | Whether a guest currently occupies the room — driven automatically by check-in/checkout, not manually editable here. |

On the [Room Chart](/operations/housekeeping/room-chart), these two fields are combined into a single quick-glance code for display purposes only (not a stored field):

| Code | Meaning | Derived from |
|------|---------|---------------|
| VC | Vacant Clean | FO Status = Vacant, Housekeeping Status = Clean or Inspected |
| VD | Vacant Dirty | FO Status = Vacant, Housekeeping Status = Dirty or Pickup |
| OC | Occupied Clean | FO Status = Occupied, Housekeeping Status = Clean or Inspected |
| OD | Occupied Dirty | FO Status = Occupied, Housekeeping Status = Dirty or Pickup |
| OOO | Out of Order | An active [Out of Order](/operations/housekeeping/out-of-order) record exists for the room. |
| OOS | Out of Service | An active Out of Order record with Out of Service status. |

Out of Order and Out of Service override the VC/VD/OC/OD codes on the Room Chart whenever an active OOO record exists for the room. When the OOO record is completed (returned to service), the room reverts to the return status set on that record.

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
The update modal only shows housekeeping statuses (Clean, Dirty, Inspected, Pickup). Out of Order and Out of Service are managed from the [Out of Order](/operations/housekeeping/out-of-order) tab.
:::

## Table Columns

Typical columns: Room Number, Floor, Room Type, FO Status (Front Office), Reservation Status, Housekeeping Status, Last Updated.

## Integration with Front Desk

Housekeeping status (Clean/Dirty/Inspected/Pickup) is informational for housekeeping staff — it does **not** block check-in or new bookings. A room does not need to be Vacant Clean to be checked in or reserved; only an active **Out of Order** or **Out of Service** record blocks a room from availability (see [Out of Order](/operations/housekeeping/out-of-order)).

Checking a guest in automatically sets the room's housekeeping status to **Clean**, regardless of its status beforehand — the system relies on housekeeping/front desk process to ensure the room is actually ready. After checkout, the room automatically becomes **Vacant Dirty** — housekeeping staff should update it to Clean after servicing, but this is an operational workflow rather than a system-enforced gate.

## See also

- [Out of Order](/operations/housekeeping/out-of-order) — Mark rooms as OOO/OOS; drives the OOO status shown here.
- [Tasks](/operations/housekeeping/tasks) — Assign cleaning tasks to attendants.
- [Room Chart](/operations/housekeeping/room-chart) — Visual floor-by-floor status grid.
- [Front Desk → Room Plan](/operations/front-desk/room-plan) — Room plan uses housekeeping status for availability.
- [Configuration → Housekeeping Setup](/configuration/housekeeping-setup/overview) — Room status codes, sections, attendants.
