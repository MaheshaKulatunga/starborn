import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/navigation"

const DDINBold = localFont({
  src: "./fonts/D-DIN-Bold.otf",
  variable: "--font-DDINBold",
  weight: "100 900",
});

const DDIN = localFont({
  src: "./fonts/D-DIN.otf",
  variable: "--font-DDIN",
  weight: "100 900",
});

// D-DIN-Bold.otf

export const metadata: Metadata = {
  title: "Project Starborn",
  description: "STAY UP TO DATE WITH ORBITAL ROCKET LAUNCHES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen max-h-screen justify-between ${DDINBold.variable} ${DDIN.variable} antialiased`}>
        <header className="top-0 flex flex-wrap gap-6 items-center justify-center p-4 w-screen">
          < Navigation />
        </header>
          {children}
        <footer className="bottom-0 flex flex-wrap gap-6 items-center justify-center p-4 w-screen">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/about"
          >
            ABOUT
          </a>
      </footer>
      </body>
    </html>
  );
}
