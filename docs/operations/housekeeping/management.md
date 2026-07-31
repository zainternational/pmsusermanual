---
sidebar_position: 0
---

# Housekeeping Management

**Housekeeping Management** is the main housekeeping screen. It is a tabbed interface that brings together room status, tasks, lost & found, maintenance, and out-of-order management in one place.

:::tip **Having a problem?**
See [Housekeeping Overview](/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Management** (or just **Housekeeping** depending on your sidebar layout).

## Tabs

The management screen has the following tabs:

| Tab | Purpose |
|-----|---------|
| [Room Status](/operations/housekeeping/room-status) | View and update the cleaning/occupancy status of every room. |
| [Tasks](/operations/housekeeping/tasks) | Create, assign, and track housekeeping tasks. |
| [Lost & Found](/operations/housekeeping/lost-and-found) | Register and manage lost and found items. |
| [Maintenance](/operations/housekeeping/maintenance) | Log and track room maintenance requests. |
| [Out of Order](/operations/housekeeping/out-of-order) | Mark rooms out of order and manage OOO periods. |
| Post Article | Post chargeable articles (e.g. mini-bar, amenities) to an in-house guest's folio. Only shown if your user has post-article/view-article permission. |

Click a tab to switch between areas. Your active tab is highlighted.

## Room Status Tab

Shows all rooms with their current housekeeping status. Update a room's status directly from this tab — for example, mark a room as **Vacant Clean** after it has been serviced, or **Vacant Dirty** after a guest checks out.

See [Room Status](/operations/housekeeping/room-status) for full details.

## Tasks Tab

Create housekeeping tasks (e.g. deep clean, turndown, linen change) and assign them to attendants or sections. Track task progress (pending, in progress, completed).

See [Tasks](/operations/housekeeping/tasks) for full details.

## Lost & Found Tab

Register items found in rooms or public areas. Record the room, date found, description, and location. Link to a lost & found reason from configuration.

See [Lost & Found](/operations/housekeeping/lost-and-found) for full details.

## Maintenance Tab

Log maintenance issues for rooms (e.g. broken fixture, plumbing, electrical). Assign to engineering staff and track resolution status.

See [Maintenance](/operations/housekeeping/maintenance) for full details.

## Out of Order Tab

Mark rooms as out of order for a date range (e.g. renovation, major repair). Out-of-order rooms are excluded from availability and cannot be assigned to reservations.

See [Out of Order](/operations/housekeeping/out-of-order) for full details.

## Post Article Tab

The **Post Article** tab lets housekeeping (or front desk) staff post chargeable articles — such as mini-bar items or amenities — directly to an in-house guest's folio, without going through Cashier/Billing. This tab only appears if your user has permission to view or post articles.

To post an article:

1. Select an **Article Type** (the transaction-type grouping configured on each article's linked transaction code, e.g. Mini-Bar, Amenities).
2. Select the **In-House Room** — only rooms with a current in-house guest are listed. Selecting a room shows the guest's name, reservation status, current balance, and arrival/departure dates.
3. In the **Articles** panel, click **Add** (or the **+** button) on each article you want to charge, and use **+ / −** to set the quantity. Selected articles appear in the **Article Transaction** table on the right with code, description, quantity, unit price, and amount, plus running **Items** and **Total** counters.
4. Click **Post** to charge the selected articles to the guest's folio.

:::note
Each article must have a **Transaction Type** set on its linked transaction code (Configuration → Cashiering) before it can be posted. If an article is missing this, posting fails with a message telling you to set the Transaction Type on that article's transaction code.
:::

After posting, the cart clears and the article list refreshes so the same room can be charged again if needed.

## Notifications

The PMS sends notifications for housekeeping events — new lost & found items, room status changes, maintenance requests, and out-of-order updates. Use the **notification bell** in the top bar to view and act on them.

## Common FAQs

**Which tab should I use for a broken item in a room?**
Use the **Maintenance** tab to log the repair request. If the room needs to be taken out of service, also add an **Out of Order** record.

**How do I see all rooms that need cleaning?**
Go to the **Room Status** tab and filter by **Vacant Dirty** or **Occupied Dirty** status.

**Can I assign a task to a specific housekeeper?**
Yes — in the **Tasks** tab, create or open a task and assign it to an attendant. Attendants are configured in **Configuration → Housekeeping Setup → Attendances**.

## See also

- [Housekeeping Overview](/operations/housekeeping/overview) — Overview of all housekeeping screens.
- [Room Chart](/operations/housekeeping/room-chart) — Visual floor-by-floor room status grid.
- [Room Plan](/operations/housekeeping/room-plan) — Calendar grid for room availability.
- [Configuration → Housekeeping Setup](/configuration/housekeeping-setup/overview) — Sections, tasks, attendances, lost & found reasons, management types.
