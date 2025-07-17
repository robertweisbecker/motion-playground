import {
	AlertCircleIcon,
	CheckCircle2Icon,
	LucideLineSquiggle,
	LucideToolCase,
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
import { LucideChevronRight, LucideGalleryHorizontal, LucideStar } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import Link from 'next/link';
function InputDemo() {
	return (
		<div className="flex flex-col gap-4">
			<div className="grid w-full max-w-sm items-center gap-1">
				<Label htmlFor="email" label="Email" info="Some info here" />
				<Input type="email" id="email" placeholder="Email" />
				<p className="text-sm">Description</p>
			</div>
		</div>
	);
}

function ToggleDemo() {
	return (
		<div className="flex flex-col gap-4">
			<Toggle variant="destructive">
				<LucideStar />
			</Toggle>
		</div>
	);
}

export default function Home() {
	const buttonDemo = ['primary', 'secondary', 'outline', 'destructive', 'default', 'ghost', 'link'];
	return (
		<div className="mx-auto grid min-h-screen max-w-3xl grid-rows-[20px_1fr_20px] justify-items-stretch gap-10 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex w-full flex-col items-center gap-4 sm:items-start">
				<LucideLineSquiggle
					// strokeWidth={2}
					// absoluteStrokeWidth
					// strokeDasharray={2}
					className={'size-10 text-gray-400'}
					// strokeLinejoin="miter"
					strokeLinecap="square"
				/>
				<h1>Experiments</h1>
				<ul className="flex flex-col gap-2 text-lg">
					<li>
						<Link className="link" href="/demos">
							Animated stack
						</Link>
						: Sonner-esque hover?
					</li>
					<li>
						<Link className="link" href="/demos">
							Faux elastic tab indicator
						</Link>
					</li>
				</ul>
			</main>
		</div>
	);
}
