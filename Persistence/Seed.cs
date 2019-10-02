using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Recipes.Any())
            {
                var recipes = new List<Recipe>
                {
                    new Recipe
                    {
                        Title = "Tacos Authenticos",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Recipe 2 months ago",
                        Cuisine = "Mexican",
                        Ingredients = "Cumin, Tomatoes, Tortillas, Chorizo, Cilantro",
                        CookTime = "25 min",
                        Directions = "Cook ingredients thoroughly",
                        Rating = 5
                    },
                    new Recipe
                    {
                        Title = "Tacos Authenticos",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Recipe 1 month ago",
                        Cuisine = "Mexican",
                        Ingredients = "Cumin, Tomatoes, Tortillas, Chorizo, Cilantro",
                        CookTime = "25 min",
                        Directions = "Cook ingredients thoroughly",
                        Rating = 5
                    },
                    new Recipe
                    {
                        Title = "Tacos Authenticos",
                        Date = DateTime.Now,
                        Description = "Recipe Today",
                        Cuisine = "Mexican",
                        Ingredients = "Cumin, Tomatoes, Tortillas, Chorizo, Cilantro",
                        CookTime = "25 min",
                        Directions = "Cook ingredients thoroughly",
                        Rating = 5
                    }
                };
                context.Recipes.AddRange(recipes);
                context.SaveChanges();
            }
        }
    }
}