"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#portafolio", label: "Porfolio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav({ nombreCorto }: { nombreCorto: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#inicio" className="flex items-baseline gap-2 font-display text-lg font-extrabold tracking-tight">
          {nombreCorto}
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-signal">/SIG</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex md:gap-5" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-paper md:px-2"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/cv/CV_Frank_Chavez_Marchena.pdf"
          download="CV_Frank_Chavez_Marchena.pdf"
          className="hidden h-9 items-center border border-signal/70 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal transition-colors hover:bg-signal hover:text-night lg:inline-flex"
        >
          CV <span aria-hidden>↓</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-9 w-9 items-center justify-center border border-white/15 font-mono text-xs text-paper transition-colors hover:border-signal hover:text-signal md:hidden"
        >
          {open ? <span aria-hidden>✕</span> : <span aria-hidden>☰</span>}
        </button>
      </div>

      {open && (
        <nav
          id="nav-mobile"
          aria-label="Móvil"
          className="border-t border-white/10 bg-night/95 px-6 py-4 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-signal"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv/CV_Frank_Chavez_Marchena.pdf"
                download="CV_Frank_Chavez_Marchena.pdf"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-10 items-center gap-2 bg-signal px-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-night transition-colors hover:bg-paper"
              >
                Descargar CV <span aria-hidden>↓</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}