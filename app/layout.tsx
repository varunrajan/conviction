import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Product Conviction",
  description: "In 30-60 days, I'll help your Product team move from order-takers to confident, strategic partners in the business.",
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
