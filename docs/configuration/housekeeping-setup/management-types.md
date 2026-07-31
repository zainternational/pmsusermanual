---
sidebar_position: 6
---

# Management Types

**Management Types** classify maintenance records — they describe the type or category of a maintenance job. Used alongside Room Maintenance Reasons for more detailed tracking and reporting.

## Access

**Configuration → Housekeeping Setup → Maintenance Type**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Short Code | Yes | Abbreviated code (e.g. PREV, CORR, EMER). |
| Name | Yes | Type name (e.g. Preventive, Corrective, Emergency). |

:::note
There is no Sequence or Active field exposed for Management Types — only Short Code and Name.
:::

## Common Management Types

| Short Code | Name | Description |
|-----------|------|-------------|
| PREV | Preventive | Scheduled maintenance to prevent issues |
| CORR | Corrective | Fixing a reported problem |
| EMER | Emergency | Urgent repair needed immediately |
| INSP | Inspection | Routine room inspection |
| RENO | Renovation | Room renovation or refurbishment |

## Usage

When logging a maintenance record in **Housekeeping → Maintenance**, staff select a management type to classify the job. This helps management track the volume and type of maintenance work across the property.

## See also

- [Housekeeping → Maintenance](/operations/housekeeping/maintenance) — Log and track maintenance issues.
- [Room Maintenance Reasons](/configuration/housekeeping-setup/room-management) — Specific reasons for maintenance issues.
- [Housekeeping Setup Overview](/configuration/housekeeping-setup/overview)
