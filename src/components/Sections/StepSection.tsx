import React from "react";
import { stepsData } from "./data/stepsData";
import { Step } from "./components/Step";

export const StepSection = () => {
  const data = stepsData;
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {data.map((step, i) => (
            <Step
              key={`step-${i}`}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
