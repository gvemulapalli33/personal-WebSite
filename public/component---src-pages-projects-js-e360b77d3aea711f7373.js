(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("Kvkj"),c=a("7Qib"),i=a("7vrA");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges||[],r=t.allFile.edges||[],u=c.c.getImageMap(r,/\/[projects].*\/|$/,!0,3);return n.a.createElement(l.a,null,n.a.createElement(c.a,{title:"Projects"}),n.a.createElement(l.b,{title:"Projects"}),n.a.createElement(i.a,{className:"text-left"},n.a.createElement("section",null,a.map((function(e){var t=e.node;return n.a.createElement("div",{key:t.id,className:"p-3"},n.a.createElement(l.c,{to:t.fields.slug,featuredImages:u[t.fields.slug],title:t.frontmatter.title,tags:t.frontmatter.tags,excerpt:t.excerpt}),n.a.createElement("hr",null))})))))};var u="1750503825"},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return l}));var r=a("ElpU"),n=a("BYIe"),l=(a("SRfc"),{getImageMap:function(e,t,a,r){return void 0===a&&(a=!1),void 0===r&&(r=3),e.reduce((function(e,n){var l=n.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=r&&e[l].push(n.node.childImageSharp.fluid);else{var c=[];c.push(n.node.childImageSharp.fluid),e[l]=c}else e[l]=n.node.childImageSharp.fluid;return e}),{})}})}}]);
//# sourceMappingURL=component---src-pages-projects-js-e360b77d3aea711f7373.js.map