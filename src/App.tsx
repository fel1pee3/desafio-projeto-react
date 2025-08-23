import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/AuthContext';
import { LoginPage } from './pages/auth/LoginPage';
import { ChamadosListPage } from './pages/chamados/ChamadosListPage';
import { ChamadoDetailPage } from './pages/chamados/ChamadoDetailPage';
import { NovoChamadoPage } from './pages/chamados/NovoChamadoPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout/Layout';
import { AtendimentoDetailPage } from './pages/atendimentos/AtendimentoDetailPage';
import { AtendimentosListPage } from './pages/atendimentos/AtendimentosListPage';
import { NovoAtendimentoPage } from './pages/atendimentos/NovoAtendimentoPage';

// Configurar React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Componente protegido
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/chamados" 
                element={
                  <ProtectedRoute>
                    <ErrorBoundary>
                      <ChamadosListPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/chamados/:id" 
                element={
                  <ProtectedRoute>
                    <ErrorBoundary>
                      <ChamadoDetailPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/chamados/novo" 
                element={
                  <ProtectedRoute>
                    <ErrorBoundary>
                      <NovoChamadoPage />
                    </ErrorBoundary>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/atendimentos" 
                element={
                  <ProtectedRoute>
                    <AtendimentosListPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/atendimentos/:id" 
                element={
                  <ProtectedRoute>
                    <AtendimentoDetailPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/atendimentos/novo" 
                element={
                  <ProtectedRoute>
                    <NovoAtendimentoPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/" element={<Navigate to="/chamados" />} />
              <Route path="*" element={<Navigate to="/chamados" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;