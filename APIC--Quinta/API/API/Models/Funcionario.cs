using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Funcionario
{
public Funcionario(){
    Id = Guid.NewGuid().ToString();
}

    public string? Tipo {get; set;}

    public string? Id { get; set; }
    [Required(ErrorMessage = "O nome do funcionário é obrigatório!")]
    public string? Nome {get; set;}
[Required(ErrorMessage = "CPF é obrigatório!")]
    public string? Cpf {get; set;}
    [Required(ErrorMessage = "É preciso informar a função do funcionário!")]
    public string? Funcao {get; set;}

    public Eventos? Eventos {get; set;}//Relacao entre as classes e tabelas...


}