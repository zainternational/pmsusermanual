---
sidebar_position: 5
---

# Reservation Methods

**Reservation Methods** record how a reservation was made — for example by phone, through the website, walk-in, or via a travel agent. They support reporting on booking channels and help front office staff understand how a guest reached out.

## Access

**Configuration → Reservation Setup → Reservation Method**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the method (e.g. PHONE, WEB, WALKIN). |
| Name | Full name of the method (e.g. Phone, Website, Walk-in, Travel Agent). |
| Sequence | Display order in the selection dropdown. |
| Active | Whether the method is available for selection. |
| Allow Hotel | Restricts the method to a specific hotel; leave empty to apply to all hotels. |

## Common Examples

- Phone
- Website
- Walk-in
- Email
- Travel Agent
- OTA (Online Travel Agency)

## Usage

Reservation Method is selected when a reservation is created and is retained on the reservation record for reporting on booking channel mix.

## Troubleshooting

- **Method not appearing** — verify it is Active and, if hotel-scoped, configured for the current hotel.
- **Reservation Method vs. Source** — Reservation Method describes *how* the booking was taken (channel of contact), while Source/Source Group describes the marketing or business source; the two are typically both captured on a reservation.

## See also

- [Reservation Setup Overview](/configuration/reservation-setup/overview)
