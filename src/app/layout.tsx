import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Montserrat font from Google Fonts
const montserrat = Montserrat({
  weight: ["400", "500", "600",  "900"],
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "RecoveryRx",
  description: "RecoveryRx is a digital health platform that connects patients with healthcare providers to improve medication adherence and health outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
