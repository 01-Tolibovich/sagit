"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { InteractiveTabSteps } from "@/shared/types";
import { Check } from "lucide-react";
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
    p:
      formData.tabs?.find((tab) => tab.normalLenght && tab.normalLenght)
        ?.normalLenght || 5,
    min: 1,
    max: 10,
  });

  const handlePrevStep = () => {
    setTabs((prevState) => ({
      ...prevState,
      currentStep: Math.max(1, prevState.currentStep - 1),
    }));
  };

  const handleNextStep = () => {
    setTabs((prevState) => ({
      ...prevState,
      currentStep: Math.min(prevState.steps, prevState.currentStep + 1),
    }));
  };

  let { currentStep } = step;

  const tab = formData.tabs && formData?.tabs[--currentStep];

  // const filteredTab = tab?.map(step => )

  type Type = {
    img?: string;
    p: string | number;
    id?: number | undefined;
    min?: number;
    max?: number;
  };

  const [choosedVariants, setchoosedVariant] = useState<
    { title: string; type: Type }[]
  >([]);

  const handleChooseType = (title: string, type: Type) => {
    setchoosedVariant((prevState) => {
      const updated = [...prevState];

      if (tab?.title === title && choosedVariants.length > currentStep) {
        updated.pop();
      }

      return [...updated, { title, type }];
    });

    setTimeout(() => {
      handleNextStep()
    }, 500)
  };

  const choosed = choosedVariants.map((el) => el.type.p);

  return (
    <div className="grid">
      {tab && (
        <div>
          <h4 className="mb-6 text-xl font-bold">{tab.title}</h4>
          {tab.variants && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {tab.variants?.map((variant, i) =>
                (variant.types ?? []).map((type, j) => (
                  <figure
                    key={type.id ?? `${i}-${j}`}
                    role="button"
                    onClick={() => handleChooseType(tab.title, type)}
                    className="relative cursor-pointer"
                  >
                    <Image
                      className={`w-full h-full max-h-40 min-h-40 object-cover object-center rounded-2xl hover:border-2 hover:border-primary ${
                        choosed.includes(type.p) ? "border-2 border-primary" : ""
                      }`}
                      src={type.img}
                      width={600}
                      height={400}
                      alt=""
                    />
                    {choosed.includes(type.p) && (
                      <div className="absolute top-[44%] left-2/4 -translate-x-2/4 -translate-y-2/4 size-12 bg-primary rounded-full flex items-center justify-center">
                        <Check className="text-popover font-bold" />
                      </div>
                    )}
                    <figcaption className="text-center">{type.p}</figcaption>
                  </figure>
                ))
              )}
            </div>
          )}
          {tab.normalLenght && (
            <div
              role="button"
              onClick={() => handleChooseType(tab.title, length)}
            >
              <span>
                {length.p} {tab.m}
              </span>
              <div>
                <span>{length.min}</span>
                <Slider
                  value={[length.p]}
                  max={length.max}
                  step={1}
                  onValueChange={([newValue]) =>
                    setLength((prev) => ({ ...prev, p: newValue }))
                  }
                />
                <span>{length.max}</span>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="self-end justify-self-end flex gap-4">
        <Button
          className="rounded-full text-base"
          onClick={() => handlePrevStep()}
        >
          {formData.backBtn}
        </Button>
        <Button
          className="rounded-full text-base"
          onClick={() => handleNextStep()}
        >
          {formData.nextBtn}
        </Button>
      </div>
    </div>
  );
};
