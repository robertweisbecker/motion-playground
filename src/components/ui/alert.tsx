import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { XCircleIcon, XIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const alertVariants = cva(
  'relative group/alert has-data-[slot=icon]:gap-x-2 gap-y-1 items-start ',
  {
    variants: {
      variant: {
        default:
          'bg-card [&_[data-slot=alert-title]]:text-foreground [&_[data-slot=alert-description]]:text-card-foreground [&_svg]:text-secondary-foreground shadow-none',
        destructive: [
          'bg-destructive text-destructive-foreground [&_svg]:text-destructive-foreground ring-[color-mix(in_srgb,var(--destructive)_80%,var(--foreground))]',
        ],
        error: [
          'bg-error-25 text-error-500 [&_svg]:text-error-400 ring-error-200',
          'dark:bg-error-900 dark:text-error-300  dark:ring-error-700',
        ],
        caution: [
          'bg-caution-25 text-caution-500 [&_svg]:text-caution-400 ring-caution-200',
          'dark:bg-caution-900 dark:text-caution-300  dark:ring-caution-700',
        ],
        info: [
          'bg-info-25 text-info-500 [&_svg]:text-info-400 ring-info-200',
          'dark:bg-info-900 dark:text-info-300  dark:ring-info-700',
        ],
        highlight: [
          'bg-highlight-25 text-highlight-500 [&_svg]:text-highlight-400 ring-highlight-200',
          'dark:bg-highlight-900 dark:text-highlight-300  dark:ring-highlight-700',
        ],
        brand: [
          'bg-brand-25 text-brand-500 [&_svg]:text-brand-400 ring-brand-200',
          'dark:bg-brand-900 dark:text-brand-300  dark:ring-brand-700',
        ],
        neutral: [
          'bg-neutral-25 text-neutral-600 [&_svg]:text-neutral-400  ring-border',
          'dark:bg-neutral-900 dark:text-neutral-300  dark:ring-white-alpha-100',
        ],
        warning: [
          'bg-warning-25 text-warning-500 [&_svg]:text-warning-400 ring-warning-200',
          'dark:bg-warning-900 dark:text-warning-300  dark:ring-warning-700',
        ],
        success: [
          'bg-success-25 text-success-500  [&_svg]:text-success-500 ring-success-200',
          'dark:bg-success-900 dark:text-success-300   dark:ring-success-700',
        ],
        outline:
          'ring-1 ring-border bg-card text-foreground [&_svg]:text-muted-foreground',
        plain: 'bg-card',
      },
      size: {
        default: [
          'ring w-full rounded-xl p-3 origin-bottom text-sm shadow-xs',
          'grid has-data-[slot=icon]:grid-cols-[calc(var(--spacing)*5)_1fr] has-data-[slot=icon]:has-data-[slot=alert-action]:grid-cols-[calc(var(--spacing)*5)_1fr_auto]',
        ],
        banner: [
          'w-full rounded-none py-2 shadow-lg origin-top text-sm leading-5 border-0 flex',
        ],
        inline: [
          'ring-0 w-fit p-2 gap-3 self-start rounded-xl text-sm items-center',
          'inline-flex',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface CustomAlertProps {
  icon?: React.ReactNode;
  dismissible?: boolean;
}

function Alert({
  className,
  variant,
  size,
  children,
  icon,
  dismissible,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof alertVariants> &
  CustomAlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      data-size={size}
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    >
      {icon && (
        <span
          data-slot="icon"
          className="relative grid size-5 place-items-center after:absolute after:-inset-0.5 after:rounded-sm after:bg-current/4"
        >
          <Slot className="z-1 size-4">{icon}</Slot>
        </span>
      )}
      {children}
      {dismissible && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              data-slot="alert-close"
              aria-label="Close"
              iconOnly
              size="sm"
              className="absolute end-1.5 top-1.5 text-inherit"
              variant="ghost"
            >
              <XIcon weight="bold" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Dismiss</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'text-sm font-medium group-has-data-[slot=alert-close]/alert:pe-4',
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        'group-has-data-[slot=icon]/alert:col-start-2',
        'max-sm:group-not-data-[size=inline]/alert:col-span-2 max-sm:group-not-data-[size=inline]/alert:col-start-1',
        className,
      )}
      {...props}
    />
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-content"
      className={cn(
        'flex flex-col flex-wrap gap-1 group-has-data-[slot=icon]/alert:col-start-2',
        '[&_[data-slot=alert-description]]:inline [&_[data-slot=alert-title]]:inline',
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        'self-start group-has-data-[slot=icon]/alert:group-not-has-data-[slot=alert-content]/alert:col-start-2 group-has-data-[slot=icon]/alert:group-has-data-[slot=alert-content]/alert:col-start-3 group-has-data-[slot=icon]/alert:group-has-data-[slot=alert-content]/alert:-m-1.5 in-data-[slot=alert-content]:mt-1.5',
        'max-sm:group-has-data-[slot=icon]/alert:group-not-data-[size=inline]/alert:group-not-has-data-[slot=alert-content]/alert:col-start-1',
        'group-has-data-[size=inline]/alert:mt-0',
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertContent, AlertAction };
