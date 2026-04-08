---
sidebar_position: 9
---

# Exchange Rates (Rate Management)

**Exchange Rates** define the conversion rate between foreign currencies and your base currency. They are used when guests pay in a foreign currency or when rates are quoted in a non-base currency.

## Access

**Configuration → Rate Management → Exchange Rate**

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Currency | Yes | The foreign currency (e.g. USD, EUR, THB). |
| Rate (MMK per unit) | Yes | How many units of base currency equal 1 unit of the foreign currency. |
| Valid From | Yes | Start date for this rate. |
| Valid To | No | End date. If blank, the rate is open-ended. |
| Active | Yes | Whether this rate is currently in use. |

## How It Works

When a payment is posted in a foreign currency, the system uses the exchange rate valid on the business date to convert the amount to the base currency for folio and reporting purposes.

Example: If 1 USD = 2,100 MMK and a guest pays USD 100, the folio records MMK 210,000.

## Multiple Rates Over Time

You can have multiple exchange rate records for the same currency with different validity periods. The system uses the rate whose `Valid From` date is on or before the transaction date.

## Common FAQs

**The exchange rate is not applying in the payment modal.**
Ensure the currency is active in [Currencies](/docs/configuration/rate-setup/currencies) and the exchange rate has a valid date range covering today's business date.

**Should I update exchange rates daily?**
Update them whenever the rate changes significantly. For properties with high foreign currency volume, daily updates are recommended.

## See also

- [Currencies](/docs/configuration/rate-setup/currencies) — Define which currencies are accepted.
- [Cashiering → Exchange Rates](/docs/configuration/cashiering-setup/exchange-rates) — Cashiering-specific exchange rate setup.
- [Rate Setup Overview](/docs/configuration/rate-setup/overview)
