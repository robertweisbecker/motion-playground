'use client';
import styles from './motion-height.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Code } from '../code';

// import useMeasure from 'react-use-measure';

export function MotionHeight() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  // const [ref, bounds] = useMeasure();
  // const [ref2, bounds2] = useMeasure();
  // const newHeight = bounds.height + bounds2.height;
  const ref = useRef(null);
  const { height = undefined } = useResizeObserver({
    ref: ref,
    box: 'border-box',
  });
  const boxHeight = height;
  return (
    <div className={cn(`${styles.wrapper}`, 'bg-muted relative')}>
      <Code className="absolute top-4 right-4">drawerH: {boxHeight}</Code>

      <motion.div
        className={styles.element}
        initial={{ height: boxHeight ? boxHeight : null }}
        animate={{ height: boxHeight }}
        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      >
        <div className={styles.inner} ref={ref}>
          <h1>Fake Drawer</h1>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at
            lobortis.
          </p>
          <AnimatePresence>
            {showExtraContent ? (
              <motion.p
                key="newText"
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: '', opacity: 1 }}
                exit={{ height: 10, opacity: 0 }}
                // ref={ref2}
              >
                This extra content will change the height of the drawer. Some even more content to
                make the drawer taller and taller and taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
      <Button
        variant="elevated"
        className="absolute top-4 left-4"
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </Button>
    </div>
  );
}
