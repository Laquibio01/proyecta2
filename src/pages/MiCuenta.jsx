import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { User, Shield, Phone, MapPin, Heart, Mail, Lock, Calendar, CreditCard, Edit2, Eye, EyeOff } from 'lucide-react';

const MiCuenta = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('general');
    const [showEmail, setShowEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const userInfo = {
        name: 'TIBURCIO "TIBU"',
        paterno: "GONZÁLEZ",
        materno: "",
        id: "6523150065",
        type: "Alumno",
        dob: "04 Noviembre 2005",
        address: "LIBERTADORES DE AMERICA # 3417 Colonia U.P C.P. 31054",
        phoneHome: "6144742399",
        phoneCell: "6144742399",
        emailPersonal: "hernandeztrejo1234@gmail.com",
        emailInst: "a6523150065@utch.edu.mx",
        passInst: "JHG52315006511#",
        sex: "Hombre",
        civilStatus: "Soltero (A)",
        disability: "Ninguna",
        curp: "HETJ051104HCHRR5A6",
        rfc: "HETJ051104",
        medicalInstitution: "[IMSS] INSTITUTO MEXICANO DEL SEGURO SOCIAL",
        medicalNumber: "62200598399",
        bloodType: "O-",
        allergies: "NO TENGO",
        diseases: "",
        emergencyContact: "Martha Trejo Molina",
        emergencyPhone: "6144630876"
    };

    const tabs = [
        { id: 'general', label: 'Datos Generales', icon: User },
        { id: 'security', label: 'Seguridad y Contraseña', icon: Shield },
        { id: 'contact', label: 'Correo y Teléfono', icon: Phone },
        { id: 'address', label: 'Domicilio', icon: MapPin },
        { id: 'medical', label: 'Servicio Médico', icon: Heart },
    ];

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
            {/* Background - Static */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950" />

            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 relative z-10">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                    <div className="max-w-7xl mx-auto">

                        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <User className="text-primary" />
                            Mi <span className="font-light text-slate-400">Cuenta</span>
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* LEFT COLUMN: PROFILE CARD & TABS */}
                            <div className="w-full lg:w-1/4 space-y-6">
                                {/* Profile Card */}
                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="relative inline-block">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-4">
                                            <img
                                                src="/assets/shark_profile.png"
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Jesus+Hernandez&background=0D8ABC&color=fff' }}
                                            />
                                        </div>
                                        <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors">
                                            <Edit2 size={14} />
                                        </button>
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{userInfo.name}</h2>
                                    <p className="text-slate-400 text-sm">{userInfo.paterno} {userInfo.materno}</p>
                                    <div className="mt-4 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-primary inline-block border border-white/10">
                                        {userInfo.id}
                                    </div>
                                </div>

                                {/* Navigation Tabs */}
                                <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors border-l-4
                                                ${activeTab === tab.id
                                                    ? 'bg-white/5 border-primary text-white'
                                                    : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            <tab.icon size={18} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT COLUMN: CONTENT */}
                            <div className="w-full lg:w-3/4">
                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 min-h-[500px]">

                                    {/* HEADER OF SECTION */}
                                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                                        {tabs.find(t => t.id === activeTab)?.icon && React.createElement(tabs.find(t => t.id === activeTab).icon, { className: "text-primary", size: 24 })}
                                        <h2 className="text-xl font-bold text-white">
                                            {tabs.find(t => t.id === activeTab)?.label}
                                        </h2>
                                    </div>

                                    {/* CONTENT: DATA */}
                                    {activeTab === 'general' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Nombre</label>
                                                    <div className="text-white font-medium">{userInfo.name}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Fecha de Nacimiento</label>
                                                    <div className="text-white font-medium flex items-center gap-2">
                                                        <Calendar size={14} className="text-slate-500" />
                                                        {userInfo.dob}
                                                    </div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Apellido Paterno</label>
                                                    <div className="text-white font-medium">{userInfo.paterno}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Apellido Materno</label>
                                                    <div className="text-white font-medium">{userInfo.materno}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">CURP</label>
                                                    <div className="text-white font-mono text-sm">{userInfo.curp}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">RFC</label>
                                                    <div className="text-white font-mono text-sm">{userInfo.rfc}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Sexo</label>
                                                    <div className="text-white font-medium">{userInfo.sex}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-4 rounded-xl border border-transparent">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Estado Civil</label>
                                                    <div className="text-white font-medium">{userInfo.civilStatus}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'security' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex gap-3 text-yellow-500 text-sm mb-6">
                                                <Lock size={20} className="shrink-0" />
                                                <p>La contraseña institucional es utilizada para acceder a los servicios de la universidad (Wi-Fi, Correo, Plataformas).</p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Correo Institucional</label>
                                                    <div className="flex items-center justify-between bg-slate-950/30 p-2 rounded-lg border border-white/5">
                                                        <div className="text-white font-mono">
                                                            {showEmail ? userInfo.emailInst : '••••••••••••••••••••@utch.edu.mx'}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => setShowEmail(!showEmail)}
                                                                className="text-slate-400 hover:text-white transition-colors"
                                                            >
                                                                {showEmail ? <EyeOff size={18} /> : <Eye size={18} />}
                                                            </button>
                                                            <button className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded transition-colors ml-2">
                                                                Acceder
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Contraseña Institucional</label>
                                                    <div className="flex items-center justify-between bg-slate-950/30 p-2 rounded-lg border border-white/5">
                                                        <div className="text-white font-mono">
                                                            {showPassword ? userInfo.passInst : '••••••••••••••••'}
                                                        </div>
                                                        <button
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="text-slate-400 hover:text-white transition-colors"
                                                        >
                                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'contact' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Teléfono Casa</label>
                                                    <div className="text-white font-mono">{userInfo.phoneHome}</div>
                                                </div>
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Teléfono Celular</label>
                                                    <div className="text-white font-mono">{userInfo.phoneCell}</div>
                                                </div>
                                                <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 col-span-1 md:col-span-2">
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Correo Personal</label>
                                                    <div className="text-white font-mono">{userInfo.emailPersonal}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'address' && (
                                        <div className="animate-fade-in">
                                            <div className="bg-slate-950/50 p-6 rounded-xl border border-white/5 flex items-start gap-4">
                                                <MapPin className="text-primary mt-1" />
                                                <div>
                                                    <label className="block text-xs text-slate-500 uppercase mb-1">Domicilio Actual</label>
                                                    <div className="text-white font-medium text-lg leading-relaxed">
                                                        {userInfo.address}
                                                    </div>
                                                    <div className="mt-4 flex gap-2">
                                                        <span className="bg-white/5 px-2 py-1 rounded text-xs text-slate-400">Chihuahua</span>
                                                        <span className="bg-white/5 px-2 py-1 rounded text-xs text-slate-400">Chihuahua</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'medical' && (
                                        <div className="animate-fade-in space-y-8">
                                            {/* Servicio Médico Section */}
                                            <div>
                                                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                                                    <Heart className="text-primary" size={20} />
                                                    Servicio Médico
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 col-span-1 md:col-span-2">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Institución Médica</label>
                                                        <div className="text-white font-medium">{userInfo.medicalInstitution}</div>
                                                    </div>
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Número</label>
                                                        <div className="text-white font-mono">{userInfo.medicalNumber}</div>
                                                        <p className="text-[10px] text-red-500 mt-1">El número de seguro solo puede contener 11 caracteres</p>
                                                    </div>
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Tipo Sanguíneo</label>
                                                        <div className="text-white font-medium">{userInfo.bloodType}</div>
                                                    </div>
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Discapacidad</label>
                                                        <div className="text-white font-medium">{userInfo.disability}</div>
                                                    </div>
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Alergias</label>
                                                        <div className="text-white font-medium">{userInfo.allergies}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Emergency Contact Section */}
                                            <div>
                                                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                                                    <Phone className="text-red-400" size={20} />
                                                    Contacto de Emergencia
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Nombre</label>
                                                        <div className="text-white font-medium">{userInfo.emergencyContact}</div>
                                                    </div>
                                                    <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                        <label className="block text-xs text-slate-500 uppercase mb-1">Número de Teléfono</label>
                                                        <div className="text-white font-mono">{userInfo.emergencyPhone}</div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 flex justify-end">
                                                    <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-green-900/20 transition-all flex items-center gap-2">
                                                        <Shield size={18} />
                                                        Guardar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default MiCuenta;
