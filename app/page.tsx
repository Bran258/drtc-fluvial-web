import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="AUTORIDAD PORTUARIA REGIONAL"
        title="Gestione sus trámites"
        description="Simplifique su gestión de permisos de navegación y empadronamiento de naves de forma digital y eficiente. Un servicio gubernamental diseñado para la fluidez del transporte nacional."
        primaryAction={{ label: "Ver trámites", href: "/tramites" }}
        secondaryAction={{ label: "Validar requisitos", href: "/requisitos" }}
        stats={[
          { value: "100%", label: "Digitalizado" },
          { value: "24/7", label: "Disponibilidad" },
        ]}
        image="/images/hero.png"
      />
      <Services />
      <CTA />
    </>
  );
}