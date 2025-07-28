import { LucideLineSquiggle } from 'lucide-react';

import Link from 'next/link';
import { Code } from '@/components/code';
import { Kbd } from '@/components/kbd';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Heading } from '@/components/heading';
import { SidebarClosedIcon, SidebarOpenIcon, GitHubIcon } from './icons/icons';

function LinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description?: string;
  href: string;
}) {
  return (
    <li className="group relative isolate flex flex-col justify-center hover:cursor-pointer sm:py-3">
      <Link
        href={href}
        className="link group-hover:after:bg-accent/50 text-foreground font-medium group-hover:underline after:absolute after:inset-y-0 after:-right-1 after:-left-3 after:-z-10 after:rounded-md hover:z-1"
      >
        {title}
        {/* <ChevronRightIcon className="absolute top-1/2 right-0 my-auto size-4 -translate-y-1/2 opacity-50" /> */}
      </Link>
      <p className="text-muted-foreground z-1">{description}</p>
    </li>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="relative text-gray-400">
        <LucideLineSquiggle
          strokeWidth={2}
          className={'-ms-2 mb-2 size-16 text-gray-300'}
          strokeLinecap="square"
        />
        <Heading className="" as="h1">
          Playground
        </Heading>
      </div>
      <ul className="not-prose mt-5">
        <LinkCard title="Components" description="Lorem" href="/components" />

        <LinkCard href="/experiments/button-hover" title="Hover Icons" />

        <LinkCard href="/experiments/css-animations" title="Card Transforms" />

        <LinkCard href="/demos/tab-indicator" title="Tab Indicator" />

        <LinkCard href="/demos/toast" title="Toasts" />

        <LinkCard href="/experiments/tailwind" title="Tailwind experiments" />
      </ul>
      <br />
      <p>
        Press <Kbd>⌘</Kbd> + <Kbd>B</Kbd> to toggle sidebar.
      </p>
      <br />
      <Code size="default" variant="default">
        <GitHubIcon />
        <a
          href="https://www.github.com/robertweisbecker/motion-playground"
          rel="noreferrer"
          target="_blank"
          className=""
        >
          motion-playground
        </a>
      </Code>
    </div>
  );
}
