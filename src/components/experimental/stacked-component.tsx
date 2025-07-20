import { cn } from '@/lib/utils';
import styles from './stacked-component.module.css';

interface StackedComponentProps {
  length: number;
  unstack?: boolean;
  className?: string;
}
export function StackedComponent({ length = 3, unstack, className }: StackedComponentProps) {
  return (
    <div className={cn(`${styles.Wrapper}`, 'mt-5 w-full', className)}>
      {new Array(length).fill(0).map((_, i) => (
        <div
          className={cn(
            `${styles.Card}`,
            length > 1 && !unstack && `${styles.Stacked}`,
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
