import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import  Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
    
    <div className="min-h-screen bg-black overflow-hidden ">
  <div className="relative dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
    
    <div className="max-w-7xl mx-auto lg:px-4"> {/* Reduce padding here */}
          <Navbar></Navbar>
          <HeroSection></HeroSection>
        </div>

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute left-0 w-full"></div>

      </div>



      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills>
          
        </Skills>

        <Projects></Projects>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer></Footer>
      
    </div>
    </div>
  );
}
