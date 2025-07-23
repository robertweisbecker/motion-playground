'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Paragraph } from '@/components/paragraph';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/16/solid';
import { Separator } from '@/components/ui/separator';
import { useLayoutEffect, useRef, useState } from 'react';

export function InputExample() {
  // const ref = useRef(null);

  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   setWidth(ref.current.offsetWidth);
  //   setHeight(ref.current.offsetHeight);
  // }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <p className="text-xs">Description</p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="text-input" info={"Here's some info"}>
            Label
          </Label>
          <Input type="text" id="text-input" placeholder="Placeholder" />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="text-input" info={"Here's some info"}>
            Label
          </Label>
          <Input
            type="text"
            id="text-input"
            placeholder="123-456-7890"
            startSlot="+1"
            endSlot={<PhoneIcon />}
          />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
        <div>
          <Label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Price
          </Label>
          <div className="mt-2">
            <div className="outline-input has-[input:focus-within]:outline-blue bg-card flex items-center rounded-md pl-3 outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
              <div className="text-muted-foreground shrink-0 text-base select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="0.00"
                className="text-foreground block h-auto w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />

              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  className="focus:outline-blue col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
            <div>
              Time
              <div className="outline-input has-[input:focus-within]:outline-blue bg-card flex flex-none items-center rounded-md outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                <div className="relative">
                  <select
                    id="hour"
                    name="hour"
                    aria-label="Hour"
                    defaultValue="09"
                    className="focus:outline-blue h-10 appearance-none rounded-l-md ps-4 pe-4 text-base tabular-nums focus:outline-2 focus:-outline-offset-2"
                  >
                    <option disabled>HH</option>
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
                  <ChevronDownIcon
                    // ref={ref}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-1 h-full self-center justify-self-end text-gray-400"
                  />
                </div>
                :
                <div className="relative">
                  <select
                    id="minute"
                    name="minute"
                    aria-label="minute"
                    defaultValue=":00"
                    className="focus:outline-blue h-10 appearance-none rounded-none ps-1 pe-4 text-base tabular-nums focus:outline-2 focus:-outline-offset-2"
                  >
                    <option disabled>MM</option>
                    <option>00</option>
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
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-1 h-full self-center justify-self-end text-gray-500"
                  />
                </div>
                <Separator orientation="vertical" className="ms-auto h-10!" />
                <div className="relative">
                  <select
                    id="period"
                    name="period"
                    aria-label="period"
                    defaultValue="AM"
                    className="focus:outline-blue h-10 appearance-none rounded-r-md ps-3 pe-5 text-base focus:outline-2 focus:-outline-offset-2"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-1 h-full self-center justify-self-end text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
