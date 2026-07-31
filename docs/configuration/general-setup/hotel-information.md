---
sidebar_position: 1
---

# Hotel Information

**Hotel Information** stores the core property record used throughout the PMS — on folios, reports, reservations, and the login screen. There is normally one Hotel Information record per property.

## Access

**Configuration → General Configuration → Hotel Information**

## Fields

| Field | Description |
|-------|-------------|
| Hotel Name | The property's display name. |
| Legal Owner | Legal entity/owner name of the property (for documents, invoices). |
| Hotel Code | Short unique code identifying the property (used for multi-property setups; must be unique). |
| Property Type | Type of property (e.g. Hotel, Resort, Apartment). |
| Address | Full street address. |
| City / State / Country | Location, linked to Profile Setup's [Cities](/configuration/profile-setup/cities), [States](/configuration/profile-setup/states), [Countries](/configuration/profile-setup/countries). |
| Region | Free-text region/area, in addition to State. **Stored on the backend but not currently editable or visible anywhere in this form** — the field exists on the model only. |
| Postal Code | Linked to [Postal Codes](/configuration/profile-setup/postal-codes). |
| Phone 1 / Phone 2 / Phone 3 | Up to three contact phone numbers. |
| Email | Property contact email. |
| Web Page | Property website URL. |
| Latitude / Longitude | Geographic coordinates (e.g. for maps or directions). |
| Number of Floors | Total floors in the property. |
| Total Rooms | Total room count. |
| Number of Beds | Total bed count. **Stored on the backend but not currently editable or visible anywhere in this form** — the field exists on the model only. |
| Check-in Time | Standard check-in time, used as a default on reservations. |
| Check-out Time | Standard check-out time, used as a default on reservations. |
| End Date | End/expiry date associated with the property record, if applicable. **Stored on the backend but not currently editable or visible anywhere in this form.** |
| Default Currency | The property's base currency, linked to [Currencies](/configuration/rate-setup/currencies). Used across rates, folios, and reports. |
| Currency Format | Display format/pattern for currency amounts. |
| Currency Symbol | Symbol shown with amounts (auto-set to match the selected Default Currency, and kept in sync with it). |
| Decimal Places | Number of decimal places shown for currency amounts (default 2). |
| Time Zone Region | Time zone used for the property's dates and times. |
| Time Format | Display format for times (e.g. 12-hour / 24-hour). |
| Date Format | Display format for dates (e.g. `YYYY-MM-DD`, `DD/MM/YYYY`). |
| Logo | Property logo/branding image, used on folios and reports where supported. |

## How It Works

- Hotel Information is normally set up **once**, during property onboarding, and only edited afterward for corrections or rebranding.
- **Default Currency** cannot be changed if reservations already exist that use the currency currently set as default — you must resolve or update those reservations first.
- **Currency Symbol** is automatically kept in sync with the selected **Default Currency** and does not need to be maintained separately.
- **Check-in Time** / **Check-out Time** are used as defaults elsewhere in the system (e.g. suggested times on new reservations).

## Common FAQs

**Can I change the hotel's default currency after we've started taking reservations?**
Only if no existing reservation uses the current default currency. Otherwise the system blocks the change to avoid inconsistent totals — update or remove those reservations first.

**Where does the currency symbol on folios come from?**
It follows the **Default Currency** selected here; it updates automatically when you change the default currency.

**Does changing Check-in/Check-out time here change existing reservations?**
No — it only changes the default suggested for new reservations going forward.

## See also

- [General Setup Overview](/configuration/general-setup/overview)
- [Currencies](/configuration/rate-setup/currencies)
- [System Date](/configuration/general-setup/system-date)
