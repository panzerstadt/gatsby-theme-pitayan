"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[317],{5805:function(e,t,a){var n=a(2784),l=a(9844),r=function(e){var t=e.categories,a=e.className;return t&&t.length?n.createElement("div",{className:"flex flex-wrap gap-3 "+a},t.map((function(e,t){return n.createElement(l.Link,{className:"site-tag block",key:t,to:"/categories/"+e},e)}))):n.createElement(n.Fragment,null)};t.Z=(0,n.memo)(r)},4063:function(e,t,a){var n=a(2784),l=a(9844),r=function(e){var t=e.pageInfo,a=t.currentPage,r=t.hasNextPage,i=t.hasPreviousPage,c=t.pageCount,m=e.path,s=function(e){return a==e+1?"pagination-item active":"pagination-item"};return n.createElement("ul",{className:"pagination text-center"},i?n.createElement("li",{className:"pagination-item"},n.createElement(l.Link,{to:"/"+m+"/"+(a-1)},"Prev")):null,Array.from({length:c}).map((function(e,t){return n.createElement("li",{key:t+1,className:s(t)},n.createElement(l.Link,{to:"/"+m+"/"+(t+1)},t+1))})),r?n.createElement("li",{className:"pagination-item"},n.createElement(l.Link,{to:"/"+m+"/"+(a+1)},"Next")):null)};t.Z=(0,n.memo)(r)},7119:function(e,t,a){var n=a(2784),l=function(e){var t=e.timeToRead,a=e.date,l=e.className,r=void 0===l?"":l;return n.createElement("span",{className:"text-gray-500 "+r},a," • ",t," min read")};t.Z=(0,n.memo)(l)},5016:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(2784),l=a(9844),r=a(7915),i=a(5805),c=a(7119),m=function(e){var t=e.title,a=e.description,m=e.date,s=e.categories,o=e.hero,u=e.timeToRead,g=e.slug,d=(0,r.d)(null==o?void 0:o.normal);return n.createElement("div",{className:"panel"},n.createElement(l.Link,{to:g},d?n.createElement("div",{className:"panel-image"},n.createElement(r.G,{image:d,alt:""})):null,n.createElement("h3",null,t)),n.createElement("p",{className:"panel-content"},a),n.createElement(i.Z,{categories:s}),n.createElement("br",null),n.createElement("span",{className:"panel-footer"},n.createElement(c.Z,{timeToRead:u,date:m})))},s=(0,n.memo)(m),o=function(e){var t=e.posts,a=e.className,l=void 0===a?"":a;return n.createElement("div",{className:l},t.map((function(e){var t=e.id,a=e.timeToRead,l=e.frontmatter,r=l.categories,i=l.date,c=l.description,m=l.hero,o=l.title,u=e.fields.slug;return n.createElement(s,{key:t,title:o,description:c,date:i,categories:r,hero:m,slug:u,timeToRead:a})})))},u=(0,n.memo)(o)},809:function(e,t,a){a.r(t);var n=a(2784),l=a(5450),r=a(4063),i=a(5016),c=a(8795);t.default=function(e){var t=e.data.allMdx,a=t.nodes,m=t.totalCount,s=t.pageInfo,o=(0,c.$W)().siteUrl;return n.createElement(l.Z,{pageUrl:o+"/posts/"+s.currentPage,pageTitle:"All Posts"},n.createElement("h1",{className:"leading-tight md:leading-tight md:text-4xl text-3xl text-center mb-32"},"All Posts (",m,")"),n.createElement(i.Z,{posts:a,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),n.createElement("div",{className:"my-24"},n.createElement(r.Z,{pageInfo:s,path:"posts"})))}}}]);
//# sourceMappingURL=component---gatsby-theme-pitayan-src-templates-all-posts-index-tsx-b62fe1a26732bd90c68a.js.map