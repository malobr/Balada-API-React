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
import ClienteAlterar from './Components/pages/cliente-alterar';
import FuncionarioAlterar from './Components/pages/funcionario-alterar';
import EventoAlterar from './Components/pages/evento-alterar';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
            <h1>Balada Gerenciamento</h1>
              <nav>
                {/* Listar  */}
                  <ul>
                      <li>
                        <Link to="/cliente-listar">Lista de clientes</Link>
                      </li>
                      <li>
                        <Link to="/funcionario-listar">Lista dos funcionários</Link>
                      </li>
                      <li>
                        <Link to="/evento-listar">Lista dos eventos</Link>
                      </li>
                  </ul>
                  {/* Cadastrar */}
                  <ul>
                    <li>
                      <Link to="/cliente-cadastrar">Cadastrar clientes</Link>
                    </li>
                    <li>
                      <Link to="/funcionario-cadastrar">Cadastrar funcionários</Link>
                    </li>
                    <li>
                      <Link to="/evento-cadastrar">Cadastrar eventos</Link>
                    </li>
                  </ul>
                  {/* Excluir */}
                  <ul>
                    <li>
                      <Link to="/cliente-excluir">Excluir clientes</Link>
                    </li>
                    <li>
                      <Link to="/funcionario-excluir">Excluir funcionários</Link>
                    </li>
                    <li>
                      <Link to="/evento-excluir">Excluir eventos</Link>
                    </li>
                  </ul>
                  {/* Alterar */}
                  <ul>
                    <li>
                      <Link to="/cliente-alterar">Alterar clientes</Link>
                    </li>
                    <li>
                      <Link to="/funcionario-alterar">Alterar funcionários</Link>
                    </li>
                    <li>
                      <Link to="/evento-alterar">Alterar eventos</Link>
                    </li>
                  </ul>
              </nav>
              <Routes>
                  {/* Listar */}
                  <Route path="/cliente-listar" element={<ClienteListar />} />
                  <Route path="/evento-listar" element={<EventoListar />} />
                  <Route path="/funcionario-listar" element={<FuncionarioListar />} />
                  {/* Cadastrar */}
                  <Route path="/cliente-cadastrar" element={<ClienteCadastrar />} />
                  <Route path="/funcionario-cadastrar" element={<FuncionarioCadastrar />} />
                  <Route path="/evento-cadastrar" element={<EventoCadastrar />} />
                  {/* Excluir */}
                  <Route path="/cliente-excluir" element={<ClienteExcluir />} />
                  <Route path="/funcionario-excluir" element={<FuncionarioExcluir />} />
                  <Route path="/evento-excluir" element={<EventoExcluir />} />
                  {/* Alterar */}
                  <Route path="/cliente-alterar" element={<ClienteAlterar />} />
                  <Route path="/funcionario-alterar" element={<FuncionarioAlterar />} />
                  <Route path="/evento-alterar" element={<EventoAlterar />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
