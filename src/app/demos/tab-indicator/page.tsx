import * as Tabs from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';
import { Code } from '@/components/ui/code';
import { Paragraph } from '@/components/ui/paragraph';
// import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function Demo1() {
  return (
    <>
      <div>
        <h1>
          <span className="text-muted-foreground">Demo: </span>Animated Tabs
        </h1>
        <Paragraph variant={'prose'} mt={false}>
          Radix UI tabs don't natively support an animatable indicator, but you can fake it without
          an extra DOM element:
        </Paragraph>
      </div>
      <section>
        <Tabs.Tabs defaultValue="1">
          <Tabs.TabsList className="justify-stretch">
            <Tabs.TabsTrigger value="1" stretch>
              Tab 1
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="2" stretch>
              Tab 2 with a longer label
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="3" stretch>
              Tab 3
            </Tabs.TabsTrigger>
          </Tabs.TabsList>
          <Tabs.TabsContent value="1">Tab 1</Tabs.TabsContent>
          <Tabs.TabsContent value="2">Tab 2</Tabs.TabsContent>
          <Tabs.TabsContent value="3">Tab 3</Tabs.TabsContent>
        </Tabs.Tabs>
      </section>
      <Separator className="my-10" />
      <br />
      <h2>How it works</h2>
      <br />
      <ol>
        <li>
          Since we're not adding DOM elements here, we'll add a pseudoelement to each trigger to
          serve as the indicator. Then inset it and apply a transform of{' '}
          <Code>translateX(100%)</Code> to move it beyond the right edge (not the left – more on
          that below).
          <br />
          <div className="group bg-card my-4 p-4">
            <Button className="peer after:scale-x-full relative after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500">
              Offset :after
            </Button>
          </div>
        </li>

        <li>
          When active, toggle <Code>translateX</Code> back to 0. Adding a duration and easing will
          now make it in from the right. <br />
          <div className="group bg-card my-4 p-4">
            <Button className="peer relative after:pointer-events-none after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in active:after:translate-x-0">
              Trigger (click me!)
            </Button>
          </div>
        </li>
        <li>
          Tailwind gives us group and peer selectors, which we can use here. Peer only works on
          previous siblings, which is why we've translated it right initially. So when a (previous)
          peer is active, we now want the indicator to move in from the left instead. To do that,
          conditionally change its translation to -100% based on the peer state.
          <br />
          <br />
          Click the trigger when the peer is toggled on and off to see the difference:
          <div className="group bg-card my-4 flex items-start gap-10 p-4">
            <Toggle className="peer" variant="outline">
              Toggle peer
            </Toggle>
            <Button className="peer relative after:pointer-events-none after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in after:select-none peer-data-[state=on]:after:-translate-x-full active:after:translate-x-0 active:after:opacity-100">
              Trigger
            </Button>
          </div>
        </li>
        <li>
          Here's an example with multiple triggers. Only the latter two have indicators and they've
          been moved below the tiggers, so you can see how they overlap when adjacent siblings are
          selected. This is what gives the illusion of a single indicator in the final version.
        </li>
        <div className="group bg-card my-4 p-4 pb-10">
          <ToggleGroup type="single" variant={'ghost'}>
            <ToggleGroupItem value="0">None</ToggleGroupItem>
            <ToggleGroupItem
              value="1"
              className="peer relative after:pointer-events-none after:absolute after:inset-0 after:origin-right after:translate-x-full after:translate-y-full after:bg-blue-500/50 after:transition-[scale,translate,transform,background] after:ease-in after:select-none peer-data-[state=on]:after:-translate-x-full data-[state=on]:after:translate-x-0"
            >
              Blue
            </ToggleGroupItem>
            <ToggleGroupItem
              value="2"
              className="peer relative after:pointer-events-none after:absolute after:inset-0 after:origin-right after:translate-x-full after:translate-y-full after:bg-red-500/50 after:transition-[scale,translate,transform,background] after:ease-in after:select-none peer-data-[state=on]:after:-translate-x-full data-[state=on]:after:translate-x-0"
            >
              Red
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ol>

      {/* <h3>Tweaks</h3>
      <p>
        Scale X 125% and translate 3/4 — we want the left edge to travel half the width, and the
        right edge to travel 1x the trigger width to give a sense of elasticity. This mimics the
        resizing effect of fancier indicators. It also allows the new indicator to "pick up" the
        momentum of previous indicator that's animating away toward it.
      </p> */}
    </>
  );
}
