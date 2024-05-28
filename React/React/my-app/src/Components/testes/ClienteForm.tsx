import React, { useState } from 'react';

interface Cliente {
    tipo: string;
    id: string;
    nome: string;
    cpf: string;
    vip: boolean;
}

interface ClienteFormProps {
    onAddCliente: (cliente: Cliente) => void;
}

const ClienteForm: React.FC<ClienteFormProps> = ({ onAddCliente }) => {
    const [cliente, setCliente] = useState<Cliente>({
        tipo: 'cliente',
        id: '',
        nome: '',
        cpf: '',
        vip: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setCliente({
            ...cliente,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddCliente(cliente);
        setCliente({
            tipo: 'cliente',
            id: '',
            nome: '',
            cpf: '',
            vip: false,
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
                        value={cliente.id}
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
                        value={cliente.nome}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    CPF:
                    <input
                        type="text"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    VIP:
                    <input
                        type="checkbox"
                        name="vip"
                        checked={cliente.vip}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Adicionar Cliente</button>
        </form>
    );
}

export default ClienteForm;
