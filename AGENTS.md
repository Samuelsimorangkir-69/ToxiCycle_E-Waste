<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Page bodies live in src/components/pages/*Content.tsx and are wrapped by AppShell (sidebar + header) in each route; keeps the shared admin chrome in one place.
- Design tokens mirror the original Material-style Tailwind config (surface/on-surface/primary-container, text-label-*, spacing space-*) in src/styles.css @theme; use those class names, not shadcn defaults.
