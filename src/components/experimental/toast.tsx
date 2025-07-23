'use client';
import { Button } from '../ui/button';
import { Code } from '../code';
import styles from './toastDemo.module.css';
import { useEffect, useState } from 'react';

interface ToastProps {
  index: number;
  total: number;
}

export default function Toaster() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Toaster} style={{ ['--total' as string]: toasts }}>
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - (i + 1)} total={toasts} />
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
          <Code size="default" className="-me-1">
            {toasts}
          </Code>
        </Button>
      </div>
    </div>
  );
}

function Toast({ index, total, ...props }: React.ComponentProps<'div'> & ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={styles.Toast}
      {...props}
      style={{ ['--index' as string]: index }}
      data-mounted={mounted}
    >
      <div className="flex flex-col gap-1">
        <span className={styles.Title}>currentIndex: {index}</span>
        <span className={styles.Description}>total: {total}</span>
      </div>
    </div>
  );
}
