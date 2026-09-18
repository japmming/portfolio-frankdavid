import { Corners, EmptyNote, SectionTag, Thumb } from "./ui";
import { Reveal } from "./reveal";

export type ProjectItem = {
  _id: string;
  titulo: string;
  descripcion: string | null;
  etiqueta: string;
  herramientas: string[];
  destacado: boolean;
  src: string | null;
  alt?: string;
};

export function ProjectsGrid({ proyectos }: { proyectos: ProjectItem[] }) {
  return (
    <section id="portafolio" className="relative scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTag n="02" label="Porfolio" />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Trabajo espacial</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Mapas, geovisores, dashboard y automatización. Productos entregados por instituciones y consultoras.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.length === 0 && (
            <Reveal className="sm:col-span-2 lg:col-span-3">
              <div className="border border-dashed border-white/15 bg-deep/50">
                <EmptyNote text="Aún no hay proyectos. Publica documentos de tipo «Proyecto» en el Studio para que aparezcan aquí." />
              </div>
            </Reveal>
          )}
          {proyectos.map((p, i) => (
            <Reveal key={p._id} delay={(i % 3) * 90} className="flex">
              <article className="group relative flex h-full w-full flex-col border border-white/10 bg-deep transition-colors hover:border-signal/50">
                <Corners />
                <div className="relative">
                  <Thumb src={p.src} alt={p.alt} />
                  {p.destacado && (
                    <span className="absolute left-3 top-3 z-10 bg-signal px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-night shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                      Destacado
                    </span>
                  )}
                </div>
                <div className="flex h-[11rem] flex-col p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">{p.etiqueta}</p>
                  <h3 className="mt-2 line-clamp-1 font-display text-xl font-bold tracking-tight">{p.titulo}</h3>
                  {p.descripcion && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.descripcion}</p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {p.herramientas.slice(0, 4).map((h) => (
                      <span key={h} className="border border-white/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                        {h}
                      </span>
                    ))}
                    {p.herramientas.length > 4 && (
                      <span className="border border-signal/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-signal">
                        +{p.herramientas.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}