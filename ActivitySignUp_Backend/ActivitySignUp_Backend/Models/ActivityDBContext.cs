using Microsoft.EntityFrameworkCore;

namespace ActivitySignUp_Backend.Models
{
    public class ActivityDBContext:DbContext
    {
        public ActivityDBContext(DbContextOptions<ActivityDBContext> options) : base(options)
        {

        }

        public DbSet<ACandidate> ACandidates { get; set; }
    }
}
