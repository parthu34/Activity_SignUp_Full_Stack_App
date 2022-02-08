#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ActivitySignUp_Backend.Models;

namespace ActivitySignUp_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ACandidatesController : ControllerBase
    {
        private readonly ActivityDBContext _context;

        public ACandidatesController(ActivityDBContext context)
        {
            _context = context;
        }

        // GET: api/ACandidates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ACandidate>>> GetACandidates()
        {
            return await _context.ACandidates.ToListAsync();
        }

        // GET: api/ACandidates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ACandidate>> GetACandidate(int id)
        {
            var aCandidate = await _context.ACandidates.FindAsync(id);

            if (aCandidate == null)
            {
                return NotFound();
            }

            return aCandidate;
        }

        // PUT: api/ACandidates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutACandidate(int id, ACandidate aCandidate)
        {
            aCandidate.id = id;

            _context.Entry(aCandidate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ACandidateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ACandidates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ACandidate>> PostACandidate(ACandidate aCandidate)
        {
            _context.ACandidates.Add(aCandidate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetACandidate", new { id = aCandidate.id }, aCandidate);
        }

        // DELETE: api/ACandidates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteACandidate(int id)
        {
            var aCandidate = await _context.ACandidates.FindAsync(id);
            if (aCandidate == null)
            {
                return NotFound();
            }

            _context.ACandidates.Remove(aCandidate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ACandidateExists(int id)
        {
            return _context.ACandidates.Any(e => e.id == id);
        }
    }
}
