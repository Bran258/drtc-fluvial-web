import Image from 'next/image';

const HeroIdentico = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[600px]">

        {/* --- COLUMNA IZQUIERDA: Texto y Contenido --- */}
        <div className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-16 z-10 bg-white">

          <p className="text-[11px] tracking-[0.2em] font-bold text-[#6B769B] uppercase mb-5">
            AUTORIDAD PORTUARIA REGIONAL
          </p>

          {/* Título usando el Primary Color #00338D */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#00338D] leading-[1.1] mb-8 max-w-xl">
            Gestione sus <br />
            trámites fluviales <br />
            de manera rápida <br />
            y segura
          </h1>

          <p className="text-[#6B769B] text-base md:text-lg mb-12 max-w-lg leading-relaxed font-normal">
            Simplifique su gestión de permisos de navegación y empadronamiento de naves
            de forma digital y eficiente. Un servicio gubernamental diseñado para la
            fluidez del transporte nacional.
          </p>

          {/* Botones basados en tu paleta */}
          <div className="flex flex-wrap gap-3 mb-16">
            {/* Botón Primary #00338D */}
            <button className="bg-[#00338D] text-white px-8 py-3 rounded-sm font-semibold text-sm hover:opacity-90 transition-all shadow-sm">
              Ver trámites
            </button>
            {/* Botón Outlined usando Neutral #F5F5F7 */}
            <button className="bg-[#F5F5F7] text-[#00338D] px-8 py-3 rounded-sm font-semibold text-sm border border-gray-200 hover:bg-gray-200 transition-all">
              Validar requisitos
            </button>
          </div>

          {/* Estadísticas con acentos Primary */}
          <div className="flex gap-12 pt-8 border-t border-gray-100 w-full max-w-xs">
            <div>
              <p className="text-2xl font-bold text-[#00338D]">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-[#6B769B] font-bold">Digitalizado</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00338D]">24/7</p>
              <p className="text-[10px] uppercase tracking-wider text-[#6B769B] font-bold">Disponibilidad</p>
            </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: Imagen con transición --- */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-full">
          <Image
            src="/images/hero.png"
            alt="Muelle con lanchas"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent md:w-1/2" />
        </div>

      </div>
    </section>
  );
};

export default HeroIdentico;