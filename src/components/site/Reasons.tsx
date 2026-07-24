import { Heart, Camera, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Amamos o que fazemos",
    text: "Cada imóvel é tratado com o cuidado de quem entende que ele será, um dia, o lar de alguém.",
  },
  {
    icon: Camera,
    title: "Fotos exclusivas",
    text: "Produção fotográfica profissional que revela a personalidade e o potencial de cada propriedade.",
  },
  {
    icon: Handshake,
    title: "Compromisso",
    text: "Transparência em cada etapa, do primeiro contato às chaves na mão. Sua confiança é o nosso ativo.",
  },
];

export function Reasons() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Por que Hausen</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">3 motivos para comprar conosco</h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center border border-white/10 bg-white/[0.02] px-6 py-10">
              <div className="flex h-16 w-16 items-center justify-center border border-gold text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}