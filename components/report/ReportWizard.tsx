import { useState } from "react";

const reportWizard = () => {
  const [currentStep, setCurentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleStepComplite = async (data: any) => {
    setReportData({ ...reportData, ...data });

    if (currentStep === 3) {
      return;
    }

    setCurentStep((prev) => prev + 1);
  };
  return <div className="rounded-2xl bg-zinc-900 p-9">{currentStep === 1}</div>;
};

export default reportWizard;
