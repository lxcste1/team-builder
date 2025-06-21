import React from "react";

interface StepperProps {
  currentStep: number;
}

export const Stepper = ({ currentStep }: StepperProps) => (
  <div className="flex justify-between mb-8">
    {[1, 2, 3].map((num) => (
      <div
        key={num}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep >= num
            ? "bg-[#f2f2f2] text-[#010101]"
            : "bg-[#333] text-[#f2f2f2]"
        }`}
      >
        {num}
      </div>
    ))}
  </div>
);
