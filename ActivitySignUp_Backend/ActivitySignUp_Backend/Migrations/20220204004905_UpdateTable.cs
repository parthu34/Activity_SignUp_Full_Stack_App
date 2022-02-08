using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ActivitySignUp_Backend.Migrations
{
    public partial class UpdateTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "experienceYears",
                table: "ACandidates",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "experienceYears",
                table: "ACandidates");
        }
    }
}
