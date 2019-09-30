﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Domain.Recipe", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CookTime");

                    b.Property<string>("Cuisine");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<string>("Directions");

                    b.Property<string>("Ingredients");

                    b.Property<int>("Rating");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Recipes");
                });

            modelBuilder.Entity("Domain.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("name");

                    b.HasKey("Id");

                    b.ToTable("Values");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            name = "Value 101"
                        },
                        new
                        {
                            Id = 2,
                            name = "Value 102"
                        },
                        new
                        {
                            Id = 3,
                            name = "Value 103"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
