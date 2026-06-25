"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Portfolio {
  title: string;
  category: string;
  image: string;
}

const portfolios: Portfolio[] = [
  { title: "Portfolio 1", category: "Web Development", image: "/images/portfolio-1.svg" },
  { title: "Portfolio 2", category: "Web Development", image: "/images/portfolio-2.svg" },
  { title: "Portfolio 3", category: "Web Development", image: "/images/portfolio-3.svg" },
];

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function PortfolioCard({ title, category, image }: Portfolio) {
  return (
    <motion.div variants={fadeUp} className="flex flex-1 flex-col">
      {/* Image */}
      <div className="relative isolate flex aspect-square items-center justify-center rounded-3xl bg-gray-100 p-4">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <Image
          src="/icons/best-portfolio.svg"
          alt="Best Portfolio"
          width={97}
          height={29}
          className="absolute left-[-9px] top-7 z-10"
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between gap-6 rounded-3xl bg-gray-100 p-4">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="text-body-md font-bold tracking-[-0.02em] text-gray-950 lg:text-body-lg lg:tracking-normal">
            {title}
          </h3>
          <div className="h-px w-full bg-gray-300" />
          <p className="text-body-xs font-medium text-gray-600 lg:text-body-md lg:tracking-[-0.03em]">
            {category}
          </p>
        </div>

        <motion.button
          type="button"
          aria-label={`Open ${title}`}
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowRight size={20} className="text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="projects" className="w-full bg-white">
      <motion.div
       className="flex w-full flex-col gap-6 px-4 py-10 lg:gap-12 lg:px-30 lg:py-20"
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
       <div className="flex flex-col gap-2 lg:max-w-171.5">
            <h2 className="text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
              Design to <span className="text-primary-300">Code Accuracy</span>
            </h2>
            <p className="text-body-sm font-medium text-gray-950 lg:text-body-md lg:tracking-[-0.03em]">
              We translated design mockups into pixel-perfect, responsive components, ensuring a
              smooth user experience across all devices.
            </p>
          </div>

          <motion.button
            type="button"
            className="flex w-full shrink-0 cursor-pointer items-center justify-between gap-2 rounded-full border border-gray-300 py-2 pl-4 pr-2 transition-colors hover:border-gray-950 lg:w-39"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-body-md font-semibold text-gray-950">See All</span>
            <span className="flex size-9 items-center justify-center rounded-full bg-gray-950">
              <ArrowRight size={20} className="text-white" />
            </span>
          </motion.button>
        </motion.div>

        {/* Cards */}
        <motion.div variants={parent} className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.title} {...portfolio} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}