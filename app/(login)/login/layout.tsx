import type { Metadata } from "next";





export const metadata: Metadata = {
  title: "auth-bothub-test",
  description: "auth page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-white">{children}</div>
}
