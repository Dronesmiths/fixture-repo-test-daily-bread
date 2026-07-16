# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `9005a489-c1bc-44e7-9908-87702e4053d8` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `d227e0341a91635219fde30b9f3bc11fd210983e` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-39-52-9005a489` |
| Timestamp | 2026-07-16T17:40:28.688Z |
| Manifest Hash | `e054a7378ac03f7246b3d48b34e694907c36c38a4db34190d87cf7dfccf723ab` |
| Vector Namespace | `fixture-test__daily_bread__9005a489-c1bc-44e7-9908-87702e4053d8` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 4 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Avg Word Count | 1660 |
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