"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5739],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5430:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o={id:"getting_started",title:"Getting Started"},l=void 0,p={unversionedId:"auth/getting_started",id:"version-5.1.1/auth/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Auth-Methods",source:"@site/versioned_docs/version-5.1.1/auth/getting_started.md",sourceDirName:"auth",slug:"/auth/getting_started",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/getting_started",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/getting_started.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1628701444,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Utilities",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/utilities"},next:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/implicit_grant"}},u=[{value:"Auth-Methods",id:"auth-methods",children:[]}],c={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"auth-methods"},"Auth-Methods"),(0,i.kt)("p",null,"Before you can use the Web API's full functionality, you need the user to authenticate your Application.\nIf you want to know more, you can read to the whole auth-process ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/authorization-guide/"},"here"),"."),(0,i.kt)("p",null,"Before you start, install ",(0,i.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," and create an application at Spotify: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/my-applications/#!/applications"},"Your Applications")),(0,i.kt)("p",null,"After you have created your Application, you will have following important values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Client_Id")),(0,i.kt)("td",{parentName:"tr",align:null},"This is your client_id, you don't have to hide it"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Client_Secret")),(0,i.kt)("td",{parentName:"tr",align:null},"Never use this in one of your client-side apps! Keep it secret!"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Redirect URIs")),(0,i.kt)("td",{parentName:"tr",align:null},"Some of auth flows require that you set the correct redirect URI"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"Now you can start with the user-authentication. Spotify provides 3 ways (4 if you consider different implementations):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/implicit_grant"},"ImplicitGrantAuth"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/authorization_code"},"AutorizationCodeAuth"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/client_credentials"},"ClientCredentialsAuth"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/5.1.1/auth/token_swap"},"TokenSwapAuth")))),(0,i.kt)("p",null,"Overview:\n",(0,i.kt)("img",{parentName:"p",src:"http://i.imgur.com/uf3ahTl.png",alt:"Overview"})))}s.isMDXComponent=!0}}]);