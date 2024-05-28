# Projeto: Minimal API para Gerenciamento de Balada

## Resumo do Projeto
O projeto consiste em uma Minimal API para gerenciar uma balada, juntamente com um frontend em React para interagir com a API. Através dessa solução, os usuários poderão cadastrar, visualizar, atualizar e excluir clientes, funcionários e eventos, além de realizar consultas e edições de informações de forma intuitiva.

## Funcionalidades do Projeto
- Cadastro, atualização e exclusão de clientes
- Cadastro, atualização e exclusão de funcionários
- Cadastro, atualização e exclusão de eventos
- Consulta de informações de clientes, funcionários e eventos
- Edição de informações de clientes, funcionários e eventos

## Detalhes do Backend (API)
### Tecnologias Utilizadas
- .NET
- C#
- Bibliotecas EntityFramework...
- Sqlite - Banco de Dados

## Detalhes do FrontEnd (React - Template em Typescript)
### Tecnologias Utilizadas
- React
- Nodejs
- Html, css, Typescript/JS

## Ideia de Projeto
### Parte BackEnd Pronta, FrontEnd em andamento, por isso as pastas do Front nao estao completas...

```bash
projeto-balada/
│
├── BACKEND -|- APIC--QUINTA/API/API
│   ├── Dependencies/
│   ├── Properties/
│   ├── Migrations/
│   │   ├── AppDataContextModelSnapshot.cs
│   │   └── 20240519164334_InicialCreate.cs
│   ├── models/
│   │   ├── AppDataContext.cs
│   │   ├── Cliente.cs
│   │   ├── Eventos.cs
│   │   └── Funcionario.cs
│   ├── appsettings.Development.json
│   ├── Balada.db
│   ├── Balada.http
│   └── Program.cs
│
└── FRONTEND -|- React/React/my-app //ESTA PARTE E SO UMA IDEIA
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/         # Componentes reutilizáveis
    │   │   ├── Header.tsx     # Exemplo de componente de cabeçalho
    │   │   ├── Footer.tsx     # Exemplo de componente de rodapé
    │   │   └── ...
    │   ├── pages/              # Páginas da aplicação
    │   │   ├── Home.tsx       # Página inicial
    │   │   ├── Clientes.tsx   # Página de gerenciamento de clientes
    │   │   ├── Funcionarios.tsx # Página de gerenciamento de funcionários
    │   │   ├── Eventos.tsx     # Página de gerenciamento de eventos
    │   │   └── ...
    │   ├── services/           # Serviços para comunicação com a API
    │   │   ├── api.ts         # Configurações e métodos de requisição HTTP
    │   │   ├── clienteService.ts  # Serviços relacionados a clientes
    │   │   ├── funcionarioService.ts # Serviços relacionados a funcionários
    │   │   ├── eventoService.ts     # Serviços relacionados a eventos
    │   │   └── ...
    │   ├── assets/             # Arquivos estáticos (imagens, ícones, etc.)
    │   ├── styles/             # Estilos globais ou compartilhados
    │   ├── App.tsx             # Componente principal da aplicação
    │   └── index.tsx           # Ponto de entrada da aplicação
    └── ...

```
### Configuração e Execução
1. Clone o repositório do backend para sua máquina local:
   ```bash
   git clone https://github.com/malobr/Balada-API-React.git


 
