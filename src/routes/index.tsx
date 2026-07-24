import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Featured } from "@/components/site/Featured";
import { Broker } from "@/components/site/Broker";
import { Reasons } from "@/components/site/Reasons";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Broker />
        <Reasons />
      </main>
      <Footer />
    </div>
  );
}
