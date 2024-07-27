using MediatR;
using MobX.Domain;
using MobX.Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

public class Create
{
    public class Command : IRequest<Activity> // Changed to return Activity
    {
        public Activity Activity { get; set; }
    }

    public class Handler : IRequestHandler<Command, Activity> // Changed to return Activity
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Activity> Handle(Command request, CancellationToken cancellationToken)
        {
            _context.Activities.Add(request.Activity);
            await _context.SaveChangesAsync(cancellationToken);

            return request.Activity; // Return the created activity
        }
    }
}
