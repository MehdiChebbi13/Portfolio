"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaMagnifyingGlassPlus, FaXmark } from "react-icons/fa6";
import { projects } from "@/data";

type ExpandedPreview = {
  src: string;
  title: string;
};

function Projects() {
  const [expandedPreview, setExpandedPreview] = useState<ExpandedPreview | null>(
    null,
  );

  useEffect(() => {
    const isPreviewOpen = Boolean(expandedPreview);

    document.body.style.overflow = isPreviewOpen ? "hidden" : "auto";
    window.dispatchEvent(
      new CustomEvent("project-modal-toggle", {
        detail: { open: isPreviewOpen },
      }),
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedPreview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      window.dispatchEvent(
        new CustomEvent("project-modal-toggle", {
          detail: { open: false },
        }),
      );
    };
  }, [expandedPreview]);

  return (
    <>
      {expandedPreview && (
        <div
          className="fixed inset-0 z-[160] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          onClick={() => setExpandedPreview(null)}
        >
          <button
            type="button"
            aria-label="Fermer l'aperçu"
            onClick={() => setExpandedPreview(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
          >
            <FaXmark className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]/95 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={expandedPreview.src}
              alt={expandedPreview.title}
              className="max-h-[82vh] w-full rounded-[1.4rem] bg-[#0d132b] object-contain"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[1.4rem] bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent px-6 pb-6 pt-16">
              <p className="text-lg font-semibold text-white">
                {expandedPreview.title}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-7xl py-20" id="project">
        <h1 className="heading">
          Une petite selection de{" "}
          <span className="text-purple">projets recents</span>
        </h1>

        <div className="mt-12 flex flex-wrap items-stretch justify-center gap-10 p-4 lg:gap-12">
          {projects.map((item) => (
            <article
              key={item.slug}
              className="flex h-auto w-full max-w-[34rem] items-center justify-center"
            >
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-white/[0.1] bg-grid-small-black-100 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.18]">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedPreview({
                      src: item.src,
                      title: item.title,
                    })
                  }
                  className="group relative mb-6 flex h-[16rem] w-full items-center justify-center overflow-hidden rounded-[1.6rem] text-left sm:h-[19rem]"
                >
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[1.6rem]"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt=""
                      className="h-full w-full object-cover"
                      aria-hidden="true"
                    />
                  </div>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    <FaMagnifyingGlassPlus className="h-3.5 w-3.5" />
                    Agrandir
                  </span>
                </button>

                <div className="flex flex-1 flex-col">
                  <div>
                    <h2 className="line-clamp-2 text-xl font-bold text-white sm:text-2xl lg:text-[2rem]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-base text-white-100/80">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-6 pt-8">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={`${item.slug}-${icon}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-11 lg:w-11"
                          style={{
                            transform: `translateX(-${6 * index + 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt=""
                            className="p-2"
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex w-fit items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-purple transition hover:border-purple/50 hover:bg-white/10"
                    >
                      Voir Plus
                      <FaArrowUpRightFromSquare className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
