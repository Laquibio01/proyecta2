import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Calendar, Clock, User, MapPin, Edit, Save, X, Check } from 'lucide-react';

const Horario = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null); // { dayIdx, timeIdx, currentData }

    // Initial Data
    const initialSchedule = {
        0: { // Lunes
            1: { subject: "ADMINISTRACIÓN DEL TIEMPO", teacherCode: "MG", color: "bg-blue-600" },
            2: { subject: "METODOLOGÍAS PARA EL D...", teacherCode: "MM", color: "bg-purple-600" },
            3: { subject: "METODOLOGÍAS PARA EL D...", teacherCode: "MM", color: "bg-purple-600" },
            4: { subject: "ARQUITECTURAS DE SOFTWARE", teacherCode: "RA", color: "bg-orange-600" },
            5: { subject: "ARQUITECTURAS DE SOFTWARE", teacherCode: "RA", color: "bg-orange-600" },
        },
        1: { // Martes
            0: { subject: "MATEMÁTICAS PARA ING. I", teacherCode: "IC", color: "bg-green-600" },
            1: { subject: "MATEMÁTICAS PARA ING. I", teacherCode: "IC", color: "bg-green-600" },
            2: { subject: "SEGURIDAD INFORMÁTICA", teacherCode: "MG", color: "bg-red-600" },
            3: { subject: "MATEMÁTICAS PARA ING. I", teacherCode: "IC", color: "bg-green-600" },
            4: { subject: "MATEMÁTICAS PARA ING. I", teacherCode: "IC", color: "bg-green-600" },
            5: { subject: "SEGURIDAD INFORMÁTICA", teacherCode: "MG", color: "bg-red-600" },
        },
        2: { // Miércoles
            1: { subject: "SEGURIDAD INFORMÁTICA", teacherCode: "MG", color: "bg-red-600" },
            2: { subject: "ARQUITECTURAS DE SOFTWARE", teacherCode: "RA", color: "bg-orange-600" },
            3: { subject: "EXPERIENCIA DE USUARIO", teacherCode: "MG", color: "bg-indigo-600" },
            4: { subject: "EXPERIENCIA DE USUARIO", teacherCode: "MG", color: "bg-indigo-600" },
            5: { subject: "EXPERIENCIA DE USUARIO", teacherCode: "MG", color: "bg-indigo-600" },
        },
        3: { // Jueves
            1: { subject: "IDIOMAS VI", teacherCode: "AC", color: "bg-pink-600" },
            2: { subject: "IDIOMAS VI", teacherCode: "AC", color: "bg-pink-600" },
            3: { subject: "IDIOMAS VI", teacherCode: "AC", color: "bg-pink-600" },
            4: { subject: "ADMINISTRACIÓN DEL TIEMPO", teacherCode: "MG", color: "bg-blue-600" },
            5: { subject: "ADMINISTRACIÓN DEL TIEMPO", teacherCode: "MG", color: "bg-blue-600" },
        },
        4: { // Viernes
            1: { subject: "ARQUITECTURAS DE SOFTWARE", teacherCode: "RA", color: "bg-orange-600" },
            2: { subject: "ARQUITECTURAS DE SOFTWARE", teacherCode: "RA", color: "bg-orange-600" },
            3: { subject: "METODOLOGÍAS PARA EL D...", teacherCode: "MM", color: "bg-purple-600" },
            4: { subject: "IDIOMAS VI", teacherCode: "AC", color: "bg-pink-600" },
            5: { subject: "IDIOMAS VI", teacherCode: "AC", color: "bg-pink-600" },
        }
    };

    const [scheduleData, setScheduleData] = useState(initialSchedule);

    const timeSlots = [
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
        "20:00 - 21:00",
        "21:00 - 22:00"
    ];

    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    // Teachers Mapping
    const teachers = {
        "IC": "DR. IVÁN JALIL ANTÓN CARREÑO MÁRQUEZ",
        "MG": "ING. MIGUEL ANGEL GUTIERREZ BACA",
        "MM": "ING. MARTÍN DANIEL MELÉNDEZ DOMÍNGUEZ",
        "RA": "ING. ROBERTO AGUIRRE RODRÍGUEZ",
        "AC": "M.E.S. ANTONIO CARRILLO VENEGAS"
    };

    const handleSlotClick = (dayIdx, timeIdx, currentData) => {
        if (!isEditing) return;
        setSelectedSlot({
            dayIdx,
            timeIdx,
            subject: currentData?.subject || '',
            teacherCode: currentData?.teacherCode || 'MG'
        });
    };

    const saveSlotChange = (newSubject, newTeacher) => {
        if (!selectedSlot) return;

        setScheduleData(prev => ({
            ...prev,
            [selectedSlot.dayIdx]: {
                ...prev[selectedSlot.dayIdx],
                [selectedSlot.timeIdx]: {
                    subject: newSubject,
                    teacherCode: newTeacher,
                    color: "bg-slate-700" // Default color for modified slots
                }
            }
        }));
        setSelectedSlot(null);
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
                    <div className="max-w-full mx-auto">
                        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Clock className="text-primary" />
                                    Horario de Clases
                                </h1>
                                <p className="text-slate-400">Grupo: <span className="text-white font-mono bg-white/10 px-2 rounded">IDGSBIS72N</span> | Periodo: Ene-Abr 2026</p>
                            </div>

                            <div className="flex gap-3">
                                <div className="hidden md:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/10">
                                    <User size={16} className="text-primary" />
                                    <span className="text-slate-400">Tutor:</span>
                                    <span className="text-white font-medium">OSCAR JAVIER VALENZUELA GONZÁLEZ</span>
                                </div>

                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg ${isEditing ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-primary text-white hover:bg-primary-dark/90'}`}
                                >
                                    {isEditing ? <><Save size={16} /> Guardar</> : <><Edit size={16} /> Modificar</>}
                                </button>
                            </div>
                        </div>

                        {/* SCHEDULE GRID */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl overflow-x-auto">
                            <div className="min-w-[1000px]">
                                {/* Header Row */}
                                <div className="grid grid-cols-[100px_repeat(5,1fr)] bg-slate-900 border-b border-white/10">
                                    <div className="p-4 flex items-center justify-center border-r border-white/10">
                                        <Clock size={20} className="text-slate-500" />
                                    </div>
                                    {days.map(day => (
                                        <div key={day} className="p-4 text-center font-bold text-white border-r border-white/10 last:border-r-0 uppercase tracking-wider bg-white/5">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Body Rows */}
                                {timeSlots.map((time, timeIdx) => (
                                    <div key={timeIdx} className="grid grid-cols-[100px_repeat(5,1fr)] border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                                        {/* Time Column */}
                                        <div className="p-2 border-r border-white/10 flex items-center justify-center text-xs font-mono text-slate-400 bg-slate-900/30">
                                            {time}
                                        </div>

                                        {/* Days Columns */}
                                        {Array.from({ length: 5 }).map((_, dayIdx) => {
                                            const classInfo = scheduleData[dayIdx]?.[timeIdx];

                                            return (
                                                <div
                                                    key={dayIdx}
                                                    onClick={() => handleSlotClick(dayIdx, timeIdx, classInfo)}
                                                    className={`p-1 border-r border-white/10 last:border-r-0 min-h-[100px] relative
                                                        ${isEditing ? 'cursor-pointer hover:bg-white/10 border-dashed border-primary/30' : ''}
                                                    `}
                                                >
                                                    {isEditing && (
                                                        <div className="absolute top-1 right-1 z-20 text-white/50 bg-black/50 rounded-full p-1 opacity-50 hover:opacity-100">
                                                            <Edit size={10} />
                                                        </div>
                                                    )}

                                                    {classInfo ? (
                                                        <div className={`h-full rounded-lg p-3 ${classInfo.color} shadow-lg hover:brightness-110 transition-all cursor-default flex flex-col justify-between group relative overflow-hidden`}>
                                                            <div className="relative z-10">
                                                                <div className="font-bold text-white text-sm leading-tight mb-1">
                                                                    {classInfo.subject}
                                                                </div>
                                                                <div className="text-[10px] text-white/80 uppercase font-medium flex items-center gap-1">
                                                                    <User size={10} />
                                                                    {teachers[classInfo.teacherCode]}
                                                                </div>
                                                            </div>
                                                            {/* Background decoration */}
                                                            <div className="absolute -right-2 -bottom-2 text-white/10 transform rotate-12 group-hover:scale-110 transition-transform">
                                                                <Clock size={40} />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="h-full flex items-center justify-center opacity-10">
                                                            <span className="text-slate-500 text-2xl font-black">−</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>

                {/* EDIT MODAL */}
                {selectedSlot && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl scale-100">
                            <h3 className="text-xl font-bold text-white mb-4">Editar Clase</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Materia</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedSlot.subject}
                                        id="edit-subject"
                                        className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Profesor (Código)</label>
                                    <select
                                        defaultValue={selectedSlot.teacherCode}
                                        id="edit-teacher"
                                        className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary"
                                    >
                                        {Object.entries(teachers).map(([code, name]) => (
                                            <option key={code} value={code}>{code} - {name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => setSelectedSlot(null)}
                                    className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => {
                                        const subj = document.getElementById('edit-subject').value;
                                        const teach = document.getElementById('edit-teacher').value;
                                        saveSlotChange(subj, teach);
                                    }}
                                    className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Horario;
