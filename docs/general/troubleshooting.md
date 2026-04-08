---
sidebar_position: 2
---

# Troubleshooting

Common issues and what to do when something goes wrong.

:::tip **Module-specific help**
Many modules have their own **Common FAQs** and **Troubleshooting** sections: [Reservations](/docs/operations/reservations/overview#troubleshooting), [Front Desk](/docs/operations/front-desk/overview), [Cashiering](/docs/operations/cashiering/overview), [Housekeeping](/docs/operations/housekeeping/overview), [Night Audit](/docs/operations/night-audit#troubleshooting), [Dashboard](/docs/operations/dashboard#troubleshooting), [Configuration](/docs/configuration/overview#troubleshooting), [Profiles](/docs/operations/profiles/overview#troubleshooting). Check those pages first for issues in that area.
:::

## Login

| Problem | What to try |
|--------|-------------|
| **"Login failed" or invalid credentials** | Check username and password (username ≥ 3 chars, password ≥ 6). Ask your admin to confirm your account is active. |
| **Redirected to login after logging in** | Clear browser cache/cookies or try another browser. Ensure cookies are allowed for the PMS URL. |
| **Forgot password** | Contact your administrator; password reset is typically done via admin or IT. |
| **Forced logout during night audit** | Night audit logs out users without night audit permission after a wait period. Log back in after the audit completes. |

## Cashiering

| Problem | What to try |
|--------|-------------|
| **Cannot open Cashiering** | Log in to a **cash register** first (Cash Register Login). Ensure your user is linked to a cashier and cash register. |
| **Charge or payment fails** | Check transaction code and payment type are active. Ensure reservation is in a status that allows posting (e.g. checked in). |
| **Cannot void** | Void rules may require a reason or approval; check configuration. Some items may be locked after night audit. |
| **Checkout button disabled** | Reservation must be In-House and you need checkout permission. Ensure all folio balances are zero before checkout. |
| **Balance not zero after payment** | Check each folio individually — multiple folios may each need a separate payment. Adjust payment amount to match exactly. |
| **Cannot access Room Routing** | Requires the **Manage Room Routing** permission. Ask your administrator to grant it. |
| **Journal by Transaction shows no data** | Check the date range filter. Ensure transactions were posted on those dates. |

## Reservations

| Problem | What to try |
|--------|-------------|
| **Room type not available** | Check dates and room status (e.g. out of order). Confirm rate/availability setup for that room type and date. |
| **Cannot check in** | Reservation must be in a status that allows check-in (e.g. confirmed). Room must be Vacant Clean in housekeeping. |
| **Cannot change room** | Verify room move reasons and permissions. Target room must be available and the same room type. |
| **Deposit amount required** | The selected reservation type requires a deposit. Enter a deposit amount in the Booking Info step. |
| **Phone number required** | The selected reservation type requires a phone number. Enter it in the Guest Info step. |
| **Credit card required** | The selected reservation type or payment type requires a credit card. Enter it in the Booking Info step. |
| **Cannot cancel — has charges** | Void or settle all folio transactions first, then cancel. |

## Front Desk

| Problem | What to try |
|--------|-------------|
| **Room Move shows no destination rooms** | No vacant rooms of the same type are available. Check Room Status or Room Chart. |
| **Cannot move back to arrival — has charges** | Void or settle all folio transactions first, then move back. |
| **Room plan shows wrong date** | Change the Start Date filter. Ensure night audit has been run up to the date you need. |

## Housekeeping

| Problem | What to try |
|--------|-------------|
| **Room status not updating** | Refresh the page. Confirm you have permission to change that room's status. |
| **Lost & found / maintenance not saving** | Ensure required fields (e.g. reason, location, action) are filled. Check that related setup (Track It groups, actions, locations) exists in Configuration. |
| **No rooms in Out of Order dropdown** | All rooms may already have active OOO records, or no rooms are currently OOO. Check the Out of Order tab. |
| **No staff in Maintenance Assigned To** | Only users in the Engineering (ENG) department are shown. Ask your admin to assign the ENG department to engineering staff. |
| **No staff in Task Assign To** | Only users in the Housekeeping department are shown. Ask your admin to assign the correct department. |

## Night Audit

| Problem | What to try |
|--------|-------------|
| **Night audit blocked by open cashier shifts** | Use the Cashier Shift Not Closed modal to shift-drop each open register, then run again. |
| **Night audit blocked by today's arrivals** | Manage each arrival (change date, cancel, or mark as no-show) then run again. |
| **Night audit blocked by today's departures** | Check out or change departure date for each pending departure, then run again. |
| **Night audit fails or shows exceptions** | Resolve listed exceptions (e.g. open balances, invalid data). Ensure room charges are posted. |
| **System date did not advance** | Check audit run status. If FAILED or PARTIAL, fix the issue and re-run. |

## Reports

| Problem | What to try |
|--------|-------------|
| **Report empty or wrong dates** | Set the correct date range and filters. For night-audit reports, select the correct audit run or business date. |
| **Trial Balance / Manager Report empty** | You must select an audit run from the dropdown. If no runs appear, night audit has not been run yet. |
| **Report access denied** | Your user may not have permission for that report category. Ask your admin to adjust permissions. |

## General

| Problem | What to try |
|--------|-------------|
| **Menu item missing** | Your permissions may not include that module. Contact your administrator. See [Roles and permissions](/docs/general/roles-and-permissions). |
| **Slow or timeout** | Check network and backend status. For heavy reports, narrow date range or filters. |
| **Wrong hotel / property** | Use the **hotel switcher** (if multi-property) to select the correct property. |
| **Notifications not appearing** | The bell polls every 10 seconds. Wait a moment or refresh the page. |

---

:::info **Still stuck?**
Contact your PMS administrator or IT support with: what you were doing, which screen, and the exact message or behaviour you see.
:::
