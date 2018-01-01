using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Controllers
{
    [Route("api/authenticate")]
    public class AuthenticationController
    {
        private readonly IAzureTokenService _azureTokenService;

        public AuthenticationController(IAzureTokenService azureTokenService)
        {
            _azureTokenService = azureTokenService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AuthRequest authRequest)
        {
            var token = await _azureTokenService.RequestAccessToken(authRequest.Username, authRequest.Password);
            if (token != null)
            {
                return new JsonResult(token);
            }
            return new UnauthorizedResult();
        }
    }
}