import Link from 'next/link';
import Image from 'next/image';
import { Code } from '@/components/code';
import { Kbd } from '@/components/kbd';
import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { Separator } from '@/components/ui/separator';
import {
  Item,
  ItemGroup,
  ItemTitle,
  ItemDescription,
  ItemContent,
  ItemMedia,
} from '@/components/ui/item';
import { GitHubIcon } from './icons/icons';
import {
  Squares2X2Icon,
  SwatchIcon,
  PlayIcon,
  BeakerIcon,
} from '@heroicons/react/16/solid';
import { cn } from '@/lib/utils';

const mainItems = [
  {
    title: 'Components',
    description: 'shadcn, Radix, and Base UI component examples',
    href: '/components',
    icon: <Squares2X2Icon />,
  },
  {
    title: 'Colors',
    description: 'okLCH color palettes & testing',
    href: '/colors',
    icon: <SwatchIcon />,
  },
];

const demos = [
  {
    title: 'Animated Button Icon',
    href: '/demos/button-hover',
  },
  {
    title: 'Tab Indicator',
    href: '/demos/tab-indicator',
  },
  {
    title: 'Toast',
    href: '/demos/toast',
  },
  {
    title: 'Emoji Feedback',
    href: '/demos/emoji-feedback',
  },
];

const experiments = [
  {
    title: 'Framer Motion',
    href: '/experiments/framer-motion',
  },
  {
    title: 'CSS Animations',
    href: '/experiments/css-animations',
  },
  {
    title: 'Forms',
    href: '/experiments/forms',
  },
  {
    title: 'Comboboxes',
    href: '/experiments/comboboxes',
  },
  {
    title: 'Tailwind Testing',
    href: '/experiments/tailwind',
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col gap-12">
      <header className="flex flex-col gap-6">
        <Image
          src="https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-0wzOrKkrClfKYgD1gUlgzhkL6ai2b3.png"
          alt="Playground logo"
          width={128}
          height={128}
          className="size-32"
          priority
        />
        <div className="flex flex-col gap-0.5">
          <Heading as="h1" className="">
            Playground
          </Heading>
          <Heading as="h2" sub className="my-0!">
            A collection of UI components, demos, and experiments built with
            Motion + Tailwind.
          </Heading>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mainItems.map((item) => (
          <Item key={item.href} asChild>
            <Link href={item.href}>
              {item.icon && <ItemMedia variant="icon">{item.icon}</ItemMedia>}
              <ItemContent>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemContent>
            </Link>
          </Item>
        ))}

        <Item>
          <ItemMedia variant="icon">
            <PlayIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Demos</ItemTitle>
            <ItemDescription>
              Interactive demonstrations and examples
            </ItemDescription>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Demo links">
              {demos.map((demo) => (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className={cn(
                    'group/link text-sm text-muted-foreground transition-colors',
                    'hover:text-foreground',
                    'relative pl-4 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-none before:bg-muted-foreground/40 before:transition-all',
                    'hover:before:w-2.5 hover:before:bg-foreground',
                  )}
                >
                  {demo.title}
                </Link>
              ))}
            </nav>
          </ItemContent>
        </Item>

        <Item>
          <ItemMedia variant="icon">
            <BeakerIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Experiments</ItemTitle>
            <ItemDescription>
              Experimental features and testing grounds
            </ItemDescription>
            <nav
              className="mt-4 flex flex-col gap-2"
              aria-label="Experiment links"
            >
              {experiments.map((experiment) => (
                <Link
                  key={experiment.href}
                  href={experiment.href}
                  className={cn(
                    'group/link text-sm text-muted-foreground transition-colors',
                    'hover:text-foreground',
                    'relative pl-4 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-none before:bg-muted-foreground/40 before:transition-all',
                    'hover:before:w-2.5 hover:before:bg-foreground',
                  )}
                >
                  {experiment.title}
                </Link>
              ))}
            </nav>
          </ItemContent>
        </Item>
      </div>

      <Separator />

      <footer className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Press</span>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
          <span>to toggle sidebar</span>
        </div>
        <Code
          size="default"
          variant="default"
          className="transition-colors hover:bg-sidebar-accent/50"
        >
          <GitHubIcon />
          <a
            href="https://www.github.com/robertweisbecker/motion-playground"
            rel="noreferrer"
            target="_blank"
            className="font-medium"
          >
            motion-playground
          </a>
        </Code>
      </footer>
    </div>
  );
}
