---
sidebar_position: 4
---

# Housekeeping Report

The **Housekeeping Report** shows the current room status across the property, along with optional sections for out-of-order rooms, maintenance records, lost & found records, and housekeeping tasks.

:::tip **Having a problem?**
See the main [Troubleshooting](/docs/general/troubleshooting) page for general issues, or the [Reports Overview](/docs/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Housekeeping**.

## Filters

### Basic Filters

| Filter | Description |
|--------|-------------|
| Room Status | Filter by housekeeping status: Clean, Dirty, Inspected, Pickup. |
| FO Status | Filter by front office status: Vacant or Occupied. |
| Reservation Status | Filter by reservation status: Not Reserved, Reserved, Checked In, Checked Out. |
| Floor | Filter by floor. |

### Advanced Filters

Click **Show Advanced** to reveal:

| Filter | Description |
|--------|-------------|
| Room Type | Filter by room type. |
| Include Out of Order | Yes / No — include OOO/OOS rooms section. Default: Yes. |
| Include Maintenance | Yes / No — include maintenance records section. Default: Yes. |
| Include Lost & Found | Yes / No — include lost & found records section. Default: Yes. |
| Include Tasks | Yes / No — include housekeeping tasks section. Default: Yes. |

## Report Sections

### Room Status

All rooms matching the selected filters.

| Column | Description |
|--------|-------------|
| Room Number | Room number. |
| Room Type | Room type name. |
| Floor | Floor name. |
| FO Status | Front office status (Vacant / Occupied). |
| Reservation Status | Whether the room is reserved, checked in, etc. |
| Room Status | Housekeeping status (Clean, Dirty, Inspected, Pickup, OOO, OOS). |

### Out of Order Rooms

Active out-of-order and out-of-service records (shown when **Include Out of Order** is Yes).

| Column | Description |
|--------|-------------|
| Room Number | Room number. |
| OOO Status | Out of Order or Out of Service. |
| Reason | OOO reason name. |
| From Date | Start date of the OOO period. |
| To Date | Expected end date (if set). |
| Return Date | Actual return date (if returned). |
| Return Status | Housekeeping status after return. |
| Remarks | Additional notes. |

### Maintenance Records

Room maintenance tasks (shown when **Include Maintenance** is Yes).

| Column | Description |
|--------|-------------|
| Room Number | Room number. |
| Title | Maintenance title (from OOO reason). |
| Maintenance Type | Type of maintenance work. |
| Priority | Low / Medium / High / Urgent / Critical. |
| Status | Pending or Completed. |
| Assigned To | Engineering staff assigned. |
| Completed Date | Date maintenance was completed. |
| Remarks | Notes. |

### Lost & Found Records

Track It / Lost & Found entries (shown when **Include Lost & Found** is Yes).

| Column | Description |
|--------|-------------|
| Item Name | Name of the found item. |
| Group | Track It group. |
| Type | Track It type. |
| Action | Action taken (e.g. Found, Returned). |
| Location | Where the item was found. |
| Quantity | Number of items. |
| Date | Date the item was found. |
| Description | Detailed description. |

### Tasks

Housekeeping tasks (shown when **Include Tasks** is Yes).

| Column | Description |
|--------|-------------|
| Room Numbers | Rooms the task applies to. |
| Task Type | Type of housekeeping task. |
| Priority | Task priority. |
| Status | Pending / In Progress / Completed / Cancelled. |
| Assigned To | Housekeeping staff assigned. |
| Due Date | Target completion date. |
| Completed Date | Actual completion date. |
| Description | Task description. |

## Export

Use the export button (if available) to download as Excel or PDF.

## See also

- [Housekeeping](/docs/operations/housekeeping/overview) — Room status, tasks, lost & found, maintenance, out-of-order.
- [Reports Overview](/docs/operations/reports/overview) — How to run and export reports.
