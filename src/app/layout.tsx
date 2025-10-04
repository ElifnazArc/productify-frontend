import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Productify - Product Listing",
  description: "Browse our collection of exquisite engagement rings with dynamic pricing and customizable gold options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
