## Use Scenarios

After development and before committing, use `/to-test` to verify each TODOQ item against the PRD. The Agent confirms pass/fail/pending for each item and outputs a concise test report. Failed items go back to fix.

## Example Effects

```terminal
$ /to-test

> Verifying against .PRD/2.1.0.md TODOQ:

> [✓] #1 SHOWCASE.md data sources — Pass: all 34 files present
> [✓] #2 Extend skills data layer — Pass: getAllSkills() returns scenario/snippet
> [✓] #3 List page revamp — Pass: 2-col grid + category filter working
> [!] #4 Detail page revamp — Pending: terminal style contrast low in light mode
> [ ] #5 i18n additions — Pending test
> [ ] #6 Clean up old code — Pending test

> Test report:
> 3/6 pass, 1/6 pending, 2/6 untested
> Suggestion: fix #4 light mode contrast then re-test.
```
