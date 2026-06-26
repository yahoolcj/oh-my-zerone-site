## Use Scenarios

Run `/setup-omz` after installing oh-my-zerone for the first time, or when inheriting a project with an outdated introduction.md. The Agent scans the project's tech stack, directory structure, and configuration, then generates or updates `docs/agent/introduction.md` — technical structure and entry points only, no business knowledge, no script execution.

## Example Effects

```terminal
$ /setup-omz

> Scanning project structure...
> Detected: Astro 5.x + React 19 + Tailwind CSS v4
> Detected: Chinese/English bilingual site (astro i18n routing)
> Detected: 17 omz skills across 5 categories
> Generated docs/agent/introduction.md
> Done. Read this file before development to understand the project layout.
```
