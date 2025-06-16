"use client";

import { Slider } from "@/components/ui/slider";
import { ProgressBarProps } from "@/shared/types";
import Image from "next/image";
import { useState } from "react";

export const TabForm: React.FC<ProgressBarProps> = ({ formData }) => {
  const [length, ] = useState({
    default: formData.tabs?.find(tab => tab.normalLenght && tab.normalLenght)?.normalLenght || 5,
    min: 1,
    max: 10
  });

  return (
    <div>
      {formData.tabs?.map((tab, index) => (
        <div key={index}>
          <h4>{tab.title}</h4>
          {tab.types && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {tab.types.map((type, i) => (
                <figure key={i}>
                  <Image
                    className="w-full h-full max-h-40 object-cover object-center"
                    src={type.img}
                    width={600}
                    height={400}
                    alt=""
                  />
                  <figcaption>{type.p}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {tab.normalLenght && (
            <div>
              <span>
                {length.default} {tab.m}
              </span>
              <div>
                <span>{length.min}</span>
                <Slider defaultValue={[length.default]} max={length.max} step={1} />
                <span>{length.max}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
