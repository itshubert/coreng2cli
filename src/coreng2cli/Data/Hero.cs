﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreng2cli.Data
{
    public class Hero
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Follower> Followers { get; set; }
    }
}
