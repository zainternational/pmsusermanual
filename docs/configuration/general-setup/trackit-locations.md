---
sidebar_position: 12
---

# Track It — Locations

**Track It Locations** define where a lost or found item was discovered or is being stored. Staff select a location when registering a lost & found item.

## Access

**Configuration → General Configuration → Track It → Locations**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. R101, LOBBY, HK). |
| Name | Yes | Location name (e.g. Room 101, Lobby, Housekeeping Storage). |
| Sequence | No | Display order in dropdowns. |

## Common Locations

| Short Code | Name |
|-----------|------|
| LOBBY | Lobby |
| REST | Restaurant |
| POOL | Pool Area |
| GYM | Gym / Fitness Centre |
| HK | Housekeeping Storage |
| LAUNDRY | Laundry Room |
| PARK | Car Park |
| CONF | Conference Room |

For room-specific locations, add one entry per room (e.g. R101 = Room 101, R102 = Room 102) or use a generic "Guest Room" entry.

## Adding a Location

1. Click **Add**.
2. Enter a short code and name.
3. Set sequence if needed.
4. Save.

## Tip — Room Locations

If your property wants to track which specific room an item was found in, add individual room entries (R101, R102, etc.). If that level of detail is not needed, a single "Guest Room" location is sufficient.

## See also

- [Track It — Groups](/docs/configuration/general-setup/trackit-groups) — Top-level categories.
- [Track It — Types](/docs/configuration/general-setup/trackit-types) — Sub-categories.
- [Track It — Actions](/docs/configuration/general-setup/trackit-actions) — What happened to the item.
- [Housekeeping → Lost & Found](/docs/operations/housekeeping/lost-and-found) — Using Track It in operations.
