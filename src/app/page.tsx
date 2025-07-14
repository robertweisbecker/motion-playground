import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { LucideStar } from 'lucide-react';

export default function Home() {
	return (
		<div className="mx-auto grid min-h-screen max-w-3xl grid-rows-[20px_1fr_20px] justify-items-stretch gap-10 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex w-full flex-col items-center gap-4 sm:items-start">
				<h1>Theme</h1>
				<div className="flex gap-4">
					<div className="size-10 rounded-lg bg-black/5 inset-shadow-2xs" />
					<div className="size-10 rounded-lg bg-black/5 inset-shadow-xs" />
					<div className="size-10 rounded-lg bg-black/5 inset-shadow-sm" />
				</div>
				<div className="flex gap-4">
					<div className="shadow-button bg-card min-h-10 rounded-lg p-2">
						shadow-button
					</div>
					<div className="bg-card size-10 rounded-lg shadow-2xs" />
					<div className="bg-card size-10 rounded-lg shadow-xs" />
					<div className="bg-card size-10 rounded-lg shadow-sm" />
					<div className="bg-card size-10 rounded-lg shadow-md" />
					<div className="bg-card size-10 rounded-lg shadow-lg" />
				</div>
				<h2>Components</h2>
				<h3>Button</h3>
				<div className="flex w-full gap-4">
					<Button variant={'default'}>
						Default
					</Button>
					<Button variant={'primary'}>
						Default
					</Button>
					<Button variant={'outline'}>
						Outline
					</Button>
					<Button variant={'elevated'}>
						Elevated
					</Button>
					<Button variant={'secondary'}>
						Secondary
					</Button>
					<Button variant={'ghost'}>
						Ghost
					</Button>
					<Button variant={'link'}>
						Link
					</Button>
					<Button
						variant={'destructive'}
					>
						Destructive
					</Button>
				</div>
				<Separator />
				<h3>Badge</h3>
				<div className="flex gap-2">
					<Badge>Badge</Badge>
					<Badge variant="secondary">
						Secondary
					</Badge>
					<Badge variant="destructive">
						Destructive
					</Badge>
					<Badge variant="outline">
						Outline
					</Badge>
					<Badge
						variant="outline"
						color="info"
					>
						Badge
					</Badge>
					<Badge
						variant="outline"
						color="error"
					>
						Badge
					</Badge>
					<Badge
						variant="outline"
						color="warning"
					>
						Badge
					</Badge>
					<Badge
						variant="subtle"
						color="info"
					>
						Badge
					</Badge>
					<Badge
						variant="subtle"
						color="error"
					>
						Badge
					</Badge>
					<Badge
						variant="subtle"
						color="warning"
					>
						Badge
					</Badge>
				</div>
				<Separator />
				<h3>Card</h3>
				<Card>
					<CardHeader>
						<CardTitle>
							Card Title
						</CardTitle>
						<CardDescription>
							Card Description
						</CardDescription>
						<CardAction>
							<Button
								size="icon"
								variant="secondary"
							>
								<LucideStar />{' '}
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
				<Separator />

				<h3>Tabs</h3>
				<section>
					<Tabs
						defaultValue="account"
						className="w-[400px]"
					>
						<TabsList>
							<TabsTrigger value="account">
								Account
							</TabsTrigger>
							<TabsTrigger value="password">
								Password
							</TabsTrigger>
						</TabsList>
						<TabsContent value="account">
							Make changes to your
							account here.
						</TabsContent>
						<TabsContent value="password">
							Change your password here.
						</TabsContent>
					</Tabs>
				</section>
				<Separator />
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left">
					<li className="mb-2 tracking-[-.01em]">
						Get started by editing{' '}
						<code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
							src/app/page.tsx
						</code>
						.
					</li>
					<li className="tracking-[-.01em]">
						Save and see your changes
						instantly.
					</li>
				</ol>

				<div className="flex flex-col items-center gap-4 sm:flex-row">
					<a
						className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="dark:invert"
							src="/vercel.svg"
							alt="Vercel logomark"
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read our docs
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
