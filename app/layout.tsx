import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Logo Guesser",
  description: "Guess the team logo",
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
