using System.ComponentModel.DataAnnotations;
using API.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Adiciona o serviço DbContext ao contêiner de serviços
builder.Services.AddDbContext<AppDataContext>();

// Adiciona o serviço de controllers ao contêiner de serviços
builder.Services.AddControllers();

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy => policy
            .WithOrigins("http://localhost:3000") // Substitua pelo endereço do seu frontend React
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configura o middleware CORS
app.UseCors("AllowSpecificOrigin");

app.MapGet("/", () => "API Gerenciadora de Balada");

// Cadastro de clientes
app.MapPost("/cliente/cadastrar", ([FromBody] Cliente c, [FromServices] AppDataContext ctx) => {
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(c, new ValidationContext(c), erros, true)) {
        return Results.BadRequest(erros);
    }

    Cliente? clienteEncontrado = ctx.tabClientes.FirstOrDefault(x => x.Cpf == c.Cpf);
    if (clienteEncontrado is null) {
        ctx.tabClientes.Add(c);
        ctx.SaveChanges();
        return Results.Created("", c);
    }
    return Results.BadRequest("CPF já existente...");
});

// Cadastro de funcionários
app.MapPost("/funcionario/cadastrar", ([FromBody] Funcionario f, [FromServices] AppDataContext ctx) => {
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(f, new ValidationContext(f), erros, true)) {
        return Results.BadRequest(erros);
    }

    Funcionario? funcionarioEncontrado = ctx.tabFuncionarios.FirstOrDefault(x => x.Cpf == f.Cpf);
    if (funcionarioEncontrado is null) {
        ctx.tabFuncionarios.Add(f);
        ctx.SaveChanges();
        return Results.Created("", f);
    }
    return Results.BadRequest("CPF já existente...");
});

// Cadastro de eventos
app.MapPost("/eventos/cadastrar", ([FromBody] Eventos e, [FromServices] AppDataContext ctx) => {
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(e, new ValidationContext(e), erros, true)) {
        return Results.BadRequest(erros);
    }

    Eventos? eventoEncontrado = ctx.tabEventos.FirstOrDefault(x => x.Nome == e.Nome);
    if (eventoEncontrado is null) {
        ctx.tabEventos.Add(e);
        ctx.SaveChanges();
        return Results.Created("", e);
    }
    return Results.BadRequest("Este Evento já está no sistema!");
});

// Listar clientes
app.MapGet("/cliente/listar", ([FromServices] AppDataContext ctx) => {
    if (ctx.tabClientes.Any()) {
        return Results.Ok(ctx.tabClientes.ToList());
    }
    return Results.BadRequest("No momento, não há clientes no sistema...");
});

// Listar funcionários
app.MapGet("/funcionario/listar", ([FromServices] AppDataContext ctx) => {
    if (ctx.tabFuncionarios.Any()) {
        return Results.Ok(ctx.tabFuncionarios.ToList());
    }
    return Results.BadRequest("Sem funcionários cadastrados no momento...");
});

// Listar eventos
app.MapGet("/eventos/listar", ([FromServices] AppDataContext ctx) => {
    if (ctx.tabEventos.Any()) {
        return Results.Ok(ctx.tabEventos.ToList());
    }
    return Results.BadRequest("Aguardando eventos...");
});

// Listar todos
app.MapGet("/listar-todos", ([FromServices] AppDataContext ctx) => {
    var todosOsRecursos = new {
        Clientes = ctx.tabClientes.ToList(),
        Funcionarios = ctx.tabFuncionarios.ToList(),
        Eventos = ctx.tabEventos.ToList()
    };

    return Results.Ok(todosOsRecursos);
});

// Deletar cliente
app.MapDelete("/cliente/excluir/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) => {
    Cliente? c = ctx.tabClientes.FirstOrDefault(x => x.Id == id);
    if (c is null) {
        return Results.NotFound("Cliente não encontrado!");
    }
    ctx.tabClientes.Remove(c);
    ctx.SaveChanges();
    return Results.Ok("Cliente deletado!");
});

// Deletar funcionário
app.MapDelete("/funcionario/excluir/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) => {
    Funcionario? f = ctx.tabFuncionarios.FirstOrDefault(x => x.Id == id);
    if (f is null) {
        return Results.NotFound("Funcionário não encontrado!");
    }
    ctx.tabFuncionarios.Remove(f);
    ctx.SaveChanges();
    return Results.Ok("Funcionário deletado!");
});

// Deletar evento
app.MapDelete("/eventos/excluir/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) => {
    Eventos? e = ctx.tabEventos.FirstOrDefault(x => x.Id == id);
    if (e is null) {
        return Results.NotFound("Evento não encontrado!");
    }
    ctx.tabEventos.Remove(e);
    ctx.SaveChanges();
    return Results.Ok("Evento deletado!");
});

// Alterar cliente
app.MapPut("/cliente/alterar/{id}", ([FromRoute] string id, [FromBody] Cliente clienteAlterado, [FromServices] AppDataContext ctx) => {
    Cliente? cliente = ctx.tabClientes.FirstOrDefault(x => x.Id == id);
    if (cliente is null) {
        return Results.NotFound("Cliente não encontrado!");
    }
    cliente.Nome = clienteAlterado.Nome;
    cliente.Cpf = clienteAlterado.Cpf;
    cliente.Vip = clienteAlterado.Vip;
    ctx.tabClientes.Update(cliente);
    ctx.SaveChanges();
    return Results.Ok("Informacoes do Cliente alteradas!");
});

// Alterar funcionário
app.MapPut("/funcionario/alterar/{id}", ([FromRoute] string id, [FromBody] Funcionario funcionarioAlterado, [FromServices] AppDataContext ctx) => {
    Funcionario? funcionario = ctx.tabFuncionarios.FirstOrDefault(x => x.Id == id);
    if (funcionario is null) {
        return Results.NotFound("Funcionario não encontrado!");
    }
    funcionario.Nome = funcionarioAlterado.Nome;
    funcionario.Cpf = funcionarioAlterado.Cpf;
    funcionario.Funcao = funcionarioAlterado.Funcao;
    ctx.tabFuncionarios.Update(funcionario);
    ctx.SaveChanges();
    return Results.Ok("Informacoes do Funcionario alteradas!");
});

// Alterar evento
app.MapPut("/eventos/alterar/{id}", ([FromRoute] string id, [FromBody] Eventos eventosAlterado, [FromServices] AppDataContext ctx) => {
    Eventos? eventos = ctx.tabEventos.FirstOrDefault(x => x.Id == id);
    if (eventos is null) {
        return Results.NotFound("Evento não encontrado!");
    }
    eventos.Nome = eventosAlterado.Nome;
    eventos.Organizacao = eventosAlterado.Organizacao;
    eventos.Local = eventosAlterado.Local;
    eventos.EstiloMusical = eventosAlterado.EstiloMusical;
    ctx.tabEventos.Update(eventos);
    ctx.SaveChanges();
    return Results.Ok("Informacoes do Evento alteradas!");
});

// Verificar se cliente é VIP
app.MapGet("/cliente/verificarVip/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) => {
    Cliente? c = ctx.tabClientes.FirstOrDefault(x => x.Id == id);
    if (c == null) {
        return Results.NotFound("Cliente não encontrado.");
    }

    if (c.Vip == true) {
        var vantagensVip = new List<string>
        {
            "Acesso à área VIP",
            "Descontos de 20% no bar",
            "Atendimento preferencial",
            "Entrada prioritária"
        };

        return Results.Ok(new {
            Mensagem = $"O cliente {c.Nome} é VIP.",
            Vantagens = vantagensVip
        });
    } else {
        return Results.Ok($"O cliente {c.Nome} não é VIP.");
    }
});

// Buscar cliente pelo CPF
app.MapGet("/cliente/buscar/{Cpf}", ([FromRoute] string cpf, [FromServices] AppDataContext ctx) => {
    Cliente? c = ctx.tabClientes.FirstOrDefault(x => x.Cpf == cpf);
    if (c is null) {
        return Results.NotFound("CPF não encontrado...");
    }

    if (c.Vip is true) {
        var vantagensVip = new List<string>
        {
            "Acesso à área VIP",
            "Descontos de 20% no bar",
            "Atendimento preferencial",
            "Entrada prioritária"
        };

        return Results.Ok(new {
            Cliente = c,
            Mensagem = $"O cliente {c.Nome} é VIP.",
            Vantagens = vantagensVip
        });
    } else {
        return Results.Ok(new {
            Cliente = c,
            Mensagem = $"O cliente {c.Nome} não é VIP."
        });
    }
});

app.Run();
