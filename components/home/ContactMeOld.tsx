
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-cyan-400">
          GET IN TOUCH
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-slate-400">
          I'm always interested in discussing software engineering,
          backend development, new opportunities, and interesting
          technical challenges.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Send Me an Email
        </a>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
