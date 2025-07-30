"use client";

import { InteractiveTabSteps } from "@/shared/types";
// import { useState } from "react";

interface ProgressBarProps {
  formData: InteractiveTabSteps["formData"];
  process: {
    steps: number;
    currentStep: number;
  };
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  formData,
  process,
}) => {
  const progress = (process.currentStep / process.steps) * 100;

  return (
    <div className="w-full p-0 border-b border-black/8 pb-6 mb-6">
      <p className="my-1.5">
        {formData.progress} {Math.floor(progress)}%
      </p>
      <div className="bg-black/10 rounded-full">
        <div
          style={{
            background:
              "repeating-linear-gradient(135deg, rgb(255 94 0) 0px, rgb(255 85 0) 8.4px, rgb(255 105 0 / 75%) 0px, rgba(255, 128, 0, 0.75) 16.8px) left center / 0% 100% no-repeat, repeating-linear-gradient(135deg, rgb(255 160 0) 0px, rgb(255 159 0) 8.4px, rgba(209, 140, 14, 0.29) 0px, rgb(255 201 102) 16.8px) left center / 100% 100%",
            width: `${progress}%`,
          }}
          className="bg-[-webkit-gradient(linear,_0_0,_100%_100%_color-stop(.25, rgba(255, 255, 255, .2)),_color-stop(.25,_transparent),_color-stop(.5,_transparent),_color-stop(.5,_rgba(255,_255,_255,_.2)),_color-stop(.75,_rgba(255,_255,_255,_.2)),_color-stop(.75,_transparent),_to(transparent))] h-4 rounded-full"
        ></div>
      </div>
    </div>
  );
};
