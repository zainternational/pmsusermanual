---
sidebar_position: 0
---

# Housekeeping Overview

The **Housekeeping** module is used to track room status, assign tasks, manage lost & found, maintenance, and out-of-order rooms. In the app, the main screen is **Housekeeping Management**, with **tabs** for each area.

:::tip **Having a problem?**  
This page has [Common FAQs](#common-faqs) and [Troubleshooting](#troubleshooting) below. For issues in other modules, see the main [Troubleshooting](/docs/general/troubleshooting) page — it links to module-specific FAQs and troubleshooting sections.
:::

| Tab / Screen | Purpose |
|--------------|---------|
| [Room Status](/docs/operations/housekeeping/room-status) | Status of each room (Vacant Clean/Dirty, Occupied Clean/Dirty, Pick-up, Inspected, Out of Order, Out of Service). |
| [Tasks](/docs/operations/housekeeping/tasks) | Housekeeping tasks and assignments; assign to attendants or sections. |
| [Lost & Found](/docs/operations/housekeeping/lost-and-found) | Register and manage lost and found items. |
| [Maintenance](/docs/operations/housekeeping/maintenance) | Maintenance requests or room maintenance status. |
| [Out of Order](/docs/operations/housekeeping/out-of-order) | Rooms marked out of order; add/edit/end. |

## Access

From the sidebar, click **Housekeeping**. The main screen is **Housekeeping Management**. What you see depends on **user permissions**.

## Notifications

The PMS can show notifications for new lost & found, room status changes, maintenance, tasks, and out of order. Use the **notification bell** (if available) to open and act on them. Some notifications deep-link to the relevant housekeeping tab.

## Common FAQs

**Why don't I see the Housekeeping menu?**  
Your user may not have housekeeping permission (room status, tasks, lost & found, maintenance, out-of-order). Ask your administrator to grant access.

**What does Vacant Clean vs Vacant Dirty mean?**  
**Vacant Clean** means the room is ready to sell (cleaned, no guest). **Vacant Dirty** means the room is empty but needs cleaning before it can be sold or assigned.

**Where do I add a lost & found item?**  
Go to **Housekeeping** → **Lost & Found** tab. Use **Add** or **Register** to enter room, date, description, and location. Link to a lost & found reason if configured.

**How do I mark a room Out of Order?**  
Go to **Housekeeping** → **Out of Order** tab. Add the room and optional dates/reason. The room is excluded from availability until you end or clear the out-of-order record.

**Can I assign a housekeeping task to a specific attendant?**  
Yes, if your property uses housekeeping tasks and attendances. In the **Tasks** tab, create or open a task, assign it to an attendant or section, and set status (in progress, done). Task types are defined in Configuration → HouseKeeping & Maintenance.

## Troubleshooting

| Problem | Cause | Solution |
|--------|--------|----------|
| **Room status not updating** | Page not refreshed; or you lack permission to change that room. | Refresh the page. Confirm you have permission to change room status for that room or section. |
| **Lost & found or maintenance not saving** | Required fields (e.g. reason, location) missing; or related setup not configured. | Fill all required fields. Ensure lost & found reasons, locations, or maintenance types exist in Configuration → HouseKeeping & Maintenance. |
| **Cannot change room to Vacant Clean** | Room may be occupied or in a status that blocks the change. | Ensure the guest has checked out and the room is vacant. Use the correct status transition per your property's workflow. |
| **Out-of-order room still shows as available** | Out-of-order record ended or not applied for the dates you are viewing. | Check Out of Order list; add or edit the record so it covers the dates and property you need. |
| **Tasks tab empty or missing** | Housekeeping tasks or attendances not configured; or you lack task permission. | Ask your administrator to set up housekeeping tasks and attendances in Configuration. Confirm your role can view/assign tasks. |

For general issues, see [Troubleshooting](/docs/general/troubleshooting).

## See also

- [Reservations](/docs/operations/reservations/overview) — Room assignment and status affect availability and check-in.
- [Front Desk](/docs/operations/front-desk/overview) — Room plan and check-in use housekeeping status (e.g. Vacant Clean) when assigning rooms.
- [Configuration overview](/docs/configuration/overview) — HouseKeeping & Maintenance setup (sections, tasks, attendances, lost & found reasons, out-of-order rules).
