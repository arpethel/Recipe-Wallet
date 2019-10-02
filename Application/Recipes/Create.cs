using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Recipes
{
    public class Create
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var recipe = new Recipe
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Cuisine = request.Cuisine,
                    Date = request.Date,
                    Ingredients = request.Ingredients,
                    CookTime = request.CookTime,
                    Directions = request.Directions,
                    Rating = request.Rating
                };
                _context.Recipes.Add(recipe);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}