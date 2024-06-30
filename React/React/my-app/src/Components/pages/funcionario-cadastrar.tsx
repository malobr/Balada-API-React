import React, { useState } from 'react';
import "./styles.css";
import { Funcionario } from "../../models/Funcionario";

const FuncionarioCadastrar: React.FC = () => {
    const [tipo, setTipo] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [funcao, setFuncao] = useState<string>('');
    const [eventos, setEventos] = useState<string[]>([]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const novoFuncionario: Funcionario = {
            tipo,
            nome,
            cpf,
            funcao,
            eventos
        };

        fetch('http://localhost:5096/funcionario/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoFuncionario)
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
            setFuncao('');
            setEventos([]);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    return (
        <div>
            <h2>Cadastrar Novo Funcionário</h2>
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
                    Função:
                    <input type="text" value={funcao} onChange={e => setFuncao(e.target.value)} required />
                </label>
                <label>
                    Eventos (separados por vírgula):
                    <input 
                        type="text" 
                        value={eventos.join(',')} 
                        onChange={e => setEventos(e.target.value.split(',').map(evento => evento.trim()))} 
                        required 
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default FuncionarioCadastrar;
