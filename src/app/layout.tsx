import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J. Moyes",
  description: "Software engineer from Glasgow",
};

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className={styles.header}>
          <a href="/">
            <h1>J Moyes</h1>
          </a>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
