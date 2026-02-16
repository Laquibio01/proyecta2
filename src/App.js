import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SectionPage from './pages/SectionPage';
import Directorio from './pages/Directorio';
import Calendario from './pages/Calendario';
import Reglamentos from './pages/Reglamentos';
import BolsaDeTrabajo from './pages/BolsaDeTrabajo';
import Expediente from './pages/Expediente';
import Horario from './pages/Horario';
import ReferenciasBancarias from './pages/ReferenciasBancarias';
import Titulacion from './pages/Titulacion';
import MiCuenta from './pages/MiCuenta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/modulos/directorio" element={<Directorio />} />
        <Route path="/dashboard/modulos/calendario" element={<Calendario />} />
        <Route path="/dashboard/modulos/reglamentos" element={<Reglamentos />} />
        <Route path="/dashboard/modulos/bolsa-trabajo" element={<BolsaDeTrabajo />} />
        <Route path="/dashboard/alumnos/expediente" element={<Expediente />} />
        <Route path="/dashboard/alumnos/horario" element={<Horario />} />
        <Route path="/dashboard/alumnos/referencias" element={<ReferenciasBancarias />} />
        <Route path="/dashboard/alumnos/titulacion" element={<Titulacion />} />
        <Route path="/dashboard/mi-cuenta" element={<MiCuenta />} />
        <Route path="/dashboard/:section/:subsection" element={<SectionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
