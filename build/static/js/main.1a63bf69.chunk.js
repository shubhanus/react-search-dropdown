(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e){e.exports=[{id:"123-s2-546",name:"John Jacobs",items:["John","bucket","bottle"],address:"1st Cross, 9th Main, abc Apartment, 2nd Cross, BTI Apartment, 2nd Cross, BTI Apartment",pincode:"5xx012"},{id:"123-s3-146",name:"David Mire",items:["Bedroom Set"],address:"2nd Cross, BTI Apartment",pincode:"4xx012"},{id:"223-a1-234",name:"Soloman Marshall",items:["bottle"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"121-s2-111",name:"Ricky Beno",items:["Mobile Set"],address:"Sunshine City",pincode:"5xx072"},{id:"123-p2-246",name:"Sikander Singh",items:["Air Conditioner"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"b23-s2-321",name:"Ross Wheeler",items:["Mobile"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"113-n2-563",name:"Ben Bish",items:["Kitchen Set","Chair"],address:"Sunshine City",pincode:"5xx072"},{id:"323-s2-112",name:"John Michael",items:["Refrigerator"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"abc-34-122",name:"Jason Jordan",items:["Mobile"],address:"Riverbed Apartment",pincode:"4xx032"}]},,,function(e,n,t){e.exports=t(16)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),s=t.n(o),i=(t(14),t(5));t(15);var c=r.a.memo(function(e){var n=e.children,t=e.query;return t&&new RegExp("^(".concat(t,").*$"),"i").test(n)?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",{className:"highlight"},n.substring(0,t.length)),n.substring(t.length)):n},function(e,n){return e.children===n.children&&e.query===n.query}),u=r.a.forwardRef(function(e,n){var t=e.id,a=e.name,o=e.address,s=e.isHover,i=e.query,u=e.inItems,d=e.onMouseOver;return r.a.createElement("li",{ref:s?n:void 0,className:"user__card ".concat(s?"focused":""),onMouseOver:function(){d(e)}},r.a.createElement("div",{className:"user__card-id"},r.a.createElement(c,{query:i},t)),u&&r.a.createElement("div",{className:"user__card-in-items"},'"',u,'" Found in items'),r.a.createElement("div",{className:"user__card-name"},r.a.createElement("i",null,r.a.createElement(c,{query:i},a))),r.a.createElement("div",{className:"user__card-address"},r.a.createElement(c,{query:i},o)))}),d=r.a.memo(u,function(e,n){return e.id===n.id&&e.name===n.name&&e.address===n.address&&e.isHover===n.isHover&&e.query===n.query&&e.inItems===n.inItems});var l=r.a.memo(function(e){var n=e.options,t=void 0===n?[]:n,a=e.query,o=e.focused,s=e.handelHover,i=e.focusedOptionRef,c=e.listRef;return r.a.createElement("ul",{className:"user__list",ref:c},t.length?t.map(function(e,n){return r.a.createElement(d,Object.assign({},e,{isHover:o.id===e.id,key:e.id,query:a,onMouseOver:s,index:n,ref:i}))}):r.a.createElement("div",{className:"user__card-empty"},"No Users Found"))}),m=t(2),f=t(1);var v=function(e){var n=Object(a.useState)(""),t=Object(f.a)(n,2),r=t[0],o=t[1],s=Object(a.useState)(!1),i=Object(f.a)(s,2),c=i[0],u=i[1];return{searchOptions:Object(a.useMemo)(function(){for(var n=new RegExp("^(".concat(r,").*$"),"i"),t=[],a=0;a<e.length;a++){var o=e[a],s=o.id,i=o.name,c=o.address,u=o.items.find(function(e){return e.toLowerCase()===r.toLowerCase()});(n.test(s)||n.test(i)||n.test(c)||u)&&(u?t.push(Object(m.a)({},e[a],{inItems:u})):t.push(e[a]))}return t},[e,r]),searchValue:r,handelSearch:function(e){var n=e.target;o(n.value),c&&!n.value?u(!1):!c&&n.value&&u(!0)},isMenuOpen:c,closeMenu:function(){c&&u(!1)}}};function h(e,n){e.current.scrollTop=n}var p=function(e){var n=e.options,t=e.listRef,r=e.focusedOptionRef,o=e.closeMenu,s=Object(a.useRef)(!1),i=Object(a.useRef)(!1),c=Object(a.useState)({}),u=Object(f.a)(c,2),d=u[0],l=u[1],v=function(e){var t,a=void 0===d.index?-1:d.index;"up"===e?t=a>0?a-1:n.length-1:"down"===e&&(t=(a+1)%n.length),s.current=!0,l(Object(m.a)({},n[t],{index:t}))};Object(a.useEffect)(function(){s.current&&function(e,n){var t=n.current.getBoundingClientRect(),a=e.current.getBoundingClientRect(),r=n.current.offsetHeight/3;t.bottom+r>a.bottom?h(e,Math.min(n.current.offsetTop+n.current.clientHeight-e.current.offsetHeight+r,e.current.scrollHeight)):t.top-r<a.top&&h(e,Math.max(n.current.offsetTop-r,0))}(t,r),s.current=!1},[d]);return{focused:d,handelKeyDown:function(e){switch(e.key){case"ArrowUp":e.preventDefault(),v("up");break;case"ArrowDown":e.preventDefault(),v("down");break;case"Escape":o()}},handelHover:function(e){i.current||e.id===d.id||l(e)},onMouseMove:function e(){e.current=!1},resetFocused:function(){d.id&&l({})}}},b=t(6),g=t.n(b),E=t(7),x=t.n(E);var w=r.a.memo(function(e){var n=e.handelSearch,t=e.value;return r.a.createElement("div",{className:"input__wrapper"},r.a.createElement(g.a,{size:20,className:"magnify-ico"}),r.a.createElement("input",{className:"input__box",type:"text",placeholder:"Search users by ID, address, name",onChange:n,value:t}),t&&r.a.createElement(x.a,{size:20,className:"close-ico",onClick:function(){n({target:{value:""}})}}))},function(e,n){return e.value===n.value});var O=function(){var e=Object(a.useRef)(null),n=Object(a.useRef)(null),t=v(i),o=t.searchOptions,s=t.searchValue,c=t.handelSearch,u=t.isMenuOpen,d=t.closeMenu,m=p({options:o,listRef:e,focusedOptionRef:n,closeMenu:d}),f=m.focused,h=m.handelKeyDown,b=m.handelHover,g=m.onMouseMove,E=m.resetFocused;Object(a.useEffect)(function(){E()},[s]);var x=Object(a.useCallback)(function(n){e.current&&e.current.contains(n.target)||"input__box"===n.target.className||d()},[d,e]);return Object(a.useEffect)(function(){return u&&document.addEventListener("mousedown",x,!1),function(){document.removeEventListener("mousedown",x,!1)}},[x,u]),r.a.createElement("div",{onKeyDown:u?h:void 0,className:"root"},r.a.createElement(w,{handelSearch:c,value:s}),u&&r.a.createElement(l,{options:o,query:s,focused:f,handelHover:b,onMouseMove:g,listRef:e,focusedOptionRef:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.1a63bf69.chunk.js.map