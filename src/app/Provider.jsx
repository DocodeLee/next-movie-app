"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="text-blue-700 dark:text-white dark:bg-gray-700
       min-h-screen select-none transition-colors duration-300">
        {children}</div>
    </ThemeProvider>
  );
} 
