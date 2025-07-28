import { cn } from '@/lib/utils';

export function DemoContainer({ children, className, ...props }: React.ComponentProps<'div'> & {}) {
  return (
    <div
      className={cn(
        'not-prose border-border min-h-30',
        'rounded-[12px]',
        'my-6 gap-2 bg-gray-50 p-1',
        'dark:bg-gray-500/5',
        'ring-[0.5px] ring-white/10',
        'sm:-mx-4',
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-card flex min-h-32 w-full items-center justify-center gap-60 overflow-auto rounded-[8px] px-8 py-6 shadow-sm sm:px-12',
          'dark:bg-black',
          'dark:inset-ring-[0.5px] dark:inset-ring-white/10',
          'overscroll-x-contain',
          className,
        )}
      >
        <div className="mx-auto flex grow justify-center-safe gap-2 self-center-safe">
          {children}
        </div>
      </div>
    </div>
  );
}
