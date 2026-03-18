import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import MagicButton from "./ui/MagicButton";

function Hero() {
  return (
    <section id="about" className="scroll-mt-32 pb-52 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5 dark:text-white/90">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            <span>Disponible pour alternance — Sept. 2026</span>
          </div>
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Le portfolio officiel de Mehdi Chebbi
          </p> */}
          <TextGenerateEffect
            words="Conception d'experience web modernes et performantes"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
            Bonjour, Je suis Mehdi, élève ingénieur à Polytech Nice Sophia,
            situé à
            <br /> Biot
          </p>
          <a href="#project">
            <MagicButton
              title="Voir mes projets"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
