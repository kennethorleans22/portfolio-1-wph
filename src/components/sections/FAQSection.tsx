"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    number: "01",
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    number: "02",
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I’m open to freelance or remote opportunities — especially those focused on building intuitive and responsive user interfaces.",
  },
  {
    number: "03",
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely! I specialize in translating design files into pixel-perfect, responsive frontend code with clean structure and component-based architecture.",
  },
  {
    number: "04",
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Definitely! I enjoy working in cross-functional teams and have experience integrating frontend with various backend systems and APIs.",
  },
  {
    number: "05",
    question: "Are you available for full-time roles?",
    answer:
      "I’m open to hearing about full-time opportunities that align with my values and growth as a frontend developer. Feel free to reach out!",
  },
];

function FAQRow({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const Icon = isOpen ? Plus : Minus;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className="flex w-full cursor-pointer items-start justify-between gap-3 text-left lg:items-center"
    >
      <span className="w-6 shrink-0 text-center text-body-lg font-semibold tracking-[-0.03em] text-gray-950 lg:w-7.5 lg:text-display-xs">
        {item.number}
      </span>

      <span className="flex flex-1 flex-col gap-2 lg:w-190.25 lg:flex-none lg:gap-3">
        <span className="text-body-lg font-semibold tracking-[-0.03em] text-gray-950 lg:text-display-xs">
          {item.question}
        </span>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.span
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden text-body-sm font-medium text-gray-700 lg:text-body-md lg:tracking-[-0.03em]"
            >
              {item.answer}
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-full lg:size-12 ${
          isOpen ? "bg-primary-300 text-white" : "border border-gray-300 bg-white text-gray-950"
        }`}
      >
        <Icon className="size-4 lg:size-6" strokeWidth={2} />
      </span>
    </button>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-gray-100">
      <div className="flex w-full flex-col items-center gap-6 px-4 py-10 lg:gap-12 lg:px-30 lg:py-20">
        <div className="flex w-full max-w-90.25 flex-col gap-2 lg:max-w-211.75">
          <h2 className="text-center text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
            Let’s Clear Things Up
          </h2>
          <p className="text-center text-body-sm font-normal text-gray-950 lg:text-body-md lg:font-medium lg:tracking-[-0.03em]">
            I’ve answered a few questions that usually come up when working with a frontend developer like me.
          </p>
        </div>

        <div className="flex w-full max-w-90.25 flex-col gap-5 lg:max-w-300">
          {faqs.map((item, index) => (
            <div key={item.number} className="flex flex-col gap-5">
              <FAQRow
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              />
              {index < faqs.length - 1 && <div className="h-px w-full bg-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}