"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[6112],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i={id:"error_handling",title:"Error Handling"},s=void 0,c={unversionedId:"error_handling",id:"error_handling",isDocsHomePage:!1,title:"Error Handling",description:"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:",source:"@site/docs/error_handling.md",sourceDirName:".",slug:"/error_handling",permalink:"/SpotifyAPI-NET/docs/error_handling",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/error_handling.md",version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1628701444,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"error_handling",title:"Error Handling"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/getting_started"},next:{title:"Configuration",permalink:"/SpotifyAPI-NET/docs/configuration"}},p=[{value:"APIException",id:"apiexception",children:[]},{value:"APIUnauthorizedException",id:"apiunauthorizedexception",children:[]},{value:"APITooManyRequestsException",id:"apitoomanyrequestsexception",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var track = await spotify.Tracks.Get("NotExistingTrackId");\nConsole.WriteLine(track.Name);\n')),(0,a.kt)("p",null,"When a request fails, an ",(0,a.kt)("inlineCode",{parentName:"p"},"APIException")," is thrown. Specific errors may throw a child exception of ",(0,a.kt)("inlineCode",{parentName:"p"},"APIException"),"."),(0,a.kt)("h2",{id:"apiexception"},"APIException"),(0,a.kt)("p",null,"A very general API error. The message is parsed from the API response's JSON body and the response is available as a public property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'try {\n  var track = await spotify.Tracks.Get("NotExistingTrackId");\n} catch(APIException e) {\n  // Prints: invalid id\n  Console.WriteLine(e.Message);\n  // Prints: BadRequest\n  Console.WriteLine(e.Response?.StatusCode);\n}\n')),(0,a.kt)("h2",{id:"apiunauthorizedexception"},"APIUnauthorizedException"),(0,a.kt)("p",null,"Provides the same properties as ",(0,a.kt)("inlineCode",{parentName:"p"},"APIException")," and occurs when the access token is expired or not provided. Notice that an access token has to be included in ",(0,a.kt)("strong",{parentName:"p"},"every")," request. Spotify does not allow unauthorized API access."),(0,a.kt)("h2",{id:"apitoomanyrequestsexception"},"APITooManyRequestsException"),(0,a.kt)("p",null,"Provides the same properties as ",(0,a.kt)("inlineCode",{parentName:"p"},"APIException")," and occurs when too many requests has been sent by your application. It also provides the property ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeSpan RetryAfter"),", which maps to the received ",(0,a.kt)("inlineCode",{parentName:"p"},"Retry-After")," header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'try {\n  // call it very often?\n  var track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n} catch(APITooManyRequestsException e) {\n  // Prints: seconds to wait, often 1 or 2\n  Console.WriteLine(e.RetryAfter);\n}\n')))}u.isMDXComponent=!0}}]);