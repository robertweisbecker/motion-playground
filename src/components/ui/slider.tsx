'use client';

import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Label } from './label';

const sliderVariants = cva(
  'data-[orientation=horizontal]:w-full flex flex-col gap-1',
  {
    variants: {
      variant: {
        default: '',
        contained: '',
        pill: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const trackVariants = cva(
  'relative grow select-none rounded-xl bg-muted outline-border-alpha -outline-offset-1 outline rounded-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full',
  {
    variants: {
      variant: {
        default: [
          'data-[orientation=horizontal]:h-1',
          'data-[orientation=vertical]:w-1',
        ],
        contained: [
          'data-[orientation=horizontal]:h-4',
          'data-[orientation=vertical]:w-4',
        ],
        pill: [
          'rounded-sm',
          'data-[orientation=horizontal]:h-button',
          'data-[orientation=vertical]:w-button',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface SliderProps
  extends Omit<SliderPrimitive.Root.Props, 'thumbAlignment'>,
    VariantProps<typeof sliderVariants> {}

function Slider({
  className,
  children,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant = 'default',
  ...props
}: SliderProps) {
  const _values = (() => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : [value];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [min];
  })();

  const isRange = _values.length > 1;

  return (
    <SliderPrimitive.Root
      className={cn(sliderVariants({ variant }), className)}
      defaultValue={defaultValue}
      max={max}
      min={min}
      thumbAlignment={variant === 'default' ? 'center' : 'edge'}
      value={value}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        className={cn(
          'flex touch-none select-none data-[disabled]:pointer-events-none data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:flex-col',
          variant === 'contained' && 'relative z-10 rounded-full',
          className,
        )}
        data-slot="slider-control"
      >
        <SliderPrimitive.Track
          className={cn(trackVariants({ variant }))}
          data-slot="slider-track"
        >
          <SliderPrimitive.Indicator
            className={cn(
              'bg-primary select-none',
              variant === 'default' && 'rounded-full',
              variant === 'pill' && 'bg-icon',
              variant === 'contained' &&
                !isRange && [
                  'data-[orientation=horizontal]:rounded-l-full data-[orientation=horizontal]:rounded-r-none',
                  'data-[orientation=vertical]:rounded-t-none data-[orientation=vertical]:rounded-b-full',
                ],
            )}
            data-slot="slider-indicator"
          />
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              index={index}
              className={cn(
                'block shrink-0 bg-neutral-50 shadow-button-base transition-shadow select-none hover:bg-white',
                'outline outline-input-alpha dark:outline-background',
                'active:data-[dragging]:ring-3 active:data-[dragging]:ring-ring/50 active:data-[dragging]:outline-ring',
                'has-[:focus-visible]:shadow-none data-[dragging]:shadow-none',
                variant !== 'pill' && 'size-4 rounded-full',
                variant === 'pill' &&
                  'h-[calc(var(--spacing-button)+2px)] w-2 rounded-sm',
              )}
              data-slot="slider-thumb"
              key={String(index)}
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return (
    <SliderPrimitive.Value
      className={cn('ms-auto self-end text-foreground', className)}
      data-slot="slider-value"
      {...props}
    />
  );
}

function SliderField({
  label,
  info,
  ...props
}: SliderProps & { label?: string; info?: React.ReactNode }) {
  return (
    <Slider {...props}>
      <div className="flex gap-1">
        <Label label={label} info={info} />
        <SliderValue />
      </div>
    </Slider>
  );
}

export { Slider, SliderValue, SliderField };
