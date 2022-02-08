using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ActivitySignUp_Backend.Models
{
    public class ACandidate
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string firstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string lastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "DATE")]
        public DateTime startDate { get; set; }

        [Column(TypeName = "int")]
        public int experienceYears { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string activity { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string comments { get; set; }
    }
}
