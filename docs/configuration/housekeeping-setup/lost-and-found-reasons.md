---
sidebar_position: 5
---

# Lost & Found Reasons

**Lost & Found Reasons** classify how or where an item was found, or the circumstances of a lost & found entry (e.g. found in room, left at reception, reported missing). They standardize lost & found logging and reporting across the property.

## Access

**Configuration → Housekeeping Setup → Lost & Found Reason**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. ROOM, LOBBY, REST). |
| Name | Yes | Reason name (e.g. Found in Room, Left in Lobby, Restaurant). |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the reason to a specific property. Left empty, it is available to all hotels. |

## Common Reasons

| Short Code | Name |
|-----------|------|
| ROOM | Found in Room |
| LOBBY | Found in Lobby |
| REST | Found in Restaurant |
| PARK | Found in Parking Area |
| STAFF | Handed to Staff |

## Usage

When a housekeeper or staff member logs an item in the Housekeeping Lost & Found register, they select a reason from this list to record how or where the item was found. This supports consistent reporting on lost & found activity across the property.

## FAQ

**Can I add reasons specific to my property's layout?**
Yes — add short codes and names that match how items are typically found or logged at your property.

**Is this list scoped per hotel in a multi-property setup?**
Each entry can optionally be restricted to a specific hotel via the Allowed Hotel field; leaving it blank makes the reason available across all properties.

## See also

- [Out-of-Order Reasons](/configuration/housekeeping-setup/out-of-order-reasons) — Similar lookup used for room status changes.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
