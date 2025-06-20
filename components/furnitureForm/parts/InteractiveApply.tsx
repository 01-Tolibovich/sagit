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
    <div className="h-full">
      <ProgressBar formData={formData} process={tabs}/>
      {formData.deck}
      <TabForm formData={formData} step={tabs} setTabs={setTabs}/>
    </div>
  );
};
