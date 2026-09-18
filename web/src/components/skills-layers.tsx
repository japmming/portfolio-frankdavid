import { EmptyNote, SectionTag } from "./ui";
import { Reveal } from "./reveal";

export type SkillGroupItem = {
  _id: string;
  nombreGrupo: string;
  habilidades: string[];
};

export function SkillsLayers({ grupos }: { grupos: SkillGroupItem[] }) {
  return (
    <section id="habilidades" className="relative scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 pb-24 md:py-28 md:pb-28">
        <Reveal>
          <SectionTag n="04" label="Herramientas & Habilidades" />
          <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Caja de herramientas<span className="text-signal">.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grupos.length === 0 && (
            <Reveal className="md:col-span-2 lg:col-span-3">
              <div className="border border-dashed border-white/15 bg-deep/50">
                <EmptyNote text="Sin grupos de habilidades. Publica «Grupo de habilidades» en el Studio para listarlas aquí." />
              </div>
            </Reveal>
          )}
          {grupos.map((g) => (
            <Reveal key={g._id} className="flex">
              <div className="group relative w-full border border-white/10 bg-deep p-6 transition-colors hover:border-signal/50">
                <div aria-hidden className="mb-6 h-px w-full bg-white/10 transition-colors group-hover:bg-white/25" />
                <h3 className="font-display text-xl font-bold tracking-tight">{g.nombreGrupo}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.habilidades.map((h) => (
                    <li key={h} className="border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}