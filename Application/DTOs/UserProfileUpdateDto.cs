namespace HelPaw.Application.DTOs;

public class UserProfileUpdateDto
{
    public string FullName { get; set; } = default!;
    public string City { get; set; } = default!;
    public string? AvatarUrl { get; set; }
    public string? Description { get; set; }
}
