export function Footer({ nombre, ubicacion }: { nombre: string; ubicacion: string }) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
        <p>© 2026 {nombre}</p>
        <p className="tabular-nums">{ubicacion}</p>
        <p className="text-signal">8°06′S · 79°01′W </p>
      </div>
    </footer>
  );
}