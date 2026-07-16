# Daily Bread QA Report

| Field | Value |
|-------|-------|
| Run ID | `240d0d21-787f-4cc4-9a20-d3823be5dd2b` |
| Client | fixture-test |
| Agency | aipilots |
| Domain | fixture-test.com |
| Cluster | core-services |
| Base SHA | `e8fc22afe16866f0330ec022e91d7ba810262371` |
| Base Branch | main |
| Staging Branch | `staging/fixture-test/core-services/2026-07-16T17-37-45-240d0d21` |
| Timestamp | 2026-07-16T17:38:18.599Z |
| Manifest Hash | `2e678fc13c83b7df66780f79da477a9442aa5b69265dcc80ca6ba5bc08b0c6e9` |
| Vector Namespace | `fixture-test__daily_bread__240d0d21-787f-4cc4-9a20-d3823be5dd2b` |
| Vector Promotion | pending_external_approval |

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 4 |
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Avg Word Count | 1178 |
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
| out/services/professional.html | High repetition detected: 28/66 unique sentences; No relevant schema for page type "other"; Broken internal links (13): /services/professional/, /contact/, /about/, /services/professional/, /services/professional/ (+8 more) | 853 |

## Post-Exclusion Reconciliation

Broken links remaining after reconciliation: 1
- out/services/professional.html → /contact

## Social Proof

- Status: skipped
- Reason: No verified review data
- Data Source: none

## Sitemap Candidates (1)

- /out/services/professional.html

---
**STOP — AWAITING EXTERNAL HUMAN-CONTROLLED REVIEW**