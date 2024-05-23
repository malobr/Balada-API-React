using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Cliente
{
public Cliente(){
    Id = Guid.NewGuid().ToString();
}

    public string? Tipo {get; set;}
    public string? Id { get; set; }
    [Required(ErrorMessage = "O nome do cliente é obrigatório!")]
    public string? Nome {get; set;}
    [Required(ErrorMessage = "CPF é obrigatório!")]
    public string? Cpf {get; set;}
    [Required(ErrorMessage = "É necessário saber se o cliente é VIP!")]
    public bool? Vip {get; set;} = false;


}