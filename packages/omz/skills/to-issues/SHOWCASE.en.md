## Use Scenarios

When a PRD is ready but too large to assign or implement in one go, use `/to-issues` to slice it into independently claimable issues via vertical cuts and publish them to the project tracker. Each issue is a complete, independently deliverable feature slice.

## Example Effects

```terminal
$ /to-issues .PRD/2.1.0.md

> Analyzing PRD feature list...
> Slicing by vertical trace-bullet cuts:

> Issue #1: Add SHOWCASE.md data sources
>   - Create SHOWCASE.zh.md + SHOWCASE.en.md for 17 skills
>   - Acceptance: files exist with correct structure
>
> Issue #2: Extend skills data layer
>   - Add SHOWCASE read/parse to lib/skills.ts
>
> Issue #3: Revamp skills list page
>   ...
>
> 6 issues created and published to project tracker.
```
