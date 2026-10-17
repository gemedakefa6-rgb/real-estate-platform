import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estate | Discover Your Next Property",
  description:
    "Explore sample homes and apartments, filter listings by location and property type, and discover your next place with Estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
