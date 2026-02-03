import React, { useState } from 'react'
import Stepper from './Stepper';
import Step1 from './Steps/Step1';

function StepperForm() {

    const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Basic Info & Product Setup",
    "Eligibility & Financial Rules",
    "Years & Enrollment Settings",
    "Distribution",
    "Settings & Additional Details",
  ];
  return (
    <div className="p-6">
      
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Navigation Buttons */}
      {/* <div className="mt-6 flex gap-2">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length))
          }
          className="px-4 py-2 bg-[#C93409] text-white rounded"
        >
          Next
        </button>
      </div> */}
      <hr className="mt-10" />

      <Step1/>
    </div>
  )
}

export default StepperForm
