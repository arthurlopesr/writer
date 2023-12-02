import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { cn } from "./utils/cn";
import { Provider } from "./components/provider/Provider";
import "react-loading-skeleton/dist/skeleton.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writer",
  description: "Give your PDFs superpowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Provider>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
