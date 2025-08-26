import styles from './styles.module.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';

interface TextRevealProps {
  text: string;
}

export function TextReveal({ text = 'Animations' }: TextRevealProps) {
  const [reset, setReset] = useState(0);
  // const WORD = text;
  return (
    <div className={cn(styles.v2, 'group/textReveal relative py-1 pe-7')} id="v2">
      <div key={reset}>
        <Heading className={styles.h1} aria-label={text}>
          {text.split('').map((char, index) => (
            <span key={index} style={{ '--index': index } as React.CSSProperties} aria-hidden>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </Heading>
      </div>
      {/* Use this button to replay your animation */}
      <Button
        onClick={() => setReset(reset + 1)}
        className="ease absolute top-1.5 right-0 m-1 translate-y-1 opacity-0 transition-[opacity,translate] duration-100 group-hover/textReveal:translate-y-0 group-hover/textReveal:opacity-100"
        size="xs"
        variant="ghost"
        iconOnly
      >
        <ArrowUturnLeftIcon />
      </Button>
    </div>
  );
}
