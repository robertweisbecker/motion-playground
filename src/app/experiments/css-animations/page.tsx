'use client';
import styles from './styles.module.css';
import { useState } from 'react';
import { TextReveal } from './text-reveal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CardHover, CardHover2 } from '@/components/experimental/card-hover';
import { StackedComponent } from '@/components/experimental/stacked-component';
import { Code } from '@/components/code';
import { ArrowUpRightIcon } from 'lucide-react';
import Orbit from './orbit';
import { DemoContainer } from '@/components/demo-container';
import { Heading } from '@/components/heading';

export default function Demo1() {
  return (
    <div className="prose max-w-4xl">
      <Heading as="h1">CSS Playground</Heading>
      <Heading>Card Hover</Heading>
      <Heading as="h3">v1 (CSS Modules)</Heading>
      <DemoContainer>
        <CardHover title="Project" description="Description goes here..." />
      </DemoContainer>
      <Heading as="h3">v2 (Radix + TW)</Heading>
      <DemoContainer>
        <CardHover2 title="Project" description="Description goes here..." />
      </DemoContainer>
      <Heading>Stacked Cards</Heading>
      <DemoContainer>
        <StackedComponent length={3} />
      </DemoContainer>

      <Heading>Native Popover</Heading>
      <div className="grid grid-cols-2 justify-items-start">
        <Button popoverTarget="my-popover" variant="elevated" className="relative">
          Popover with backdrop
        </Button>
        <div
          popover="auto"
          id="my-popover"
          aria-labelledby="my-popover-title"
          aria-describedby="my-popover-desc"
          className="bg-card fixed inset-y-0 mx-auto my-auto transform overflow-hidden rounded-lg border p-4 opacity-0 shadow-2xl transition-[opacity,transform,translate,scale] transition-discrete duration-300 backdrop:bg-transparent backdrop:transition-colors open:translate-y-0 open:scale-100 open:opacity-100 open:backdrop:bg-black/30 sm:w-full sm:max-w-96 starting:open:translate-y-4 starting:open:scale-90 starting:open:opacity-0 starting:open:backdrop:bg-transparent"
        >
          <Heading id="my-popover-title" className="mt-0 mb-3 text-base font-medium text-balance">
            This is a native HTML popover. You can read up on{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              MDN
              <ArrowUpRightIcon />
            </a>
            .
          </Heading>
          <p id="my-popover-desc">
            Click outside or press <Code>Esc</Code> to dismiss.
          </p>
        </div>

        <Button
          popoverTarget="my-popover-2"
          variant="elevated"
          className="[anchor-name:--trigger2]"
        >
          Anchor, no backdrop
        </Button>
        <div
          popover="auto"
          id="my-popover-2"
          aria-labelledby="my-popover-title"
          aria-describedby="my-popover-desc"
          className="bg-card [position-anchor]:--trigger2 absolute inset-y-[unset] right-0 bottom-[anchor(top)] left-[anchor(left)] z-50 mb-1 max-w-3xs transform overflow-hidden rounded-lg border px-3 py-2 opacity-0 shadow-lg transition-[opacity,transform,translate,scale] transition-discrete duration-50 ease-out open:translate-y-0 open:scale-100 open:opacity-100 starting:open:translate-y-1 starting:open:scale-90 starting:open:opacity-0"
        >
          <h3 id="my-popover-title" className="mt-0 mb-1 text-sm font-medium">
            Howdy!
          </h3>
          <p id="my-popover-desc" className="text-sm">
            This should be accessible without any additional config
          </p>
        </div>
      </div>

      <Heading>Text Reveal</Heading>
      <DemoContainer>
        <TextReveal text="Lorem ipsum" />
      </DemoContainer>

      <Heading>Orbit</Heading>
      <DemoContainer>
        <Orbit />
      </DemoContainer>
    </div>
  );
}

// export function TextRevealV1() {
//   const [reset, setReset] = useState(0);

//   return (
//     <div className={styles.v1}>
//       <div key={reset}>
//         <h1 className={styles.h1}>
//           <span>A</span>
//           <span>n</span>
//           <span>i</span>
//           <span>m</span>
//           <span>a</span>
//           <span>t</span>
//           <span>i</span>
//           <span>o</span>
//           <span>n</span>
//           <span>s</span>
//         </h1>
//       </div>
//       {/* Use this button to replay your animation */}
//       <Button onClick={() => setReset(reset + 1)}>Replay animation</Button>
//     </div>
//   );
// }
