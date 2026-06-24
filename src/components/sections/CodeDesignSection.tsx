"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Technology {
  title: string;
  description: string;
  icon: string;
  alt: string;
  iconWidth: number;
  iconHeight: number;
}

const technologies: Technology[] = [
  {
    title: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icons/html5.svg",
    alt: "HTML5",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    title: "CSS",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icons/css3.svg",
    alt: "CSS3",
    iconWidth: 30,
    iconHeight: 35,
  },
  {
    title: "Javascript",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icons/js.svg",
    alt: "JavaScript",
    iconWidth: 44,
    iconHeight: 44,
  },
  {
    title: "React",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icons/react.svg",
    alt: "React",
    iconWidth: 38,
    iconHeight: 34,
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 32 : -32,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -32 : 32,
    opacity: 0,
  }),
};

function TechCard({ tech, active }: { tech: Technology; active: boolean }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      className={`flex h-70 min-w-0 flex-1 flex-col items-center gap-3 rounded-full border px-4 py-10 lg:h-70.25 ${
        active ? "border-secondary-100 bg-secondary-100" : "border-gray-300 bg-gray-25"
      }`}
      transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className={`flex size-15 items-center justify-center rounded-full ${active ? "bg-gray-25" : "bg-gray-100"}`}>
        <Image
          src={tech.icon}
          alt={tech.alt}
          width={tech.iconWidth}
          height={tech.iconHeight}
          className="object-contain"
        />
      </div>

      <div className="flex w-full flex-col items-center">
        <h3 className="h-7.5 w-full text-center text-body-md font-semibold text-gray-950">{tech.title}</h3>

        <p className="flex h-21 w-full items-center justify-center text-center text-body-sm font-normal text-gray-800 lg:h-22.5 lg:text-body-md">
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
}

function ArrowButton({
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
      className={`flex size-11 items-center justify-center rounded-full border border-gray-300 transition-colors ${
        disabled ? "cursor-not-allowed text-gray-400" : "text-gray-950 hover:border-gray-950"
      }`}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      aria-label={direction === "left" ? "Previous technology" : "Next technology"}
    >
      <Icon size={24} strokeWidth={1.5} />
    </motion.button>
  );
}

export default function CodeDesignSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const mobileStartIndex = activeIndex < 2 ? 0 : 2;
  const mobileItems = technologies.slice(mobileStartIndex, mobileStartIndex + 2);

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => Math.min(technologies.length - 1, current + 1));
  };

  return (
    <section
      id="skill"
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(158, 56, 94, 0) 0%, rgba(158, 56, 94, 0.1) 99.95%)",
      }}
    >
      <motion.div
        className="flex w-full flex-col items-center gap-6 px-5 py-10 lg:gap-12 lg:px-30 lg:py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex w-full max-w-88 flex-col gap-2 lg:max-w-211.75">
          <h2 className="text-center text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:hidden">
            Code, Design, and Everything in Between
          </h2>

          <h2
            className="hidden text-center text-display-xl font-bold text-gray-950 lg:block"
            style={{ lineHeight: "56px", letterSpacing: "-0.03em" }}
          >
            Code, Design, and Everything in Between
          </h2>

          <p className="text-center text-body-sm font-medium text-gray-950 lg:hidden">
            These are the technologies that power my workflow and bring ideas to life.
          </p>

          <p className="hidden text-center text-body-md font-medium text-gray-950 lg:block tracking-[-0.03em]">
            These are the technologies that power my workflow and bring ideas to life.
          </p>
        </div>

        <div className="flex w-full max-w-88.25 flex-col items-center gap-8 lg:max-w-230">
          <div className="hidden h-70.25 w-full gap-5 lg:flex">
            {technologies.map((tech, index) => (
              <TechCard key={tech.title} tech={tech} active={activeIndex === index} />
            ))}
          </div>

          <div className="w-full overflow-hidden lg:hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={mobileStartIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex h-70 w-full gap-4"
              >
                {mobileItems.map((tech, index) => {
                  const realIndex = mobileStartIndex + index;

                  return <TechCard key={tech.title} tech={tech} active={activeIndex === realIndex} />;
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3">
            <ArrowButton direction="left" disabled={activeIndex === 0} onClick={goPrev} />
            <ArrowButton direction="right" disabled={activeIndex === technologies.length - 1} onClick={goNext} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}