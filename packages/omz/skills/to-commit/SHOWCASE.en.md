## Use Scenarios

When code is written, tested, and reviewed, use `/to-commit` to generate a commitlint-compliant commit message and a PR description template with change notes, AI assistance declaration, and developer self-check checklist. No more "feat: changed some stuff."

## Example Effects

```terminal
$ /to-commit

> Inspecting changes: 7 added, 4 modified, 0 deleted

> Commit message:
> feat(skills): replace SKILL.md with SHOWCASE.md as skills display content
>
> Skills pages now show use scenarios and simulated dialogue examples instead
> of raw prompt content. Added SHOWCASE.zh.md / SHOWCASE.en.md as content
> source, revamped list page with 2-col grid + category filter, detail page
> with scenario + terminal example layout.

> PR description template generated with:
> - Change notes
> - AI assistance declaration
> - Developer self-check checklist
>
> Run git commit now?
```
