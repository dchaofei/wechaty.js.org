(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(246)),c={title:"Friendship"},p={unversionedId:"api/friendship",id:"api/friendship",isDocsHomePage:!1,title:"Friendship",description:"Send, receive friend request, and friend confirmation events.",source:"@site/docs/api/friendship.md",slug:"/api/friendship",permalink:"/docs/api/friendship",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/friendship.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618403090,formattedLastUpdatedAt:"4/14/2021",sidebar:"docs",previous:{title:"RoomInvitation",permalink:"/docs/api/room-invitation"},next:{title:"Polyglot Wechaty",permalink:"/docs/polyglot/"}},o=[{value:"Friendship",id:"friendship",children:[{value:"friendship.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaccept-\u21d2-promise-void",children:[]},{value:"friendship.hello() \u21d2 <code>string</code>",id:"friendshiphello-\u21d2-string",children:[]},{value:"friendship.contact() \u21d2 <code>Contact</code>",id:"friendshipcontact-\u21d2-contact",children:[]},{value:"friendship.type() \u21d2 <code>FriendshipType</code>",id:"friendshiptype-\u21d2-friendshiptype",children:[]},{value:"<del>Friendship.send()</del>",id:"friendshipsend",children:[]},{value:"Friendship.add(contact, hello) \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaddcontact-hello-\u21d2-promise-void",children:[]}]}],b={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Send, receive friend request, and friend confirmation events."),Object(a.b)("h2",{id:"friendship"},"Friendship"),Object(a.b)("p",null,"Send, receive friend request, and friend confirmation events."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"send request"),Object(a.b)("li",{parentName:"ol"},"receive request","(","in friend event",")"),Object(a.b)("li",{parentName:"ol"},"confirmation friendship","(","friend event",")")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/friend-bot.ts"},"Examples/Friend-Bot")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship"},"Friendship"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"instance"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+accept"},".accept","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+hello"},".hello","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+contact"},".contact","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Contact")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship+type"},".type","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"FriendshipType")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"static"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship.send"},Object(a.b)("del",{parentName:"a"},".send","(",")"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/api/friendship#Friendship.add"},".add","(","contact, hello",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <void>"))))))),Object(a.b)("h3",{id:"friendshipaccept-\u21d2-promise-void"},"friendship.accept","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(a.b)("p",null,"Accept Friend Request"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship")),"  "),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event.`)\n    switch (friendship.type()) {\n\n    // 1. New Friend Request\n\n    case bot.Friendship.Type.Receive:\n      await friendship.accept()\n      break\n\n    // 2. Friend Ship Confirmed\n\n    case bot.Friendship.Type.Confirm:\n      console.log(`friend ship confirmed`)\n      break\n    }\n  } catch (e) {\n    console.error(e)\n  }\n})\n.start()\n")),Object(a.b)("h3",{id:"friendshiphello-\u21d2-string"},"friendship.hello","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"string")),Object(a.b)("p",null,"Get verify message from"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship")),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Example")," ",Object(a.b)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event from ${friendship.contact().name()}`)\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),Object(a.b)("h3",{id:"friendshipcontact-\u21d2-contact"},"friendship.contact","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Contact")),Object(a.b)("p",null,"Get the contact from friendship"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship")),"  "),Object(a.b)("h4",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', friendship => {\n  const contact = friendship.contact()\n  const name = contact.name()\n  console.log(`received friend event from ${name}`)\n}\n.start()\n")),Object(a.b)("h3",{id:"friendshiptype-\u21d2-friendshiptype"},"friendship.type","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"FriendshipType")),Object(a.b)("p",null,"Return the Friendship Type"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Tips: FriendshipType is enum here. ","<","/br",">"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"FriendshipType.Unknown"),Object(a.b)("li",{parentName:"ul"},"FriendshipType.Confirm"),Object(a.b)("li",{parentName:"ul"},"FriendshipType.Receive"),Object(a.b)("li",{parentName:"ul"},"FriendshipType.Verify"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship")),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Example")," ",Object(a.b)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),Object(a.b)("h3",{id:"friendshipsend"},Object(a.b)("del",{parentName:"h3"},"Friendship.send","(",")")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Deprecated"))),Object(a.b)("p",null,"use ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#friendship-add-contact-hello-promise"},"Friendship","#","add")," instead"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship"))),Object(a.b)("h3",{id:"friendshipaddcontact-hello-\u21d2-promise-void"},"Friendship.add","(","contact, hello",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(a.b)("p",null,"Send a Friend Request to a ",Object(a.b)("inlineCode",{parentName:"p"},"contact")," with message ",Object(a.b)("inlineCode",{parentName:"p"},"hello"),"."),Object(a.b)("p",null,"The best practice is to send friend request once per minute. Remeber not to do this too frequently, or your account may be blocked."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(a.b)("a",{parentName:"p",href:"/docs/api/friendship#Friendship"},Object(a.b)("inlineCode",{parentName:"a"},"Friendship"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Param"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"contact"),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"Contact")),Object(a.b)("td",{parentName:"tr",align:"left"},"Send friend request to contact")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"hello"),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",{parentName:"tr",align:"left"},"The friend request content")))),Object(a.b)("h4",{id:"example-2"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const memberList = await room.memberList()\nfor (let i = 0; i < memberList.length; i++) {\n  await bot.Friendship.add(member, 'Nice to meet you! I am wechaty bot!')\n}\n")))}d.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),l=d(n),h=i,m=l["".concat(c,".").concat(h)]||l[h]||s[h]||a;return n?r.a.createElement(m,p(p({ref:t},b),{},{components:n})):r.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var b=2;b<a;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);