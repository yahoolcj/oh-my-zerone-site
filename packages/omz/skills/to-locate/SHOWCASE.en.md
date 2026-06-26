## Use Scenarios

When a developed feature has a small issue — style drift, interaction anomaly, wrong data, missed edge case — but doesn't warrant a full PRD cycle, use `/to-locate` to let the Agent do read-only investigation through docs, knowledge base, and code search. It outputs a locating report ready for `/to-coding`, without modifying any files.

## Example Effects

```terminal
$ /to-locate The hero title on the homepage wraps awkwardly on mobile, 3rd character breaks

> Searching relevant files...
> Located at src/components/home/Hero.astro:42
>   <h1 class="text-5xl md:text-7xl">让 AI 在真实项目里稳定交付</h1>
> Issue: text-5xl is too large for a 12-char Chinese headline on mobile
> Fix: use text-3xl md:text-5xl lg:text-6xl with three breakpoints
> Locating report ready. Hand off to /to-coding for the fix.
```
