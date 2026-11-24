
import { ProfileRepository } from "@/repositories/profile.repository";


export default async function Contact() {
  function formatWhatsAppNumber(phone: string): string {
  // 1. Hapus semua karakter selain angka (spasi, tanda +, tanda -)
  let cleaned = phone.replace(/\D/g, '');
  
  // 2. Jika diawali '0', ganti menjadi '62'
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  
  return cleaned;
}
  const profile = await ProfileRepository.getProfile();
  if (!profile) {
    return <p>Data profil belum tersedia.</p>;
  }

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
  {/* Primary CTA: Email */}
  <a
    href={`mailto:${profile.email}`}
    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
    Send Me an Email
  </a>
   OR
  {profile.phoneNo && (
  <a
    href={`https://wa.me/${formatWhatsAppNumber(profile.phoneNo)}?text=${encodeURIComponent(
      "Halo, saya tertarik mendiskusikan peluang kerja / proyek dengan Anda."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    {/* Ikon WhatsApp */}
    <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
      <path d="M12 2C6.486 2 2 6.486 2 12c0 1.773.465 3.437 1.277 4.88L2 22l5.268-1.258A9.946 9.946 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.182c-1.564 0-3.031-.438-4.283-1.196l-.307-.185-3.125.746.762-3.046-.202-.321A8.147 8.147 0 0 1 3.818 12c0-4.511 3.671-8.182 8.182-8.182 4.511 0 8.182 3.671 8.182 8.182 0 4.511-3.671 8.182-8.182 8.182z" />
    </svg>
    <span>WhatsApp</span>
  </a>
)}
  
</div>
        <div className="mt-8 flex justify-center gap-6">
         {profile.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={social.icon}/> 
          </svg>
          {social.platform}          
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
