import { useState } from "react";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, X } from "lucide-react";

export function Footer() {
  const [showCookies, setShowCookies] = useState(true);
  return (
    <>
      <footer id="contato" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 md:grid-cols-4 md:px-8">
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Hausen</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Imóveis</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/60">
              Nossa essência é aproximar. Imóveis de alto padrão em Brusque, Santa Catarina.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-10 w-10 items-center justify-center border border-background/20 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" />(47) 3350-0000</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" />(47) 99999-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" />contato@hausenimoveis.com.br</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />Rua Azambuja, 000 — Centro<br />Brusque / SC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Links úteis</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-gold">Cadastre seu imóvel</a></li>
              <li><a href="#" className="hover:text-gold">Encomende seu imóvel</a></li>
              <li><a href="#" className="hover:text-gold">Fale conosco</a></li>
              <li><a href="#" className="hover:text-gold">Política de privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Categorias</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li><a href="#apartamentos" className="hover:text-gold">Apartamentos</a></li>
              <li><a href="#casas" className="hover:text-gold">Casas</a></li>
              <li><a href="#terrenos" className="hover:text-gold">Terrenos</a></li>
              <li><a href="#litoral" className="hover:text-gold">Litoral</a></li>
              <li><a href="#sitios" className="hover:text-gold">Sítios</a></li>
              <li><a href="#comercial" className="hover:text-gold">Comercial</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-background/50 md:flex-row md:items-center md:px-8">
            <div>CRECI/SC J-00000 · © {new Date().getFullYear()} Hausen Imóveis. Todos os direitos reservados.</div>
            <div>Nossa essência é aproximar.</div>
          </div>
        </div>
      </footer>

      {showCookies && (
        <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 border border-border bg-card p-5 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-1 text-xs leading-relaxed text-muted-foreground">
              Utilizamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa{" "}
              <a href="#" className="text-foreground underline decoration-gold underline-offset-4">Política de Privacidade</a>.
            </div>
            <button
              onClick={() => setShowCookies(false)}
              className="shrink-0 bg-primary px-4 py-2 text-[10px] uppercase tracking-widest text-primary-foreground hover:bg-foreground"
            >
              Aceitar
            </button>
            <button
              onClick={() => setShowCookies(false)}
              aria-label="Fechar"
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}