---
type: cluster
pillar: accounts-payable-automation
keyword: sharepoint invoice integration
intent: commercial
volume: L
difficulty: very-low
priority: p1
status: published
url: /accounts-payable-automation/sharepoint-invoice-integration
word_count_current: 920
---

# SharePoint Invoice Integration

> **Parent pillar:** [[Accounts Payable Automation]]
> **Primary keyword:** `sharepoint invoice integration`
> **URL:** `/accounts-payable-automation/sharepoint-invoice-integration`

## Page intent
Capture Microsoft-shop enterprises that already use SharePoint as their document repository and want their AP tool to work with it. Niche but well-targeted query with low competition.

## Real product specifics
- **Microsoft Graph webhooks + delta polling** (resilient to webhook failures)
- **Sites.Read.All + Files.ReadWrite.All** scopes via Azure AD admin consent
- **Bidirectional**: Reads invoices from SharePoint folders, writes portal uploads back
- **Per-tenant configuration**: Each subsidiary's SharePoint config is isolated
- **Currently blocked for TGI** on TGI providing Tenant ID + admin consent (governance issue, not technical)

## Why this cluster matters
Microsoft-shop enterprises don't want to abandon SharePoint as their document repository. AP tools that don't integrate with SharePoint force a fight against existing IT governance. FinMark.ai is built for the SharePoint pattern from day 1.

## Sibling clusters
- [[invoice-processing-automation]] — what happens after SharePoint pickup
- [[multi-tenant-ap-platform]] — per-tenant SharePoint config

## TODO
- [ ] Verify exact Graph scopes against current TGI deployment config
- [ ] Note current TGI deployment status (Tenant ID still pending from Atanang)

## Status: Published
