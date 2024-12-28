import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudra Enterprises",
  description: "Fast, Reliable, Affordable plumbing is here.",
  keywords: [
    "Plumbing",
    "Tank Cleaning",
    "Labour supply",
    "Pipe Fittings",
    "Borewell Drilling",
    "Pump Buy Sell",
  ],
  authors: [{ name: "Coder Jk" }],
  creator: "Coder Jk",
  publisher: "Coder Jk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header/ Navbar */}
        <Header />

        {/* Main Section */}
        <main className="min-h-screen my-28">{children}</main>
        <Toaster richColors />

        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💖 by Coder Jk</p>
            <p>&copy;2024 All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
