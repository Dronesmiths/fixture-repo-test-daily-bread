> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `9005a489-c1bc-44e7-9908-87702e4053d8` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `d227e0341a91635219fde30b9f3bc11fd210983e` |
| Manifest Hash | `e054a7378ac03f7246b3d48b34e694907c36c38a4db34190d87cf7dfccf723ab` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Total | 4 |

### ⚠️ Pages Requiring Review

- `out/services/professional.html`: High repetition detected: 28/66 unique sentences; No relevant schema for page type "other"; Broken internal links (12): /services/professional/, /about/, /services/professional/, /services/professional/, /services/professional/ (+7 more)

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]

### Staged Files (8)

<details><summary>Click to expand</summary>

- `out/services/professional.html` (modified)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/run_manifest.json` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/run_manifest.sha256` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/qa_report.json` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/qa_report.md` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/pr_body.md` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/sitemap_candidates.json` (created)
- `.daily-bread/runs/9005a489-c1bc-44e7-9908-87702e4053d8/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**