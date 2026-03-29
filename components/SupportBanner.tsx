"use client";

import React from "react";
import MotionWrapper from "./MotionWrapper";


const SupportBanner = () => {
    return (
        <MotionWrapper>
            <div className="bg-[#002855] text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 relative overflow-hidden">

                {/* Contenido de Texto */}
                <div className="z-10 md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        ¿No encuentra su trámite?
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
                        Nuestro equipo técnico está disponible para orientarle sobre procesos específicos no listados en el catálogo digital.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-[#002855] px-6 py-2.5 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                            Contactar Soporte
                        </button>

                        <button className="border border-white/30 bg-transparent text-white px-6 py-2.5 rounded-md font-semibold hover:bg-white/10 transition-colors">
                            Ver Guía de Trámites
                        </button>
                    </div>
                </div>

                {/* Icono */}
                <div className="hidden md:flex items-center justify-center opacity-20 shrink-0 md:w-auto">
                    <div className="border-4 border-white rounded-xl p-6">
                        <span className="text-7xl font-bold">?</span>
                    </div>
                </div>

            </div>
        </MotionWrapper>
    );
};

export default SupportBanner;