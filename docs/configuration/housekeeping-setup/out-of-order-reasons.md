---
sidebar_position: 7
---

# Out-of-Order Reasons

**Out-of-Order Reasons** are the reasons selected when a room is taken out of order or out of service. They standardize why a room is being blocked from sale and support reporting on out-of-order activity.

## Access

**Configuration → Housekeeping Setup → Out of Order Reason**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. REPAIR, RENO, PEST). |
| Name | Yes | Reason name (e.g. Repair, Renovation, Pest Control). |
| Sequence | No | Display order in dropdowns. |
| Allowed Hotel | No | Restricts the reason to a specific property. Left empty, it is available to all hotels. |

## Common Reasons

| Short Code | Name |
|-----------|------|
| REPAIR | Repair |
| RENO | Renovation |
| PEST | Pest Control |
| DEEPCLN | Deep Cleaning |
| DAMAGE | Damage |

## Usage

When a room is marked out of order or out of service in Housekeeping (or Front Desk), staff select a reason from this list. This documents why the room is unavailable and is used in reporting on out-of-order rooms and duration.

## FAQ

**How is this different from Room Maintenance Reasons?**
Out-of-Order Reasons are attached to the act of blocking a room from sale, while [Room Maintenance Reasons](/configuration/housekeeping-setup/room-management) describe the underlying maintenance issue being logged. A property may use both together — logging the maintenance issue and separately marking the room out of order.

**Can a room be out of order without one of these reasons?**
The reason list exists to keep out-of-order tracking consistent; select the closest matching entry or add a new one if none fits.

## See also

- [Room Maintenance Reasons](/configuration/housekeeping-setup/room-management) — Reasons used when logging a maintenance issue.
- [Management Types](/configuration/housekeeping-setup/management-types) — Classification types for maintenance records.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
