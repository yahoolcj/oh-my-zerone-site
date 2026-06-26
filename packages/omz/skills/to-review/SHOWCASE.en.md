## Use Scenarios

After development and testing, use `/to-review` to systematically audit all changes against the project's review checklist in `docs/agent/review.md`. It compares code, docs, and config against each rule, outputting a pass/fail/pending-confirmation report.

## Example Effects

```terminal
$ /to-review

> Review checklist: docs/agent/review.md
> Change scope: 7 files

> [✓] Code formatting — Pass: consistent indentation, import groups correct
> [✓] @by oh-my-zerone tags — Pass: all new files tagged
> [✗] Security review — Fail: [slug].astro uses `slug!` without null guard
> [✓] i18n coverage — Pass: zh/en keys complete
> [!] Doc update — Pending: introduction.md not synced with skills count change

> Result: 3/5 pass, 1/5 fail, 1/5 pending
> Fix [✗] items before re-submitting for review.
```
