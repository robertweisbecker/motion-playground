import { cn } from '@/lib/utils';
import styles from './card-hover.module.css';
import { Maximize2Icon } from 'lucide-react';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Heading } from '../heading';

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
        'not-prose size-80 bg-linear-to-br from-indigo-500/20 to-teal-400/10',
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

export function CardHover2({ title = 'Project', description }: CardHoverProps) {
  return (
    <a href="#" aria-describedby="card-description2" className="group/cardLink w-2xs">
      <Card
        size="lg"
        variant="inset"
        className="group-hover:border-accent relative min-h-64 overflow-hidden"
      >
        <CardContent>
          <CardTitle>Hover me!</CardTitle>
        </CardContent>
        <Card
          id="card-description2"
          size="sm"
          className={cn(
            'translate-y-1/2 opacity-0',
            'absolute right-3 bottom-3 left-3',
            'w-auto',
            'group-hover/cardLink:translate-y-0 group-hover/cardLink:opacity-100',
            'transition-[translate,opacity]',
            'ease-in-quad duration-150',
          )}
        >
          <CardHeader>
            <CardTitle>
              <Heading size="h4" as="h2">
                {title}
              </Heading>
            </CardTitle>
            <CardAction>
              <Maximize2Icon className="h-4 w-4" />
            </CardAction>
          </CardHeader>
          {description && (
            <CardContent>
              <p>{description}</p>
            </CardContent>
          )}
        </Card>
      </Card>
    </a>
  );
}
