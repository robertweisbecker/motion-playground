import { ArrowDownToLineIcon } from 'lucide-react';
import * as Tooltip from '../ui/tooltip';
import { Button } from '../ui/button';
import styles from './download-button.module.css';
import { cn } from '@/lib/utils';

export function DownloadButton() {
	return (
		<Tooltip.Tooltip>
			<Tooltip.TooltipTrigger asChild>
				<Button
					variant="elevated"
					size="icon-lg"
					className={styles.DownloadButton}
					aria-label="Download"
				>
					<ArrowDownToLineIcon className={cn(`${styles.Icon}`, `${styles.IconB}`)} />
					<ArrowDownToLineIcon className={cn(`${styles.Icon}`, `${styles.IconA}`)} />
				</Button>
			</Tooltip.TooltipTrigger>
			<Tooltip.TooltipContent>Download</Tooltip.TooltipContent>
		</Tooltip.Tooltip>
	);
}
