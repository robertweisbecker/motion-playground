import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
	'relative w-full rounded-lg py-3 px-4 text-md grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current lucide-duo',
	{
		variants: {
			variant: {
				default: 'bg-accent text-accent-foreground',
				destructive: 'text-red bg-red/8 [&>svg]:text-current/80',
				info: 'bg-blue-200/30 text-blue [&>svg]:text-current/80',
				warning: 'bg-yellow-400/12 text-yellow-800 [&>svg]:text-current/80',
				success: 'bg-green-700/10 text-green-800 [&>svg]:text-green-600',
				outline: 'ring-1 ring-border bg-card text-foreground [&>svg]:text-muted-foreground',
				plain: 'p-0 bg-card',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

function Alert({
	className,
	variant,
	...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
	return (
		<div
			data-slot="alert"
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-title"
			className={cn('col-start-2 line-clamp-1 min-h-4 text-sm leading-5 font-medium', className)}
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

export { Alert, AlertTitle, AlertDescription };
