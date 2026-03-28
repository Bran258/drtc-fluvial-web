import { Globe, Share2 } from 'lucide-react';

// Tipos
type LinkItem = {
  label: string;
};

type Section = {
  title: string;
  links?: LinkItem[];
  content?: string;
  isSocial?: boolean;
};

// Configuración (editable sin tocar JSX)
const sections: Section[] = [
  {
    title: 'Enlaces Rápidos',
    links: [
      { label: 'Trámites en línea' },
      { label: 'TUPA' },
      { label: 'Mesa de Partes' },
      { label: 'Normativa' },
    ],
  },
  {
    title: 'Transparencia',
    links: [
      { label: 'Privacidad' },
      { label: 'Términos de Uso' },
      { label: 'Portal de Transparencia' },
      { label: 'Contacto' },
    ],
  },
  {
    title: 'Sede Central',
    content: 'Av. Los Próceres 123, Iquitos - Loreto, Perú',
    isSocial: true,
  },
];

// Subcomponente reutilizable
const FooterSection = ({ section }: { section: Section }) => {
  return (
    <div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-white">
        {section.title}
      </h4>

      {/* Lista */}
      {section.links && (
        <ul className="space-y-4 text-sm font-medium text-[#6B769B]">
          {section.links.map((link) => (
            <li
              key={link.label}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}

      {/* Contenido */}
      {section.content && (
        <>
          <p className="text-[#6B769B] text-sm mb-6">
            {section.content}
          </p>

          {section.isSocial && (
            <div className="flex gap-4">
              <Share2 className="w-5 h-5 text-[#6B769B] hover:text-white cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-[#6B769B] hover:text-white cursor-pointer transition-colors" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Componente principal
const Footer = () => {
  return (
    <footer className="bg-[#0A0D1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Columna fija (branding) */}
          <div className="space-y-6">
            <h3 className="text-xl font-black tracking-tight">
              DRTC Fluvial
            </h3>

            <p className="text-[#6B769B] text-sm leading-relaxed max-w-[240px]">
              Dirección Regional de Transportes y Comunicaciones. Entidad encargada de la infraestructura y regulación del transporte fluvial en la región.
            </p>
          </div>

          {/* Columnas dinámicas */}
          {sections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}

        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col items-center">
          <p className="text-[#6B769B] text-[11px] font-medium tracking-wide text-center">
            © {new Date().getFullYear()}  Dirección Regional de Transportes y Comunicaciones - DRTC Fluvial. Gobierno del Perú.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;