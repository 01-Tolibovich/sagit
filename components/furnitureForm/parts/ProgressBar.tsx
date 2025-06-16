"use client";

import { ProgressBarProps } from "@/shared/types";
import { useState } from "react";

export const ProgressBar: React.FC<ProgressBarProps> = ({ formData }) => {
  const [progress] = useState(17);

  console.log(formData);

  return (
    <div className="w-full rounded-full p-0">
      <p>{formData.progress} {progress}%</p>
      <div
        style={{
          background:
            "repeating-linear-gradient(135deg, #ff8000 0 8.4px, rgb(255 128 0 / 75%) 0 16.8px) left / 0% 100% no-repeat, repeating-linear-gradient(135deg, rgb(241 177 70) 0 8.4px, rgb(209 140 14 / 29%) 0 16.8px) left / 100% 100%",
          width: `${progress}%`,
        }}
        className="bg-[-webkit-gradient(linear,_0_0,_100%_100%_color-stop(.25, rgba(255, 255, 255, .2)),_color-stop(.25,_transparent),_color-stop(.5,_transparent),_color-stop(.5,_rgba(255,_255,_255,_.2)),_color-stop(.75,_rgba(255,_255,_255,_.2)),_color-stop(.75,_transparent),_to(transparent))] h-4 rounded-full"
      ></div>
    </div>
  );
};
