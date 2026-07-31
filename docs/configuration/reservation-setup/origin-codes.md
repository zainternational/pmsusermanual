---
sidebar_position: 13
---

# Origin Codes

**Origin Codes** identify where a reservation originated — for example a region, campaign, or referral channel. They provide a finer-grained classification than source information for tracking where business is coming from.

## Access

**Configuration → Reservation Setup → Origin Code**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the origin (e.g. WEB, CORP, TRAVAGT). |
| Name | Full name of the origin (e.g. Website, Corporate Account, Travel Agent). |
| Sequence | Display order in the selection dropdown. |
| Active | Whether the origin code is available for selection. |
| Allow Hotel | Restricts the origin code to a specific hotel; leave empty to apply to all hotels. |

## Usage

Origin code is selected when creating or editing a reservation, typically alongside source and market information. It is used in reservation reports to break down business by where it originated.

## Troubleshooting

- **Origin code missing from the dropdown** — check that it is Active and scoped correctly to the current hotel.
- **Origin vs. Source** — Source and Source Group describe the booking channel, while Origin Code is a separate, lighter-weight classification; use whichever your property's reporting relies on.

## See also

- [Reservation Setup Overview](/configuration/reservation-setup/overview)
