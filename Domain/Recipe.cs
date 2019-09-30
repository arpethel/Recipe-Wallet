using System;

namespace Domain
{
    public class Recipe
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Cuisine { get; set; }
        public DateTime Date { get; set; }
        public string Ingredients { get; set; }
        public string CookTime { get; set; }
        public string Directions { get; set; }
        public int Rating { get; set; }
    }
}