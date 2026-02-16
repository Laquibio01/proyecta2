import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, X, Clock } from 'lucide-react';

const Calendario = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Start Feb 2026

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventType, setNewEventType] = useState('academic');

    // Initial Events
    const initialEvents = {
        '2026-02-02': [{ title: 'Inicio de Cuatrimestre', type: 'academic', color: 'bg-green-500' }],
        '2026-02-14': [{ title: 'Día de la Amistad', type: 'holiday', color: 'bg-pink-500' }],
        '2026-02-23': [{ title: 'Inicio de Evaluaciones', type: 'exam', color: 'bg-orange-500' }],
        '2026-02-27': [{ title: 'Consejo Técnico', type: 'admin', color: 'bg-blue-500' }],
    };

    const [events, setEvents] = useState(() => {
        const saved = localStorage.getItem('utch_calendar_events');
        return saved ? JSON.parse(saved) : initialEvents;
    });

    useEffect(() => {
        localStorage.setItem('utch_calendar_events', JSON.stringify(events));
    }, [events]);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    };

    const handleDayClick = (day) => {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setSelectedDate(dateKey);
        setNewEventTitle('');
        setIsModalOpen(true);
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (!newEventTitle.trim()) return;

        const colors = {
            'academic': 'bg-green-500',
            'exam': 'bg-orange-500',
            'admin': 'bg-blue-500',
            'holiday': 'bg-pink-500',
            'reminder': 'bg-purple-500'
        };

        const newEvent = {
            title: newEventTitle,
            type: newEventType,
            color: colors[newEventType] || 'bg-slate-500'
        };

        setEvents(prev => ({
            ...prev,
            [selectedDate]: [...(prev[selectedDate] || []), newEvent]
        }));

        setIsModalOpen(false);
    };

    const { days, firstDay } = getDaysInMonth(currentDate);
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Generate grid cells
    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="h-32 bg-white/5 border border-white/5 opacity-50"></div>);
    }
    for (let i = 1; i <= days; i++) {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const dayEvents = events[dateKey] || [];
        const isToday = i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();

        calendarDays.push(
            <div
                key={i}
                onClick={() => handleDayClick(i)}
                className={`h-32 bg-white/5 border border-white/5 p-2 relative group hover:bg-white/10 transition-colors cursor-pointer ${isToday ? 'bg-primary/10 border-primary/30' : ''}`}
            >
                <div className="flex justify-between items-start">
                    <span className={`text-sm font-semibold h-7 w-7 flex items-center justify-center rounded-full ${isToday ? 'bg-primary text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {i}
                    </span>
                    <Plus size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="mt-2 space-y-1 overflow-y-auto max-h-[80px] scrollbar-hide">
                    {dayEvents.map((evt, idx) => (
                        <div key={idx} className={`text-xs p-1 rounded ${evt.color} text-white truncate shadow-sm hover:brightness-110`}>
                            {evt.title}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

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
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                    <CalendarIcon className="text-primary" />
                                    Calendario Escolar
                                </h1>
                                <p className="text-slate-400">Ciclo Escolar 2026 - 1</p>
                            </div>

                            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-xl border border-white/10">
                                <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
                                    <ChevronLeft />
                                </button>
                                <h2 className="text-xl font-bold text-white min-w-[200px] text-center">
                                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                </h2>
                                <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
                            {/* Days Header */}
                            <div className="grid grid-cols-7 bg-slate-900 border-b border-white/10 text-center py-3">
                                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                                    <div key={day} className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{day}</div>
                                ))}
                            </div>
                            {/* Days Cells */}
                            <div className="grid grid-cols-7">
                                {calendarDays}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400 justify-center">
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Académico</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Exámenes</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Administrativo</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-500"></span> Festivo/Inhábil</div>
                        </div>

                    </div>
                </main>

                {/* Add Event Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

                        <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Nuevo Evento</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleAddEvent} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Fecha</label>
                                    <div className="text-white font-mono bg-white/5 p-2 rounded-lg border border-white/10">
                                        {selectedDate}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Título</label>
                                    <input
                                        type="text"
                                        value={newEventTitle}
                                        onChange={(e) => setNewEventTitle(e.target.value)}
                                        placeholder="Ej: Entrega de Proyecto"
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        autoFocus
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Tipo</label>
                                    <select
                                        value={newEventType}
                                        onChange={(e) => setNewEventType(e.target.value)}
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    >
                                        <option value="academic">Académico (Verde)</option>
                                        <option value="exam">Examen (Naranja)</option>
                                        <option value="admin">Administrativo (Azul)</option>
                                        <option value="holiday">Festivo (Rosa)</option>
                                        <option value="reminder">Personal (Morado)</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 mt-4"
                                >
                                    Guardar Evento
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendario;
