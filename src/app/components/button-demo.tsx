import { Button, buttonVariants } from '@/components/ui/button';
import { LucideChevronDown, LucideSettings, LucideStar } from 'lucide-react';
import { Fragment } from 'react';

export function ButtonDemo() {
	const variants = [
		'default',
		'elevated',
		'primary',
		'secondary',
		'outline',
		'ghost',
		'link',
		'destructive',
	];
	return (
		<div className="w-full">
			<h2 className="mb-4">Button</h2>
			<div className="align-start bg-card grid grid-cols-4 justify-items-start gap-4 p-4">
				{variants.map((variant) => (
					<Fragment key={variant}>
						<Button variant={variant as keyof typeof buttonVariants}>
							{variant.charAt(0).toUpperCase() + variant.slice(1)}
						</Button>
						<Button variant={variant as keyof typeof buttonVariants}>
							<LucideSettings className="" />
							Start icon
						</Button>
						<Button variant={variant as keyof typeof buttonVariants}>
							End icon
							<LucideChevronDown className="" />
						</Button>
						<Button size="icon" variant={variant as keyof typeof buttonVariants}>
							<LucideStar className="lucide-filled" />
						</Button>
					</Fragment>
				))}
			</div>
		</div>
	);
}
