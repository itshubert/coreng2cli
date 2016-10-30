using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using coreng2cli.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace coreng2cli.Controllers
{
    [Route("api/heroes")]
    public class HeroesApiController : Controller
    {

        private List<Hero> heroes;

        public HeroContext DbContext { get; set; }

        public HeroesApiController(HeroContext heroContext)
        {
            DbContext = heroContext;
        }

        [HttpGet]
        public IEnumerable<Hero> GetAll()
        {
            //return this.heroes;
            return DbContext.Heroes.ToList();
        }

        [HttpGet("{id}", Name = "GetHero")]
        public IActionResult Get(int id)
        {
            //return new ObjectResult(this.heroes.FirstOrDefault(x => x.Id == id));
            return new ObjectResult(DbContext.Heroes.FirstOrDefault(x => x.Id == id));
        }

        [HttpPost]
        public IActionResult Save([FromBody]Hero hero)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (hero.Id == 0)
            {
                DbContext.Heroes.Add(hero);
            }
            else
            {
                DbContext.Heroes.Update(hero);
            }

            DbContext.SaveChanges();

            return CreatedAtRoute("GetHero", new { id = hero.Id }, hero);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Hero hero)
        {
            if (hero == null || hero.Id != id)
            {
                return BadRequest();
            }

            DbContext.Heroes.Update(hero);
            return new NoContentResult();
        }

        [HttpGet]
        [Route("followers/{heroId:int}")]
        public IEnumerable<Follower> GetHeroFollowers(int heroId)
        {
            return DbContext.Followers.Where(x => x.HeroId == heroId).ToList();
        }

    }

}
