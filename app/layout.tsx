
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Rinaldi | Software Engineer",
  description:
    "Personal portfolio of a software engineer specializing in backend development and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
