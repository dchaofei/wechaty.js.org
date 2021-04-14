(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(246)),a={title:"Writing tests"},p={unversionedId:"howto/testing",id:"howto/testing",isDocsHomePage:!1,title:"Writing tests",description:"NPM Version",source:"@site/docs/howto/testing.md",slug:"/howto/testing",permalink:"/docs/howto/testing",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/testing.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021",sidebar:"docs",previous:{title:"Processing files",permalink:"/docs/howto/file-box"},next:{title:"Wechaty references overview",permalink:"/docs/references/"}},i=[{value:"USAGE",id:"usage",children:[{value:"Puppet Mock",id:"puppet-mock",children:[]},{value:"Mocker &amp; Environment",id:"mocker--environment",children:[]}]},{value:"API Reference",id:"api-reference",children:[{value:"Mocker",id:"mocker",children:[]}]},{value:"HELPER UTILITIES",id:"helper-utilities",children:[{value:"StateSwitch",id:"stateswitch",children:[]}]}],s={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},Object(c.b)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/actions?query=workflow%3ANPM"},Object(c.b)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-puppet-mock/workflows/NPM/badge.svg",alt:"NPM"}))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-puppet-mock/images/mock.png",alt:"chatie puppet"})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Picture Credit: ",Object(c.b)("a",{parentName:"p",href:"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"},"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"))),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),Object(c.b)("p",null,"Puppet Mocker & Starter Template for Wechaty, it is very useful when you:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Want to test the Wechaty framework with a mock puppet, or"),Object(c.b)("li",{parentName:"ol"},"You want to write your own Puppet implenmentation.")),Object(c.b)("p",null,"Then ",Object(c.b)("inlineCode",{parentName:"p"},"PuppetMock")," will helps you a lot."),Object(c.b)("h2",{id:"usage"},"USAGE"),Object(c.b)("h3",{id:"puppet-mock"},"Puppet Mock"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }   from 'wechaty'\nimport { PuppetMock } from 'wechaty-puppet-mock'\n\nconst puppet  = new PuppetMock()\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n")),Object(c.b)("h3",{id:"mocker--environment"},"Mocker & Environment"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),Object(c.b)("h2",{id:"api-reference"},"API Reference"),Object(c.b)("h3",{id:"mocker"},"Mocker"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { PuppetMock, mock }   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = new Wechaty({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),Object(c.b)("h2",{id:"helper-utilities"},"HELPER UTILITIES"),Object(c.b)("h3",{id:"stateswitch"},"StateSwitch"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"this.state.on('pending')\nthis.state.on(true)\nthis.state.off('pending')\nthis.state.off(true)\n\nawait this.state.ready('on')\nawait this.state.ready('off')\n")))}u.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,h=l["".concat(a,".").concat(b)]||l[b]||m[b]||c;return n?o.a.createElement(h,p(p({ref:t},s),{},{components:n})):o.a.createElement(h,p({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);