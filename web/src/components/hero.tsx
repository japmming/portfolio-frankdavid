import Image from "next/image";
import { Corners, Contours, SectionTag } from "./ui";
import { Stats, type Stat } from "./stats";

export type HeroFoto = { src: string; alt: string };

export function Hero({
  nombreCorto,
  rol,
  bio,
  ubicacion,
  linkedin,
  stats,
  foto,
}: {
  nombreCorto: string;
  rol: string;
  bio: string;
  ubicacion: string;
  linkedin: string;
  stats: Stat[];
  foto: HeroFoto | null;
}) {
  const parts = nombreCorto.trim().split(/\s+/);
  const nombreTop = parts.slice(0, -1).join(" ") || nombreCorto;
  const apellidoBottom = parts[parts.length - 1] ?? "";

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden className="graticule absolute inset-0" />
      <div aria-hidden className="vignette absolute inset-0" />
      <Contours className="absolute inset-0 h-full w-full" />
      <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="hero-rise font-mono text-[11px] uppercase tracking-[0.3em] text-signal" style={{ animationDelay: "0ms" }}>
            {"// Geomática · SIG · Drones RPAS · Datos"}
          </p>
          <h1
            className="hero-rise mt-5 font-display text-[clamp(2.7rem,10vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-balance"
            style={{ animationDelay: "90ms" }}
          >
            {nombreTop}
            <span className="block italic font-semibold">
              {apellidoBottom}
              <span className="text-signal">.</span>
            </span>
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "180ms" }}>
            {bio}
          </p>
          <div className="hero-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "270ms" }}>
            <a
              href="#portafolio"
              className="inline-flex h-11 items-center gap-2 bg-signal px-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-night transition-colors hover:bg-paper"
            >
              Ver porfolio <span aria-hidden>↓</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 border border-white/15 px-5 font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-signal hover:text-signal"
            >
              LinkedIn ↗
            </a>
            <span className="tabular-nums font-mono text-xs uppercase tracking-[0.2em] text-faint">
              {ubicacion}
            </span>
          </div>
          <Stats stats={stats} />
        </div>

        <div className="hero-rise mx-auto w-full max-w-md lg:col-span-5" style={{ animationDelay: "240ms" }}>
          <div className="group relative border border-white/10 bg-deep">
            <Corners />
            <div className="relative overflow-hidden">
              {foto ? (
                <div className="aspect-[4/5]">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              ) : (
                <div className="graticule aspect-[4/5]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
            </div>
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <SectionTag n="01" label="Perfil" />
                
                <p className="mt-1 font-display text-xl font-bold">{rol}</p>
              </div>
              <span aria-hidden className="font-mono text-xs text-signal">↗</span>
            </div>
          </div>
          {/* <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
            REF. GEODATA / {rol}
          </p> */}
        </div>
      </div>
    </section>
  );
}