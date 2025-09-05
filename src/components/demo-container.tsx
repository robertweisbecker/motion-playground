import { cn } from '@/lib/utils';

export function DemoContainer({ children, className, ...props }: React.ComponentProps<'div'> & {}) {
  return (
    <div
      className={cn(
        'not-prose',
        'rounded-[12px]',
        'bg-muted my-6 gap-2 p-1',
        // 'ring-border-alpha ring-2',
        'inset-shadow-2xs',
        'sm:-mx-4',
      )}
      {...props}
    >
      <div
        className={cn(
          'flex w-full items-center justify-center gap-60 overflow-auto rounded-[8px] px-8 py-6 shadow-sm sm:px-12',
          // 'bg-background bg-[image:repeating-linear-gradient(45deg,var(--border-alpha-soft),var(--border-alpha-soft)_1px,transparent_0,transparent_0.5rem)]',
          // 'bg-card bg-[linear-gradient(to_right,var(--border-alpha-soft)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-alpha-soft)_1px,transparent_1px)] bg-[size:0.5rem_0.5rem]',
          'bg-popover bg-[radial-gradient(var(--color-gray-alpha-50)_1px,transparent_1.3px)] bg-[size:--spacing(2)_--spacing(2)]',
          'dark:inset-ring-border-alpha dark:inset-ring-[0.5px]',
          'max-w-full overscroll-x-contain',
        )}
      >
        <div className={cn('relative mx-auto grid w-full justify-items-center gap-4', className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
