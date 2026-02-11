import { cn } from '@/lib/utils';
import styles from './card-hover.module.css';
import { Maximize2Icon } from 'lucide-react';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Heading } from '../heading';

interface CardHoverProps {
  title: string;
  description?: React.ReactNode;
  bgImage?: string;
  className?: string;
  href?: string;
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

export function CardHover2({
  title = 'Project',
  description,
  bgImage,
  className,
  href = '#',
}: CardHoverProps) {
  return (
    <a
      href={href}
      target="_blank"
      aria-describedby="card-description2"
      className="group/cardLink w-2xs"
    >
      <Card
        size="md"
        className={cn(
          'group-hover:outline-primary relative min-h-80 overflow-hidden bg-cover group-hover:outline',
          className,
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <CardContent>
          <CardTitle>Hover me!</CardTitle>
        </CardContent>
        <Card
          id="card-description2"
          size="sm"
          className={cn(
            'bg-popover',
            'ring-border ring',
            'gap-0',
            'translate-y-full opacity-0',
            'absolute right-1 bottom-1 left-1',
            'w-auto',
            'group-hover/cardLink:translate-y-0 group-hover/cardLink:opacity-100',
            'transition-[transform,translate,opacity]',
            'group-focus/cardLink:translate-y-0 group-focus/cardLink:opacity-100',
            'ease-out-expo duration-400',
          )}
        >
          <CardHeader>
            <CardTitle>
              <Heading size="h5" as="h2">
                {title}
              </Heading>
            </CardTitle>
            <CardAction className="size-5 p-1">
              <Maximize2Icon className="size-3" />
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
