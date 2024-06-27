import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ClienteListar from './Components/pages/cliente-listar';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                        <Link to="./Components/pages/cliente-listar">Lista de clientes</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/Components/pages/cliente-listar" element={<ClienteListar />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
