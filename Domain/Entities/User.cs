namespace HelPaw.Domain.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Email { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public string Role { get; set; } = null!;

    public string? FullName { get; set; }
    public string? City { get; set; }
    public string? AvatarUrl { get; set; }
    public string? Description { get; set; }
}

