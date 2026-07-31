---
sidebar_position: 10
---

# Repeated Guest Report

The **Repeated Guest Report** lists guests grouped by their profile with stay statistics, to identify guests with multiple stays and their revenue contribution.

:::tip **Having a problem?**
See the main [Troubleshooting](/general/troubleshooting) page for general issues, or the [Reports Overview](/operations/reports/overview) for how to run and export reports.
:::

## Access

From the sidebar, click **Report** → **Profile**, then choose **Repeated Guest** from the sub-report list.

## Filters

| Filter | Description |
|--------|-------------|
| Minimum Stays | Only include guests with at least this many qualifying stays. Default: 1. |
| Start Date / End Date | Optional date range to limit which stays are counted. |

Only reservations with an actual stay status are counted (passerby/PM reservations and PM rooms are excluded).

## What the Report Shows

Each row is one guest profile:

| Column | Description |
|--------|-------------|
| Guest Name | Profile display name (title + first/middle/last name). |
| Phone / Email | Guest contact details. |
| Total Stays | Number of qualifying reservations for this guest. |
| Total Nights | Sum of nights across those stays (within the date range, if set). |
| Total Revenue | Sum of reservation revenue across those stays. |

Click a guest row to view their **stay history** — the individual reservations that make up their totals.

## Export

Use the export button (if available) to download as Excel or PDF, including a per-guest revenue-by-group breakdown.

## Common FAQs

**A guest with only one stay is missing — why?**
Set **Minimum Stays** to 1 (the default) to include all guests, or check that the date range covers their stay.

**Why don't passerby (walk-in, no profile) stays count?**
The report is built from profile-linked stays; PM/passerby reservations and PM rooms are intentionally excluded from repeat-guest statistics.

## See also

- [Guest Record Report](/operations/reports/guest-record) — Per-profile stay history and revenue statistics.
- [Guest Information Report](/operations/reports/guest-information) — In-house guest list with full profile details for a business date.
- [Individual Profiles](/operations/profiles/individual-profile) — Where guest profile data is stored and edited.
- [Reports Overview](/operations/reports/overview) — How to run and export reports.
