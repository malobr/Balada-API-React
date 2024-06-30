﻿// <auto-generated />
using System;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(AppDataContext))]
    [Migration("20240630153117_AtualizacaoFuncionario")]
    partial class AtualizacaoFuncionario
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.6");

            modelBuilder.Entity("API.Models.Cliente", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Tipo")
                        .HasColumnType("TEXT");

                    b.Property<bool?>("Vip")
                        .IsRequired()
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("tabClientes");
                });

            modelBuilder.Entity("API.Models.Eventos", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("EstiloMusical")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Local")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Organizacao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Tipo")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("tabEventos");
                });

            modelBuilder.Entity("API.Models.Funcionario", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Eventos")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Funcao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Tipo")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("tabFuncionarios");
                });
#pragma warning restore 612, 618
        }
    }
}
