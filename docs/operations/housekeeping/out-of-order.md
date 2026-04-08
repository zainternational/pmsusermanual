---
sidebar_position: 5
---

# Out of Order

The **Out of Order** tab manages rooms that are taken out of sale — either fully out of order (OOO) or temporarily out of service (OOS). Out of order rooms are excluded from availability and shown with a special status in Room Status, Room Plan, and Room Chart.

:::tip **Having a problem?**
See [Housekeeping Overview](/docs/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Out of Order** tab.

## Summary Cards

At the top, summary cards show counts of active OOO/OOS records and completed (returned) records.

## Out of Order vs Out of Service

| Status | Meaning |
|--------|---------|
| Out of Order (OOO) | Room is not available for sale — typically due to repair or damage. |
| Out of Service (OOS) | Room is temporarily withdrawn from inventory — typically for refurbishment or deep cleaning. |

Both statuses block the room from being sold or assigned to a reservation.

## Creating an Out of Order Record

Click **Add Out of Order**. The form has the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| Room | Yes | Select the room to take out of order. Only rooms not already OOO are shown. |
| Out of Order Status | Yes | Out of Order or Out of Service. |
| Reason | Yes | Why the room is out of order — from [Out of Order Reasons](/docs/configuration/housekeeping-setup/out-of-order-reasons) setup. |
| From Date | Yes | Start date of the OOO period. Cannot be before the current business date. |
| To Date | No | Expected end date (optional). If not set, the room remains OOO until manually returned. |
| Remarks | No | Additional notes about the issue. |
| Return Status | No | The housekeeping status the room should have when returned to service (Clean, Dirty, Inspected, Pickup). |

Click **Create Record** to save. The room's status in Room Status immediately changes to OOO or OOS.

## Editing an Out of Order Record

Click the **Edit** icon on a record row to update the reason, dates, remarks, or return status. Click **Update Record** to save.

## Returning a Room to Service

When maintenance or refurbishment is complete, return the room to service:

1. Click the **Return** button on the OOO record row.
2. In the **Return Room to Service** modal:
   - **Return Date** (required) — The date the room is returned.
   - **Return Status** (required) — The housekeeping status after return: Clean, Dirty, Inspected, or Pickup.
3. Click **Return to Service**.

The OOO record is marked as completed. The room's status in Room Status updates to the selected return status, making it available for sale again.

## Effect on Room Status

When an active OOO record exists for a room:
- The room shows as **Out of Order** or **Out of Service** in the Room Status tab.
- The room is excluded from availability in Room Plan and Room Chart.
- The room cannot be assigned to a new reservation.

When the OOO record is completed (returned):
- The room reverts to the **Return Status** set on the record.
- The room becomes available for sale again.

## Table Columns

Typical columns: Room Number, Room Type, OOO Status, Reason, From Date, To Date, Return Date, Return Status, Remarks, Service Status (In Progress / Completed).

## Common FAQs

**The room I want to mark OOO is not in the dropdown.**
The room may already have an active OOO record. Check the table for an existing in-progress record for that room.

**The room is still showing as OOO after I returned it.**
Refresh the page. If it still shows OOO, check that the return record was saved correctly (service status should be Completed).

**Can I set a future From Date?**
Yes — the From Date can be today or any future date. The room will show as OOO from that date onwards.

**What if I don't set a To Date?**
The room remains OOO indefinitely until you manually use the Return to Service action.

## See also

- [Room Status](/docs/operations/housekeeping/room-status) — OOO/OOS status is reflected here; update room status after return.
- [Maintenance](/docs/operations/housekeeping/maintenance) — Log maintenance tasks for OOO rooms.
- [Room Chart](/docs/operations/housekeeping/room-chart) — OOO rooms are highlighted and excluded from walk-in/new reservation actions.
- [Front Desk → Room Plan](/docs/operations/front-desk/room-plan) — OOO rooms are excluded from availability.
- [Configuration → Out of Order Reasons](/docs/configuration/housekeeping-setup/out-of-order-reasons) — Set up OOO reason codes.
