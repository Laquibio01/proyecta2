import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { useParams } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';

const SectionPage = () => {
    const { section, subsection } = useParams();
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    const formatTitle = (str) => {
        if (!str) return 'Sección';
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
            </div>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8 animate-fade-in">
                            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <FolderOpen className="text-primary" />
                                {formatTitle(subsection || section)}
                            </h1>
                            <p className="text-slate-400">
                                {formatTitle(section)} / <span className="text-primary-light">{formatTitle(subsection)}</span>
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center animate-fade-in delay-100">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 mb-6">
                                <FolderOpen size={40} className="text-slate-500" />
                            </div>
                            <h2 className="text-xl font-medium text-white mb-2">Contenido de la Sección</h2>
                            <p className="text-slate-400 max-w-md mx-auto">
                                Esta es la página oficial para la sección <strong>{formatTitle(subsection)}</strong>.
                                Aquí se mostraría el contenido específico de este módulo.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SectionPage;
