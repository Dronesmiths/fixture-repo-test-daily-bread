# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `adfd91f061d58c0712d9fdc4f3810a7d54a5f35d` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-38-59-f42d9ff1` |
| Timestamp | 2026-07-16T17:39:28.964Z |
| Manifest Hash | `c3f10c752374faee51039fda421a5aeb7ef2fdc8a5759ab564ad13c397c113b5` |
| Vector Namespace | `fixture-test__daily_bread__f42d9ff1-8d41-49f9-8e8b-b5d02b3680ee` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 4 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Avg Word Count | 1596 |
| Sitemap Candidates | 1 |

## ❌ Excluded Pages

| Page | Reason | Action |
|------|--------|--------|
| out/about.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/index.html | Placeholder leak: src=["']PLACEHOLDER["'] | restored_from_base |
| out/locations/fake-city.html | Placeholder leak: \[(?:City|Service|INSERT|undefined)\] | restored_from_base |

## ⚠️ Review Required Pages

These pages are staged in the PR but require manual review before approval.

| Page | Warnings | Word Count |
|------|----------|------------|
| out/services/professional.html | High repetition detected: 28/66 unique sentences; No relevant schema for page type "other"; Broken internal links (12): /services/professional/, /about/, /services/professional/, /services/professional/, /services/professional/ (+7 more) | 851 |

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (1)

- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**