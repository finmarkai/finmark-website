---
type: cluster
pillar: accounts-payable-automation
keyword: microsoft dynamics nav ap integration
intent: commercial
volume: M
difficulty: low
priority: p0
status: published
url: /accounts-payable-automation/microsoft-dynamics-nav-integration
word_count_current: 969
---

# Microsoft Dynamics NAV Integration

> **Parent pillar:** [[Accounts Payable Automation]]
> **Primary keyword:** `microsoft dynamics nav ap integration`
> **URL:** `/accounts-payable-automation/microsoft-dynamics-nav-integration`

## Page intent
Capture buyers running on-premise Microsoft Dynamics NAV who can't get good integration from cloud-first AP vendors. NAV is the production-ready ERP target for FinMark.ai — this page makes that obvious.

## Real product specifics
- **Direct integration with on-premise NAV** via SOAP middleware (built by Ahmed, freelancer)
- **Bidirectional sync**: POs/GRNs from NAV → FinMark.ai every 5 minutes; approved invoices → NAV with all fields
- **NTLM authentication** support for the firewalled on-premise reality
- **9,589+ PO lines + 1,127+ GRN lines** synced live for TGID
- **4 Finmark fields + 7 WHT fields** populated on push-back to NAV
- **Per-tenant routing**: Each subsidiary (TGID, WACube) has its own NAV instance
- TGI integration verified end-to-end including round-trip

## Why this cluster matters
Most AP automation tools (NetSuite-first, QuickBooks-first, Xero-first) cannot integrate well with on-premise NAV. African enterprise running NAV is stuck — either accept the gap or build their own. FinMark.ai is one of the very few options.

## Sibling clusters
- [[3-way-matching]] — what the NAV PO/GRN sync feeds into
- [[nigerian-withholding-tax-automation]] — what gets pushed back into NAV
- [[multi-tenant-ap-platform]] — per-tenant NAV configuration

## TODO
- [ ] Confirm/document Microsoft Dynamics 365 Business Central roadmap status
- [ ] Add link to NAV integration architecture diagram (if public)

## Status: Published
