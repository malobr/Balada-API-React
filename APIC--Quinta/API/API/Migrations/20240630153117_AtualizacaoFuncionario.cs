using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoFuncionario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tabFuncionarios_tabEventos_EventosId",
                table: "tabFuncionarios");

            migrationBuilder.DropIndex(
                name: "IX_tabFuncionarios_EventosId",
                table: "tabFuncionarios");

            migrationBuilder.DropColumn(
                name: "EventosId",
                table: "tabFuncionarios");

            migrationBuilder.AddColumn<string>(
                name: "Eventos",
                table: "tabFuncionarios",
                type: "TEXT",
                nullable: false,
                defaultValue: "[]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Eventos",
                table: "tabFuncionarios");

            migrationBuilder.AddColumn<string>(
                name: "EventosId",
                table: "tabFuncionarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tabFuncionarios_EventosId",
                table: "tabFuncionarios",
                column: "EventosId");

            migrationBuilder.AddForeignKey(
                name: "FK_tabFuncionarios_tabEventos_EventosId",
                table: "tabFuncionarios",
                column: "EventosId",
                principalTable: "tabEventos",
                principalColumn: "Id");
        }
    }
}
