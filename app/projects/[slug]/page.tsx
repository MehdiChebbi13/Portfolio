import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeftLong, FaGithub } from "react-icons/fa6";
import { getProjectBySlug, projects } from "@/data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable | Mehdi Chebbi",
    };
  }

  return {
    title: `${project.title} | Mehdi Chebbi`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#050816] dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-purple/20 blur-[140px] dark:bg-purple/10" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-20 pt-10 md:px-10 md:pt-12">
        <Link
          href="/#project"
          className="inline-flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-white/75 dark:hover:text-white"
        >
          <FaArrowLeftLong className="h-4 w-4" />
          Retour au portfolio
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple">
            Projet
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-white/45">
            {project.description}
          </p>
          <p className="mt-8 text-lg leading-9 text-slate-700 dark:text-white/75 sm:text-xl">
            {project.summary}
          </p>
        </div>

        <section className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
            Points cles
          </h2>
          <ul className="mt-6 space-y-4 pl-5 text-lg text-slate-700 dark:text-white/75">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="marker:text-purple">
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
            Technologies
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:shadow-none"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-6 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-purple/60 hover:text-purple dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10"
          >
            <FaGithub className="h-5 w-5" />
            Voir le code
          </Link>
        </div>
      </div>
    </main>
  );
}
