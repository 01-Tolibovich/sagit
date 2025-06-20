"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { InteractiveTabSteps } from "@/shared/types";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface TabFormProps {
  formData: InteractiveTabSteps["formData"];
  step: {
    steps: number;
    currentStep: number;
  };
  setTabs: Dispatch<SetStateAction<{ steps: number; currentStep: number }>>;
}

export const TabForm: FC<TabFormProps> = ({ formData, step, setTabs }) => {
  const [length, setLength] = useState({
    value:
      formData.tabs?.find((tab) => tab.normalLenght && tab.normalLenght)
        ?.normalLenght || 5,
    min: 1,
    max: 10,
  });

  let { currentStep } = step;

  console.log(currentStep);
  

  const tab = formData.tabs && formData?.tabs[--currentStep];

  return (
    <div className="grid h-[90%]">
      {tab && (
        <div>
          <h4>{tab.title}</h4>
          {tab.variants && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {tab.variants?.map((variant, i) =>
                (variant.types ?? []).map((type, j) => (
                  <figure key={type.id ?? `${i}-${j}`}>
                    <Image
                      className="w-full h-full max-h-40 object-cover object-center"
                      src={type.img}
                      width={600}
                      height={400}
                      alt=""
                    />
                    <figcaption>{type.p}</figcaption>
                  </figure>
                ))
              )}
            </div>
          )}
          {tab.normalLenght && (
            <div>
              <span>
                {length.value} {tab.m}
              </span>
              <div>
                <span>{length.min}</span>
                <Slider
                  value={[length.value]}
                  max={length.max}
                  step={1}
                  onValueChange={([newValue]) =>
                    setLength((prev) => ({ ...prev, value: newValue }))
                  }
                />
                <span>{length.max}</span>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="self-end justify-self-end">
        <Button
          onClick={() =>
            setTabs((prev) => ({
              ...prev,
              currentStep: Math.max(1, prev.currentStep - 1),
            }))
          }
        >
          {formData.backBtn}
        </Button>
        <Button
          onClick={() =>
            setTabs((prev) => ({
              ...prev,
              currentStep: Math.min(prev.steps, prev.currentStep + 1),
            }))
          }
        >
          {formData.nextBtn}
        </Button>
      </div>
    </div>
  );
};
