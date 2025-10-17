import "./global.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Adam Wainikainen's Portfolio",
  description: "Welcome to my portfolio",
  icons: { icon: "/favicon.png" },
  viewport: "width=device-width, initial-scale=1",
};

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function DefaultLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="default-layout">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
