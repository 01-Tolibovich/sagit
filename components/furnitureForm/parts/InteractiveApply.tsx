"use client";

import { InteractiveTabSteps } from "@/shared/types";
import { FC, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { TabForm } from "./TabForm";

export const InteractiveApply: FC<InteractiveTabSteps> = ({ formData }) => {
  const [tabs, setTabs] = useState({
    steps: formData.tabs?.length || 6,
    currentStep: 1,
  })
  return (
    <div className="h-full grid grid-rows-[auto_auto_1fr_auto] p-2 md:p-5">
      <ProgressBar formData={formData} process={tabs}/>
      <p className="mb-4">{formData.deck}</p>
      <TabForm formData={formData} step={tabs} setTabs={setTabs}/>
    </div>
  );
};
