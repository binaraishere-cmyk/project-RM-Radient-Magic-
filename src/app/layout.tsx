import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamBurgerMenu"

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project RAYNEX",
  description: "feel the glassy magic...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col" suppressHydrationWarning={true}>
       
        {children}
<Navbar />
      </body>
    </html>
  );
}
