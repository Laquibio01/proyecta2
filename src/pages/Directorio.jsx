import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Phone, User, Building2, Search } from 'lucide-react';

const Directorio = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const directoryData = [
        { ext: '1158', area: 'ADMINISTRACIÓN Y FINANZAS', sub: 'Subdirección y Auxiliar Contable', people: ['Ricardo Guevara Velázquez', 'Imelda Ramírez Carrasco'] },
        { ext: '1144', area: 'SERVICIOS ADMINISTRATIVOS', sub: 'Subdirección', people: ['Carlos Carbajal Ibarra'] },
        { ext: '1165', area: 'RECURSOS HUMANOS', sub: 'Dirección', people: ['César Humberto Quiñonez Araujo'] },
        { ext: '1186', area: 'EXTENSIÓN UNIVERSITARIA', sub: 'Dirección', people: ['Enrique Aldama García'] },
        { ext: '1111', area: 'SISTEMAS', sub: 'Dirección', people: ['Benjamín Cervantes Martínez'] },
        { ext: '1149', area: 'PLANEACIÓN', sub: 'Dirección', people: ['Héctor Chacón Muñoz'] },
        { ext: '1148', area: 'UNIDAD ACADÉMICA BIS', sub: 'Dirección', people: ['Sergio Jesús Carrillo Carballo'] },
        { ext: '1180', area: 'SECRETARÍA ACADÉMICA', sub: 'Subdirección', people: ['Susana Ivonne Bueno Carlos'] },
        { ext: '1116', area: 'DESARROLLO DE NEGOCIOS', sub: 'Dirección', people: ['Esperanza Raquel Moreno Ojeda'] },
        { ext: '1113', area: 'ENERGÍAS RENOVABLES', sub: 'Dirección', people: ['Juan Luis Flores Barragán'] },
        { ext: '1114', area: 'MANTENIMIENTO INDUSTRIAL', sub: 'Dirección', people: ['Edgar José Frías Gutiérrez'] },
        { ext: '1113', area: 'MECATRÓNICA', sub: 'Dirección', people: ['Juan Luis Flores Barragán'] },
        { ext: '1112', area: 'PROCESOS INDUSTRIALES', sub: 'Dirección', people: ['Alonso Chacón Terrazas'] },
        { ext: '1142', area: 'TECNOLOGÍAS DE LA INFORMACIÓN', sub: 'Dirección', people: ['Daniel Aarón León Reza'] },
        { ext: '1132', area: 'VINCULACIÓN', sub: 'Dirección', people: ['Arturo Pascual Chretin Castillo'] },
        { ext: '1157', area: 'VINCULACIÓN', sub: 'Subdirección', people: ['Belma Castillo Meraz'] },
        { ext: '1102', area: 'ESCOLARES', sub: 'Subdirección', people: ['Soledad Chaparro Sánchez'] },
        { ext: '1170', area: 'SERVICIOS GENERALES', sub: 'Subdirección', people: ['Edwing Gabriel Luján Dávila'] },
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
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8 flex items-end justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Phone className="text-primary" />
                                    Directorio UTCH
                                </h1>
                                <p className="text-slate-400">Listado oficial de extensiones y contactos.</p>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {/* Header Row (Hidden on mobile) */}
                            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                <div className="col-span-2">Extensión</div>
                                <div className="col-span-6">Área / Departamento</div>
                                <div className="col-span-4">Personas Asociadas</div>
                            </div>

                            {/* Data Rows */}
                            {directoryData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                        {/* Extension */}
                                        <div className="col-span-2 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Phone size={18} />
                                            </div>
                                            <span className="text-lg font-bold text-white tracking-wide">{item.ext}</span>
                                        </div>

                                        {/* Area */}
                                        <div className="col-span-6">
                                            <div className="flex items-start gap-3">
                                                <Building2 size={18} className="text-slate-500 mt-1 shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-white text-base">{item.area}</h3>
                                                    <p className="text-sm text-slate-400">{item.sub}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* People */}
                                        <div className="col-span-4">
                                            <div className="space-y-1">
                                                {item.people.map((person, pIdx) => (
                                                    <div key={pIdx} className="flex items-center gap-2 text-sm text-slate-300">
                                                        <User size={14} className="text-slate-500" />
                                                        {person}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default Directorio;
