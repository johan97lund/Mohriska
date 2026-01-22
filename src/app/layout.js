import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "MOHRISKA — Pop-up electronic nightclub in Falun",
  description:
    "MOHRISKA is a pop-up club centered around electronic music in Falun, Sweden. Few nights per year. Tickets via Ticketmaster.",
  openGraph: {
    title: "MOHRISKA — Pop-up electronic nightclub in Falun",
    description:
      "A pop-up club centered around electronic music in the heart of Falun. Tickets via Ticketmaster.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MOHRISKA — Pop-up electronic nightclub in Falun",
    description:
      "A pop-up club centered around electronic music in the heart of Falun. Tickets via Ticketmaster."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
