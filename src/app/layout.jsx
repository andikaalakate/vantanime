// import { Inter } from 'next/font/google'
import NavBar from "@/components/Utilities/NavBar";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Favicon from "@/components/Utilities/Head/Favicon";
import Footer from "@/components/Utilities/Footer";
import "animate.css";
import ScrollToTop from "@/components/Utilities/ScrollToTop";
// import AudioPlayer from '@/components/AudioPlayer'
import RightClick from "@/components/Utilities/RightClick";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Vanta AnimeList",
  description: "Website AnimeList Indonesia",
  generator: "",
  applicationName: "VantaTranslation",
  keywords: ["Vanta", "Translation Indo", "AnimeList", "Andika Alakate"],
  authors: [
    { name: "Andika" },
    { name: "Alakate", url: "https://andika.gadakstd.my.id" },
  ],
  creator: "Andika Alakate",
  publisher: "Andika Alakate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Favicon />
      <body
        className={`${poppins.className} animate__animated animate__fadeIn animate__slow bg-color-secondary scrollbar-thin scrollbar-track-color-primary scrollbar-thumb-color-whity min-h-screen`}
      >
        {/* <AudioPlayer /> */}
        <NavBar />
        {children}
        {/* <Footer /> */}
        <ScrollToTop />
        <RightClick />
      </body>
    </html>
  );
}
