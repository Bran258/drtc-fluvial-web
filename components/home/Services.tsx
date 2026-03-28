import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Ship, ClipboardList, RefreshCw, UserCog } from 'lucide-react';

// Tipado base
type Service = {
  title: string;
  description: string;
  icon: any;
  variant?: 'primary' | 'dark' | 'simple';
  action?: string;
  span?: 'col' | 'row';
};

// Configuración (ESCALABLE)
const services: Service[] = [
  {
    title: 'Permisos de navegación',
    description:
      'Obtenga la autorización legal para el tránsito de su embarcación en las cuencas fluviales.',
    icon: Ship,
    variant: 'primary',
    action: 'Iniciar solicitud',
    span: 'col',
  },
  {
    title: 'Empadronamiento de naves',
    description:
      'Registro integral de embarcaciones menores y mayores para control fluvial.',
    icon: ClipboardList,
    variant: 'dark',
    action: 'Registrar Nave',
  },
  {
    title: 'Renovación de permisos',
    description: 'Actualice sus licencias antes de su vencimiento.',
    icon: RefreshCw,
    variant: 'simple',
  },
  {
    title: 'Actualización de datos',
    description: 'Modifique información de contacto o técnica.',
    icon: UserCog,
    variant: 'simple',
  },
];

// Componente reutilizable
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  // VARIANTE GRANDE
  if (service.variant === 'primary') {
    return (
      <div className="md:col-span-2 relative group overflow-hidden rounded-2xl h-[450px] bg-white shadow-sm border border-gray-100">
        <Image
          src="/images/service-bg.png"
          alt={service.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-16 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 p-10 flex flex-col justify-center items-start z-10">
          <div className="bg-[#00338D] p-3 rounded-lg mb-6 shadow-lg">
            <Icon className="text-white w-6 h-6" />
          </div>

          <h3 className="text-2xl font-black text-[#001D4A] mb-4">
            {service.title}
          </h3>

          <p className="text-[#6B769B] max-w-sm mb-8 font-medium">
            {service.description}
          </p>

          <button className="flex items-center gap-2 text-[#00338D] font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all">
            {service.action} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // VARIANTE OSCURA
  if (service.variant === 'dark') {
    return (
      <div className="bg-[#00338D] p-8 rounded-2xl h-[260px] flex flex-col justify-between text-white shadow-lg relative overflow-hidden">
        <div>
          <Icon className="opacity-40 mb-6 w-8 h-8" />

          <h3 className="text-xl font-bold mb-3 leading-tight">
            {service.title}
          </h3>

          <p className="text-blue-100 text-xs leading-relaxed mb-6 opacity-80">
            {service.description}
          </p>
        </div>

        <button className="bg-white text-[#00338D] px-6 py-2.5 rounded-md text-[10px] font-black uppercase tracking-wider w-fit hover:bg-gray-100 transition-colors">
          {service.action}
        </button>

        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>
    );
  }

  // VARIANTE SIMPLE
  return (
    <div className="bg-white p-8 rounded-2xl h-[166px] flex flex-col justify-center shadow-sm border border-gray-100 relative group">
      <div className="flex justify-between items-start mb-2">
        <Icon className="text-[#00338D] w-6 h-6" />
        <ExternalLink className="text-gray-300 group-hover:text-[#00338D] transition-colors w-5 h-5" />
      </div>

      <h3 className="text-[#001D4A] font-bold text-lg mb-1">
        {service.title}
      </h3>

      <p className="text-gray-400 text-xs">{service.description}</p>
    </div>
  );
};

// Componente principal
const FeaturedServices = () => {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[32px] font-black text-[#001D4A] mb-3">
            Nuestros Servicios Destacados
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
            Seleccione el trámite que desea realizar para iniciar el proceso.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Izquierda + principal */}
          <ServiceCard service={services[0]} />

          {/* Columna derecha */}
          <div className="flex flex-col gap-6">
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[2]} />
          </div>

          {/* Inferior */}
          <ServiceCard service={services[3]} />

        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;