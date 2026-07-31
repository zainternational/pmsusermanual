---
sidebar_position: 4
---

# Rates

- **Add / edit** rates
- **Rate setup**, **room type**, **amount**
- Occupancy is priced **per adult count** (one detail row per room type + adult count); there is no separate child or infant rate field.
- **Market**, **source** if used for distribution

Access via **Configuration → Rate Management → Rate** (or equivalent).

## Rate structure

A rate plan is defined in two parts:

- The **rate setup** (rate code, name, rate class, rate category, market/source, currency, room types) — this is the header shared by the whole plan.
- One or more **rate detail** rows, one per room type + occupancy (adult count) combination. Each detail row carries its own amount and, optionally, its own **validity date range** (season). Date ranges are set per detail row, not once for the whole rate code — this lets the same rate code hold a different amount (and different weekday pricing) for each season, room type, and occupancy without needing separate rate codes.
- Each detail row can also flag specific weekdays (e.g. a higher **daily rate** for Friday/Saturday) so a single detail row covers both weekday and weekend pricing for its date range.

## Rate Setup Fields

| Field | Description |
|-------|-------------|
| Rate Code | Short code identifying the rate plan. |
| Rate Name | Display name for the rate plan. |
| Rate Class | Parent rate class this rate belongs to. |
| Rate Category | Parent rate category this rate belongs to (required). |
| Transaction Code | The transaction code room charges under this rate post to. |
| Market / Source | Restrict the rate to a specific market and/or source (optional — leave blank to allow any). |
| Room Type(s) | One or more room types this rate applies to (required — at least one). |
| Package | Optional package bundled with this rate. |
| Currency | Defaults to the hotel's default currency if left unset. |
| Active | Whether the rate is available for use. |
| Public Rate | Whether the rate is visible for public/self-service booking channels, as opposed to internal-only use. |
| Minimum Stay / Maximum Stay | Minimum and maximum length of stay (nights) allowed under this rate. |
| Advance Booking Days | Minimum number of days before arrival the rate must be booked. |
| Requires Deposit / Deposit Percentage | Whether a deposit is mandatory for this rate, and what percentage of the total if so. |
| Non-Refundable | Marks the rate as non-refundable. |
| Requires Credit Card | Whether a credit card is mandatory when booking this rate. |
| Cancellation Policy | Free-text cancellation policy shown/attached to the rate. |
| Rate Description | Free-text description of what the rate includes. |

## Rate Usage Type

Each rate setup also carries a usage-type flag used to classify how the rate is used (mainly for reporting):

| Field | Description |
|-------|-------------|
| Normal Use | Standard, revenue-generating rate. Default. |
| Complimentary | Marks the rate as complimentary (no charge / comp stay). |
| House Use | Marks the rate as used for house/staff occupancy. |

## Known limitations

- The **discount** field on a reservation is stored and displayed but is not automatically applied to the rate amount — staff must adjust the rate manually if a discount is intended. There is no separate "markup" concept in Rate Setup.
- Overlapping validity date ranges for the same rate code/room type/occupancy are checked when saving through the normal Rate Setup screens, but this is not enforced by the database itself — always review existing seasons before adding a new one to avoid unintentional overlaps.
