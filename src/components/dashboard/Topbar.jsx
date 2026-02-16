import React from 'react';
import { Bell, Search, Menu, LogOut, Settings, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const notifications = [
        { id: 1, text: "Tarea 'Investigación MVC' entregada", time: "Hace 10 min", type: "success" },
        { id: 2, text: "Pago de inscripción pendiente", time: "Hace 2 horas", type: "warning" },
        { id: 3, text: "Nuevo mensaje de Tutoría", time: "Ayer", type: "info" }
    ];

    return (
        <header className="h-20 bg-slate-950/50 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between z-40 sticky top-0">
            {/* Left Section: Breadcrumb or Greeting */}
            <div>
                <h2 className="text-xl font-semibold text-white">
                    Bienvenido, <span className="text-primary-light">TIBURCIO "TIBU"</span>
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span>Dashboard</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>Estudiante</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>Matrícula: 6523150065</span>
                </div>
            </div>

            {/* Right Section: Actions & Profile */}
            <div className="flex items-center gap-6">

                {/* Search Bar */}
                <div className="relative hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-slate-900/50 border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 w-64 transition-all"
                    />
                </div>

                <div className="h-8 w-px bg-white/10" />

                {/* Icons */}
                <div className="flex items-center gap-3 relative">
                    {/* Calendar Link */}
                    <Link to="/dashboard/modulos/calendario">
                        <IconButton icon={Calendar} hasDot tooltip="Calendario Académico" />
                    </Link>

                    {/* Notifications Dropdown */}
                    <div className="relative">
                        <IconButton
                            icon={Bell}
                            count={notifications.length}
                            onClick={() => setNotificationsOpen(!notificationsOpen)}
                        />

                        {notificationsOpen && (
                            <div className="absolute right-0 top-full mt-4 w-80 bg-slate-900 border border-white/10 rounded-xl shadow-2xl z-50 animate-fade-in overflow-hidden">
                                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-slate-950/50">
                                    <h3 className="font-bold text-white text-sm">Notificaciones</h3>
                                    <button
                                        onClick={() => setNotificationsOpen(false)}
                                        className="text-xs text-primary hover:text-primary-light"
                                    >
                                        Marcar leídas
                                    </button>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    {notifications.map(notif => (
                                        <div key={notif.id} className="p-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3">
                                            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${notif.type === 'success' ? 'bg-green-500' :
                                                notif.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                                                }`} />
                                            <div>
                                                <p className="text-sm text-slate-300 leading-snug">{notif.text}</p>
                                                <p className="text-[10px] text-slate-500 mt-1">{notif.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-2 text-center bg-slate-950/50 border-t border-white/5">
                                    <button className="text-xs text-slate-400 hover:text-white transition-colors">Ver todas</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Widget */}
                <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                    <Link to="/dashboard/mi-cuenta" className="text-right hidden sm:block group hover:opacity-80 transition-opacity">
                        <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">TIBURCIO "TIBU"</div>
                        <div className="text-xs text-slate-400">6523150065</div>
                    </Link>
                    <Link to="/dashboard/mi-cuenta" className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden border-2 border-slate-600 hover:border-primary transition-colors">
                        <img
                            src="/assets/shark_profile.png"
                            alt="User"
                            className="h-full w-full object-cover"
                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Jesus+Hernandez&background=0D8ABC&color=fff' }}
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

const IconButton = ({ icon: Icon, count, hasDot }) => (
    <button className="relative w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/10 group">
        <Icon size={18} className="group-hover:scale-110 transition-transform" />
        {count && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-slate-950">
                {count}
            </span>
        )}
        {hasDot && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
        )}
    </button>
);

export default Topbar;
