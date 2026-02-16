import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Scale, AlertTriangle, FileText, CheckCircle } from 'lucide-react';

const Reglamentos = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const chapters = [
        {
            title: "Capítulo I: Disposiciones Generales",
            articles: [
                { id: "Artículo 1", text: "El presente reglamento tiene por objeto regular las relaciones escolares entre la Universidad Tecnológica de Chihuahua y sus alumnos." },
                { id: "Artículo 2", text: "Son alumnos de la Universidad quienes habiendo cumplido los procedimientos de admisión, se encuentren inscritos en alguno de los programas educativos." }
            ]
        },
        {
            title: "Capítulo II: De los Derechos y Obligaciones",
            articles: [
                { id: "Artículo 10", text: "Recibir un trato respetuoso por parte de todos los miembros de la comunidad universitaria." },
                { id: "Artículo 12", text: "Asistir puntualmente a sus clases y cumplir con las actividades académicas establecidas." }
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
            </div>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <Scale className="text-primary" />
                                Reglamento Académico
                            </h1>
                            <p className="text-slate-400">Normativa vigente para el ciclo escolar actual.</p>
                        </div>

                        <div className="space-y-8">
                            {/* Standard Chapters */}
                            {chapters.map((chapter, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <FileText size={20} className="text-primary-light" />
                                        {chapter.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {chapter.articles.map((art, aIdx) => (
                                            <div key={aIdx} className="pl-4 border-l-2 border-slate-700">
                                                <span className="font-bold text-slate-300 block mb-1">{art.id}</span>
                                                <p className="text-slate-400 text-sm leading-relaxed">{art.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* SPECIAL CLAUSE: Artículo 404 */}
                            <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-8 backdrop-blur-md animate-pulse-slow relative overflow-hidden group hover:bg-red-500/20 transition-all duration-500">
                                <div className="absolute -right-10 -top-10 text-red-500/10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <AlertTriangle size={200} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="text-red-500 w-8 h-8 md:w-10 md:h-10 animate-bounce" />
                                        <h2 className="text-3xl md:text-4xl font-black text-red-500 tracking-wider uppercase drop-shadow-lg">
                                            Artículo 404
                                        </h2>
                                    </div>

                                    <p className="text-xl md:text-3xl font-bold text-red-400 leading-tight md:leading-snug text-center py-4 border-y-2 border-red-500/30">
                                        "EN CASO DE SER NECESARIO LA UTCH BIS PUEDE SER DEMOLIDA Y SUSTITUIDA POR UN OXXO"
                                    </p>

                                    <div className="mt-4 flex justify-end">
                                        <span className="text-xs text-red-400/60 uppercase tracking-widest font-mono">
                                            // CLÁUSULA IRREVOCABLE //
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reglamentos;
