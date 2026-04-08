---
sidebar_position: 3
---

# Lost & Found

The **Lost & Found** tab (also called Track It) is used to register found items, track their status, and record when they are returned or disposed of. It uses the Track It system which categorises items by group, type, action, and location.

:::tip **Having a problem?**
See [Housekeeping Overview](/docs/operations/housekeeping/overview) for common FAQs and troubleshooting.
:::

## Access

From the sidebar: **Housekeeping** → **Housekeeping Management** → **Lost & Found** tab.

## Summary Cards

At the top, summary cards show counts of lost & found records by status or category.

## Registering a Found Item

Click **Add** or **New Record**. The form has the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| Item Name | Yes | Name or description of the found item (e.g. "Black wallet", "iPhone charger"). |
| Group | No | Item category group — from [Track It Group](/docs/configuration/general-setup/trackit) setup. |
| Type | No | Item type within the group — from [Track It Type](/docs/configuration/general-setup/trackit) setup. |
| Action | Yes | What happened to the item — from [Track It Action](/docs/configuration/general-setup/trackit) setup (e.g. Found, Returned, Disposed). |
| Location | No | Where the item was found — from [Track It Location](/docs/configuration/general-setup/trackit) setup. |
| Quantity | No | Number of items (default 1). |
| Date | Yes | Date the item was found. Defaults to the current business date. Cannot be before the business date. |
| Description | No | Detailed description of the item (colour, brand, condition, etc.). |

Click **Create Record** to save.

## Editing a Record

Click the **Edit** icon on a record row to open the edit form with the same fields. Click **Update Record** to save changes.

## Searching and Filtering

Use the search bar to filter records by item name, location, or date. The table supports pagination for large numbers of records.

## Track It System

Lost & Found uses the **Track It** system, which is also used for other item tracking in the property. The four Track It reference tables are configured in **Configuration → General Setup → Track It**:

- **Track It Group** — Top-level category (e.g. Electronics, Clothing, Documents).
- **Track It Type** — Sub-category within a group (e.g. Phone, Laptop under Electronics).
- **Track It Action** — What action was taken (e.g. Found, Returned to Guest, Donated, Disposed).
- **Track It Location** — Where the item was found or stored (e.g. Room 101, Lobby, Restaurant).

## Common FAQs

**The Group/Type/Location dropdowns are empty.**
These options come from Track It setup in Configuration → General Setup → Track It. Ask your administrator to add the relevant groups, types, actions, and locations.

**Can I link a lost & found record to a specific reservation or guest?**
The current form does not have a direct guest/reservation link field. Use the Description field to note the guest name or room number.

## See also

- [Configuration → Track It](/docs/configuration/general-setup/trackit) — Set up Track It groups, types, actions, and locations.
- [Housekeeping Overview](/docs/operations/housekeeping/overview) — Overview of all housekeeping tabs.
