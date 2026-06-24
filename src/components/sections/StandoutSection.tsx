"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const meItems = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const otherItems = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path d="M3 21a9 9 0 0 1 18 0 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function StandoutColumn({
  variant,
  title,
  items,
}: {
  variant: "me" | "other";
  title: string;
  items: string[];
}) {
  const isMe = variant === "me";

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-1 flex-col items-center gap-6 rounded-2xl px-4 py-8 lg:gap-8 lg:p-8 ${
        isMe ? "bg-secondary-100" : "border border-gray-300 bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-3 lg:gap-6">
        <h3
          className={`text-center text-body-lg text-gray-950 ${
            isMe ? "font-bold" : "font-semibold tracking-[-0.03em]"
          }`}
        >
          {title}
        </h3>

        <div
          className={`relative size-20 overflow-hidden rounded-full lg:size-25 ${
            isMe ? "bg-primary-300" : "bg-gray-300"
          }`}
        >
                {isMe ? (
            <Image
              src="/images/small-picture-human.svg"
              alt="Me"
              width={86}
              height={104}
              className="absolute left-[15%] top-[7%] h-auto w-[82%] lg:left-[13%] lg:top-[8%] lg:w-[86%]"
            />
          ) : (
            <ProfileIcon className="absolute left-1/2 top-1/2 size-11 -translate-x-1/2 -translate-y-1/2 text-white lg:size-15" />
          )}
        </div>
      </div>

      {/* Items */}
      <div className="flex w-full flex-col gap-3 lg:gap-6">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-center gap-3">
            {isMe ? (
              <Check size={24} strokeWidth={2} className="shrink-0 text-gray-950" />
            ) : (
              <X size={24} strokeWidth={2} className="shrink-0 text-[#E5352D]" />
            )}
            <span className="text-body-md font-semibold text-gray-950 lg:text-body-lg lg:tracking-[-0.03em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function StandoutSection() {
  return (
    <section className="w-full bg-white">
      <motion.div
        className="mx-auto flex w-full max-w-300 flex-col gap-6 px-4 py-10 lg:gap-12 lg:px-30 lg:py-20"
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <h2 className="text-center text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
            More Than Just Code
          </h2>
          <p className="text-center text-body-sm font-medium text-gray-950 lg:text-body-md lg:tracking-[-0.03em]">
            We care about design, performance, and user experience all in one.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={parent}
          className="flex flex-col gap-6 rounded-3xl border border-white/25 lg:flex-row lg:items-stretch"
        >
          <StandoutColumn variant="me" title="With Me" items={meItems} />
          <StandoutColumn variant="other" title="Another Talent" items={otherItems} />
        </motion.div>
      </motion.div>
    </section>
  );
}