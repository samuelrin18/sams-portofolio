import { ExperienceService } from '@/services/experience.service';

export default async function Experience() {
    const experienceService = new ExperienceService();
    const experiencesData = await experienceService.getExperiences();
  return (
    <section
      id="experience"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-400">
          MY CAREER JOURNEY
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          ~Work Experience
        </h2>

        <div className="mt-12 space-y-10">
          {experiencesData.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="grid gap-5 border-l-2 border-cyan-500/40 pl-6 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-sm text-cyan-400">
                  {experience.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-slate-400">
                  {experience.company}
                </p>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="text-cyan-400">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

