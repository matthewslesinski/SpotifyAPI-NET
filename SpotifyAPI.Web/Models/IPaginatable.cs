using System.Collections.Generic;

namespace SpotifyAPI.Web
{
  public interface IPaginatable<T>
  {
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    string? Next { get; set; }

    List<T>? Items { get; set; }
  }

  public interface IPaginatable<T, TNext>
  {
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    string? Next { get; set; }

    List<T>? Items { get; set; }
  }

  public interface IFinitePaginatable
  {
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    string? Next { get; set; }
    int? Limit { get; set; }
    int? Offset { get; set; }
    int? Total { get; set; }
  }
}

