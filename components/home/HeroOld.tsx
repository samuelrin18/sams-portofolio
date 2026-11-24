
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight} from "lucide-react";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
      <p className="mb-5 font-mono text-sm text-cyan-400">
        HELLO, I'M
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
        {profile.name}
        <span className="text-cyan-400">.</span>
      </h1>

      <h2 className="mt-6 text-2xl font-medium text-slate-300 md:text-3xl">
        {profile.headline}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        {profile.introduction}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={profile.cvUrl}
          download
          className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Download CV
          <ArrowUpRight size={18} />
        </a>

        <Link
          href="/projects"
          className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white transition hover:border-cyan-400"
        >
          View Projects
          <ArrowDown size={18} />
        </Link>
      </div>

      <div className="mt-12 flex gap-5">
        <a
          href={profile.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-cyan-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            >
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/>
          </svg>
        </a>

      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
      >
        <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9c0 .85.7 1.55 1.55 1.55h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.7A1.75 1.75 0 1 1 6.5 4.2a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19Z"/>
      </svg>
      </div>
    </section>
  );
}
