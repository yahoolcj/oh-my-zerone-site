## Use Scenarios

Before committing code you've written, use `/to-quality-review` for a read-only static quality check. The Agent analyzes the specified scope for over-abstraction, naming issues, missing boundary handling, maintainability concerns, and performance risks — outputting a graded suggestion report. It's not a gate, just a second pair of eyes.

## Example Effects

```terminal
$ /to-quality-review src/lib/skills.ts src/pages/docs/skills/

> Quality scope: skills data layer + skills pages (3 files)

> Overall grade: B+
>
> Findings:
> [Medium] src/lib/skills.ts:25 — getAllSkills() re-reads the filesystem on every call.
>   Fine under Astro SSG, but would be a perf issue if switched to SSR.
>   Suggestion: add an in-memory cache layer.
>
> [Low] src/pages/docs/skills/[slug].astro:20 — variable name `html` is too generic.
>   Suggestion: rename to `showcaseHtml`.
>
> No critical issues found. Consider fixing [Medium] items before committing.
```
