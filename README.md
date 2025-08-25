# GuardiaMaria Front-End - Box3 Challenge

## 📋 Descrição do Projeto

Aplicação React + TypeScript desenvolvida para o desafio técnico da Box3, consumindo a API da GuardiaMaria. Implementa um sistema completo de gestão de chamados e atendimentos com autenticação JWT, interfaces responsivas e experiência de usuário otimizada.

## 🚀 Tecnologias Utilizadas

- **React 19** + TypeScript
- **React Router v7** para roteamento
- **React Query (TanStack)** para gerenciamento de estado e cache
- **Axios** para requisições HTTP
- **Tailwind CSS** para estilização
- **React Hot Toast** para notificações
- **Vite** como build tool
- **Orval** para geração automática de clientes API

## 📦 Estrutura do Projeto

```
src/
├── api/
│   ├── generated/          # Código gerado automaticamente pelo Orval
│   └── mutator/           # Instância customizada do Axios
├── components/
│   ├── ErrorBoundary.tsx  # Componente para tratamento de erros
|   ├── UI
│   └── Layout/            # Componentes de layout compartilhado
├── contexts/
│   └── AuthContext.tsx    # Contexto de autenticação
├── hooks/
│   ├── useAtendimentos.ts # Hook personalizado para atendimentos
│   ├── useChamados.ts     # Hook personalizado para chamados
│   └── useRequireAuth.ts  # Hook para rotas protegidas
├── pages/
│   ├── auth/              # Páginas de autenticação
│   ├── atendimentos/      # Páginas relacionadas a atendimentos
│   └── chamados/          # Páginas relacionadas a chamados
├── types/
│   ├── atendimento.ts     # Tipos TypeScript para atendimentos
│   ├── auth.ts           # Tipos TypeScript para autenticação
│   └── chamado.ts        # Tipos TypeScript para chamados
└── App.tsx               # Componente principal da aplicação
```

## ⚙️ Pré-requisitos

- Node.js 16+ 
- npm ou yarn

## 🛠️ Como Executar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/fel1pee3/desafio-projeto-react.git
   cd project-react
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no navegador

5. **Geração da API (opcional)**
   Para gerar os tipos e hooks automaticamente a partir do Swagger:
   ```bash
   npm run generate-api
   ```

## 🔐 Credenciais de Teste

- **Email**: `estagiario@box3.work`
- **Senha**: `Estagio@Box3`

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_BASE_URL=https://beta.guardia-api.box3.work
```

## 📱 Funcionalidades Implementadas

### ✅ Autenticação
- [x] Login com JWT
- [x] Armazenamento seguro de token
- [x] Redirecionamento automático pós-login
- [x] Logout e limpeza de sessão

### ✅ Chamados
- [x] Listagem com paginação e filtros
- [x] Visualização de detalhes
- [x] Criação de novos chamados
- [x] Selects dinâmicos para bairros e pessoas assistidas

### ✅ Atendimentos
- [x] Listagem com paginação
- [x] Visualização de detalhes
- [x] Criação de novos atendimentos
- [x] Finalização de atendimentos
- [x] Selects dinâmicos para viaturas, usuários e tipos

### ✅ UX/UI
- [x] Interface responsiva (mobile/desktop)
- [x] Loading states durante requisições
- [x] Tratamento de erros com feedback visual
- [x] Notificações toast para ações importantes
- [x] Design system com Tailwind CSS

## 🚀 Deploy e Acesso Online

A aplicação está disponível em:  
🔗 **[https://desafioreact5325.netlify.app]**

## 📊 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa análise estática do código
- `npm run generate-api` - Gera client API a partir do Swagger

## 🎯 Decisões Técnicas

1. **React Query**: Escolhido para gerenciamento de estado server-state, cache automático e sincronização em background
2. **Context API**: Para gerenciamento de estado de autenticação (client-state simples)
3. **Hooks Personalizados**: Para encapsular lógica de negócio e chamadas API
4. **Tailwind CSS**: Para agilidade no desenvolvimento e design consistente
5. **Orval**: Para geração automática de tipos e hooks a partir da documentação Swagger

## 🔄 Fluxo da Aplicação

1. Login → Redirecionamento para `/chamados`
2. Navegação entre Chamados e Atendimentos via menu
3. Criação de entidades com formulários validados
4. Visualização de detalhes com ações contextuais
5. Logout com limpeza de dados sensíveis

---

**Desenvolvido por** [Felipe Maia]  
**Para** Box3 GuardiaMaria Challenge
