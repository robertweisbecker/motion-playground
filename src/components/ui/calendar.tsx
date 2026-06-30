'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
} from 'lucide-react';
import type * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { VariantProps } from 'class-variance-authority';

const buttonClassNames =
  "relative flex size-(--cell-size) text-sm items-center justify-center rounded-sm text-foreground not-in-data-selected:hover:text-accent-foreground not-in-data-selected:hover:bg-accent in-[class='range-middle']:hover:bg-accent disabled:pointer-events-none disabled:opacity-50";

// const buttonVariantClassNames = {
//   default: '',
//   outline: buttonVariants({ variant: 'outline' }),
// } as const;

export type CalendarButtonVariant = VariantProps<
  typeof buttonVariants
>['variant'];

function Calendar({
  className,
  classNames,
  disabled,
  disableWeekends = false,
  showOutsideDays = true,
  components: userComponents,
  cellSize = 'var(--spacing-button)',
  buttonVariant = 'ghost',
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: CalendarButtonVariant;
  cellSize?: string;
  disableWeekends?: boolean;
}) {
  const navButtonClasses = cn(
    // buttonClassNames,
    // buttonVariantClassNames[buttonVariant],
    buttonVariants({ variant: buttonVariant, size: 'xs' }),
    'm-[calc((var(--cell-size)-var(--spacing-button-xs))/2)]',
  );
  const defaultClassNames = {
    button_next: navButtonClasses,
    button_previous: navButtonClasses,
    caption_label: 'text-sm font-medium flex items-center gap-2 h-full',
    day: 'size-(--cell-size) text-sm p-0.5 isolate relative group/day overflow-hidden tabular-nums tracking-tighter',
    day_button: cn(
      buttonClassNames,
      'in-[[data-selected]:not(.range-middle)]:transition-[color,background-color,border-radius,box-shadow] in-data-disabled:cursor-not-allowed focus-visible:z-1 rounded-inherit in-data-selected:bg-foreground in-data-selected:text-background in-data-disabled:line-through in-data-outside:text-muted-foreground in-data-selected:in-data-outside:text-secondary-foreground outline-none focus-visible:ring-ring focus-visible:ring-[3px] in-[.range-middle]:hover:bg-muted  in-[.range-middle]:in-data-selected:bg-accent in-[.range-middle]:in-data-selected:text-foreground in-data-selected:not-in-[.range-middle]:shadow-button-highlight ',
      // 'group-last/day:rounded-end-lg! in-[.range-start:not(.range-end)]:rounded-e-none group-last/day:in-[.range-middle]:rounded-e-lg group-[:first-child]/day:in-[.range-middle]:rounded-s-lg in-[.range-end:not(.range-start)]:rounded-s-none in-[.range-middle]:rounded-none',
    ),
    dropdown: 'absolute bg-popover inset-0 opacity-0',
    dropdown_root:
      'relative transition-[box-shadow,background] ring ring-transparent has-hover:ring-border rounded-md px-2 h-[calc(var(--cell-size)-(var(--cell-size)-var(--spacing-button-sm)))] [&_svg]:pointer-events-none [&_svg]:-mx-1 underline underline-offset-4 decoration-1 decoration-input decoration-dotted [&_svg]:text-icon',
    dropdowns:
      'w-full flex items-center text-sm justify-center h-(--cell-size) gap-1 *:[span]:font-medium',
    hidden: 'invisible data-selected:bg-red-500',
    month: 'w-full min-h-[248px]',
    month_caption:
      'relative mx-(--cell-size) px-1 mb-1 flex h-(--cell-size) items-center justify-center z-2',
    months: 'relative flex flex-col sm:flex-row gap-2',
    nav: 'absolute top-0 flex w-full justify-between z-1',
    outside:
      'text-muted-foreground data-selected:**:text-muted-foreground  **:pointer-events-none opacity-50',
    range_end: 'range-end bg-accent rounded-e-md',
    range_middle:
      'range-middle bg-accent last:rounded-e-md first:rounded-s-md relative before:absolute before:inset-0 data-selected:before:border-y last:before:border-e first:before:border-s first:before:rounded-s-md last:before:rounded-e-md',
    range_start: 'range-start bg-accent rounded-s-md',
    today: 'border-border after:rounded-lg after:border-dashed',
    week_number:
      'size-(--cell-size) p-0 text-xs font-medium text-muted-foreground',
    weekday:
      'size-(--cell-size) pt-2 pb-1 text-xs font-normal text-muted-foreground',
    week: 'h-auto relative ',
  };
  const mergedClassNames: typeof defaultClassNames = Object.keys(
    defaultClassNames,
  ).reduce(
    (acc, key) => {
      const userClass = classNames?.[key as keyof typeof classNames];
      const baseClass =
        defaultClassNames[key as keyof typeof defaultClassNames];

      acc[key as keyof typeof defaultClassNames] = userClass
        ? cn(baseClass, userClass)
        : baseClass;

      return acc;
    },
    { ...defaultClassNames } as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: ({
      className,
      orientation,
      ...props
    }: {
      className?: string;
      orientation?: 'left' | 'right' | 'up' | 'down';
    }) => {
      if (orientation === 'left') {
        return (
          <ChevronLeftIcon
            className={cn(className, 'rtl:rotate-180')}
            {...props}
            aria-hidden="true"
          />
        );
      }

      if (orientation === 'right') {
        return (
          <ChevronRightIcon
            className={cn(className, 'rtl:rotate-180')}
            {...props}
            aria-hidden="true"
          />
        );
      }

      return (
        <ChevronsUpDownIcon
          className={className}
          {...props}
          aria-hidden="true"
        />
      );
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      className={cn(
        // 'w-fit [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(9)]',
        'w-fit rounded-xl bg-card p-1.5 shadow-sm',
        className,
      )}
      style={{ '--cell-size': cellSize } as React.CSSProperties}
      classNames={mergedClassNames}
      components={mergedComponents}
      data-slot="calendar"
      reverseYears={true}
      disabled={disableWeekends ? { dayOfWeek: [0, 6] } : disabled}
      // fixedWeeks={true}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
      }}
      mode="single"
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}

export { Calendar };
