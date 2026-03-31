"use client";
import SectionTitle from "@/components/SectionTitle";
import ContactoForm from "./ContactoForm";


export default function ContactanosPage() {

    return (
        <div className="max-w-7xl mx-auto p-6">
            <SectionTitle
                title="Conectando con la Autoridad Fluvial."
                description="Atención al Ciudadano"
            />
            {/* Contenido de la sección */}

            <div className="mt-8 ">
                <ContactoForm/>
            </div>
        </div>
    );
}
