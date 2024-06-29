import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ClienteListar from './Components/pages/cliente-listar';
import FuncionarioListar from './Components/pages/funcionario-listar';
import EventoListar from './Components/pages/evento-listar';
import ClienteCadastrar from './Components/pages/cliente-cadastrar';
import FuncionarioCadastrar from './Components/pages/funcionario-cadastrar';
import EventoCadastrar from './Components/pages/evento-cadastrar';
import ClienteExcluir from './Components/pages/cliente-excluir';
import FuncionarioExcluir from './Components/pages/funcionario-excluir';
import EventoExcluir from './Components/pages/evento-excluir';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
            <h1>Balada Gerenciamento</h1>
              <nav>
                {/* Listar  */}
                  <ul>
                      <li>
                        <Link to="./Components/pages/cliente-listar">Lista de clientes</Link>
                      </li>
                      <li>
                        <Link to="./Components/pages/funcionario-listar">Lista dos funcionários</Link>
                      </li>
                      <li>
                        <Link to="./Components/pages/evento-listar">Lista dos eventos</Link>
                      </li>
                  </ul>
                  {/* Cadastrar */}
                  <ul>
                    <li>
                      <Link to="./Components/pages/cliente-cadastrar">Cadastrar clientes</Link>
                    </li>
                    <li>
                      <Link to="./Components/pages/funcionario-cadastrar">Cadastrar funcionários</Link>
                    </li>
                    <li>
                      <Link to="./Components/pages/evento-cadastrar">Cadastrar eventos</Link>
                    </li>
                  </ul>
                  {/* Excluir */}
                  <ul>
                    <li>
                      <Link to="./Components/pages/cliente-excluir">Excluir clientes</Link>
                    </li>
                    <li>
                      <Link to="./Components/pages/funcionario-excluir">Excluir funcionarios</Link>
                    </li>
                    <li>
                      <Link to="./Components/pages/evento-excluir">Excluir eventos</Link>
                    </li>
                  </ul>
              </nav>
              {/* Listar */}
              <Routes>
                  <Route path="/Components/pages/cliente-listar" element={<ClienteListar />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/evento-listar" element={<EventoListar />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/funcionario-listar" element={<FuncionarioListar />} />
              </Routes>
              {/* Cadastrar */}
              <Routes>
                  <Route path="./Components/pages/cliente-cadastrar" element={<ClienteCadastrar />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/funcionario-cadastrar" element={<FuncionarioCadastrar />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/evento-cadastrar" element={<EventoCadastrar />} />
              </Routes>
              {/* Excluir */}
              <Routes>
                  <Route path="./Components/pages/cliente-excluir " element={<ClienteExcluir />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/funcionario-excluir" element={<FuncionarioExcluir />} />
              </Routes>
              <Routes>
                  <Route path="./Components/pages/evento-excluir" element={<EventoExcluir />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
