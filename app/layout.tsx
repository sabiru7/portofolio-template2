import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Personal portfolio of Your Name",
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