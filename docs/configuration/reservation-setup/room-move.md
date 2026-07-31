---
sidebar_position: 11
---

# Room Move

**Room Move Reasons** define the standard list of reasons available when a guest is moved from one room to another during their stay (e.g. Maintenance, Guest Request, Upgrade). Recording a reason keeps a consistent, reportable history of why room moves occurred.

## Access

**Configuration → Reservation Setup → Room Move**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the reason (e.g. MNT, REQ, UPG). |
| Name | Full name of the reason (e.g. Maintenance Issue, Guest Request, Room Upgrade). |
| Sequence | Display order in the room move dropdown. |
| Hotel | The hotel this reason applies to. Leave empty to apply it to all hotels (multi-property). |

## Common Room Move Reasons

| Short Code | Name |
|-----------|------|
| MNT | Maintenance Issue |
| REQ | Guest Request |
| UPG | Room Upgrade |
| DWN | Downgrade |
| NSE | Noise Complaint |

## Usage

When a reservation's room is changed after check-in, the reason is selected from this list. This provides a consistent reason code on the reservation history and supports reporting on why room moves happen (e.g. tracking recurring maintenance issues).

## Common FAQs

**Can I add my own room move reasons?**
Yes. Add new entries here with a short code, name, and sequence; they will appear in the room move reason dropdown.

**Do room move reasons apply to all hotels?**
Only if the Hotel field is left blank. Set a specific hotel to scope a reason to a single property.

## See also

- [Rooms](/configuration/reservation-setup/rooms)
- [Room Status](/configuration/reservation-setup/room-status)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
