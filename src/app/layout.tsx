import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";

import '@/app/globals.css';

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Mantvydas Deltuva",
  description: "Personal website of Mantvydas Deltuva",
};

// export const viewport: Viewport = {
//   initialScale: 1.0,
//   width: 'device-width'
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout
  return (
    <html lang="en" className="light">
      <body className={`bg-background ${poppins.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
