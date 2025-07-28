import styles from './spinner.module.css';

const bars = Array(12).fill(0);

interface SpinnerProps {
  color?: string;
  size?: number;
}

export function Spinner({ color = 'currentColor', size = 20 }: SpinnerProps) {
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
