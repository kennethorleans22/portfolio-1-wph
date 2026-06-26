"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
  quote:
  "“Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: "/images/sarah-tan.svg",
  },
];

const slide: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className={`flex size-11 items-center justify-center rounded-full border border-gray-300 transition-colors ${
        disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-gray-950 hover:border-gray-950"
      }`}
      whileTap={disabled ? undefined : { scale: 0.94 }}
    >
      <Icon size={24} strokeWidth={1.5} />
    </motion.button>
  );
}

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = testimonials[index];

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => Math.max(0, i - 1));
  };
  const goNext = () => {
    setDirection(1);
    setIndex((i) => Math.min(testimonials.length - 1, i + 1));
  };

  return (
    <section className="w-full bg-white">
      <div className="flex w-full flex-col items-center gap-6 px-5 py-10 lg:gap-12 lg:px-30 lg:py-20">
        {/* Header */}
        <motion.div
         className="flex w-full max-w-88.25 flex-col gap-2 lg:max-w-211.75"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-center text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
            What They Say About Working With Me
          </h2>
          <p className="text-center text-body-sm font-medium text-gray-950 lg:text-body-md lg:tracking-[-0.03em]">
            Real words from clients, teammates, and mentors I’ve collaborated with on various projects.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="flex w-full flex-col items-center gap-6">
          <div className="relative w-full">
            {/* Lapis bayangan (paling belakang dulu) */}
            <div className="absolute bottom-0 left-1/2 z-0 h-14 w-[83%] -translate-x-1/2 translate-y-8 rounded-2xl bg-primary-300/20" />
            <div className="absolute bottom-0 left-1/2 z-0 h-14 w-[92%] -translate-x-1/2 translate-y-4 rounded-2xl bg-[#D4A0B3]" />

            {/* Kartu utama */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
             className="relative z-10 flex min-h-119.5 w-full flex-col items-center gap-8 rounded-2xl bg-primary-300 p-6 lg:min-h-94.5 lg:rounded-3xl lg:px-10 lg:py-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-6 fill-secondary-100 text-secondary-100" />
                    ))}
                  </div>
                  <p className="w-full text-center text-body-lg font-semibold tracking-[-0.03em] text-gray-25 lg:text-display-xs">
                    {active.quote}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="relative size-16 overflow-hidden rounded-full">
                    <Image src={active.avatar} alt={active.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-body-lg font-semibold tracking-[-0.03em] text-gray-25">{active.name}</p>
                    <p className="text-body-md font-medium tracking-[-0.03em] text-gray-25">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Panah */}
          <div className="flex items-center gap-3">
            <NavButton direction="left" disabled={index === 0} onClick={goPrev} />
            <NavButton direction="right" disabled={index === testimonials.length - 1} onClick={goNext} />
          </div>
        </div>
      </div>
    </section>
  );
}