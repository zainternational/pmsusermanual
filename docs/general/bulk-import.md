---
sidebar_position: 8
---

# Bulk Import (Excel)

Most **Configuration** setup lists (Transportation Types, Departments, Job Titles, Track-It Actions/Groups/Locations/Types, Countries, Cities, Districts, Nationalities, Languages, Loyalty Tiers, Postal Codes, Preferences, Inactive Reasons, Payment Types, Articles, Transaction Code Groups/Sub-Groups, Housekeeping sections/tasks/attendance/reasons, Out of Order, and more) support importing many records at once from an Excel file, instead of adding them one by one. This page explains the common workflow. Field-specific templates differ per module (see that module's page for its exact columns), but the steps are the same everywhere.

:::tip
Not every list in the system has bulk import — it's available on most **Configuration → General/Profile/Cashiering/Housekeeping Setup** list pages that show an **Import Excel** button next to **Add**.
:::

## Where it appears

On a supported list page (e.g. **Configuration → General Configuration → Transportation Types**), look for two buttons near **Add**:

- **Template** — downloads a blank `.xlsx` template for that specific list, with the correct column headers and one sample row.
- **Import Excel** — uploads a filled-in file for that list.

## Workflow

1. **Download the template.** Click **Template** on the list page you want to import into. Each list has its own template with the columns it needs (e.g. Transportation Types uses `code` and `description`); don't reuse a template from a different list.
2. **Fill in the file.** Open the downloaded `.xlsx`, keep the header row, and add one row per record. Remove or leave the sample row — it is not imported as data if replaced.
3. **Upload.** Click **Import Excel** and choose your completed file. The file is parsed in the browser immediately — nothing is saved to the server yet.
4. **Review the preview.** A modal shows every row that parsed successfully, plus a **Problems** list for rows that failed validation (missing required fields, values too long, duplicate codes within the file, etc.) with the specific row number and reason.
5. **Fix mistakes inline (optional).** Double-click a row in the preview table to edit its values directly, without re-uploading the file.
6. **Confirm the import.** Click **Import**. Each valid row is created one at a time; rows that fail (e.g. a code that already exists in the system) are skipped and reported, but valid rows are still created — a bad row does not block the rest of the batch.
7. **Check the result summary.** After import, a message reports how many records were created and how many were skipped. If any rows failed, a dialog lists the reason for each skipped row so you can fix and re-import just those.

## Notes

- **Duplicates are checked against existing data, not just the file.** A code that already exists in the system is skipped even if it looks valid in the file.
- **Column headers are matched flexibly.** Most templates accept a few common header variations (e.g. `code`, `short_code`, or `short code` for a code column) so re-using a slightly different export still works — but when in doubt, use the downloaded template's exact headers.
- **Permissions still apply.** You need the same **Add** permission for that list to import into it as you would to add a single record manually; without it, the import button is blocked before any file is even parsed.
- Only `.xlsx`/`.xls` files are accepted.

## Common FAQs

**My import created some records but skipped others — is that expected?**
Yes. Valid rows are created even if other rows in the same file have problems. Check the skipped-rows dialog for the reason on each one, fix them in your source file, and re-import just those rows.

**Can I import into any list in the system?**
No — only list pages that show an **Import Excel** button support it. If a list doesn't have the button, add records one at a time through **Add**.

**The template columns don't match what I expected.**
Always re-download the **Template** from the specific list page you're importing into — templates are not interchangeable between different setup lists.

## See also

- [Configuration Overview](/configuration/overview)
- [Transportation Types](/configuration/general-setup/transportation-types) — Example of a list that uses this workflow.
