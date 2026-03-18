"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCode, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  SiAngular,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJunit5,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
} from "react-icons/si";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TypeScriptIcon = () => (
  <svg
    className="h-6 w-6 text-blue-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const ReactIcon = () => (
  <Image src="/React-icon.svg" alt="React Logo" width={24} height={24} />
);

const TailwindIcon = () => (
  <svg
    className="h-6 w-6 text-cyan-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const MySQLIcon = () => (
  <Image src="/mysql.svg" width={26} height={26} alt="MySQL Logo" />
);

const NextJSIcon = () => (
  <div className="h-6 w-6 rounded-full bg-white p-[-1px]">
    <Image src="/Next-icon.svg" alt="Next Logo" width={26} height={26} />
  </div>
);

const MongoDBIcon = () => (
  <svg
    className="h-6 w-6 text-green-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

const NodeIcon = () => (
  <svg
    className="h-6 w-6 text-green-600"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zM19.099 13.993c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 2.974 0 4.572-1.097 4.572-3.014z" />
  </svg>
);

const DockerIcon = () => (
  <Image src="/dock.svg" alt="Docker Logo" width={26} height={26} />
);

const JavaIcon = () => <FaJava className="h-6 w-6 text-orange-400" />;

const PythonIcon = () => <FaPython className="h-6 w-6 text-yellow-300" />;

const CppIcon = () => <FaCode className="h-6 w-6 text-sky-400" />;

const JavaScriptIcon = () => (
  <SiJavascript className="h-6 w-6 text-yellow-300" />
);

const SQLIcon = () => (
  <svg
    className="h-6 w-6 text-cyan-300"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C7.03 2 3 4.24 3 7v10c0 2.76 4.03 5 9 5s9-2.24 9-5V7c0-2.76-4.03-5-9-5zm0 2c4.42 0 7 1.79 7 3s-2.58 3-7 3-7-1.79-7-3 2.58-3 7-3zm0 16c-4.42 0-7-1.79-7-3v-2.2C6.53 16.16 9.1 17 12 17s5.47-.84 7-2.2V17c0 1.21-2.58 3-7 3zm0-5c-4.42 0-7-1.79-7-3V9.8C6.53 11.16 9.1 12 12 12s5.47-.84 7-2.2V12c0 1.21-2.58 3-7 3z" />
  </svg>
);

const AngularIcon = () => (
  <Image src="/ang.svg" width={26} height={26} alt="Angular Logo" />
);

const SpringBootIcon = () => (
  <SiSpringboot className="h-6 w-6 text-green-500" />
);

const ExpressIcon = () => <SiExpress className="h-6 w-6 text-gray-200" />;

const PostgreSQLIcon = () => <SiPostgresql className="h-6 w-6 text-blue-400" />;

const GitIcon = () => <FaGitAlt className="h-6 w-6 text-orange-500" />;

const PostmanIcon = () => <SiPostman className="h-6 w-6 text-orange-400" />;

const JUnitIcon = () => <SiJunit5 className="h-6 w-6 text-lime-400" />;

const FigmaIcon = () => <SiFigma className="h-6 w-6 text-pink-400" />;

const technologies: Technology[] = [
  {
    name: "Java",
    description: "POO et backend enterprise",
    icon: <JavaIcon />,
  },
  {
    name: "Python",
    description: "Scripts, algo et automatisation",
    icon: <PythonIcon />,
  },
  {
    name: "C/C++",
    description: "Bases systeme et performance",
    icon: <CppIcon />,
  },
  {
    name: "JavaScript",
    description: "Logique web et interfaces",
    icon: <JavaScriptIcon />,
  },
  {
    name: "TypeScript",
    description: "JavaScript type-safe",
    icon: <TypeScriptIcon />,
  },
  {
    name: "SQL",
    description: "Requetes et modelisation",
    icon: <SQLIcon />,
  },
  {
    name: "React",
    description: "UI modernes et composants",
    icon: <ReactIcon />,
  },
  {
    name: "Angular",
    description: "Frontend SPA structure",
    icon: <AngularIcon />,
  },
  {
    name: "Tailwind",
    description: "HTML5/CSS3 utilitaire",
    icon: <TailwindIcon />,
  },
  {
    name: "Next.js",
    description: "Framework React full-stack",
    icon: <NextJSIcon />,
  },
  {
    name: "Figma",
    description: "Maquettage UI et prototypage",
    icon: <FigmaIcon />,
  },
  {
    name: "Spring Boot",
    description: "API REST en Java",
    icon: <SpringBootIcon />,
  },
  {
    name: "Node.js",
    description: "Runtime backend JavaScript",
    icon: <NodeIcon />,
  },
  {
    name: "Express.js",
    description: "Backend API Node.js",
    icon: <ExpressIcon />,
  },
  {
    name: "MySQL",
    description: "Base de donnees relationnelle",
    icon: <MySQLIcon />,
  },
  {
    name: "PostgreSQL",
    description: "Base relationnelle robuste",
    icon: <PostgreSQLIcon />,
  },
  {
    name: "MongoDB",
    description: "Base de donnees NoSQL",
    icon: <MongoDBIcon />,
  },
  {
    name: "Docker",
    description: "Conteneurisation et portabilite",
    icon: <DockerIcon />,
  },
  {
    name: "Git/GitHub",
    description: "Versioning et collaboration",
    icon: <GitIcon />,
  },
  {
    name: "Postman",
    description: "Test et debug d'API",
    icon: <PostmanIcon />,
  },
  {
    name: "JUnit",
    description: "Tests unitaires Java",
    icon: <JUnitIcon />,
  },
];

const TechStack = () => {
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  const carouselItems = [...technologies, ...technologies];

  return (
    <section className="py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="heading mb-8">Technologies que j&apos;utilise</p>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/65 md:text-base">
          Un apercu de mon stack principal
        </p>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileListOpen(true)}
            className="mx-auto flex items-center justify-center rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.12]"
          >
            Voir la liste
          </button>
        </div>
      </div>

      {isMobileListOpen && (
        <div className="fixed inset-0 z-[120] flex items-end bg-black/70 backdrop-blur-sm md:hidden">
          <div className="flex h-[78vh] w-full flex-col rounded-t-[2rem] border-t border-white/10 bg-slate-950 px-5 pb-5 pt-4">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/15" />
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">Tech Stack</p>
                <p className="text-sm text-white/55">
                  Liste complete des technologies
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileListOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white"
              >
                <FaXmark className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pr-1 [scrollbar-color:rgba(255,255,255,0.25)_transparent] [scrollbar-width:thin]">
              {technologies.map((tech) => (
                <Card
                  key={`mobile-${tech.name}`}
                  className="border-white/10 bg-white/[0.08] px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center text-white/90">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-medium text-white">
                        {tech.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative left-1/2 right-1/2 hidden w-screen -translate-x-1/2 overflow-hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black-100 via-black-100/80 to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black-100 via-black-100/80 to-transparent md:w-24" />

        <div className="flex w-max min-w-full shrink-0 gap-5 animate-scroll px-5 [--animation-duration:45s] sm:px-8">
          {carouselItems.map((tech, index) => (
            <Card
              key={`${tech.name}-${index}`}
              className="w-[240px] shrink-0 border-white/12 bg-white/[0.08] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.12]"
              aria-hidden={index >= technologies.length}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center text-white/90">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-medium tracking-[0.01em] text-white">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {tech.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
