
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}.
          All rights reserved.
        </p>

        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
