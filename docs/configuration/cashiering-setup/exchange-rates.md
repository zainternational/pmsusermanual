---
sidebar_position: 8
---

# Exchange Rates (Cashiering)

**Exchange Rates** define the conversion rates between a foreign currency and the base currency (MMK — Myanmar Kyat) for a given date range, used when converting billing and payment amounts posted in a foreign currency.

## Access

**Configuration → Cashiering → Exchange Rate**

## Fields

| Field | Description |
|-------|-------------|
| Currency | The foreign currency this rate applies to. |
| Start Date | First calendar day this rate is effective (inclusive). |
| End Date | Last calendar day this rate is effective (inclusive). |
| Unit per MMK | How many units of this currency equal 1 MMK. |
| MMK per Unit | How many MMK equal 1 unit of this currency. |
| Hotel | Restricts the rate to a single property. Leave blank to apply it as a default rate across hotels. |

## How It Works

Because each rate record has a **Start Date** and **End Date**, multiple rates can be maintained for the same currency over time — the system picks the rate whose date range covers the posting date when converting an amount. This allows exchange rates to be updated periodically without losing the history of previously used rates.

## Usage

Exchange rates are used wherever a payment or charge posted in a foreign currency needs to be converted to (or compared against) the base currency, such as billing and payment postings in **Cashiering → Transaction**.

## Common FAQs

**What happens if no rate exists for a currency on a given date?**
Conversion cannot be performed reliably. Make sure a rate record with a date range covering the current date exists for every currency in active use.

**Can different hotels use different exchange rates for the same currency?**
Yes — set the **Hotel** field on the rate record to scope it to a specific property; leave it blank to define a default rate shared across hotels.

## See also

- [Cashiering → Transaction](/operations/cashiering/transaction)
