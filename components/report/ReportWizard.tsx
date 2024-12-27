// @ts-ignore
"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormComplited";

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
      {currentStep === 2 && (
        <ReportSubmitted data={reportData} onComplete={handleStepComplite} />
      )}
    </div>
  );
};

export default ReportWizard;
