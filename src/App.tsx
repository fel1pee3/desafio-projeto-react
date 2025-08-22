import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LoginPage } from './pages/auth/LoginPage';

// Componentes placeholder para as próximas páginas
const ChamadosPage = () => <div className="p-8">Página de Chamados - Em desenvolvimento</div>;
const AtendimentosPage = () => <div className="p-8">Página de Atendimentos - Em desenvolvimento</div>;

// Componente protegido
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/chamados" 
              element={
                <ProtectedRoute>
                  <ChamadosPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/atendimentos" 
              element={
                <ProtectedRoute>
                  <AtendimentosPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/chamados" />} />
            <Route path="*" element={<Navigate to="/chamados" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;