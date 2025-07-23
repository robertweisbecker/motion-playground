import styles from './styles.module.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TextRevealProps {
  text: string;
}

export function TextReveal({ text = 'Animations' }: TextRevealProps) {
  const [reset, setReset] = useState(0);
  // const WORD = text;
  return (
    <div className={styles.v2} id="v2">
      <div key={reset}>
        <h2 className={styles.h1}>
          {text.split('').map((char, index) => (
            <span key={index} style={{ '--index': index } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </h2>
      </div>
      {/* Use this button to replay your animation */}
      <Button onClick={() => setReset(reset + 1)}>Replay</Button>
    </div>
  );
}
