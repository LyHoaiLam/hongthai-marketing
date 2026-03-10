"use client";

import { useState } from "react";
import { faqs } from "./common/data";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(4);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full flex max-w-6xl 2xl:max-w-7xl  flex-col gap-10 px-5 md:px-6 xl:px-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[50px] font-semibold tracking-tight text-neutral-900">
            FAQ
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {faqs.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm md:text-base"
                >
                  <span className="text-neutral-900">{item.question}</span>
                  <span className="text-xl font-semibold text-neutral-800">
                    {isActive ? "−" : "+"}
                  </span>
                </button>
                {isActive && (
                  <div className="pb-5 text-sm leading-relaxed text-neutral-700">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
