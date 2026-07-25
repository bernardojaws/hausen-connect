import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Apartamentos", href: "#apartamentos" },
  { label: "Casas", href: "#casas" },
  { label: "Terrenos", href: "#terrenos" },
  { label: "Litoral", href: "#litoral" },
  { label: "Sítios", href: "#sitios" },
  { label: "Comercial", href: "#comercial" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a href="#inicio" className="flex items-baseline gap-2 shrink-0">
          <span className="font-serif text-2xl font-semibold text-primary-foreground md:text-3xl">Hausen</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Imóveis</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-xs uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+554733500000" className="flex items-center gap-2 text-xs text-primary-foreground/90 hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" />
            (47) 3350-0000
          </a>
          <a href="tel:+5547999990000" className="flex items-center gap-2 text-xs text-primary-foreground/90 hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" />
            (47) 99999-0000
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-primary-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary px-4 py-6">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
              <a href="tel:+554733500000" className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <Phone className="h-4 w-4 text-gold" /> (47) 3350-0000
              </a>
              <a href="tel:+5547999990000" className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <Phone className="h-4 w-4 text-gold" /> (47) 99999-0000
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}