import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";
import prop7 from "@/assets/prop-7.jpg";
import prop8 from "@/assets/prop-8.jpg";
import prop9 from "@/assets/prop-9.jpg";

export type Property = {
  id: string;
  image: string;
  category: "Apartamento" | "Casa" | "Terreno" | "Litoral" | "Sítio" | "Comercial";
  title: string;
  city: string;
  neighborhood: string;
  area: number; // m²
  suites?: number;
  parking?: number;
  price?: number; // BRL, undefined = "Consulte-nos"
};

export const properties: Property[] = [
  { id: "1", image: prop1, category: "Apartamento", title: "Cobertura Panorâmica", city: "Brusque", neighborhood: "Centro", area: 320, suites: 4, parking: 3, price: 3_850_000 },
  { id: "2", image: prop2, category: "Casa", title: "Residência Contemporânea", city: "Brusque", neighborhood: "Jardim Maluche", area: 480, suites: 4, parking: 4, price: 4_200_000 },
  { id: "3", image: prop3, category: "Litoral", title: "Penthouse Beira-Mar", city: "Balneário Camboriú", neighborhood: "Barra Sul", area: 410, suites: 4, parking: 4 },
  { id: "4", image: prop4, category: "Terreno", title: "Terreno em Condomínio", city: "Guabiruba", neighborhood: "Aymoré", area: 1200, price: 890_000 },
  { id: "5", image: prop5, category: "Sítio", title: "Sítio com Vista para a Serra", city: "Botuverá", neighborhood: "Zona Rural", area: 25000, suites: 3, parking: 6, price: 2_100_000 },
  { id: "6", image: prop6, category: "Comercial", title: "Edifício Corporativo", city: "Brusque", neighborhood: "Centro", area: 850, parking: 12 },
  { id: "7", image: prop7, category: "Apartamento", title: "Duplex Assinado", city: "Brusque", neighborhood: "São Luiz", area: 380, suites: 4, parking: 3, price: 4_500_000 },
  { id: "8", image: prop8, category: "Casa", title: "Casa com Piscina Infinita", city: "Guabiruba", neighborhood: "Centro", area: 520, suites: 5, parking: 5, price: 5_800_000 },
  { id: "9", image: prop9, category: "Litoral", title: "Casa Pé na Areia", city: "Bombinhas", neighborhood: "Bombas", area: 340, suites: 4, parking: 3 },
];

export const formatPrice = (value?: number) =>
  value === undefined
    ? "Consulte-nos"
    : new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);