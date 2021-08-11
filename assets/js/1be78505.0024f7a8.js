"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9514,4608],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5247:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),o=n(2263),i=n(6291),l=n(2273),c=n(6010),s=n(3018),d=n(3783),u=n(7898),m=n(5537),p=n(3117),f=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),b=n(102),v=n(6742),E=n(3919),g=n(8617),y="menuLinkText_1J2g",Z=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},C=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,["items"]);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(_,(0,p.Z)({key:t,item:e},n))})))}));function _(e){var t=e.item,n=(0,b.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(k,(0,p.Z)({item:t},n));case"link":default:return a.createElement(N,(0,p.Z)({item:t},n))}}function k(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,i=(0,b.Z)(e,["item","onItemClick","activePath"]),l=n.items,d=n.label,u=n.collapsible,m=Z(n,o),f=(0,s.uR)({initialState:function(){return!!u&&(!m&&n.collapsed)}}),h=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:m,collapsed:h,setCollapsed:v}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&m},t[y]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},i),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.createElement(C,{items:l,tabIndex:h?-1:0,onItemClick:r,activePath:o})))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,b.Z)(e,["item","onItemClick","activePath"]),i=t.href,l=t.label,s=Z(t,r);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(v.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:i},(0,E.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,E.Z)(i)?l:a.createElement("span",null,l,a.createElement(g.Z,null))))}var T="sidebar_15mo",S="sidebarWithHideableNavbar_267A",O="sidebarHidden_2kNb",w="sidebarLogo_3h0W",P="menu_Bmed",I="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",M="collapseSidebarButtonIcon_3E-R";function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(f,{className:M}))}function A(e){var t,n,r=e.path,o=e.sidebar,i=e.onCollapse,l=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,s.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(T,(t={},t[S]=f,t[O]=l,t))},f&&a.createElement(m.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",P,(n={},n[I]=!b&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(C,{items:o,activePath:r}))),h&&a.createElement(j,{onClick:i}))}var L=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(C,{items:n,activePath:r,onItemClick:function(){return t()}}))};function D(e){return a.createElement(s.Cv,{component:L,props:e})}var B=a.memo(A),F=a.memo(D);function H(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(B,e),r&&a.createElement(F,e))}var R=n(8300),W=n(6159),z="details_1VDD";function V(e){var t=Object.assign({},e);return a.createElement(s.PO,(0,p.Z)({},t,{className:(0,c.Z)("alert alert--info",z,t.className)}))}var Y={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(R.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(v.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(R.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(V,(0,p.Z)({},e,{summary:n}),r)},h1:(0,W.Z)("h1"),h2:(0,W.Z)("h2"),h3:(0,W.Z)("h3"),h4:(0,W.Z)("h4"),h5:(0,W.Z)("h5"),h6:(0,W.Z)("h6")},J=n(4608),U="backToTopButton_35hR",K="backToTopButtonShow_18ls";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var q=function(){var e,t=X(),n=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,a.useState)(!1),i=o[0],l=o[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)l(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&l(!0)}else l(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",U,(e={},e[K]=i,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},G=n(5977),Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,n,i,d=e.currentDocRoute,u=e.versionMetadata,m=e.children,p=(0,o.Z)().isClient,b=u.pluginId,v=u.version,E=d.sidebar,g=E?u.docsSidebars[E]:void 0,y=(0,a.useState)(!1),Z=y[0],C=y[1],_=(0,a.useState)(!1),k=_[0],N=_[1],T=(0,a.useCallback)((function(){k&&N(!1),C(!Z)}),[k]);return a.createElement(l.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(b,v)}},a.createElement("div",{className:Q.docPage},a.createElement(q,null),g&&a.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=Z,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&Z&&N(!0)}},a.createElement(H,{key:E,sidebar:g,path:d.path,onCollapse:T,isHidden:k}),k&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(f,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=Z||!g,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(i={},i[Q.docItemWrapperEnhanced]=Z,i))},a.createElement(r.Zo,{components:Y},m)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,G.LX)(r.pathname,e)}));return o?a.createElement($,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(J.default,e)}},6159:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return m}});var a=n(102),r=n(3117),o=n(7294),i=n(6010),l=n(4973),c=n(3018),s="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},m=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,["id"]),u=(0,c.LU)().navbar.hideOnScroll;return r?o.createElement(t,d,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[s]=!u,n)),id:r}),d.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,d)});var t}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(2273),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);