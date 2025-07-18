import * as Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';

export default function TailwindDemo() {
  return (
    <div className="mx-auto max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col items-stretch gap-8">
        <Card.Card>
          <Card.CardHeader>Clerk</Card.CardHeader>
          <Card.CardContent>
            <button
              className={cn(
                'group before:transtion-opacity relative isolate inline-flex h-[1.875rem] items-center justify-center overflow-hidden rounded-md bg-purple-500 px-3 text-left text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-purple-500 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:before:opacity-100',
              )}
            >
              Label
            </button>
          </Card.CardContent>
        </Card.Card>
        <Card.Card>
          <Card.CardHeader>
            <Card.CardTitle>Base UI</Card.CardTitle>
          </Card.CardHeader>
          <Card.CardContent>
            <button
              className={cn(
                'flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100',
              )}
            >
              Base UI
            </button>
          </Card.CardContent>
        </Card.Card>

        <Card.Card>
          <Card.CardHeader>
            <Card.CardTitle>Base UI</Card.CardTitle>
          </Card.CardHeader>
          <Card.CardContent>
            <button
              className={cn(
                'relative isolate inline-flex w-full cursor-default items-baseline justify-center gap-x-2',
                'rounded-lg border border-transparent',
                'bg-(--btn-border)',
                'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)]',
                'text-base/6 font-semibold text-white',
                '[--btn-bg:var(--color-zinc-900)]',
                '[--btn-border:var(--color-zinc-950)]/90',
                '[--btn-hover-overlay:var(--color-white)]/10',
                '[--btn-icon:var(--color-zinc-400)]',
                'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm',
                'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
                'active:[--btn-icon:var(--color-zinc-300)] active:after:bg-(--btn-hover-overlay)',
                'disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                'hover:[--btn-icon:var(--color-zinc-300)] hover:after:bg-(--btn-hover-overlay) *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon)',
                'sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4',
                'dark:border-white/5 dark:bg-(--btn-bg) dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 dark:before:hidden dark:after:-inset-px dark:after:rounded-lg forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
              )}
            >
              Catalyst
              <ArrowRightIcon data-slot="icon" className="text-[--btn-icon]" />
            </button>
          </Card.CardContent>
        </Card.Card>
        <Card.Card className="bg-transparent!">
          <Card.CardHeader>
            <Card.CardTitle>Catalyst 2</Card.CardTitle>
          </Card.CardHeader>
          <Card.CardContent className="flex">
            <button
              className={cn(
                'relative isolate inline-flex cursor-default items-baseline justify-center gap-x-2 rounded-lg border border-transparent',
                'bg-(--btn-border)',
                'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)]',
                'text-base/6 font-semibold',
                'text-zinc-950',
                '[--btn-bg:white]',
                '[--btn-border:var(--color-zinc-950)]/10',
                '[--btn-hover-overlay:var(--color-zinc-950)]/2.5',
                '[--btn-icon:var(--color-zinc-500)]',
                'before:absolute before:inset-0',
                'before:-z-10',
                'before:rounded-[calc(var(--radius-lg)-1px)]',
                'before:bg-(--btn-bg)',
                'before:shadow-[0_1px_3px_#0000001a,0_1px_2px_-1px_#0000001a]',
                'after:absolute after:inset-0 after:-z-10',
                'after:rounded-[calc(var(--radius-lg)-1px)]',
                'after:shadow-[inset_0_1px] after:shadow-white/15',
                'hover:[--btn-border:var(--color-zinc-950)]/15',
                'hover:[--btn-icon:var(--color-zinc-700)]',
                'hover:after:bg-(--btn-hover-overlay)',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                'active:[--btn-border:var(--color-zinc-950)]/15',
                'active:[--btn-icon:var(--color-zinc-700)]',
                'active:after:bg-(--btn-hover-overlay)',
                'disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none',
                '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon)',
                'sm:px-[calc(--spacing(3)-1px)]',
                'sm:py-[calc(--spacing(1.5)-1px)]',
                'sm:text-sm/6',
                'sm:*:data-[slot=icon]:my-1',
                'sm:*:data-[slot=icon]:size-4',
                'dark:border-white/5',
                'dark:bg-(--btn-bg)',
                'dark:text-white',
                'dark:[--btn-bg:var(--color-zinc-800)]',
                'dark:[--btn-hover-overlay:var(--color-white)]/5',
                'dark:[--btn-icon:var(--color-zinc-500)]',
                'dark:before:hidden',
                'dark:after:-inset-px',
                'dark:after:rounded-lg',
                'dark:hover:[--btn-icon:var(--color-zinc-400)]',
                'dark:active:[--btn-icon:var(--color-zinc-400)]',
                'forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
              )}
            >
              Catalyst <ArrowRightIcon data-slot="icon" className="text-[--btn-icon]" />
            </button>
            <button
              className={cn(
                '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-zinc-800)]',
                'text-foreground rounded-[calc(var(--radius-lg)-1px)] px-3 py-2.5 text-sm leading-4 font-semibold',
                'relative z-0 bg-[var(--current-bg)]',
                'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
                'dark:ring-1 dark:ring-black',
                'inset-ring-1 inset-ring-white/5',
                'inset-shadow-[0_1px] inset-shadow-white/15',
                'shadow-sm',
                // 'm-px',
                'after:absolute after:-inset-px after:-z-2 after:rounded-lg',
                // 'after:bg-card',
                'after:border after:border-zinc-950/10 hover:after:border-zinc-950/15',
              )}
            >
              with pseudo
            </button>
            <button
              className={cn(
                '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-zinc-800)]',
                'text-foreground rounded-lg px-3 py-2.5 text-sm leading-4 font-semibold',
                'bg-[var(--current-bg)]',
                'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
                // 'dark:ring-1 dark:ring-black',
                'inset-ring-1 inset-ring-white/5',
                'inset-shadow-[0_1px] inset-shadow-white/15',
                'shadow-sm',
                'ring-accent ring-[0.5px]',
                'ring-offset-background ring-offset-[0.5px]',
              )}
            >
              Catalyst
            </button>
          </Card.CardContent>
        </Card.Card>
      </main>
    </div>
  );
}
