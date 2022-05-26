using System.Reflection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using static SpotifyAPI.Web.Scopes;

namespace Example.CLI.CustomHTML
{
  public class Program
  {
    private static readonly string clientId = Environment.GetEnvironmentVariable("SPOTIFY_CLIENT_ID");
    private static readonly string clientSecret = Environment.GetEnvironmentVariable("SPOTIFY_CLIENT_SECRET");
    private static EmbedIOAuthServer _server;

    public static async Task Main()
    {
      if (string.IsNullOrEmpty(clientId) || string.IsNullOrEmpty(clientSecret))
      {
        throw new NullReferenceException(
          "Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET via environment variables before starting the program"
        );
      }

      _server = new EmbedIOAuthServer(
        new Uri("http://localhost:5000/callback"),
        5000,
        Assembly.GetExecutingAssembly(),
        "Example.CLI.CustomHTML.Resources.custom_site"
      );
      await _server.Start();

      _server.AuthorizationCodeReceived += OnAuthorizationCodeReceived;

      var request = new LoginRequest(_server.BaseUri, clientId, LoginRequest.ResponseType.Code)
      {
        Scope = new List<string> { UserReadEmail }
      };

      Uri uri = request.ToUri();
      try
      {
        BrowserUtil.Open(uri);
      }
      catch (Exception)
      {
        Console.WriteLine("Unable to open URL, manually open: {0}", uri);
      }

      Console.ReadKey();
    }

    private static async Task OnAuthorizationCodeReceived(object sender, AuthorizationCodeResponse response)
    {
      await _server.Stop();

      AuthorizationCodeTokenResponse token = await new OAuthClient().RequestToken(
        new AuthorizationCodeTokenRequest(clientId, clientSecret, response.Code, _server.BaseUri)
      );

      var config = SpotifyClientConfig.CreateDefault().WithToken(token.AccessToken, token.TokenType);
      var spotify = new SpotifyClient(config);

      var me = await spotify.UserProfile.Current();

      Console.WriteLine($"Your E-Mail: {me.Email}");
      Environment.Exit(0);
    }
  }
}
