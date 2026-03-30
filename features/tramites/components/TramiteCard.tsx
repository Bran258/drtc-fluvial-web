"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { LucideIcon, ArrowRight } from "lucide-react";

interface TramiteCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  estado: "disponible" | "en_mantenimiento";
  onClick?: () => void;
}

const stateConfig = {
  disponible: {
    label: "Disponible",
    badge: "bg-green-100 text-green-600",
    card:
      "bg-white border-slate-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 active:scale-[0.99]",
    icon:
      "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700",
    button: "bg-slate-900 text-white group-hover:bg-blue-600",
    disabled: false,
  },
  en_mantenimiento: {
    label: "En mantenimiento",
    badge: "bg-gray-200 text-gray-600",
    card: "bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed",
    icon: "bg-gray-100 text-gray-400",
    button: "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70",
    disabled: true,
  },
} as const;

type Estado = keyof typeof stateConfig;

const TramiteCard = ({
  title,
  description,
  icon: Icon,
  estado,
  onClick,
}: TramiteCardProps) => {
  const config = stateConfig[estado as Estado];

  if (!config) {
    return null;
  }

  return (
    <MotionWrapper direction="left">
      <div
        className={`
        group relative
        rounded-2xl p-6
        border
        flex flex-col justify-between
        min-h-[300px]
        transition-all duration-300 ease-out
        ${config.card}
      `}
      >
        {/* TOP */}
        <div>
          <div className="flex items-start justify-between mb-5">
            <div
              className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              transition-all duration-300
              ${config.icon}
            `}
            >
              <Icon size={22} strokeWidth={2.2} />
            </div>

            <span className={`text-[11px] px-2 py-1 rounded-full ${config.badge}`}>
              {config.label}
            </span>
          </div>

          <h3 className="text-[17px] font-semibold text-slate-800 mb-2">
            {title}
          </h3>

          <p className="text-[13.5px] text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-6">
          <button
            onClick={() => {
              if (config.disabled) return;
              onClick?.();
            }}
            disabled={config.disabled}
            className={`
            w-full flex items-center justify-center gap-2
            py-2.5 px-4 rounded-xl
            text-[13.5px] font-medium
            transition-all duration-300
            ${config.button}
          `}
          >
            Ver requisitos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default TramiteCard;