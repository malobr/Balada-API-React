import { useEffect, useState } from "react";
import "./styles.css";
import { Funcionario } from "../../models/Funcionario";

function FuncionarioListar() {
  const[funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  useEffect(() => {
    console.log("O componente foi carregado...");

    //FETCH ou AXIOS
    fetch("http://localhost:5096/funcionario/listar")
      .then((resposta) => resposta.json())
      .then((funcionarios : Funcionario[]) => {
        setFuncionarios(funcionarios);
      });
  }, []);

  return (
    <div>
      <h1>Lista dos FUncionarios</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Id</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Função</th>
            <th>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(funcionario =>(
          <tr key={funcionario.id}>
            <td>{funcionario.tipo}</td>
            <td>{funcionario.id}</td>
            <td>{funcionario.nome}</td>
            <td>{funcionario.cpf}</td>
            <td>{funcionario.funcao}</td>
            <td>{funcionario.eventos}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuncionarioListar();