---
sidebar_position: 2
---

# Room Types

**Room Types** define the categories of rooms available for sale (e.g. Standard King, Deluxe Twin, Suite). Each room type belongs to a room class and is used in reservations, rates, and availability.

## Access

**Configuration → Reservation Setup → Room Types**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code used in reports and availability (e.g. STD, DLX, STE). |
| Name | Full name (e.g. Standard King, Deluxe Twin, Junior Suite). |
| Room Class | The class this type belongs to — from [Room Classes](/docs/configuration/reservation-setup/room-classes). |
| Sequence | Display order in dropdowns and room plan. |
| Hotel | The hotel this room type applies to (multi-property). |

## Setup Order

Define room types before adding rooms or rates:
1. [Room Classes](/docs/configuration/reservation-setup/room-classes) — broad categories
2. **Room Types** — specific types within a class
3. [Rooms](/docs/configuration/reservation-setup/rooms) — individual rooms of each type
4. [Rates](/docs/configuration/rate-setup/rates) — rates linked to room types

## Usage

Room types appear in:
- **Reservation form** — Guest selects a room type when booking.
- **Rate setup** — Rates are defined per room type.
- **Room Plan** — Rooms are grouped by type.
- **Reports** — Occupancy and revenue breakdowns by room type.
- **Journal by Transaction** — Filter by room type.

## See also

- [Room Classes](/docs/configuration/reservation-setup/room-classes)
- [Rooms](/docs/configuration/reservation-setup/rooms)
- [Rates](/docs/configuration/rate-setup/rates)
- [Reservation Setup Overview](/docs/configuration/reservation-setup/overview)
