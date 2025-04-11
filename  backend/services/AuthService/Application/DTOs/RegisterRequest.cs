using AuthService.Domain.Entities;

namespace AuthService.Application.DTOs;
    public class RegisterRequest
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Role { get; set; }
    }
