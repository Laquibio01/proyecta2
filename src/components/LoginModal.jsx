import React, { useState } from 'react';
import { User, Lock, ArrowRight, GraduationCap, X } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import Input from './ui/Input';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            onLogin();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20 mb-4">
                        <GraduationCap className="text-white w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        UTCH <span className="text-primary-light">Connect</span>
                    </h1>
                    <p className="text-slate-400">Bienvenido a tu plataforma universitaria</p>
                </div>

                <Card className="!bg-white/95 !backdrop-blur-xl">
                    <h2 className="text-xl font-semibold text-center text-slate-800 mb-6">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                icon={User}
                                type="text"
                                placeholder="Usuario / Matrícula"
                                required
                                autoFocus
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                icon={Lock}
                                type="password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        <Button type="submit" className="w-full" isLoading={isLoading}>
                            Ingresar <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default LoginModal;
