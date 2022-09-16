"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[753],{4743:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(9844),r=t(2784),l=t(5601),i=t(5898),m=function(e){var a=e.icon,t=e.className,n=void 0===t?"":t,l=i.$s[a].icon;return r.createElement(l,{className:n})},s=function(e){var a=e.data,t=e.className,n=void 0===t?"":t;return r.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+n},a.map((function(e){var a,t=e[0],n=e[1],l=(null===(a=i.$s[t])||void 0===a?void 0:a.url)+"/"+n;return(/^(?:https?:\/\/)/.test(n)||/^mailto:/.test(n))&&(l=n),r.createElement("li",{key:t},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},r.createElement(m,{className:"site-link",icon:t})))})))},c=(0,r.memo)(s),o=function(e){var a=e.bio,t=e.name,i=e.initial,m=e.avatar,s=m.normal,o=m.className,u=void 0===o?"h-32 w-32":o,d=e.sns,g=e.className,f=void 0===g?"":g,v=e.yamlId;return r.createElement("div",{className:f+" flex flex-wrap space-x-0 sm:space-x-8"},r.createElement("div",{className:"w-full sm:w-auto text-center"},r.createElement(l.Z,{className:"mb-4 "+u,initial:i,image:s})),r.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},r.createElement("h3",{className:"leading-tight md:leading-tight"},t,v&&r.createElement(n.Link,{to:"/authors/@"+v,className:"site-link mx-2"},r.createElement("small",null,"@",v))),r.createElement("p",{className:"text-base"},a),r.createElement(c,{className:"max-w-lg text-xl my-0",data:d})))},u=(0,r.memo)(o)},5601:function(e,a,t){var n=t(2784),r=t(7915),l=function(e){var a=e.image,t=e.initial,l=e.className,i=void 0===l?"":l,m=(0,r.d)(a);return m?n.createElement(r.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+i,image:m,alt:""}):n.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+i,"data-initial":t})};a.Z=(0,n.memo)(l)},5805:function(e,a,t){var n=t(2784),r=t(9844),l=function(e){var a=e.categories,t=e.className;return a&&a.length?n.createElement("div",{className:"flex flex-wrap gap-3 "+t},a.map((function(e,a){return n.createElement(r.Link,{className:"site-tag block",key:a,to:"/categories/"+e},e)}))):n.createElement(n.Fragment,null)};a.Z=(0,n.memo)(l)},4063:function(e,a,t){var n=t(2784),r=t(9844),l=function(e){var a=e.pageInfo,t=a.currentPage,l=a.hasNextPage,i=a.hasPreviousPage,m=a.pageCount,s=e.path,c=function(e){return t==e+1?"pagination-item active":"pagination-item"};return n.createElement("ul",{className:"pagination text-center"},i?n.createElement("li",{className:"pagination-item"},n.createElement(r.Link,{to:"/"+s+"/"+(t-1)},"Prev")):null,Array.from({length:m}).map((function(e,a){return n.createElement("li",{key:a+1,className:c(a)},n.createElement(r.Link,{to:"/"+s+"/"+(a+1)},a+1))})),l?n.createElement("li",{className:"pagination-item"},n.createElement(r.Link,{to:"/"+s+"/"+(t+1)},"Next")):null)};a.Z=(0,n.memo)(l)},7119:function(e,a,t){var n=t(2784),r=function(e){var a=e.timeToRead,t=e.date,r=e.className,l=void 0===r?"":r;return n.createElement("span",{className:"text-gray-500 "+l},t," • ",a," min read")};a.Z=(0,n.memo)(r)},5016:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(2784),r=t(9844),l=t(7915),i=t(5805),m=t(7119),s=function(e){var a=e.title,t=e.description,s=e.date,c=e.categories,o=e.hero,u=e.timeToRead,d=e.slug,g=(0,l.d)(null==o?void 0:o.normal);return n.createElement("div",{className:"panel"},n.createElement(r.Link,{to:d},g?n.createElement("div",{className:"panel-image"},n.createElement(l.G,{image:g,alt:""})):null,n.createElement("h3",null,a)),n.createElement("p",{className:"panel-content"},t),n.createElement(i.Z,{categories:c}),n.createElement("br",null),n.createElement("span",{className:"panel-footer"},n.createElement(m.Z,{timeToRead:u,date:s})))},c=(0,n.memo)(s),o=function(e){var a=e.posts,t=e.className,r=void 0===t?"":t;return n.createElement("div",{className:r},a.map((function(e){var a=e.id,t=e.timeToRead,r=e.frontmatter,l=r.categories,i=r.date,m=r.description,s=r.hero,o=r.title,u=e.fields.slug;return n.createElement(c,{key:a,title:o,description:m,date:i,categories:l,hero:s,slug:u,timeToRead:t})})))},u=(0,n.memo)(o)},5996:function(e,a,t){t.r(a);var n=t(2784),r=t(5450),l=t(4063),i=t(4743),m=t(5016),s=t(8795);a.default=function(e){var a=e.data,t=a.allMdx,c=t.nodes,o=t.pageInfo,u=a.authorsYaml,d=u.bio,g=u.name,f=u.initial,v=u.avatar,E=u.sns,p=e.pageContext.authorId,N=(0,s.$W)().siteUrl;return n.createElement(r.Z,{pageUrl:N+"/authors/@"+p,pageTitle:"Posts of "+g},n.createElement(i.Z,{className:"mb-24 p-8 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mx-auto max-w-2xl",bio:d,name:g,initial:f,avatar:v,sns:E}),n.createElement(m.Z,{posts:c,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),n.createElement("div",{className:"my-24"},n.createElement(l.Z,{pageInfo:o,path:"authors/@"+p})))}}}]);
//# sourceMappingURL=component---gatsby-theme-pitayan-src-templates-author-posts-index-tsx-c9dffbbe3fa2b7ad575d.js.map