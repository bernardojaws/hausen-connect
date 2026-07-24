import { BedDouble, Car, Ruler, MapPin } from "lucide-react";
import { properties, formatPrice } from "@/lib/properties";

export function Featured() {
  return (
    <section id="apartamentos" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Seleção Hausen</span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Imóveis em destaque</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Uma curadoria de propriedades excepcionais, com fotografia exclusiva e atendimento personalizado.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article key={p.id} className="group flex flex-col border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {p.neighborhood} · {p.city}
                </div>
                <h3 className="mt-2 font-serif text-2xl text-foreground">{p.title}</h3>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-gold" />{p.area} m²</span>
                  {p.suites !== undefined && (
                    <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold" />{p.suites} suítes</span>
                  )}
                  {p.parking !== undefined && (
                    <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-gold" />{p.parking} vagas</span>
                  )}
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Valor</div>
                    <div className="mt-1 font-serif text-xl text-foreground">{formatPrice(p.price)}</div>
                  </div>
                  <a
                    href="#contato"
                    className="text-[11px] uppercase tracking-[0.25em] text-foreground underline decoration-gold decoration-2 underline-offset-8 hover:text-gold"
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}