'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Paragraph } from '@/components/paragraph';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/16/solid';
import { Separator } from '@/components/ui/separator';
import { useLayoutEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';

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
        <div className="grid w-full max-w-sm items-center">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <p className="text-xs">Description</p>
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label htmlFor="text-input" info={"Here's some info"}>
            Label
          </Label>
          <Input type="text" id="text-input" placeholder="Placeholder" />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label htmlFor="phone-input" info={"Here's some info"}>
            Label
          </Label>
          <Input
            type="text"
            id="phone-input"
            placeholder="123-456-7890"
            startSlot="1000000"
            endSlot={<PhoneIcon />}
          />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="cmd" info={"Here's some info"}>
            Label
          </Label>
          <Input
            type="text"
            id="cmd"
            placeholder="Search..."
            startSlot={<MagnifyingGlassIcon />}
            cmdk
          />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
        <div>
          <Label
            htmlFor="price"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </Label>
          <div className="mt-2">
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="price"
                name="price"
                type="text"
                placeholder="0.00"
              />
              <InputGroupAddon align="inline-end">
                <div className="relative">
                  <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="appearance-none bg-transparent py-1.5 pr-7 pl-3 text-sm text-muted-foreground focus:outline-none"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-2 h-full self-center text-muted-foreground"
                  />
                </div>
              </InputGroupAddon>
            </InputGroup>
            <div className="mt-2">
              <Label
                htmlFor="hour"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Time
              </Label>
              <InputGroup>
                <InputGroupAddon>
                  <div className="relative">
                    <select
                      id="hour"
                      name="hour"
                      aria-label="Hour"
                      defaultValue="09"
                      className="appearance-none bg-transparent py-1.5 ps-4 pe-8 text-sm tabular-nums focus:outline-none"
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
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-1 h-full self-center text-muted-foreground"
                    />
                  </div>
                </InputGroupAddon>
                <InputGroupAddon>
                  <InputGroupText>:</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon>
                  <div className="relative">
                    <select
                      id="minute"
                      name="minute"
                      aria-label="minute"
                      defaultValue="00"
                      className="appearance-none bg-transparent py-1.5 ps-1 pe-8 text-sm tabular-nums focus:outline-none"
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
                      className="pointer-events-none absolute inset-y-0 right-1 h-full self-center text-muted-foreground"
                    />
                  </div>
                </InputGroupAddon>
                <Separator orientation="vertical" className="h-10" />
                <InputGroupAddon align="inline-end">
                  <div className="relative">
                    <select
                      id="period"
                      name="period"
                      aria-label="period"
                      defaultValue="AM"
                      className="appearance-none bg-transparent py-1.5 ps-3 pe-8 text-sm focus:outline-none"
                    >
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-1 h-full self-center text-muted-foreground"
                    />
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
