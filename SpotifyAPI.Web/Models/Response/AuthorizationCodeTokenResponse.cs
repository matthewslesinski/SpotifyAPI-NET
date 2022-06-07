using System;

namespace SpotifyAPI.Web
{
  public class AuthorizationCodeTokenResponse: IRefreshableToken, IEquatable<AuthorizationCodeTokenResponse>
  {
    public string AccessToken { get; set; } = default!;
    public string TokenType { get; set; } = default!;
    public int ExpiresIn { get; set; }
    public string Scope { get; set; } = default!;
    public string RefreshToken { get; set; } = default!;

    /// <summary>
    ///   Auto-Initalized to UTC Now
    /// </summary>
    /// <value></value>
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public bool IsExpired { get => CreatedAt.AddSeconds(ExpiresIn) <= DateTime.UtcNow; }

    public override bool Equals(object? obj) => this == obj || (obj != null && obj is AuthorizationCodeTokenResponse other && Equals(other));

    public bool Equals(AuthorizationCodeTokenResponse? other) {
        return this == other || (other != null
        && Equals(AccessToken, other.AccessToken)
				&& Equals(RefreshToken, other.RefreshToken)
				&& Equals(CreatedAt, other.CreatedAt)
				&& Equals(ExpiresIn, other.ExpiresIn)
				&& Equals(TokenType, other.TokenType)
				&& Equals(Scope, other.Scope));
    }

    public override int GetHashCode() => HashCode.Combine(AccessToken, TokenType, ExpiresIn, Scope, RefreshToken, CreatedAt, IsExpired);
  }
}

