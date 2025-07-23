import { cn } from '@/lib/utils';
import styles from './card-hover.module.css';
import { Maximize2Icon } from 'lucide-react';

interface CardHoverProps {
  title: string;
  description?: string;
}

export function CardHover({ title = 'Project', description }: CardHoverProps) {
  return (
    <a
      href="#"
      className={cn(
        `${styles.Card}`,
        'not-prose size-80 bg-linear-to-br/longer from-indigo-500 to-teal-400',
      )}
      aria-describedby="card-description"
    >
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
