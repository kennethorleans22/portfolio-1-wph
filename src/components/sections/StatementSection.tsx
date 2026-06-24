"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const emojiClass = "inline-block";
const emojiStyle = {
  width: "1em",
  height: "1em",
  verticalAlign: "-0.15em",
};

export default function StatementSection() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="flex w-full items-center justify-center px-4 py-10 lg:px-30 lg:py-20">
        <motion.p
          className="w-full max-w-90.25 text-center text-display-sm font-medium tracking-[-0.03em] text-gray-950 lg:max-w-223 lg:text-display-lg lg:tracking-[-0.02em]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          As frontend developers , we bring designs to life with{" "}
          <span className="text-primary-300">clean</span>,{" "}
          <span className="text-primary-300">responsive code</span> that blends
          creativity{" "}
          <Image
            src="/icons/emoji-paint.png"
            alt="paint palette"
            width={40}
            height={40}
            className={emojiClass}
            style={emojiStyle}
          />{" "}
          <span className="whitespace-nowrap">
            with usability{" "}
            <Image
              src="/icons/emoji-star.png"
              alt="glowing star"
              width={40}
              height={40}
              className={emojiClass}
              style={emojiStyle}
            />
            .
          </span>
        </motion.p>
      </div>
    </section>
  );
}