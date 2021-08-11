"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[8897],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,y=h["".concat(p,".").concat(d)]||h[d]||c[d]||a;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i={id:"token_swap",title:"Token Swap"},s=void 0,p={unversionedId:"auth/token_swap",id:"version-5.1.1/auth/token_swap",isDocsHomePage:!1,title:"Token Swap",description:"This way uses server-side code or at least access to an exchange server, otherwise, compared to other",source:"@site/versioned_docs/version-5.1.1/auth/token_swap.md",sourceDirName:"auth",slug:"/auth/token_swap",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/token_swap",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/token_swap.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1628701444,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"token_swap",title:"Token Swap"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/client_credentials"}},l=[{value:"Using TokenSwapWebAPIFactory",id:"using-tokenswapwebapifactory",children:[]},{value:"Using TokenSwapAuth",id:"using-tokenswapauth",children:[]},{value:"Token Swap Endpoint",id:"token-swap-endpoint",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This way uses server-side code or at least access to an exchange server, otherwise, compared to other\nmethods, it is impossible to use."),(0,a.kt)("p",null,'With this approach, you provide the URI/URL to your desired exchange server to perform all necessary\nrequests to Spotify, as well as requests that return back to the "server URI".'),(0,a.kt)("p",null,"The exchange server ",(0,a.kt)("strong",{parentName:"p"},"must")," be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Return the authorization code from Spotify API authenticate page via GET request to the "server URI".'),(0,a.kt)("li",{parentName:"ul"},"Request the token response object via POST to the Spotify API token page."),(0,a.kt)("li",{parentName:"ul"},"Request a refreshed token response object via POST to the Spotify API token page.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The good news is that you do not need to code it yourself.")),(0,a.kt)("p",null,"The advantages of this method are that the client ID and redirect URI are very well hidden and almost unexposed, but more importantly, your client secret is ",(0,a.kt)("strong",{parentName:"p"},"never")," exposed and is completely hidden compared to other methods (excluding ",(0,a.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/implicit_grant"},"ImplicitGrantAuth"),"\nas it does not deal with a client secret). This means\nyour Spotify app ",(0,a.kt)("strong",{parentName:"p"},"cannot")," be spoofed by a malicious third party."),(0,a.kt)("h2",{id:"using-tokenswapwebapifactory"},"Using TokenSwapWebAPIFactory"),(0,a.kt)("p",null,"The TokenSwapWebAPIFactory will create and configure a SpotifyWebAPI object for you."),(0,a.kt)("p",null,"It does this through the method GetWebApiAsync ",(0,a.kt)("strong",{parentName:"p"},"asynchronously"),", which means it will not halt execution of your program while obtaining it for you. If you would like to halt execution, which is ",(0,a.kt)("strong",{parentName:"p"},"synchronous"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"GetWebApiAsync().Result")," without using ",(0,a.kt)("strong",{parentName:"p"},"await"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TokenSwapWebAPIFactory webApiFactory;\nSpotifyWebAPI spotify;\n\n// You should store a reference to WebAPIFactory if you are using AutoRefresh or want to manually refresh it later on. New WebAPIFactory objects cannot refresh SpotifyWebAPI object that they did not give to you.\nwebApiFactory = new TokenSwapWebAPIFactory("INSERT LINK TO YOUR index.php HERE")\n{\n    Scope = Scope.UserReadPrivate | Scope.UserReadEmail | Scope.PlaylistReadPrivate,\n    AutoRefresh = true\n};\n// You may want to react to being able to use the Spotify service.\n// webApiFactory.OnAuthSuccess += (sender, e) => authorized = true;\n// You may want to react to your user\'s access expiring.\n// webApiFactory.OnAccessTokenExpired += (sender, e) => authorized = false;\n\ntry\n{\n    spotify = await webApiFactory.GetWebApiAsync();\n    // Synchronous way:\n    // spotify = webApiFactory.GetWebApiAsync().Result;\n}\ncatch (Exception ex)\n{\n    // Example way to handle error reporting gracefully with your SpotifyWebAPI wrapper\n    // UpdateStatus($"Spotify failed to load: {ex.Message}");\n}\n')),(0,a.kt)("h2",{id:"using-tokenswapauth"},"Using TokenSwapAuth"),(0,a.kt)("p",null,"Since the TokenSwapWebAPIFactory not only simplifies the whole process but offers additional functionality too\n(such as AutoRefresh and AuthSuccess AuthFailure events), use of this way is very verbose and is only\nrecommended if you are having issues with TokenSwapWebAPIFactory or need access to the tokens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TokenSwapAuth auth = new TokenSwapAuth(\n    exchangeServerUri: "INSERT LINK TO YOUR index.php HERE",\n    serverUri: "http://localhost:4002",\n    scope: Scope.UserReadPrivate | Scope.UserReadEmail | Scope.PlaylistReadPrivate\n);\nauth.AuthReceived += async (sender, response) =>\n{\n    lastToken = await auth.ExchangeCodeAsync(response.Code);\n\n    spotify = new SpotifyWebAPI()\n    {\n        TokenType = lastToken.TokenType,\n        AccessToken = lastToken.AccessToken\n    };\n\n    authenticated = true;\n    auth.Stop();\n};\nauth.OnAccessTokenExpired += async (sender, e) => spotify.AccessToken = (await auth.RefreshAuthAsync(lastToken.RefreshToken)).AccessToken;\nauth.Start();\nauth.OpenBrowser();\n')),(0,a.kt)("h2",{id:"token-swap-endpoint"},"Token Swap Endpoint"),(0,a.kt)("p",null,"To keep your client secret completely secure and your client ID and redirect URI as secure as possible, use of a web server (such as a php website) is required."),(0,a.kt)("p",null,"To use this method, an external HTTP Server (that you may need to create) needs to be able to supply the following HTTP Endpoints to your application:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/swap")," - Swaps out an ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization_code")," with an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token")," - The following parameters are required in the JSON POST Body:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grant_type")," (set to ",(0,a.kt)("inlineCode",{parentName:"li"},'"authorization_code"'),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code")," (the ",(0,a.kt)("inlineCode",{parentName:"li"},"authorization_code"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirect_uri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Important")," The page that the redirect URI links to must return the authorization code json to your ",(0,a.kt)("inlineCode",{parentName:"li"},"serverUri")," (default is 'http://localhost:4002') but to the folder 'auth', like this: 'http://localhost:4002/auth'.")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/refresh")," - Refreshes an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," - The following parameters are required in the JSON POST Body:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grant_type")," (set to ",(0,a.kt)("inlineCode",{parentName:"li"},'"refresh_token"'),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token"))),(0,a.kt)("p",null,"The following open-source token swap endpoint code can be used for your website:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rollersteaam/spotify-token-swap-php"},"rollersteaam/spotify-token-swap-php")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/simontaen/SpotifyTokenSwap"},"simontaen/SpotifyTokenSwap"))),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"It should be noted that GitHub Pages does not support hosting php scripts. Hosting php scripts through it will cause the php to render as plain HTML, potentially compromising your client secret while doing absolutely nothing."),(0,a.kt)("p",null,"Be sure you have whitelisted your redirect uri in the Spotify Developer Dashboard otherwise the authorization will always fail."),(0,a.kt)("p",null,"If you did not use the WebAPIFactory or you provided a ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUri")," different from its default, you must make sure your redirect uri's script at your endpoint will properly redirect to your ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUri")," (such as changing the areas which refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:4002")," if you had changed ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUri")," from its default), otherwise it will never reach your new ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUri"),"."))}c.isMDXComponent=!0}}]);