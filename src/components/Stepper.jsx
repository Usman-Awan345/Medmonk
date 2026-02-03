import React from "react";

const Stepper = ({ steps = [], currentStep = 1 }) => {
  return (
    <div className="flex flex-col w-full">
      
      <div className="flex items-center w-full justify-between ">
        {steps.map((step, index) => {
          const isCompleted = index + 1 <= currentStep;

          return (
            <div key={index} className="flex-1 flex items-center">
              
              <div
                className={`h-[10px] rounded-full flex-1  ${
                  isCompleted ? "bg-[#C93409]" : "bg-gray-300"
                }`}
              ></div>

              
              {index !== steps.length - 1 && <div className="w-1"></div>}
            </div>
          );
        })}
      </div>

      
      <div className="flex justify-between mt-2 text-sm font-medium">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex-1">
            {step}
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Stepper;
