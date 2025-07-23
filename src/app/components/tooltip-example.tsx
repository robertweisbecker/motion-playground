import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export function TooltipExample() {
  return (
    <div className="gap-2 text-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Place content for the Tooltip here.</TooltipContent>
      </Tooltip>{' '}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Place content for the Tooltip here.</TooltipContent>
      </Tooltip>{' '}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Place content for the Tooltip here.</TooltipContent>
      </Tooltip>{' '}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Place content for the Tooltip here.</TooltipContent>
      </Tooltip>
    </div>
  );
}
