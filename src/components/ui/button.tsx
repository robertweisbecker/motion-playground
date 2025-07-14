import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import {
	cva,
	type VariantProps,
} from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	"ease transition-shadows duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium tracking-tight disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[1em] shrink-0 [&_svg]:shrink-0 focus-visible:outline-ring focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:z-1 cursor-pointer disabled:cursor-not-allowed",
	{
		variants: {
			size: {
				md: 'h-8 min-w-8 rounded-md px-3 py-2 has-[>svg]:px-2 text-sm',
				sm: 'h-8 min-w-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5 text-sm',
				lg: 'h-10 min-w-10 rounded-md px-4 has-[>svg]:px-4',
				icon: 'size-8 text-current/60 hover:text-current',
			},
			variant: {
				default:
					'bg-muted text-foreground border border-border-soft hover:bg-muted-hover hover:border-border active:inset-shadow-2xs active:border-border-strong',
				primary:
					'shadow-[inset_0_1px_0_rgba(255,255,255,0.20)] bg-primary text-primary-foreground hover:bg-zinc-800 hover:inset-shadow-2xs active:bg-zinc-800 active:inset-shadow-none active:shadow-xs border border-zinc-800',
				destructive:
					'bg-destructive text-white ring-1 ring-black/20 ring-inset shadow-button-highlight hover:bg-red-700 active:bg-red-800',
				outline:
					'bg-background border border-border-strong hover:bg-accent hover:text-accent-foreground hover:border-border-strong active:bg-zinc-200 active:border-current  dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary-hover active:inset-shadow-xs active:bg-secondary-active',
				ghost:
					'shadow-none rounded-xs! active:shadow-none hover:bg-secondary-hover hover:text-accent-foreground active:bg-secondary-active dark:hover:bg-secondary-hover -mx-2 px-1',
				link: 'shadow-none active:shadow-none text-foreground underline underline-offset-3 decoration-1 decoration-current/20 hover:decoration-current px-0',
				elevated:
					'bg-background shadow-button-highlight hover:bg-muted active:bg-secondary active:shadow-none active:inset-shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<
		typeof buttonVariants
	> & {
		asChild?: boolean;
	}) {
	const Comp = asChild
		? Slot
		: 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					size,
					className,
				}),
			)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
