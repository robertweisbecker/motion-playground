'use client';
import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

export default function TimelinePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-8">
      <Heading as="h1">Timeline</Heading>
      <Heading>Testing something out</Heading>

      <Separator />
      <div className="flex w-16 flex-col items-center gap-0.5 rounded-md bg-linear-to-b from-red-500 to-red-600 p-0.5 shadow-xs inset-ring inset-ring-red-800/20 text-shadow-sm">
        <p className="px-1 text-2xs font-semibold tracking-widest text-white uppercase">
          Jan
        </p>
        <p className="tracking-tightest h-full w-full rounded-sm bg-linear-to-b from-card/90 to-card pt-1 pb-1.5 text-center text-4xl leading-none shadow-md inset-shadow-xs">
          12
        </p>
      </div>

      <h2 className="font-medium">Pseudo Elements + counter</h2>
      <ol
        className={cn(
          'space-y-4 ps-10',
          '[&>li]:relative [&>li]:[counter-increment:item]',
          '[&>li]:before:absolute [&>li]:before:-left-10 [&>li]:before:flex [&>li]:before:size-6 [&>li]:before:items-center [&>li]:before:justify-center [&>li]:before:rounded-full [&>li]:before:bg-card [&>li]:before:text-xs [&>li]:before:font-medium [&>li]:before:text-card-foreground [&>li]:before:tabular-nums [&>li]:before:shadow-outline-highlight [&>li]:before:content-[counter(item)]',
          '[&>li]:after:absolute [&>li]:after:top-8 [&>li]:after:-bottom-2 [&>li]:after:-left-7.25 [&>li]:after:-z-1 [&>li]:after:w-0.5 [&>li]:after:rounded [&>li]:after:bg-border-soft',
          '[&>li]:last:after:hidden',
        )}
      >
        <li>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="relative before:absolute before:inset-1 before:-z-1 before:rounded-md before:bg-transparent before:transition-[background-color,inset] before:duration-200 before:ease-out-expo data-[state=open]:before:-inset-2 data-[state=open]:before:bg-accent"
          >
            <h3 className="font-medium">
              <CollapsibleTrigger className="flex cursor-pointer items-center gap-1 underline decoration-current/48 decoration-1 underline-offset-5 hover:decoration-current data-[state=open]:decoration-transparent">
                December{' '}
                <ChevronDownIcon
                  className={cn(
                    'text-icon transition-transform duration-100',
                    isOpen ? '-rotate-180' : 'rotate-0',
                  )}
                />
              </CollapsibleTrigger>
            </h3>
            <CollapsibleContent>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </li>
        <li>
          <h3 className="font-medium">November</h3>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </li>
        <li>
          <h3 className="font-medium">October</h3>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </li>
        <li>
          <h3 className="font-medium">September</h3>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </li>
      </ol>

      <h2 className="font-medium">Flex + border</h2>
      <ol className="space-y-4 ps-[2ch]">
        <li className="">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full border border-border bg-card" />
            <h3 className="font-medium">December</h3>
          </div>

          <p className="ms-1 border-l border-border py-2 pl-3 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </li>
        <li>
          <div className="flex items-start gap-2">
            <div className="mt-2 size-2 shrink-0 grow-0 rounded-full border border-border bg-card" />
            <h3 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Separator
              orientation="vertical"
              className="mx-[calc(--spacing(1)-0.5px)]"
            />
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </li>
        <li className="flex gap-2">
          {/* Indicator */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <div className="size-2 shrink-0 grow-0 rounded-full border border-border bg-card" />
            <Separator orientation="vertical" className="mx-auto flex-1" />
          </div>
          {/* Content */}
          <div className="mb-2 flex flex-col gap-2">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </li>
        <li>
          <h3>September</h3>
        </li>
      </ol>
    </div>
  );
}
