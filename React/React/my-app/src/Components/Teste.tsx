import React, { useEffect, useState } from 'react';
import ClienteForm from './testes/ClienteForm';
import FuncionarioForm from './testes/FuncionarioForm';
import EventoForm from './testes/EventoForm';

interface Cliente {
    tipo: string;
    id: string;
    nome: string;
    cpf: string;
    vip: boolean;
}

interface Funcionario {
    tipo: string;
    id: string;
    nome: string;
    cpf: string;
    funcao: string;
    eventos: any;
}

interface Evento {
    tipo: string;
    id: string;
    nome: string;
    organizacao: string;
    local: string;
    estiloMusical: string;
}

function Teste() {
    const [dados, setDados] = useState<{
        clientes: Cliente[];
        funcionarios: Funcionario[];
        eventos: Evento[];
    }>({
        clientes: [],
        funcionarios: [],
        eventos: []
    });

    useEffect(() => {
        fetch("http://localhost:5096/listar-todos")
            .then(resposta => resposta.json())
            .then(dados => {
                setDados(dados);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    const handleAddCliente = (novoCliente: Cliente) => {
        fetch("http://localhost:5096/adicionar-cliente", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCliente)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da requisição');
            }
            return response.json();
        })
        .then(clienteAdicionado => {
            setDados(prevDados => ({
                ...prevDados,
                clientes: [...prevDados.clientes, clienteAdicionado]
            }));
        })
        .catch(error => console.error('Erro ao adicionar cliente:', error));
    };

    const handleAddFuncionario = (novoFuncionario: Funcionario) => {
        fetch("http://localhost:5096/adicionar-funcionario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoFuncionario)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da requisição');
            }
            return response.json();
        })
        .then(funcionarioAdicionado => {
            setDados(prevDados => ({
                ...prevDados,
                funcionarios: [...prevDados.funcionarios, funcionarioAdicionado]
            }));
        })
        .catch(error => console.error('Erro ao adicionar funcionário:', error));
    };

    const handleAddEvento = (novoEvento: Evento) => {
        fetch("http://localhost:5096/adicionar-evento", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoEvento)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da requisição');
            }
            return response.json();
        })
        .then(eventoAdicionado => {
            setDados(prevDados => ({
                ...prevDados,
                eventos: [...prevDados.eventos, eventoAdicionado]
            }));
        })
        .catch(error => console.error('Erro ao adicionar evento:', error));
    };

    return (
        <div>
            <h1>Teste</h1>

            <div>
                <h2>Clientes</h2>
                <ul>
                    {dados.clientes.map(cliente => (
                        <li key={cliente.id}>
                            ID: {cliente.id},
                            <br /> Nome: {cliente.nome},
                            <br /> CPF: {cliente.cpf},
                            <br /> {cliente.vip ? "- VIP" : ""}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Adicionar Novo Cliente</h2>
                <ClienteForm onAddCliente={handleAddCliente} />
            </div>

            <div>
                <h2>Funcionários</h2>
                <ul>
                    {dados.funcionarios.map(funcionario => (
                        <li key={funcionario.id}>
                            ID: {funcionario.id},
                            <br /> Nome: {funcionario.nome},
                            <br /> CPF: {funcionario.cpf}, 
                            <br /> Funcao: ({funcionario.funcao})
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Adicionar Novo Funcionário</h2>
                <FuncionarioForm onAddFuncionario={handleAddFuncionario} />
            </div>

            <div>
                <h2>Eventos</h2>
                <ul>
                    {dados.eventos.map(evento => (
                        <li key={evento.id}>
                            ID: {evento.id},
                            <br /> Nome: {evento.nome},
                            <br /> Local: {evento.local},
                            <br /> Estilo Musical: ({evento.estiloMusical})
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Adicionar Novo Evento</h2>
                <EventoForm onAddEvento={handleAddEvento} />
            </div>
        </div>
    );
}

export default Teste;
