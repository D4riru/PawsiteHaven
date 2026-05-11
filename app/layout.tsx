import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to PawSite Haven",
  description: "Connecting hearts with adoptive pets, one paw at a time. Find your perfect companion today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden bg-white antialiased">
      <body className="min-h-full flex w-full min-w-0 flex-col overflow-x-hidden bg-white">{children}</body>
    </html>
  );
}
