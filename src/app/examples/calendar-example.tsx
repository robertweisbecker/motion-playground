'use client';

import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';
import type { CalendarButtonVariant } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Paragraph } from '@/components/paragraph';
import { Separator } from '@/components/ui/separator';
import { Code } from '@/components/code';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Item } from '@/components/ui/item';

const captionLayoutOptions = [
  { value: 'label', label: 'Label' },
  { value: 'dropdown', label: 'Dropdown' },
  { value: 'dropdown-months', label: 'Dropdown (months)' },
  { value: 'dropdown-years', label: 'Dropdown (years)' },
] as const;

const buttonVariantOptions: { value: CalendarButtonVariant; label: string }[] =
  [
    { value: 'default', label: 'Default' },
    { value: 'outline', label: 'Outline' },
  ];

export function CalendarModeExample() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>(
    undefined,
  );
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);

  return (
    <>
      <Paragraph variant="body" className="w-full">
        Mode: Single
      </Paragraph>
      <Calendar
        mode="single"
        selected={singleDate}
        onSelect={setSingleDate}
        captionLayout="label"
      />

      <Paragraph variant="body" className="w-full">
        Multiple
      </Paragraph>
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        captionLayout="label"
      />

      <Paragraph variant="body" className="w-full">
        Mode: Range
      </Paragraph>
      <Calendar
        mode="range"
        numberOfMonths={2}
        showOutsideDays={false}
        // fixedWeeks={true}
        navLayout="around"
        selected={rangeDate}
        onSelect={setRangeDate}
        captionLayout="label"
      />
    </>
  );
}

export function CalendarCaptionLayoutExample() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [captionLayout, setCaptionLayout] = useState<
    'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'
  >('label');

  return (
    <div className="flex flex-col gap-4">
      <Paragraph variant="label">captionLayout</Paragraph>
      <div className="flex flex-wrap gap-4">
        <Select
          value={captionLayout}
          onValueChange={(v) =>
            setCaptionLayout(
              v as 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years',
            )
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Caption layout" />
          </SelectTrigger>
          <SelectContent>
            {captionLayoutOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          captionLayout={captionLayout}
          components={{
            Root: Item,
            DayButton: Button,
          }}
        />
      </div>
    </div>
  );
}

export function CalendarButtonVariantExample() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-4">
      <Paragraph variant="label">buttonVariant</Paragraph>
      <div className="flex flex-wrap gap-8">
        {buttonVariantOptions.map((opt) => (
          <div key={opt.value} className="flex flex-col gap-2">
            <Paragraph variant="label">{opt.label}</Paragraph>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              captionLayout="label"
              buttonVariant={opt.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
