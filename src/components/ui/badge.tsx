import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import {
	cva,
	type VariantProps,
} from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center justify-center rounded-xs ring-inset ring-[0.5px] ring-border px-1.5 py-0.5 text-xs font-medium tracking-tight w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary-hover',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
				destructive:
					'border-transparent bg-destructive-secondary/40 ring-destructive/12 text-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'ring ring-[currentColor]/30 bg-card text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
				subtle:
					'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20 ring-0',
			},
			color: {
				info: 'text-info',
				error: 'text-destructive',
				warning: 'text-yellow-700',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

function Badge({
	className,
	variant,
	color,
	asChild = false,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			data-slot="badge"
			className={cn(
				badgeVariants({
					variant,
					color,
				}),
				className,
			)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
