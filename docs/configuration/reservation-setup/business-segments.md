---
sidebar_position: 7
---

# Business Segments

**Business Segments** are a lookup list used to classify the market segment a reservation belongs to — for example, Corporate, Leisure, or Government.

## Access

**Configuration → Reservation Setup → Business Segments**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. `CORP`, `LEIS`). |
| Name | Yes | Full name (e.g. Corporate, Leisure). |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the segment to a specific hotel. Leave empty to make it available to all hotels. |

## How It Works

Business segment is selected on the reservation form and is used for segmentation and reporting — for example, to break down occupancy or revenue by market segment across a date range.

Use **Import** to bulk-load business segments from an Excel file (download the template first via **Template**), and **Export** to download the current list. See [Bulk Import (Excel)](/general/bulk-import) for the full import workflow.

## Common FAQs

**Can a business segment be limited to one property?**
Yes — set **Allowed Hotel** on the segment. Leave it blank to make it available at every hotel in the group.

## See also

- [Reservations](/operations/reservations/overview)
- [Reservation Setup Overview](/configuration/reservation-setup/overview)
