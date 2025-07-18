import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
	'inline-flex items-center justify-center ring ring-border font-mono w-fit shrink-0 gap-1 [&>svg]:pointer-events-none overflow-hidden tabular-nums leading-none max-w-full truncate self-middle align-middle',
	{
		variants: {
			variant: {
				default: 'bg-gradient-to-b from-card text-foreground to-muted font-normal',
				tag: 'px-3 py-1 text-md rounded-md',
			},
			size: {
				default:
					'min-h-5 min-w-5 rounded-xs px-1 py-0.5 -my-1 text-sm shadow-[0_1px_2px] shadow-input',
				inherit: 'h-auto min-w-5 rounded-[0.25em] px-[0.5em] py-[0.125em] text-[0.75em]',
			},
			color: {
				info: 'text-blue-600',
				error: 'text-destructive',
				warning: 'text-yellow-600',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Code({
	className,
	variant,
	color,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof codeVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'code';

	return (
		<Comp
			data-slot="badge"
			className={cn(
				codeVariants({
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

export { Code, codeVariants };
