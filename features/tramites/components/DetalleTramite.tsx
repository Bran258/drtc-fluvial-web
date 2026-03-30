import React from 'react';
import {
    FileText,
    ClipboardCheck,
    MessageSquare,
    CheckCircle2,
    User,
    Building2,
    Search,
    ArrowLeft,
    Info,
    Phone,
    CalendarRange
} from 'lucide-react';

const DetalleTramite = () => {
    const pasos = [
        { icon: <FileText size={20} />, label: 'Solicitud', sub: 'PASO 01', active: true },
        { icon: <ClipboardCheck size={20} />, label: 'Validación', sub: 'PASO 02', active: false },
        { icon: <MessageSquare size={20} />, label: 'Evaluación', sub: 'PASO 03', active: false },
        { icon: <CheckCircle2 size={20} />, label: 'Aprobación', sub: 'PASO 04', active: false },
    ];

    const requisitos = [
        { icon: <User className="text-blue-900" />, title: 'DNI del Propietario', desc: 'Documento Nacional de Identidad vigente y legible del titular de la embarcación.' },
        { icon: <Building2 className="text-blue-900" />, title: 'Registro RUC', desc: 'Estado activo y habido ante la SUNAT para personas jurídicas o naturales con negocio.' },
        { icon: <FileText className="text-blue-900" />, title: 'Título de Propiedad', desc: 'Copia certificada que acredite la propiedad legal de la nave o artefacto naval.' },
        { icon: <Search className="text-blue-900" />, title: 'Inspección Técnica', desc: 'Certificado de seguridad fluvial expedido por la autoridad competente en los últimos 6 meses.' },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans bg-gray-50/50">

            {/* Columna Izquierda: Proceso y Requisitos */}
            <div className="lg:col-span-2">

                {/* Sección Etapas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-blue-900 mb-8">Etapas del Proceso</h2>
                    <div className="relative flex justify-between">
                        {/* Línea de fondo */}
                        <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

                        {pasos.map((paso, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${paso.active ? 'bg-blue-950 text-white shadow-lg' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {paso.icon}
                                </div>
                                <span className={`text-sm font-bold ${paso.active ? 'text-blue-900' : 'text-gray-400'}`}>
                                    {paso.label}
                                </span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                                    {paso.sub}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección Requisitos */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-900 mb-8">Requisitos Obligatorios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requisitos.map((req, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-lg h-fit">
                                    {req.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">{req.title}</h3>
                                    <p className="text-sm text-gray-500 leading-snug">{req.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Columna Derecha: Sidebar */}
            <div className="space-y-6">

                {/* Card de Acción */}
                <div className="bg-gray-100/80 p-8 rounded-3xl border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">¿Listo para comenzar?</h3>
                    <p className="text-sm text-gray-600 mb-8">
                        Asegúrese de tener todos los documentos digitalizados en formato PDF antes de iniciar la validación en línea.
                    </p>
                    <div className="space-y-3">
                        <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-950 transition-colors">
                            <User size={18} /> Validar requisitos
                        </button>
                        <button className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 transition-colors">
                            <CalendarRange size={18}  /> Agendar cita presencial
                            
                        </button>
                    </div>
                </div>

                {/* Card Datos Clave */}
                <div className="bg-blue-50 p-8 rounded-3xl">
                    <div className="flex items-center gap-2 text-blue-900 mb-6">
                        <Info size={20} />
                        <h3 className="font-bold uppercase tracking-wide">Datos Clave</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm border-b border-blue-100 pb-2">
                            <span className="text-blue-700">Costo del trámite</span>
                            <span className="font-bold text-blue-900">S/ 145.50</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-blue-100 pb-2">
                            <span className="text-blue-700">Tiempo estimado</span>
                            <span className="font-bold text-blue-900">15 días hábiles</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-blue-700">Vigencia</span>
                            <span className="font-bold text-blue-900">2 años</span>
                        </div>
                    </div>
                </div>

                {/* Footer Ayuda */}
                <div className="flex items-center gap-4 px-4">
                    <div className="bg-gray-200 p-3 rounded-full text-gray-600">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">¿Necesitas Ayuda?</p>
                        <p className="text-lg font-bold text-blue-900 leading-none">0800-123-456</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetalleTramite;