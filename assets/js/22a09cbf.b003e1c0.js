"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1508],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i={id:"implicit_grant",title:"Implicit Grant",sidebar_label:"Implicit Grant"},c=void 0,p={unversionedId:"auth/implicit_grant",id:"version-5.1.1/auth/implicit_grant",isDocsHomePage:!1,title:"Implicit Grant",description:"This way is recommended and the only auth-process which does not need a server-side exchange of keys. With this approach, you directly get a Token object after the user authed your application.",source:"@site/versioned_docs/version-5.1.1/auth/implicit_grant.md",sourceDirName:"auth",slug:"/auth/implicit_grant",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/implicit_grant",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/implicit_grant.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1628701444,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"implicit_grant",title:"Implicit Grant",sidebar_label:"Implicit Grant"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/getting_started"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/authorization_code"}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This way is ",(0,a.kt)("strong",{parentName:"p"},"recommended"),' and the only auth-process which does not need a server-side exchange of keys. With this approach, you directly get a Token object after the user authed your application.\nYou won\'t be able to refresh the token. If you want to use the internal Http server, please add "http://localhost:YOURPORT" to your application redirect URIs.'),(0,a.kt)("p",null,"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'static async void Main(string[] args)\n{\n  ImplicitGrantAuth auth = new ImplicitGrantAuth(\n    _clientId,\n    "http://localhost:4002",\n    "http://localhost:4002",\n    Scope.UserReadPrivate\n  );\n  auth.AuthReceived += async (sender, payload) =>\n  {\n    auth.Stop(); // `sender` is also the auth instance\n    SpotifyWebAPI api = new SpotifyWebAPI()\n    {\n      TokenType = payload.TokenType,\n      AccessToken = payload.AccessToken\n    };\n    // Do requests with API client\n  };\n  auth.Start(); // Starts an internal HTTP Server\n  auth.OpenBrowser();\n}\n')))}u.isMDXComponent=!0}}]);