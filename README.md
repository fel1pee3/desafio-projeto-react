# GuardiaMaria - Sistema de Gerenciamento

Sistema completo para gerenciamento de chamados e atendimentos da GuardiaMaria, desenvolvido em React + TypeScript.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Testes da Aplicação](#-testes-da-aplicação)
- [API Endpoints](#-api-endpoints)
- [Deploy](#-deploy)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Problemas Comuns e Soluções](#-problemas-comuns-e-soluções)
- [Contribuição](#-contribuição)

## 🚀 Funcionalidades

### ✅ Implementadas
- **Sistema de Autenticação JWT**
  - Login com credenciais
  - Armazenamento seguro de token
  - Proteção de rotas
  - Logout automático

- **Módulo de Atendimentos**
  - Listagem com paginação e filtros
  - Visualização de detalhes
  - Criação de novos atendimentos
  - Finalização de atendimentos
  - Selects com busca em tempo real

- **Módulo de Chamados** (Parcial)
  - Listagem com paginação
  - Visualização de detalhes
  - Estrutura para criação

- **Interface Responsiva**
  - Design com Tailwind CSS
  - Navegação intuitiva
  - Componentes reutilizáveis

### 📋 Pendentes
- Criação completa de chamados
- Filtros avançados
- Relatórios e dashboard
- Upload de arquivos

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **React Router v6** - Roteamento
- **TanStack Query v4** - Gerenciamento de estado server-side
- **Axios** - Cliente HTTP
- **Orval** - Geração automática de API clients

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **CSS Modules** - Escopo de estilos

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e dev server
- **ESLint** - Linting
- **npm** - Gerenciador de pacotes

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (versão 8 ou superior)
- **Git**

### Verificando as instalações
```bash
node --version
npm --version
git --version
```

## 📁 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd guardiamaria-frontend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o proxy (Opcional - para evitar CORS)
Edite o `package.json` e adicione:
```json
{
  "proxy": "https://beta.guardia-api.box3.work"
}
```

### 4. Gere os clients da API
```bash
npm run generate-api
```

## 🏗 Estrutura do Projeto

```
src/
├── api/
│   ├── generated/          # Clients auto-gerados pelo Orval
│   └── mutator/           # Configuração do Axios
├── components/
│   ├── ui/                # Componentes reutilizáveis
│   └── layout/            # Componentes de layout
├── contexts/              # Contextos React (Auth, etc.)
├── hooks/                 # Hooks customizados
├── pages/
│   ├── auth/              # Páginas de autenticação
│   ├── chamados/          # Páginas de chamados
│   └── atendimentos/      # Páginas de atendimentos
├── types/                 # Definições TypeScript
└── utils/                 # Utilitários
```

## 🚀 Como Executar

### Ambiente de Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm start

# ou
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

### Build para Produção
```bash
# Crie o build de produção
npm run build

# Visualize o build localmente
npm run preview
```

## 🧪 Testes da Aplicação

### Credenciais de Teste
- **Email:** `estagiario@box3.work`
- **Senha:** `Estagio@Box3`

### Fluxo de Teste Recomendado

1. **Teste de Login**
   - Acesse http://localhost:3000/login
   - Verifique se as credenciais estão preenchidas
   - Clique em "Entrar"
   - Deve redirecionar para `/chamados`

2. **Teste de Navegação**
   - Use o header para navegar entre Chamados ↔ Atendimentos
   - Teste o botão flutuante no canto inferior direito

3. **Teste de Atendimentos**
   - Navegue para "Atendimentos"
   - Teste a listagem com paginação
   - Clique em "Ver" para ver detalhes
   - Teste "Novo Atendimento"

4. **Teste de Chamados**
   - Navegue para "Chamados"
   - Verifique a listagem
   - Teste a visualização de detalhes

### Testes Manuais da API
```javascript
// No console do navegador (F12)
// Testar autenticação
fetch('/api/Auth/login', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'estagiario@box3.work',
    senha: 'Estagio@Box3'
  })
}).then(res => res.json()).then(console.log)

// Testar listagem de atendimentos
fetch('/api/Atendimento/listagem', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
  },
  body: JSON.stringify({ currentPage: 1, pageSize: 10 })
}).then(res => res.json()).then(console.log)
```

## 🌐 API Endpoints

### Autenticação
- `PUT /api/Auth/login` - Login de usuário

### Chamados
- `POST /api/Chamado/listagem` - Listar chamados
- `GET /api/Chamado/{id}` - Detalhes do chamado
- `POST /api/Chamado` - Criar chamado
- `POST /api/Chamado/select/bairro` - Buscar bairros

### Atendimentos
- `POST /api/Atendimento/listagem` - Listar atendimentos
- `GET /api/Atendimento/{id}` - Detalhes do atendimento
- `POST /api/Atendimento` - Criar atendimento
- `GET /api/Atendimento/Finalizar` - Finalizar atendimento

### Selects
- `POST /api/PessoaAssistida/Select` - Buscar pessoas assistidas
- `POST /api/Viatura/Select` - Buscar viaturas
- `POST /api/Usuario/Select` - Buscar usuários
- `POST /api/AtendimentoTipo/select` - Buscar tipos de atendimento

## 📦 Deploy

### Build de Produção
```bash
npm run build
```

### Variáveis de Ambiente para Produção
Crie um arquivo `.env`:
```env
VITE_API_BASE_URL=https://beta.guardia-api.box3.work
VITE_APP_ENV=production
```

### Servidores Recomendados
- **Netlify** - Para deploy simples
- **Vercel** - Otimizado para React
- **AWS S3 + CloudFront** - Para alta escala

## 📜 Scripts Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Cria build de produção
npm run preview    # Preview do build
npm run generate-api # Gera clients da API
npm run generate-api:watch # Gera e observa mudanças
```

## 🔧 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `VITE_API_BASE_URL` | URL base da API | `https://beta.guardia-api.box3.work` |
| `VITE_APP_ENV` | Ambiente da aplicação | `development` |

## 🐛 Problemas Comuns e Soluções

### Erro de CORS
**Sintoma:** Erro 404 ou bloqueio de requisição
**Solução:** Configure o proxy no `package.json`

### Token não está sendo enviado
**Solução:** Verifique se o token está no localStorage
```javascript
localStorage.getItem('authToken')
```

### Selects não carregam
**Solução:** Verifique a estrutura da resposta da API
```javascript
// Teste manual no console
fetch('/api/PessoaAssistida/Select', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
  },
  body: JSON.stringify({ pesquisa: 'teste' })
}).then(res => res.json()).then(console.log)
```

### Erro "map is not a function"
**Causa:** Estrutura da resposta diferente do esperado
**Solução:** Ajuste o hook conforme a estrutura real da API

## 🤝 Contribuição

### Padrões de Código
- Use TypeScript para tudo
- Siga a estrutura de pastas existente
- Componentes devem ser funcionais com hooks
- Use Tailwind CSS para estilização

### Processo de Desenvolvimento
1. Faça fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### Convenções de Commit
```
feat: Nova funcionalidade
fix: Correção de bug
docs: Documentação
style: Formatação de código
refactor: Refatoração de código
test: Adição de testes
```

## 📞 Suporte

Para issues e dúvidas:
1. Verifique a documentação acima
2. Consulte os erros no console do navegador (F12)
3. Teste manualmente os endpoints da API
4. Verifique se o token está sendo enviado

---

**Desenvolvido com ❤️ para o processo seletivo da Box3**