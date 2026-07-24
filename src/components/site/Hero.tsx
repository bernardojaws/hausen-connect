import { useState } from "react";
import { Search } from "lucide-react";
import heroMansion from "@/assets/hero-mansion.jpg";

export function Hero() {
  const [price, setPrice] = useState(3_000_000);
  const [bedrooms, setBedrooms] = useState("3");
  const format = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroMansion}
          alt="Residência de alto padrão em Brusque"
          className="h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/90" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center md:pt-28 md:px-8">
        <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Hausen Imóveis · Brusque / SC</span>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-primary-foreground sm:text-6xl md:text-7xl">
          Nossa essência é <em className="not-italic text-gold">aproximar</em>.
        </h1>
        <p className="mt-6 max-w-xl text-sm text-primary-foreground/80 md:text-base">
          Curadoria exclusiva de imóveis de alto padrão em Brusque, região e litoral de Santa Catarina.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 w-full rounded-sm border border-white/15 bg-background/95 p-5 text-left shadow-2xl backdrop-blur md:p-7"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Field label="Negócio">
              <select className="hausen-input">
                <option>Venda</option>
                <option>Aluguel</option>
              </select>
            </Field>
            <Field label="Categoria">
              <select className="hausen-input">
                <option>Todas</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Terreno</option>
                <option>Litoral</option>
                <option>Sítio</option>
                <option>Comercial</option>
              </select>
            </Field>
            <Field label="Cidade">
              <select className="hausen-input">
                <option>Todas</option>
                <option>Brusque</option>
                <option>Guabiruba</option>
                <option>Botuverá</option>
                <option>Balneário Camboriú</option>
                <option>Bombinhas</option>
              </select>
            </Field>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Faixa de valor</label>
                <span className="text-xs font-medium text-foreground">até {format.format(price)}</span>
              </div>
              <input
                type="range"
                min={200000}
                max={10000000}
                step={100000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mt-3 w-full accent-[oklch(0.72_0.11_78)]"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Dormitórios</label>
              <div className="mt-3 flex gap-2">
                {["1", "2", "3", "4+"].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setBedrooms(n)}
                    className={`flex-1 border py-2 text-sm transition ${
                      bedrooms === n
                        ? "border-gold bg-gold text-primary"
                        : "border-border bg-background text-foreground hover:border-gold"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary py-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-foreground"
          >
            <Search className="h-4 w-4" /> Buscar imóveis
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}