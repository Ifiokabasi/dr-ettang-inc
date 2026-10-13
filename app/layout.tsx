import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"], variable: "--font-poppins" });

const serif = Fraunces({ subsets: ["latin"], style: ["italic"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Dr Ettang Medical Practice",
  description: "Doctor-led care in person, at home and by telehealth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${serif.variable} scroll-smooth`}>
      <body className="bg-paper font-sans text-dark antialiased selection:bg-brand selection:text-black">
        {children}
        <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[100] opacity-5" />
      </body>
    </html>
  );
}
