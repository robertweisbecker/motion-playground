import * as Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { Paragraph } from '@/components/paragraph';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { XMarkIcon } from '@heroicons/react/20/solid';

function BannerExample() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}

export default function TailwindPage() {
  return (
    <div className="prose max-w-4xl">
      <h1>Styling w/ Tailwind</h1>
      <Separator />
      <h2>Switch / Toggle</h2>
      <Paragraph>iOS 26</Paragraph>
      <Paragraph>Radix unstyled</Paragraph>
      <SwitchPrimitive.Root className="peer flex h-7 w-16 flex-row rounded-full bg-gray-200 p-0.5 data-[state=checked]:bg-green-500 active:[&>span]:scale-115">
        <SwitchPrimitive.Thumb className="ease h-6 w-10 rounded-full bg-white shadow-sm inset-ring inset-ring-white transition-transform hover:bg-white/80 data-[state=checked]:translate-x-[20px] data-[state=unchecked]:origin-right [state=check]:origin-left"></SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      <Paragraph>Button with classes</Paragraph>
      <button className="hover: flex h-7 w-16 flex-row rounded-full bg-green-500 p-0.5">
        <div className="h-6 w-10 rounded-full bg-white shadow-2xs"></div>
      </button>
      <Switch
        className={cn(
          'h-7 w-16 border-0 data-[state=checked]:bg-green-500',
          'data-[slot=switch-thumb]:h-6 [*]:data-[slot=switch-thumb]:w-10',
          'data-[state=checked]:data-[slot=switch-thumb]:translate-none [*]:data-[state=checked]:data-[slot=switch-thumb]:ml-auto',
        )}
      ></Switch>
      doesn't work – can't override default classes
      <br />
      <Separator />
      <h2 className="">Buttons</h2>
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
      <br />
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
      <br />
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>Tailwind Catalyst</Card.CardTitle>
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
        </Card.CardContent>
      </Card.Card>
      <br />
      <Card.Card className="bg-transparent!">
        <Card.CardHeader>
          <Card.CardTitle>Catalyst 2</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent className="wrap flex">
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
              '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-popover)]',
              'text-foreground rounded-lg px-3 py-2.5 text-sm leading-4 font-semibold',
              'bg-[var(--current-bg)]',
              'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
              'dark:ring-0 dark:inset-ring dark:inset-ring-white/5',
              'inset-shadow-[0_1px] inset-shadow-white/15',
              'shadow-sm',
              'ring-border ring-1',
              // 'ring-offset-background ring-offset-[0.5px]',
            )}
          >
            No pseudo
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
            Interesting offset
          </button>

          <button
            className={cn(
              'bg-card hover:bg-secondary inline-flex items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-[calc(--spacing(1.5)-1px)] text-sm font-medium whitespace-nowrap text-gray-950 shadow-sm ring-1 ring-current/15 active:bg-gray-100 disabled:bg-transparent disabled:opacity-40 dark:shadow-[-0.5px_-1px_0.5px] dark:shadow-current/20',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                clipRule="evenodd"
              ></path>
            </svg>
            RSS Feed
          </button>
        </Card.CardContent>
      </Card.Card>
      <br />
      <div className="grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-current/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
        <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-current/5">
          <div className="bg-card rounded-3xl p-10 pb-9 shadow-2xl ring-1 ring-current/5">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Starter
            </h2>
            <p className="mt-2 text-sm/6 text-gray-950/75">Everything you need to start selling.</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-5xl font-medium text-gray-950">$99</div>
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per month</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-primary-foreground inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-4 py-[calc(--spacing(2)-1px)] text-base font-medium whitespace-nowrap shadow-md hover:bg-blue-600 disabled:bg-gray-950 disabled:opacity-40"
                href="#"
              >
                Start a free trial
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Up to 3 team members
                </li>
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Up to 5 deal progress boards
                </li>
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Source leads from select platforms
                </li>
                <li
                  data-disabled="true"
                  className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
                >
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Not included:</span>RadiantAI integrations
                </li>
                <li
                  data-disabled="true"
                  className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
                >
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Not included:</span>Competitor analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BannerExample />
    </div>
  );
}
