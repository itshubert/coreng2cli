#### Add Microsoft.EntityFrameworkCore.SqlServer
#### Create entity classes i.e. Hero
#### Create context class i.e. HeroContext
````bash
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
 ````
####Add DI for DB Context in Startup.cs
````bash
public void ConfigureServices(IServiceCollection services)
{
	// Add framework services.
	services.AddMvc();
	services.AddDbContext<HeroContext>(options => options.UseSqlServer(Configuration.GetConnectionString("HeroContext")));
}
````