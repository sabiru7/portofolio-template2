
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabil Eka Muhammad | Backend Developer",
  description: "Personal portfolio of Sabil Eka Muhammad, a backend developer from Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

