import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

function SelectIcon() {
  return (
    <ChevronDownIcon
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-1.5 size-4 h-full self-center justify-self-end text-gray-500"
    />
  );
}
export default function FormExperiment() {
  return (
    <div className="prose">
      Grouped selects + shared focus state
      <fieldset className="flex flex-col gap-1">
        <legend>Time</legend>
        <div className="outline-input has-[input:focus-within]:outline-ring bg-card flex flex-none items-center rounded-lg outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
          <div className="relative">
            <Label className="invisible absolute">Hour</Label>
            <select
              id="hour"
              name="hour"
              aria-label="Hour"
              defaultValue="09"
              className="focus:outline-blue h-10 w-full appearance-none rounded-l-md ps-3 pe-6 text-center tabular-nums focus:outline-2 focus:-outline-offset-2"
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
            <SelectIcon />
          </div>
          :
          <div className="relative">
            <Label className="invisible absolute">Minute</Label>
            <select
              id="minute"
              name="minute"
              aria-label="minute"
              defaultValue=":00"
              className="focus:outline-blue h-10 w-full appearance-none rounded-none ps-3 pe-6 text-center text-base tabular-nums focus:outline-2 focus:-outline-offset-2"
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
            <SelectIcon />
          </div>
          <div className="relative ms-auto">
            <Label className="invisible absolute">AM / PM</Label>
            <select
              id="period"
              name="period"
              aria-label="period"
              defaultValue="AM"
              className="focus:outline-blue border-input h-10 appearance-none rounded-r-md border-s ps-3 pe-6 text-center font-medium focus:outline-2 focus:-outline-offset-2"
            >
              <option>AM</option>
              <option>PM</option>
            </select>
            <SelectIcon />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
