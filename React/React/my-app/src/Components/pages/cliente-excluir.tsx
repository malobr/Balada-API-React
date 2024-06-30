import React, { useState } from 'react';
import "./styles.css";
import { Cliente } from "../../models/Cliente";

const ClienteExcluir: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        fetch(`http://localhost:5096/cliente/excluir/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setMensagem(`Cliente ${data.nome} excluído com sucesso!`);
            setId('');
        })
        .catch(error => {
            setMensagem('Erro ao excluir cliente: ' + error.message);
            console.error('Erro:', error);
        });
    }

    return (
        <div>
            <h2>Excluir Cliente</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID do cliente:
                    <input type="text" value={id} onChange={e => setId(e.target.value)} required />
                </label>
                <button type="submit">Excluir</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default ClienteExcluir;
