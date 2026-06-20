import type { Metadata } from "next";
import { Montserrat, Anton, Bonheur_Royale } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kenneth Orleans | Portfolio 1",
  description: "Personal portfolio 1 of Kenneth Orleans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${anton.variable} ${bonheurRoyale.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}