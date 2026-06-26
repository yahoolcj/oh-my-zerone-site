## Use Scenarios

With PRD and TODOQ ready, use `/to-coding` to implement items top-to-bottom, one at a time. It enforces the "one item → self-test → stop and wait for user acceptance → check off only after approval" workflow, ensuring quality control at every step.

## Example Effects

```terminal
$ /to-coding

> Current PRD: .PRD/2.1.0.md
> TODOQ item 1: Add SHOWCASE.md data sources

> Created setup-omz/SHOWCASE.zh.md ✓
> Created setup-omz/SHOWCASE.en.md ✓
> Created grill-me/SHOWCASE.zh.md ✓
> ...
> 17 skills × 2 languages = 34 files created

> Completed: TODOQ item 1
> Changes: Added SHOWCASE.zh.md + SHOWCASE.en.md for all skill dirs
> Verification: Files exist with correct structure
> Pending acceptance: Confirm this item passes to check off and proceed to item 2.
```
