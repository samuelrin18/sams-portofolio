
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight} from "lucide-react";

import { ProfileRepository } from "@/repositories/profile.repository";

export default async function Hero() {
  const profile = await ProfileRepository.getProfile();
  if (!profile) {
    return <p>Data profil belum tersedia.</p>;
  }
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24">
      <p className="mb-5 font-mono text-sm text-cyan-400">
        HELLO, I'M
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
        {profile.fullName}
        <span className="text-cyan-400">.</span>
      </h1>

      <h2 className="mt-6 text-2xl font-medium text-slate-300 md:text-3xl">
        {profile.headline}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        {profile.bio}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        
        {profile.resumeUrl && (
        <a
          href={profile.resumeUrl}
          download
          className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Download CV
          <ArrowDown size={18} />

        </a>
      )}

        <Link
          href="/projects"
          className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white transition hover:border-cyan-400"
        >
          View Projects
          <ArrowUpRight size={18} />

        </Link>
      </div>

      <div className="mt-18 flex gap-5">
        {profile.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="currentColor"
                aria-hidden="true"
            >
              <path d={social.icon}/> 
            </svg>
       {social.platform}
        </a>
        ))}
      </div>
    </section>
  );
}
