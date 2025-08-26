import { PopoverTrigger, Popover, PopoverContent } from '../ui/popover';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Paragraph } from '../paragraph';
import { cn } from '@/lib/utils';

export function Citation() {
  return (
    <div className="not-prose max-h-[500px] overflow-y-auto rounded-md border p-4">
      <p className="text-sm leading-relaxed">
        According to recent studies, artificial intelligence has shown remarkable progress in
        natural language processing.{' '}
        <span className="group/citation inline items-center gap-1">
          <span className="group-hover/citation:bg-info-100 dark:group-hover/citation:bg-info-900 group-hover/citation:text-info-800 dark:group-hover/citation:text-info-200 rounded-sm transition-colors">
            The technology continues to evolve rapidly, with new breakthroughs being announced
            regularly
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <button
                data-slot="hover-card-trigger"
                className={cn(
                  'focus-visible:border-ring focus-visible:ring-ring/50',
                  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                  'border-border-soft hover:border-border border',
                  'bg-muted text-muted-foreground hover:text-secondary-foreground hover:bg-secondary hover:cursor-pointer',
                  'data-open:bg-accent',
                  'ml-1 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-2',
                  '[&_svg]:pointer-events-none [&_svg]:size-3',
                )}
                data-state="closed"
              >
                example.com +5
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Hello</CardTitle>
                </CardHeader>
                <CardContent>Lorem ipsum dolor sit amet</CardContent>
              </Card>
              <div className="flex w-full items-center justify-between">
                <div className="inline-flex">
                  <Button iconOnly size="sm" variant="ghost">
                    <ChevronLeftIcon />
                  </Button>
                  <Button iconOnly size="sm" variant="ghost">
                    <ChevronRightIcon />
                  </Button>
                </div>
                <Paragraph variant="caption">1 / 4</Paragraph>
                <Button size="sm" variant="ghost">
                  Close
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </span>
        .
      </p>
    </div>
  );
}
