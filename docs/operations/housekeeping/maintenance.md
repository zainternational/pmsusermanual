---
sidebar_position: 4
---

# Maintenance

The **Maintenance** tab is used to log and track maintenance tasks for rooms that are out of order. Each maintenance record is linked to an out-of-order room and assigned to engineering staff.

:::tip **Having a problem?**
See [Housekeeping Overview](/docs/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Maintenance** tab.

## Summary Cards

At the top, summary cards show maintenance record counts by status (Pending, In Progress, Completed).

## Relationship to Out of Order

Maintenance records are linked to **Out of Order** rooms. A room must have an active Out of Order record before it can be selected for a maintenance task. This ensures maintenance is only logged for rooms that are actually taken out of service.

## Creating a Maintenance Task

Click **Add Maintenance Task**. The form has the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| Out of Order Room | Yes | Select the room from the list of currently out-of-order rooms. Only rooms with active OOO records appear. |
| Title | Auto | Auto-filled from the out-of-order reason of the selected room. Read-only. |
| Maintenance Status | Auto | Shows current status (Pending/Completed). Read-only. |
| Maintenance Type | No | Type of maintenance work — from [Maintenance Types](/docs/configuration/housekeeping-setup/management-types) setup. |
| Priority | Yes | Low / Medium / High / Urgent / Critical. |
| Assigned To | No | Select one or more engineering staff members. Only users in the **Engineering (ENG)** department are shown. |
| Remarks | No | Notes about the maintenance work required or completed. |

Click **Create Task** to save.

:::note
If no out-of-order rooms appear in the dropdown, either all OOO rooms already have pending maintenance tasks, or no rooms are currently marked as out of order. Go to the [Out of Order](/docs/operations/housekeeping/out-of-order) tab to check.
:::

## Editing a Maintenance Task

Click the **Edit** icon on a record row. The same fields are available. Click **Save Changes** to update.

## Completing a Maintenance Task

Click the **Complete** button on a record row to mark the maintenance as done. A completion form may appear to record the completion date and any final notes.

## Viewing Maintenance Details

Click the **View** icon on a record row to open the maintenance detail modal showing all information in read-only format.

## Table Columns

Typical columns: Room Number, Title (OOO Reason), Maintenance Type, Priority, Status, Assigned To, Remarks, Created Date.

## Common FAQs

**No rooms appear in the Out of Order Room dropdown.**
Either no rooms are currently marked as out of order, or all OOO rooms already have a pending maintenance task. Check the Out of Order tab and ensure rooms are marked OOO before creating maintenance tasks.

**No staff appear in the Assigned To dropdown.**
Only users in the **Engineering (ENG)** department are shown. Ask your administrator to assign the ENG department code to engineering staff in Configuration → General Setup → Users.

**What happens to the maintenance record when the OOO room is returned to service?**
The maintenance record remains in the history. The room's OOO status is cleared separately from the [Out of Order](/docs/operations/housekeeping/out-of-order) tab using the Return to Service action.

## See also

- [Out of Order](/docs/operations/housekeeping/out-of-order) — Mark rooms as OOO before creating maintenance tasks; return rooms to service after maintenance.
- [Room Status](/docs/operations/housekeeping/room-status) — Room status reflects OOO/OOS while maintenance is in progress.
- [Configuration → Maintenance Types](/docs/configuration/housekeeping-setup/management-types) — Set up maintenance type codes.
- [Configuration → Out of Order Reasons](/docs/configuration/housekeeping-setup/out-of-order-reasons) — Set up OOO reason codes used as the maintenance title.
