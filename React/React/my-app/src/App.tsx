import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ClienteListar from './Components/pages/cliente-listar';
import FuncionarioListar from './Components/pages/funcionario-listar';
import EventoListar from './Components/pages/evento-listar';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
            <h1>Balada Gerenciamento</h1>
              <nav>
                  <ul>
                      <li>
                        <Link to="./Components/pages/cliente-listar">Lista de clientes</Link>
                      </li>
                      <li>
                        <Link to="./Components/pages/funcionario-listar">Lista dos funcionarios</Link>
                      </li>
                      <li>
                        <Link to="./Components/pages/evento-listar">Lista dos eventos</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/Components/pages/cliente-listar" element={<ClienteListar />} />
                  <Route path="./Components/pages/funcionario-listar" element={<FuncionarioListar />} />
                  <Route path="./Components/pages/evento-listar" element={<EventoListar />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
