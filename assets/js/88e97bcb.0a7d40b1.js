"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),m=l,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,c(c({ref:t},s),{},{components:a})):n.createElement(k,c({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,c=new Array(r);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,c[1]=p;for(var o=2;o<r;o++)c[o]=a[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={title:"Scala \u4ee3\u7801\u89c4\u8303",authors:["panda"],tags:["Practice"]},c="Scala \u4ee3\u7801\u89c4\u8303",p={permalink:"/blog/2021/10/08/scala-standard",source:"@site/blog/2021-10-08-scala-standard/index.md",title:"Scala \u4ee3\u7801\u89c4\u8303",description:"\u4e00\u3001\u524d\u8a00",date:"2021-10-08T00:00:00.000Z",formattedDate:"October 8, 2021",tags:[{label:"Practice",permalink:"/blog/tags/practice"}],readingTime:4.08,hasTruncateMarker:!1,authors:[{name:"Panda",title:"Tencent CSIG",url:"https://magicpenta.github.io",imageURL:"https://magicpenta.github.io/img/logo.svg",key:"panda"}],frontMatter:{title:"Scala \u4ee3\u7801\u89c4\u8303",authors:["panda"],tags:["Practice"]},prevItem:{title:"\u57fa\u4e8e Docusaurus \u642d\u5efa\u81ea\u5efa\u535a\u5ba2",permalink:"/blog/2022/02/15/docusaurus"},nextItem:{title:"Java \u591a\u6a21\u5757\u6301\u7eed\u96c6\u6210\uff08Maven \u793a\u4f8b\uff09",permalink:"/blog/2021/06/15/jenkins"}},i={authorsImageUrls:[void 0]},o=[{value:"\u4e00\u3001\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:2},{value:"\u4e8c\u3001\u9879\u76ee\u521b\u5efa\u89c4\u7ea6",id:"\u4e8c\u9879\u76ee\u521b\u5efa\u89c4\u7ea6",level:2},{value:"2.1 \u4f9d\u8d56\u7ba1\u7406",id:"21-\u4f9d\u8d56\u7ba1\u7406",level:3},{value:"2.2 Scala SDK",id:"22-scala-sdk",level:3},{value:"2.3 \u6846\u67b6\u652f\u6301",id:"23-\u6846\u67b6\u652f\u6301",level:3},{value:"\u4e09\u3001\u4ee3\u7801\u98ce\u683c\u89c4\u7ea6",id:"\u4e09\u4ee3\u7801\u98ce\u683c\u89c4\u7ea6",level:2},{value:"3.1 Scalafmt \u5b89\u88c5",id:"31-scalafmt-\u5b89\u88c5",level:3},{value:"3.2 Scalafmt \u914d\u7f6e",id:"32-scalafmt-\u914d\u7f6e",level:3},{value:"3.3 \u53d8\u91cf\u7c7b\u578b\u8865\u5168",id:"33-\u53d8\u91cf\u7c7b\u578b\u8865\u5168",level:3}],s={toc:o};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u524d\u8a00"},"\u4e00\u3001\u524d\u8a00"),(0,l.kt)("p",null,"\u4e0e Java \u4e0d\u540c\uff0cScala \u6bd4\u8f83\u5c0f\u4f17\uff0c\u6ca1\u6709\u653e\u4e4b\u56db\u6d77\u800c\u7686\u51c6\u7684\u89c4\u8303\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4f7f\u56e2\u961f\u5728 Scala \u9879\u76ee\u4e0a\u7684\u4ee3\u7801\u5c3d\u53ef\u80fd\u5730\u4fdd\u6301\u4e00\u81f4\uff0c\u7b14\u8005\u5728\u501f\u9274 ",(0,l.kt)("strong",{parentName:"p"},"\u5b98\u65b9\u6587\u6863"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u6e90\u9879\u76ee")," \u7684\u57fa\u7840\u4e0a\uff0c\u6574\u7406\u4e86\u9002\u7528\u4e8e\u81ea\u8eab\u56e2\u961f\u7684 Scala \u4ee3\u7801\u89c4\u8303\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u9879\u76ee\u521b\u5efa\u89c4\u7ea6"},"\u4e8c\u3001\u9879\u76ee\u521b\u5efa\u89c4\u7ea6"),(0,l.kt)("p",null,"\u672c\u89c4\u7ea6\u5c55\u793a\u4e86\u4e00\u4e2a\u5728 IDEA \u4e0a\u521b\u5efa Scala \u9879\u76ee\u7684\u6d41\u7a0b\uff0c\u4ee5\u4f9b\u53c2\u8003\u3002"),(0,l.kt)("h3",{id:"21-\u4f9d\u8d56\u7ba1\u7406"},"2.1 \u4f9d\u8d56\u7ba1\u7406"),(0,l.kt)("p",null,"Scala \u652f\u6301\u901a\u8fc7 Maven \u6216 sbt \u6765\u7ba1\u7406\u9879\u76ee\u3002\u57fa\u4e8e\u4ee5\u4e0b\u56e0\u7d20\uff0c\u6211\u4eec\u9009\u62e9 Maven\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scala \u5f00\u6e90\u9879\u76ee\u5927\u90e8\u5206\u90fd\u662f\u901a\u8fc7 Maven \u8fdb\u884c\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u56e2\u961f\u6210\u5458\u5bf9 Maven \u6bd4\u8f83\u719f\u6089\uff0c\u5b66\u4e60\u6210\u672c\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u6d41\u6301\u7eed\u96c6\u6210\u4ea7\u54c1\u5bf9 Maven \u652f\u6301\u5ea6\u6bd4\u8f83\u9ad8")),(0,l.kt)("p",null,"\u4f7f\u7528 Maven \u521b\u5efa Scala \u9879\u76ee\u65f6\uff0c\u4e0e  Java \u65e0\u592a\u5927\u533a\u522b\uff0c\u53ef\u4ee5\u901a\u8fc7 archetype \u5feb\u901f\u521b\u5efa\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6591).Z,width:"1475",height:"1062"})),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u9879\u76ee\u4ec5\u80fd\u521b\u5efa Java \u7c7b\uff0c\u8fd8\u65e0\u6cd5\u521b\u5efa Scala \u7c7b\u3002"),(0,l.kt)("h3",{id:"22-scala-sdk"},"2.2 Scala SDK"),(0,l.kt)("p",null,"Scala SDK \u662f Scala \u9879\u76ee\u4e2d\u4e0d\u53ef\u7f3a\u5c11\u7684\u90e8\u5206\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Project Structure \u5b8c\u6210 Scala SDK \u7684\u6dfb\u52a0\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u82e5\u672c\u5730\u6ca1\u6709 Scala SDK\uff0c\u53ef\u4ee5\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u53f7\uff0c\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684 Scala \u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(929).Z,width:"1297",height:"1062"})),(0,l.kt)("h3",{id:"23-\u6846\u67b6\u652f\u6301"},"2.3 \u6846\u67b6\u652f\u6301"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u8ddd\u79bb\u5b8c\u6574\u521b\u5efa Scala \u9879\u76ee\u8fd8\u5dee\u6700\u540e\u4e00\u6b65\uff0c\u5373\u6846\u67b6\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53f3\u952e\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Add Framework Support"),"\uff0c\u7136\u540e\u4f1a\u5f39\u51fa\u5982\u4e0b\u5bf9\u8bdd\u6846\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6727).Z,width:"1051",height:"438"})),(0,l.kt)("p",null,"\u52fe\u9009 Scala\uff0c\u70b9\u51fb OK\u3002\u6b64\u65f6\uff0cScala \u9879\u76ee\u521b\u5efa\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u65b0\u5efa Scala \u7c7b\u5e76\u8fdb\u884c\u7f16\u7801\u3002"),(0,l.kt)("h2",{id:"\u4e09\u4ee3\u7801\u98ce\u683c\u89c4\u7ea6"},"\u4e09\u3001\u4ee3\u7801\u98ce\u683c\u89c4\u7ea6"),(0,l.kt)("p",null,"Scala \u5b98\u65b9\u63d0\u4f9b\u4e86\u4ee3\u7801\u98ce\u683c\u53c2\u8003\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/style/index.html#"},"https://docs.scala-lang.org/style/index.html")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u57fa\u4e8e\u6587\u6863\u7684\u89c4\u7ea6\u5e38\u5e38\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u56e2\u961f\u4e2d\u603b\u4f1a\u6709\u201c\u7cca\u6d82\u86cb\u201d\u4e00\u4e0d\u5c0f\u5fc3\u72af\u4e86\u201c\u9519\u201d\u3002\u4e3a\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5f15\u5165 ",(0,l.kt)("strong",{parentName:"p"},"Scalafmt \u63d2\u4ef6"),"\uff0c\u4ee5\u5f3a\u5236\u7684\u624b\u6bb5\u4fdd\u8bc1\u9879\u76ee\u4ee3\u7801\u98ce\u683c\u7684\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h3",{id:"31-scalafmt-\u5b89\u88c5"},"3.1 Scalafmt \u5b89\u88c5"),(0,l.kt)("p",null,"Scalafmt \u53ef\u4ee5\u76f4\u63a5\u5728 IDEA \u7684\u63d2\u4ef6\u5546\u573a\u4e2d\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u9700\u91cd\u542f IDEA\u3002"),(0,l.kt)("h3",{id:"32-scalafmt-\u914d\u7f6e"},"3.2 Scalafmt \u914d\u7f6e"),(0,l.kt)("p",null,"Scalafmt \u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},".scalafmt.conf")," \u6587\u4ef6\u5b9e\u73b0\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6253\u5f00 Settings\uff0c\u8fdb\u5165 ",(0,l.kt)("strong",{parentName:"p"},"Editor > Code Style > Scala")," \u754c\u9762\uff0c\u5c06 Formatter \u8bbe\u7f6e\u4e3a Scalafmt\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8283).Z,width:"1245",height:"887"})),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},".scalafmt.conf")," \u6587\u4ef6\uff0c\u8f93\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"maxColumn = 150\n")),(0,l.kt)("p",null,"\u82e5\u914d\u7f6e\u6210\u529f\uff0c\u53ef\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Editor > Code Style > Scala")," \u754c\u9762\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(5230).Z,width:"1245",height:"887"})),(0,l.kt)("h3",{id:"33-\u53d8\u91cf\u7c7b\u578b\u8865\u5168"},"3.3 \u53d8\u91cf\u7c7b\u578b\u8865\u5168"),(0,l.kt)("p",null,"\u5728 Scala \u4e2d\uff0c\u53d8\u91cf\u7684\u5b9e\u9645\u7c7b\u578b\u53ef\u4ee5\u662f\u4e0d\u663e\u5f0f\u6307\u5b9a\u7684\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val value = "panda"\n')),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5b83\u7684\u5b8c\u6574\u8868\u8fbe\u5f0f\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val value: String = "panda"\n')),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u4ee3\u7801\u9605\u8bfb\u6027\uff0c\u4f7f\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u80fd\u5feb\u901f\u77e5\u6653\u53d8\u91cf\u7684\u5b9e\u9645\u7c7b\u578b\uff0c\u6211\u4eec\u89c4\u5b9a ",(0,l.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u7c7b\u578b\u8981\u5b8c\u5168\u8865\u5168"),"\u3002"),(0,l.kt)("p",null,"\u5728 Java \u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".var")," \u5b9e\u73b0\u53d8\u91cf\u7c7b\u578b\u81ea\u52a8\u8865\u5168\u3002\u4f46\u662f\uff0c\u5728 Scala \u9879\u76ee\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".var")," \u8865\u5168\u7684\u5185\u5bb9\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u4e0d\u663e\u793a\u5b9e\u9645\u7c7b\u578b\u7684\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9630).Z,width:"1002",height:"301"})),(0,l.kt)("p",null,"\u82e5\u60f3\u8981\u663e\u793a\u5b9e\u9645\u7c7b\u578b\uff0c\u9700\u8981\u5728 Type Annotations \u9009\u9879\u5361\u4e2d\u52fe\u9009 ",(0,l.kt)("inlineCode",{parentName:"p"},"Local definition")," \u9009\u9879\uff0c\u5e76\u53d6\u6d88\u52fe\u9009 ",(0,l.kt)("inlineCode",{parentName:"p"},"Type is stable*")," \u9009\u9879\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(117).Z,width:"1239",height:"856"})),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u518d\u6b21\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".var")," \u8fdb\u884c\u8865\u5168\u65f6\uff0c\u4f1a\u53d1\u73b0\u53d8\u91cf\u7684\u5b9e\u9645\u7c7b\u578b\u5df2\u7ecf\u81ea\u52a8\u8865\u4e0a\u4e86\u3002"))}u.isMDXComponent=!0},9630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auto_complete-38a3e72fc3db54cf9bfb00f044bc3fdf.png"},6727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/framework_support-4d802d2e241b26f39a289609de685020.png"},6591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new_project-d0d6ebbeccdd44f5c4b360e1098ba579.png"},929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scala_sdk-eaa5767824ebcd02968963a938ee3d04.png"},8283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scalafmt-bc1f1ad4019a8b47adccbf9d2c62c14a.png"},5230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scalafmt_config-065bd6769f26806114d0cc02c94dc7f0.png"},117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type_annotation-e7aa05c314a232929846e67917281d68.png"}}]);