import { ProfileRepository } from "@/repositories/profile.repository";

export default async function About() {

  const profile = await ProfileRepository.getProfile();
  if (!profile) {
    return <p>Data profil belum tersedia.</p>;
  }


  return (
    <section id="about" className="border-t border-slate-800 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
        </div>

        <div className="space-y-5 leading-relaxed text-slate-400">
          <p>
            I'm a software developer focused on building reliable,
            maintainable, and scalable applications. My experience
            includes backend development, API design, database
            integration, and system architecture.
          </p>

          <p>
            I have worked with technologies such as Java, Spring Boot,
            PHP, Laravel, PostgreSQL, MySQL, Oracle, Redis,
            Apache Kafka, and as you see know i'm using NextJs.
          </p>

          <p>
            I'm interested in distributed systems, microservices,
            cloud technologies, and applying modern engineering
            practices to solve real-world problems.
          </p>

          <p>
            I continuously learn new technologies and enjoy turning
            complex business requirements into practical software
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
