import brokerImg from "@/assets/broker-mailson.jpg";

export function Broker() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[minmax(0,420px)_1fr] md:gap-16 md:px-8">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 border border-gold" aria-hidden />
          <img
            src={brokerImg}
            alt="Mailson Hodecker, corretor Hausen Imóveis"
            loading="lazy"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover grayscale-[15%]"
          />
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Corretor responsável</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Mailson Hodecker</h2>
          <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">CRECI/SC 00000-F</div>
          <p className="mt-8 text-base leading-relaxed text-foreground/80">
            Há mais de uma década conectando pessoas aos imóveis certos em Brusque e região. Nascido no Vale, Mailson combina conhecimento profundo do mercado local com um atendimento discreto, honesto e verdadeiramente próximo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            "Acredito que uma boa negociação começa com uma boa conversa. Meu compromisso é te aproximar do lar que a sua história merece."
          </p>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
          >
            Falar com Mailson
          </a>
        </div>
      </div>
    </section>
  );
}