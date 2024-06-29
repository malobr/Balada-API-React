import { useState } from 'react';
import "./styles.css";
import { Evento } from "../../models/Evento";

const EventoCadastrar: React.FC = () => {
    const [tipo, setTipo] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [organizacao, setOrganizacao] = useState<string>('');
    const [local, setLocal] = useState<string>('');
    const [estiloMusical, setEstiloMusical] = useState<string>('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const novoEvento: Evento = {
            tipo,
            nome,
            organizacao,
            local,
            estiloMusical
        };

        fetch('http://localhost:5096/eventos/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoEvento)
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
            setOrganizacao('');
            setLocal('');
            setEstiloMusical('');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    return (
        <div>
            <h2>Cadastrar Novo Evento</h2>
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
                    Organização:
                    <input type="text" value={organizacao} onChange={e => setOrganizacao(e.target.value)} required />
                </label>
                <label>
                    Local:
                    <input type="text" value={local} onChange={e => setLocal(e.target.value)} required />
                </label>
                <label>
                    Estilo musical:
                    <input type="text" value={estiloMusical} onChange={e => setEstiloMusical(e.target.value)} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default EventoCadastrar;
