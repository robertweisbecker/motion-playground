import * as Tabs from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';
import { Code } from '@/components/ui/code';

export default function Demo1() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col items-stretch gap-8">
        <h1>
          <span className="text-muted-foreground">Demo: </span>Animated Tabs
        </h1>
        <p>
          Radix UI tabs don't natively support an animatable indicator, but you can fake it without
          an extra DOM element:
        </p>
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
        <Separator />
        <h2>How it works</h2>
        <ul>
          <li>
            Inset a <Code>:before</Code> element on each trigger to serve as your indicator and
            translateX + 100% to move it beyond the right edge
            <br />
            <div className="group p-4 duration-1000 after:transition-transform">
              <Button className="peer after:scale-x-full relative after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500">
                Trigger
              </Button>
            </div>
          </li>

          <li>
            When <code>data-active="true"</code>, set <Code>translateX</Code> to 0. It should now
            animate in from the right. <br />
            <div className="group p-4 duration-1000 after:transition-transform">
              <Toggle className="peer after:scale-x-full relative duration-1000 after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in data-[state=on]:after:translate-x-0 data-[state=on]:after:scale-x-100">
                Trigger (click me!)
              </Toggle>
            </div>
          </li>
          <li>
            Tailwind gives us group and peer selectors, which we can use here. Peer only works on
            previous siblings, which is why we've translated it right initially. So when (previous)
            peer is active, we want it to move in from the left. So we conditionally change the
            translateX value to -100%.
            <br />
            Click the trigger when the peer is toggled on and off to see the difference:
          </li>
          <div className="group flex gap-2">
            <Toggle className="peer">Peer</Toggle>
            <Button className="peer after:scale-x-full relative after:absolute after:inset-0 after:-z-1 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in after:select-none peer-data-[state=on]:after:-translate-x-full active:after:translate-x-0">
              Trigger
            </Button>
          </div>
          <li>Combining the two, we get this:</li>
          <div className="group p-4 transition-transform duration-1000">
            <Toggle className="peer">Tab Trigger</Toggle>
            <Toggle className="peer after:scale-x-full relative after:absolute after:inset-0 after:-z-1 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in after:select-none peer-data-[state=on]:after:-translate-x-full peer-data-[state=on]:after:opacity-50 data-[state=on]:after:translate-x-0">
              Trigger
            </Toggle>
            {/* <Button
						className={cn(
							'peer after:scale-x-full relative duration-1000 after:absolute after:inset-0 after:origin-right after:translate-x-full after:outline after:outline-red-500 after:transition-[scale,translate,transform,background] after:ease-in peer-active:after:origin-left peer-active:after:-translate-x-full active:after:translate-x-0 active:after:scale-x-100',
							'before:scale-x-full before:absolute before:inset-0 before:-translate-x-full before:outline before:outline-purple-500 before:transition-[scale,translate,transform,background] before:ease-in peer-active:before:origin-left peer-active:before:-translate-x-full active:before:translate-x-0 active:before:scale-x-100',
						)}
					>
						Tab Trigger
					</Button> */}
          </div>
        </ul>

        <h3>Tweaks</h3>
        <p>
          Scale X 125% and translate 3/4 — we want the left edge to travel half the width, and the
          right edge to travel 1x the trigger width to give a sense of elasticity. This mimics the
          resizing effect of fancier indicators. It also allows the new indicator to "pick up" the
          momentum of previous indicator that's animating away toward it.
        </p>
      </main>
    </div>
  );
}
