import React, { useState } from 'react';
import { GraduationCap, UserPlus, Briefcase, Menu, X, Home, Mail, LogIn, LogOut } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = ({ onLoginClick, isLoggedIn, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <GraduationCap size={20} />
                        </div>
                        <span className="text-xl font-bold text-white">
                            UTCH<span className="text-primary-light">Connect</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            <UserPlus size={18} /> Registro Aspirantes
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            <Briefcase size={18} /> Acceso Empresas
                        </a>
                        <div className="h-6 w-px bg-white/10" />
                        <Button variant="ghost" size="sm" className="!p-2 text-slate-400 hover:text-white hover:bg-white/5">
                            <Home size={20} />
                        </Button>
                        <Button variant="ghost" size="sm" className="!p-2 text-slate-400 hover:text-white hover:bg-white/5">
                            <Mail size={20} />
                        </Button>

                        {isLoggedIn ? (
                            <Button size="sm" onClick={onLogout} variant="secondary">
                                <LogOut size={18} className="mr-2" /> Salir
                            </Button>
                        ) : (
                            <Button size="sm" onClick={onLoginClick}>
                                <LogIn size={18} className="mr-2" /> Ingresar
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-t border-white/5 p-4 animate-fade-in">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400">
                            <UserPlus size={18} /> Registro Aspirantes
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400">
                            <Briefcase size={18} /> Acceso Empresas
                        </a>
                        {isLoggedIn ? (
                            <Button className="w-full justify-center" onClick={onLogout} variant="secondary">
                                Salir
                            </Button>
                        ) : (
                            <Button className="w-full justify-center" onClick={onLoginClick}>
                                Ingresar
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
