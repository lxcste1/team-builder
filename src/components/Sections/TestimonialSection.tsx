import React from "react";
import { testimonialsData } from "./data/testimonialsData";
import { Testimonial } from "./components/Testimonial";

export const TestimonialSection = () => {
  const data = testimonialsData;

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((testimonial, i) => (
            <Testimonial
              key={`testimonial-${i}`}
              stars={testimonial.stars}
              opinion={testimonial.opinion}
              name={testimonial.name}
              initialBgClass={testimonial.initialBgClass}
              job={testimonial.job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
