> **DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**

## Daily Bread Run Summary

| Field | Value |
|-------|-------|
| Run ID | `d71ecbdc-99aa-4958-a1d4-7fd05275b271` |
| Client | fixture-test |
| Cluster | core-services |
| Base SHA | `0d4302029d5a305612795c2c0da4f258632de42b` |
| Manifest Hash | `823c68c4808f6b68e35048b6835f0df1cb7aa83d16b4df9366ce558ca3af5801` |
| Vector Promotion | `pending_external_approval` |

### Results

| Status | Count |
|--------|-------|
| ✅ Passed | 0 |
| ⚠️ Review Required | 1 |
| ❌ Excluded | 3 |
| Total | 4 |

### ⚠️ Pages Requiring Review

- `out/services/professional.html`: Possible city-swap: only 32 unique non-proper-noun words; No relevant schema for page type "other"; Broken internal links (1): /services/professional/

### ❌ Excluded Pages (not in this PR)

- `out/about.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/index.html`: Placeholder leak: src=["']PLACEHOLDER["']
- `out/locations/fake-city.html`: Placeholder leak: \[(?:City|Service|INSERT|undefined)\]

### Staged Files (8)

<details><summary>Click to expand</summary>

- `out/services/professional.html` (modified)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/run_manifest.json` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/run_manifest.sha256` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/qa_report.json` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/qa_report.md` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/pr_body.md` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/sitemap_candidates.json` (created)
- `.daily-bread/runs/d71ecbdc-99aa-4958-a1d4-7fd05275b271/excluded_report.json` (created)

</details>

### Rollback

- **Unmerged:** Close this PR → delete staging branch → remove worktree
- **Merged:** `git revert <merge-sha>` → remove URLs from sitemap → resubmit in GSC
- **Internal links:** Re-run link engine excluding reverted paths

---
**DO NOT MERGE — EXTERNAL HUMAN-CONTROLLED REVIEW REQUIRED**