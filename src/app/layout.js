import { Inter } from "next/font/google";
import "../app/globals.css"; // ✅ assure que le chemin est correct
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers"; // ✅ regroupe Theme + Langue
import LangSetter from "../components/LangSetter"; // ✅ Gère le lang HTML dynamique

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Altea Group",
  description: "Site officiel Altea Group",
  icons: {
    icon: "/favicon.png", // ✅ ton logo placé dans /public
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LangSetter />
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
