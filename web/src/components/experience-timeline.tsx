import { SectionTag } from "./ui";
import { Reveal } from "./reveal";

export type ExperienceItem = {
  _id: string;
  empresa: string;
  cargo: string;
  fechaInicio: string | null;
  fechaFin: string | null;
  actual: boolean;
  bullets: string[];
};

const MONTHS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SET", "OCT", "NOV", "DIC"];

function fmtPeriod(date?: string | null) {
  if (!date) return "";
  const [y, m] = date.split("-").map(Number);
  if (!y) return date;
  return m ? `${MONTHS[m - 1]} ${y}` : `${y}`;
}

export function ExperienceTimeline({ experiencias }: { experiencias: ExperienceItem[] }) {
  return (
    <section id="experiencia" className="relative scroll-mt-16">
      <div aria-hidden className="graticule absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTag n="03" label="Experiencia" />
          <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Trayectoria profesional<span className="text-signal">.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            La línea de tiempo se ordena con el campo «orden» de cada documento de experiencia.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-10 border-l border-white/10 pl-8">
          {experiencias.length === 0 && (
            <li>
              <div className="border border-dashed border-white/15 bg-deep/50 p-6">
                <p className="font-mono text-xs leading-relaxed text-faint">
                  Sin experiencias aún. Añade documentos de tipo «Experiencia» en el Studio para poblar la línea de
                  tiempo.
                </p>
              </div>
            </li>
          )}
          {experiencias.map((xp) => (
            <li key={xp._id} className="relative">
              <span aria-hidden className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full border border-signal bg-night" />
              <div className="flex flex-wrap items-center gap-3">
                <p className="tabular-nums font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  {fmtPeriod(xp.fechaInicio)} — {xp.actual ? <span className="text-signal">Actual</span> : fmtPeriod(xp.fechaFin) || "—"}
                </p>
                {xp.actual && (
                  <span className="bg-signal px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-night">
                    Hoy
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{xp.cargo}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{xp.empresa}</p>
              {xp.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {xp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-signal" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}