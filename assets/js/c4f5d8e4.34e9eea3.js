/*! For license information please see c4f5d8e4.34e9eea3.js.LICENSE.txt */
(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4195],{8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,d=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,f=e.groupId,h=e.className,p=o(),m=p.tabGroupChoices,g=p.setTabGroupChoices,v=(0,n.useState)(a),b=v[0],w=v[1],y=n.Children.toArray(e.children),E=[];if(null!=f){var x=m[f];null!=x&&x!==b&&u.some((function(e){return e.value===x}))&&w(x)}var k=function(e){var t=e.currentTarget,r=E.indexOf(t),n=u[r].value;w(n),null!=f&&(g(f,n),setTimeout((function(){var e,r,n,a,o,i,l,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,r>=0&&o<=s&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,r;switch(e.keyCode){case d:var n=E.indexOf(e.target)+1;r=E[n]||E[0];break;case s:var a=E.indexOf(e.target)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:k,onClick:k},r)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},6918:function(e,t,r){"use strict";var n=r(8300),a=r(8215),o=r(5064),i=r(7294);t.Z=function(){return i.createElement("div",{style:{padding:"10px"}},i.createElement(o.Z,{defaultValue:"cli",values:[{label:".NET CLI",value:"cli"},{label:"Package Manager",value:"nuget"},{label:"Package Reference",value:"reference"}]},i.createElement(a.Z,{value:"cli"},i.createElement(n.Z,{metastring:"shell",className:"shell"},"dotnet add package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\ndotnet add package SpotifyAPI.Web.Auth\n")),i.createElement(a.Z,{value:"nuget"},i.createElement(n.Z,{metastring:"shell",className:"shell"},"Install-Package SpotifyAPI.Web\n# Optional Auth module, which includes an embedded HTTP Server for OAuth2\nInstall-Package SpotifyAPI.Web.Auth\n")),i.createElement(a.Z,{value:"reference"},i.createElement(n.Z,{metastring:"xml",className:"xml"},'<PackageReference Include="SpotifyAPI.Web" Version="6.0.0" />\n\x3c!-- Optional Auth module, which includes an embedded HTTP Server for OAuth2 --\x3e\n<PackageReference Include="SpotifyAPI.Web.Auth" Version="6.0.0" />\n'))))}},3105:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(3117),a=r(6742),o=r(4996),i=r(2263),l=r(8300),c=r(2273),s=(r(8215),r(5064),r(4184)),d=r.n(s),u=r(7294);class f extends u.PureComponent{constructor(e){super(e),this.$=u.createRef(),this._=u.createRef()}render(){return u.createElement("span",{ref:this.$},u.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,9984)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var h=f,p=r(6918),m={heroBanner:"heroBanner_3P7f",exampleCode:"exampleCode_PXaa",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"},g=[{title:u.createElement(u.Fragment,null,"Sane Defaults - Easy To Configure"),imageUrl:"img/undraw_preferences_uuo2.svg",description:function(){return u.createElement(u.Fragment,null,u.createElement("code",null,"SpotifyAPI-NET")," allows you to quickly integrate with Spotify's Web API by supplying sane configuration defaults from the start. Later on, behaviour can be customized using extensive configuration possibilities.")}},{title:u.createElement(u.Fragment,null,"All API Calls Integrated"),imageUrl:"img/undraw_project_completed_w0oq.svg",description:function(){return u.createElement(u.Fragment,null,"The Spotify Web API consists of over 74 API calls. ",u.createElement("code",null,"SpotifyAPI-NET")," provides fully typed requests/responses for all of them.")}},{title:u.createElement(u.Fragment,null,".NET Standard 2.X"),imageUrl:"img/undraw_Devices_e67q.svg",description:function(){return u.createElement(u.Fragment,null,"With the support of .NET Standard 2.X, ",u.createElement("code",null,"SpotifyAPI-NET")," runs on many platforms, including .NET Core, UWP and Xamarin.Forms (Windows, Android, iOS and Mac)")}},{title:u.createElement(u.Fragment,null,"Testable"),imageUrl:"img/undraw_QA_engineers_dg5p.svg",description:function(){return u.createElement(u.Fragment,null,u.createElement("code",null,"SpotifyAPI-NET")," is built on a modular structure, which allows easy testing through mocks and stubs. Learn more by visiting the ",u.createElement(a.Z,{to:(0,o.Z)("docs/unit_testing")},"Testing Guide"))}}];function v(e){var t=e.imageUrl,r=e.title,n=e.description,a=(0,o.Z)(t);return u.createElement("div",{className:d()("col col--4",m.feature)},a&&u.createElement("div",{className:"text--center"},u.createElement("img",{className:m.featureImage,src:a,alt:r})),u.createElement("h3",null,r),u.createElement("p",null,n()))}var b=function(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return u.createElement(c.Z,{title:""+t.title,description:"Documentation for the C# .NET SpotifyAPI-NET Library"},u.createElement("header",{className:d()("hero hero--primary",m.heroBanner)},u.createElement("div",{className:"container"},u.createElement("div",{className:"row"},u.createElement("div",{className:"col col--5"},u.createElement("img",{src:"img/logo.svg",width:"120",height:"120"}),u.createElement("h1",{className:"hero__title"},t.title,u.createElement("span",{style:{marginLeft:"50px"}}),u.createElement(h,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star JohnnyCrazy/SpotifyAPI-NET on GitHub"},"Star"),u.createElement("br",null),u.createElement("a",{href:"https://www.nuget.org/packages/SpotifyAPI.Web/",rel:"noopener noreferrer"},u.createElement("img",{alt:"Nuget",src:"https://img.shields.io/nuget/vpre/SpotifyAPI.Web?label=SpotifyAPI.Web&style=flat-square"}),"  "),u.createElement("a",{href:"https://www.nuget.org/packages/SpotifyAPI.Web.Auth/",rel:"noopener noreferrer"},u.createElement("img",{alt:"Nuget",src:"https://img.shields.io/nuget/vpre/SpotifyAPI.Web.Auth?label=SpotifyAPI.Web.Auth&style=flat-square"}))),u.createElement("p",{className:"hero__subtitle"},t.tagline),u.createElement("div",{className:m.buttons},u.createElement(a.Z,{className:d()("button button--outline button--secondary button--lg",m.getStarted),to:(0,o.Z)("docs/introduction")},"Get Started"))),u.createElement("div",{className:d()("col col--7",m.exampleCode)},u.createElement(l.Z,{metastring:"csharp",className:"csharp"},'var spotify = new SpotifyClient("YourAccessToken");\n\nvar me = await spotify.UserProfile.Current();\nConsole.WriteLine($"Hello there {me.DisplayName}");\n\nawait foreach(\n  var playlist in spotify.Paginate(await spotify.Playlists.CurrentUsers())\n)\n{\n  Console.WriteLine(playlist.Name);\n}'))))),u.createElement("main",null,u.createElement("div",{className:"container"},u.createElement("h2",{style:{textAlign:"center",marginTop:"30px"}},"Try it out now"),u.createElement(p.Z,null)),g&&g.length&&u.createElement("section",{className:m.features},u.createElement("div",{className:"container"},u.createElement("div",{className:"row"},g.map((function(e,t){return u.createElement(v,(0,n.Z)({key:t},e))})))))))}},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9984:function(e,t,r){"use strict";r.r(t),r.d(t,{render:function(){return C}});var n=window.document,a=window.Math,o=window.HTMLElement,i=window.XMLHttpRequest,l=function(e){return function(t,r,n){var a=e.createElement(t);if(null!=r)for(var o in r){var i=r[o];null!=i&&(null!=a[o]?a[o]=i:a.setAttribute(o,i))}if(null!=n)for(var l=0,c=n.length;l<c;l++){var s=n[l];a.appendChild("string"==typeof s?e.createTextNode(s):s)}return a}},c=l(n),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=i&&i.prototype&&"withCredentials"in i.prototype,u=d&&o&&o.prototype.attachShadow&&!o.prototype.attachShadow.prototype,f=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},h=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},p={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},m=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+p[s(p,t)?t:e]+"}"},g=function(e){if(null==e)return p.light;var t=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.decodeURIComponent);for(var a={},o=e.split(t),i=0,l=o.length;i<l;++i){var c=o[i];if(""!==c){var s=c.split(r);a[n(s[0])]=null!=s[1]?n(s.slice(1).join(r)):void 0}}return a}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return p[s(p,t["no-preference"])?t["no-preference"]:"light"]+m("light",t.light)+m("dark",t.dark)},v={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"></path>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path>'}},b={},w=function(e,t){var r=b[e]||(b[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete b[e];t=r.shift();)t.apply(null,arguments)}));if(d){var a=new i;f(a,"abort",n),f(a,"error",n),f(a,"load",(function(){var e;try{e=JSON.parse(a.responseText)}catch(t){return void n(t)}n(200!==a.status,e)})),a.open("GET",e),a.send()}else{var o=this||window;o._=function(e){o._=null,n(200!==e.meta.status,e.data)};var c=l(o.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){o._&&o._({meta:{}})};f(c,"load",s),f(c,"error",s),c.readyState&&function(e,t,r){var n="readystatechange",a=function(o){if(t.test(e.readyState))return h(e,n,a),r(o)};f(e,n,a)}(c,/de|m/,s),o.document.getElementsByTagName("head")[0].appendChild(c)}}},y=function(e,t,r){var n=l(e.ownerDocument),a=e.appendChild(n("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+g(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.ownerDocument.createTextNode(o));var i,c,d=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:(i=t["data-icon"],c=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(v,i)||(i="mark-github"),'<svg viewBox="0 0 '+v[i].width+" "+v[i].height+'" class="octicon octicon-'+i+'" style="width: '+c*v[i].width/v[i].height+"px; height: "+c+'px;" aria-hidden="true">'+v[i].path+"</svg>")},[" ",n("span",{},[t["data-text"]||""])]),u=e.appendChild(n("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[d])),f=d.hostname.split(".").reverse();if(""===f[0]&&f.shift(),"com"!==f[0]||"github"!==f[1])return d.href="#",d.target="_self",void r(u);var h=f.length,p=(" /"+d.pathname).split(/\/+/);if(((2===h||3===h&&"gist"===f[2])&&"archive"===p[3]||2===h&&"releases"===p[3]&&"download"===p[4]||3===h&&"codeload"===f[2])&&(d.target="_top"),/^true$/i.test(t["data-show-count"])&&2===h){var m,b;if(!p[2]&&p[1])m=b="followers";else if(!p[3]&&p[2])b="stargazers_count",m="stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void r(u);b="open_issues_count",m="issues"}else b="forks_count",m="network/members";else b="subscribers_count",m="watchers";var y=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];w.call(this,"https://api.github.com"+y,(function(e,t){if(!e){var a=t[b];u.appendChild(n("a",{className:"social-count",href:t.html_url+"/"+m,rel:"noopener",target:"_blank","aria-label":a+" "+b.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(u)}))}else r(u)},E=window.devicePixelRatio||1,x=function(e){return(E>1?a.ceil(a.round(e*E)/E*2)/2:a.ceil(e))||0},k=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},C=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],n=0,a=r.length;n<a;n++){var o="data-"+r[n];t[o]=e.getAttribute(o)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),u){var r=c("span");y(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var o=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});k(o,[0,0]),o.style.border="none";var i=function(){var r,l=o.contentWindow;try{r=l.document.body}catch(c){return void n.body.appendChild(o.parentNode.removeChild(o))}h(o,"load",i),y.call(l,r,e,(function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=a.max(t,x(n.width)),r=a.max(r,x(n.height))}return[t,r]}(r);o.parentNode.removeChild(o),function(e,t,r){var n=function(a){return h(e,t,n),r(a)};f(e,t,n)}(o,"load",(function(){k(o,n)})),o.src="https://unpkg.com/github-buttons@2.8.0/dist/buttons.html#"+(o.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var a=[];for(var o in e){var i=e[o];null!=i&&a.push(n(o)+r+n(i))}return a.join(t)}(e)),t(o)}))};f(o,"load",i),n.body.appendChild(o)}}}}]);