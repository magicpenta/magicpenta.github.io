"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),o=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(g.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=o(t),N=r,s=k["".concat(g,".").concat(N)]||k[N]||u[N]||l;return t?a.createElement(s,p(p({ref:n},m),{},{components:t})):a.createElement(s,p({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=N;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[k]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:4},p="ClickHouse \u8868\u5f15\u64ce",i={unversionedId:"clickhouse/ClickHouse \u8868\u5f15\u64ce",id:"clickhouse/ClickHouse \u8868\u5f15\u64ce",title:"ClickHouse \u8868\u5f15\u64ce",description:"ClickHouse \u7684\u8868\u5f15\u64ce\u4e0e\u4ee5\u4e0b\u51e0\u70b9\u606f\u606f\u76f8\u5173\uff1a",source:"@site/docs/clickhouse/ClickHouse \u8868\u5f15\u64ce.md",sourceDirName:"clickhouse",slug:"/clickhouse/ClickHouse \u8868\u5f15\u64ce",permalink:"/docs/clickhouse/ClickHouse \u8868\u5f15\u64ce",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"ClickHouse \u6570\u636e\u7c7b\u578b",permalink:"/docs/clickhouse/ClickHouse \u6570\u636e\u7c7b\u578b"},next:{title:"ClickHouse SQL",permalink:"/docs/clickhouse/ClickHouse SQL"}},g={},o=[{value:"Log Family",id:"log-family",level:2},{value:"TinyLog",id:"tinylog",level:3},{value:"StripeLog",id:"stripelog",level:3},{value:"Log",id:"log",level:3},{value:"MergeTree Family",id:"mergetree-family",level:2},{value:"MergeTree",id:"mergetree",level:3},{value:"ReplacingMergeTree",id:"replacingmergetree",level:3},{value:"SummingMergeTree",id:"summingmergetree",level:3},{value:"AggregatingMergeTree",id:"aggregatingmergetree",level:3},{value:"CollapsingMergeTree",id:"collapsingmergetree",level:3},{value:"VersionedCollapsingMergeTree",id:"versionedcollapsingmergetree",level:3}],m={toc:o};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-\u8868\u5f15\u64ce"},"ClickHouse \u8868\u5f15\u64ce"),(0,r.kt)("p",null,"ClickHouse \u7684\u8868\u5f15\u64ce\u4e0e\u4ee5\u4e0b\u51e0\u70b9\u606f\u606f\u76f8\u5173\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u67e5\u8be2\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\u4e0e\u5e76\u53d1\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7684\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u526f\u672c")),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u8868\u5f15\u64ce\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"}," Log \u7cfb\u5217\u5f15\u64ce")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"MergeTree \u7cfb\u5217\u5f15\u64ce"),"\u3002"),(0,r.kt)("h2",{id:"log-family"},"Log Family"),(0,r.kt)("p",null,"Log \u7cfb\u5217\u5f15\u64ce\u4e00\u822c\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\uff08\u5c0f\u4e8e\u767e\u4e07\u7ea7\uff09\u7684\u573a\u666f\u3002\u8fd9\u4e2a\u7cfb\u5217\u7684\u5f15\u64ce\u53ef\u8fdb\u4e00\u6b65\u7ec6\u5206\u4e3a\uff1a",(0,r.kt)("strong",{parentName:"p"},"TinyLog"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"StripeLog")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"Log"),"\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Log \u7cfb\u5217\u5f15\u64ce\u53ef\u4ee5\u5c06\u6570\u636e\u5b58\u50a8\u5230\u5982 HDFS\u3001S3 \u7b49\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u3002")),(0,r.kt)("h3",{id:"tinylog"},"TinyLog"),(0,r.kt)("p",null,"TinyLog \u662f\u8be5\u7cfb\u5217 ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u7b80\u5355\u7684\u5f15\u64ce"),"\uff0c\u540c\u65f6\u4e5f\u662f\u8be5\u7cfb\u5217\u529f\u80fd\u6700\u5c11\u3001\u6027\u80fd\u6700\u5dee\u7684\u5f15\u64ce\u3002"),(0,r.kt)("p",null,"\u5728 TinyLog \u4e2d\uff0c\u6bcf\u4e2a\u5217\u7684\u6570\u636e\u5355\u72ec\u5b58\u50a8\u5728\u4e00\u4e2a\u6587\u4ef6\u5939\u91cc\u3002\u5047\u8bbe\u5f15\u64ce\u7c7b\u578b\u4e3a TinyLog \u7684\u8868\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u4e24\u4e2a\u5b57\u6bb5\uff0c\u5219\u5176\u6570\u636e\u5b58\u50a8\u6587\u4ef6\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id.bin"),"\uff1a\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u5217\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name.bin"),"\uff1a\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u5217\u7684\u6570\u636e")),(0,r.kt)("h3",{id:"stripelog"},"StripeLog"),(0,r.kt)("p",null,"StripeLog \u4e5f\u662f\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u7684\u573a\u666f\uff0c\u5b83\u7684\u6570\u636e\u5b58\u50a8\u6587\u4ef6\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.bin"),"\uff1a\u6570\u636e\u5b58\u653e\u6587\u4ef6\uff0c\u6240\u6709\u5217\u6570\u636e\u5b58\u50a8\u5728\u540c\u4e2a\u6587\u4ef6\u4e2d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index.mrk"),"\uff1a\u6807\u8bb0\u6587\u4ef6\uff0c\u5305\u542b\u5df2\u63d2\u5165\u6570\u636e\u5757\u4e2d\u6bcf\u5217\u7684\u504f\u79fb\u91cf")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u6807\u8bb0\u6587\u4ef6\uff0cStripeLog \u67e5\u8be2\u65f6\u53ef\u4ee5\u8df3\u8fc7\u6307\u5b9a\u884c\u6570\uff0c\u4ece\u6807\u8bb0\u7684\u504f\u79fb\u91cf\u5f00\u59cb\u8bfb\u53d6\u6570\u636e\u3002\u8fd9\u4f7f\u5f97 StripeLog \u652f\u6301\u5e76\u53d1\u8bfb\u53d6\uff0c\u4f46\u540c\u65f6\u4e5f\u610f\u5473\u7740 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u54cd\u5e94\u7ed3\u679c\u7684\u987a\u5e8f\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\u3002")),(0,r.kt)("h3",{id:"log"},"Log"),(0,r.kt)("p",null,"Log \u7684\u6570\u636e\u5b58\u50a8\u6587\u4ef6\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id.bin"),"\uff1a\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u5217\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name.bin"),"\uff1a\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u5217\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__marks.mrk"),"\uff1a\u6807\u8bb0\u6587\u4ef6")),(0,r.kt)("p",null,"\u4e3a\u66f4\u6e05\u6670\u5730\u5c55\u793a Log \u7cfb\u5217\u5f15\u64ce\u7684\u5f02\u540c\u70b9\uff0c\u6211\u4eec\u603b\u7ed3\u4e86\u5982\u4e0b\u7279\u6027\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7279\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"TinyLog"),(0,r.kt)("th",{parentName:"tr",align:null},"StripeLog"),(0,r.kt)("th",{parentName:"tr",align:null},"Log"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u78c1\u76d8\u5b58\u50a8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u5217\u6570\u636e\u5355\u72ec\u5b58\u50a8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u8ffd\u52a0\u7684\u65b9\u5f0f\u5b9e\u73b0\u65b0\u589e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u6807\u8bb0\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u5e76\u53d1\u8bfb\u53d6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u5e76\u53d1\u9501"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7d22\u5f15"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u66f4\u65b0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u539f\u5b50\u5199\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u89c1\uff0cLog \u66f4\u50cf\u662f TinyLog \u4e0e StripeLog \u7684\u7ed3\u5408\u4f53\u3002")),(0,r.kt)("h2",{id:"mergetree-family"},"MergeTree Family"),(0,r.kt)("p",null,"MergeTree \u7cfb\u5217\u5f15\u64ce\u662f ClickHouse \u6570\u636e\u5b58\u50a8\u7684\u6838\u5fc3\u90e8\u5206\u3002\u5b83\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u7279\u6027\uff08\u5982\u81ea\u5b9a\u4e49\u5206\u533a\u3001\u4e3b\u952e\u3001\u4e8c\u7ea7\u7d22\u5f15\u7b49\uff09\uff0c\u5728\u6027\u80fd\u548c\u5bb9\u9519\u65b9\u9762\u6709\u7740\u975e\u5e38\u4f18\u5f02\u7684\u8868\u73b0\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\u6570\u636e\u91cf\u6781\u5927\u7684\u8868"),"\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u8d85\u5f3a\u7684\u6027\u80fd\u4e5f\u610f\u5473\u7740\u8f83\u5927\u7684\u8d44\u6e90\u5f00\u9500\u3002\u56e0\u6b64\uff0c\u5728\u5c11\u91cf\u5927\u8868\u7684\u573a\u666f\u4e0b\uff0c\u63a8\u8350\u4f7f\u7528 MergeTree \u7cfb\u5217\u5f15\u64ce\uff1b\u5728\u5927\u91cf\u5c0f\u8868\u7684\u573a\u666f\u4e0b\uff0c\u63a8\u8350\u4f7f\u7528 Log \u7cfb\u5217\u5f15\u64ce\u3002"),(0,r.kt)("h3",{id:"mergetree"},"MergeTree"),(0,r.kt)("p",null,"MergeTree \u662f MergeTree \u7cfb\u5217\u4e2d\u7684\u57fa\u672c\u5f15\u64ce\uff0c\u5305\u542b\u4e86\u8be5\u7cfb\u5217\u5f15\u64ce\u7684\u5927\u90e8\u5206\u529f\u80fd\uff0c\u4e3b\u8981\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e3b\u952e\u6392\u5e8f\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u533a\u952e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u91c7\u6837")),(0,r.kt)("p",null,"MergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n    INDEX index_name1 expr1 TYPE type1(...) GRANULARITY value1,\n    INDEX index_name2 expr2 TYPE type2(...) GRANULARITY value2,\n    ...\n    PROJECTION projection_name_1 (SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY]),\n    PROJECTION projection_name_2 (SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY])\n) ENGINE = MergeTree()\nORDER BY expr\n[PARTITION BY expr]\n[PRIMARY KEY expr]\n[SAMPLE BY expr]\n[TTL expr\n    [DELETE|TO DISK 'xxx'|TO VOLUME 'xxx' [, ...] ]\n    [WHERE conditions]\n    [GROUP BY key_expr [SET v1 = aggr_func(v1) [, v2 = aggr_func(v2) ...]] ] ]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"\u5404\u5b50\u53e5\u7684\u542b\u4e49\u8bf7\u89c1\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u53e5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u53e5\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ORDER BY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6392\u5e8f\u952e\uff08\u7531\u5b57\u6bb5\u5143\u7ec4\u7ec4\u6210\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"(id, name)"),"\uff09\uff0c\u53ef\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"ORDER BY tuple()")," \u7981\u7528\u6392\u5e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PARTITION BY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5206\u533a\u952e\uff0c\u53ef\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"toYYYYMM(date_column)")," \u5b9e\u73b0\u6309\u6708\u4efd\u5206\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PRIMARY KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4e3b\u952e\uff0c\u82e5\u4e3a\u7a7a\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5206\u533a\u952e\u4f5c\u4e3a\u4e3b\u952e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAMPLE BY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u91c7\u6837\u8868\u8fbe\u5f0f\uff0c\u5fc5\u987b\u5305\u542b\u5728\u4e3b\u952e\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TTL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u884c\u5b58\u50a8\u7684\u6301\u7eed\u65f6\u95f4\u5e76\u5b9a\u4e49\u6570\u636e\u7247\u6bb5\u5728\u786c\u76d8\u548c\u5377\u4e0a\u7684\u79fb\u52a8\u903b\u8f91\uff08\u5220\u9664\u6216\u79fb\u52a8\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a MergeTree \u7684\u5176\u4ed6\u914d\u7f6e\u53c2\u6570")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SETTINGS \u4e2d\u5305\u542b\u5f88\u591a\u7528\u4e8e\u63a7\u5236 MergeTree \u884c\u4e3a\u7684\u53c2\u6570\uff0c\u5982\u7d22\u5f15\u7c92\u5ea6\u3001\u5b58\u50a8\u7b56\u7565\u3001\u5408\u5e76\u64cd\u4f5c\u3001\u6570\u636e\u538b\u7f29\u7b49\u3002")),(0,r.kt)("h3",{id:"replacingmergetree"},"ReplacingMergeTree"),(0,r.kt)("p",null,"ReplacingMergeTree \u4e0e MergeTree \u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u5b83\u53ef\u4ee5\u5220\u9664 ",(0,r.kt)("strong",{parentName:"p"},"\u6392\u5e8f\u952e\u503c\u76f8\u540c")," \u7684\u91cd\u590d\u9879\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u53bb\u91cd\u7684\u64cd\u4f5c\u4f1a\u5728\u6570\u636e\u5408\u5e76\u671f\u8fd0\u884c\uff0c\u4f46\u7531\u4e8e\u6570\u636e\u5408\u5e76\u662f\u7531\u540e\u53f0\u7ebf\u7a0b\u5f02\u6b65\u5904\u7406\u7684\uff0c\u5177\u4f53\u7684\u53bb\u91cd\u65f6\u673a\u65e0\u6cd5\u9884\u4f30\u3002\u56e0\u6b64\uff0cReplacingMergeTree \u53ea\u80fd\u4fdd\u8bc1\u6700\u7ec8\u7ed3\u679c\u662f\u53bb\u91cd\u7684\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u6392\u5e8f\u952e\u4e0d\u91cd\u590d\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u8bed\u53e5\u4e3b\u52a8\u89e6\u53d1\u5408\u5e76\uff0c\u4f46 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u4f1a\u5f15\u53d1\u5927\u91cf\u8bfb\u5199\uff0c\u5e76\u4e0d\u63a8\u8350\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"ReplacingMergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = ReplacingMergeTree([ver])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n\n")),(0,r.kt)("p",null,"\u5176\u5b50\u53e5\u90e8\u5206\u4e0e MergeTree \u76f8\u540c\uff0c\u4f46\u5165\u53c2\u90e8\u5206\u6709\u6240\u533a\u522b\u3002"),(0,r.kt)("p",null,"ReplacingMergeTree \u7684\u5165\u53c2\u8868\u793a\u7248\u672c\u53f7\uff0c\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt*"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),"\uff0c\u5b83\u51b3\u5b9a\u4e86\u6570\u636e\u53bb\u91cd\u65f6\u7684\u4fdd\u7559\u5bf9\u8c61\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u7248\u672c\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"ver")," \u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4fdd\u7559\u6700\u540e\u4e00\u6761\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u7248\u672c\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"ver")," \u5df2\u6307\u5b9a\uff0c\u5219\u4fdd\u7559 ver \u503c\u6700\u5927\u7684\u6570\u636e")),(0,r.kt)("h3",{id:"summingmergetree"},"SummingMergeTree"),(0,r.kt)("p",null,"SummingMergeTree \u7ee7\u627f\u81ea MergeTree\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff1a\u5f53\u5408\u5e76 SummingMergeTree \u7684\u6570\u636e\u7247\u6bb5\u65f6\uff0cClickHouse \u4f1a\u628a\u591a\u4e2a\u5177\u6709 ",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u540c\u6392\u5e8f\u952e")," \u7684\u884c\u8bb0\u5f55 ",(0,r.kt)("strong",{parentName:"p"},"\u5408\u5e76\u6210\u4e00\u884c"),"\uff0c\u4e14\u8be5\u884c\u6570\u503c\u578b\u5217\u7684\u503c\u4e3a\u5408\u5e76\u524d ",(0,r.kt)("strong",{parentName:"p"},"\u540c\u4e00\u5217\u7684 **"),(0,r.kt)("inlineCode",{parentName:"p"},"sum"),"*",(0,r.kt)("strong",{parentName:"p"},"* \u503c"),"\u3002"),(0,r.kt)("p",null,"SummingMergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = SummingMergeTree([columns])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"\u5176\u5b50\u53e5\u90e8\u5206\u4e5f\u4e0e MergeTree \u76f8\u540c\uff0c\u4f46\u5165\u53c2\u90e8\u5206\u6709\u6240\u533a\u522b\u3002"),(0,r.kt)("p",null,"SummingMergeTree \u7684\u5165\u53c2\u4e3a\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"[columns]"),"\uff0c\u8be5\u6570\u7ec4\u6307\u5b9a\u7684\u5217\u5c06\u5728\u5408\u5e76\u65f6\u8fdb\u884c\u6c47\u603b\uff0c\u5176\u53d6\u503c\u6ce8\u610f\u4e8b\u9879\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5217\u7684\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u4e3a\u6570\u503c\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5217\u4e0d\u53ef\u5b58\u5728\u4e0e\u6392\u5e8f\u952e\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8be5\u53c2\u6570\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u6c47\u603b\u6240\u6709\u6570\u636e\u7c7b\u578b\u4e3a\u6570\u503c\u578b\u7684\u5217\uff08\u6392\u5e8f\u952e\u5305\u542b\u7684\u5217\u9664\u5916\uff09")),(0,r.kt)("p",null,"\u6b64\u5916\uff0cSummingMergeTree \u5bf9\u6c47\u603b\u5217\u5177\u6709\u4ee5\u4e0b\u89c4\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u67d0\u4e00\u884c\u7528\u4e8e\u6c47\u603b\u7684\u6240\u6709\u5217\u4e2d\u7684\u503c\u4e3a 0\uff0c\u5219\u6c47\u603b\u540e\u8be5\u884c\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u5217\u65e0\u6cd5\u88ab\u6c47\u603b\uff08\u4e14\u4e0d\u88ab\u6392\u5e8f\u952e\u5305\u542b\uff09\uff0c\u5219\u6c47\u603b\u65f6\u4ece\u73b0\u6709\u7684\u503c\u4e2d\u4efb\u9009\u4e00\u4e2a")),(0,r.kt)("h3",{id:"aggregatingmergetree"},"AggregatingMergeTree"),(0,r.kt)("p",null,"AggregatingMergeTree \u662f SummingMergeTree \u7684\u5347\u7ea7\u7248\uff0c\u5b83\u4eec\u7684\u533a\u522b\u5728\u4e8e\uff1aSummingMergeTree \u53ea\u80fd\u5bf9\u975e\u6392\u5e8f\u952e\u5217\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," \u805a\u5408\uff0c\u800c ",(0,r.kt)("strong",{parentName:"p"},"AggregatingMergeTree \u53ef\u4ee5\u6307\u5b9a\u5404\u79cd\u805a\u5408\u51fd\u6570"),"\uff0c\u7075\u6d3b\u6027\u66f4\u9ad8\u3002"),(0,r.kt)("p",null,"AggregatingMergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = AggregatingMergeTree()\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[TTL expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"\u4e0e SummingMergeTree \u4e0d\u540c\uff0cAggregatingMergeTree \u5e76\u6ca1\u6709\u5165\u53c2\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740 AggregatingMergeTree \u66f4\u6613\u4e8e\u4f7f\u7528\uff0c\u76f8\u53cd\u5730\uff0c\u5b83\u7684\u4f7f\u7528\u65b9\u5f0f\u6bd4\u8f83\u590d\u6742\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u521b\u5efa\u4e86\u57fa\u4e8e AggregatingMergeTree \u7684\u660e\u7ec6\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE agg_table\n(\n    `user_id` UInt8,\n    `start_date` Date,\n    `count` AggregateFunction(sum, Int8)\n)\nENGINE = AggregatingMergeTree\nPARTITION BY toYYYYMM(start_date)\nORDER BY user_id\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"AggregateFunction \u662f\u7279\u6b8a\u7684\u6570\u636e\u7c7b\u578b\uff0c\u80fd\u591f\u4ee5\u4e8c\u8fdb\u5236\u7684\u5f62\u5f0f\u5b58\u50a8\u4e2d\u95f4\u72b6\u6001\u7ed3\u679c\uff0c\u4f46\u662f\u5b83\u7684\u5199\u5165\u4e0e\u67e5\u8be2\u9700\u8981\u8c03\u7528\u805a\u5408\u51fd\u6570\u3002")),(0,r.kt)("p",null,"\u65b0\u589e\u6570\u636e\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"-State-")," \u7684\u805a\u5408\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO agg_table SELECT\n    '1',\n    '2021-01-01',\n    sumState(toInt8(1))\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"-Merge-")," \u7684\u805a\u5408\u51fd\u6570\uff0c\u540c\u65f6\u8981\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    user_id,\n    start_date,\n    sumMerge(count)\nFROM agg_table\nGROUP BY\n    user_id,\n    start_date\n")),(0,r.kt)("p",null,"\u53ef\u89c1\uff0cAggregatingMergeTree \u7684\u4f7f\u7528\u65b9\u5f0f\u975e\u5e38\u7e41\u7410\u3002\u56e0\u6b64\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u4e0d\u76f4\u63a5\u4ee5 AggregatingMergeTree \u4e3a\u5f15\u64ce\u521b\u5efa\u8868\uff0c\u800c\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"\u5728\u57fa\u7840\u8868\u4e0a\u521b\u5efa\u7269\u7406\u89c6\u56fe")," \u6765\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("p",null,"\u8fd8\u662f\u4ee5\u4e0a\u8ff0\u5b57\u6bb5\u4e3a\u4f8b\uff0c\u8fd9\u4e2a\u6d41\u7a0b\u5927\u6982\u662f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 01\uff1a"),"\u521b\u5efa\u57fa\u7840\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE base_table\n(\n    `user_id` UInt8,\n    `start_date` Date,\n    `count` Int8\n)\nENGINE = MergeTree\nORDER BY user_id\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 02\uff1a"),"\u521b\u5efa\u7269\u7406\u89c6\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW agg_view\nENGINE = AggregatingMergeTree\nPARTITION BY toYYYYMM(start_date)\nORDER BY user_id AS\nSELECT\n    user_id,\n    start_date,\n    sumState(count) AS counts\nFROM base_table\nGROUP BY\n    user_id,\n    start_date\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 03\uff1a"),"\u63d2\u5165\u6570\u636e\u5230\u57fa\u7840\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO base_table VALUES(1, '2021-01-01', 1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 04\uff1a"),"\u4ece\u89c6\u56fe\u4e2d\u67e5\u8be2\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    user_id,\n    start_date,\n    sumMerge(counts)\nFROM agg_view\nGROUP BY\n    user_id,\n    start_date\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5c3d\u7ba1\u589e\u52a0\u4e86\u89c6\u56fe\u521b\u5efa\u7684\u6b65\u9aa4\uff0c\u4f46\u662f\u65b0\u589e\u6570\u636e\u65f6\u4e0d\u518d\u9700\u8981\u805a\u5408\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u6570\u636e\u63d2\u5165\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u3002")),(0,r.kt)("h3",{id:"collapsingmergetree"},"CollapsingMergeTree"),(0,r.kt)("p",null,"CollapsingMergeTree \u662f\u4e00\u79cd\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u589e\u4ee3\u5220")," \u601d\u60f3\u5b9e\u73b0\u884c\u7ea7\u6570\u636e\u4fee\u6539\u548c\u5220\u9664\u7684\u5f15\u64ce\u3002"),(0,r.kt)("p",null,"\u5b83\u4f1a\u901a\u8fc7\u6807\u8bb0\u5b57\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u6765\u6807\u8bb0\u6570\u636e\u7684\u72b6\u6001\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"\uff0c\u8868\u793a\u5f53\u524d\u884c\u6570\u636e\u9700\u8981\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u82e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u8868\u793a\u5f53\u524d\u884c\u6570\u636e\u662f\u6709\u6548\u6570\u636e")),(0,r.kt)("p",null,"\u5f53\u6570\u636e\u5408\u5e76\u65f6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u540c\u4e00\u5206\u533a")," \u5185 ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u6807\u8bb0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u4e00\u7ec4\u6570\u636e\u4f1a\u6298\u53e0\u5220\u9664\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5feb\u901f\u5199\u5165\u6570\u636e\u7684\u573a\u666f\u4e0b\uff0c\u6570\u636e\u7684\u4fee\u6539\u548c\u5220\u9664\u5f80\u5f80\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u8017\u8d39\u5927\u91cf\u7684\u8d44\u6e90\u4ee5\u91cd\u5199\u5b58\u50a8\u4e2d\u7684\u6570\u636e\u3002CollapsingMergeTree \u4ee5\u589e\u4ee3\u5220\u7684\u673a\u5236\uff0c\u53ef\u4ee5\u5728\u652f\u6301\u6570\u636e\u4fee\u6539\u4e0e\u5220\u9664\u7684\u524d\u63d0\u4e0b\uff0c\u5c3d\u53ef\u80fd\u5730\u63d0\u9ad8\u6027\u80fd\u3002")),(0,r.kt)("p",null,"CollapsingMergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = CollapsingMergeTree(sign)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50 \uff0c\u6765\u5c55\u793a CollapsingMergeTree \u6298\u53e0\u5220\u9664\u7684\u8fc7\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 01\uff1a"),"\u521b\u5efa\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE collapse_table\n(\n    `user_id` UInt8,\n    `name` String,\n    `age` UInt8,\n    `sign` Int8\n)\nENGINE = CollapsingMergeTree(sign)\nPARTITION BY name\nORDER BY user_id\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 02\uff1a"),"\u63d2\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u65e7\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO collapse_table VALUES(1, 'panda', 18, 1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 03\uff1a"),"\u63d2\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," \u7684\u65e7\u6570\u636e\uff0c\u6807\u8bb0\u5220\u9664\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO collapse_table VALUES(1, 'panda', 18, -1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 04\uff1a"),"\u63d2\u5165\u65b0\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO collapse_table VALUES(1, 'panda', 28, 1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 05\uff1a"),"\u89e6\u53d1\u5408\u5e76\uff0c\u67e5\u770b\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE collapse_table;\nSELECT * FROM collapse_table;\n\n")),(0,r.kt)("p",null,"\u53ef\u89c1\uff0cCollapsingMergeTree \u4ee5\u589e\u4ee3\u5220\u7684\u673a\u5236\u662f\u751f\u6548\u7684\u3002\u4f46\u662f\uff0c\u6211\u4eec\u6ce8\u610f\u5230\uff0c\u8be5\u673a\u5236\u5b9e\u65f6\u751f\u6548\u7684\u524d\u63d0\u662f\u624b\u52a8\u89e6\u53d1\u5408\u5e76\uff08\u8fd9\u4f1a\u5bfc\u81f4\u5927\u91cf\u8d44\u6e90\u7684\u8017\u8d39\uff09\uff0c\u82e5\u6ca1\u6709\u624b\u52a8\u89e6\u53d1\uff0c\u5219\u9700\u8981\u7b49\u5f85\u540e\u53f0\u5408\u5e76\u7ebf\u7a0b\u5b8c\u6210\u5408\u5e76\uff0c\u8fd9\u610f\u5473\u7740 ",(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539\u548c\u5220\u9664\u65e0\u6cd5\u5b9e\u65f6\u53ef\u89c1"),"\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\uff0c\u6709\u6ca1\u6709\u4ec0\u4e48\u529e\u6cd5\uff0c\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u6027\u80fd\u7684\u540c\u65f6\uff0c\u53c8\u4fdd\u8bc1\u6570\u636e\u53d8\u66f4\u7684\u5b9e\u65f6\u53ef\u89c1\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u805a\u5408\u51fd\u6570\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    user_id,\n    name,\n    sum(age * sign)\nFROM collapse_table\nGROUP BY\n    user_id,\n    name\nHAVING sum(sign) > 0\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"CollapsingMergeTree \u5bf9\u5199\u5165\u6570\u636e\u7684\u987a\u5e8f\u6709\u7740\u4e25\u683c\u7684\u8981\u6c42\uff0c\u82e5\u6570\u636e\u4ee5\u4e71\u5e8f\u5199\u5165\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," \u7684\u65e7\u6570\u636e\u5148\u5199\u5165\uff09\uff0c\u5c06\u5bfc\u81f4\u6298\u53e0\u5931\u8d25\u3002\u8fd9\u4f7f\u5f97 CollapsingMergeTree \u7684\u5de5\u4f5c\u673a\u5236\u5728\u5e76\u53d1\u5199\u5165\u7684\u573a\u666f\u4e0b\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"versionedcollapsingmergetree"},"VersionedCollapsingMergeTree"),(0,r.kt)("p",null,"VersionedCollapsingMergeTree \u7684\u5de5\u4f5c\u76ee\u6807\u4e0e CollapsingMergeTree \u662f\u4e00\u81f4\u7684\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff1a\u524d\u8005\u5728\u6807\u8bb0\u4f4d ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u7684\u57fa\u7840\u4e0a\u5f15\u5165\u4e86\u7248\u672c\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\uff0c\u4ee5\u652f\u6301\u591a\u7ebf\u7a0b\u4e0b\u7684\u4e71\u5e8f\u5199\u5165\u3002"),(0,r.kt)("p",null,"VersionedCollapsingMergeTree \u7684\u521b\u8868\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = VersionedCollapsingMergeTree(sign, version)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u7684\u5b9a\u4e49\u4e0e CollapsingMergeTree \u76f8\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"version")," \u8868\u793a\u72b6\u6001\u7248\u672c\u53f7\uff0c\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt*"),"\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50 \uff0c\u6765\u5c55\u793a VersionedCollapsingMergeTree \u6298\u53e0\u5220\u9664\u7684\u8fc7\u7a0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 01\uff1a"),"\u521b\u5efa\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE version_table\n(\n    `user_id` UInt8,\n    `name` String,\n    `age` UInt8,\n    `sign` Int8,\n    `version` UInt8\n)\nENGINE = VersionedCollapsingMergeTree(sign, version)\nPARTITION BY name\nORDER BY user_id\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 02\uff1a"),"\u4e71\u5e8f\u63d2\u5165\u6570\u636e\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," \u7684\u6570\u636e\u5148\u63d2\u5165\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO version_table VALUES(1, 'panda', 18, -1, 1);\nINSERT INTO version_table VALUES(1, 'panda', 18, 1, 1);\nINSERT INTO version_table VALUES(1, 'panda', 28, 1, 2);\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STEP 03\uff1a"),"\u89e6\u53d1\u5408\u5e76\uff0c\u67e5\u770b\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE version_table;\nSELECT * FROM version_table;\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5c3d\u7ba1 VersionedCollapsingMergeTree \u89e3\u51b3\u4e86\u4e71\u5e8f\u5408\u5e76\u7684\u95ee\u9898\uff0c\u4f46\u9700\u8981\u4e1a\u52a1\u5c42\u7ef4\u62a4\u597d version \u7684\u53d8\u66f4\u3002")))}k.isMDXComponent=!0}}]);