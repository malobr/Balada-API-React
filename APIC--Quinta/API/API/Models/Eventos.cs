using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Eventos
{
public Eventos(){
    Id = Guid.NewGuid().ToString();
}

    public string? Tipo {get; set;}

    public string? Id { get; set; }

    [Required(ErrorMessage = "O nome do evento é obrigatório!")]

    public string? Nome {get; set;}
    [Required(ErrorMessage = "A organização é obrigatória")]
    
    public string? Organizacao {get; set;}
    [Required(ErrorMessage = "O local é obrigatório")]
    public string? Local {get; set;}
    [Required(ErrorMessage = "O estilo musical é obrigatório")]
    public string? EstiloMusical { get; set; }  // Usar o enum diretamente
    }

    