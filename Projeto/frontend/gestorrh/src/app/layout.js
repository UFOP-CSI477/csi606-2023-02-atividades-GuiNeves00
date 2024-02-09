import { Inter } from "next/font/google";
import "./globals.css";
import NavbBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gestão RH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col">
        <NavbBar />
        <main className="container mx-auto py-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
