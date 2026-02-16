import React, { useState } from 'react';
import { Globe, LayoutGrid, Users, Power, ChevronRight, GraduationCap, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    if (!isOpen) toggleSidebar(); // Open sidebar if closed when clicking an item
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSubItemClick = (path) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(`/dashboard/${path}`);
    }
  };

  const menuItems = [
    {
      label: 'Páginas UTCH',
      icon: Globe,
      subItems: [
        { label: 'Página Web UTCH', path: 'https://www.utch.edu.mx/index.php/virtual/' },
        { label: 'UTCH Virtual (Moodle)', path: 'https://virtualbis.utch.edu.mx/login/index.php' },
        { label: 'Aviso de Privacidad', path: 'http://radio.utch.edu.mx/privacidad.html' }
      ]
    },
    {
      label: 'Módulos Generales',
      icon: LayoutGrid,
      subItems: [
        { label: 'Directorio', path: 'modulos/directorio' },
        { label: 'Calendario Escolar', path: 'modulos/calendario' },
        { label: 'Reglamentos', path: 'modulos/reglamentos' },
        { label: 'Bolsa de Trabajo', path: 'modulos/bolsa-trabajo' }
      ]
    },
    {
      label: 'Alumnos',
      icon: Users,
      subItems: [
        { label: 'Expediente', path: 'alumnos/expediente' },
        { label: 'Horario', path: 'alumnos/horario' },
        { label: 'Referencias Bancarias', path: 'alumnos/referencias' },
        { label: 'Titulación', path: 'alumnos/titulacion' }
      ]
    },
  ];

  return (
    <div className={`
      relative h-screen bg-slate-950/50 backdrop-blur-xl border-r border-white/5 
      transition-all duration-300 flex flex-col z-50
      ${isOpen ? 'w-72' : 'w-20'}
    `}>
      {/* Header / Logo Area */}
      <div className="h-20 flex items-center justify-center border-b border-white/5 relative shrink-0">
        <div
          className={`flex items-center gap-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 absolute'} cursor-pointer`}
          onClick={() => navigate('/dashboard')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            UTCH<span className="text-primary-light">Connect</span>
          </span>
        </div>

        {!isOpen && (
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg shadow-primary/20 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <GraduationCap size={24} />
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-lg z-50"
        >
          <ChevronRight size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2 scrollbar-hide">
        {menuItems.map((item, idx) => {
          const isExpanded = openMenus[item.label];
          const isActive = item.subItems?.some(sub => location.pathname.includes(sub.path));

          return (
            <div key={idx} className="space-y-1">
              <div
                onClick={() => toggleMenu(item.label)}
                className={`
                   group flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200
                   ${isActive || isExpanded
                    ? 'bg-white/5 text-white border border-white/5'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }
                 `}
              >
                <div className={`
                   p-2 rounded-lg transition-colors
                   ${isActive ? 'bg-primary/20 text-primary-light' : 'bg-slate-800/50 text-slate-400 group-hover:text-white group-hover:bg-slate-700'}
                 `}>
                  <item.icon size={20} />
                </div>

                <span className={`font-medium whitespace-nowrap flex-1 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                  {item.label}
                </span>

                {isOpen && (
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {/* Submenu */}
              {isOpen && isExpanded && (
                <div className="ml-12 space-y-1 animate-fade-in">
                  {item.subItems.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      onClick={() => handleSubItemClick(sub.path)}
                      className={`
                         py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors flex items-center gap-2
                         ${location.pathname.includes(sub.path)
                          ? 'text-primary-light bg-primary/10'
                          : 'text-slate-500 hover:text-white hover:bg-white/5'
                        }
                       `}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${location.pathname.includes(sub.path) ? 'bg-primary-light' : 'bg-slate-600'}`} />
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/5 shrink-0">
        <button
          onClick={() => navigate('/')}
          className={`
             w-full flex items-center gap-3 px-3 py-3 rounded-xl 
             text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/20 
             border border-transparent transition-all duration-200 group
           `}
        >
          <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-colors">
            <Power size={20} />
          </div>
          <span className={`font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
            Cerrar Sesión
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
