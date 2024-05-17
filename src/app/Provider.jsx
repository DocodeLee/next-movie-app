"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="">
        {children}</div>
    </ThemeProvider>
  );
}
