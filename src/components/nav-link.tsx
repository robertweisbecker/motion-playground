'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  label?: string;
}

function NavLink({ href, children, label, className }: NavLinkProps) {
  const pathname = usePathname();
  const currentPage = pathname === href;

  // const activeClass = currentPage && 'text-foreground font-medium bg-accent';

  return (
    <Link
      href={href}
      className={cn(
        // activeClass,
        'transition-[width]',
        'flex flex-row',
        // 'hover:[&_.indicator]:transition-opacity hover:[&_.indicator]:bottom-0 hover:[&_.indicator]:h-0.5 hover:[&_.indicator]:w-1/2 hover:[&_.indicator]:bg-current/25',
        // 'data-[state=active]:[&_.indicator]:bg-accent data-[state=active]:[&_.indicator]:inset-x-auto data-[state=active]:[&_.indicator]:top-auto data-[state=active]:[&_.indicator]:h-2 data-[state=active]:[&_.indicator]:w-2 data-[state=active]:[&_.indicator]:translate-y-0 data-[state=active]:[&_.indicator]:rounded-md data-[state=active]:[&_.indicator]:opacity-100',
        'data-[state=active]:[&_.indicator]:ms-0 data-[state=active]:[&_.indicator]:size-1.5 data-[state=active]:[&_.indicator]:bg-current',
        className,
      )}
      data-state={href === pathname ? 'active' : 'inactive'}
      {...(currentPage && { 'aria-current': 'page' })}
    >
      {/* {currentPage && (
				<span
					className={cn(
						'indicator shrink-0 rounded-full bg-current/50 transition-[opacity,width,height]',
						currentPage && 'size-1.5 opacity-100',
					)}
				/>
			)} */}

      {label || children}
      <span
        className={cn(
          'indicator ease -ms-1 h-1.5 w-0 shrink-0 origin-center rounded-md bg-transparent transition-[background,transform,translate,width,height] duration-150',
          // currentPage && 'size-1.5 opacity-100',
        )}
      />
    </Link>
  );
}

// Usage example
// <NavLink href="/components">Components</NavLink>

export { NavLink };
