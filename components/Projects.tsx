"use client";
import { cards } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const activeCard = active && typeof active === "object" ? active : null;
  const isModalOpen = Boolean(activeCard);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    window.dispatchEvent(
      new CustomEvent("project-modal-toggle", {
        detail: { open: isModalOpen },
      }),
    );

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
      window.dispatchEvent(
        new CustomEvent("project-modal-toggle", {
          detail: { open: false },
        }),
      );
    };
  }, [isModalOpen]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {activeCard && (
        <div className="fixed inset-0 z-10 h-full w-full bg-black/70 backdrop-blur-sm" />
      )}

      {activeCard ? (
        <div className="fixed inset-0 z-[100] grid place-items-center p-4">
          <button
            type="button"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg lg:hidden"
            onClick={() => setActive(null)}
          >
            <CloseIcon />
          </button>

          <div
            ref={ref}
            className="flex h-full w-full max-w-[560px] max-h-[88vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            {/*  <div>
              <Image
                priority
                width={200}
                height={200}
                src="/bg.png"
                alt={active.title}
                className="h-56 w-full object-cover object-top sm:h-64"
              />
            </div> */}

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
                <div className="">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {activeCard.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/75 md:text-base">
                    {activeCard.description}
                  </p>
                </div>
              </div>
              <div className="min-h-0 flex-1 px-6 py-5">
                <div className="h-full overflow-y-auto rounded-2xl  bg-white/5 px-4 py-4 text-xl leading-7 text-white/90 md:text-base [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2 [scrollbar-color:rgba(255,255,255,0.3)_transparent] [scrollbar-width:thin]">
                  {typeof activeCard.content === "function"
                    ? activeCard.content()
                    : activeCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="py-20 max-w-6xl mx-auto " id="project">
        <h1 className="heading">
          Une petite selection de{" "}
          <span className="text-purple">projets recents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {cards.map((item) => (
            <div
              key={item.title}
              onClick={() => setActive(item)}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            >
              <div className="relative z-50 rounded-2xl border border-white/[0.1] bg-grid-small-black-100 p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] overflow-hidden">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img src={item.src} alt="cover" className="" />{" "}
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="flex lg:text-xl md:text-xs text-sm text-purple">
                      En Savoir Plus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
