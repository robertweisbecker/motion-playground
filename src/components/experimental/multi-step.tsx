'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
// import useMeasure from "react-use-measure";
import { useResizeObserver } from 'usehooks-ts';
import styles from './multi-step.module.css';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

// return (
//   <motion.ul animate="visible">
//     <motion.li custom={0} variants={variants} />
//     <motion.li custom={1} variants={variants} />
//     <motion.li custom={2} variants={variants} />
//   </motion.ul>
// );
export function MultiStepComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  // const MotionCard = motion.create(Card);
  // const [ref, bounds] = useMeasure();
  const { height = 'undefined' } = useResizeObserver({
    ref: ref,
    box: 'border-box',
  });
  const variants = {
    initial: (direction) => ({
      x: `${110 * direction}%`,
      opacity: 0,
    }),
    animate: { opacity: 1, x: '0%' },
    exit: (direction) => ({
      opacity: 0,
      x: `${-110 * direction}%`,
    }),
  };

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className={styles.heading}>This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className={styles.heading}>This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={styles.heading}>This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 128 }} />
              <div className={styles.skeleton} style={{ width: 224 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
    }
  }, [currentStep]);

  return (
    <Card>
      <MotionConfig transition={{ duration: 0.5, type: 'spring', bounce: 0 }}>
        <motion.div animate={{ height: height }} className={styles['multi-step-wrapper']}>
          <div className={styles['multi-step-inner']} ref={ref}>
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={currentStep}
                variants={variants}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {content}
              </motion.div>
            </AnimatePresence>
            <motion.div layout className={styles.actions}>
              <button
                className={styles['secondary-button']}
                disabled={currentStep === 0}
                onClick={() => {
                  if (currentStep === 0) {
                    return;
                  }
                  setDirection(-1);
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                Back
              </button>

              <button
                className={styles['primary-button']}
                disabled={currentStep === 2}
                onClick={() => {
                  if (currentStep === 2) {
                    setCurrentStep(0);
                    setDirection(-1);
                    return;
                  }
                  setDirection(1);
                  setCurrentStep((prev) => prev + 1);
                }}
              >
                Continue
              </button>
            </motion.div>
          </div>
        </motion.div>
      </MotionConfig>
    </Card>
  );
}

export function Wizard() {
  const [showStep, setShowStep] = useState(0);
  const MotionContent = motion.create(CardContent);
  const MotionFooter = motion.create(CardFooter);
  const MotionCard = motion.create(Card);
  const ref = useRef(null);
  const cardRef = useRef(null);
  // const containerRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const { height = undefined } = useResizeObserver({
    ref: ref,
    box: 'border-box',
  });
  // const { height = 0 } = useResizeObserver({ ref: containerRef, box: 'border-box' });
  const content = useMemo(() => {
    switch (showStep) {
      case 0:
        return (
          <>
            <h2 className={styles.heading}>This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className={styles.heading}>This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={styles.heading}>This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 128 }} />
              <div className={styles.skeleton} style={{ width: 224 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
    }
  }, [showStep]);
  return (
    <MotionConfig transition={{ bounce: 0 }}>
      <Card className="overflow-hidden" ref={cardRef}>
        <CardHeader>
          <CardTitle>
            {showStep} • {height}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            // initial={{ height: height ? height : null }}
            animate={{ height: height }}
            initial=""
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          >
            <div ref={ref}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={showStep}
                  initial={{ x: `${110 * direction}%`, opacity: 0 }}
                  animate={{ opacity: 1, x: '0%' }}
                  exit={{ opacity: 0, x: `${-110 * direction}%` }}
                  // exit={{ opacity: 0, x: '-110%' }}
                >
                  {content}
                  {showStep === 0 && <p>This is the first paragraph....</p>}
                  {showStep === 1 && (
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla
                      vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi
                      erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus
                      ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                      sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non
                      magna.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </CardContent>
        <MotionFooter layout>
          <Button
            variant="secondary"
            disabled={showStep === 0}
            onClick={() => {
              if (showStep === 1) {
                setDirection(-1);
                setShowStep(0);
                return;
              }
              setShowStep(showStep - 1);
              setDirection(-1);
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowStep(showStep + 1);
              setDirection(1);
            }}
          >
            Next
          </Button>
        </MotionFooter>
        {/* </motion.div> */}
        {/* </MotionCard> */}
      </Card>
    </MotionConfig>
  );
}
