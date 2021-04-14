(window.webpackJsonp=window.webpackJsonp||[]).push([[40,10,20,42,56,65,78,92,117,126,145,156],{134:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return d})),n.d(e,"default",(function(){return b}));var a=n(3),o=n(7),s=(n(0),n(246)),r=n(250),c=n(251),l=n(74),i={title:"The hard way"},u={unversionedId:"getting-started/hard-way",id:"getting-started/hard-way",isDocsHomePage:!1,title:"The hard way",description:"You can setup your own server for convnience. What you need to learn are:",source:"@site/docs/getting-started/hard-way.mdx",slug:"/getting-started/hard-way",permalink:"/docs/getting-started/hard-way",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/getting-started/hard-way.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021",sidebar:"docs",previous:{title:"Quick start",permalink:"/docs/getting-started/quick-start"},next:{title:"Cast Study",permalink:"/docs/case-study/"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"1. Setup development environment",id:"1-setup-development-environment",children:[]},{value:"Instal Build Tools",id:"instal-build-tools",children:[]},{value:"1. Clone wechaty-getting-started Repository",id:"1-clone-wechaty-getting-started-repository",children:[]},{value:"2. Install Dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the Bot",id:"3-run-the-bot",children:[]},{value:"Showcase",id:"showcase",children:[]},{value:"Contact us",id:"contact-us",children:[]}],p={toc:d};function b(t){var e=t.components,i=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,i,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can setup your own server for convnience. What you need to learn are:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Install developing tools"),Object(s.b)("li",{parentName:"ol"},"Install programming language"),Object(s.b)("li",{parentName:"ol"},"Install Wechaty"),Object(s.b)("li",{parentName:"ol"},"Run your first chatbot")),Object(s.b)(l.default,{mdxType:"ShortestChatbots"}),Object(s.b)("h3",{id:"requirements"},"Requirements"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"A Linux/macOS/Windows computer"),Object(s.b)("li",{parentName:"ol"},"Internet connection")),Object(s.b)("h3",{id:"1-setup-development-environment"},"1. Setup development environment"),Object(s.b)(r.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"apt-get install make\n"))),Object(s.b)(c.a,{value:"mac",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"brew install make\n"))),Object(s.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"choco install make\n")))),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),Object(s.b)("blockquote",{parentName:"div"},Object(s.b)("p",{parentName:"blockquote"},"Instal Node.js for other platforms can be found at ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"https://nodejs.org/en/download/package-manager/"))))),Object(s.b)("h3",{id:"instal-build-tools"},"Instal Build Tools"),Object(s.b)(r.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"sudo apt install build-essential\n"))),Object(s.b)(c.a,{value:"mac",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"brew install make\n"))),Object(s.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"choco install make\n")))),Object(s.b)("h3",{id:"1-clone-wechaty-getting-started-repository"},"1. Clone wechaty-getting-started Repository"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started\ncd wechaty-getting-started\n")),Object(s.b)("h3",{id:"2-install-dependencies"},"2. Install Dependencies"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"# npm install\nmake install\n")),Object(s.b)("h3",{id:"3-run-the-bot"},"3. Run the Bot"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Notice: Wechaty requires Node.js version ",">","= 10"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"# npm start\n#   Or use node to run bot directly\n#     node examples/starter-bot.js\nmake bot\n")),Object(s.b)("p",null,"You are all set!"),Object(s.b)("p",null,"You can see the following result after running:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"demo",src:n(325).default})),Object(s.b)("p",null,"This demo will show all message on the bot."),Object(s.b)("h2",{id:"showcase"},"Showcase"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Wechaty Developers&#39; Home",src:n(274).default})),Object(s.b)("p",null,"Scan the following QR Code in WeChat with secret code ",Object(s.b)("em",{parentName:"p"},"wechaty"),", join our ",Object(s.b)("strong",{parentName:"p"},"Wechaty Developers' Home"),". This group is only for developers."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Friday BOT")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Learn more about our open-sourced Friday BOT from our ",Object(s.b)("a",{parentName:"p",href:"/docs/showcases/friday-bot"},"showcases")))),Object(s.b)("h2",{id:"contact-us"},"Contact us"),Object(s.b)("p",null,"You can ",Object(s.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}b.isMDXComponent=!0},246:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var a=n(0),o=n.n(a);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=o.a.createContext({}),u=function(t){var e=o.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=u(t.components);return o.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,r=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||p[b]||s;return n?o.a.createElement(m,c(c({ref:e},i),{},{components:n})):o.a.createElement(m,c({ref:e},i))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=b;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},247:function(t,e,n){"use strict";function a(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(o&&(o+=" "),o+=e);return o}},248:function(t,e,n){"use strict";var a=n(0),o=n(249);e.a=function(){var t=Object(a.useContext)(o.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},249:function(t,e,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);e.a=o},250:function(t,e,n){"use strict";var a=n(0),o=n.n(a),s=n(248),r=n(247),c=n(61),l=n.n(c);var i=37,u=39;e.a=function(t){var e=t.lazy,n=t.block,c=t.defaultValue,d=t.values,p=t.groupId,b=t.className,m=Object(s.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,y=Object(a.useState)(c),f=y[0],j=y[1],O=a.Children.toArray(t.children),v=[];if(null!=p){var w=h[p];null!=w&&w!==f&&d.some((function(t){return t.value===w}))&&j(w)}var x=function(t){var e=t.target,n=v.indexOf(e),a=O[n].props.value;j(a),null!=p&&(g(p,a),setTimeout((function(){var t,n,a,o,s,r,c,i;(t=e.getBoundingClientRect(),n=t.top,a=t.left,o=t.bottom,s=t.right,r=window,c=r.innerHeight,i=r.innerWidth,n>=0&&s<=i&&o<=c&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l.a.tabItemActive),setTimeout((function(){return e.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(t){var e,n;switch(t.keyCode){case u:var a=v.indexOf(t.target)+1;n=v[a]||v[0];break;case i:var o=v.indexOf(t.target)-1;n=v[o]||v[v.length-1]}null===(e=n)||void 0===e||e.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},b)},d.map((function(t){var e=t.value,n=t.label;return o.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:N,onFocus:x,onClick:x},n)}))),e?Object(a.cloneElement)(O.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(t,e){return Object(a.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},251:function(t,e,n){"use strict";var a=n(0),o=n.n(a);e.a=function(t){var e=t.children,n=t.hidden,a=t.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},274:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/friday-qrcode-5cc2eb406423df2d76ccc0b3543f94b7.svg"},325:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/getting-started-qrcode-c178853175d38f44e44b0a6f9b36532d.png"},62:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}u.isMDXComponent=!0},63:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}u.isMDXComponent=!0},64:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  conswt bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}u.isMDXComponent=!0},65:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  conswt bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}u.isMDXComponent=!0},66:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}u.isMDXComponent=!0},67:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}u.isMDXComponent=!0},68:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}u.isMDXComponent=!0},69:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}u.isMDXComponent=!0},70:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}u.isMDXComponent=!0},71:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),s=(n(0),n(246)),r={},c={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},l=[],i={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}u.isMDXComponent=!0},74:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return f})),n.d(e,"metadata",(function(){return j})),n.d(e,"toc",(function(){return O})),n.d(e,"default",(function(){return w}));var a=n(3),o=n(7),s=(n(0),n(246)),r=n(250),c=n(251),l=n(64),i=n(63),u=n(65),d=n(66),p=n(67),b=n(68),m=n(69),h=n(62),g=n(70),y=n(71),f={},j={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021"},O=[],v={toc:O};function w(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},v,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)(r.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"openapi",mdxType:"TabItem"},Object(s.b)(i.default,{mdxType:"ShortestChatbotOpenApi"})),Object(s.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(s.b)(l.default,{mdxType:"ShortestChatbotTypeScript"})),Object(s.b)(c.a,{value:"js",mdxType:"TabItem"},Object(s.b)(u.default,{mdxType:"ShortestChatbotJavaScript"})),Object(s.b)(c.a,{value:"py",mdxType:"TabItem"},Object(s.b)(d.default,{mdxType:"ShortestChatbotPython"})),Object(s.b)(c.a,{value:"go",mdxType:"TabItem"},Object(s.b)(p.default,{mdxType:"ShortestChatbotGo"})),Object(s.b)(c.a,{value:"java",mdxType:"TabItem"},Object(s.b)(b.default,{mdxType:"ShortestChatbotJava"})),Object(s.b)(c.a,{value:"php",mdxType:"TabItem"},Object(s.b)(m.default,{mdxType:"ShortestChatbotPhp"})),Object(s.b)(c.a,{value:"scala",mdxType:"TabItem"},Object(s.b)(h.default,{mdxType:"ShortestChatbotScala"})),Object(s.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(s.b)(g.default,{mdxType:"ShortestChatbotDotnet"})),Object(s.b)(c.a,{value:"rust",mdxType:"TabItem"},Object(s.b)(y.default,{mdxType:"ShortestChatbotRust"}))))}w.isMDXComponent=!0}}]);