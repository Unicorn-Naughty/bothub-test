import type { Metadata } from "next";
import { RootContainer } from "../components/shared/reuses-components/root-container";

export const metadata: Metadata = {
  title: "bothub-test",
  description: "main page",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootContainer>{children}</RootContainer>;
}
