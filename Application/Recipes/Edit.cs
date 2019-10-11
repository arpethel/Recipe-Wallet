using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Recipes
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Cuisine { get; set; }
            public DateTime? Date { get; set; }
            public string Ingredients { get; set; }
            public string CookTime { get; set; }
            public string Directions { get; set; }
            public int? Rating { get; set; }
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
                var recipe = await _context.Recipes.FindAsync(request.Id);

                if (recipe == null)
                {
                    throw new Exception("Could not find activity");
                }

                recipe.Title = request.Title ?? recipe.Title;
                recipe.Description = request.Description ?? recipe.Description;
                recipe.Cuisine = request.Cuisine ?? recipe.Cuisine;
                recipe.Date = request.Date ?? recipe.Date;
                recipe.Ingredients = request.Ingredients ?? recipe.Ingredients;
                recipe.CookTime = request.CookTime ?? recipe.CookTime;
                recipe.Directions = request.Directions ?? recipe.Directions;
                recipe.Rating = request.Rating ?? recipe.Rating;

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}