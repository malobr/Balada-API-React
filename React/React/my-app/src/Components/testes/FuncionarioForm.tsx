import React, { useState } from 'react';

interface Funcionario {
    tipo: string;
    id: string;
    nome: string;
    cpf: string;
    funcao: string;
    eventos: any;
}

interface FuncionarioFormProps {
    onAddFuncionario: (funcionario: Funcionario) => void;
}

const FuncionarioForm: React.FC<FuncionarioFormProps> = ({ onAddFuncionario }) => {
    const [funcionario, setFuncionario] = useState<Funcionario>({
        tipo: 'funcionario',
        id: '',
        nome: '',
        cpf: '',
        funcao: '',
        eventos: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFuncionario({
            ...funcionario,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddFuncionario(funcionario);
        setFuncionario({
            tipo: 'funcionario',
            id: '',
            nome: '',
            cpf: '',
            funcao: '',
            eventos: []
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
                        value={funcionario.id}
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
                        value={funcionario.nome}
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
                        value={funcionario.cpf}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Função:
                    <input
                        type="text"
                        name="funcao"
                        value={funcionario.funcao}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Adicionar Funcionário</button>
        </form>
    );
};

export default FuncionarioForm;
