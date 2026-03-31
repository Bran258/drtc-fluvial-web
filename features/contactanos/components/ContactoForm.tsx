import React from 'react';
import {
    Phone,
    Mail,
    Headphones,
    ChevronDown,
    Send
} from 'lucide-react';
import { ENV } from '@/config/env';

const ContactoForm = () => {

    const correo_atencion = ENV.CORREO_ATENCION;
    const numeroCelular = ENV.NUMERO_CELULAR;
    const correo_mesa_partes = ENV.CORREO_MESA_PARTES;
    return (
        <div className="max-w-7xl mx-auto  bg-slate-50/50 font-sans grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* SECCIÓN IZQUIERDA: Formulario */}
            <div className="lg:col-span-8 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-black text-blue-950 mb-10">Envíanos un mensaje</h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nombre */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nombre Completo</label>
                            <input
                                type="text"
                                placeholder="Ej. Juan Pérez"
                                className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 text-gray-600 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                            />
                        </div>
                        {/* Correo */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Correo Electrónico</label>
                            <input
                                type="email"
                                placeholder="juan.perez@ejemplo.com"
                                className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 text-gray-600 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Asunto */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Asunto</label>
                        <div className="relative">
                            <select className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 appearance-none text-gray-600 focus:ring-2 focus:ring-blue-900 outline-none cursor-pointer">
                                <option>Información General</option>
                                <option>Soporte Técnico</option>
                                <option>Reclamaciones</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mensaje</label>
                        <textarea
                            rows={5}
                            placeholder="Describa su consulta con detalle..."
                            className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 text-gray-600 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Botón Enviar */}
                    <button className="flex items-center justify-center gap-2 bg-[#001F5F] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-blue-950 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                        <Send size={16} /> Enviar Consulta
                    </button>
                </form>
            </div>

            {/* SECCIÓN DERECHA: Información de Contacto */}
            <div className="lg:col-span-4 space-y-6">

                {/* Canales Oficiales */}
                <div className="bg-[#001F5F] text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-lg font-bold mb-8 tracking-tight">Canales Oficiales</h3>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <Phone size={20} className="text-blue-300 mt-1" />
                            <div>
                                <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-1">Central Telefónica</p>
                                <p className="text-sm font-bold">{numeroCelular}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail size={20} className="text-blue-300 mt-1" />
                            <div>
                                <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-1">Mesa de Partes Virtual</p>
                                <p className="text-sm font-bold break-all">{correo_mesa_partes}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Headphones size={20} className="text-blue-300 mt-1" />
                            <div>
                                <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-1">Atención Ciudadana</p>
                                <p className="text-sm font-bold break-all">{correo_atencion}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horario de Atención */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-blue-950 mb-8">Horario de Atención</h3>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                            <span className="text-sm text-gray-500 font-medium">Lunes a Viernes</span>
                            <span className="text-sm font-black text-gray-700">08:30 AM - 05:30 PM</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                            <span className="text-sm text-gray-500 font-medium">Sábados</span>
                            <span className="text-sm font-black text-gray-700">09:00 AM - 01:00 PM</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500 font-medium">Domingos y Feriados</span>
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">Cerrado</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactoForm;