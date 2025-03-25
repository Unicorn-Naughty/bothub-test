import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { RootContainer } from "./components/shared/reuses-components/root-container";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "600", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "bothub-test",
  description: "main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ibmPlexSans.className}  bg-bgColor  antialiased`}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
