
"use client";

import SectionTitle from "@/components/SectionTitle";
import ReservaCita from "./ReservaCita";

export default function AgendarCitaPage() {

    return (
        <div className="max-w-7xl mx-auto p-6">
            <SectionTitle
                title="Reserva tu Atención Presencial"
                description="Selecciona la fecha y hora que mejor se adapte a tus necesidades para gestionar tus permisos de transporte fluvial con total fluidez."
            />
            {/* Contenido de la sección */}

            <div className="mt-8 ">
               <ReservaCita />
            </div>
        </div>
    );
}

