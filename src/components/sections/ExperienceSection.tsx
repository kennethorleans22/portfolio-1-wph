"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface Job {
  period: string;
  role: string;
  logo: string;
  logoAlt: string;
  description: string;
}

const DESCRIPTION =
  "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.";

const jobs: Job[] = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/icons/logo-airbnb.svg",
    logoAlt: "Airbnb",
    description: DESCRIPTION,
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/icons/logo-airtasker.svg",
    logoAlt: "Airtasker",
    description: DESCRIPTION,
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/icons/logo-slack.svg",
    logoAlt: "Slack",
    description: DESCRIPTION,
  },
];

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8"
    >
      <div className="flex flex-col gap-1 lg:w-44 lg:shrink-0">
        <span className="text-body-sm font-medium text-gray-400">{job.period}</span>
        <h3 className="text-body-md font-bold tracking-[-0.02em] text-gray-25 lg:text-body-xl lg:tracking-normal">
          {job.role}
        </h3>
      </div>

      <div className="flex h-17.75 w-30.5 items-center justify-center rounded-2xl border border-gray-800 p-1.25 transition-colors duration-300 hover:bg-secondary-100 lg:h-28 lg:w-48 lg:shrink-0 lg:p-2">
        <div className="flex h-15.25 w-28 items-center justify-center rounded-xl border border-gray-800 bg-gray-950 p-3.75 lg:h-24 lg:w-44 lg:rounded-2xl lg:p-6">
          <div className="relative h-7.5 w-20.25 lg:h-12 lg:w-32">
            <Image src={job.logo} alt={job.logoAlt} fill className="object-contain" />
          </div>
        </div>
      </div>

     <p className="text-body-sm font-normal text-gray-400 lg:w-128 lg:min-w-0 lg:text-body-md lg:tracking-[-0.03em]">
        {job.description}
      </p>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="w-full bg-gray-950">
      <motion.div
        className="flex w-full flex-col gap-6 px-5 py-10 lg:gap-12 lg:px-30 lg:py-20"
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between"
        >
          <h2 className="text-display-sm font-bold tracking-[-0.02em] text-gray-25 lg:max-w-91 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
            Experiences That <span className="text-secondary-100">Shaped Me</span>!
          </h2>
          <p className="text-body-sm font-semibold text-gray-25 lg:max-w-91 lg:text-body-lg lg:tracking-[-0.03em]">
            From startups to side projects, every step has been a chance to learn, build, and level up.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="h-px w-full bg-gray-800" />

        <motion.div variants={parent} className="flex flex-col gap-4 lg:gap-8">
          {jobs.map((job, i) => (
            <Fragment key={job.logoAlt}>
              <JobCard job={job} />
              {i < jobs.length - 1 && <div className="h-px w-full bg-gray-800" />}
            </Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
