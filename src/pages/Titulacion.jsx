import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { GraduationCap, CheckCircle, Clock, FileText, AlertTriangle, Award, BookOpen } from 'lucide-react';

const Titulacion = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const steps = [
        { id: 1, title: 'Servicio Social', status: 'completed', date: 'Dic 2025' },
        { id: 2, title: 'Inglés (B2)', status: 'completed', date: 'Ene 2026' },
        { id: 3, title: 'Estadías', status: 'in-progress', date: 'En curso' },
        { id: 4, title: 'Documentación', status: 'pending', date: '--' },
        { id: 5, title: 'Ceremonia', status: 'locked', date: '--' },
    ];

    const requirements = [
        { id: 1, title: 'Kárdex Completo', status: 'ok', icon: FileText, desc: 'Todas las materias aprobadas.' },
        { id: 2, title: 'No Adeudos', status: 'ok', icon: CheckCircle, desc: 'Biblioteca y Finanzas en orden.' },
        { id: 3, title: 'Pago de Título', status: 'pending', icon: AlertTriangle, desc: 'Pendiente de realizar pago ($2,500).' },
    ];

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Background - Static */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950" />

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                                <GraduationCap className="text-primary" size={32} />
                                Proceso de <span className="text-primary-light">Titulación</span>
                            </h1>
                            <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary-light font-bold text-sm flex items-center gap-2">
                                <Clock size={16} />
                                Generación 2024 - 2026
                            </div>
                        </div>

                        {/* PROGRESS TRACKER (The "Shark Path") */}
                        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                            <h3 className="text-white font-bold text-lg mb-8 text-center">Tu camino a la cima</h3>

                            <div className="relative flex justify-between items-center">
                                {/* Connecting Line */}
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-0"></div>
                                <div className="absolute top-1/2 left-0 h-1 bg-primary -z-0 transition-all duration-1000" style={{ width: '55%' }}></div>

                                {steps.map((step, idx) => {
                                    let circleColor = "bg-slate-800 border-slate-600 text-slate-500";
                                    let icon = <span className="text-sm font-bold">{step.id}</span>;

                                    if (step.status === 'completed') {
                                        circleColor = "bg-green-500 border-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]";
                                        icon = <CheckCircle size={20} />;
                                    } else if (step.status === 'in-progress') {
                                        circleColor = "bg-primary border-primary-light text-white shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-110";
                                        icon = <Clock size={20} className="animate-pulse" />;
                                    } else if (step.status === 'locked') {
                                        circleColor = "bg-slate-900 border-slate-800 text-slate-700";
                                    }

                                    return (
                                        <div key={step.id} className="relative z-10 flex flex-col items-center">
                                            <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${circleColor}`}>
                                                {icon}
                                            </div>
                                            <div className="mt-4 text-center">
                                                <span className={`block font-bold text-sm ${step.status === 'completed' || step.status === 'in-progress' ? 'text-white' : 'text-slate-500'}`}>
                                                    {step.title}
                                                </span>
                                                <span className="text-xs text-slate-500 font-mono">{step.date}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Shark Mascot Decoration */}
                            <img
                                src="/assets/shark_dev.png"
                                alt="Shark"
                                className="absolute bottom-4 right-4 w-24 h-24 opacity-20 transform -rotate-12 pointer-events-none"
                            />
                        </div>

                        {/* STATUS CARDS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {requirements.map((req) => (
                                <div key={req.id} className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-colors group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-lg ${req.status === 'ok' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                            <req.icon size={24} />
                                        </div>
                                        {req.status === 'ok' ? (
                                            <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded uppercase">Completado</span>
                                        ) : (
                                            <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded uppercase">Pendiente</span>
                                        )}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{req.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{req.desc}</p>

                                    {req.status === 'pending' && (
                                        <button className="mt-4 w-full py-2 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-500 rounded-lg text-sm font-bold border border-yellow-600/30 transition-colors">
                                            Ver Detalles
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <div className="bg-gradient-to-r from-blue-900/40 to-primary/20 border border-primary/20 rounded-2xl p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">¡Ya casi eres un Tiburón Graduado! 🦈</h2>
                            <p className="text-slate-300 mb-6">Completa tus estadías y realiza el pago de titulación para desbloquear la fase final.</p>
                            <button className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-xl font-bold text-lg pointer-events-none opacity-50 cursor-not-allowed mx-auto flex items-center gap-2">
                                <Award size={20} />
                                Solicitar Examen Profesional
                            </button>
                            <p className="text-xs text-slate-500 mt-2 italic">Disponible al completar el 100% de créditos</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Titulacion;
