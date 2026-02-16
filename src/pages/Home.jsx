import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import LoginModal from '../components/LoginModal';

const Home = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
        navigate('/dashboard');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="bg-slate-950 min-h-screen relative overflow-hidden">
            <Navbar
                onLoginClick={() => setIsLoginOpen(true)}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
            />

            <Hero
                onActionClick={() => setIsLoginOpen(true)}
                isLoggedIn={isLoggedIn}
            />

            {/* Additional Floating Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px] -z-10" />
            </div>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
            />

            <footer className="absolute bottom-0 w-full bg-slate-950/50 backdrop-blur-sm text-slate-600 py-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm">
                    <p>© 2026 Universidad Tecnológica de Chihuahua. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
