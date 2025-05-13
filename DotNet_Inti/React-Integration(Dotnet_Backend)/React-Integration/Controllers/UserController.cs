using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React_Integration.DatabaseConnectivity;
using React_Integration.Model;

namespace React_Integration.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetUser()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddUser([FromBody] UserDto userDto)
        {
            var user = new User()
            {
                Name = userDto.Name,
                Email = userDto.Email,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpDelete("deleteUser/{userId}")]
        public async Task<IActionResult> DeleteUser(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return Ok("User Deleted!!!");
            }
            else
            {
                return NotFound("User not found!!!");
            }
        }

        [HttpPut("updateUser/{userId}")]
        public async Task<IActionResult> UpdateUser(int userId, [FromBody] UserDto userDto)
        {
            var existingUser = await _context.Users.FindAsync(userId);
            if (existingUser != null) {
                existingUser.Name = userDto.Name;
                existingUser.Email = userDto.Email;

                await _context.SaveChangesAsync();
                return Ok("User upadted sucessfully!!!");
            }
            else
            {
                return NotFound("User not found to be updated!!!");
            }
        }

        [HttpGet("dummy")]
        public IActionResult Dummy()
        {
            return Ok("Welcome Subrato, Server Started!!! you can connect to frontend.");
        }
    }
}
