import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { XCircleIcon, XIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';

const alertVariants = cva(
  'relative w-full group/alert grid has-data-[slot=icon]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-data-[slot=icon]:gap-x-2.5 gap-y-0.5 items-start  ring-[1px] shadow-2xs',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-foreground [&_svg]:text-secondary-foreground',
        destructive: [
          'bg-error-25 text-error-600 [&_svg]:text-error-400 ring-error-400/20',
          'dark:bg-error-975 dark:text-error-300 dark:[&_svg]:text-error-500 dark:ring-error-800',
        ],
        info: [
          'bg-info-25 text-info-600 [&_svg]:text-info-400 ring-info-500/20',
          'dark:bg-info-975 dark:text-info-300 dark:[&_svg]:text-info-500 dark:ring-info-800',
        ],
        highlight: [
          'bg-highlight-25 text-highlight-600 [&_svg]:text-highlight-400 ring-highlight-500/20',
          'dark:bg-highlight-975 dark:text-highlight-300 dark:[&_svg]:text-highlight-500 dark:ring-highlight-800',
        ],
        brand: [
          'bg-brand-25 text-brand-600 [&_svg]:text-brand-400 ring-brand-500/20',
          'dark:bg-brand-975 dark:text-brand-300 dark:[&_svg]:text-brand-500 dark:ring-brand-800',
        ],
        neutral: [
          'bg-neutral-25 text-neutral-600 [&_svg]:text-neutral-400 ring-neutral-500/20',
          'dark:bg-neutral-950 dark:text-neutral-300 dark:[&_svg]:text-neutral-500 dark:ring-neutral-800',
        ],
        warning: [
          'bg-warning-25 text-warning-600 [&_svg]:text-warning-400 ring-warning-500/20',
          'dark:bg-warning-975 dark:text-warning-300 dark:[&_svg]:text-warning-500 dark:ring-warning-800',
        ],
        success: [
          'bg-success-25 text-success-600  [&_svg]:text-success-500 ring-success-500/20',
          'dark:bg-success-975 dark:text-success-300  dark:[&_svg]:text-success-500 dark:ring-success-800',
          // '*:data-[slot=icon]:bg-success-300 *:data-[slot=icon]:rounded-sm',
        ],
        outline: 'ring-1 ring-border bg-card text-foreground [&_svg]:text-muted-foreground',
        plain: 'p-0 bg-card',
      },
      size: {
        default: ['rounded-lg p-3 origin-bottom text-sm'],
        banner: ['rounded-none py-2 shadow-lg origin-top text-sm leading-5 border-0 flex'],
        inline: [''],
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
  children,
  icon,
  dismissible,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants> & CustomAlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <Slot data-slot="icon" className="grid size-5 place-items-center">
          {icon}
        </Slot>
      )}
      {children}
      {dismissible && (
        <Button
          aria-label="Close"
          iconOnly
          size="sm"
          className="absolute end-2.5 top-2.5 text-inherit"
          variant="invisible"
        >
          <XIcon weight="bold" />
        </Button>
      )}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 line-clamp-1 text-sm/5 font-[450]', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="alert-content" className={cn('col-start-2 grid gap-1', className)} {...props} />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertContent };
