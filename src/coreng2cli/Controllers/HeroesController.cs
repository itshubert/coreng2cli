using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using coreng2cli.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace coreng2cli.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {

        
        private List<Hero> heroes;

        public HeroContext DbContext { get; set; }

        public HeroesController(HeroContext heroContext)
        {
            DbContext = heroContext;
            //this.heroes = new List<Hero>()
            //{
            //    new Hero { Id = 1,  Name =  "Hubert" },
            //    new Hero { Id = 11, Name =  "Mr. Nice" },
            //    new Hero { Id = 12, Name =  "Narco" },
            //    new Hero { Id = 13, Name =  "Bombasto" },
            //    new Hero { Id = 14, Name =  "Celeritas" },
            //    new Hero { Id = 15, Name =  "Magneta" },
            //    new Hero { Id = 16, Name =  "RubberMan" },
            //    new Hero { Id = 17, Name =  "Dynama" },
            //    new Hero { Id = 18, Name =  "Dr IQ" },
            //    new Hero { Id = 19, Name =  "Magma" },
            //    new Hero { Id = 20, Name =  "Tornado" }
            //};
        }

        [HttpGet]
        public IEnumerable<Hero> GetAll()
        {
            //return this.heroes;
            return DbContext.Heroes.ToList();
        }

        [HttpGet("{id}")]
        
        public IActionResult Get(int id)
        {
            //return new ObjectResult(this.heroes.FirstOrDefault(x => x.Id == id));
            return new ObjectResult(DbContext.Heroes.FirstOrDefault(x => x.Id == id));
        }

    }

}
