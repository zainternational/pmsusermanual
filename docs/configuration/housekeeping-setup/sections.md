---
sidebar_position: 1
---

# Housekeeping Sections

**Housekeeping Sections** define the physical or organizational groupings used to divide the property for housekeeping purposes — for example by floor, building, or wing. Sections are used to group rooms and assign attendants or tasks to a manageable area of the property.

## Access

**Configuration → Housekeeping Setup → HK Section**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code for the section (e.g. F1, TWRA). |
| Name | Yes | Section name (e.g. Floor 1, Tower A). |
| Sequence | No | Display order in dropdowns and lists. |
| Allowed Hotel | No | Restricts the section to a specific property. Left empty, it is available to all hotels. |

## Common Sections

| Short Code | Name |
|-----------|------|
| F1 | Floor 1 |
| F2 | Floor 2 |
| TWRA | Tower A |
| TWRB | Tower B |
| ANNEX | Annex Building |

## Usage

Sections are set up once per property (or globally, if multi-hotel scoping is not needed) and then used throughout Housekeeping to organize rooms into areas of responsibility. When assigning housekeeping attendants or reviewing room status, staff can filter or group by section, which makes it easier to divide work across a large property.

## FAQ

**Can a room belong to more than one section?**
No — a section is a single grouping value assigned to a room; it is used to organize housekeeping work, not to represent overlapping zones.

**What happens if I delete a section that's in use?**
Existing records that reference the section keep their historical value. Remove it from use going forward by excluding it from new configuration rather than deleting a section still referenced by rooms or attendants.

## See also

- [Housekeeping Attendances](/configuration/housekeeping-setup/attendances) — Attendants who are assigned to sections.
- [Housekeeping Tasks](/configuration/housekeeping-setup/tasks) — Task types performed within a section.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
