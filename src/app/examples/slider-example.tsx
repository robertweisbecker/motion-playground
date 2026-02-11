'use client';

import { Slider, SliderField, SliderValue } from '@/components/ui/slider';
import { useState } from 'react';
import { Label } from '@/components/ui/label';

export function SliderExample() {
  const [value1, setValue1] = useState([50]);
  const [value2, setValue2] = useState([25, 75]);
  const [value3, setValue3] = useState([33]);
  const [value4, setValue4] = useState([40]);
  const [value5, setValue5] = useState([20, 80]);

  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Default Variant - Basic Slider */}
      <div className="space-y-2">
        <Slider
          variant="default"
          value={value1}
          onValueChange={(value) =>
            setValue1(Array.isArray(value) ? value : [value])
          }
          max={100}
          step={1}
          className="w-full"
        >
          <Label>Default Variant (center alignment)</Label>
          <SliderValue className="text-sm text-muted-foreground" />
        </Slider>
      </div>

      {/* Default Variant - Range Slider */}
      <div className="space-y-2">
        <Slider
          variant="pill"
          value={value2}
          onValueChange={(value) =>
            setValue2(Array.isArray(value) ? value : [value])
          }
          max={100}
          step={1}
          className="w-full"
        >
          <Label>Default Variant - Range</Label>
          <SliderValue className="text-sm text-muted-foreground" />
        </Slider>
      </div>

      {/* Contained Variant - Basic Slider */}
      <div className="space-y-2">
        <Slider
          variant="contained"
          value={value4}
          onValueChange={(value) =>
            setValue4(Array.isArray(value) ? value : [value])
          }
          max={100}
          step={1}
          className="w-full"
        >
          <Label>Contained Variant (edge alignment)</Label>
          <SliderValue className="text-sm text-muted-foreground" />
        </Slider>
      </div>

      {/* Contained Variant - Range Slider */}
      <div className="space-y-2">
        <Slider
          variant="contained"
          value={value5}
          onValueChange={(value) =>
            setValue5(Array.isArray(value) ? value : [value])
          }
          max={100}
          step={1}
          className="w-full"
        >
          <Label>Contained Variant - Range</Label>
          <SliderValue className="text-sm text-muted-foreground" />
        </Slider>
      </div>

      {/* Uncontrolled Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Uncontrolled (defaultValue)</Label>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
      </div>

      {/* Slider with Custom Step */}
      <div className="space-y-2">
        <Slider
          value={value3}
          onValueChange={(value) =>
            setValue3(Array.isArray(value) ? value : [value])
          }
          max={100}
          step={10}
          className="w-full"
        >
          <Label>Step: 10</Label>
          <SliderValue className="text-sm text-muted-foreground" />
        </Slider>
      </div>

      {/* Disabled Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Disabled</Label>
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          className="w-full"
        />
      </div>

      {/* SliderField Example */}
      <div className="space-y-2">
        <SliderField
          label="SliderField Example"
          variant="default"
          defaultValue={[60]}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      {/* SliderField Contained Variant */}
      <div className="space-y-2">
        <SliderField
          label="SliderField (Contained)"
          variant="contained"
          defaultValue={[70]}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
}
