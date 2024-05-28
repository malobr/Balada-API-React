import React, { useState } from 'react';

interface Evento {
    tipo: string;
    id: string;
    nome: string;
    organizacao: string;
    local: string;
    estiloMusical: string;
}

interface EventoFormProps {
    onAddEvento: (evento: Evento) => void;
}

const EventoForm: React.FC<EventoFormProps> = ({ onAddEvento }) => {
    const [evento, setEvento] = useState<Evento>({
        tipo: 'evento',
        id: '',
        nome: '',
        organizacao: '',
        local: '',
        estiloMusical: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEvento({
            ...evento,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddEvento(evento);
        setEvento({
            tipo: 'evento',
            id: '',
            nome: '',
            organizacao: '',
            local: '',
            estiloMusical: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    ID:
                    <input
                        type="text"
                        name="id"
                        value={evento.id}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={evento.nome}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Organização:
                    <input
                        type="text"
                        name="organizacao"
                        value={evento.organizacao}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Local:
                    <input
                        type="text"
                        name="local"
                        value={evento.local}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Estilo Musical:
                    <input
                        type="text"
                        name="estiloMusical"
                        value={evento.estiloMusical}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Adicionar Evento</button>
        </form>
    );
};

export default EventoForm;
