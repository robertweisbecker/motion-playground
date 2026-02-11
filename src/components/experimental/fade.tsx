import { cx } from 'class-variance-authority';
import styles from './fade.module.css';
// import { Logo } from 'components';

export function BlurFade() {
  return (
    <div className="relative inline-flex py-0 [--fader-bg:var(--color-background)] max-sm:scale-50">
      <Fade
        background="var(--color-background)"
        className="inset-0"
        side="top"
        blur="2px"
        stop="50%"
        debug
      />
      <p className="flex items-center gap-3 text-3xl">fadeeeeee</p>
    </div>
  );
}

export function Fade({
  stop,
  blur,
  side = 'top',
  height,
  className,
  background,
  style,
  ref,
  debug,
  children,
}: {
  stop?: string;
  blur?: string;
  height?: number;
  side: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  background: string;
  debug?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
}) {
  return (
    <div
      ref={ref}
      aria-hidden
      className={cx(styles.root, className)}
      data-side={side}
      style={
        {
          '--fader-stop': stop,
          '--fader-blur': blur,
          '--fader-bg': background,
          height: height ? `${height}px` : undefined,
          ...(debug && {
            outline: '2px solid var(--color-orange-500)',
            outlineOffset: '-2px',
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

// import { type CSSProperties } from 'react';
// interface FaderProps {
//  stop?: string;
//     blur?: string;
//     height?: number;
//     side: 'top' | 'bottom' | 'left' | 'right';
//     className?: string;
//     style?: CSSProperties;
// }
// export function Fader(
//   {...props} : FaderProps & React.ComponentPropsWithRef<'div'>
// ) {
//   return (

//   )
// }

// // export declare const FADER_STYLES =
// //   '.nextjs-scroll-fader {
// //     --blur: 1px;
// //     --stop: 25%;
// //     --height: 150px;
// //     --color-bg: var(--color-background-100);
// //     position: absolute;
// //     pointer-events: none;
// //     user-select: none;
// //     width: 100%;
// //     height: var(--height);
// //     left: 0;
// //     backdrop-filter: blur(var(--blur));\n
// //     &[data-side="top"] {
// //       top: 0;
// //       background: linear-gradient(to top, transparent, var(--color-bg));
// //       mask-image: linear-gradient(to bottom, var(--color-bg) var(--stop), transparent);
// //     }
// //   }
// //   ';
