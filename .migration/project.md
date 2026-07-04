# project

2026-07-04, transformation engine + golden-pair references (base-lyra), whole-project migration complete

## Changed

- Installed shadcn migration skills via `npx skills add shadcn/ui` (`.agents/skills/migrate-radix-to-base`, `.agents/skills/shadcn`)
- Migrated all `src/components/ui/*` Radix wrappers to `@base-ui/react` primitives while preserving custom styling
- Added `src/lib/resolve-render.ts` for `asChild` → `render` backward compatibility at call sites
- Removed all `@radix-ui/react-*` dependencies from `package.json`
- Swept non-ui Radix usage: `code.tsx`, `heading.tsx`, `paragraph.tsx`, `chain-of-thought.tsx`, `tailwind/page.tsx`

## Left alone

- `drawer.tsx` — vaul, not Radix (per skill hard rule)
- `calendar.tsx` — react-day-picker
- `slider.tsx`, `toast.tsx` — already on Base UI
- `components.json` style remains `new-york` (legacy; future `shadcn add` delivers Radix variants unless style is changed)

## Behavior changes

- Tooltip `disableHoverableContent` is accepted but ignored (no Base UI equivalent)
- Toggle group values are arrays internally; wrapper normalizes string `value`/`onValueChange` for single-select usage
- Menu checkbox/radio items use Base UI `closeOnClick` defaults (flag if menus should close on select)
- Navigation menu hover delay defaults differ from Radix (200ms → 50ms on Base UI)

## Verify by hand

- Open `/components` and exercise dropdowns, tooltips, popovers, sheets, tabs, navigation menu
- Toggle theme switcher and toggle groups on demo pages
- Confirm drawer examples still work (unchanged vaul)

**0 UI wrappers remain on Radix**
