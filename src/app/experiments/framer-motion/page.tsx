'use client';
import { useState } from 'react';
import { LoadingButton } from '@/components/experimental/loading-button';
import { MotionHeight } from '@/components/experimental/motion-height';
import { Spinner } from '@/components/experimental/spinner';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AnimatePresence, LayoutGroup, motion, MotionConfig } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FeedbackComponentCSS } from './feedback-animation';
import { Toggle } from '@/components/ui/toggle';
import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/16/solid';
import { MultiStepComponent, Wizard } from '@/components/experimental/multi-step';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { FaceFrownIcon, FaceSmileIcon, StarIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MarkdownIcon } from '@/app/icons/icons';
import { Paragraph } from '@/components/paragraph';
import { Label } from '@/components/ui/label';
import { AngryIcon, AnnoyedIcon, FrownIcon, LaughIcon, MehIcon, SmileIcon } from 'lucide-react';
import { useMeasure } from '@uidotdev/usehooks';
import { DemoContainer } from '@/components/demo-container';

export default function FramerPage() {
  const MotionButton = motion.create(Button);
  const MotionCard = motion.create(Card);
  const MotionToggle = motion.create(Toggle);
  const MToggleGroupItem = motion.create(ToggleGroupItem);
  const MButton = motion.create(Button);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [buttonCopied, setButtonCopied] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);

  const toggleEmoji = () => setEmojiOpen(!emojiOpen);
  const [emojiRef, { width, height }] = useMeasure();
  const emojiFeedbackHeight = emojiOpen ? height + 48 : 48;
  const [emojiValue, setEmojiValue] = useState();

  return (
    <div>
      <Heading as="h1">Framer Motion</Heading>
      <Heading>Vercel Feedback</Heading>
      <Paragraph></Paragraph>
      <DemoContainer>
        <MotionConfig transition={{ duration: 0.4 }}>
          <motion.div
            className={cn(
              'm-auto flex h-12 origin-bottom flex-col overflow-hidden p-1',
              emojiOpen ? 'rounded-md shadow-md' : 'rounded-full shadow-sm',
            )}
            // initial={{ height: 48, borderRadius: 12 }}
            // animate={{ height }}
            initial={{
              borderRadius: '24px',
              width: 360,
              height: 48,
            }}
            animate={{
              height: emojiFeedbackHeight,
              width: emojiOpen ? '600px' : '360px',
              borderRadius: emojiOpen ? '12px' : '24px',
            }}
            style={
              {
                // width: emojiOpen ? '600px' : '360px',
              }
            }
          >
            <motion.div className="flex justify-center gap-2 p-1">
              <Label htmlFor="emojiToggleGroup">Was this helpful?</Label>
              {/* <Button onClick={toggleEmoji}>Open</Button> */}
              <ToggleGroup
                id="emojiToggleGroup"
                round
                type={'single'}
                variant="default"
                // value={emojiValue}
                onValueChange={(value) => {
                  if (value) setEmojiOpen(true);
                  if (!value) setEmojiOpen(false);
                }}
              >
                {/* can change these to normal toggles if not animating the contents */}
                <ToggleGroupItem value="1" className="data-toggled:bg-ruby-50">
                  <AngryIcon className="in-data-toggled:fill-ruby-300" />
                </ToggleGroupItem>
                <ToggleGroupItem value="2" className="data-toggled:bg-red-50">
                  <FrownIcon className="in-data-toggled:fill-red-300" />
                </ToggleGroupItem>
                <ToggleGroupItem value="3" className="data-toggled:bg-orange-50">
                  <MehIcon className="in-data-toggled:fill-orange-300" />
                </ToggleGroupItem>
                <ToggleGroupItem value="4" className="data-toggled:bg-yellow-50">
                  <SmileIcon className="in-data-toggled:fill-yellow-300" />
                </ToggleGroupItem>
                <ToggleGroupItem value="5" className="data-toggled:bg-gold-50">
                  <LaughIcon className="in-data-toggled:[&_path]:fill-card in-data-toggled:fill-gold-300" />
                </ToggleGroupItem>
              </ToggleGroup>
            </motion.div>
            <AnimatePresence mode="wait">
              {emojiOpen && (
                <motion.div
                  layout
                  key="emojiFeedbackContainer"
                  ref={emojiRef}
                  className="origin-bottom space-y-1 p-1 pt-0"
                  initial={{
                    opacity: 1,
                    filter: 'blur(4px)',
                    scaleX: 1.5,
                    y: 0,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    pointerEvents: 'auto',
                  }}
                  exit={{
                    opacity: 0,
                    filter: 'blur(4px)',
                    scaleY: 0.5,
                    y: -48,
                    pointerEvents: 'none',
                  }}
                >
                  <Label htmlFor="emoji-feedback-input" className="sr-only">
                    Feedback
                  </Label>
                  <Textarea
                    // autoFocus
                    id="emoji-feedback-input"
                    name="emojiFeedback"
                    aria-describedby="emojiHelper"
                    className="min-h-40"
                  />
                  <Paragraph variant="caption" className="text-right" id="emojiHelper">
                    <MarkdownIcon className="text-muted-foreground inline-flex size-[1lh]" />{' '}
                    supported (not really)
                  </Paragraph>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </MotionConfig>
      </DemoContainer>
      <Heading>Steps</Heading>
      <Heading as="h3">With motion.div</Heading>
      <MultiStepComponent />
      <Heading as="h3">with shadcn card</Heading>
      <Wizard />
      <Heading>Toggle</Heading>
      <motion.div layout>
        <Button
          variant="primary"
          id="copyButton"
          data-state={buttonCopied ? 'active' : ''}
          size="sm"
          onClick={() => {
            setButtonCopied(!buttonCopied);
            setTimeout(() => {
              setButtonCopied(false);
            }, 3000);
          }}
        >
          {buttonCopied ? (
            <>
              Copied
              <ClipboardDocumentCheckIcon id="ClipboardDocumentCheckIcon1" />
            </>
          ) : (
            <>
              Copy
              <ClipboardDocumentIcon id="ClipboardDocumentIcon1" />
            </>
          )}
        </Button>
      </motion.div>
      <br />
      <MotionToggle
        id="copyToggle"
        onPressedChange={setCopied}
        pressed={copied}
        // initial={{ width: null }}
        // exit={{ opacity: 0, y: 25 }}
        // style={{ width: copied && 'auto' }}
      >
        <span>
          Cop
          <AnimatePresence mode="wait">
            <motion.span
              key={`copyText-copied`}
              initial={{ filter: 'blur(2px)' }}
              animate={{ filter: 'blur(0px)' }}
              exit={{ filter: 'blur(2px)' }}
            >
              {copied ? 'ied' : 'y'}
            </motion.span>
          </AnimatePresence>
        </span>
        <AnimatePresence>
          {!copied && (
            <motion.span
              transition={{ bounce: 0, duration: 0.2 }}
              initial={{ opacity: 0.5, scale: 0.9, x: -10, filter: 'blur(1px)', rotate: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)', rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 10, filter: 'blur(2px)', rotate: 30 }}
              key="copyIcon"
              layoutId="copyIcon"
            >
              <ClipboardDocumentIcon />
            </motion.span>
          )}
          {copied && (
            <motion.span
              layoutId="copyIcon"
              transition={{ bounce: 0, duration: 0.2 }}
              key="copiedIcon"
              initial={{ opacity: 0, scale: 0.9, x: -10, filter: 'blur(1px)', rotate: -45 }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)', rotate: 0 }}
              exit={{ opacity: 1, scale: 0.5, x: 10, filter: 'blur(0px)', rotate: -45 }}
            >
              <CheckIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </MotionToggle>
      <br />
      <Heading>Feedback Form</Heading>
      <div className="bg-muted relative flex min-h-80 flex-col items-center justify-center gap-4 p-4">
        <MotionButton onClick={() => setFeedbackOpen(true)} variant="elevated" layoutId="trigger">
          <motion.span layoutId="label">Feedback</motion.span>
        </MotionButton>
        <AnimatePresence>
          {feedbackOpen && (
            <motion.div
              className="absolute w-xs rounded-[calc(var(--radius-lg)+.25rem)] bg-[var(--wrapper)] p-1 shadow-sm [--wrapper:var(--popover)]"
              layoutId="trigger"
            >
              <MotionCard size="sm" className="bg-card dark:shadow-background shadow-2xs">
                <CardContent className="">
                  <form className="relative" id="feedbackForm">
                    <Textarea
                      className="peer min-h-24 placeholder:text-transparent"
                      placeholder="Feedback"
                      autoFocus
                    />
                    {/* <textarea
                      className="peer inset-ring-border-soft text-foreground min-h-24 w-full appearance-none rounded-sm p-2 text-sm inset-shadow-2xs inset-ring placeholder:text-transparent"
                      placeholder="Feedback"
                    /> */}
                    <motion.span
                      layoutId="label"
                      className="text-muted-foreground pointer-events-auto absolute top-2 left-2 mx-0.5 text-sm select-none peer-not-placeholder-shown:text-transparent"
                    >
                      Feedback
                    </motion.span>
                  </form>
                </CardContent>
                <CardFooter className="border-border-alpha-soft relative justify-end border-t border-dashed">
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
