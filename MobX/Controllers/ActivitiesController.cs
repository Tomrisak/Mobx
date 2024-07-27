using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MobX.Application;
using MobX.Application.Activities;
using MobX.Domain;

namespace MobX.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet] // api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            var activities = await Mediator.Send(new List.Query());
            return Ok(activities);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            var activity = await Mediator.Send(new Details.Query { Id = id });
            if (activity == null)
            {
                return NotFound();
            }
            return Ok(activity);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            // Check if the model is valid
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Send the command to create the activity
            var createdActivity = await Mediator.Send(new Create.Command { Activity = activity });

            // Return a CreatedAtAction response with the newly created resource
            return CreatedAtAction(nameof(GetActivity), new { id = createdActivity.Id }, createdActivity);
        }
    }
}
