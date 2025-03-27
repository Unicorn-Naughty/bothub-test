
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";


const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "bothub-test",
  description: "main page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/messages/gptIcon.svg" />
      </head>
      <body className={`${ibmPlexSans.className}  bg-bgColor  antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
