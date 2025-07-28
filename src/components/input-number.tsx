'use client';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
import { useResizeObserver } from 'usehooks-ts';
import { useRef } from 'react';

// const prefixRef = useRef(null);
// const { prefixwidth = 0 } = useResizeObserver({
//   ref: prefixRef,
//   box: 'border-box',
// });
// const suffixRef = useRef(null);
// const { suffixwidth = 0 } = useResizeObserver({
//   ref: suffixRef,
//   box: 'border-box',
// });

interface InputNumberProps {
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  value?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function InputNumber({
  prefix,
  suffix,
  placeholder = '0',
  min = 10,
  max = 20,
  ...props
}: InputNumberProps) {
  const buttonClasses = 'col-span-1 h-full min-w-0! w-full rounded-l-[2px] ';
  return (
    <div className="relative">
      <Input
        type="number"
        className="w-full pe-10"
        startSlot={prefix}
        endSlot={suffix}
        min={min}
        max={max}
        placeholder={placeholder}
        {...props}
      />
      <div className="absolute inset-y-0 end-0 grid w-10 grid-rows-2 gap-0.5 p-1">
        <Button
          variant="ghost"
          disabled={props.value === min}
          size="sm"
          className={cn('rounded-tr-md rounded-br-[2px]', buttonClasses)}
        >
          <ChevronUpIcon />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled={props.value >= max}
          className={cn('rounded-tr-[2px] rounded-br-md', buttonClasses)}
        >
          <ChevronDownIcon />
        </Button>
      </div>
    </div>
  );
}
