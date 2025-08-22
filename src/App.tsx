import React, { useState } from 'react';
import { customInstance } from './api/mutator/custom-instance';

interface LoginResponse {
  sucesso: boolean;
  mensagem: string;
  dados: {
    nome: string;
    email: string;
    token: string;
  };
  tipo: string;
}

interface ChamadoResponse {
  sucesso: boolean;
  mensagem: string;
  dados: any[];
  tipo: string;
}

function App() {
  const [email, setEmail] = useState('estagiario@box3.work');
  const [senha, setSenha] = useState('Estagio@Box3');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      // Chamada direta usando o customInstance
      const response = await customInstance<LoginResponse>({
        url: '/api/Auth/login',
        method: 'PUT',
        data: { email, senha },
      });
      
      if (response.sucesso && response.dados.token) {
        const token = response.dados.token;
        localStorage.setItem('authToken', token);
        setUserData(response.dados);
        setResult(`Login bem-sucedido! Bem-vindo, ${response.dados.nome}`);
      } else {
        setResult('Login falhou: ' + response.mensagem);
      }
    } catch (error: any) {
      console.error('Erro completo:', error);
      setResult(`Erro: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testChamados = async () => {
    try {
      const response = await customInstance<ChamadoResponse>({
        url: '/api/Chamado/listagem',
        method: 'POST',
        data: { currentPage: 1, pageSize: 10 },
      });
      
      if (response.sucesso) {
        setResult(`Chamados carregados! Total: ${response.dados.length} registros`);
        console.log('Dados dos chamados:', response.dados);
      } else {
        setResult('Falha ao carregar chamados: ' + response.mensagem);
      }
    } catch (error: any) {
      setResult(`Erro em chamados: ${error.response?.data?.message || error.message}`);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUserData(null);
    setResult('Logout realizado com sucesso!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Teste GuardiaMaria API</h1>
      
      {userData ? (
        <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#e8f5e8' }}>
          <h3>Usuário logado:</h3>
          <p>Nome: {userData.nome}</p>
          <p>Email: {userData.email}</p>
          <button 
            onClick={logout}
            style={{ padding: '8px', backgroundColor: '#dc3545', color: 'white', border: 'none' }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <div>
            <label>Email: </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              disabled={loading}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div>
            <label>Senha: </label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              disabled={loading}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ padding: '10px', backgroundColor: loading ? '#ccc' : '#007bff', color: 'white', border: 'none' }}
          >
            {loading ? 'Carregando...' : 'Fazer Login'}
          </button>
        </form>
      )}

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Testar Endpoints:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              onClick={testChamados}
              style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none' }}
            >
              Testar Chamados
            </button>
            
            <button 
              onClick={() => {
                const token = localStorage.getItem('authToken');
                setResult(token ? `Token: ${token.substring(0, 30)}...` : 'Nenhum token');
              }}
              style={{ padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none' }}
            >
              Ver Token
            </button>
          </div>
        </div>
      )}
      
      {result && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: result.includes('Erro') ? '#ffebee' : '#e8f5e8',
          border: `1px solid ${result.includes('Erro') ? '#f44336' : '#4caf50'}`
        }}>
          <strong>Resultado:</strong> {result}
        </div>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Verifique o console do navegador (F12) para ver os detalhes completos das respostas.</p>
      </div>
    </div>
  );
}

export default App;