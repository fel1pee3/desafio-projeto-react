export interface LoginCredentials {
  email: string;
  senha: string;
}

export interface AuthResponse {
  sucesso: boolean;
  mensagem: string;
  dados: {
    nome: string;
    email: string;
    token: string;
  };
  tipo: string;
}

export interface User {
  nome: string;
  email: string;
  token: string;
}