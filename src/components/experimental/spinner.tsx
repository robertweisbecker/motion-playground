import { cn } from '@/lib/utils';
import styles from './spinner.module.css';

const bars = Array(12).fill(0);
const dots = Array(3).fill(0);

interface LoaderProps {
  color?: string;
  size?: number;
}

export function Spinner({ color = 'currentColor', size = 20 }: LoaderProps) {
  return (
    <div
      className={styles.wrapper}
      data-slot="spinner"
      style={
        {
          ['--spinner-size']: `${size}px`,
          ['--spinner-color']: color,
        } as React.CSSProperties
      }
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.bar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}

export function Loader({ color = 'currentColor', size = 16 }: LoaderProps) {
  const dotClasses =
    'bg-[var(--spinner-color)] rounded-[50%] aspect-square w-full h-full animate-pulse-bounce repeat-infinite ease-in';
  return (
    <div
      data-slot="spinner"
      className="flex w-[var(--spinner-size)] items-center justify-between gap-0.5"
      style={
        {
          ['--spinner-size']: `${size}px`,
          ['--spinner-color']: color,
        } as React.CSSProperties
      }
    >
      {dots.map((_, i) => (
        <div
          className={cn(dotClasses)}
          key={`loading-dot-${i}`}
          style={{ animationDelay: `calc(${i} * .2s)` }}
        />
      ))}
    </div>
  );
}
