"use client";

import { useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full rounded-full p-0">
      <div className="bg-[-webkit-gradient(linear,_0_0,_100%_100%_color-stop(.25, rgba(255, 255, 255, .2)),_color-stop(.25,_transparent),_color-stop(.5,_transparent),_color-stop(.5,_rgba(255,_255,_255,_.2)),_color-stop(.75,_rgba(255,_255,_255,_.2)),_color-stop(.75,_transparent),_to(transparent))] w-[30%] h-4 rounded-full"></div>
    </div>
  );
};
