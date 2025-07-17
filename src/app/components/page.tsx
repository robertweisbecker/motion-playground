import Image from 'next/image';
import { Fragment } from 'react';
import {
	AlertCircleIcon,
	CheckCircle2Icon,
	ChevronDownIcon,
	LucideChevronDown,
	LucideSettings,
	LucideGalleryHorizontal,
	LucideStar,
	LucideSettings2,
	PopcornIcon,
} from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import * as Menu from '@/components/ui/dropdown-menu';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ButtonDemo } from './button-demo';

function InputDemo() {
	return (
		<div className="w-full">
			<h2 className="mb-4">Input</h2>
			<div className="flex flex-col gap-4">
				<div className="grid w-full max-w-sm items-center gap-1">
					<Label htmlFor="email">Email</Label>
					<Input type="email" id="email" placeholder="Email" />
					<p className="text-xs">Description</p>
				</div>
			</div>
		</div>
	);
}

function ToggleDemo() {
	return (
		<div className="w-full">
			<h2 className="mb-4">Toggle</h2>
			<div className="flex flex-row gap-2">
				<Toggle variant="ghost" iconOnly>
					<LucideStar />
				</Toggle>
				<Toggle variant="ghost">Toggle me</Toggle>
			</div>
		</div>
	);
}

function TooltipDemo() {
	return (
		<div className="w-full">
			<h2 className="mb-4">Tooltip</h2>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
}

export default function Components() {
	const buttonDemo = [
		'primary',
		'secondary',
		'outline',
		'destructive',
		'default',
		'elevated',
		'ghost',
		'link',
	];
	return (
		<div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
			<main className="flex w-full flex-col gap-8 sm:items-start">
				<h1>Components</h1>

				<ButtonDemo />
				<Separator />
				<InputDemo />
				<Separator />
				<ToggleDemo />
				<Separator />
				<TooltipDemo />
				<Separator />
				<Separator />
				<h3>Alert</h3>
				<div className="grid w-full items-start gap-4">
					<Alert variant={'success'}>
						<CheckCircle2Icon />
						<AlertTitle>Success! Your changes have been saved</AlertTitle>
						<AlertDescription>This is an alert with icon, title and description.</AlertDescription>
					</Alert>

					<Alert variant="destructive">
						<AlertCircleIcon />
						<AlertTitle>Unable to process your payment.</AlertTitle>
						<AlertDescription>
							<p>Please verify your billing information and try again.</p>
							<ul className="list-inside list-disc text-sm">
								<li>Check your card details</li>
								<li>Ensure sufficient funds</li>
								<li>Verify billing address</li>
							</ul>
						</AlertDescription>
					</Alert>
				</div>

				<Separator />
				<h3>Badge</h3>
				<div className="flex gap-2">
					<Badge>Badge</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="destructive" size="dot">
						Destructive
					</Badge>
					<Badge variant="default" color="info" size="dot">
						info
					</Badge>
					<Badge variant="outline">Outline</Badge>
					<Badge variant="outline" color="info">
						Badge
					</Badge>
					<Badge variant="outline" color="error">
						Badge
					</Badge>
					<Badge variant="outline" color="warning">
						Badge
					</Badge>
					<Badge variant="subtle" color="info">
						Badge
					</Badge>
					<Badge variant="subtle" color="error">
						Badge
					</Badge>
					<Badge variant="subtle" color="warning">
						Badge
					</Badge>
				</div>
				<Separator />
				<h3>Card</h3>
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description</CardDescription>
						<CardAction>
							<Button size="icon">
								<LucideStar />{' '}
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter className="animation-pulse">
						<p>Card Footer</p>
					</CardFooter>
				</Card>
				<Separator />
				<h3>Dropdown Menu</h3>
				<DropdownMenuDemo />
				<Separator />
				<h3>Tabs</h3>
				<section className="w-full">
					<Tabs defaultValue="account">
						<TabsList>
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="profile">Profile</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>

							<TabsTrigger value="projects">Projects</TabsTrigger>
						</TabsList>
						<TabsContent value="account">Make changes to your account here.</TabsContent>
						<TabsContent value="profile">Change your Profile here.</TabsContent>
						<TabsContent value="password">Change your password here.</TabsContent>
						<TabsContent value="projects">
							<LucideGalleryHorizontal className="mx-auto size-6" />
						</TabsContent>
					</Tabs>
				</section>
				<Separator />
			</main>
			<footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}

export function DropdownMenuDemo() {
	return (
		<Menu.DropdownMenu>
			<Menu.DropdownMenuTrigger asChild>
				<Button variant="outline">Open</Button>
			</Menu.DropdownMenuTrigger>
			<Menu.DropdownMenuContent className="w-56" align="start">
				<Menu.DropdownMenuLabel>My Account</Menu.DropdownMenuLabel>
				<Menu.DropdownMenuGroup>
					<Menu.DropdownMenuItem>
						Profile
						<Menu.DropdownMenuShortcut>⇧⌘P</Menu.DropdownMenuShortcut>
					</Menu.DropdownMenuItem>
					<Menu.DropdownMenuItem>
						Billing
						<Menu.DropdownMenuShortcut>⌘B</Menu.DropdownMenuShortcut>
					</Menu.DropdownMenuItem>
					<Menu.DropdownMenuItem>
						Settings
						<Menu.DropdownMenuShortcut>⌘S</Menu.DropdownMenuShortcut>
					</Menu.DropdownMenuItem>
					<Menu.DropdownMenuItem>
						Keyboard shortcuts
						<Menu.DropdownMenuShortcut>⌘K</Menu.DropdownMenuShortcut>
					</Menu.DropdownMenuItem>
				</Menu.DropdownMenuGroup>
				<Menu.DropdownMenuSeparator />
				<Menu.DropdownMenuGroup>
					<Menu.DropdownMenuItem>Team</Menu.DropdownMenuItem>
					<Menu.DropdownMenuSub>
						<Menu.DropdownMenuSubTrigger>Invite users</Menu.DropdownMenuSubTrigger>
						<Menu.DropdownMenuPortal>
							<Menu.DropdownMenuSubContent>
								<Menu.DropdownMenuItem>Email</Menu.DropdownMenuItem>
								<Menu.DropdownMenuItem>Message</Menu.DropdownMenuItem>
								<Menu.DropdownMenuSeparator />
								<Menu.DropdownMenuItem>More...</Menu.DropdownMenuItem>
							</Menu.DropdownMenuSubContent>
						</Menu.DropdownMenuPortal>
					</Menu.DropdownMenuSub>
					<Menu.DropdownMenuItem>
						New Team
						<Menu.DropdownMenuShortcut>⌘+T</Menu.DropdownMenuShortcut>
					</Menu.DropdownMenuItem>
				</Menu.DropdownMenuGroup>
				<Menu.DropdownMenuSeparator />
				<Menu.DropdownMenuItem>GitHub</Menu.DropdownMenuItem>
				<Menu.DropdownMenuItem>Support</Menu.DropdownMenuItem>
				<Menu.DropdownMenuItem disabled>API</Menu.DropdownMenuItem>
				<Menu.DropdownMenuSeparator />
				<Menu.DropdownMenuItem>
					Log out
					<Menu.DropdownMenuShortcut>⇧⌘Q</Menu.DropdownMenuShortcut>
				</Menu.DropdownMenuItem>
			</Menu.DropdownMenuContent>
		</Menu.DropdownMenu>
	);
}
