import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: "/icons/social/facebook.svg",
    iconClassName: "h-5 w-2.75",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: "/icons/social/instagram.svg",
    iconClassName: "size-5",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "/icons/social/linkedin.svg",
    iconClassName: "size-5",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com",
    icon: "/icons/social/tiktok.svg",
    iconClassName: "size-5",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col-reverse items-start justify-center gap-6 bg-gray-950 px-4 py-8 lg:h-22 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-32 lg:py-6">
      <p className="text-center text-body-xs font-normal text-gray-25 lg:text-body-md lg:tracking-[-0.03em]">
        © 2025 Edwin Anderson. All rights reserved.
      </p>

      <div className="flex items-center gap-3 lg:gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 transition-colors hover:border-primary-300"
          >
          <Image
  src={social.icon}
  alt=""
  width={20}
  height={20}
  className={social.iconClassName}
/>
          </a>
        ))}
      </div>
    </footer>
  );
}