using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreng2cli.Data
{
    public class HeroContext : DbContext
    {
        public HeroContext(DbContextOptions<HeroContext> options) : base (options)
        {
        }

        public DbSet<Hero> Heroes { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity(typeof(Hero), b =>
            {
                b.Property<int>("Id").IsRequired();
                b.Property<string>("Name").IsRequired().HasMaxLength(300);
                b.HasKey("Id");
                b.ToTable("Heroes");
            });

        }
    }
}
