import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const newLocal = <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1440px] mx-auto`}>
    <Navbar />
    {children}
    <Footer />
  </body>;
  return (
    <html lang="en">
      {newLocal}
    </html>
  );
}
