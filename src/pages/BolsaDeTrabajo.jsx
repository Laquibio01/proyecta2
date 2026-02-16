import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Briefcase, MapPin, GraduationCap, Search, Filter, Clock, DollarSign, Building2, CheckCircle } from 'lucide-react';

const BolsaDeTrabajo = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Filters State
    const [filters, setFilters] = useState({
        types: [],
        locations: [],
        careers: []
    });

    // Mock Data
    const jobs = [
        {
            id: 1,
            title: 'PRACTICANTE DE RH',
            type: 'Práctica',
            company: 'DISTRIBUCIONES INTERNACIONALES AMERICA S.A. DE C.V.',
            logo: '/assets/shark_rh.png', // User provided image 1
            description: [
                'Apoyo en área de recursos humanos',
                'Elaboración de pre nómina',
                'Reclutamiento y selección',
                'Atención al personal y proveedores',
                'Elaboración de archivos y cursos'
            ],
            requirements: [
                'Sin problema de transporte',
                'Habilidad para hablar',
                'Trabajo bajo presión',
                'Ganas de aprender'
            ],
            schedule: '8:00 AM A 12:00 PM',
            salary: '$6,000.00',
            location: 'Chihuahua',
            career: 'Desarrollo de Negocios',
            color: 'bg-orange-500' // Orange for Practice
        },
        {
            id: 2,
            title: 'INGENIERO DE SOFTWARE JR',
            type: 'Empleo',
            company: 'TechSolutions Mexico',
            logo: '/assets/shark_dev.png', // User provided image 2
            description: [
                'Desarrollo de aplicaciones web (React/Node)',
                'Mantenimiento de bases de datos',
                'Colaboración con equipos ágiles'
            ],
            requirements: [
                'Inglés intermedio/avanzado',
                'Conocimiento en JavaScript'
            ],
            schedule: '9:00 AM A 5:00 PM',
            salary: '$18,000.00',
            location: 'Bis',
            career: 'Tecnologías De La Inf. Y Com',
            color: 'bg-blue-600' // Blue for Job
        },
        {
            id: 3,
            title: 'TÉCNICO EN MANTENIMIENTO',
            type: 'Estadía',
            company: 'Manufacturas del Norte',
            logo: '/assets/shark_mt.png', // User provided image 3
            description: [
                'Mantenimiento preventivo a maquinaria',
                'Reporte de fallas'
            ],
            requirements: [
                'Disponibilidad de horario',
                'Proactivo'
            ],
            schedule: '7:00 AM A 3:00 PM',
            salary: '$4,500.00 (Apoyo)',
            location: 'Chihuahua',
            career: 'Mantenimiento',
            color: 'bg-purple-500' // Purple for Stay
        }
    ];

    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filters.types.length === 0 || filters.types.includes(job.type);
        const matchesLocation = filters.locations.length === 0 || filters.locations.includes(job.location);
        const matchesCareer = filters.careers.length === 0 || filters.careers.includes(job.career);

        return matchesSearch && matchesType && matchesLocation && matchesCareer;
    });

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
            </div>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                <Briefcase className="text-primary" />
                                Bolsa de Trabajo
                            </h1>
                            <p className="text-slate-400">Encuentra tu próxima oportunidad profesional.</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* FILTERS SIDEBAR */}
                            <div className="w-full lg:w-64 shrink-0 space-y-6">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Palabras clave..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                {/* Type Filter */}
                                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Briefcase size={16} className="text-blue-400" /> Tipo vacante
                                    </h3>
                                    <div className="space-y-2">
                                        {['Práctica', 'Empleo', 'Estadía'].map(type => (
                                            <label key={type} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.types.includes(type)}
                                                    onChange={() => toggleFilter('types', type)}
                                                    className="rounded border-slate-600 bg-slate-800 text-primary focus:ring-primary"
                                                />
                                                <span className="text-slate-400 group-hover:text-white transition-colors">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Location Filter */}
                                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <MapPin size={16} className="text-green-400" /> Ubicación
                                    </h3>
                                    <div className="space-y-2">
                                        {['Chihuahua', 'Ojinaga', 'Cuauhtémoc', 'Bis'].map(loc => (
                                            <label key={loc} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.locations.includes(loc)}
                                                    onChange={() => toggleFilter('locations', loc)}
                                                    className="rounded border-slate-600 bg-slate-800 text-primary focus:ring-primary"
                                                />
                                                <span className="text-slate-400 group-hover:text-white transition-colors">{loc}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Career Filter */}
                                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <GraduationCap size={16} className="text-red-400" /> Carrera
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        {['Desarrollo de Negocios', 'Energías Renovables', 'Mantenimiento', 'Mecatrónica', 'Tecnologías De La Inf. Y Com'].map(career => (
                                            <label key={career} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.careers.includes(career)}
                                                    onChange={() => toggleFilter('careers', career)}
                                                    className="rounded border-slate-600 bg-slate-800 text-primary focus:ring-primary"
                                                />
                                                <span className="text-slate-400 group-hover:text-white transition-colors truncate">{career}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* JOBS LIST */}
                            <div className="flex-1 space-y-6">
                                <div className="flex justify-between items-center text-sm text-slate-400">
                                    <span>Vacantes encontradas</span>
                                    <span>{filteredJobs.length} Resultados obtenidos</span>
                                </div>

                                {filteredJobs.map(job => (
                                    <div key={job.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg group">
                                        {/* Header Bar */}
                                        <div className={`${job.color} px-6 py-2`}>
                                            <h3 className="font-bold text-white uppercase tracking-wide">{job.title}</h3>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* Logo Area */}
                                                <div className="w-full md:w-48 shrink-0 flex items-center justify-center bg-slate-900 rounded-lg h-48 overflow-hidden">
                                                    {job.logo ? (
                                                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Building2 size={60} className="text-slate-400" />
                                                    )}
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 space-y-4">
                                                    <div>
                                                        <div className="flex items-center gap-2 text-slate-300 font-medium mb-1">
                                                            <Building2 size={16} className="text-primary" />
                                                            Empresa: {job.company}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                                                <Filter size={14} className="text-slate-400" /> Descripción:
                                                            </h4>
                                                            <ul className="list-disc list-inside text-slate-400 space-y-1">
                                                                {job.description.map((desc, i) => (
                                                                    <li key={i}>{desc}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                                                <CheckCircle size={14} className="text-slate-400" /> Requisitos:
                                                            </h4>
                                                            <ul className="list-disc list-inside text-slate-400 space-y-1">
                                                                {job.requirements.map((req, i) => (
                                                                    <li key={i}>{req}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-6 items-center justify-between">
                                                        <div className="flex flex-wrap gap-6 text-sm">
                                                            <div className="flex items-center gap-2 text-slate-300">
                                                                <Clock size={16} className="text-green-400" />
                                                                <div>
                                                                    <span className="block text-xs text-slate-500">Horario</span>
                                                                    {job.schedule}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-slate-300">
                                                                <DollarSign size={16} className="text-yellow-400" />
                                                                <div>
                                                                    <span className="block text-xs text-slate-500">Beca/Sueldo</span>
                                                                    {job.salary}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-primary/20">
                                                            Ver más
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BolsaDeTrabajo;
