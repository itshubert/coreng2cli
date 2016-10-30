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

            bool isNew = false;

            if (hero.Id == 0)
            {
                isNew = true;
                DbContext.Heroes.Add(hero);
            }
            else
            {
                DbContext.Heroes.Update(hero);
            }

            DbContext.SaveChanges();

            return isNew ? (IActionResult)CreatedAtRoute("GetHero", new { id = hero.Id }, hero) : (IActionResult)new NoContentResult();
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

        #region "Follower"

        [HttpGet("followers/byhero/{heroId:int}", Name = "GetHeroFollowres")]
        public IEnumerable<Follower> GetHeroFollowers(int heroId)
        {
            return DbContext.Followers.Where(x => x.HeroId == heroId).ToList();
        }

        [HttpGet("followers/{id}", Name = "GetFollower")]
        public IActionResult GetFollower(int id)
        {
            return new ObjectResult(DbContext.Followers.Find(id));
        }


        [HttpPost]
        [Route("followers")]
        public IActionResult SaveFollower([FromBody] Follower follower)
        {
            if (follower == null)
            {
                return BadRequest();
            }

            bool isNew = false;

            if (follower.Id == 0)
            {
                isNew = true;
                DbContext.Followers.Add(follower);
            }
            else
            {
                DbContext.Followers.Update(follower);
            }

            DbContext.SaveChanges();

            if (isNew)
            {
                return CreatedAtRoute("GetFollower", new { id = follower.Id }, follower);
            }
            else
            {
                return Ok(follower);
            }
        }

        #endregion "Follower"
    }

}
