---
sidebar_position: 2
---

# Tasks

The **Tasks** tab is used to create, assign, update, and complete housekeeping tasks. Tasks are linked to specific rooms and assigned to housekeeping staff.

:::tip **Having a problem?**
See [Housekeeping Overview](/docs/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Tasks** tab.

## Task Summary Cards

At the top, summary cards show task counts by status: Pending, In Progress, Completed, Cancelled.

## Filters

| Filter | Description |
|--------|-------------|
| Search | Filter by room number, task type, or assignee name. |
| Status | Filter by task status (Pending, In Progress, Completed, Cancelled). |
| Priority | Filter by priority level (Low, Medium, High, Urgent). |
| Refresh | Reload the latest task data. |

## Creating a Task

Click **Create Task**. The Create Task modal has the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| Floor | Yes | Select one or more floors. Defaults to all floors. Filters the Room dropdown. |
| Room | Yes | Select one or more rooms from the filtered list. |
| Task Type | Yes | Type of task — from [HK Task](/docs/configuration/housekeeping-setup/tasks) setup. |
| Priority | Yes | Low / Medium / High / Urgent. |
| Assign To | No | Select one or more housekeeping staff members to assign the task to. Only users in the Housekeeping department are shown. |
| Due Date | No | Target completion date. |
| Description | No | Additional details about the task. |

Click **Create Task** to save. The task is created with status **Pending**.

## Updating a Task

Click the **Edit** (pencil) icon on a task row. The Update Task modal has the same fields as Create, plus:

| Field | Description |
|-------|-------------|
| Status | Change the task status: Pending / In Progress / Completed / Cancelled. |
| Notes | Additional notes added during or after the task. |

Click **Update Task** to save.

## Assigning a Task

Click the **Assign** button on a task row to open the Assign Task modal. Select one or more housekeeping staff members and save. This updates the assigned users without changing other task details.

## Completing a Task

Click the **Complete** button on a task row to mark it as completed immediately. A confirmation is not required — the task status changes to **Completed** and the completion date is recorded.

## Deleting a Task

Click the **Delete** (trash) icon on a task row. A confirmation dialog shows the room(s), task type, and priority before deletion. Deletion cannot be undone.

## Viewing Task Details

Click the **task type name** in the table to open the Task Detail modal, which shows all task information in a read-only view.

## Task Statuses

| Status | Meaning |
|--------|---------|
| Pending | Task created but not yet started. |
| In Progress | Task is being worked on. |
| Completed | Task is done; completion date recorded. |
| Cancelled | Task was cancelled. |

## Priority Levels

Low → Medium → High → Urgent. Use Urgent for tasks that must be done immediately (e.g. VIP arrival room).

## Common FAQs

**Why are no staff members showing in the Assign To dropdown?**
Only users in the **Housekeeping** department are shown. Ask your administrator to assign the correct department to housekeeping staff in Configuration → General Setup → Users.

**Can I assign a task to multiple rooms at once?**
Yes — select multiple rooms in the Floor/Room multi-select when creating the task. One task record is created per room.

**Can I assign a task to multiple staff members?**
Yes — the Assign To field supports multi-select.

## See also

- [Room Status](/docs/operations/housekeeping/room-status) — Update room status after task completion.
- [Configuration → HK Tasks](/docs/configuration/housekeeping-setup/tasks) — Set up task type codes.
- [Configuration → HK Sections](/docs/configuration/housekeeping-setup/sections) — Floor/section setup.
- [Configuration → HK Attendants](/docs/configuration/housekeeping-setup/attendances) — Housekeeping staff setup.
