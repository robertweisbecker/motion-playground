'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

function Tabs({
	className,
	...props
}: React.ComponentProps<
	typeof TabsPrimitive.Root
>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn(
				// 'flex flex-col gap-2',
				'bg-background border-border border-border rounded-lg border',
				className,
			)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	...props
}: React.ComponentProps<
	typeof TabsPrimitive.List
>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				// 'bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-lg p-0.5',
				'shadow-border-soft relative z-0 flex gap-0 px-2 py-1 shadow-[inset_0_-1px]',
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({
	className,
	...props
}: React.ComponentProps<
	typeof TabsPrimitive.Trigger
>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				// "text-muted-foreground text-medium hover:text-foreground data-[state=active]:text-foreground focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent py-1 pe-4 text-xl font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				'text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:before:bg-secondary text-md relative flex h-8 cursor-pointer items-center justify-center border-0 px-2 text-center break-keep whitespace-nowrap outline-none select-none before:absolute before:inset-x-0 before:inset-y-1 before:-z-1 before:rounded before:-outline-offset-1 before:outline-blue-800 focus-visible:before:outline-2 data-[state=active]:font-medium data-[state=active]:-tracking-[0.0125em]',
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<
	typeof TabsPrimitive.Content
>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn(
				'flex-1 px-3 py-1 outline-none',
				className,
			)}
			{...props}
		/>
	);
}

export {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
};
