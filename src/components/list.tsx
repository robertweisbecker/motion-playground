import { cn } from '@/lib/utils';

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

function ListItem({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('list-bullet list-outside not-first:mt-2 marker:opacity-50', className)}
      {...props}
    >
      {children}
    </li>
  );
}
