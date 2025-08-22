import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, LoginCredentials } from '../types/auth';
import { customInstance } from '../api/mutator/custom-instance';

interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Verificar se há token salvo ao inicializar
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Erro ao parsear userData:', e);
        logout();
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      interface LoginResponse {
        sucesso: boolean;
        mensagem?: string;
        dados: {
          nome: string;
          email: string;
          token: string;
        };
      }

      const response = await customInstance({
        url: '/api/Auth/login',
        method: 'PUT',
        data: credentials,
      }) as LoginResponse;

      if (response.sucesso && response.dados.token) {
        const userData = {
          nome: response.dados.nome,
          email: response.dados.email,
          token: response.dados.token,
        };

        setUser(userData);
        localStorage.setItem('authToken', response.dados.token);
        localStorage.setItem('userData', JSON.stringify(userData));
        setError(null);
      } else {
        throw new Error(response.mensagem || 'Login falhou');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao fazer login';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};