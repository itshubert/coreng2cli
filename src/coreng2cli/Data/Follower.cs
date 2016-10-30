using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreng2cli.Data
{
    public class Follower
    {
        public int Id { get; set; }
        public int HeroId { get; set; }
        public string Name { get; set; }

        public Hero Hero { get; set; }
    }
}
