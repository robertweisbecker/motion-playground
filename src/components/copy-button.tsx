import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// import { CheckIcon, CopyIcon } from 'lucide-react';
import {
  ComponentProps,
  SVGProps,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  isValidElement,
  cloneElement,
} from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { CheckIcon } from '@heroicons/react/20/solid';

export type CopyButtonProps = ComponentProps<typeof Button> & {
  onCopy?: () => void;
  onError?: (error: Error) => void;
  timeout?: number;
  content: string;
  icon?: React.ReactNode;
  tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
  copyUrl?: boolean;
};

export const CopyButton = ({
  onCopy,
  onError,
  timeout = 2000,
  children,
  content,
  className,
  size = 'sm',
  variant = 'ghost',
  tooltipSide = 'top',
  icon,
  copyUrl = false,
  ...props
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Compute the actual content to copy
  const contentToCopy = useMemo(() => {
    if (copyUrl && typeof window !== 'undefined' && content.startsWith('#')) {
      return `${window.location.origin}${window.location.pathname}${content}`;
    }
    return content;
  }, [copyUrl, content]);

  const copyToClipboard = useCallback(async () => {
    if (typeof window === 'undefined' || !navigator?.clipboard?.writeText) {
      onError?.(new Error('Clipboard API not available'));
      return;
    }

    try {
      await navigator.clipboard.writeText(contentToCopy);
      setIsCopied(true);
      onCopy?.();

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, timeout);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [contentToCopy, timeout, onCopy, onError]);

  const copyIconClasses = useMemo(
    () =>
      cn(
        isCopied ? 'scale-50 opacity-0' : 'scale-100 opacity-100',
        'transition-[opacity,scale] duration-150',
      ),
    [isCopied],
  );

  const checkIconClasses = useMemo(
    () =>
      cn(
        isCopied ? 'scale-100 opacity-100 delay-100' : 'scale-0 opacity-0',
        'transition-[opacity,scale] duration-150',
      ),
    [isCopied],
  );

  const copyIcon = useMemo(() => {
    if (!icon) {
      return <CustomCopyIcon className={copyIconClasses} />;
    }

    if (!isValidElement(icon)) {
      return icon;
    }

    const iconElement = icon as React.ReactElement<{ className?: string }>;
    return cloneElement(iconElement, {
      className: cn(copyIconClasses, iconElement.props?.className),
    });
  }, [icon, copyIconClasses]);

  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <Button
          className={cn('shrink-0', className)}
          onMouseDown={copyToClipboard}
          size={size}
          variant={variant}
          iconOnly={children ? false : true}
          {...props}
        >
          {children ? (
            children
          ) : (
            <span className={cn('grid-stack')}>
              <CheckIcon className={checkIconClasses} />
              {copyIcon}
            </span>
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side={tooltipSide}>
        {isCopied ? 'Copied!' : 'Copy'}
      </TooltipContent>
    </Tooltip>
  );
};

function CustomCopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-copy pointer-events-none size-4',
        props.className,
      )}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  );
}

function CustomCopiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-copy-check pointer-events-none size-4',
        props.className,
      )}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
      <path d="M11 14l2 2l4 -4" />
    </svg>
  );
}
