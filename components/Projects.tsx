import Link from "next/link";
import { projects } from "@/data";

function Projects() {
  return (
    <section className="mx-auto max-w-6xl py-20" id="project">
      <h1 className="heading">
        Une petite selection de{" "}
        <span className="text-purple">projets recents</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-stretch justify-center gap-16 p-4">
        {projects.map((item) => (
          <article
            key={item.slug}
            className="flex h-auto w-[80vw] items-center justify-center sm:w-96"
          >
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-grid-small-black-100 p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.16]">
              <div className="relative mb-5 flex h-[20vh] w-full items-center justify-center overflow-hidden lg:h-[30vh]">
                <div
                  className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.src} alt={item.title} className="absolute" />
              </div>

              <div className="flex flex-1 flex-col">
                <div>
                  <h2 className="line-clamp-2 text-base font-bold lg:text-2xl md:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm text-white-100/80">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2 pt-2 flex flex-row items-center justify-between">
                  <div className="mb-5 flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={`${item.slug}-${icon}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
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
                    className="inline-flex items-center mb-3 justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-purple transition hover:border-purple/50 hover:bg-white/10"
                  >
                    Voir Plus
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
