import {
  ArrowDownToLineIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpFromLineIcon,
  ArrowUpRightIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { CardHover } from '@/components/experiments/card-hover';
import Toaster from '@/components/experiments/toast';
import { StackedComponent } from '@/components/experiments/stacked-component';
import { DownloadButton } from '@/components/experiments/download-button';
import { Toggle } from '@/components/ui/toggle';
import { Code } from '@/components/ui/code';

export default function Demo1() {
  return (
    <>
      <h1>CSS Playground</h1>
      <br />
      <section>
        <h2>Stacked Cards</h2>
        <br />
        <StackedComponent length={3} />
      </section>

      <Separator />
      <section>
        <h2>Card Hover</h2>
        <CardHover title="Project" description="Description goes here..." />
      </section>
      <Separator />

      <Separator />
      <section>
        <h2>Native Popover</h2>
        <div className="grid grid-cols-2">
          <div>
            <Button popoverTarget="my-popover" variant="elevated" className="relative">
              Popover with backdrop
            </Button>
            <div
              popover="auto"
              id="my-popover"
              aria-labelledby="my-popover-title"
              aria-describedby="my-popover-desc"
              className="bg-card fixed inset-y-0 mx-auto my-auto transform overflow-hidden rounded-lg border p-4 opacity-0 shadow-2xl transition-[opacity,transform,translate,scale] transition-discrete duration-300 backdrop:bg-transparent backdrop:transition-colors open:translate-y-0 open:scale-100 open:opacity-100 open:backdrop:bg-black/30 sm:w-full sm:max-w-96 starting:open:translate-y-4 starting:open:scale-90 starting:open:opacity-0 starting:open:backdrop:bg-transparent"
            >
              <h2 id="my-popover-title" className="mt-0 mb-3 text-base font-medium text-balance">
                This is a native HTML popover. You can read up on{' '}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  MDN
                  <ArrowUpRightIcon />
                </a>
                .
              </h2>
              <p id="my-popover-desc">
                Click outside or press <Code>Esc</Code> to dismiss.
              </p>
            </div>
          </div>
          <div className="relative">
            <Button
              popoverTarget="my-popover-2"
              variant="elevated"
              className="[anchor-name:--trigger2]"
            >
              Anchor, no backdrop
            </Button>
            <div
              popover="auto"
              id="my-popover-2"
              aria-labelledby="my-popover-title"
              aria-describedby="my-popover-desc"
              className="bg-card [position-anchor]:--trigger2 ease-in-circ absolute inset-y-[unset] right-0 bottom-[anchor(top)] left-[anchor(left)] z-50 mb-1 max-w-3xs transform overflow-hidden rounded-lg border px-3 py-2 opacity-0 shadow-lg transition-[opacity,transform,translate,scale] transition-discrete duration-200 open:translate-y-0 open:scale-100 open:opacity-100 starting:open:translate-y-1 starting:open:scale-90 starting:open:opacity-0"
            >
              <h3 id="my-popover-title" className="mt-0 mb-1 text-sm font-medium">
                Howdy!
              </h3>
              <p id="my-popover-desc" className="text-sm">
                This should be accessible without any additional config
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
