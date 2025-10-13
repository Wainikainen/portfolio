import "./global.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata = {
    title: "Adam Wainikainen's Portfolio",
    description: "Welcome to my portfolio",
    icons:{
        icon: "/public/favicon.png"
    },
};

const montserrat = Montserrat({
    weight: ["400","700"],
    subsets: ["latin"]
});

export default function DefaultLayout ({children}) {
    return (
        <html lang="en" className={montserrat.className} >
            <body className="default-layout">
                <NavBar/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}