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

// import * as React from "react";
// import { NumberField } from "@base-ui/react/number-field";
// import { Separator } from "@base-ui/react/separator";

// export default function ExampleNumberField() {
//   const id = React.useId();
//   return (
//     <>
//       <NumberField.Root
//         id={id}
//         defaultValue={100}
//         className="flex flex-col items-start gap-1"
//       >
//         <label
//           htmlFor={id}
//           className="cursor-ew-resize text-sm font-medium text-gray-900"
//         >
//           Amount
//         </label>

//         <NumberField.Group className="flex rounded border overflow-hidden rounded-md border-gray-200 outline-2 bg-[canvas] outline-transparent focus-within:border-transparent focus-within:outline focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-blue-500 transition-[box-shadow] focus-within:shadow-[0_0_0_3px] focus-within:shadow-blue-400/30">
//           <NumberField.Input className="h-10 w-24 text-center text-base text-gray-900 tabular-nums outline-none bg-transparent border-none" />

//           <div className="grid grid-rows-2 border-l-gray-200">
//             <NumberField.Increment className="flex w-10 items-center justify-center  bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-200 border-l border-gray-200">
//               <PlusIcon />
//             </NumberField.Increment>
//             <NumberField.Decrement className="flex w-10 items-center justify-center  bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-200 border-t border-l border-gray-200">
//               <MinusIcon />
//             </NumberField.Decrement>
//           </div>
//         </NumberField.Group>
//       </NumberField.Root>
//       <hr className="w-full my-4" />
//       <NumberField.Root
//         id={id}
//         defaultValue={100}
//         className="flex flex-col items-start gap-1"
//       >
//         <NumberField.ScrubArea className="cursor-ew-resize">
//           <label
//             htmlFor={id}
//             className="cursor-ew-resize text-sm font-medium text-gray-900"
//           >
//             Amount
//           </label>
//           <NumberField.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
//             <CursorGrowIcon />
//           </NumberField.ScrubAreaCursor>
//         </NumberField.ScrubArea>

//         <NumberField.Group className="flex">
//           <NumberField.Decrement className="flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100">
//             <MinusIcon />
//           </NumberField.Decrement>
//           <NumberField.Input className="h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-2 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800" />
//           <NumberField.Increment className="flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100">
//             <PlusIcon />
//           </NumberField.Increment>
//         </NumberField.Group>
//       </NumberField.Root>
//     </>
//   );
// }

// function CursorGrowIcon(props: React.ComponentProps<"svg">) {
//   return (
//     <svg
//       width="26"
//       height="14"
//       viewBox="0 0 24 14"
//       fill="black"
//       stroke="white"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
//     </svg>
//   );
// }

// function PlusIcon(props: React.ComponentProps<"svg">) {
//   return (
//     <svg
//       width="10"
//       height="10"
//       viewBox="0 0 10 10"
//       fill="none"
//       stroke="currentcolor"
//       strokeWidth="1.6"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
//     </svg>
//   );
// }

// function MinusIcon(props: React.ComponentProps<"svg">) {
//   return (
//     <svg
//       width="10"
//       height="10"
//       viewBox="0 0 10 10"
//       fill="none"
//       stroke="currentcolor"
//       strokeWidth="1.6"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M0 5H10" />
//     </svg>
//   );
// }
