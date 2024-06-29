import { useEffect, useState } from "react";
import "./styles.css";
import { Evento } from "../../models/Evento";

function EventoListar() {
  const[eventos, setEventos] = useState<Evento[]>([]);
  useEffect(() => {
    console.log("O componente foi carregado...");

    //FETCH ou AXIOS
    fetch("http://localhost:5096/eventos/listar")
      .then((resposta) => resposta.json())
      .then((eventos : Evento[]) => {
        setEventos(eventos);
      });
  }, []);

  return (
    <div>
      <h1>Lista dos Eventos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Organização</th>
            <th>Local</th>
            <th>Estilo Musical</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map(evento =>(
          <tr key={evento.id}>
            <td>{evento.tipo}</td>
            <td>{evento.id}</td>
            <td>{evento.nome}</td>
            <td>{evento.organizacao}</td>
            <td>{evento.local}</td>
            <td>{evento.estiloMusical}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventoListar;