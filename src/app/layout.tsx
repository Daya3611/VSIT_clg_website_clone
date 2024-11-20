import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VSIT",
  description: "VSIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={bricolage_grotesque.className}
      >
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
