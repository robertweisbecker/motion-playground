import { cn } from '@/lib/utils';

export function DemoContainer({ children, className, ...props }: React.ComponentProps<'div'> & {}) {
  return (
    <div
      className={cn(
        'not-prose border-border',
        'rounded-[12px]',
        'bg-muted dark:bg-white-alpha-25 my-6 gap-2 p-1',
        'ring-border-soft ring-[0.5px]',
        'sm:-mx-4',
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-card flex w-full items-center justify-center gap-60 overflow-auto rounded-[8px] px-8 py-6 shadow-sm sm:px-12',
          'dark:bg-muted',
          'dark:inset-ring-border-alpha-soft dark:inset-ring-[0.5px]',
          'max-w-full overscroll-x-contain',
        )}
      >
        <div
          className={cn(
            'relative mx-auto grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-2',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
