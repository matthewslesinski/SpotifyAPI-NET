using System.Net.Http;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net;
using System.Threading;

namespace SpotifyAPI.Web.Http
{
  public class APIConnector : IAPIConnector
  {
    private readonly Uri _baseAddress;
    private readonly IAuthenticator? _authenticator;
    private readonly IJSONSerializer _jsonSerializer;
    private readonly IHTTPClient _httpClient;
    private readonly IRetryHandler? _retryHandler;
    private readonly IHTTPLogger? _httpLogger;

    public event EventHandler<IResponse>? ResponseReceived;

    public APIConnector(Uri baseAddress, IAuthenticator authenticator) :
      this(baseAddress, authenticator, new NewtonsoftJSONSerializer(), new NetHttpClient(), null, null)
    { }
    public APIConnector(
      Uri baseAddress,
      IAuthenticator? authenticator,
      IJSONSerializer jsonSerializer,
      IHTTPClient httpClient,
      IRetryHandler? retryHandler,
      IHTTPLogger? httpLogger)
    {
      _baseAddress = baseAddress;
      _authenticator = authenticator;
      _jsonSerializer = jsonSerializer;
      _httpClient = httpClient;
      _retryHandler = retryHandler;
      _httpLogger = httpLogger;
    }

    public Task<T> Delete<T>(Uri uri, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Delete, cancellationToken: cancellationToken);
    }

    public Task<T> Delete<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Delete, parameters, cancellationToken: cancellationToken);
    }

    public Task<T> Delete<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Delete, parameters, body, cancellationToken: cancellationToken);
    }

    public async Task<HttpStatusCode> Delete(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      var response = await SendAPIRequestDetailed(uri, HttpMethod.Delete, parameters, body, cancellationToken: cancellationToken).ConfigureAwait(false);
      return response.StatusCode;
    }

    public Task<T> Get<T>(Uri uri, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Get, cancellationToken: cancellationToken);
    }

    public Task<T> Get<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Get, parameters, cancellationToken: cancellationToken);
    }

    public async Task<HttpStatusCode> Get(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      var response = await SendAPIRequestDetailed(uri, HttpMethod.Get, parameters, body, cancellationToken: cancellationToken).ConfigureAwait(false);
      return response.StatusCode;
    }

    public Task<T> Post<T>(Uri uri, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Post, cancellationToken: cancellationToken);
    }

    public Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Post, parameters, cancellationToken: cancellationToken);
    }

    public Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Post, parameters, body, cancellationToken: cancellationToken);
    }

    public Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, object? body, Dictionary<string, string>? headers, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Post, parameters, body, headers, cancellationToken: cancellationToken);
    }

    public async Task<HttpStatusCode> Post(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      var response = await SendAPIRequestDetailed(uri, HttpMethod.Post, parameters, body, cancellationToken: cancellationToken).ConfigureAwait(false);
      return response.StatusCode;
    }

    public Task<T> Put<T>(Uri uri, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Put, cancellationToken: cancellationToken);
    }

    public Task<T> Put<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Put, parameters, cancellationToken: cancellationToken);
    }

    public Task<T> Put<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      return SendAPIRequest<T>(uri, HttpMethod.Put, parameters, body, cancellationToken: cancellationToken);
    }

    public async Task<HttpStatusCode> Put(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      var response = await SendAPIRequestDetailed(uri, HttpMethod.Put, parameters, body, cancellationToken: cancellationToken).ConfigureAwait(false);
      return response.StatusCode;
    }

    public async Task<HttpStatusCode> PutRaw(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null)
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));

      var response = await SendRawRequest(uri, HttpMethod.Put, parameters, body, cancellationToken: cancellationToken).ConfigureAwait(false);
      return response.StatusCode;
    }

    public void SetRequestTimeout(TimeSpan timeout)
    {
      _httpClient.SetRequestTimeout(timeout);
    }

    public Task<IResponse> SendRawRequest(
        Uri uri,
        HttpMethod method,
        IDictionary<string, string>? parameters = null,
        object? body = null,
        IDictionary<string, string>? headers = null,
        CancellationToken? cancellationToken = null
      )
    {
      var request = CreateRequest(uri, method, parameters, body, headers);
      return DoRequest(request, cancellationToken);
    }

    public async Task<T> SendAPIRequest<T>(
        Uri uri,
        HttpMethod method,
        IDictionary<string, string>? parameters = null,
        object? body = null,
        IDictionary<string, string>? headers = null,
        CancellationToken? cancellationToken = null
      )
    {
      var request = CreateRequest(uri, method, parameters, body, headers);
      IAPIResponse<T> apiResponse = await DoSerializedRequest<T>(request, cancellationToken).ConfigureAwait(false);
      return apiResponse.Body!;
    }

    public async Task<IResponse> SendAPIRequestDetailed(
        Uri uri,
        HttpMethod method,
        IDictionary<string, string>? parameters = null,
        object? body = null,
        IDictionary<string, string>? headers = null,
        CancellationToken? cancellationToken = null
      )
    {
      var request = CreateRequest(uri, method, parameters, body, headers);
      var response = await DoSerializedRequest<object>(request, cancellationToken).ConfigureAwait(false);
      return response.Response;
    }

    private IRequest CreateRequest(
        Uri uri,
        HttpMethod method,
        IDictionary<string, string>? parameters,
        object? body,
        IDictionary<string, string>? headers
      )
    {
      Ensure.ArgumentNotNull(uri, nameof(uri));
      Ensure.ArgumentNotNull(method, nameof(method));

      return new Request(
        _baseAddress,
        uri,
        method,
        headers ?? new Dictionary<string, string>(),
        parameters ?? new Dictionary<string, string>())
      {
        Body = body
      };
    }

    private async Task<IAPIResponse<T>> DoSerializedRequest<T>(IRequest request, CancellationToken? cancellationToken)
    {
      _jsonSerializer.SerializeRequest(request);
      var response = await DoRequest(request, cancellationToken).ConfigureAwait(false);
      return _jsonSerializer.DeserializeResponse<T>(response);
    }

    protected virtual async Task<IResponse> DoRequest(IRequest request, CancellationToken? cancellationToken)
    {
      var response = await SendRequest(request, cancellationToken).ConfigureAwait(false);
      if (_retryHandler != null)
      {
        response = await _retryHandler.HandleRetry(request, response, (newRequest) => SendRequest(request, cancellationToken)).ConfigureAwait(false);
      }

      ProcessErrors(response);
      return response;
    }

    private async Task<IResponse> SendRequest(IRequest request, CancellationToken? cancellationToken)
    {
      await ApplyAuthenticator(request, cancellationToken).ConfigureAwait(false);
      _httpLogger?.OnRequest(request);
      IResponse response = await _httpClient.DoRequest(request, cancellationToken).ConfigureAwait(false);
      _httpLogger?.OnResponse(response);
      ResponseReceived?.Invoke(this, response);
      return response;
    }

    private async Task ApplyAuthenticator(IRequest request, CancellationToken? cancellationToken)
    {
      if (_authenticator != null
        && !request.Endpoint.IsAbsoluteUri
        || request.Endpoint.AbsoluteUri.Contains("https://api.spotify.com", StringComparison.InvariantCulture))
      {
        await _authenticator!.Apply(request, this, cancellationToken).ConfigureAwait(false);
      }
    }

    private static void ProcessErrors(IResponse response)
    {
      Ensure.ArgumentNotNull(response, nameof(response));

      if ((int)response.StatusCode >= 200 && (int)response.StatusCode < 400)
      {
        return;
      }

      throw response.StatusCode switch
      {
        HttpStatusCode.Unauthorized => new APIUnauthorizedException(response),
        // TODO: Remove hack once .netstandard 2.0 is not supported
        (HttpStatusCode)429 => new APITooManyRequestsException(response),
        _ => new APIException(response),
      };
    }
  }
}
