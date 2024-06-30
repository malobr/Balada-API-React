import { useState } from "react";
import { Cliente } from "../../models/Cliente";

function ClienteAlterar() {
    const [id, setId] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [vip, setVip] = useState<boolean>(false);

    function AlterarCliente(e: React.FormEvent) {
        e.preventDefault();
        const cliente: Cliente = {
            id,
            nome,
            cpf,
            vip
        };
          
        fetch(`http://localhost:5096/cliente/alterar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        })
            .then((resposta) => resposta.json())
            .then((data) => {
                setId('');
                setNome('');
                setCpf('');
                setVip(false);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    return (
        <div>
            <h1>Alterar Cliente</h1>
            <form onSubmit={AlterarCliente}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />{" "}
                
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />{" "}

                <label>CPF:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />{" "}

                <label>VIP:</label>
                <input type="checkbox" checked={vip} onChange={(e) => setVip(e.target.checked)} />{" "}

                <button type="submit">Alterar Cliente</button>
            </form>
        </div>
    );
}

export default ClienteAlterar;
