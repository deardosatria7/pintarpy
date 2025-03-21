import type React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "PintarPy - Belajar Python Indonesia",
  description:
    "Platform belajar Python interaktif terbaik di Indonesia. Tulis dan jalankan kode Python langsung di browser Anda.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
