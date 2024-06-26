import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider.jsx";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Movie-App",
  description: "This is Next database project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          <Suspense>

          {children}
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
