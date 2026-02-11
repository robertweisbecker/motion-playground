'use client';
import { Button } from '../ui/button';
import { Code } from '../code';
import styles from './toastDemo.module.css';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface ToastAnimationProps {
  index: number;
  total: number;
}

export function ToasterAnimation() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className={styles.Wrapper}>
      <div
        className={cn(
          `${styles.Toaster}`,
          'shadow-sm outline -outline-offset-1 outline-border-alpha-soft',
        )}
        style={{ '--total': toasts } as React.CSSProperties}
      >
        {Array.from({ length: toasts }).map((_, i) => (
          <ToastAnimation key={i} index={toasts - (i + 1)} total={toasts} />
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <Button
          variant="elevated"
          className=""
          onClick={() => {
            setToasts(toasts + 1);
          }}
        >
          Create toast
        </Button>
        <Button
          className="text-destructive"
          variant="ghost"
          disabled={toasts < 1}
          onClick={() => {
            setToasts(0);
          }}
        >
          Clear
          <Badge size="default" variant="outline" className="-me-1">
            {toasts}
          </Badge>
        </Button>
      </div>
    </div>
  );
}

function ToastAnimation({
  index,
  total,
  ...props
}: React.ComponentProps<'div'> & ToastAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={styles.Toast}
      {...props}
      style={{ '--index': index } as React.CSSProperties}
      data-mounted={mounted}
    >
      <div className="flex flex-col gap-1">
        <span className={styles.Title}>currentIndex: {index}</span>
        <span className={styles.Description}>total: {total}</span>
      </div>
    </div>
  );
}

