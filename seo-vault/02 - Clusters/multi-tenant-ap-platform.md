---
type: cluster
pillar: accounts-payable-automation
keyword: multi tenant ap platform
intent: commercial
volume: L
difficulty: very-low
priority: p1
status: published
url: /accounts-payable-automation/multi-tenant-ap-platform
word_count_current: 937
---

# Multi-Tenant AP Platform

> **Parent pillar:** [[Accounts Payable Automation]]
> **Primary keyword:** `multi tenant ap platform`
> **URL:** `/accounts-payable-automation/multi-tenant-ap-platform`

## Page intent
Capture buyers from group company structures (parent holding + multiple subsidiaries) who need AP automation that works across the whole group with proper data isolation. African enterprise commonly looks like this; US tools rarely handle it well.

## Real product specifics
- **Subdomain-based multi-tenancy**: tgid.ap.finmark.ai, wacube.ap.finmark.ai
- **Query-level data isolation**: Every query filtered by company_id automatically
- **Per-tenant NAV integration**: Each subsidiary has its own NAV instance config
- **Cross-company admin dashboard**: admin.ap.finmark.ai for super admins (group CFO, internal audit)
- **Pulse dashboard**: pulse.ap.finmark.ai for AI usage and tenant health monitoring
- **TGI Group production reality**: 2 subsidiaries (TGID + WACube) live, 3rd (tgid2 Manufacturing) pending Atanang's go-ahead
- **Role-based access**: super_admin (cross-company), admin (single company), ap_team, viewer

## Why this cluster matters
African enterprise is dominated by group structures. Most AP tools either force separate instances per subsidiary (expensive, fragmented) or run everything in one instance with weak isolation (governance nightmare). FinMark.ai's subdomain pattern with query-level isolation is the right architecture for this market.

## Sibling clusters
- [[microsoft-dynamics-nav-integration]] — per-tenant NAV
- [[sharepoint-invoice-integration]] — per-tenant SharePoint
- [[ap-approval-workflows]] — role-based access detail

## Status: Published
