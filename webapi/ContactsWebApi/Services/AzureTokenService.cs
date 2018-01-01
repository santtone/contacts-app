using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using ContactsWebApi.Config;
using ContactsWebApi.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace ContactsWebApi.Services
{
    public class AzureTokenService : IAzureTokenService
    {
        private readonly AzureSettings _azureSettings;

        public AzureTokenService(IOptions<AzureSettings> settings)
        {
            _azureSettings = settings.Value;
        }

        public async Task<AccessToken> RequestAccessToken(string username, string password)
        {
            var authenticationParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("client_id", _azureSettings.ApplicationId),
                new KeyValuePair<string, string>("resource", _azureSettings.Resource),
                new KeyValuePair<string, string>("username", username),
                new KeyValuePair<string, string>("password", password),
                new KeyValuePair<string, string>("grant_type", _azureSettings.GrantType),
                new KeyValuePair<string, string>("client_secret", _azureSettings.Key)
            };

            AccessToken token = null;
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Cache-Control", "no-cache");
                HttpContent content = new FormUrlEncodedContent(authenticationParams);
                var response = await httpClient.PostAsync(_azureSettings.AuthenticationEndpoint, content);

                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    token = JsonConvert.DeserializeObject<AccessToken>(data);
                }
            }
            return token;
        }
    }
}