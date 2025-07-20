import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { DownloadButton } from '@/components/experiments/download-button';
import { ArrowDownToLineIcon, ArrowUpFromLineIcon } from 'lucide-react';
import { DocumentTextIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/16/solid';

export default function IconButtonPage() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col gap-4">
        <h1>Button Hover Effects</h1>
        <h2>Animated Icons</h2>
        <Separator />
        <section>
          <h3>Styling</h3>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
            <p>CSS Modules</p>
            <DownloadButton
              label="Download"
              direction="right"
              icon={<DocumentTextIcon />}
              hoverIcon={<DocumentArrowDownIcon />}
            />

            <p>Tailwind</p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="elevated"
                  iconOnly
                  size="icon-lg"
                  className="group inline-grid overflow-clip"
                  aria-label="Download"
                >
                  <ArrowDownToLineIcon className="ease col-start-1 row-start-1 -translate-y-10 opacity-0 transition-[translate,opacity] group-hover:translate-y-0 group-hover:opacity-100" />
                  <ArrowDownToLineIcon className="ease col-start-1 row-start-1 transition-[translate,opacity] group-hover:translate-y-10 group-hover:opacity-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Download</TooltipContent>
            </Tooltip>
          </div>
        </section>
        <section>
          <h3>Directions</h3>
          <div className="grid-row-4 grid grid-cols-2 justify-items-start gap-4">
            <p>Down</p>
            <Button size="lg" className="group overflow-clip">
              <span
                className={cn(
                  'grid',
                  '[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
                  '[&_svg]:col-start-1 [&_svg]:row-start-1',
                )}
              >
                <ArrowDownToLineIcon className="-translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
                <ArrowDownToLineIcon className="group-hover:translate-y-[150%] group-hover:opacity-0" />
              </span>
              Download
            </Button>
            <p>Up</p>
            <Button variant="secondary" size="lg" className="group overflow-clip">
              Upload
              <span
                className={cn(
                  'grid',
                  '[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
                  '[&_svg]:col-start-1 [&_svg]:row-start-1',
                )}
              >
                <ArrowUpFromLineIcon className="translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
                <ArrowUpFromLineIcon className="group-hover:-translate-y-[150%] group-hover:opacity-0" />
              </span>
            </Button>
            <p>Left</p>
            <Button variant="outline" size="lg" className="group overflow-clip">
              <span
                className={cn(
                  'grid',
                  '[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
                  '[&_svg]:col-start-1 [&_svg]:row-start-1',
                )}
              >
                <ArrowLongLeftIcon className="translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                <ArrowLongLeftIcon className="group-hover:-translate-x-[150%] group-hover:opacity-0" />
              </span>
              Previous
            </Button>
            <p>Right</p>
            <Button variant="primary" size="lg" className="group overflow-clip">
              Next
              <span
                className={cn(
                  'grid',
                  '[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
                  '[&_svg]:col-start-1 [&_svg]:row-start-1',
                )}
              >
                <ArrowLongRightIcon className="-translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                <ArrowLongRightIcon className="group-hover:translate-x-[150%] group-hover:opacity-0" />
              </span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
