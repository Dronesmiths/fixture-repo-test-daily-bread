> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `e1cfc467-3058-470e-aec6-7c5aafc5398c` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `52f0f60188c63a0af6e7dbd7d73dbf7890967518` |
| Manifest Hash | `f798b4b1159444feff70ef86f9b5e41624f6613c96b5d613297d7ffee3bf0905` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 0 |
| ⚠️ Review Required | 2 |
| ❌ Excluded | 3 |
| Total | 5 |

### ⚠️ Pages Requiring Review

- `out/services/consulting.html`: No relevant schema for page type "other"; Broken internal links (3): /about/, /services/professional/, /about/
- `out/services/professional.html`: Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]

### Staged Files (9)

<details><summary>Click to expand</summary>

- `out/services/consulting.html` (modified)
- `out/services/professional.html` (modified)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/run_manifest.json` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/run_manifest.sha256` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/qa_report.json` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/qa_report.md` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/pr_body.md` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/sitemap_candidates.json` (created)
- `.daily-bread/runs/e1cfc467-3058-470e-aec6-7c5aafc5398c/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**