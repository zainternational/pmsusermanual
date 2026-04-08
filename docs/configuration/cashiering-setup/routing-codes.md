---
sidebar_position: 5
---

# Routing Codes

**Routing Codes** define how charges are routed from a guest's folio to another payer (e.g. company, travel agent, or another room). Each routing code specifies which transaction codes are included in the routing.

## Access

**Configuration → Cashiering → Routing Code**

## Fields

| Field | Description |
|-------|-------------|
| Short Code | Abbreviated code (e.g. CORP, TA). |
| Name | Full name of the routing code (e.g. Corporate Billing, Travel Agent Commission). |
| Sequence | Display order. |
| Transaction Codes | The transaction codes that are routed when this routing code is applied. Multiple codes can be selected. |

## Usage

Routing codes are applied per reservation from **Cashiering → Transaction** (folio routing section). When a routing rule is set up on a reservation, charges matching the selected transaction codes are automatically routed to the target payer (company or travel agent profile).

The property-wide view of all active routing rules is in **Cashiering → Room Routing**.

## See also

- [Transaction Codes](/docs/configuration/cashiering-setup/transaction-codes)
- [Cashiering → Transaction](/docs/operations/cashiering/transaction)
- [Cashiering → Room Routing](/docs/operations/cashiering/room-routing)
