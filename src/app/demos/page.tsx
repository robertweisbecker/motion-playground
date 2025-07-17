import './styles.css';
import { cn } from '@/lib/utils';

interface StackedComponentProps {
	length: number;
	unstack?: boolean;
	className?: string;
}
function StackedComponent({ length = 3, unstack, className }: StackedComponentProps) {
	return (
		<div className={cn('wrapper w-full', className)}>
			{new Array(length).fill(0).map((_, i) => (
				<div
					className={cn(
						'card',
						length > 1 && !unstack && 'card-stacked',
						length - i > 3 && 'opacity-100',
					)}
					data-stacked={unstack ? 'false' : length > 1 ? 'true' : 'false'}
					data-index={length - 1 - i}
					key={i}
					style={{ ['--index' as string]: length - 1 - i }}
				>
					<p className="text-muted-foreground">
						Card {length - i} of {length}
					</p>
				</div>
			))}
		</div>
	);
}

export default function Demo1() {
	return (
		<div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
			<main className="flex w-full flex-col gap-8 sm:items-start">
				<h1>
					<span className="text-muted-foreground">Experiment: </span>Stack
				</h1>
				<h2>Stacked Cards</h2>
				<code>length</code>

				<StackedComponent length={8} />
			</main>
		</div>
	);
}
