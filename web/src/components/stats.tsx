export type Stat = { numero: string; etiqueta: string };

export function Stats({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;
  return (
    <div className="hero-rise mt-14 grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-3" style={{ animationDelay: "360ms" }}>
      {stats.map((s) => (
        <div key={`${s.numero}-${s.etiqueta}`} className="border-l-2 border-signal pl-4">
          <div className="font-display text-3xl font-bold tabular-nums">{s.numero}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{s.etiqueta}</div>
        </div>
      ))}
    </div>
  );
}