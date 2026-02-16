import React from 'react';
import { ArrowRight, Code, BookOpen, UserCheck, Lock } from 'lucide-react';
import Button from '../ui/Button';

const Hero = ({ onActionClick, isLoggedIn }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-medium mb-6 animate-fade-in backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary-light animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light mr-1"></span>
                    Plataforma 2026 Activa
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in tracking-tight" style={{ animationDelay: '0.1s' }}>
                    Tu Futuro Empieza en <br />
                    <span className="text-gradient drop-shadow-lg">UTCH Proyecta</span>
                </h1>

                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                    Accede a todas las herramientas universitarias en un solo lugar.
                    Simple, rápido y diseñado para ti.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    {isLoggedIn ? (
                        <Button size="lg" className="rounded-full shadow-lg shadow-primary/25">
                            Ir al Dashboard <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    ) : (
                        <>
                            <Button size="lg" className="rounded-full shadow-lg shadow-primary/25" onClick={onActionClick}>
                                Explorar Módulos <Lock className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full backdrop-blur-md hover:bg-white/5" onClick={onActionClick}>
                                Ver Documentación <Lock className="ml-2 w-4 h-4" />
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* Floating Cards (Desktop Only) */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <FloatingBadge icon={Code} label="<Desarrollo />" className="top-[20%] left-[10%] -rotate-6 delay-0" />
                <FloatingBadge icon={BookOpen} label="Biblioteca.js" className="top-[30%] right-[10%] rotate-12 delay-1000" />
                <FloatingBadge icon={UserCheck} label="Asistencia_V2" className="bottom-[25%] left-[15%] rotate-3 delay-500" />

                {/* Extra decorations */}
                <div className="absolute top-[15%] right-[25%] w-4 h-4 bg-accent rounded-full blur-[2px] animate-float delay-200" />
                <div className="absolute bottom-[20%] right-[20%] w-6 h-6 bg-primary rounded-full blur-[4px] animate-float delay-700" />
                <div className="absolute top-[40%] left-[5%] w-3 h-3 bg-white/50 rounded-full blur-[1px] animate-pulse" />
            </div>
        </section>
    );
};

const FloatingBadge = ({ icon: Icon, label, className = '' }) => (
    <div className={`absolute flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white animate-float shadow-2xl ${className}`}>
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
            <Icon size={20} className="text-primary-light" />
        </div>
        <span className="font-mono text-sm tracking-wide text-slate-200">{label}</span>
    </div>
);

export default Hero;
