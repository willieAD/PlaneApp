using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlaneApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlaneController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<PlaneModel> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new PlaneModel
            {
                Date = DateTime.Now.AddDays(index),
                Brand = "test",
                Model = "test",
                Type = "test"
            })
            .ToArray();
        }
    }
}
