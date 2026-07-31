---
sidebar_position: 1
---

# Room Classes

**Room Classes** define the broadest grouping of rooms in the property (e.g. Standard, Deluxe, Suite). Every [Room Type](/configuration/reservation-setup/room-types) belongs to exactly one room class, and rooms inherit their class through their room type. Define room classes first — room types and rooms both reference them.

## Access

**Configuration → Reservation Setup → Room Class**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code for the class (e.g. STD, DLX, STE). |
| Name | Full name of the class (e.g. Standard, Deluxe, Suite). |
| Sequence | Display order in dropdowns and lists. |
| Hotel | The hotel this class applies to. Leave empty to apply it to all hotels (multi-property). |

## Setup Order

Room classes are the first thing to configure in the room hierarchy:
1. **Room Classes** — broad categories
2. [Room Types](/configuration/reservation-setup/room-types) — specific types within a class
3. [Rooms](/configuration/reservation-setup/rooms) — individual rooms of each type

## Usage

Room classes appear in:
- **Room Type setup** — Each room type is assigned to a room class.
- **Reports** — Occupancy, revenue, and availability can be grouped or filtered by room class.
- **Rate and inventory grouping** — Broad reporting or restrictions can be applied at the class level rather than per room type.

## Common FAQs

**What's the difference between a Room Class and a Room Type?**
A room class is a broad grouping (Standard, Deluxe, Suite). A room type is a specific sellable category within a class (e.g. Standard King, Standard Twin — both under the Standard class).

**Can a room class apply to only one hotel?**
Yes. Set the Hotel field when creating the class. Leave it blank to make it available across all hotels in a multi-property setup.

Room classes also support the [Bulk Import (Excel)](/general/bulk-import) workflow (Template / Import Excel buttons on the list page).

## See also

- [Room Types](/configuration/reservation-setup/room-types)
- [Rooms](/configuration/reservation-setup/rooms)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
