---
sidebar_position: 8
---

# Currencies

**Currencies** defines the currencies your property accepts for billing and payments. The base currency is used for all internal calculations; other currencies are converted via exchange rates.

## Access

**Configuration → Rate Management → Currency**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Code | Yes | ISO 4217 currency code (e.g. USD, EUR, MMK, THB). |
| Name | Yes | Full currency name (e.g. US Dollar, Euro, Myanmar Kyat). |
| Symbol | No | Currency symbol (e.g. $, €, K). |
| Decimal Places | Yes | Number of decimal places (e.g. 2 for USD, 0 for JPY). |
| Is Base Currency | No | Mark one currency as the base (home) currency for the property. |
| Active | Yes | Whether this currency is available for selection. |

## Base Currency

One currency should be marked as the **base currency** — this is the currency used for all internal accounting, reports, and folio balances. All other currencies are converted to the base currency using the exchange rates configured in [Exchange Rates](/docs/configuration/rate-setup/exchange-rates).

## Common FAQs

**Can I have multiple base currencies?**
No — only one currency should be the base. All other currencies are foreign currencies converted at the exchange rate.

**A currency is not appearing in the payment modal.**
Ensure the currency is active and has an exchange rate configured in [Exchange Rates](/docs/configuration/rate-setup/exchange-rates).

## See also

- [Exchange Rates](/docs/configuration/rate-setup/exchange-rates) — Conversion rates between currencies.
- [Cashiering → Exchange Rates](/docs/configuration/cashiering-setup/exchange-rates) — Cashiering-specific exchange rate setup.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
