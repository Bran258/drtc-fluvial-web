import { Globe, Share2 } from 'lucide-react';
import Link from 'next/link';

// Tipos
type LinkItem = {
  label: string;
  href: string;
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
      { label: 'Trámites en línea', href: '/tramites' },
      { label: 'TUPA', href: '/tupa' },
      { label: 'Mesa de Partes', href: '/mesa-de-partes' },
      { label: 'Normativa', href: '/normativa' },
    ],
  },
  {
    title: 'Transparencia',
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Términos de Uso', href: '/terminos' },
      { label: 'Portal de Transparencia', href: '/transparencia' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Sede Central',
    content: 'Arequipa 216, Puerto Maldonado 17001',
    isSocial: false,
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
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors text-[#6B769B] text-sm font-medium"
              >
                {link.label}
              </Link>
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