(this["webpackJsonpcard-memory-game"]=this["webpackJsonpcard-memory-game"]||[]).push([[0],{14:function(a,e,i){},15:function(a,e,i){"use strict";i.r(e);var n=i(0),t=i(1),c=i.n(t),r=i(7),m=i.n(r),d=(i(14),i(8)),o=i(2),s=i(5),u=i.p+"static/media/mobile.cfa07d2c.webp";var g=function(a){var e=a.card,i=a.onClick;return Object(n.jsxs)("div",{className:"memory-card".concat(e.isFlipped?" flip":""),onClick:i,style:{order:e.order},"data-testid":e.id,children:[Object(n.jsx)("img",{className:"front-face",src:e.image,alt:"Card"}),Object(n.jsx)("img",{className:"back-face",src:u,alt:"JS Badge"})]})},l=i.p+"static/media/granger.38c5dce7.png",j=i.p+"static/media/julian.1761ae1e.png",p=i.p+"static/media/layla.4cdd62bb.png",b=i.p+"static/media/alucard.58692bf6.png",f=i.p+"static/media/yin.078fc150.png",O=i.p+"static/media/amon.d66e94f0.png",y=[{id:1,name:"granger",image:l},{id:2,name:"granger",image:l},{id:3,name:"julian",image:j},{id:4,name:"julian",image:j},{id:5,name:"layla",image:p},{id:6,name:"layla",image:p},{id:7,name:"alucard",image:b},{id:8,name:"alucard",image:b},{id:9,name:"yin",image:f},{id:10,name:"yin",image:f},{id:11,name:"amon",image:O},{id:12,name:"amon",image:O}].map((function(a){return Object(o.a)(Object(o.a)({},a),{},{order:Math.floor(12*Math.random()),isFlipped:!1})}));var h=function(){var a=Object(t.useState)(y),e=Object(s.a)(a,2),i=e[0],c=e[1],r=Object(t.useState)(0),m=Object(s.a)(r,2),u=m[0],l=m[1],j=Object(t.useState)([]),p=Object(s.a)(j,2),b=p[0],f=p[1],O=function(a,e){c((function(i){return i.map((function(i){return i.id===a?Object(o.a)(Object(o.a)({},i),{},{isFlipped:e}):i}))}))};return Object(t.useEffect)((function(){2===u&&setTimeout((function(){b[0].name!==b[1].name&&b[0].id!==b[1].id&&(O(b[0].id,!1),O(b[1].id,!1)),l(0),f([])}),1500)}),[u]),Object(n.jsx)("section",{className:"memory-game",children:i.map((function(a,e){return Object(n.jsx)(g,{card:a,onClick:function(){return e=a.id,l((function(a){return a+1})),f((function(a){return[].concat(Object(d.a)(a),[i[e-1]])})),void(u<2&&O(e,!0));var e}},e)}))})};m.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d33ac5b7.chunk.js.map