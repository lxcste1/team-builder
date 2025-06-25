import React from "react";

type StepProps = {
  number: string;
  title: string;
  text: string;
};

export const Step = ({ number, title, text }: StepProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl font-bold text-black">{number}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
    </div>
  );
};
