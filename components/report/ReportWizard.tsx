"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";

const ReportWizard = () => {
  const [currentStep, setCurentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleStepComplite = async (data: any) => {
    setReportData({ ...reportData, ...data });

    if (currentStep === 3) {
      return;
    }

    setCurentStep((prev) => prev + 1);
  };
  return (
    <div className="rounded-2xl bg-zinc-900 p-9">
      {currentStep === 1 && <ReportForm onComplete={handleStepComplite} />}
    </div>
  );
};

export default ReportWizard;
