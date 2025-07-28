import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { InputNumber } from '@/components/input-number';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Tag } from '@/components/tag';

function SelectIcon() {
  return (
    <ChevronDownIcon
      aria-hidden="true"
      className="text-muted-foreground pointer-events-none absolute inset-y-0 right-2 flex size-4 h-full self-center justify-self-end"
    />
  );
}
export default function FormExperiment() {
  const inputClasses =
    'h-10 text-foreground rounded-lg border border-transparent text-right bg-transparent px-2 tabular-nums focus:bg-background hover:border-input focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring';
  return (
    <div className="prose max-w-4xl">
      <InputNumber />
      Grouped selects + shared focus state
      <fieldset className="flex flex-col justify-start gap-1">
        <legend>Time</legend>
        <div
          className="inset-ring-input has-focus-within:outline-ring/20 bg-card has-focus-within:inset-ring-ring flex h-10 w-fit grow-0 items-center rounded-lg inset-ring-1 has-focus-within:outline-3 has-focus-within:-outline-offset-1"
          role="group"
        >
          <div className="relative">
            <Label className="invisible absolute">Hour</Label>
            <select
              id="hour"
              name="hour"
              aria-label="Hour"
              defaultValue="hh"
              className={inputClasses}
            >
              <option>hh</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            {/* <SelectIcon /> */}
          </div>
          <div className="relative">
            <Label className="invisible absolute">Minute</Label>
            <select
              id="minute"
              name="minute"
              aria-label="minute"
              defaultValue=":mm"
              className={inputClasses}
            >
              <option disabled>:mm</option>
              <option>:00</option>
              <option>:01</option>
              <option>:02</option>
              <option>:03</option>
              <option>:04</option>
              <option>:05</option>
              <option>:06</option>
              <option>:07</option>
              <option>:08</option>
              <option>:09</option>
              <option>:10</option>
              <option>:11</option>
              <option>:12</option>
              <option>:13</option>
              <option>:14</option>
              <option>:15</option>
              <option>:16</option>
              <option>:17</option>
              <option>:18</option>
              <option>:19</option>
              <option>:20</option>
              <option>:21</option>
              <option>:22</option>
              <option>:23</option>
              <option>:24</option>
              <option>:25</option>
              <option>:26</option>
              <option>:27</option>
              <option>:28</option>
              <option>:29</option>
              <option>:30</option>
            </select>
            {/* <SelectIcon /> */}
          </div>
          <div className="relative">
            <Label className="invisible absolute">AM / PM</Label>
            <select
              id="period"
              name="period"
              aria-label="period"
              defaultValue="AM"
              className={inputClasses}
            >
              <option>AM</option>
              <option>PM</option>
            </select>
            {/* <SelectIcon /> */}
          </div>
        </div>
      </fieldset>
      <br />
      <fieldset className="">
        <legend className="mb-2 text-sm font-medium">Time</legend>
        <div className="flex gap-4">
          <div className="relative flex flex-col gap-1">
            <Label className="" htmlFor="hour">
              Hour
            </Label>
            <div className="relative">
              <select
                id="hour"
                name="hour"
                aria-label="Hour"
                defaultValue="1"
                className={cn(
                  'border-input text-foreground h-10 w-20 appearance-none rounded-md border ps-2 pe-5 text-center',
                )}
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>

              <SelectIcon />
            </div>
          </div>

          <div className="relative flex flex-col gap-1">
            <Label className="">Minute</Label>
            <div className="relative">
              <select
                id="minute"
                name="minute"
                aria-label="minute"
                defaultValue=":00"
                className={cn(
                  'border-input text-foreground h-10 w-20 appearance-none rounded-md border ps-2 pe-5 text-center',
                )}
              >
                <option>:00</option>
                <option>:01</option>
                <option>:02</option>
                <option>:03</option>
                <option>:04</option>
                <option>:05</option>
                <option>:06</option>
                <option>:07</option>
                <option>:08</option>
                <option>:09</option>
                <option>:10</option>
                <option>:11</option>
                <option>:12</option>
                <option>:13</option>
                <option>:14</option>
                <option>:15</option>
                <option>:16</option>
                <option>:17</option>
                <option>:18</option>
                <option>:19</option>
                <option>:20</option>
                <option>:21</option>
                <option>:22</option>
                <option>:23</option>
                <option>:24</option>
                <option>:25</option>
                <option>:26</option>
                <option>:27</option>
                <option>:28</option>
                <option>:29</option>
                <option>:30</option>
              </select>
              <SelectIcon />
            </div>
          </div>
          <div className="relative flex flex-col gap-1">
            <Label className="opacity-0">AM/PM</Label>
            <div className="relative">
              <select
                id="period"
                name="period"
                aria-label="period"
                defaultValue="AM"
                className={cn(
                  'border-input text-foreground h-10 w-20 appearance-none rounded-md border ps-2 pe-5 text-center',
                )}
              >
                <option>AM</option>
                <option>PM</option>
              </select>
              <SelectIcon />
            </div>
          </div>
        </div>
      </fieldset>
      <h2>Tag</h2>
      <Tag />
    </div>
  );
}
