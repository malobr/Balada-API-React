import { useState } from 'react';
import "./styles.css";
import { Cliente } from "../../models/Cliente";

const ClienteCadastrar: React.FC = () => {
    const [tipo, setTipo] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [vip, setVip] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const novoCliente: Cliente = {
            tipo,
            nome,
            cpf,
            vip
        };

        fetch('http://localhost:5096/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCliente)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setTipo('');
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
            <h2>Cadastrar Novo Cliente</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tipo:
                    <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} />
                </label>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    CPF:
                    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} required />
                </label>
                <label>
                    VIP:
                    <select value={vip.toString()} onChange={e => setVip(e.target.value === 'true')}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default ClienteCadastrar;
