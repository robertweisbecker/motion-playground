import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export function TooltipExample() {
  return (
    <>
      <div className="gap-2 text-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Place content for the Tooltip here.
          </TooltipContent>
        </Tooltip>{' '}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Place content for the Tooltip here.
          </TooltipContent>
        </Tooltip>{' '}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Place content for the Tooltip here.
          </TooltipContent>
        </Tooltip>{' '}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            Place content for the Tooltip here.
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="gap-2 text-center">
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <Button>With delay</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Place content for the Tooltip here.
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
