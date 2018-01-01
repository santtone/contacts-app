using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Services
{
    public interface IAzureTokenService
    {
        Task<AccessToken> RequestAccessToken(string username, string password);
    }
}