import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider.jsx";

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
          {children}
        </Provider>
      </body>
    </html>
  );
}
