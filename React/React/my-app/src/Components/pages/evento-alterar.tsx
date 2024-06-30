import { useState } from "react";
import { Evento } from "../../models/Evento";

function EventoAlterar() {
    const [id, setId] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [organizacao, setOrganizacao] = useState<string>('');
    const [local, setLocal] = useState<string>('');
    const [estiloMusical, setEstiloMusical] = useState<string>('');

    function AlterarEvento(e: React.FormEvent) {
        e.preventDefault();
        const evento: Evento = {
            id,
            nome,
            organizacao,
            local,
            estiloMusical
        };
          
        fetch(`http://localhost:5096/eventos/alterar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(evento)
        })
            .then((resposta) => resposta.json())
            .then((data) => {
                setId('');
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
            <h1>Alterar Evento</h1>
            <form onSubmit={AlterarEvento}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />{" "}
                
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />{" "}

                <label>Organização:</label>
                <input type="text" value={organizacao} onChange={(e) => setOrganizacao(e.target.value)} required />{" "}

                <label>Local:</label>
                <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />{" "}

                <label>Estilo Musical:</label>
                <input type="text" value={estiloMusical} onChange={(e) => setEstiloMusical(e.target.value)} required />{" "}

                <button type="submit">Alterar Evento</button>
            </form>
        </div>
    );
}

export default EventoAlterar;
