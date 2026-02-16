import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { User, BookOpen, GraduationCap, Phone, MapPin, Calendar, Award, FileText, ChevronDown, ChevronUp, Download, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Expediente = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('calificaciones'); // 'calificaciones' | 'asistencias' | 'boletas' | 'historial'

    // Mock Student Data
    const student = {
        name: 'TIBURCIO "TIBU" GONZÁLEZ',
        matricula: '6523150065',
        career: 'Desarrollo y Gestión de Software',
        grade: '7',
        group: 'IDGS8572N',
        status: 'Regular Ingeniería',
        period: 'ENERO - ABRIL 2026',
        tutor: 'DR. OSCAR JAVIER VALENZUELA GONZÁLEZ',
        shift: 'NOCTURNO',
        phone: '614-174-2322',
        address: 'LIBERTADORES DE AMERICA # 3617 COLONIA U.P. C.P. 31054',
        photo: '/assets/shark_dev.png'
    };

    // Current Grades (Boleta)
    const currentGrades = [
        { subject: 'MATEMÁTICAS PARA INGENIERÍA I', teacher: 'DR. IVÁN JALIL ANTÓN CARREÑO MÁRQUEZ', u1: 10, u2: 9, u3: 10, final: 9.6 },
        { subject: 'METODOLOGÍAS PARA EL DESARROLLO DE PROYECTOS', teacher: 'ING. MARTÍN DANIEL MELÉNDEZ DOMÍNGUEZ', u1: 9, u2: 9, u3: 10, final: 9.3 },
        { subject: 'ARQUITECTURA DE SOFTWARE', teacher: 'ING. ROBERTO AGUIRRE RODRÍGUEZ', u1: 10, u2: 10, u3: 10, final: 10 },
        { subject: 'EXPERIENCIA DE USUARIO', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', u1: 8, u2: 9, u3: 9, final: 8.6 },
        { subject: 'SEGURIDAD INFORMÁTICA', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', u1: 9, u2: 9, u3: 10, final: 9.3 },
        { subject: 'INGLÉS VII', teacher: 'M.E.S. ANTONIO CARRILLO VENEGAS', u1: 10, u2: 9, u3: 9, final: 9.3 },
        { subject: 'ADMINISTRACIÓN DEL TIEMPO', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', u1: 10, u2: 10, u3: 10, final: 10 },
    ];

    // Attendance Data
    const attendance = [
        { subject: 'MATEMÁTICAS PARA INGENIERÍA I', teacher: 'DR. IVÁN JALIL ANTÓN CARREÑO MÁRQUEZ', maxFaults: 11, attended: 16, faults: 0, delays: 0 },
        { subject: 'METODOLOGÍAS PARA EL DESARROLLO DE PROYECTOS', teacher: 'ING. MARTÍN DANIEL MELÉNDEZ DOMÍNGUEZ', maxFaults: 8, attended: 6, faults: 0, delays: 0 },
        { subject: 'ARQUITECTURA DE SOFTWARE', teacher: 'ING. ROBERTO AGUIRRE RODRÍGUEZ', maxFaults: 14, attended: 9, faults: 1, delays: 0 }, // Added 1 fault for variety
        { subject: 'EXPERIENCIA DE USUARIO', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', maxFaults: 8, attended: 0, faults: 0, delays: 0 },
        { subject: 'SEGURIDAD INFORMÁTICA', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', maxFaults: 8, attended: 11, faults: 0, delays: 0 },
        { subject: 'INGLÉS VII', teacher: 'M.E.S. ANTONIO CARRILLO VENEGAS', maxFaults: 14, attended: 10, faults: 2, delays: 1 }, // Added faults/delays
        { subject: 'ADMINISTRACIÓN DEL TIEMPO', teacher: 'ING. MIGUEL ANGEL GUTIERREZ DACA', maxFaults: 8, attended: 4, faults: 0, delays: 0 },
    ];

    // Boletas Data
    const boletas = [
        { period: 'Ene-Abr-26', group: 'IDGSBIS72N' },
        { period: 'Sept-Dic-25', group: 'TIDBIS62M' },
        { period: 'May-Ago-25', group: 'TIDBIS52M' },
        { period: 'Ene-Abr-25', group: 'TIDBIS42M' },
        { period: 'Sept-Dic-24', group: 'TIDBIS32M' },
        { period: 'May-Ago-24', group: 'TIDBIS23M' },
        { period: 'Ene-Abr-24', group: 'TIDBIS13M' },
    ];

    // History Data
    const history = [
        { period: 'SEPTIEMBRE-DICIEMBRE 2025', group: 'TIDBIS52M', grade: 'Sexto', average: 9.8 },
        { period: 'MAYO-AGOSTO 2025', group: 'TIDBIS52M', grade: 'Quinto', average: 9.5 },
        { period: 'ENERO-ABRIL 2025', group: 'TIDBIS42M', grade: 'Cuarto', average: 9.2 },
        { period: 'SEPTIEMBRE-DICIEMBRE 2024', group: 'TIDBIS32M', grade: 'Tercero', average: 9.6 },
    ];

    const getAttendanceColor = (faults, max) => {
        const percentage = (faults / max) * 100;
        if (percentage > 20) return 'bg-red-500';
        if (percentage >= 10) return 'bg-yellow-500';
        return 'bg-green-500';
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

                <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* HEADER & PROFILE */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                                <FileText className="text-primary" />
                                Expediente Académico
                            </h1>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                {/* Photo & Basic Info */}
                                <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full border-4 border-primary/30 overflow-hidden mb-4 shadow-xl">
                                        <img src={student.photo} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-1">{student.name}</h2>
                                    <span className="text-primary font-mono bg-primary/10 px-3 py-1 rounded-full text-sm border border-primary/20">
                                        {student.matricula}
                                    </span>
                                </div>

                                {/* Academic Info */}
                                <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                        <BookOpen size={18} className="text-blue-400" /> Información Escolar
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase tracking-wider">Carrera</span>
                                            <span className="text-white font-medium">{student.career}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase tracking-wider">Situación</span>
                                            <span className="text-green-400 font-medium flex items-center gap-1">
                                                <Award size={14} /> {student.status}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase tracking-wider">Cuatrimestre</span>
                                            <span className="text-white font-medium">{student.period}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase tracking-wider">Grupo</span>
                                            <span className="text-white font-medium">{student.group}</span>
                                        </div>
                                        <div className="md:col-span-2">
                                            <span className="block text-slate-500 text-xs uppercase tracking-wider">Tutor</span>
                                            <span className="text-primary-light font-medium">{student.tutor}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TABS & CONTENT */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
                            {/* Tabs Header */}
                            <div className="flex border-b border-white/5 overflow-x-auto scrollbar-hide">
                                {['calificaciones', 'asistencias', 'boletas', 'historial'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-8 py-4 text-center font-medium transition-colors whitespace-nowrap capitalize
                                            ${activeTab === tab
                                                ? 'bg-primary/20 text-white border-b-2 border-primary'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6">
                                {/* CALIFICACIONES TAB */}
                                {activeTab === 'calificaciones' && (
                                    <div className="animate-fade-in overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="text-slate-400 border-b border-white/10 text-xs uppercase tracking-wider">
                                                    <th className="py-3 px-4">Materia</th>
                                                    <th className="py-3 px-4">Profesor</th>
                                                    <th className="py-3 px-4 text-center">U1</th>
                                                    <th className="py-3 px-4 text-center">U2</th>
                                                    <th className="py-3 px-4 text-center">U3</th>
                                                    <th className="py-3 px-4 text-center">Promedio</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {currentGrades.map((materia, idx) => (
                                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                        <td className="py-4 px-4 font-medium text-white group-hover:text-primary transition-colors">
                                                            {materia.subject}
                                                        </td>
                                                        <td className="py-4 px-4 text-slate-400 text-xs">
                                                            {materia.teacher}
                                                        </td>
                                                        <td className="py-4 px-4 text-center font-mono text-green-400">{materia.u1}</td>
                                                        <td className="py-4 px-4 text-center font-mono text-green-400">{materia.u2}</td>
                                                        <td className="py-4 px-4 text-center font-mono text-green-400">{materia.u3}</td>
                                                        <td className="py-4 px-4 text-center font-bold text-white bg-white/5 rounded-lg">
                                                            {materia.final}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* ASISTENCIAS TAB */}
                                {activeTab === 'asistencias' && (
                                    <div className="animate-fade-in space-y-6">
                                        {/* Legend */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-medium">
                                            <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg border border-green-500/20 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Faltas menores a 10%
                                            </div>
                                            <div className="bg-yellow-500/20 text-yellow-400 px-3 py-2 rounded-lg border border-yellow-500/20 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Faltas entre 10% y 20%
                                            </div>
                                            <div className="bg-red-500/20 text-red-400 px-3 py-2 rounded-lg border border-red-500/20 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Faltas superiores a 20%
                                            </div>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="text-slate-400 border-b border-white/10 text-xs uppercase tracking-wider">
                                                        <th className="py-3 px-4">Materia</th>
                                                        <th className="py-3 px-4">Profesor</th>
                                                        <th className="py-3 px-4 text-center">Límite</th>
                                                        <th className="py-3 px-4 text-center">Asistencias</th>
                                                        <th className="py-3 px-4 text-center">Faltas</th>
                                                        <th className="py-3 px-4 text-center">Retardos</th>
                                                        <th className="py-3 px-4 text-center">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    {attendance.map((materia, idx) => {
                                                        const totalFaults = materia.faults + Math.floor(materia.delays / 3); // 3 delays = 1 fault logic usually
                                                        const statusColor = getAttendanceColor(totalFaults, materia.maxFaults);

                                                        return (
                                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                                <td className="py-3 px-4 font-medium text-white">{materia.subject}</td>
                                                                <td className="py-3 px-4 text-slate-400 text-xs">{materia.teacher}</td>
                                                                <td className="py-3 px-4 text-center text-slate-500">{materia.maxFaults}</td>
                                                                <td className="py-3 px-4 text-center text-white">{materia.attended}</td>
                                                                <td className="py-3 px-4 text-center text-orange-400">{materia.faults}</td>
                                                                <td className="py-3 px-4 text-center text-yellow-400">{materia.delays}</td>
                                                                <td className="py-3 px-4">
                                                                    <div className={`text-center font-bold text-white rounded py-1 ${statusColor}`}>
                                                                        {totalFaults}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-right text-xs text-red-400">* Cada 3 retardos sumarán una falta en la materia</p>
                                    </div>
                                )}

                                {/* BOLETAS TAB */}
                                {activeTab === 'boletas' && (
                                    <div className="animate-fade-in">
                                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                            <div className="bg-primary/20 px-4 py-3 border-b border-white/10 flex items-center gap-2 font-bold text-primary-light">
                                                <FileText size={18} /> Boletas Disponibles
                                            </div>
                                            <div className="divide-y divide-white/5">
                                                {boletas.map((boleta, idx) => (
                                                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                                                        <span className="text-white font-medium">{boleta.period} <span className="text-slate-500 mx-2">|</span> <span className="text-slate-400">{boleta.group}</span></span>
                                                        <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-green-900/20">
                                                            <Download size={14} /> Descargar
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* HISTORIAL TAB */}
                                {activeTab === 'historial' && (
                                    <div className="space-y-4 animate-fade-in">
                                        {history.map((term, idx) => (
                                            <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                                                <div>
                                                    <h4 className="text-white font-bold">{term.period}</h4>
                                                    <div className="flex gap-4 text-sm text-slate-400 mt-1">
                                                        <span>Grupo: {term.group}</span>
                                                        <span>Grado: {term.grade}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block text-xs text-slate-500 uppercase">Promedio</span>
                                                    <span className="text-2xl font-bold text-primary">{term.average}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Expediente;
