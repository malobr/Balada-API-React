import React, { useState } from 'react';
import "./styles.css";
import { Funcionario } from "../../models/Funcionario";

const FuncionarioExcluir: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        fetch(`http://localhost:5096/funcionario/excluir/${id}`, {
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
            setMensagem(`Funcionário ${data.nome} excluído com sucesso!`);
            setId('');
        })
        .catch(error => {
            setMensagem('Erro ao excluir funcionário: ' + error.message);
            console.error('Erro:', error);
        });
    }

    return (
        <div>
            <h2>Excluir Funcionário</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID do Funcionário:
                    <input type="text" value={id} onChange={e => setId(e.target.value)} required />
                </label>
                <button type="submit">Excluir</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default FuncionarioExcluir;
