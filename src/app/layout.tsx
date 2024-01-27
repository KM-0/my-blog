import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Tab } from "@/components/parts/Tab";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "KM BLOG",
  description: "KM BLOG DEVELOP",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="font-sans text-gray-800 dark:bg-gray-800 dark:text-white">
          <div className="flex min-h-screen w-full flex-col">
            <Head>
              <title>KM BLOG</title>
            </Head>
            <Tab />
            <main className="m-auto flex w-3/4 flex-1 flex-col items-center">
              {children}
            </main>
            <footer className="mt-6 flex h-10 w-full items-center justify-center text-sm text-gray-500">
              <small>&copy; {`KM Blog ${new Date().getFullYear()}`}</small>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
