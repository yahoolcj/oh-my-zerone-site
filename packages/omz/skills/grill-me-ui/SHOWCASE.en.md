## Use Scenarios

Before coding UI, when you have a prototype, screenshot, data, or page idea but need to clarify presentation details, interaction behavior, and whether to integrate with existing UI or design standalone — use `/grill-me-ui` to resolve each question one at a time. Outputs a UI design report ready for `/to-locate` or `/to-coding`.

## Example Effects

```terminal
$ /grill-me-ui This is the login page prototype [attachment], help me confirm the dev spec

> Is this login page standalone or reuse the existing AuthLayout?
You: Reuse existing AuthLayout

> Client-side validation or server-side only?
You: Client-side on blur + server-side fallback on submit

> Redirect path after successful login?
You: /dashboard

> UI design report generated:
> - Layout: reuse AuthLayout (centered card)
> - Fields: email + password + remember-me toggle
> - Validation: blur instant + submit server fallback
> - States: loading / error / success
> Ready for /to-coding.
```
