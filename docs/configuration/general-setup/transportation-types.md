---
sidebar_position: 13
---

# Transportation Types

**Transportation Types** define the pick-up/drop-off methods available when recording a guest's transportation details on a reservation (e.g. Car, Van, Taxi). They populate the **Transportation** option list on the reservation form's Stay Information section.

## Access

**Configuration → General Configuration → Transportation Types**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Code | Yes | Short code for the transportation type (e.g. CAR). Automatically uppercased. Must be unique. Cannot be changed after creation. |
| Description | Yes | The full name shown wherever the transportation type is selected (e.g. "Car"). |

## Permissions

Access is controlled by four separate permissions: **View**, **Add**, **Edit**, and **Delete Transportation Type**. Users without View permission see an access-denied message instead of the list.

## Adding / Editing / Deleting

1. Click **Add Transportation Type**, enter a **Code** and **Description**, and save. The code is checked for duplicates before saving.
2. To edit, click the edit icon on a row — the **Code** field is locked (read-only) for existing records; only **Description** can be changed.
3. To delete, click the delete icon and confirm.

## Bulk Import (Excel)

Transportation types can be added in bulk instead of one at a time:

1. Click **Template** to download an Excel template with `code` and `description` columns and a sample row.
2. Fill in the template with your transportation types.
3. Click **Import Excel** and select the completed file.
4. Review the import preview — rows with problems (e.g. duplicate codes, missing fields) are flagged before anything is saved.
5. Confirm the import to create the valid rows. A summary of how many rows succeeded/failed is shown afterward.

## Common FAQs

**Why is the Code field locked when I edit an existing transportation type?**
Codes cannot be changed after creation to avoid breaking existing reservations that reference them. To use a different code, add a new transportation type and stop using the old one, or delete and re-create it if it is not yet in use.

**Where do transportation types actually get used?**
On the reservation form, the **Transportation** section (revealed via "Add Transportation Info" under Stay Information) uses these types for both pick-up and drop-off selections. See [Room & Stay Information](/operations/front-desk/stay-information).

## See also

- [Bulk Import (Excel)](/general/bulk-import) — Full details on the import workflow used here.
- [Room & Stay Information](/operations/front-desk/stay-information) — Where transportation types are selected on a reservation.
- [General Setup Overview](/configuration/overview)
