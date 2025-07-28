import styles from './styles.module.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/heading';

interface TextRevealProps {
  text: string;
}

export function TextReveal({ text = 'Animations' }: TextRevealProps) {
  const [reset, setReset] = useState(0);
  // const WORD = text;
  return (
    <div className={styles.v2} id="v2">
      <div key={reset}>
        <Heading className={styles.h1}>
          {text.split('').map((char, index) => (
            <span key={index} style={{ '--index': index } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </Heading>
      </div>
      {/* Use this button to replay your animation */}
      <Button onClick={() => setReset(reset + 1)}>Replay</Button>
    </div>
  );
}
