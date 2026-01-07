"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
