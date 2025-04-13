using HelPaw.Application.DTOs;
using HelPaw.Application.DTOs.Animal;
using HelPaw.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HelPaw.WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnimalController : ControllerBase
{
    private readonly IAnimalService _animalService;

    public AnimalController(IAnimalService animalService)
    {
        _animalService = animalService;
    }

    // GET api/animal?type=Cat&gender=Male...
    [HttpGet]
    public async Task<IActionResult> GetAnimals([FromQuery] AnimalFilterDto filter)
    {
        var result = await _animalService.GetAnimalsAsync(filter);
        return Ok(result);
    }

    // GET api/animal/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> GetAnimal(Guid id)
    {
        var result = await _animalService.GetAnimalByIdAsync(id);
        if (result == null) return NotFound();
        return Ok(result);
    }

    // POST api/animal
    [HttpPost]
    [Authorize(Roles = "Shelter")]
    public async Task<IActionResult> CreateAnimal([FromBody] AnimalCreateDto dto)
    {
        var shelterId = GetUserId(); // метод нижче
        var created = await _animalService.CreateAnimalAsync(dto, shelterId);
        return CreatedAtAction(nameof(GetAnimal), new { id = created.Id }, created);
    }

    // PUT api/animal/{id}
    [HttpPut("{id}")]
    [Authorize(Roles = "Shelter")]
    public async Task<IActionResult> UpdateAnimal(Guid id, [FromBody] AnimalUpdateDto dto)
    {
        var shelterId = GetUserId();
        await _animalService.UpdateAnimalAsync(id, dto, shelterId);
        return NoContent();
    }

    // DELETE api/animal/{id}
    [HttpDelete("{id}")]
    [Authorize(Roles = "Shelter")]
    public async Task<IActionResult> DeleteAnimal(Guid id)
    {
        var shelterId = GetUserId();
        await _animalService.DeleteAnimalAsync(id, shelterId);
        return NoContent();
    }

    private Guid GetUserId()
    {
        var idClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.Parse(idClaim ?? throw new Exception("User ID not found"));
    }

}
