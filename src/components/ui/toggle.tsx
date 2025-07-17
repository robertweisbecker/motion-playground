'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps, cx } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

const toggleVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 transition-[color,box-shadow] aria-invalid:outline-destructive whitespace-nowrap",
	{
		variants: {
			// variant: {
			// 	default: 'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
			// 	outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
			// 	destructive: '',
			// },
			size: {
				default: 'h-9 px-2 min-w-9',
				sm: 'h-8 px-1.5 min-w-8',
				lg: 'h-10 px-2.5 min-w-10',
			},
		},
		defaultVariants: {
			// variant: 'default',
			size: 'default',
		},
	},
);

function Toggle({
	className,
	variant,
	iconOnly,
	size,
	...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants> &
	VariantProps<typeof buttonVariants>) {
	return (
		<TogglePrimitive.Root
			data-slot="toggle"
			className={cx(buttonVariants({ variant, size, iconOnly }), className)}
			{...props}
		/>
	);
}

export { Toggle, toggleVariants };
