import { useEffect, useState } from "react";
import "./styles.css";
import { Cliente } from "../../models/Cliente";

const ClienteListar: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        console.log("O componente foi carregado...");

        fetch("http://localhost:5096/cliente/listar")
            .then(resposta => resposta.json())
            .then((clientes: Cliente[]) => {
                setClientes(clientes);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                        <td>{cliente.tipo}</td>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.vip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClienteListar;