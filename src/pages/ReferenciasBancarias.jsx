import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { CreditCard, AlertCircle, QrCode } from 'lucide-react';

const ReferenciasBancarias = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const services = [
        { id: 1, name: "REVALIDACIÓN EXTERNA", cost: "366.00", convenio: "01508105" },
        { id: 5, name: "CERTIFICADO PARCIAL DE ESTUDIOS", cost: "243.00", convenio: "01508105" },
        { id: 6, name: "CERTIFICACIÓN DE TITULO", cost: "610.00", convenio: "01508105" },
        { id: 7, name: "REIMPRESIÓN ESTADO DE CUENTA", subtitle: "ESTADO DE CUENTA QUE GENERA PROYECTA CON DETALLE DE PERÍODOS CURSADOS Y PAGOS EFECTUADOS POR COLEGIATURAS Y SEGUROS.", cost: "48.00", convenio: "01508105" },
        { id: 8, name: "EXAMEN A TITULO DE SUFICIENCIA", cost: "243.00", convenio: "01508105" },
        { id: 11, name: "TOEFL ALUMNOS UTCH", subtitle: "EXAMEN TOEFL PARA ALUMNOS Y PERSONAL UTCH", cost: "1275.00", convenio: "01508105" },
        { id: 12, name: "PARLE CURSO INGLÉS ALUMNOS UTCH", subtitle: "CURSO DE INGLÉS CENTRO DE IDIOMAS COMUNIDAD UTCH", cost: "625.00", convenio: "01508105" },
        { id: 13, name: "CONSTANCIA DE ESTUDIOS", subtitle: "Constancia que contiene Nombre, Matrícula, Nivel de estudios, grupo, periodo y horario. NOTA: SI NECESITAS UN DATO ESPECÍFICO EN TU CONSTANCIA O QUE SEA FÍSICA, FAVOR DE COMUNICARLO A escolares@utch.edu.mx", cost: "48.00", convenio: "01509105" },
        { id: 14, name: "REEXPEDICIÓN DE CREDENCIAL", cost: "122.00", convenio: "01508105" },
        { id: 15, name: "CONSTANCIA DE CALIFICACIONES", subtitle: "Constancia que contiene Nombre, Matrícula, Grupo, Turno, Nivel de estudios, Carrera, Ciclo escolar, calificaciones y promedio general. NOTA: SI NECESITAS QUE TU CONSTANCIA SEA FÍSICA, FAVOR DE COMUNICARLO A escolares@utch.edu.mx", cost: "48.00", convenio: "01509105" },
    ];

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Background - Static */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950" />

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto space-y-6">

                        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                            <CreditCard className="text-primary" />
                            Referencias <span className="font-light text-slate-400">Bancarias</span>
                        </h1>

                        {/* INFO BOX */}
                        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-blue-400 font-bold text-lg mb-2 flex items-center gap-2">
                                <AlertCircle size={20} /> Info
                            </h3>
                            <div className="space-y-1 text-sm font-medium">
                                <p className="text-green-500">La boleta la puedes descargar sin costo desde tu cuenta proyecta.</p>
                                <p className="text-red-400">Estas referencias tienen de fecha límite el día de hoy.</p>
                                <p className="text-red-400">Las referencias son personales.</p>
                            </div>
                        </div>

                        {/* CARDS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <div key={service.id} className="bg-slate-900 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-primary/50">
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="font-mono text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">#{service.id}</span>
                                            <span className="font-mono text-slate-400 text-xs">Conv: {service.convenio}</span>
                                        </div>

                                        <h3 className="text-white font-bold text-lg leading-tight mb-2">{service.name}</h3>

                                        {service.subtitle && (
                                            <p className="text-xs text-slate-400 mb-4 line-clamp-3">
                                                {service.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-500 uppercase">Costo</span>
                                            <span className="text-xl font-bold text-green-400">${service.cost}</span>
                                        </div>
                                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-blue-900/20">
                                            <QrCode size={16} />
                                            Generar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReferenciasBancarias;
