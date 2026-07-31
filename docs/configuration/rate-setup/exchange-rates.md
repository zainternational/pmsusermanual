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
| Hotel | No | Restricts this rate to a specific hotel. Leave empty to apply to all hotels. |
| Units per MMK | Yes | How many units of this currency equal 1 MMK. |
| MMK per Unit | Yes | How many MMK equal 1 unit of this currency. Both directions are entered — the system does not derive one from the other. |
| Valid From | Yes | Start date for this rate. |
| Valid To | Yes | End date for this rate — **required**, not open-ended. To keep a rate current, create a new record with a fresh date range once the old one expires. |

:::note
There is no Active/Inactive flag on Exchange Rates — a rate is simply in effect or not, based on whether today's business date falls within its Valid From/Valid To range.
:::

## How It Works

When a payment is posted in a foreign currency, the system uses the exchange rate valid on the business date to convert the amount to MMK for folio and reporting purposes.

Example: If 1 USD = 2,100 MMK (entered as MMK per Unit = 2100) and a guest pays USD 100, the folio records MMK 210,000.

## Multiple Rates Over Time

You can have multiple exchange rate records for the same currency with different validity periods. The system uses the rate whose `Valid From` date is on or before the transaction date.

## Common FAQs

**The exchange rate is not applying in the payment modal.**
Ensure the currency's Status is Active in [Currencies](/configuration/rate-setup/currencies) and the exchange rate has a Valid From/Valid To range covering today's business date (both dates are required — an expired record needs a new one, not an edit to remove the end date).

**Should I update exchange rates daily?**
Update them whenever the rate changes significantly. For properties with high foreign currency volume, daily updates are recommended.

## See also

- [Currencies](/configuration/rate-setup/currencies) — Define which currencies are accepted.
- [Cashiering → Exchange Rates](/configuration/cashiering-setup/exchange-rates) — Cashiering-specific exchange rate setup.
- [Rate Setup Overview](/configuration/rate-setup/overview)
