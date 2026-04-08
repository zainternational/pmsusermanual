---
sidebar_position: 11
---

# Track It — Actions

**Track It Actions** describe what happened to a lost or found item — the action taken by staff. The **Category** flag distinguishes between a claim action and a lost/found action.

## Access

**Configuration → General Configuration → Track It → Actions**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. FOUND, RET, DISP). |
| Name | Yes | Action name (e.g. Found, Returned to Guest, Disposed). |
| Category | Yes | **Claimed** (True) — item was returned or claimed. **Lost/Found** (False) — item was found or is being held. |
| Sequence | No | Display order in dropdowns. |

## Common Actions

| Short Code | Name | Category |
|-----------|------|----------|
| FOUND | Found | Lost/Found |
| STORED | Stored in Housekeeping | Lost/Found |
| RET | Returned to Guest | Claimed |
| DON | Donated to Charity | Claimed |
| DISP | Disposed | Claimed |
| CLAIM | Claimed by Owner | Claimed |

## Category Flag

The **Category** flag is used for filtering and reporting:
- **Claimed = True** — the item has been resolved (returned, donated, disposed). Use this for actions that close the item record.
- **Claimed = False (Lost/Found)** — the item is still being held or the event is being recorded. Use this for the initial "Found" action and storage actions.

## Adding an Action

1. Click **Add**.
2. Enter a short code and name.
3. Set the **Category** flag — True for claimed/resolved, False for found/held.
4. Set sequence if needed.
5. Save.

## See also

- [Track It — Groups](/docs/configuration/general-setup/trackit-groups) — Top-level categories.
- [Track It — Types](/docs/configuration/general-setup/trackit-types) — Sub-categories.
- [Track It — Locations](/docs/configuration/general-setup/trackit-locations) — Where the item was found or stored.
- [Housekeeping → Lost & Found](/docs/operations/housekeeping/lost-and-found) — Using Track It in operations.
