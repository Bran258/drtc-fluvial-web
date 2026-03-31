import React, { useState } from 'react';
import {
    Calendar as CalendarIcon,
    Clock,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Check,
    Info,
    CalendarCheck
} from 'lucide-react';

const ReservaCita = () => {
    const [selectedDate, setSelectedDate] = useState(9);
    const [selectedTime, setSelectedTime] = useState('09:00 AM');

    const hours = [
        { time: '08:30 AM', available: true },
        { time: '09:00 AM', available: true },
        { time: '10:00 AM', available: true },
        { time: '10:30 AM', available: true },
        { time: '11:30 AM', available: false },
        { time: '12:00 PM', available: true },
        { time: '02:30 PM', available: true },
        { time: '03:00 PM', available: true },
    ];

    return (
        <div className="max-w-7xl mx-auto font-sans grid grid-cols-1 lg:grid-cols-12 gap-8 ">

            {/* COLUMNA IZQUIERDA: Formulario */}
            <div className="lg:col-span-8 space-y-8">

                {/* Paso 1: Tipo de Trámite */}
                <section className='bg-white border border-gray-100 shadow-lg p-8'>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#001F5F] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">1</span>
                        <h2 className="text-xl font-bold text-blue-950">Tipo de Trámite</h2>
                    </div>

                    <div className="space-y-2 ">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Seleccione el servicio</label>
                        <div className="relative">
                            <select className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 appearance-none text-gray-700 font-medium focus:ring-2 focus:ring-blue-900 outline-none cursor-pointer">
                                <option>Licencia de Conducir Fluvial - Nueva</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        </div>
                    </div>
                </section>

                {/* Paso 2: Fecha y Horario */}
                <section className="bg-white border border-gray-100 shadow-lg p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="bg-[#001F5F] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">2</span>
                        <h2 className="text-xl font-bold text-blue-950">Fecha y Horario</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Calendario Simple */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-blue-950">Octubre 2024</h3>
                                <div className="flex gap-4">
                                    <ChevronLeft size={20} className="text-gray-400 cursor-pointer" />
                                    <ChevronRight size={20} className="text-gray-400 cursor-pointer" />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 text-center gap-y-4">
                                {['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'].map(d => (
                                    <span key={d} className="text-[9px] font-bold text-gray-300 uppercase">{d}</span>
                                ))}
                                {/* Días placeholder */}
                                {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((day, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDate(day)}
                                        className={`py-2 text-sm font-bold rounded-lg transition-all ${day === selectedDate ? 'bg-[#001F5F] text-white shadow-lg' :
                                                day < 1 ? 'text-gray-200' : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {day > 0 ? day : ''}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Horas */}
                        <div>
                            <h3 className="font-bold text-blue-950 mb-6">Horas Disponibles</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {hours.map((h, i) => (
                                    <button
                                        key={i}
                                        disabled={!h.available}
                                        onClick={() => setSelectedTime(h.time)}
                                        className={`py-3 rounded-xl border text-xs font-bold transition-all ${!h.available ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' :
                                                h.time === selectedTime ? 'bg-[#001F5F] text-white border-transparent' :
                                                    'bg-white text-blue-900 border-blue-100 hover:border-blue-900'
                                            }`}
                                    >
                                        {h.time}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6 flex gap-3 items-start bg-blue-50/50 p-4 rounded-xl">
                                <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                <p className="text-[14px] text-gray-500 leading-tight">
                                    Las citas tienen una duración estimada de 30 minutos. Por favor llegue 10 minutos antes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* COLUMNA DERECHA: Resumen */}
            <div className="lg:col-span-4 space-y-6">

                {/* Card Resumen Azul */}
                <div className="bg-[#001F5F] text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3 mb-8">
                        <CalendarCheck size={24} />
                        <h2 className="text-xl font-bold tracking-tight">Resumen de Cita</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-1">Trámite</p>
                            <p className="font-bold text-sm">Licencia de Conducir Fluvial - Nueva</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-1">Fecha</p>
                                <p className="font-bold text-sm text-white">{selectedDate} Oct, 2024</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-1">Hora</p>
                                <p className="font-bold text-sm text-white">{selectedTime}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-1">Sede Central</p>
                            <p className="font-bold text-sm leading-tight">Dirección Regional de Transportes - Loreto</p>
                        </div>
                    </div>

                    <div className="mt-12 space-y-3">
                        <button className="w-full bg-white text-blue-950 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
                            Confirmar Cita
                        </button>
                        <button className="w-full bg-transparent border border-blue-400 text-blue-200 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-colors">
                            Limpiar Selección
                        </button>
                    </div>
                </div>

                {/* Card Requisitos */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-sm font-bold text-blue-950 mb-6">Requisitos Previos</h3>
                    <ul className="space-y-4">
                        {[
                            'DNI original y copia legalizada.',
                            'Certificado médico de aptitud psicosomática.',
                            'Pago por derecho de trámite realizado.'
                        ].map((text, i) => (
                            <li key={i} className="flex gap-3 items-start text-xs text-gray-500">
                                <Check size={14} className="text-blue-950 mt-0.5 shrink-0" />
                                {text}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-8 text-[10px] font-black text-blue-900 uppercase tracking-widest border-b-2 border-blue-900 pb-1 hover:text-blue-700 transition-all">
                        Ver todos los requisitos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservaCita;