// Application/DTOs/AnimalFilterDto.cs
namespace HelPaw.Application.DTOs.Animal;

public class AnimalFilterDto
{
    public string? Type { get; set; }               // Dog, Cat і т.д.
    public string? Gender { get; set; }             // Male, Female
    public int? MinAge { get; set; }                // Мінімальний вік
    public int? MaxAge { get; set; }                // Максимальний вік
    public string? Size { get; set; }               // Small, Medium, Large
    public string? Condition { get; set; }         // ✅ для фільтра
    public bool? IsVaccinated { get; set; }        // ✅ нове
    public bool? IsSterilized { get; set; }  
    public string? City { get; set; }               // Фільтр за містом
    public bool? IsActive { get; set; }             // Активні/неактивні
    public Guid? ShelterId { get; set; }            // Притулок
}
