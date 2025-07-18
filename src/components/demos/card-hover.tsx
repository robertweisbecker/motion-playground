import { cn } from '@/lib/utils';
import styles from './card-hover.module.css';
import { Maximize2Icon } from 'lucide-react';

interface CardProps {
	title: string;
	description?: string;
}

export function CardHover({ title = 'Project', description }: CardProps) {
	return (
		<a href="#" className={cn(`${styles.Card}`, 'size-80')} aria-describedby="card-description">
			<div className={styles.Description} id="card-description">
				<div className="flex flex-col gap-1">
					<p className={styles.Title}>{title}</p>
					{description && <p className={styles.Subtitle}>{description}</p>}
				</div>

				<Maximize2Icon className={styles.Icon} />
			</div>
		</a>
	);
}
