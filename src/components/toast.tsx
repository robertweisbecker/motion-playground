'use client';

import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import {
  XCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XIcon,
  WarningOctagonIcon,
} from '@phosphor-icons/react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Button } from './ui/button';
import { Spinner } from './experimental/spinner';

const toastManager = Toast.createToastManager();

type ToastVariant = 'default' | 'error' | 'info' | 'success' | 'warning';
type ToastType = 'error' | 'info' | 'success' | 'warning' | 'loading' | null;

interface ToastTypeConfig {
  variant: ToastVariant;
  defaultIndicator: React.ReactNode;
}

const TOAST_TYPE_CONFIG: Record<Exclude<ToastType, null>, ToastTypeConfig> = {
  error: {
    variant: 'error',
    defaultIndicator: <WarningOctagonIcon weight="duotone" />,
  },
  info: {
    variant: 'info',
    defaultIndicator: <InfoIcon weight="duotone" />,
  },
  success: {
    variant: 'success',
    defaultIndicator: <CheckCircleIcon weight="duotone" />,
  },
  warning: {
    variant: 'warning',
    defaultIndicator: <WarningIcon weight="duotone" />,
  },
  loading: {
    variant: 'default',
    defaultIndicator: <Spinner size={20} color="currentColor" />,
  },
};

const toastVariants = cva(
  // Base styles
  'outline shadow-lg backdrop-blur-xs bg-card/96 text-foreground dark:-outline-offset-1 ',
  {
    variants: {
      variant: {
        default: [
          'bg-popover/80 outline-outline [&_[data-slot=indicator]]:text-icon',
          'dark:outline-border-alpha',
        ],
        error: [
          '[&_[data-slot=indicator]]:text-error-400 outline-error-400/30',
          'dark:bg-error-950/72 dark:bg-blend-overlay bg-error-25/80',
        ],
        info: [
          '[&_[data-slot=indicator]]:text-info-400 outline-info-500/30',
          'dark:bg-info-950/72 dark:bg-blend-overlay bg-info-25/80',
        ],
        success: [
          '[&_[data-slot=indicator]]:text-success-500 outline-success-500/30',
          'dark:bg-success-950/72 dark:bg-blend-overlay bg-success-25/80',
        ],
        warning: [
          '[&_[data-slot=indicator]]:text-warning-400 outline-warning-500/30',
          'dark:bg-warning-950/72 dark:bg-blend-overlay bg-warning-25/80',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface ToastProviderProps extends Toast.Provider.Props {
  position?: ToastPosition;
}

function ToastProvider({
  children,
  position = 'bottom-right',
  ...props
}: ToastProviderProps) {
  return (
    <Toast.Provider toastManager={toastManager} {...props}>
      {children}
      <ToastList position={position} />
    </Toast.Provider>
  );
}

function ToastList({ position = 'bottom-right' }: { position: ToastPosition }) {
  const { toasts } = Toast.useToastManager();

  const isTop = position.startsWith('top');

  return (
    <Toast.Portal data-slot="toast-portal">
      <Toast.Viewport
        className={cn(
          'fixed z-50 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]',
          // Vertical positioning
          'data-[position*=top]:top-(--toast-inset)',
          'data-[position*=bottom]:bottom-(--toast-inset)',
          // Horizontal positioning
          'data-[position*=left]:left-(--toast-inset)',
          'data-[position*=right]:right-(--toast-inset)',
          'data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2',
        )}
        data-position={position}
        data-slot="toast-viewport"
      >
        {toasts.map((toast) => {
          // Map toast type to variant and default indicator
          const toastType = toast.type as ToastType;
          const config =
            toastType && toastType in TOAST_TYPE_CONFIG
              ? TOAST_TYPE_CONFIG[toastType]
              : { variant: 'default' as ToastVariant, defaultIndicator: null };

          const variant = config.variant;

          const toastWithCustomProps = toast as typeof toast & {
            indicator?: React.ReactNode;
            closeButton?: boolean;
            timeout?: number;
          };

          // Use custom indicator if provided, otherwise use default for the type
          const indicator =
            toastWithCustomProps.indicator ?? config.defaultIndicator;

          const showCloseButton =
            toastWithCustomProps.closeButton ||
            toastWithCustomProps.timeout === 0;

          return (
            <Toast.Root
              className={cn(
                // CSS Variables (simplified names)
                '[--gap:--spacing(3)] [--height:var(--toast-frontmost-height,var(--toast-height))] [--peek:--spacing(3)] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]',
                // Offset-y variable (position-aware)
                'data-[position*=top]:[--offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--gap)+var(--toast-swipe-movement-y))]',
                'data-[position*=bottom]:[--offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--gap)*-1+var(--toast-swipe-movement-y))]',
                // Layout
                'absolute z-[calc(9999-var(--toast-index))] w-full rounded-2xl p-3 select-none',
                'h-[var(--height)] data-[expanded]:h-[var(--toast-height)]',
                // Base positioning using data-position
                'data-[position*=right]:right-0 data-[position*=right]:left-auto',
                'data-[position*=left]:right-auto data-[position*=left]:left-0',
                'data-[position*=center]:right-0 data-[position*=center]:left-0',
                'data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-top',
                'data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-bottom',
                // Variant-based styling (status-dependent)
                toastVariants({ variant }),
                // Gap fill for hover
                'after:absolute after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[""]',
                'data-[position*=top]:after:top-full',
                'data-[position*=bottom]:after:bottom-full',
                // Default state transform
                'data-[position*=top]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]',
                'data-[position*=bottom]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]',
                // Limited state
                'data-limited:opacity-0',
                // Expanded state
                'data-[position]:data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]',
                // Transitions
                '[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
                // Starting animations
                'data-[position*=top]:data-starting-style:[transform:translateY(-150%)]',
                'data-[position*=bottom]:data-starting-style:[transform:translateY(150%)]',
                // Ending animations
                'data-ending-style:opacity-0',
                // Ending animations (direction-aware, not limited, no swipe direction)
                'data-[position*=top]:data-ending-style:not-data-limited:not-data-swipe-direction:[transform:translateY(-150%)]',
                'data-[position*=bottom]:data-ending-style:not-data-limited:not-data-swipe-direction:[transform:translateY(150%)]',
                // Ending animations (swipe directions)
                'data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
                'data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
                'data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
                'data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
                // Ending animations (expanded)
                'data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
                'data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
                'data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
                'data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
              )}
              data-position={position}
              key={toast.id}
              swipeDirection={
                position.includes('center')
                  ? [isTop ? 'up' : 'down']
                  : position.includes('left')
                    ? ['left', isTop ? 'up' : 'down']
                    : ['right', isTop ? 'up' : 'down']
              }
              toast={toast}
            >
              <Toast.Content className="flex grow items-start text-sm transition-opacity duration-250 data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100">
                {indicator ? (
                  <div
                    data-slot="indicator"
                    className="size-[1lh] [&_*]:pointer-events-none [&_*]:shrink-0 [&_svg]:size-5"
                  >
                    {indicator}
                  </div>
                ) : null}
                <div className="flex flex-col gap-1 px-2">
                  <Toast.Title className="font-medium" data-slot="title" />
                  <Toast.Description data-slot="description" />
                </div>

                <div className="flex items-center gap-1">
                  {toast.actionProps && (
                    <Toast.Action
                      className={buttonVariants({ size: 'xs' })}
                      data-slot="toast-action"
                    >
                      {toast.actionProps.children}
                    </Toast.Action>
                  )}
                </div>
              </Toast.Content>
              {showCloseButton && (
                <Toast.Close
                  render={(props) => (
                    <Button
                      {...props}
                      className="absolute top-2 right-2"
                      variant="ghost"
                      size="xs"
                      iconOnly
                      aria-label="Close"
                    >
                      <XIcon weight="bold" />
                    </Button>
                  )}
                />
              )}
            </Toast.Root>
          );
        })}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export { ToastProvider, type ToastPosition, toastManager };
