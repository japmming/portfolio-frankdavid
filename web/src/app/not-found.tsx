export default function NotFound() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <div aria-hidden className="graticule absolute inset-0" />
      <div aria-hidden className="vignette absolute inset-0" />
      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-start justify-center px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
          {"// Error 404 · Punto no localizado"}
        </p>
        <h1 className="mt-6 font-display text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none tracking-tight text-paper">
          4<span className="text-signal">0</span>4
        </h1>
        <p className="mt-4 max-w-md font-mono text-sm uppercase tracking-[0.2em] text-muted">
          Coordenadas fuera de rango. La lámina que buscas no existe en este atlas.
        </p>
        <a
          href="#inicio"
          className="mt-10 inline-flex h-11 items-center gap-2 bg-signal px-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-night transition-colors hover:bg-paper"
        >
          Volver al inicio <span aria-hidden>→</span>
        </a>
      </div>
    </main>
  );
}