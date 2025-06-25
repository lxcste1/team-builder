import React from "react";
import { getInitial } from "../utils/helpers";

type TestimonialProps = {
  stars: number;
  opinion: string;
  name?: string;
  initialBgClass?: string;
  job?: string;
};

export const Testimonial = ({
  stars,
  opinion,
  name,
  initialBgClass,
  job,
}: TestimonialProps) => {
  const initial = getInitial(name);

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-md border border-[#333]">
      <div className="mb-6">
        <div className="flex text-yellow-400 mb-4">{"★".repeat(stars)}</div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          &quot;{opinion}&quot;
        </p>
      </div>
      {name && (
        <div className="flex items-center">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${initialBgClass} rounded-full flex items-center justify-center mr-4`}
          >
            <span className="text-white font-bold">{initial}</span>
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-400 text-sm">{job}</p>
          </div>
        </div>
      )}
    </div>
  );
};
