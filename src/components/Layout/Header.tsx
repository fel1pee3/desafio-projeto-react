import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Limpa automaticamente o localStorage e faz logout
    localStorage.clear();
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };
  
  // Função para verificar se a rota está ativa
  const isActiveRoute = (path: string) => {
    if (path === '/chamados') {
      return location.pathname === '/' || location.pathname.startsWith('/chamados');
    }
    return location.pathname.startsWith(path);
  };

  // Função para obter a classe do link baseado na rota ativa
  const getLinkClass = (path: string) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const activeClass = isActiveRoute(path) 
      ? "text-primary bg-primary/10" 
      : "text-gray-700 hover:text-primary hover:bg-gray-100";
    
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo e Navegação */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/chamados" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">GM</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GuardiaMaria</span>
            </Link>

            {/* Links de Navegação */}
            <nav className="hidden md:flex space-x-1">
              <Link
                to="/chamados"
                className={getLinkClass('/chamados')}
              >
                Chamados
              </Link>
              <Link
                to="/atendimentos"
                className={getLinkClass('/atendimentos')}
              >
                Atendimentos
              </Link>
            </nav>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Nome do usuário */}
            <span className="hidden md:block text-sm text-gray-700">
              Olá, <strong>{user?.nome || 'Usuário'}</strong>
            </span>

            {/* Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.nome?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    isMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <>
                  {/* Overlay para fechar o menu ao clicar fora */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.nome || 'Usuário'}</p>
                      <p className="text-xs text-gray-500">{user?.email || ''}</p>
                    </div>
                    
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sair
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/chamados"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActiveRoute('/chamados') 
                ? 'text-primary bg-primary/10' 
                : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Chamados
          </Link>
          <Link
            to="/atendimentos"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActiveRoute('/atendimentos') 
                ? 'text-primary bg-primary/10' 
                : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Atendimentos
          </Link>
        </div>
      </div>
    </header>
  );
};