using System;
using Newtonsoft.Json;

namespace ContactsWebApi.Models
{
    public class AccessToken
    {
        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        [JsonProperty("expires_in")]
        public string ExpiresIn { get; set; }

        [JsonProperty("ext_expires_in")]
        public string ExtExpiresIn { get; set; }

        [JsonProperty("expires_on")]
        public string ExpiresOn { get; set; }

        [JsonProperty("not_before")]
        public string NotBefore { get; set; }

        [JsonProperty("resource")]
        public string Resource { get; set; }

        [JsonProperty("access_token")]
        public string Token { get; set; }

        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }
    }
}
