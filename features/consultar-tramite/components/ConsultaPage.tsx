
"use client";

import SectionTitle from "@/components/SectionTitle";
import ConsultaTramite from "./ConsultaTramite";


export default function ConsultaPage() {

    return (
        <div className="max-w-7xl mx-auto p-6">
            <SectionTitle
                title="Seguir el estado de tu trámite"
                description="Consulte el estado actual de su solicitud fluvial en tiempo real. Ingrese su código de seguimiento para visualizar el progreso de su trámite administrativo."
            />
            {/* Contenido de la sección */}

            <div className="mt-16">
                <ConsultaTramite />
            </div>
        </div>
    );
}