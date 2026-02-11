'use client';
import { AnimatePresence, LayoutGroup, motion, MotionConfig, stagger } from 'framer-motion';
import { cn } from '@/lib/utils';

import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DemoContainer } from '@/components/demo-container';
import { AngryIcon, MehIcon, FrownIcon, SmileIcon, LaughIcon, ChevronDownIcon } from 'lucide-react';
import { LinkOutIcon, MarkdownIcon } from '@/app/icons/icons';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import { useMeasure } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import { Code } from '@/components/code';
import { useResizeObserver } from 'usehooks-ts';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function EmojiFeedbackPage() {
  return (
    <div>
      <Heading as="h1">Emoji Feedback</Heading>
      <Paragraph>
        Based on{' '}
        <a href="https://vercel.com/geist/feedback" className="link inline-flex">
          Vercel <LinkOutIcon />
        </a>
      </Paragraph>
      <DemoContainer>
        <div className="flex min-h-[240px]">
          <EmojiFeedback />
        </div>
      </DemoContainer>
    </div>
  );
}

function EmojiFeedback() {
  const MButton = motion.create(Button);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const toggleEmoji = () => setEmojiOpen(!emojiOpen);
  // const ref = useRef(null);
  // const [feedbackRef, { width, height }] = useMeasure();

  const groupRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Call the hook twice, passing different refs

  const { width: groupWidth, height: groupHeight } = useResizeObserver({ ref: groupRef });
  const { width: formWidth, height: formHeight } = useResizeObserver({
    ref: formRef,
  });
  // const expandedWidth = formWidth + groupWidth;

  const [innerRef, { width: innerWidth, height: innerHeight }] = useMeasure();
  // const emojiFeedbackHeight = emojiOpen ? height + 48 : 48;
  // const [emojiValue, setEmojiValue] = useState();
  return (
    <>
      <MotionConfig transition={{ duration: 0.2 }}>
        <motion.div
          layout
          data-state={emojiOpen ? 'open' : 'closed'}
          className={cn(
            'bg-card dark:inset-ring-border-alpha m-auto overflow-hidden p-0 shadow-sm dark:inset-ring-[0.5px]',
            emojiOpen ? 'rounded-md' : 'rounded-full',
          )}
          animate={{
            height: emojiOpen ? innerHeight : null,
            width: emojiOpen ? 'var(--container-md)' : null,
            borderRadius: emojiOpen ? 'var(--radius-lg)' : 'var(--radius-3xl)',
          }}
        >
          <LayoutGroup>
            <div ref={innerRef} className="">
              <motion.div
                layout
                className="relative mx-auto flex justify-center gap-2 p-1"
                ref={groupRef}
              >
                <Label htmlFor="emojiToggleGroup" className="px-3">
                  Was this helpful?
                </Label>
                <ToggleGroup
                  id="emojiToggleGroup"
                  round
                  type={'single'}
                  variant="default"
                  onValueChange={(value) => {
                    if (value) setEmojiOpen(true);
                    if (!value) setEmojiOpen(false);
                  }}
                >
                  <ToggleGroupItem
                    value="1"
                    className="data-pressed:bg-ruby-50 dark:data-pressed:bg-ruby-800 data-pressed:text-black"
                  >
                    <AngryIcon className="in-data-pressed:fill-ruby-300 dark:in-data-pressed:stroke-ruby-950" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="2"
                    className="data-pressed:bg-red-50 data-pressed:text-black dark:data-pressed:bg-red-700"
                  >
                    <FrownIcon className="in-data-pressed:fill-red-300 dark:in-data-pressed:fill-red-200" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="3"
                    className="data-pressed:bg-orange-50 data-pressed:text-black dark:data-pressed:bg-orange-700"
                  >
                    <MehIcon className="in-data-pressed:fill-orange-300 dark:in-data-pressed:fill-orange-200" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="4"
                    className="data-pressed:bg-yellow-50 data-pressed:text-black dark:data-pressed:bg-yellow-700"
                  >
                    <SmileIcon className="in-data-pressed:fill-yellow-200 dark:in-data-pressed:fill-yellow-200" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="5"
                    className="data-pressed:bg-gold-50 dark:data-pressed:bg-gold-700 data-pressed:text-black"
                  >
                    <LaughIcon className="in-data-pressed:fill-gold-200 dark:in-data-pressed:fill-gold-200" />
                  </ToggleGroupItem>
                </ToggleGroup>

                {emojiOpen && (
                  <MButton
                    onClick={toggleEmoji}
                    iconOnly
                    size="md"
                    layout
                    variant="invisible"
                    className="absolute end-3 top-3"
                  >
                    <XMarkIcon />
                  </MButton>
                )}
              </motion.div>

              <AnimatePresence mode="wait">
                {emojiOpen && (
                  <motion.div
                    layout
                    ref={formRef}
                    key="emojiFeedbackContainer"
                    className="mx-auto w-full space-y-1 p-2 pt-1"
                    initial={{
                      opacity: 0,
                      filter: 'blur(4px)',
                      y: 1,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                      // filter: 'blur(4px)',
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
                      className="min-h-40 w-full"
                    />
                    <Paragraph variant="caption" className="text-right" id="emojiHelper">
                      <MarkdownIcon className="text-muted-foreground inline-flex size-[1lh]" />{' '}
                      supported (not really)
                    </Paragraph>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        </motion.div>
      </MotionConfig>
      <Collapsible className="absolute top-1 left-1">
        <CollapsibleTrigger asChild>
          <Button variant="link" size="xs">
            Debug
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-1 text-xs">
          toggleRef
          <span>
            <Code size="inherit">w: {groupWidth}px</Code>{' '}
            <Code size="inherit">h: {groupHeight}px</Code>
          </span>
          formRef
          <span>
            <Code size="inherit">w: {formWidth}px</Code>{' '}
            <Code size="inherit">h: {formHeight}px</Code>
          </span>
          innerRef{' '}
          <span>
            <Code size="inherit">w: {innerWidth}px</Code>{' '}
            <Code size="inherit">h: {innerHeight}px</Code>
          </span>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
