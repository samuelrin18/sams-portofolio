import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-400">
          WHAT I HAVE BUILT
        </p>

        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="max-w-xl text-slate-400">
            A selection of projects showcasing my experience in backend
            development, distributed systems, and web applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-500/50"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-mono text-cyan-400">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-800 pt-5">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9c0 .85.7 1.55 1.55 1.55h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.7A1.75 1.75 0 1 1 6.5 4.2a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19Z"/>
                  </svg>                    Source Code
                    <ArrowUpRight size={15} />
                  </Link>
                )}

                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400"
                  >
                    Live Demo
                    <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}