"use client";

import Particles from "./Particles";
import ClickSpark from "./ClickSpark";
import TextType from "@/components/TextType";
import ProfileCard from "./ProfileCard";  

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />

      {/* ClickSpark wrapper for spark effect */}
      <div className="relative z-10 w-full h-full">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/* Grid Container - 2 columns: 60/40 */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left Column - 60% (3/5) */}
            <div className="lg:col-span-3 text-left">
              <div className="opacity-100 translate-y-0 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                  <span className="block">Hello, I&apos;m</span>

                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                    Thanakhon Oonklan
                  </span>
                </h1>

                <div className="text-xl md:text-2xl lg:text-3xl text-zinc-300 mb-8 max-w-3xl drop-shadow-md">
                  <TextType
                    text={["UX/UI Developer & Frontend developer"]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                  <button
                    onClick={() => scrollToSection("#projects")}
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - 40% (2/5) - Lanyard 3D */}
            <div className="lg:col-span-2 hidden lg:block">
             
            </div>
          </div>
        </ClickSpark>
      </div>
    </section>
  );
}
