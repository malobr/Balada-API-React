import { useState } from "react";
import { Funcionario } from "../../models/Funcionario";

function FuncionarioAlterar() {
    const [id, setId] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [funcao, setFuncao] = useState<string>('');
    const [eventos, setEventos] = useState<string[]>([]);

    function AlterarFuncionario(e: React.FormEvent) {
        e.preventDefault();
        const funcionario: Funcionario = {
            id,
            nome,
            cpf,
            funcao,
            eventos
        };
          
        fetch(`http://localhost:5096/funcionario/alterar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(funcionario)
        })
            .then((resposta) => resposta.json())
            .then((data) => {
                setId('');
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
            <h1>Alterar Funcionário</h1>
            <form onSubmit={AlterarFuncionario}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />{" "}
                
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />{" "}

                <label>CPF:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />{" "}

                <label>Função:</label>
                <input type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} required />{" "}

                <label>
                    Eventos (separados por vírgula):
                    <input 
                        type="text" 
                        value={eventos.join(',')} 
                        onChange={e => setEventos(e.target.value.split(',').map(evento => evento.trim()))} 
                        required 
                    />
                </label>
                
                <button type="submit">Alterar Funcionário</button>
            </form>
        </div>
    );
}

export default FuncionarioAlterar;
