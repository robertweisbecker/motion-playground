'use client';
import { LoadingButton } from '@/components/experimental/loading-button';
import { MotionHeight } from '@/components/experimental/motion-height';
import { Spinner } from '@/components/experimental/spinner';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeedbackComponentCSS } from './feedback-animation';
import { Toggle } from '@/components/ui/toggle';
import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/16/solid';

export default function FramerPage() {
  const MotionButton = motion.create(Button);
  const MotionCard = motion.create(Card);
  const MotionToggle = motion.create(Toggle);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <Heading>Toggle</Heading>

      <MotionToggle
        onPressedChange={setCopied}
        pressed={copied}
        className="text-left"
        initial={{ width: 'auto' }}
        animate={{ width: 'auto' }}
        // exit={{ opacity: 0, y: 25 }}
      >
        <AnimatePresence mode="wait">
          <motion.span>
            Cop
            <motion.span
              key="text2"
              initial={{ opacity: 1, filter: 'blur(2px)', width: 0 }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 25 }}
            >
              {copied ? 'ied' : 'y'}
            </motion.span>
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="sync">
          {!copied && (
            <motion.span
              transition={{ bounce: 0, duration: 0.2 }}
              key="copiedIcon"
              layoutId="copyIcon"
              initial={{ opacity: 0.5, scale: 0.9, x: -10, filter: 'blur(1px)' }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 1, scale: 0.5, x: 10, filter: 'blur(1px)' }}
            >
              <ClipboardDocumentIcon />
            </motion.span>
          )}
          {copied && (
            <motion.span
              layoutId="copyIcon"
              transition={{ bounce: 0, duration: 0.2 }}
              key="checkIcon"
              initial={{ opacity: 0, scale: 0.9, x: -10, filter: 'blur(1px)', rotate: -45 }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)', rotate: 0 }}
              exit={{ opacity: 1, scale: 0.5, x: 10, filter: 'blur(0px)', rotate: -45 }}
            >
              <CheckIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </MotionToggle>
      <Heading>Feedback Form</Heading>
      <div className="bg-muted relative flex min-h-80 flex-col items-center justify-center gap-4 p-4">
        <MotionButton onClick={() => setFeedbackOpen(true)} variant="elevated" layoutId="trigger">
          <motion.span layoutId="label">Feedback</motion.span>
        </MotionButton>
        <AnimatePresence>
          {feedbackOpen && (
            <motion.div
              className="absolute w-xs rounded-[calc(var(--radius-xl)+.25rem)] bg-[var(--wrapper)] p-1 shadow-md [--wrapper:var(--popover)]"
              layoutId="trigger"
            >
              <MotionCard size="sm" className="dark:shadow-border shadow-sm">
                <CardContent>
                  <form className="relative" id="feedbackForm">
                    <textarea
                      className="peer inset-ring-input text-foreground min-h-24 w-full appearance-none rounded-sm p-2 text-sm inset-shadow-2xs inset-ring placeholder:text-transparent"
                      placeholder="Feedback"
                    />
                    <motion.span
                      layoutId="label"
                      className="text-muted-foreground pointer-events-auto absolute top-2 left-2 m-px text-sm select-none peer-not-placeholder-shown:text-transparent"
                    >
                      Feedback
                    </motion.span>
                  </form>
                </CardContent>
                <CardFooter className="dark:border-background relative justify-end border-t border-dashed">
                  <div
                    className={cn(
                      'absolute top-0 left-0 h-3 w-2 -translate-x-1/2 -translate-y-1/2',
                      'rounded-r-full bg-[var(--wrapper)]',
                      'dark:inset-shadow-background inset-shadow-2xs',
                      'after:absolute after:-inset-y-0.5 after:left-0 after:z-1 after:w-1 after:bg-gradient-to-r after:from-[var(--wrapper)] after:from-80% after:to-transparent',
                    )}
                  />
                  <div
                    className={cn(
                      'absolute top-0 right-0 h-3 w-2 translate-x-1/2 -translate-y-1/2',
                      'rounded-l-full bg-[var(--wrapper)]',
                      'dark:inset-shadow-background inset-shadow-2xs',
                      'after:absolute after:-inset-y-0.5 after:right-0 after:z-1 after:w-1 after:bg-gradient-to-l after:from-[var(--wrapper)] after:from-80% after:to-transparent',
                    )}
                  />
                  <Button onClick={() => setFeedbackOpen(false)} size="xs" variant="primary">
                    {/* <input value="Send feedback" form="feedbackForm" type="submit" /> */}
                    Send feedback
                  </Button>
                </CardFooter>
              </MotionCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FeedbackComponentCSS />

      <Heading>Animate Height</Heading>
      <MotionHeight />
      <Heading>Loading Button</Heading>
      <LoadingButton />
      <Heading>Spinner</Heading>
      <Spinner />
    </div>
  );
}
