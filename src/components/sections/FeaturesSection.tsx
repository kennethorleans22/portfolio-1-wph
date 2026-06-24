"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface Feature {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/icons/emoji-gear.png",
    alt: "gear",
    title: "COMPONENT-BASED DEVELOPMENT",
    description: "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: "/icons/emoji-paint.png",
    alt: "paint palette",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    description: "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: "/icons/emoji-phone.png",
    alt: "mobile phone",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    description: "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      <motion.div
        className="flex w-full flex-col justify-center gap-4 px-4 py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-30 lg:py-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <Fragment key={feature.title}>
            <motion.div variants={card} className="flex flex-1 flex-col items-start gap-3 lg:gap-4">
              <div className="flex size-12 items-center justify-center rounded-full border border-gray-300 lg:size-15.75">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={36}
                  height={36}
                  className="h-7 w-auto lg:h-9"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <h3 className="text-body-lg font-bold text-gray-950 lg:text-display-xs">
                  {feature.title}
                </h3>

                <p className="text-body-sm font-normal text-gray-950 lg:text-body-md lg:tracking-[-0.03em]">
                  {feature.description}
                </p>
              </div>
            </motion.div>

            {index < features.length - 1 && (
              <div className="hidden w-px shrink-0 self-center bg-gray-300 lg:block lg:h-44" />
            )}

            <div className="w-full border-t border-gray-300 lg:hidden" />
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}