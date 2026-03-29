"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Ship,
  ClipboardList,
  RefreshCw,
  UserCog,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "../MotionWrapper";

/* =======================
   TYPES
======================= */

type ServiceVariant = "primary" | "dark" | "simple";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: ServiceVariant;
  action: string;
  href: string;
};

/* =======================
   DATA
======================= */

const services: Service[] = [
  {
    title: "Permisos de navegación",
    description:
      "Obtenga la autorización legal para el tránsito de su embarcación en las cuencas fluviales.",
    icon: Ship,
    variant: "primary",
    action: "Ver requisitos",
    href: "/tramites/permiso-navegacion",
  },
  {
    title: "Empadronamiento de naves",
    description:
      "Registro integral de embarcaciones menores y mayores para control fluvial.",
    icon: ClipboardList,
    variant: "dark",
    action: "Ver requisitos",
    href: "/tramites/empadronamiento-naves",
  },
  {
    title: "Renovación de permisos",
    description: "Actualice sus licencias antes de su vencimiento.",
    icon: RefreshCw,
    variant: "simple",
    action: "Ver requisitos",
    href: "/tramites/renovacion-permisos",
  },
  {
    title: "Actualización de datos",
    description: "Modifique información de contacto o técnica.",
    icon: UserCog,
    variant: "simple",
    action: "Ver requisitos",
    href: "/tramites/actualizacion-datos",
  },
];

/* =======================
   CARD VARIANTS
======================= */

const PrimaryCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (

    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl h-[450px] bg-white shadow-sm border border-gray-100">
      <Image
        src="/images/service-bg.png"
        alt={service.title}
        fill
        priority
        className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 p-10 flex flex-col justify-center z-10">
        <div className="bg-[#00338D] p-3 rounded-lg mb-6 shadow-lg w-fit">
          <Icon className="text-white w-6 h-6" />
        </div>

        <h3 className="text-2xl font-black text-[#001D4A] mb-4">
          {service.title}
        </h3>

        <p className="text-[#6B769B] max-w-sm mb-8 font-medium">
          {service.description}
        </p>

        <Link
          href={service.href}
          className="flex items-center gap-2 text-[#00338D] font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all"
        >
          {service.action}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const DarkCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-[#00338D] p-8 rounded-2xl h-[260px] flex flex-col justify-between text-white shadow-lg relative overflow-hidden">
      <div>
        <Icon className="w-8 h-8 mb-6 opacity-90" />

        <h3 className="text-xl font-bold mb-3">{service.title}</h3>

        <p className="text-blue-100 text-xs opacity-80">
          {service.description}
        </p>
      </div>

      <Link
        href={service.href}
        className="flex items-center gap-2 bg-white text-[#00338D] px-6 py-2.5 rounded-md text-[10px] font-black uppercase tracking-wider w-fit hover:bg-gray-100 transition"
      >
        {service.action}
        <ArrowRight size={14} />
      </Link>

      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl" />
    </div>
  );
};

const SimpleCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="relative bg-white p-8 rounded-2xl h-[166px] flex flex-col justify-center shadow-sm border border-gray-100 transition hover:shadow-md">

      {/* ICON */}
      <div className="flex items-start mb-3">
        <Icon className="text-[#00338D] w-6 h-6" />
      </div>

      {/* TITLE */}
      <h3 className="text-[#001D4A] font-bold text-lg mb-1">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-xs mb-4">
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href={service.href}
        className="
          relative inline-flex items-center gap-2
          text-[#00338D] font-extrabold text-xs uppercase tracking-widest
          group
        "
      >
        {service.action}
        <ArrowRight size={14} />

        {/* HOVER LINE SOLO EN LINK */}
        <span
          className="
            absolute left-0 -bottom-1
            h-[2px] w-0 bg-[#00338D]
            transition-all duration-300
            group-hover:w-3/6
          "
        />
      </Link>
    </div>
  );
};

/* =======================
   CARD SELECTOR
======================= */

const cardMap = {
  primary: PrimaryCard,
  dark: DarkCard,
  simple: SimpleCard,
} as const;

const ServiceCard = ({ service }: { service: Service }) => {
  const Component = cardMap[service.variant];
  return <Component service={service} />;
};

/* =======================
   MAIN COMPONENT
======================= */

export default function FeaturedServices() {
  return (
    <MotionWrapper direction="right">
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <header className="mb-12">
            <h2 className="text-[32px] font-black text-[#001D4A] mb-3">
              Nuestros Servicios Destacados
            </h2>

            <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
              Seleccione el trámite que desea realizar para iniciar el proceso.
            </p>
          </header>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard service={services[0]} />

            <div className="flex flex-col gap-6">
              <ServiceCard service={services[1]} />
              <ServiceCard service={services[2]} />
            </div>

            <ServiceCard service={services[3]} />
          </div>

        </div>
      </section>
    </MotionWrapper >
  );
}