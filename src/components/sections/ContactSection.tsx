import Image from "next/image";

interface FieldProps {
  label: string;
  placeholder: string;
  type?: "text" | "email";
}

const portfolioImages = [
  "/images/portfolio-1.svg",
  "/images/portfolio-2.svg",
  "/images/portfolio-3.svg",
];

function TextField({ label, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="flex w-full flex-col gap-0.5 lg:gap-1.5">
      <span className="text-body-sm font-bold text-gray-950">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full cursor-text rounded-xl border border-gray-300 px-4 text-body-sm font-medium text-gray-950 outline-none transition-colors placeholder:text-gray-600 focus:border-primary-300 lg:text-body-md lg:tracking-[-0.03em]"
      />
    </label>
  );
}

function MessageField() {
  return (
    <label className="flex w-full flex-col gap-0.5 lg:gap-1.5">
      <span className="text-body-sm font-bold text-gray-950">Message</span>
      <textarea
        placeholder="Enter your message"
        className="h-33.5 w-full resize-none cursor-text rounded-xl border border-gray-300 px-4 py-2 text-body-sm font-medium text-gray-950 outline-none transition-colors placeholder:text-gray-600 focus:border-primary-300 lg:text-body-md lg:tracking-[-0.03em]"
      />
    </label>
  );
}

function ContactForm() {
  return (
    <form
      className="flex w-full flex-col gap-5 rounded-2xl bg-white p-4 lg:w-153 lg:rounded-3xl lg:p-8"
      style={{ boxShadow: "0 0 28px rgba(197, 197, 197, 0.25)" }}
    >
      <TextField label="Name" placeholder="Enter your name" />
      <TextField label="Email" placeholder="Enter your email" type="email" />
      <MessageField />

      <button
        type="button"
        className="flex h-11 w-full cursor-pointer items-center justify-center rounded-full bg-primary-300 px-2 text-body-sm font-bold text-white transition-colors hover:bg-primary-400 lg:h-12"
      >
        Let’s Talk
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full overflow-visible bg-white px-4 py-10 lg:px-30 lg:py-30">
      <Image
        src="/images/contact-person.svg"
        alt=""
        width={192}
        height={170}
        className="pointer-events-none absolute left-1/2 top-0 z-10 hidden h-42.5 w-48 -translate-x-1/2 lg:top-auto lg:-mt-38.75 lg:ml-76.75 lg:block"
      />

      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
        <div className="flex w-full flex-col justify-center gap-6 lg:w-135 lg:gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-display-sm font-bold tracking-[-0.02em] text-gray-950 lg:text-display-xl lg:leading-14 lg:tracking-[-0.03em]">
              Let’s Work Together
            </h2>
            <p className="text-body-sm font-medium text-gray-950 lg:text-body-md lg:tracking-[-0.03em]">
              Have a project in mind or just want to say hi? Drop me a message — I’d love to hear from you.
            </p>
          </div>

          <div className="flex w-full gap-4 lg:w-116.5 lg:gap-5">
            {portfolioImages.map((src, index) => (
              <div key={src} className="relative size-27.5 shrink-0 lg:size-35.5">
                <Image
                  src={src}
                  alt={`Portfolio preview ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-156.5 w-full lg:h-auto lg:w-153">
          <Image
            src="/images/contact-person.svg"
            alt=""
            width={192}
            height={170}
            className="pointer-events-none absolute left-1/2 top-0 z-10 h-42.5 w-48 -translate-x-1/2 lg:hidden"
          />

          <div className="absolute left-0 top-40 w-full lg:static">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}