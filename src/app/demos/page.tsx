import {
	ArrowDownToLineIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpFromLineIcon,
	ArrowUpRightIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { CardHover } from '@/components/demos/card-hover';
import Toaster from '@/components/demos/toast';
import { StackedComponent } from '@/components/demos/stacked-component';
import { DownloadButton } from '@/components/demos/download-button';
import { Toggle } from '@/components/ui/toggle';
import { Code } from '@/components/ui/code';

export default function Demo1() {
	return (
		<div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
			<main className="w-full">
				<h1>CSS Playground</h1>
				<br />
				<section>
					<h2>Stacked Cards</h2>
					<br />
					<StackedComponent length={3} />
				</section>
				<Separator />
				<section>
					<h2>Animated Button Icons</h2>

					<h3>Styling</h3>
					<div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
						<p>CSS Modules</p>
						<DownloadButton />
						<p>Tailwind</p>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="elevated"
									iconOnly
									size="icon-lg"
									className="group inline-grid overflow-clip"
									aria-label="Download"
								>
									<ArrowDownToLineIcon className="ease col-start-1 row-start-1 -translate-y-10 opacity-0 transition-[translate,opacity] group-hover:translate-y-0 group-hover:opacity-100" />
									<ArrowDownToLineIcon className="ease col-start-1 row-start-1 transition-[translate,opacity] group-hover:translate-y-10 group-hover:opacity-0" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="bottom">Download</TooltipContent>
						</Tooltip>
					</div>
					<h3>Directions</h3>
					<div className="grid-row-4 grid grid-cols-2 justify-items-start gap-2">
						<p>Down</p>
						<Button size="lg" className="group overflow-clip">
							<span
								className={cn(
									'grid',
									'[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
									'[&_svg]:col-start-1 [&_svg]:row-start-1',
								)}
							>
								<ArrowDownToLineIcon className="-translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
								<ArrowDownToLineIcon className="group-hover:translate-y-[150%] group-hover:opacity-0" />
							</span>
							Download
						</Button>
						<p>Up</p>
						<Button variant="secondary" size="lg" className="group overflow-clip">
							Upload
							<span
								className={cn(
									'grid',
									'[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
									'[&_svg]:col-start-1 [&_svg]:row-start-1',
								)}
							>
								<ArrowUpFromLineIcon className="translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
								<ArrowUpFromLineIcon className="group-hover:-translate-y-[150%] group-hover:opacity-0" />
							</span>
						</Button>
						<p>Left</p>
						<Button variant="outline" size="lg" className="group overflow-clip">
							<span
								className={cn(
									'grid',
									'[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
									'[&_svg]:col-start-1 [&_svg]:row-start-1',
								)}
							>
								<ArrowLeftIcon className="translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
								<ArrowLeftIcon className="group-hover:-translate-x-[150%] group-hover:opacity-0" />
							</span>
							Previous
						</Button>
						<p>Right</p>
						<Button variant="primary" size="lg" className="group overflow-clip">
							Next
							<span
								className={cn(
									'grid',
									'[&_svg]:ease-in-out-circ [&_svg]:transition-[translate,opacity] [&_svg]:duration-200',
									'[&_svg]:col-start-1 [&_svg]:row-start-1',
								)}
							>
								<ArrowRightIcon className="-translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
								<ArrowRightIcon className="group-hover:translate-x-[150%] group-hover:opacity-0" />
							</span>
						</Button>
					</div>
				</section>
				<Separator />
				<section>
					<h2>Card Hover</h2>
					<CardHover title="Project" description="Description goes here..." />
				</section>
				<Separator />
				<section>
					<h2>Toast</h2>
					<div className="flex size-[360px] flex-col justify-end overflow-y-auto rounded-2xl border bg-gray-50 p-4">
						<Toaster />
					</div>
				</section>
				<Separator />
				<section>
					<h2>Native Popover</h2>
					<div className="grid grid-cols-2">
						<div>
							<Button popoverTarget="my-popover" variant="elevated" className="relative">
								Popover with backdrop
							</Button>
							<div
								popover="auto"
								id="my-popover"
								aria-labelledby="my-popover-title"
								aria-describedby="my-popover-desc"
								className="bg-card fixed inset-y-0 mx-auto my-auto transform overflow-hidden rounded-lg border p-4 opacity-0 shadow-2xl transition-[opacity,transform,translate,scale] transition-discrete duration-300 backdrop:bg-transparent backdrop:transition-colors open:translate-y-0 open:scale-100 open:opacity-100 open:backdrop:bg-black/30 sm:w-full sm:max-w-96 starting:open:translate-y-4 starting:open:scale-90 starting:open:opacity-0 starting:open:backdrop:bg-transparent"
							>
								<h2 id="my-popover-title" className="mt-0 mb-3 text-base font-medium text-balance">
									This is a native HTML popover. You can read up on{' '}
									<a
										href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
										target="_blank"
										rel="noreferrer"
										className="link"
									>
										MDN
										<ArrowUpRightIcon />
									</a>
									.
								</h2>
								<p id="my-popover-desc">
									Click outside or press <Code>Esc</Code> to dismiss.
								</p>
							</div>
						</div>
						<div className="relative">
							<Button
								popoverTarget="my-popover-2"
								variant="elevated"
								className="[anchor-name:--trigger2]"
							>
								Anchor, no backdrop
							</Button>
							<div
								popover="auto"
								id="my-popover-2"
								aria-labelledby="my-popover-title"
								aria-describedby="my-popover-desc"
								className="bg-card [position-anchor]:--trigger2 ease-in-circ absolute inset-y-[unset] right-0 bottom-[anchor(top)] left-[anchor(left)] z-50 mb-1 max-w-3xs transform overflow-hidden rounded-lg border px-3 py-2 opacity-0 shadow-lg transition-[opacity,transform,translate,scale] transition-discrete duration-200 open:translate-y-0 open:scale-100 open:opacity-100 starting:open:translate-y-1 starting:open:scale-90 starting:open:opacity-0"
							>
								<h3 id="my-popover-title" className="mt-0 mb-1 text-sm font-medium">
									Howdy!
								</h3>
								<p id="my-popover-desc" className="text-sm">
									This should be accessible without any additional config
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
