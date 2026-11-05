using Microsoft.AspNetCore.Mvc;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            if (id != 1)
            {
                return NotFound(new { message = "Product not found" });
            }

            var product = new
            {
                id = 1,
                name = "Sample Product",
                price = 29.99
            };

            return Ok(product);
        }
    }
}