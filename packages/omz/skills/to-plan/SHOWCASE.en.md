## Use Scenarios

When requirements are confirmed and the PRD exists, but you want an ordered execution plan before jumping into code, use `/to-plan`. It ranks tasks by priority, tags each with difficulty and AFK score (how independently it can be done without AI), giving you a clear workload preview.

## Example Effects

```terminal
$ /to-plan

> Planning from .PRD/2.1.0.md:

> | # | Task | Difficulty | AFK |
> |---|------|------------|-----|
> | 1 | Create SHOWCASE data sources | Easy | High |
> | 2 | Extend lib/skills.ts | Easy | Medium |
> | 3 | Revamp list page | Medium | Medium |
> | 4 | Revamp detail page | Medium | Medium |
> | 5 | i18n additions | Easy | High |
> | 6 | Clean up old code | Easy | High |

> Execute in order. Ready for /to-coding starting with item 1.
```
