import { SectionTag } from "./ui";
import { Reveal } from "./reveal";

export function ContactCard({ email, telefono, linkedin }: { email: string; telefono: string; linkedin: string }) {
  const waDigits = telefono.replace(/\D/g, "");
  const waHref = waDigits ? `https://wa.me/${waDigits}` : null;

  const rows = [
    { k: "EMAIL", v: email, href: `mailto:${email}`, external: false },
    { k: "TEL", v: telefono, href: waHref ?? `tel:${telefono.replace(/[^\d+]/g, "")}`, external: waHref !== null },
    { k: "LINKEDIN", v: "in/frank-marchena", href: linkedin, external: true },
  ];
  return (
    <section id="contacto" className="relative scroll-mt-16">
      <div aria-hidden className="graticule absolute inset-0 opacity-60" />
      <div aria-hidden className="vignette absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-32">
        <Reveal>
          <SectionTag n="05" label="Contacto" />
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
            ¿Trabajamos con tus datos territoriales<span className="text-signal">?</span>
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Coordenadas listas para nuevos proyectos: desde SIG de utilidades hasta levantamientos con drones.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 max-w-2xl">
            {rows.map((row) => (
              <a
                key={row.k}
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-5 font-mono text-sm uppercase tracking-[0.2em] transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-faint group-hover:text-signal">{row.k}</span>
                <span className="min-w-0 break-words text-right text-paper transition-colors group-hover:text-signal">
                  {row.v}
                  {row.external && <span aria-hidden className="ml-2">↗</span>}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}