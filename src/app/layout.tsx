import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter clone with love",
  description: "For studying purpose only.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
