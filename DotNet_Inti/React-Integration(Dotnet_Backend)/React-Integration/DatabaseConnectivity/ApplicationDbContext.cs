using Microsoft.EntityFrameworkCore;
using React_Integration.Model;

namespace React_Integration.DatabaseConnectivity
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){ }
        public DbSet<User> Users { get; set; }
    }
}
