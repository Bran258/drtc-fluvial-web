import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor Principal con el azul de la imagen */}
        <div className="relative bg-[#001D4A] rounded-[40px] p-12 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Imagen de fondo sutil (Barco en líneas) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Image 
                src="/images/CTA-bg.png" // Reemplazar con tu asset
                alt="Background Decoration"
                fill
                className="object-contain object-right"
             />
          </div>

          {/* --- LADO IZQUIERDO: Texto y Acción --- */}
          <div className="relative z-10 flex-1">
            <h2 className="text-white text-4xl md:text-[42px] font-black leading-tight mb-6">
              ¿Necesita asistencia <br /> presencial?
            </h2>
            <p className="text-blue-100/70 text-base md:text-lg max-w-md mb-10 leading-relaxed font-medium">
              Agende una cita en nuestras oficinas para recibir atención personalizada de 
              nuestros especialistas en trámites fluviales.
            </p>
            <button className="bg-white text-[#001D4A] px-10 py-4 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors shadow-lg">
              Agendar mi cita ahora
            </button>
          </div>

          {/* --- LADO DERECHO: Panel de Contacto (Glassmorphism) --- */}
          <div className="relative z-10 w-full md:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <div className="space-y-8">
              
              {/* Central Telefónica */}
              <div className="flex items-center gap-5">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Central Telefónica</p>
                  <p className="text-white font-bold text-sm">(01) 411-1111</p>
                </div>
              </div>

              {/* Correo Electrónico */}
              <div className="flex items-center gap-5">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Correo Electrónico</p>
                  <p className="text-white font-bold text-sm underline decoration-white/30 underline-offset-4">
                    consultas@drtcf.gob.pe
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}