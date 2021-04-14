(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(246)),c={title:"Wechaty Plugin",sidebar_label:"Plugin"},i={unversionedId:"specs/plugin",id:"specs/plugin",isDocsHomePage:!1,title:"Wechaty Plugin",description:"Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.",source:"@site/docs/specs/plugin.md",slug:"/specs/plugin",permalink:"/docs/specs/plugin",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/plugin.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021",sidebar_label:"Plugin",sidebar:"docs",previous:{title:"Polyglot Wechaty",permalink:"/docs/specs/wechaty"},next:{title:"Wechaty Puppet",permalink:"/docs/specs/puppet"}},s=[{value:"A Purpose from @Gcaufy",id:"a-purpose-from-gcaufy",children:[{value:"Wechaty.use(middleware: WechatyMiddleware)",id:"wechatyusemiddleware-wechatymiddleware",children:[]}]},{value:"Links",id:"links",children:[]},{value:"History",id:"history",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.",Object(o.b)("br",{parentName:"p"}),"\n","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Middleware"},"Wikipedia"))),Object(o.b)("p",null,"See also: ",Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/2904937/1123955"},"What is middleware exactly?")),Object(o.b)("h2",{id:"a-purpose-from-gcaufy"},"A Purpose from @Gcaufy"),Object(o.b)("p",null,"Yesterday, in our contributor group, @Gcaufy suggested that it would be great to add supporting of middleware to the Wechaty ecosystem, like the following usage:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6709\u6ca1\u6709\u4eba\u628a \u8e22\u4eba\u90a3\u4e2a\u505a\u6210\u901a\u7528\u7ec4\u4ef6\u3002\u3002\u3002\u90a3\u4e2a\u5f88\u5b9e\u7528\u5440")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"wechaty.use(KickoutPlugin({\n  room: 'RoomName',\n}));\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7136\u540e\u8fd9\u4e2a\u623f\u95f4\u5c31\u6709\u8e22\u4eba\u529f\u80fd\u4e86\u3002")),Object(o.b)("p",null,"I feel that it is a Brilliant idea!"),Object(o.b)("p",null,"So how about we design a middleware system like this:"),Object(o.b)("h3",{id:"wechatyusemiddleware-wechatymiddleware"},"Wechaty.use(middleware: WechatyMiddleware)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"type WechatyMiddleware = (this: Wechaty) => void\n\nclass Wechaty {\n  public use (middleware: WechatyMiddleWare) {\n    middleware.apply(this)\n  }\n}\n\nconst kickoutPlugin = (options = {}) => {\n  const roomTopic = options.roomTopic\n  return function (this: Wechaty) {\n    this.on('message'), message => {\n      if (message.room()) && message.room().topic() === roomTopic) {\n        if (message.mentionSelf()) {\n          // check vote\n          message.room().del(...)\n        }\n      }\n    })\n  }\n}\n\nconst wechaty = new Wechaty()\nwechaty.use(kickOffPlugin({ roomTopic: 'Test Room' }))\n")),Object(o.b)("p",null,"Any comments about this design will be welcome."),Object(o.b)("p",null,"P.S. The Kickout Feature was originally introduced from the PR ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/friday/pull/4"},"add vote manager to manage vote message in room #4")," authored by @windmemory."),Object(o.b)("h2",{id:"links"},"Links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://stephensugden.com/middleware_guide/"},"A short guide to Connect Middleware")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://expressjs.com/en/guide/using-middleware.html"},"Express Documentation for Using middleware"))),Object(o.b)("h2",{id:"history"},"History"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Wechaty Plugin Support with Kickout Example ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1939"},"#1939")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/22/wechaty-plugin-milestone/"},"Wechaty\u63d2\u4ef6\u7cfb\u7edf\u53d1\u5e03\uff0c\u8ba9\u4f60\u7684\u673a\u5668\u4eba\u5feb\u901f\u63a5\u5165\u590d\u6742\u7ba1\u7406\u548c\u667a\u80fd\u5bf9\u8bdd\u80fd\u529b, @rickyyin98, Jul 22, 2020"))))}u.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);