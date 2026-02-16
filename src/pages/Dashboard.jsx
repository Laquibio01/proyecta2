import React, { useState } from 'react';
// Dashboard Component for Proyecta2
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { ChevronRight, ArrowUpRight, Calendar, Bell, FileText, Activity, BookOpen, GraduationCap, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const ShortcutCard = ({ title, desc, icon: Icon, color, path }) => (
        <div onClick={() => navigate(path)} className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 hover:border-primary/30 cursor-pointer transition-all group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${color} bg-opacity-20`}>
                <Icon size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <div>
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-xs text-slate-400">{desc}</p>
            </div>
            <ChevronRight className="ml-auto text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" size={16} />
        </div>
    );

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">

            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto space-y-8">

                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl font-bold text-white tracking-tight">
                                Proyecta<span className="text-primary">2</span>
                            </h1>
                            <div className="text-sm text-slate-400">
                                Ciclo Escolar 2026-1
                            </div>
                        </div>

                        {/* Quick Access Shortcuts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <ShortcutCard
                                title="Expediente"
                                desc="Calificaciones y Faltas"
                                icon={FileText}
                                color="bg-blue-500"
                                path="/dashboard/alumnos/expediente"
                            />
                            <ShortcutCard
                                title="Horario"
                                desc="Clases y Docentes"
                                icon={Calendar}
                                color="bg-purple-500"
                                path="/dashboard/alumnos/horario"
                            />
                            <ShortcutCard
                                title="Referencias"
                                desc="Pagos Universid"
                                icon={Activity}
                                color="bg-emerald-500"
                                path="/dashboard/alumnos/referencias"
                            />
                            <ShortcutCard
                                title="Titulación"
                                desc="Proceso de Egreso"
                                icon={GraduationCap}
                                color="bg-orange-500"
                                path="/dashboard/alumnos/titulacion"
                            />
                        </div>

                        {/* Hero Section - Inscripciones (Visual Banner) */}
                        <div className="relative rounded-3xl overflow-hidden group h-64 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary-dark/80 transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />

                            <div className="relative p-8 h-full flex flex-col justify-center max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-md w-fit mb-4">
                                    <Shield size={12} />
                                    TRÁMITE ACTIVO
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Reinscripciones <span className="text-primary-light">Abiertas</span>
                                </h2>
                                <p className="text-slate-300 mb-6">
                                    El periodo de reinscripciones para el ciclo Enero - Abril 2026 ya está disponible. Consulta tu línea de captura.
                                </p>
                                <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors w-fit flex items-center gap-2">
                                    Ver Procedimiento
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity / Active Services Grid */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Activity size={20} className="text-primary" />
                                Servicios Activos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <DashboardCard title="Avisos y Notificaciones" icon={Bell} color="bg-orange-500" />
                                <DashboardCard title="PIDE 2024 - 2028" icon={FileText} color="bg-blue-500" />
                                <DashboardCard title="Seguro Estudiantil IMSS" icon={Shield} color="bg-red-500" />
                                <DashboardCard title="Servicio Comunitario" icon={Users} color="bg-purple-500" />
                                <DashboardCard title="Becas Internas" icon={BookOpen} color="bg-pink-500" />
                                <DashboardCard title="Titulación" icon={GraduationCap} color="bg-indigo-500" />
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

const DashboardCard = ({ title, icon: Icon, color }) => (
    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-primary/50 hover:to-primary/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        <div className="relative h-full bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between border border-white/5 group-hover:border-primary/20">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className="drop-shadow-md" />
            </div>
            <div>
                <h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{title}</h4>
                <div className="mt-4 flex items-center text-xs font-medium text-slate-500 group-hover:text-primary-light transition-colors uppercase tracking-wider">
                    Acceder <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
