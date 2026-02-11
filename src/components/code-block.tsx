'use client';

import { cn } from '@/lib/utils';
import {
  // type ComponentProps,
  createContext,
  type HTMLAttributes,
  // useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  type BundledLanguage,
  codeToHtml,
  createCssVariablesTheme,
  type ShikiTransformer,
} from 'shiki';
import { CopyButton } from './copy-button';
import { Paragraph } from './paragraph';

type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
  code: string;
  language: BundledLanguage;
  showLineNumbers?: boolean;
  fileName?: string;
};

type CodeBlockContextType = {
  code: string;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
  code: '',
});

// Create a custom CSS variables theme, the following are the default values
const myTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
});

const lineNumberTransformer: ShikiTransformer = {
  name: 'line-numbers',
  line(node, line) {
    node.children.unshift({
      type: 'element',
      tagName: 'span',
      properties: {
        className: [
          'inline-block',
          'min-w-6',
          'mr-4',
          'text-right',
          'select-none',
          'text-xs',
          'text-muted-foreground/50',
          'italic',
          'fixed',
        ],
      },
      children: [{ type: 'text', value: String(line) }],
    });
  },
};

export async function highlightCode(
  code: string,
  language: BundledLanguage,
  showLineNumbers = false,
) {
  const transformers: ShikiTransformer[] = showLineNumbers
    ? [lineNumberTransformer]
    : [];

  return await codeToHtml(code, {
    lang: language,
    themes: {
      light: myTheme,
      dark: myTheme,
    },
    transformers,
  });
}

export const CodeBlock = ({
  code,
  language,
  showLineNumbers = true,
  className,
  children,
  fileName = 'index',
  ...props
}: CodeBlockProps) => {
  const [html, setHtml] = useState<string>('');
  const mounted = useRef(false);

  // Per Shiki docs, code highlighting should be called asynchronously when inputs change.
  // To avoid updating state after unmount or race conditions, we use a "cancelled" flag.
  useEffect(() => {
    let cancelled = false;

    // Recommended: call the async highlighter on change and race-safe
    (async () => {
      const html = await highlightCode(code, language, showLineNumbers);
      if (!cancelled) setHtml(html);
    })();

    return () => {
      cancelled = true;
    };
  }, [code, language, showLineNumbers]);

  return (
    <CodeBlockContext.Provider value={{ code }}>
      <figure
        className={cn(
          'group relative w-full overflow-hidden rounded-xl border border-border bg-sidebar p-1 text-foreground',
          // 'outline outline-border-alpha dark:-outline-offset-1',

          className,
        )}
        style={
          {
            '--frame-background': 'rgba(0, 0, 0, 0.75)',
            '--frame-control-color': 'rgba(255, 255, 255, 0.2)',
            '--frame-title-placeholder-color': 'rgba(255, 255, 255, 0.3)',
            '--frame-title-color': 'rgba(255, 255, 255, 0.6)',
            '--frame-shadow-border': 'rgba(0, 0, 0, 0.8)',
            '--frame-highlight-border': 'rgba(255, 255, 255, 0.3)',
            '--ray-highlight-hover': 'rgba(255, 255, 255, 0.05)',
            '--ray-highlight': 'rgba(255, 255, 255, 0.1)',
            '--line-number': 'rgba(255, 255, 255, 0.2)',
            // boxShadow:
            //   '0 0 0 1px var(--frame-highlight-border),0 0 0 1.5px var(--frame-shadow-border),0 2.8px 2.2px rgb(0 0 0 / 0.034),0 6.7px 5.3px rgb(0 0 0 / 0.048),0 12.5px 10px rgb(0 0 0 / 0.06),0 22.3px 17.9px rgb(0 0 0 / 0.072),0 41.8px 33.4px rgb(0 0 0 / 0.086),0 100px 80px rgb(0 0 0 / 0.12)',
          } as React.CSSProperties
        }
        {...props}
      >
        {fileName && (
          <figcaption className="flex w-full items-center gap-2 p-1 pb-2">
            <div className="-my-3 grid size-6 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                className="size-full shrink-0 drop-shadow-xs"
              >
                <path
                  fill="var(--card)"
                  d="M4 4a4 4 0 0 1 4-4h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
                />
                <path
                  fill="var(--foreground)"
                  d="m24 0 12 12h-8a4 4 0 0 1-4-4z"
                  opacity=".25"
                  className="drop-shadow-xs"
                />
                <path
                  stroke="var(--foreground)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M23.333 27.333 26.667 24l-3.334-3.333m-6.666 0L13.333 24l3.334 3.333M21.333 18l-2.666 12"
                />
              </svg>
            </div>
            <Paragraph variant="item" className="line-clamp-1">
              {fileName}.{language}
            </Paragraph>
            <CopyButton
              content={code}
              variant="ghost"
              size="sm"
              iconOnly
              className="ms-auto"
              tooltipSide="left"
            />
          </figcaption>
        )}
        <div className="relative">
          <div
            className="overflow-hidden rounded-lg bg-card shadow-sm [&_code]:font-mono [&_code]:text-sm [&>pre]:m-0 [&>pre]:overflow-auto [&>pre]:px-3 [&>pre]:py-3 [&>pre]:text-sm"
            // eslint-disable-next-line @eslint/no-danger-with-children
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {!fileName && (
            <div className="absolute top-2 right-2 flex items-center gap-2">
              <CopyButton
                content={code}
                variant="outline"
                size="sm"
                iconOnly
                tooltipSide="left"
              />
            </div>
          )}
        </div>
      </figure>
    </CodeBlockContext.Provider>
  );
};

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
