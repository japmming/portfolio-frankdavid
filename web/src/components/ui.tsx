import Image from "next/image";

export function Corners() {
  const pos = [
    "left-0 top-0 border-l border-t",
    "right-0 top-0 border-r border-t",
    "left-0 bottom-0 border-l border-b",
    "right-0 bottom-0 border-r border-b",
  ];
  return (
    <>
      {pos.map((p) => (
        <span
          key={p}
          aria-hidden
          className={`pointer-events-none absolute z-10 h-3 w-3 border-signal/80 ${p}`}
        />
      ))}
    </>
  );
}

export function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
      <span className="text-signal">{n}</span>
      <span className="text-faint">{label}</span>
      <span aria-hidden className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function EmptyNote({ text }: { text: string }) {
  return (
    <div className="flex h-full min-h-40 flex-col items-center justify-center gap-2 p-6 text-center">
      <span aria-hidden className="font-mono text-2xl text-faint">* ⌀ *</span>
      <p className="max-w-xs font-mono text-xs leading-relaxed text-faint">{text}</p>
    </div>
  );
}

export function Contours({ className }: { className?: string }) {
  const paths = [
    "M-120 640 C 240 560, 640 720, 1000 620 C 1200 575, 1420 540, 1640 600",
    "M-120 720 C 260 660, 680 820, 1040 720 C 1220 670, 1440 630, 1640 690",
    "M-120 800 C 280 740, 700 900, 1080 800 C 1240 755, 1460 715, 1640 780",
    "M-120 880 C 300 820, 720 980, 1120 880 C 1260 840, 1480 800, 1640 870",
  ];
  return (
    <svg
      viewBox="0 0 1520 940"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={className}
    >
      {paths.map((d) => (
        <path key={d} d={d} fill="none" stroke="rgba(233,226,211,0.055)" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function Thumb({ src, alt }: { src: string | null; alt?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt ?? "Imagen del proyecto"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="graticule absolute inset-0" />
      )}
    </div>
  );
}