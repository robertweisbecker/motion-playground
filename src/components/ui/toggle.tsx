'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps, cx } from 'class-variance-authority';

import { buttonVariants } from './button';

const toggleVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-md font-medium disabled:pointer-events-none disabled:opacity-50  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 transition-[color,box-shadow] aria-invalid:outline-destructive whitespace-nowrap",
	{
		variants: {
			variant: {
				default: 'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
				ghost:
					'data-[state=on]:bg-secondary text-muted-foreground hover:bg-accent data-[state=on]:text-foreground',
				outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
				destructive: '',
				unstyled: '',
			},
			size: {
				default: 'h-8 px-2 min-w-8 text-sm',
				sm: 'h-8 px-1.5 min-w-8 text-sm',
				lg: 'h-10 px-2.5 min-w-10 text-base',
			},
		},
		defaultVariants: {
			variant: 'ghost',
			size: 'default',
		},
	},
);

function Toggle({
	className,
	variant,
	iconOnly,
	size = 'default',
	...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants> &
	VariantProps<typeof buttonVariants>) {
	return (
		<TogglePrimitive.Root
			data-slot="toggle"
			className={cx(toggleVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Toggle, toggleVariants };
