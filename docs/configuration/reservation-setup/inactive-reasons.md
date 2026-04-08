---
sidebar_position: 20
---

# Inactive Reasons

**Inactive Reasons** are used when deactivating a reservation, profile, or rate — they record why the record was made inactive. This provides an audit trail for deactivations.

## Access

**Configuration → Reservation Setup → Inactive Reason**

Also used in Profile Setup — the same reasons may appear in both contexts depending on your configuration.

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. DUP, REQ, ERR). |
| Name | Yes | Reason name (e.g. Duplicate Record, Guest Request, Data Entry Error). |
| Sequence | No | Display order in dropdowns. |
| Active | Yes | Whether this reason is available for selection. |

## Common Inactive Reasons

| Short Code | Name |
|-----------|------|
| DUP | Duplicate Record |
| REQ | Guest Request |
| ERR | Data Entry Error |
| NSHOW | No Show |
| CANCEL | Cancelled |
| MERGE | Merged with Another Record |

## Usage

When a user marks a reservation or profile as inactive, they are prompted to select an inactive reason. The reason is recorded on the record and appears in audit reports.

## See also

- [Reservation Setup Overview](/docs/configuration/reservation-setup/overview)
- [Profile Setup → Inactive Reason](/docs/configuration/profile-setup/inactive-reason) — Inactive reasons for profiles.
