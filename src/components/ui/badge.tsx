import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center justify-center rounded-full border border-current/10 text-center font-medium tracking-none w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow,border-color] overflow-hidden tabular-nums leading-none max-w-full truncate',
	{
		variants: {
			variant: {
				default: 'bg-current/20 text-current [a&]:hover:bg-current/40',
				secondary:
					'bg-secondary border-border text-secondary-foreground [a&]:hover:bg-secondary-hover',
				destructive:
					'border-destructive bg-destructive-secondary text-destructive [a&]:hover:bg-destructive/90',
				outline:
					'ring ring-[currentColor]/30 bg-card text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
				subtle: 'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20 ring-0',
				code: 'h-5 min-w-5 rounded-full px-1 font-mono tabular-nums text-xs',
				tag: 'px-3 py-1 text-md rounded-md',
			},
			shape: {
				default: 'rounded-md',
				pill: 'rounded-full',
			},
			size: {
				default: 'text-sm h-4.5 min-w-4.5 px-1.5 py-0.5',
				dot: 'size-2 p-0 border-0 my-auto overflow-hidden [&>*]:opacity-0 rounded-full bg-current',
			},
			color: {
				info: 'text-info',
				error: 'text-destructive',
				warning: 'text-warning',
			},
		},
		defaultVariants: {
			variant: 'code',
			size: 'default',
		},
	},
);

function Badge({
	className,
	variant,
	color,
	size,
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
					size,
				}),
				className,
			)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
