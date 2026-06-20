"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { StatItem, TechIcon } from "@/types";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats: StatItem[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "", label: "Project Delivered" },
  { value: 50, suffix: "", label: "Clients Worldwide" },
];

const techIcons: TechIcon[] = [
  { src: "/icons/js.svg", alt: "JavaScript" },
  { src: "/icons/css3.svg", alt: "CSS3" },
  { src: "/icons/html5.svg", alt: "HTML5" },
  { src: "/icons/react.svg", alt: "React" },
];

function AvailableBadge() {
  return (
    <motion.div
      className="flex h-8 w-fit items-center gap-1.5 rounded-full border border-primary-300 bg-primary-400 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.span
        className="size-2 rounded-full bg-primary-200"
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <span className="text-body-xs font-semibold text-white">Available for Hire</span>
    </motion.div>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <motion.button
      type="button"
      className={`flex h-12 items-center gap-2 rounded-full bg-secondary-100 p-2 pl-4 ${className}`}
      whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="flex-1 text-left text-body-sm font-semibold text-gray-950 lg:text-body-md">
        Contact Me
      </span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-950 lg:size-10">
        <ArrowRight size={20} className="text-white" />
      </span>
    </motion.button>
  );
}

function HeroTitleFill({
  className,
  frontendSize,
  frontendLine,
  developerSize,
  developerLine,
  developerOffset = "-mt-5",
}: {
  className: string;
  frontendSize: number;
  frontendLine: number;
  developerSize: number;
  developerLine: number;
  developerOffset?: string;
}) {
  return (
    <div className={`pointer-events-none text-center font-anton text-secondary-100 ${className}`}>
      <div style={{ fontSize: frontendSize, lineHeight: `${frontendLine}px` }}>FRONTEND</div>
      <div className={developerOffset} style={{ fontSize: developerSize, lineHeight: `${developerLine}px` }}>
        DEVELOPER
      </div>
    </div>
  );
}

function DeveloperOutline({
  className,
  size,
  lineHeight,
}: {
  className: string;
  size: number;
  lineHeight: number;
}) {
  return (
    <div
      className={`pointer-events-none text-center font-anton text-transparent ${className}`}
      style={{
        fontSize: size,
        lineHeight: `${lineHeight}px`,
        WebkitTextStroke: "1px #F3B64C",
      }}
    >
      DEVELOPER
    </div>
  );
}

function ScrollDown() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 lg:bottom-11"
      animate={{ y: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <span className="text-body-xs font-semibold text-white">Scroll Down</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="6.5" y="1.5" width="7" height="12" rx="3.5" stroke="white" strokeWidth="1.25" />
        <line x1="10" y1="4.5" x2="10" y2="7" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-257 overflow-hidden lg:min-h-256"
      style={{ backgroundColor: "#A53F65" }}
    >
<div className="absolute inset-0 z-0">
  <Image
    src="/images/hero-bg.svg"
    alt=""
    fill
    priority
    className="object-cover object-center"
  />
</div>

      <div className="relative z-10 min-h-257 lg:hidden">
        <Image src="/icons/star.svg" alt="" width={91} height={91} className="absolute -left-7 top-182 z-10" />
        <Image src="/icons/star.svg" alt="" width={99} height={99} className="absolute right-0 top-218 z-10" />

        <motion.div
          className="absolute left-4 right-4 top-22 z-40 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex size-12 items-center justify-center rounded-full border border-primary-300">
              <Image src="/icons/mic.svg" alt="Mic" width={14} height={20} />
            </div>
            <p className="text-body-md font-bold text-white">Hi, I'm Edwin Anderson</p>
            <p className="text-body-sm font-medium text-white">
              a frontend developer passionate about creating seamless digital experiences that are fast, responsive,
              and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-5">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex flex-col gap-1 ${index % 2 === 1 ? "border-l border-primary-300 pl-5" : ""}`}>
                <span className="text-display-md font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-body-xs font-semibold text-white">{stat.label}</span>
              </div>
            ))}
          </div>

          <ContactButton className="w-full" />
        </motion.div>

        <div className="absolute left-1/2 top-139 z-40 -translate-x-1/2">
          <AvailableBadge />
        </div>

        <HeroTitleFill
          className="absolute left-1/2 top-163 z-10 w-89 -translate-x-1/2"
          frontendSize={102}
          frontendLine={125}
          developerSize={92}
          developerLine={113}
        />

        <div className="absolute left-1/2 top-144 z-20 ml-2.5 h-113 w-94 -translate-x-1/2">
          <Image src="/images/hero-person.png" alt="Edwin Anderson" fill priority className="object-contain object-bottom" />
        </div>

        <DeveloperOutline
          className="absolute left-1/2 top-190 z-30 w-89 -translate-x-1/2"
          size={92}
          lineHeight={113}
        />

        <div className="absolute left-4 top-156 z-30 -rotate-12 font-bonheur text-white" style={{ fontSize: 64, lineHeight: "81px" }}>
          Junior
        </div>
      </div>

      <div className="relative z-10 hidden min-h-256 lg:block">
        <Image src="/icons/star.svg" alt="" width={140} height={140} className="absolute left-82 top-108 z-10" />
        <Image src="/icons/star.svg" alt="" width={124} height={124} className="absolute bottom-23 right-86 z-10" />

      <motion.div
  className="absolute left-30 top-27 z-30 flex h-102 w-28.25 flex-col items-center justify-center gap-5.5 rounded-full border border-primary-300 px-5.5 py-8"
  style={{ borderWidth: "1.36px" }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {techIcons.map((icon) => (
          <div
  key={icon.alt}
  className="flex size-17.25 items-center justify-center rounded-full border border-primary-300"
  style={{ borderWidth: "1.36px" }}
>
  <Image
    src={icon.src}
    alt={icon.alt}
    width={icon.alt === "JavaScript" ? 51 : icon.alt === "CSS3" ? 35 : icon.alt === "HTML5" ? 41 : 44}
    height={icon.alt === "JavaScript" ? 51 : icon.alt === "CSS3" ? 41 : icon.alt === "HTML5" ? 41 : 39}
  />
</div>
          ))}
        </motion.div>

        <div className="absolute left-1/2 top-65 z-40 -translate-x-1/2">
          <AvailableBadge />
        </div>

    <HeroTitleFill
  className="absolute left-1/2 top-81 z-10 ml-8 w-169 -translate-x-1/2"
  frontendSize={152}
  frontendLine={164}
  developerSize={139}
  developerLine={150}
  developerOffset="mt-8"
/>

        <div className="absolute -bottom-20 left-1/2 z-20 ml-8 h-184 w-153 -translate-x-1/2">
          <Image src="/images/hero-person.png" alt="Edwin Anderson" fill priority className="object-contain object-bottom" />
        </div>

        <DeveloperOutline
          className="absolute left-1/2 top-130 z-30 ml-8 w-169 -translate-x-1/2"
          size={139}
          lineHeight={150}
        />

      <div 
  className="absolute left-1/2 top-81 z-30 ml-8 -translate-x-1/2 font-bonheur text-white" 
  style={{ 
    fontSize: '113.23px', 
    lineHeight: '142px',
    transform: 'translateX(-50%) rotate(-12.34deg)', // Menggabungkan alignment center dan rotasi dari Figma
    marginRight: '220px', // Mendorong tulisan ke arah kiri atas huruf "F" secara presisi
    marginTop: '-40px'     // Menyesuaikan tinggi posisi agar pas menempel di atas judul
  }}
>
  Junior
</div>

       <motion.div
  className="absolute left-30 top-153.5 z-40 flex w-112.75 flex-col gap-3.5"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  <div className="flex size-15.75 items-center justify-center rounded-full border border-primary-300">
    <Image src="/icons/mic.svg" alt="Mic" width={18} height={26} />
  </div>
  <p className="text-body-xl font-bold text-white">Hi, I'm Edwin Anderson</p>
  <p className="text-body-lg font-medium text-white">
    a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and
    user-friendly.
  </p>
</motion.div>
        <motion.div
          className="absolute right-19 top-70 z-40 flex w-56 flex-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <div className="flex flex-col gap-1 py-5">
                <span className="text-display-2xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-body-xs font-semibold text-white">{stat.label}</span>
              </div>
              {index < stats.length - 1 && <div className="h-px w-full bg-primary-300" />}
            </div>
          ))}

          <ContactButton className="mt-6 h-14 w-full" />
        </motion.div>
      </div>

      <ScrollDown />
    </section>
  );
}