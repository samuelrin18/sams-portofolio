import { TechnicalskillService } from "@/services/technicalskill.service";

export default async function Skills() {
    const skills = new TechnicalskillService();
        const skillsData = await skills.getSkill();
  return (
    <section id="skills" className="border-t border-slate-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-400">WHAT I WORK WITH</p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Technical Skills
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((skillsData) => (
                  <span
                    key={skillsData}
                    className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {skillsData}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}