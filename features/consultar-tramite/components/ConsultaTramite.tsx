import React from 'react';
import {
    Search,
    Fingerprint,
    Check,
    Gavel,
    Clock,
    FileText,
    AlertTriangle,
    Layout
} from 'lucide-react';

const ConsultaTramite = () => {
    const steps = [
        { label: 'PENDIENTE', status: 'completed', icon: <Check size={14} /> },
        { label: 'EVALUACIÓN', status: 'completed', icon: <Check size={14} /> },
        { label: 'LEGAL', status: 'current', icon: <Gavel size={14} /> },
        { label: 'APROBADO', status: 'upcoming', icon: <Check size={14} /> },
    ];

    return (
        <div className="max-w-7xl mx-auto  bg-slate-50/30 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LADO IZQUIERDO: Buscador */}
                <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-[13px] font-black text-blue-900 tracking-wider uppercase mb-6">
                        Identificación del Trámite
                    </h2>

                    <div className="relative mb-6">
                        <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Ej. T-2024-001"
                            className="w-full bg-gray-100 border-none rounded-xl py-4 pl-12 pr-4 text-gray-500 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                        />
                    </div>

                    <button className="w-full bg-[#001F5F] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-950 transition-all shadow-lg shadow-blue-900/20 mb-8 uppercase text-sm tracking-widest">
                        Consultar Trámite <Search size={18} />
                    </button>

                    <p className="text-xs text-gray-400 leading-relaxed">
                        ¿Olvidó su código? Revise el correo de confirmación enviado al momento de su registro o acérquese a nuestra sede central.
                    </p>
                </div>

                {/* LADO DERECHO: Estado y Detalles */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Card Principal de Estado */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-900">
                                    <Layout size={20} />
                                </div>
                                <h2 className="text-xl font-black text-blue-900">
                                    Estado del Trámite: <span className="font-medium text-gray-600">T-2024-001</span>
                                </h2>
                            </div>
                            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                En Proceso
                            </span>
                        </div>

                        {/* Stepper */}
                        <div className="relative flex justify-between items-center mb-12 px-4">
                            {/* Líneas de fondo */}
                            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 -translate-y-1/2 z-0"></div>
                            <div className="absolute top-1/2 left-0 w-[66%] h-[3px] bg-[#001F5F] -translate-y-1/2 z-0"></div>

                            {steps.map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${step.status === 'completed' ? 'bg-[#001F5F] text-white shadow-md' :
                                            step.status === 'current' ? 'bg-[#001F5F] text-white ring-4 ring-blue-50' :
                                                'bg-gray-100 text-gray-300'
                                        }`}>
                                        {step.icon}
                                    </div>
                                    <span className={`absolute -bottom-8 text-[9px] font-black whitespace-nowrap tracking-tighter ${step.status === 'upcoming' ? 'text-gray-300' : 'text-blue-950'
                                        }`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Info inferior del card principal */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Última Actualización</p>
                                <p className="text-sm font-black text-gray-700 uppercase">24 de Octubre, 2024 - 15:30</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Oficina Responsable</p>
                                <p className="text-sm font-black text-gray-700">Dirección de Infraestructura Fluvial</p>
                            </div>
                        </div>
                    </div>

                    {/* Fila de Cards de Resumen */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Card Documentos */}
                        <div className="bg-white p-5 rounded-xl border-l-4 border-blue-900 shadow-sm flex gap-4 items-start">
                            <FileText className="text-blue-900 mt-1" size={24} />
                            <div>
                                <h4 className="font-black text-gray-700 text-sm mb-1">Documentos</h4>
                                <p className="text-[11px] text-gray-500 leading-tight">3 de 4 documentos validados correctamente.</p>
                            </div>
                        </div>

                        {/* Card Observaciones */}
                        <div className="bg-white p-5 rounded-xl border-l-4 border-orange-800 shadow-sm flex gap-4 items-start">
                            <AlertTriangle className="text-orange-800 mt-1" size={24} />
                            <div>
                                <h4 className="font-black text-gray-700 text-sm mb-1">Observaciones</h4>
                                <p className="text-[11px] text-gray-500 leading-tight">Ninguna observación crítica detectada hasta el momento.</p>
                            </div>
                        </div>

                        {/* Card Estimado */}
                        <div className="bg-white p-5 rounded-xl border-l-4 border-blue-900 shadow-sm flex gap-4 items-start">
                            <Clock className="text-blue-900 mt-1" size={24} />
                            <div>
                                <h4 className="font-black text-gray-700 text-sm mb-1">Estimado</h4>
                                <p className="text-[11px] text-gray-500 leading-tight">Resolución final estimada en 5 días hábiles.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConsultaTramite;