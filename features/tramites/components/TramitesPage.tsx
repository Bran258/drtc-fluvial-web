
"use client";

import { useRouter } from "next/navigation";
import { tramitesData } from "@/data/tramites";
import TramiteCard from "./TramiteCard";
import SectionTitle from "@/components/SectionTitle";
import SupportBanner from "@/components/SupportBanner";

export default function TramitesPage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <SectionTitle
        title="Trámites disponibles"
        description="Selecciona el trámite que deseas realizar"
      />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tramitesData.map((t) => (
          
          <TramiteCard
            key={t.id}
            title={t.title}
            description={t.description}
            icon={t.icon}
            estado={t.estado}
            onClick={() => router.push(`/tramites/${t.id}`)}
          />
        ))}
      </div>
      
      {/* Banner de soporte */}
      <div className="max-w-7xl mx-auto mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}