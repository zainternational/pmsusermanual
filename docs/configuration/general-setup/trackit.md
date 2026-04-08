---
sidebar_position: 9
---

# Track It

**Track It** is the item-tracking system used for Lost & Found in Housekeeping. It organises items using four reference tables — each has its own configuration page.

## Access

**Configuration → General Configuration → Track It** (sub-menus for each table)

## The Four Tables

| Table | Purpose | Doc |
|-------|---------|-----|
| [Groups](/docs/configuration/general-setup/trackit-groups) | Top-level categories (Electronics, Clothing, Documents, etc.) | [→](/docs/configuration/general-setup/trackit-groups) |
| [Types](/docs/configuration/general-setup/trackit-types) | Sub-categories within a group (Phone, Laptop, Passport, etc.) | [→](/docs/configuration/general-setup/trackit-types) |
| [Actions](/docs/configuration/general-setup/trackit-actions) | What happened to the item (Found, Returned, Disposed, etc.) | [→](/docs/configuration/general-setup/trackit-actions) |
| [Locations](/docs/configuration/general-setup/trackit-locations) | Where the item was found or stored (Lobby, Room 101, HK Storage, etc.) | [→](/docs/configuration/general-setup/trackit-locations) |

## How They Work Together

When a housekeeper registers a found item in **Housekeeping → Lost & Found**, they select:

```
Group → Type → Action → Location
e.g.  Electronics → Phone → Found → Room 101
```

All four dropdowns must have data configured here before Lost & Found can be used.

## Setup Order

Set up in this order since Types, Actions, and Locations are independent of each other but all feed into the Lost & Found form:

1. [Groups](/docs/configuration/general-setup/trackit-groups) — create top-level categories first
2. [Types](/docs/configuration/general-setup/trackit-types) — create sub-categories
3. [Actions](/docs/configuration/general-setup/trackit-actions) — create actions with correct Category flag
4. [Locations](/docs/configuration/general-setup/trackit-locations) — create locations

## Common FAQs

**The Group/Type/Location dropdowns are empty in Lost & Found.**
The Track It reference data has not been set up. Add entries to each of the four tables.

**What is the Category flag on Track It Actions?**
It distinguishes between actions that represent a claim/resolution (e.g. Returned to Guest = Claimed = True) and actions that represent a found/held event (e.g. Found = False). Used for filtering and reporting in Lost & Found.

## See also

- [Housekeeping → Lost & Found](/docs/operations/housekeeping/lost-and-found) — Using Track It in daily operations.
- [General Setup Overview](/docs/configuration/general-setup/overview) — All general configuration items.
