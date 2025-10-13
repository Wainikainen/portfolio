"use-client"
import "./page.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700","900"],
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main className="home">
      <div className="home-body">
        <h1 className={`home-heading ${raleway.className}`}>Adam Wainikainen</h1>
        <p className="home-txt">
          Software Engineer creating high-quality web applications
        </p>
      </div>
    </main>
  );
}
