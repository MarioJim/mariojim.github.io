(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fgRK:function(e,t,a){},gZkK:function(e,t,a){"use strict";a.r(t);a("mXGw"),a("fgRK");var n=a("jrVH"),i=a("VZ8F"),r=a("Wbzz"),l=a("8nIL"),o=a("J5T5"),c=a("sHQh"),d=a("6h0R");var s=Object(o.a)("a",{target:"e1rs0kad6",label:"ItemWrapper"})({name:"1b2tbez",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;padding:14px;margin:0 auto 24px auto;border-radius:8px;color:black;background-color:#f5f5f5;width:90%;text-decoration:none"}),b=Object(o.a)("img",{target:"e1rs0kad5",label:"Image"})({name:"18p7dz4",styles:"display:block;margin:6px;height:25vw;max-height:240px;border-radius:4px;@media (max-width: 820px){height:auto;max-height:33vw;}"}),p=Object(o.a)("h3",{target:"e1rs0kad4",label:"Title"})("text-align:center;font-weight:",c.d,";font-size:1.3em;"),u=Object(o.a)("p",{target:"e1rs0kad3",label:"Info"})("text-align:center;font-weight:",c.b,";padding:0 22px;"),g=Object(o.a)("ul",{target:"e1rs0kad2",label:"Tags"})({name:"d3o54f",styles:"display:inline-flex;align-items:center;margin:4px"}),m=Object(o.a)("li",{target:"e1rs0kad1",label:"Tag"})("display:inline-block;padding:0.3em 0.9em;margin:0.2em 0.5em;background-color:#e8f1fa;border-radius:3px;font-size:0.8em;font-weight:",c.b,";text-align:center;@media (max-width: 420px){&:nth-of-type(4){display:none;}}"),f=Object(o.a)("a",{target:"e1rs0kad0",label:"OnlineDemoBtn"})({name:"tmi2i4",styles:"position:absolute;top:-10px;right:calc(5% - 20px);padding:14px 20px;background:#2f9366;border-radius:6px;text-decoration:none;text-align:center;color:white;font-size:1.2em;@media (max-width: 700px){padding:2vw 3vw;}"}),h=function(e){var t=e.image,a=e.title,n=e.owner,i=e.description,r=e.url,l=e.website,o=e.tags;return Object(d.a)("div",{style:{position:"relative"}},Object(d.a)(s,{href:r},Object(d.a)(b,{src:t,alt:a+" repo image"}),Object(d.a)(p,null,n&&n+" / ",a),Object(d.a)(u,null,i),Object(d.a)(g,null,o.map((function(e,t){return Object(d.a)(m,{key:a+"-"+t},e)})))),l&&Object(d.a)(f,{href:l},"Check it out",Object(d.a)("br",null)," online!"))},x=function(){var e=Object(r.useStaticQuery)("2240490367").github;return Object(d.a)("div",null,e.viewer.topRepositories.nodes.filter((function(e){return l.allowedRepos.includes(e.databaseId)})).map((function(e){return Object(d.a)(h,{key:e.databaseId,image:e.openGraphImageUrl,title:e.name,description:e.description,owner:e.owner.login,url:e.url,website:"https://mariojim.github.io/"!==e.homepageUrl&&e.homepageUrl,tags:e.repositoryTopics.nodes.map((function(e){return e.topic.name}))})})))},j=a("1Yd/"),w=a("Fgh7");t.default=function(){return Object(d.a)(i.a,null,Object(d.a)(j.a,null),Object(d.a)(n.a,null),Object(d.a)(i.b,null,Object(d.a)(w.a,null),Object(d.a)(x,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-a6a5b56719c3a8cd3bc0.js.map