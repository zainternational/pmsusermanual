---
sidebar_position: 8
---

# Currencies

**Currencies** defines the currencies your property accepts for billing and payments.

## Access

**Configuration → Rate Management → Currency**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Code | Yes | Currency code (e.g. USD, EUR, MMK, THB). |
| Name | Yes | Full currency name (e.g. US Dollar, Euro, Myanmar Kyat). |
| Unit | No | Currency unit name (e.g. Dollar, Kyat). |
| Symbol | No | Currency symbol (e.g. $, €, K). |
| Status | Yes | Active/Inactive — whether this currency is available for selection. |

:::note
There is no **Decimal Places** or **Is Base Currency** field on a Currency record.
:::

## Base ("Default") Currency

There is no base-currency flag on the Currency list itself. Instead, each **hotel** has a **default currency** set on its [Hotel Information](/configuration/general-setup/hotel-information) record — that hotel's default currency is what packages and rates automatically use when no other currency is specified for them (see [Packages](/configuration/rate-setup/packages) and [Rates](/configuration/rate-setup/rates)). All other currencies are converted using [Exchange Rates](/configuration/rate-setup/exchange-rates).

## Common FAQs

**A currency is not appearing in the payment modal.**
Ensure the currency's **Status** is Active and it has an exchange rate configured in [Exchange Rates](/configuration/rate-setup/exchange-rates).

## See also

- [Exchange Rates](/configuration/rate-setup/exchange-rates) — Conversion rates between currencies.
- [Cashiering → Exchange Rates](/configuration/cashiering-setup/exchange-rates) — Cashiering-specific exchange rate setup.
- [Rate Setup Overview](/configuration/rate-setup/overview)
