using Microsoft.EntityFrameworkCore;

namespace API.Models;

//Classe que representa o Entity Framework Core : Code First
public class AppDataContext : DbContext

{
    //Representacao das classes que irão virar tabelas no Banco de Dados
    public DbSet<Cliente> tabClientes { get; set; }//obrigatoriamente tem que ser public...
    public DbSet<Funcionario> tabFuncionarios { get; set; }
    public DbSet<Eventos> tabEventos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        //Configuracao da conexao com o Banco de Dados
        optionsBuilder.UseSqlite("Data Source=Balada.db");//A parte verde ---(Data Source=Balada.db)--- e a string de conexão...

    }



}
