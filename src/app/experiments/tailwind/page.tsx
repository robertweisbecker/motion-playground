'use client';
import * as Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { Paragraph } from '@/components/paragraph';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/heading';
import { Cog6ToothIcon } from '@heroicons/react/16/solid';

function BannerExample() {
  return (
    <div className="not-prose relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="text-foreground/80 flex-none rounded-full bg-gray-50/8 px-3.5 py-1 text-sm font-semibold shadow-[0px_0px_1.5px_rgba(0,0,0,0.1),0px_0.65px_5px_rgba(0,0,0,0.12),inset_0.65px_0.65px_1px_-0.65px_rgba(255,255,255,0.8),inset_-0.65px_-0.65px_2px_-0.65px_rgba(255,255,255,0.8)] backdrop-blur-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}

function PlusBadge() {
  return (
    <span className="not-prose">
      <a
        href="/plus?ref=top"
        className="group relative px-1.5 text-sm/6 text-cyan-800 no-underline decoration-transparent decoration-0 dark:text-cyan-300"
      >
        <span className="absolute inset-0 -z-1 w-full border border-dashed border-cyan-300/60 bg-cyan-50 decoration-transparent decoration-0 group-hover:bg-cyan-400/15 dark:border-cyan-300/30"></span>
        Plus
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute top-[-2px] left-[-2px] fill-cyan-300 dark:fill-cyan-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute top-[-2px] right-[-2px] fill-cyan-300 dark:fill-cyan-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute bottom-[-2px] left-[-2px] fill-cyan-300 dark:fill-cyan-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute right-[-2px] bottom-[-2px] fill-cyan-300 dark:fill-cyan-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
      </a>
    </span>
  );
}

export default function TailwindPage() {
  //   const buildDisplacementImage = () => {
  //   // const border = Math.min(`var(--width)`, config.height) * (config.border * 0.5)
  //   const kids = `
  // <svg class="displacement-image" viewBox="0 0 var(--width) var(--height)" xmlns="http://www.w3.org/2000/svg">
  //       <defs>
  //         <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
  //           <stop offset="0%" stop-color="#0000"/>
  //           <stop offset="100%" stop-color="red"/>
  //         </linearGradient>
  //         <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
  //           <stop offset="0%" stop-color="#0000"/>
  //           <stop offset="100%" stop-color="blue"/>
  //         </linearGradient>
  //       </defs>
  //       <!-- backdrop -->
  //       <rect x="0" y="0" width="var(--width)" height="var(--height)" fill="black"></rect>
  //       <!-- red linear -->
  //       <rect x="0" y="0" width="var(--width)" height="var(--height)" rx="var(--radius)" fill="url(#red)" />
  //       <!-- blue linear -->
  //       <rect x="0" y="0" width="var(--width)" height="var(--height)" rx="var(--radius)" fill="url(#blue)" style="mix-blend-mode: var(--blend)" />
  //       <!-- block out distortion -->
  //       <rect x="var(--border)" y="${Math.min(config.width, config.height) * (config.border * 0.5)}" width="calc(var(--width) - var(--border) * 2)" height="calc(var(--height) - var(--border) * 2)" rx="var(--radius)" fill="hsl(0 0% var(--lightness) / var(--alpha)}"
  //       style="filter:blur(var(--blur))" />
  //     </svg>
  //     `
  //   }
  return (
    <div className="prose max-w-4xl">
      <h1>Styling w/ Tailwind</h1>
      <Heading>Avatar Mask</Heading>
      <div className="relative flex flex-col gap-10">
        <div className="relative aspect-square size-100 overflow-hidden rounded-xl after:absolute after:-inset-[0%] after:-z-1 after:rounded-[inherit] after:ring-[24px] after:ring-green-200">
          <div className="mask-radial relative block size-full rounded-[inherit] bg-gray-200 mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[18.75%_18.75%] mask-radial-from-100% mask-radial-at-[87.5%_87.5%] mask-exclude mask-alpha inset-ring-[40px] inset-ring-green-50/50" />
          <div className="absolute right-[0%] bottom-[0%] m-[0px] size-[25%] rounded-full bg-green-500 ring-[25px] ring-blue-500/10" />
        </div>
        <div className="relative size-100 rounded-lg after:absolute after:-inset-[0%] after:-z-1 after:rounded-[inherit] after:ring-[24px] after:ring-green-200">
          <div className="mask-radial relative block size-full rounded-[inherit] bg-gray-200 mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[25%_25%] mask-radial-from-100% mask-radial-at-[87.5%_87.5%] mask-exclude mask-alpha inset-ring-[40px] inset-ring-green-50/50" />
          <div className="absolute right-[0%] bottom-[0%] m-[0px] size-[25%] rounded-full bg-green-500 ring-[50px] ring-blue-500/10" />
        </div>
        <div className="from-foreground to-background grid grid-cols-2 items-center bg-gradient-to-b p-4">
          <div className="after:ring-border-alpha relative isolate size-20 rounded-[12%] rounded-br-lg drop-shadow-xs after:absolute after:-inset-0 after:-z-1 after:rounded-[inherit] after:border-0 after:ring-0">
            <div className="mask-radial inset-ring-border-alpha/0 bg-card relative block size-full rounded-[calc(10%)] mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[17.5%_17.5%] mask-radial-from-100% mask-radial-at-[85%_85%] mask-exclude mask-alpha inset-ring-[2px]" />
            <div className="absolute right-[2.5%] bottom-[2.5%] m-[0%] size-[25%] rounded-full bg-gradient-to-t from-green-400 to-green-300 shadow-xs inset-ring-0 inset-ring-green-300" />
          </div>

          <div className="after:ring-border-alpha relative isolate size-5 rounded-lg drop-shadow-xs after:absolute after:-inset-0 after:-z-1 after:rounded-[inherit] after:border-0 after:ring-0">
            <div className="mask-radial inset-ring-border-alpha/0 bg-card relative block size-full rounded-sm mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[20%_20%] mask-radial-from-100% mask-radial-at-[85%_85%] mask-exclude mask-alpha inset-ring-[2px]" />
            <div className="absolute right-[0%] bottom-[0%] m-[2.5%] size-[25%] rounded-full bg-green-200 inset-ring-0 inset-ring-green-300" />
          </div>
        </div>
        Inset has 4px buffer at 80px, so 1px at 20
      </div>
      <Heading>Badge</Heading>
      <PlusBadge />
      <br />
      <a
        href="/plus?ref=top"
        className="group relative px-1.5 text-sm/6 text-sky-800! no-underline decoration-transparent! decoration-0! dark:text-sky-300"
      >
        <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 decoration-transparent! decoration-0! group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
        Plus
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50"
        >
          <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
        </svg>
      </a>
      <div className="min-80 flex w-full place-items-center bg-[url(https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=3604&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-contain p-4">
        <div
          className={cn(
            'relative w-max min-w-80 overflow-y-auto rounded-xl p-1 ring-1 ring-zinc-950/10 outline outline-transparent transition focus:outline-hidden lg:min-w-64',
            'shadow-[inset_1px_1px_1px_rgba(255_255_255/15%),inset_-1px_-1px_0.5px_-0.5px_rgba(255_255_255/50%),inset_1px_1px_.5px_-.5px_rgba(255_255_255/25%),var(--shadow-lg)]',
            'data-closed:opacity-0 data-closed:duration-100 data-closed:ease-in',
            'supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]',
            // 'dark:ring-white/10 dark:ring-inset',
            // 'bg-white/5 dark:bg-zinc-800/10',
            'after:pointer-events-none after:absolute after:-inset-px after:z-10 after:rounded-[inherit] after:bg-white/5',
            '[backdrop-filter:_url(#filter)_brightness(1.1)_saturate(1.5)]',
            // 'after:filter-[url(#filter)]',
            'resize',
            // 'after:bg-blend-color-burn',
          )}
          style={
            {
              // backdropFilter: 'url(#filter) brightness(1.1) saturate(1.5)',
              // background: 'light-dark(hsl(0 0% 100% / var(0.05, 0)), hsl(0 0% 0% / var(0.05, 0))',
              // boxShadow:
              //   '0 0 2px 1px light-dark(color-mix(in oklch, canvasText, #0000 85%), color-mix(in oklch, canvasText, #0000 65%)) inset,0 0 10px 4px light-dark(color-mix(in oklch, canvasText, #0000 90%),color-mix(in oklch, canvasText, #0000 85%)) inset, 0px 4px 16px rgba(17, 17, 26, 0.05), 0px 8px 24px rgba(17, 17, 26, 0.05), 0px 16px 56px rgba(17, 17, 26, 0.05), 0px 4px 16px rgba(17, 17, 26, 0.05) inset, 0px 8px 24px rgba(17, 17, 26, 0.05) inset, 0px 16px 56px rgba(17, 17, 26, 0.05) inset',
            }
          }
        >
          <svg
            className="displacement-image h-full w-full opacity-0"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            id="SourceGraphic"
          >
            <defs>
              <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0000" />
                <stop offset="100%" stopColor="red" />
              </linearGradient>
              <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0000" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            {/* <!-- backdrop --> */}
            <rect x="0" y="0" width="100" height="100" fill="black" />
            {/* <!-- red linear --> */}
            <rect x="0" y="0" width="100" height="100" rx="16" fill="url(#red)" />
            {/* <!-- blue linear --> */}
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              rx="16"
              fill="url(#blue)"
              style={{ mixBlendMode: 'difference' }}
            />
            {/* <!-- block out distortion --> */}
            <rect
              x="3.3600000000000003"
              y="3.3600000000000003"
              width="329.28"
              height="89.28"
              rx="16"
              fill="hsl(0 0% 50% / 0.93"
              style={{ filter: 'blur(11px)' }}
            />
          </svg>
          <svg
            className="absolute -inset-px h-full w-full filter"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="filter" colorInterpolationFilters="sRGB">
                <feImage
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  result="map"
                  in="SourceGraphic"
                ></feImage>

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="map"
                  id="redchannel"
                  xChannelSelector="R"
                  yChannelSelector="B"
                  result="dispRed"
                  scale="-180"
                ></feDisplacementMap>
                <feColorMatrix
                  in="dispRed"
                  type="matrix"
                  values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
                  result="red"
                ></feColorMatrix>

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="map"
                  id="greenchannel"
                  xChannelSelector="R"
                  yChannelSelector="B"
                  result="dispGreen"
                  scale="-170"
                ></feDisplacementMap>
                <feColorMatrix
                  in="dispGreen"
                  type="matrix"
                  values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
                  result="green"
                ></feColorMatrix>

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="map"
                  id="bluechannel"
                  xChannelSelector="R"
                  yChannelSelector="B"
                  result="dispBlue"
                  scale="-160"
                ></feDisplacementMap>
                <feColorMatrix
                  in="dispBlue"
                  type="matrix"
                  values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
                  result="blue"
                ></feColorMatrix>

                <feBlend in="red" in2="green" mode="screen" result="rg"></feBlend>
                <feBlend in="rg" in2="blue" mode="screen" result="output"></feBlend>

                <feGaussianBlur in="output" stdDeviation="0.2"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <button
            className={cn(
              'group col-span-full grid cursor-default grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center rounded-lg px-3.5 py-2.5 text-left text-base/6 text-zinc-950 forced-color-adjust-none focus:outline-hidden',
              'sm:px-3 sm:py-1.5 sm:text-sm/6',
              'focus:bg-blue-500 focus:text-white disabled:opacity-50',
              '*:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:size-6',
              '*:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:text-zinc-500 focus:*:data-[slot=icon]:text-white',
              'supports-[grid-template-columns:subgrid]:grid-cols-subgrid',
              'sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4 dark:text-white dark:*:data-[slot=icon]:text-zinc-400 dark:focus:*:data-[slot=icon]:text-white forced-colors:text-[CanvasText] forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText]',
            )}
          >
            <Cog6ToothIcon data-slot="icon" />
            Hello
          </button>
        </div>

        <svg className="hidden" xmlns="http://www.w3.org/2000/svg" id="glass-distortion2">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                id="SvgjsFeGaussianBlur1000"
                result="SvgjsFeGaussianBlur1000"
                in="SourceGraphic"
                stdDeviation={13}
              />
              <feColorMatrix
                id="SvgjsFeColorMatrix1001"
                result="SvgjsFeColorMatrix1001"
                in="SvgjsFeGaussianBlur1000"
                values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 13 -10
      "
                type="matrix"
              />
              <feComposite
                id="SvgjsFeComposite1002"
                result="SvgjsFeComposite1002"
                in="SvgjsFeColorMatrix1001"
                operator="atop"
              />
            </filter>
            <filter id="knockout" colorInterpolationFilters="sRGB">
              <feColorMatrix
                result="knocked"
                type="matrix"
                values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              -1 -1 -1 1 0"
              />
              <feComponentTransfer>
                <feFuncR type="linear" slope={3} intercept={-1} />
                <feFuncG type="linear" slope={3} intercept={-1} />
                <feFuncB type="linear" slope={3} intercept={-1} />
              </feComponentTransfer>
              <feComponentTransfer>
                <feFuncR type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
                <feFuncG type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
                <feFuncB type="table" tableValues="0 0 0 0 0 1 1 1 1 1" />
              </feComponentTransfer>
            </filter>
            <filter id="remove-black" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                -255 -255 -255 0 1"
                result="black-pixels"
              />
              <feMorphology in="black-pixels" operator="dilate" radius="0.5" result="smoothed" />
              <feComposite in="SourceGraphic" in2="smoothed" operator="out" />
            </filter>
          </defs>
        </svg>
        <div className="size-10 rounded-md border-4 border-white/50 bg-transparent blur-[1px] backdrop-blur-none"></div>
        <div
          className="ring-border-alpha relative z-1 w-full overflow-clip p-2.5 shadow-lg ring backdrop-blur-[3px]"
          // className={cn(
          //   "shadow-xs', 'before:absolute before:-z-1','after:absolute  backdrop-blur-[2px] before:inset-0 before:bg-white/40 after:inset-0 after:-z-1 after:bg-[#0f0f0f] after:mix-blend-color-dodge",
          // )}
          style={{
            // width: '80px',
            height: '80px',
            boxShadow:
              '0px 2px 16px rgba(0, 0, 0, 0.5), inset 1px 1px 1px rgba(255 255 255 / .15), inset -1px -1px 0.5px -0.5px rgba(255 255 255 / .5), inset 1px 1px .5px -.5px rgba(255 255 255 / .5)',

            // background:
            //   'linear-gradient(rgba(245, 245, 245, 0.4), rgba(245, 245, 245, 0.4)), linear-gradient(#0F0F0F, #0F0F0F)',
            background:
              'linear-gradient(rgba(255 255 255 / 3%), rgba(255 255 255 / 3%)), linear-gradient(rgba(0 0 0 / 33%), rgba(0 0 0 / 33%)), linear-gradient(#ccc, #ccc)',
            backgroundBlendMode: 'normal,normal,overlay',
            // mixBlendMode: 'plus-lighter',
            borderRadius: '34px',

            // backgroundImage: 'linear-gradient(#0F0F0F, #0F0F0F)',
            // mixBlendMode: 'plus-lighter',
            // filter: 'brightness(1.4)',
            // backdropFilter: 'blur(1px)',
          }}
        >
          <button className="relative w-full px-3 py-1 text-left text-white after:absolute after:inset-0 after:-z-1 after:rounded-full after:bg-[#121212] after:mix-blend-plus-lighter">
            Menu Item
          </button>
          {/* <div className="absolute inset-0 rounded-[inherit] bg-white/20 mask-radial-[33%_33%,100%_100%] mask-radial-from-100% mask-radial-at-center bg-cover bg-center mask-intersect mask-no-repeat" /> */}
        </div>
      </div>
      <Separator />
      <div className="relative size-20 bg-green-300 p-2">
        <svg style={{ display: 'none' }}>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves="1"
              seed="50"
              result="turbulence"
            />

            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
              <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
              <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>

            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

            <feSpecularLighting
              in="softMap"
              surfaceScale="5"
              specularConstant="1"
              specularExponent="100"
              lightingColor="white"
              result="specLight"
            >
              <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>

            <feComposite
              in="specLight"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="litImage"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <div
          className="relative -left-4 isolate size-10 overflow-hidden rounded-full bg-[#0f0f0f] bg-blend-color-dodge shadow-xs after:absolute after:inset-0 after:-z-1 after:bg-white/40 after:bg-blend-color-dodge after:blur-[1px] after:[filter:url(#glass-distortion)] after:backdrop-blur-[3px]"
          style={{
            boxShadow:
              '1px -1px 2px hsl(0 0% 100% / 0.5) inset, 0px -1px 2px hsl(0 0% 100% / 0.5) inset, -1px -1px 2px hsl(0 0% 100% / 0.5) inset, 1px 1px 2px hsl(0 0% 30% / 0.5) inset, -8px 4px 10px -6px hsl(0 0% 30% / 0.25) inset, -1px 1px 6px hsl(0 0% 30% / 0.25) inset, -1px -1px 8px hsl(0 0% 60% / 0.15), 1px 1px 2px hsl(0 0% 30% / 0.15), 2px 2px 6px hsl(0 0% 30% / 0.15), -2px -1px 2px hsl(0 0% 100% / 0.25) inset, 3px 6px 16px -6px hsl(0 0% 30% / 0.5)',
          }}
        />
      </div>
      <h2>Switch / Toggle</h2>
      <Paragraph>iOS 26</Paragraph>
      <Paragraph>Radix unstyled</Paragraph>
      <SwitchPrimitive.Root className="group flex h-7 w-16 flex-row rounded-full bg-gray-100 p-0.5 data-[state=checked]:bg-green-300">
        <SwitchPrimitive.Thumb
          className={cn(
            'ease bg-glass-2 hover:bg-glass-2 h-6 w-10 origin-right rounded-[12px] backdrop-blur-xs transition-all hover:scale-x-120 hover:scale-y-130 data-[state=checked]:origin-left data-[state=checked]:translate-x-[20px]',
            'hover:ring-[0.5px] hover:ring-gray-700/15',
            'active:bg-card/10 data-[state=unchecked]:hover:bg-card/0 data-[state=unchecked]:mix-blend-screen data-[state=unchecked]:backdrop-blur-[2px]',
          )}
        ></SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      <SwitchPrimitive.Root className="group flex h-7 w-16 flex-row rounded-full bg-gray-100 p-0.5 data-[state=checked]:bg-pink-400">
        <SwitchPrimitive.Thumb
          className={cn(
            'ease bg-glass-2 group-hover:bg-card/0 h-6 w-10 origin-right rounded-[12px] transition-all group-hover:scale-x-120 group-hover:scale-y-130 data-[state=checked]:origin-left data-[state=checked]:translate-x-[20px]',
            'group-hover:bg-glass-2 data-[state=unchecked]:hover:bg-card/0',
          )}
        ></SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      <Paragraph>Button with classes</Paragraph>
      <button className="hover: flex h-7 w-16 flex-row rounded-full bg-green-500 p-0.5">
        <div className="h-6 w-10 rounded-full bg-white shadow-2xs"></div>
      </button>
      <Switch
        className={cn(
          'h-7 w-16 border-0 data-[state=checked]:bg-green-500',
          'data-[slot=switch-thumb]:h-6 [*]:data-[slot=switch-thumb]:w-10',
          'data-[state=checked]:data-[slot=switch-thumb]:translate-none [*]:data-[state=checked]:data-[slot=switch-thumb]:ml-auto',
        )}
      ></Switch>
      doesn't work – can't override default classes
      <br />
      <Separator />
      <h2 className="">Buttons</h2>
      <Card.Card>
        <Card.CardHeader>Clerk</Card.CardHeader>
        <Card.CardContent>
          <button
            className={cn(
              'group before:transtion-opacity relative isolate inline-flex h-[1.875rem] items-center justify-center overflow-hidden rounded-md bg-purple-500 px-3 text-left text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-purple-500 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay hover:before:opacity-100',
            )}
          >
            Label
          </button>
        </Card.CardContent>
      </Card.Card>
      <br />
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>Base UI</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <button
            className={cn(
              'flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100',
            )}
          >
            Base UI
          </button>
        </Card.CardContent>
      </Card.Card>
      <br />
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>Tailwind Catalyst</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <button
            className={cn(
              'relative isolate inline-flex w-full cursor-default items-baseline justify-center gap-x-2',
              'rounded-lg border border-transparent',
              'bg-(--btn-border)',
              'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)]',
              'text-base/6 font-semibold text-white',
              '[--btn-bg:var(--color-zinc-900)]',
              '[--btn-border:var(--color-zinc-950)]/90',
              '[--btn-hover-overlay:var(--color-white)]/10',
              '[--btn-icon:var(--color-zinc-400)]',
              'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm',
              'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
              'active:[--btn-icon:var(--color-zinc-300)] active:after:bg-(--btn-hover-overlay)',
              'disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
              'hover:[--btn-icon:var(--color-zinc-300)] hover:after:bg-(--btn-hover-overlay) *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon)',
              'sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4',
              'dark:border-white/5 dark:bg-(--btn-bg) dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 dark:before:hidden dark:after:-inset-px dark:after:rounded-lg forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
            )}
          >
            Catalyst
            <ArrowRightIcon data-slot="icon" className="text-[--btn-icon]" />
          </button>
          <button
            className={cn(
              'relative isolate inline-flex cursor-default items-baseline justify-center gap-x-2 rounded-lg border border-transparent',
              'bg-(--btn-border)',
              'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)]',
              'text-base/6 font-semibold',
              'text-zinc-950',
              '[--btn-bg:white]',
              '[--btn-border:var(--color-zinc-950)]/10',
              '[--btn-hover-overlay:var(--color-zinc-950)]/2.5',
              '[--btn-icon:var(--color-zinc-500)]',
              'before:absolute before:inset-0',
              'before:-z-10',
              'before:rounded-[calc(var(--radius-lg)-1px)]',
              'before:bg-(--btn-bg)',
              'before:shadow-[0_1px_3px_#0000001a,0_1px_2px_-1px_#0000001a]',
              'after:absolute after:inset-0 after:-z-10',
              'after:rounded-[calc(var(--radius-lg)-1px)]',
              'after:shadow-[inset_0_1px] after:shadow-white/15',
              'hover:[--btn-border:var(--color-zinc-950)]/15',
              'hover:[--btn-icon:var(--color-zinc-700)]',
              'hover:after:bg-(--btn-hover-overlay)',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
              'active:[--btn-border:var(--color-zinc-950)]/15',
              'active:[--btn-icon:var(--color-zinc-700)]',
              'active:after:bg-(--btn-hover-overlay)',
              'disabled:opacity-50 disabled:before:shadow-none disabled:after:shadow-none',
              '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon)',
              'sm:px-[calc(--spacing(3)-1px)]',
              'sm:py-[calc(--spacing(1.5)-1px)]',
              'sm:text-sm/6',
              'sm:*:data-[slot=icon]:my-1',
              'sm:*:data-[slot=icon]:size-4',
              'dark:border-white/5',
              'dark:bg-(--btn-bg)',
              'dark:text-white',
              'dark:[--btn-bg:var(--color-zinc-800)]',
              'dark:[--btn-hover-overlay:var(--color-white)]/5',
              'dark:[--btn-icon:var(--color-zinc-500)]',
              'dark:before:hidden',
              'dark:after:-inset-px',
              'dark:after:rounded-lg',
              'dark:hover:[--btn-icon:var(--color-zinc-400)]',
              'dark:active:[--btn-icon:var(--color-zinc-400)]',
              'forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
            )}
          >
            Catalyst <ArrowRightIcon data-slot="icon" className="text-[--btn-icon]" />
          </button>
        </Card.CardContent>
      </Card.Card>
      <br />
      <Card.Card className="bg-transparent!">
        <Card.CardHeader>
          <Card.CardTitle>Catalyst 2</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent className="wrap flex">
          <button
            className={cn(
              '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-zinc-800)]',
              'text-foreground rounded-[calc(var(--radius-lg)-1px)] px-3 py-2.5 text-sm leading-4 font-semibold',
              'relative z-0 bg-[var(--current-bg)]',
              'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
              'dark:ring-1 dark:ring-black',
              'inset-ring-1 inset-ring-white/5',
              'inset-shadow-[0_1px] inset-shadow-white/15',
              'shadow-sm',
              // 'm-px',
              'after:absolute after:-inset-px after:-z-2 after:rounded-lg',
              // 'after:bg-card',
              'after:border after:border-zinc-950/10 hover:after:border-zinc-950/15',
            )}
          >
            with pseudo
          </button>
          <button
            className={cn(
              '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-popover)]',
              'text-foreground rounded-lg px-3 py-2.5 text-sm leading-4 font-semibold',
              'bg-[var(--current-bg)]',
              'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
              'dark:ring-0 dark:inset-ring dark:inset-ring-white/5',
              'inset-shadow-[0_1px] inset-shadow-white/15',
              'shadow-sm',
              'ring-border ring-1',
              // 'ring-offset-background ring-offset-[0.5px]',
            )}
          >
            No pseudo
          </button>
          <button
            className={cn(
              '[--current-bg:var(--color-card)] dark:[--current-bg:var(--color-zinc-800)]',
              'text-foreground rounded-lg px-3 py-2.5 text-sm leading-4 font-semibold',
              'bg-[var(--current-bg)]',
              'hover:bg-[color-mix(in_oklch,var(--current-bg),currentColor_2.5%)]',
              // 'dark:ring-1 dark:ring-black',
              'inset-ring-1 inset-ring-white/5',
              'inset-shadow-[0_1px] inset-shadow-white/15',
              'shadow-sm',
              'ring-accent ring-[0.5px]',
              'ring-offset-background ring-offset-[0.5px]',
            )}
          >
            Interesting offset
          </button>

          <button
            className={cn(
              'bg-card hover:bg-secondary inline-flex items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-[calc(--spacing(1.5)-1px)] text-sm font-medium whitespace-nowrap text-gray-950 shadow-sm ring-1 ring-current/15 active:bg-gray-100 disabled:bg-transparent disabled:opacity-40 dark:shadow-[-0.5px_-1px_0.5px] dark:shadow-current/20',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                clipRule="evenodd"
              ></path>
            </svg>
            RSS Feed
          </button>
        </Card.CardContent>
      </Card.Card>
      <br />
      <div className="max-lg:max-w-md. not-prose grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-current/5 max-lg:mx-auto max-lg:w-full">
        <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-current/5">
          <div className="bg-card rounded-3xl p-10 pb-9 shadow-2xl ring-1 ring-current/5">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
              Starter
            </h2>
            <p className="mt-2 text-sm/6 text-gray-950/75">Everything you need to start selling.</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-5xl font-medium text-gray-950">$99</div>
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per month</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-primary-foreground inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-4 py-[calc(--spacing(2)-1px)] text-base font-medium whitespace-nowrap shadow-md hover:bg-blue-600 disabled:bg-gray-950 disabled:opacity-40"
                href="#"
              >
                Start a free trial
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Up to 3 team members
                </li>
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Up to 5 deal progress boards
                </li>
                <li className="flex items-start gap-4 text-sm/6 text-gray-950/75 disabled:text-gray-950/25">
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  Source leads from select platforms
                </li>
                <li
                  data-disabled="true"
                  className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
                >
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Not included:</span>RadiantAI integrations
                </li>
                <li
                  data-disabled="true"
                  className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
                >
                  <span className="inline-flex h-6 items-center">
                    <svg
                      viewBox="0 0 15 15"
                      aria-hidden="true"
                      className="size-3.75 shrink-0 fill-gray-950/25"
                    >
                      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Not included:</span>Competitor analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BannerExample />
      <br />
      <div
        className={cn(
          'grid grid-flow-col-dense gap-2 rounded-xl bg-zinc-500 p-10',
          'bg-gradient-to-br from-yellow-500 to-pink-700',
        )}
      >
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(15,15,15,0.32)] text-[#fff]/80 shadow-[0px_0px_1.5px_rgba(0,0,0,0.1),0px_0.65px_5px_rgba(0,0,0,0.12),inset_0.65px_0.65px_1px_-0.65px_rgba(255,255,255,0.8),inset_-0.65px_-0.65px_2px_-0.65px_rgba(255,255,255,0.4)] backdrop-blur-sm">
          <PencilIcon />
        </button>

        <button
          className={cn(
            'transition-shadow',
            'flex h-10 w-10 items-center justify-center rounded-full',
            'bg-card/20 text-[#fff]/80 backdrop-blur-sm',
            'shadow-[0px_0px_1.5px_rgba(0,0,0,0.1),0px_0.65px_5px_rgba(0,0,0,0.12),inset_0.65px_0.65px_1px_-0.65px_rgba(255,255,255,0.8),inset_-0.65px_-0.65px_2px_-0.65px_rgba(255,255,255,0.4)]',
            'hover:bg-gray-400',
            'hover:shadow-[0px_0px_1.5px_rgba(0,0,0,0.1),0px_0.65px_5px_rgba(0,0,0,0.12),inset_0.65px_0.65px_1px_-0.65px_rgba(255,255,255,0.8),inset_-0.65px_-0.65px_2px_-0.65px_rgba(255,255,255,0.4)]',
            'active:bg-gray-500',
          )}
        >
          <PencilIcon />
        </button>

        <div
          className={cn('bg-card/20 size-10 rounded-xl', 'shadow-[0px_0px_1.5px_rgba(0,0,0,0.1)]')}
        ></div>
        <div
          className={cn(
            'bg-card/20 size-10 rounded-xl',
            'shadow-[inset_0.65px_0.65px_1px_-0.65px_rgba(255,255,255,0.8)]',
          )}
        ></div>
        <div
          className={cn(
            'bg-card/20 size-10 rounded-xl',
            'shadow-[inset_-0.65px_-0.65px_2px_-0.65px_rgba(255,255,255,0.4)]',
          )}
        ></div>

        <div
          className={cn(
            'bg-card/20 grid size-10 place-items-center rounded-full text-gray-50',
            'shadow-[inset_-1.5px_-1.5px_3px_-1.5px_hsl(0_0_100/30%),inset_-12px_0_64px_-16px_hsl(0_0_0/25%),inset_1px_1px_.5px_-.5px_hsl(0_0_100/50%),inset_0_0_.5px_0_hsl(0_0_100/40%),0_-1px_8px_-4px_hsl(0_0_0/40%)]',
          )}
        >
          <PencilIcon />
        </div>
        <div
          className={cn(
            'grid size-10 place-items-center rounded-full bg-white/5 text-gray-600',
            'shadow-[inset_-1.5px_-1.5px_3px_-1.5px_hsl(0_0_100/30%),inset_-12px_0_64px_-16px_hsl(0_0_100/1%),inset_1px_1px_.5px_-.5px_hsl(0_0_100/50%),inset_0_0_.5px_0_hsl(0_0_100/40%),0_-1px_8px_-4px_hsl(0_0_0/40%)]',
          )}
        >
          <PencilIcon />
        </div>
      </div>
      <div
        className={cn(
          'grid size-10 place-items-center rounded-full bg-gray-300/15 text-gray-600',
          'shadow-[inset_-1.5px_-1.5px_3px_-1.5px_hsl(0_0_100/30%),inset_-12px_0_64px_-16px_hsl(0_0_100/1%),inset_1px_1px_.5px_-.5px_hsl(0_0_100/50%),inset_0_0_.5px_0_hsl(0_0_100/40%),0_0px_.5px_hsl(0_0_0/40%),var(--shadow-sm)]',
        )}
      >
        <PencilIcon />
      </div>
      <div className={cn('relative h-[400px] overflow-y-auto rounded-lg')}>
        <div
          className="dark:before:bg-black-alpha-500 relative h-[2400px] w-full bg-linear-to-b/longer from-indigo-400 via-teal-500 to-stone-950 p-10 dark:before:absolute dark:before:inset-0 dark:before:z-0"
          style={{
            backgroundColor: '#99ffa5',
            backgroundImage:
              'radial-gradient(at 89% 37%, hsla(336,91%,62%,1) 0px, transparent 50%), radial-gradient(at 14% 89%, hsla(61,70%,66%,1) 0px, transparent 50%), radial-gradient(at 44% 82%, hsla(33,94%,79%,1) 0px, transparent 50%), radial-gradient(at 65% 72%, hsla(342,89%,70%,1) 0px, transparent 50%), radial-gradient(at 14% 2%, hsla(243,69%,64%,1) 0px, transparent 50%), radial-gradient(at 57% 25%, hsla(206,65%,69%,1) 0px, transparent 50%),radial-gradient(at 67% 35%, hsla(192,62%,65%,1) 0px, transparent 50%)',
          }}
        >
          <button className="bg-glass-light sticky top-10 size-10 rounded-full">
            <PencilIcon />
          </button>
          <br />
          <div className="sticky top-20">
            <div className="relative min-h-20 -space-y-20 overflow-hidden rounded-xl p-3.5 shadow-[.5px_.5px_.5px_hsl(0_0_100/.5)]">
              <div className="aspect-square h-10 rounded-[10px] shadow-[0px_2px_16px] shadow-black/15" />
              <div className="absolute inset-0 bg-[rgba(26,26,26,0.2)] mix-blend-plus-lighter" />
              <div className="absolute inset-0 bg-[rgba(255,0,0,0.1)] mix-blend-saturation" />
              <div className="absolute inset-0 bg-white/25" />
            </div>
          </div>

          <div className="sticky top-44 mix-blend-luminosity dark:mix-blend-plus-darker">
            <div
              className={cn(
                'relative flex h-16 gap-2.5 rounded-[24px] p-3.5 backdrop-blur-xs',
                'bg-[linear-gradient(rgba(26,26,26,0.2)),linear-gradient(rgba(255,0,0,0.1)),linear-gradient(rgba(255,255,255,0.25))]',
                '[background-blend-mode:screen,saturation,normal]',
                'dark:[background-blend-mode:screen,normal]',
                'dark:bg-[linear-gradient(rgba(89,89,89,0.5)),linear-gradient(rgba(255,255,255,0.25)),linear-gradient(rgba(0,0,0,0.25))]',
              )}
              style={{
                // background:
                // 'linear-gradient(0deg, rgba(26, 26, 26, 0.2), rgba(26, 26, 26, 0.2)), linear-gradient(0deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.1)), rgba(255, 255, 255, 0.25)',
                // backgroundBlendMode: 'screen, saturation, normal',
                boxShadow:
                  '0px 2px 16px rgba(0, 0, 0, 0.15), inset 1px 1px 1px rgba(255 255 255 / .10), inset -1px -1px 0.5px -0.5px rgba(255 255 255 / .10), inset 1px 1px .5px -.5px rgba(255 255 255 / .25)',
                // backgroundBlendMode: 'plus-lighter,saturation,normal',
              }}
            >
              <div
                className={cn(
                  'relative aspect-square h-full overflow-hidden rounded-[10px] outline-[0.5px] -outline-offset-[0.5px] outline-black/15',
                  'before:absolute before:inset-0 before:-z-1 before:rounded-[10px] before:bg-[#1F1F1F] before:mix-blend-plus-lighter',
                  // 'after:absolute after:-inset-8 after:z-1 after:rounded-[10px] after:bg-black/4 after:mix-blend-hard-light after:blur-[10px] after:backdrop-blur-[20px]',
                )}
                style={
                  {
                    // boxShadow:
                    //   '0px 2px 16px rgba(0, 0, 0, 0.15), inset 1px 1px 1px rgba(255 255 255 / .10), inset -1px -1px 0.5px -0.75px rgba(255 255 255 / .10), inset 0 0 .5px .5px rgba(255 255 255 / .25)',
                    // opacity: '.67',
                    // backgroundImage:
                    //   'linear-gradient(0deg, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5)), #333333',
                    // backgroundBlendMode: 'darken, normal, color-dodge',
                  }
                }
              />

              <div
                className={cn(
                  'align-start flex w-full flex-col',
                  'font-[system-ui]',
                  'text-[15px] leading-[17px] tracking-[-0.23px]',
                  'dark:text-black-alpha-975 text-white',
                )}
              >
                <p className={cn('font-[590]')}>Title</p>

                <p className={cn('font-normal')}>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
