(this["webpackJsonpfront-end-mentor-rest-countries-api"]=this["webpackJsonpfront-end-mentor-rest-countries-api"]||[]).push([[0],[,,,,function(e,t,n){e.exports={link:"list-item_link__1WRkn",darkTheme:"list-item_darkTheme__1RDG5",countryCard:"list-item_countryCard__3yS7g",flagContainer:"list-item_flagContainer__2-CLP",flag:"list-item_flag__3N2cO",detailsContainer:"list-item_detailsContainer__oCDkT",name:"list-item_name__-kQgq",content:"list-item_content__1hEoT",textMargin:"list-item_textMargin__efh9M",bold:"list-item_bold__2tupK"}},,function(e,t,n){e.exports={countryPage:"country_countryPage__3IRuh",darkTheme:"country_darkTheme__bBZcY",button:"country_button__3qsuL",borderButton:"country_borderButton__2-l4T",flagContainer:"country_flagContainer__GZJUL",flagImg:"country_flagImg__sjWAU",details:"country_details__qWii6",borderCountries:"country_borderCountries__2yQth"}},,,,function(e,t,n){e.exports={input:"searchingTools_input__1naVm",darkTheme:"searchingTools_darkTheme__A-puS",selectRegion:"searchingTools_selectRegion__dLejw",container:"searchingTools_container__JVItU",link:"searchingTools_link__1I93s",show:"searchingTools_show__1i4IX",hide:"searchingTools_hide__1o2Xh"}},,function(e,t,n){e.exports={switch:"modeSwitch_switch__Dg3uu",slider:"modeSwitch_slider__2lGI3",switchInput:"modeSwitch_switchInput__3zA0X",input:"modeSwitch_input__1DPSD",round:"modeSwitch_round__nbQU5"}},,,,function(e,t,n){e.exports={header:"header_header__2Uhdq",pageName:"header_pageName__5p7Ng",darkTheme:"header_darkTheme__3xrHW"}},,,,,function(e,t,n){e.exports={button:"button_button__3EgoR",darkTheme:"button_darkTheme__3t28M"}},function(e,t,n){e.exports={errorInfo:"notFound_errorInfo__2jvmT"}},,,function(e,t,n){e.exports={darkTheme:"app_darkTheme__3_mhJ"}},,function(e,t,n){e.exports={countryList:"list_countryList__1Okrm"}},function(e,t,n){e.exports={searchForCountry:"countriesList_searchForCountry__3dyc9"}},function(e,t,n){e.exports={loadingHeader:"loading_loadingHeader__3MW3H"}},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(24),r=n(1),s=n(15),o=n(5),i=function(e){return e.toLowerCase().replaceAll(" ","-")},l=Object(r.createContext)(),j=function(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),a=n[0],j=n[1],u=Object(r.useState)(!0),d=Object(o.a)(u,2),h=d[0],b=d[1];return Object(r.useEffect)((function(){fetch("https://restcountries.com/v3.1/all").then((function(e){if(e.ok)return e.json();throw Error(e.status)})).then((function(e){var t=e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{URL:i(e.name.common),regionURL:i(e.region)})}));j(t),b(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsx)(l.Provider,{value:{countries:a,loading:h},children:e.children})},u=Object(r.createContext)(),d=function(e){var t=Object(r.useState)("true"===localStorage.getItem("theme")||!1),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.jsx)(u.Provider,{value:{changeTheme:function(){a?(localStorage.setItem("theme","false"),s(!1)):(localStorage.setItem("theme","true"),s(!0))},darkTheme:a},children:e.children})},h=n(25),b=n.n(h),m=n(9),O=n(2),x=n(16),g=n.n(x),_=n(12),f=n.n(_),p=function(){var e=Object(r.useContext)(u),t=e.darkTheme,n=e.changeTheme;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("label",{className:f.a.switch,children:[Object(c.jsx)("input",{className:"".concat(f.a.input," ").concat(f.a.switchInput),type:"checkbox",onChange:n,checked:t}),Object(c.jsx)("span",{className:"".concat(f.a.slider," ").concat(f.a.round)})]})})},v=function(){var e=Object(r.useContext)(u).darkTheme;return Object(c.jsxs)("header",{className:"".concat(g.a.header," ").concat(e?g.a.darkTheme:null),children:[Object(c.jsx)(m.b,{className:"".concat(g.a.pageName," ").concat(e?g.a.darkTheme:null),to:"/",children:Object(c.jsx)("h1",{children:" Where in the world?"})}),Object(c.jsx)(p,{})]})},k=n(4),N=n.n(k),C=function(e){var t=e.flags,n=e.URL,a=e.name,s=e.population,o=e.regionURL,i=e.region,l=e.capital,j=Object(r.useContext)(u).darkTheme;return Object(c.jsx)(m.b,{to:"".concat(o,"/").concat(n),className:"".concat(N.a.link," ").concat(j?N.a.darkTheme:null),children:Object(c.jsxs)("div",{className:"".concat(N.a.countryCard," ").concat(j?N.a.darkTheme:null),children:[Object(c.jsx)("div",{className:N.a.flagContainer,children:Object(c.jsx)("img",{src:t.svg,alt:"",className:N.a.flag})}),Object(c.jsxs)("div",{className:N.a.detailsContainer,children:[Object(c.jsx)("h2",{className:N.a.name,children:a.common}),Object(c.jsxs)("div",{className:N.a.content,children:[Object(c.jsxs)("p",{className:N.a.textMargin,children:[Object(c.jsx)("span",{className:N.a.bold,children:"Population: "}),s]}),Object(c.jsxs)("p",{className:N.a.textMargin,children:[Object(c.jsx)("span",{className:N.a.bold,children:"Region: "}),i]}),Object(c.jsxs)("p",{className:N.a.textMargin,children:[Object(c.jsx)("span",{className:N.a.bold,children:"Capital: "}),l]})]})]})]})})},T=n(27),L=n.n(T),y=function(e){var t=e.list;return Object(c.jsx)("ul",{className:L.a.countryList,children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(C,Object(s.a)({},e))},e.name.common)}))})},R=n(10),U=n.n(R),w=function(){var e=Object(O.i)().id,t=Object(r.useContext)(u).darkTheme;return Object(c.jsx)("div",{className:"".concat(U.a.selectRegion," ").concat(t?U.a.darkTheme:""),children:Object(c.jsx)("div",{className:"".concat(U.a.container," ").concat(t?U.a.darkTheme:""),children:[{region:"All",regionURL:"all"},{region:"Africa",regionURL:"africa"},{region:"Americas",regionURL:"americas"},{region:"Asia",regionURL:"asia"},{region:"Europe",regionURL:"europe"},{region:"Ocenia",regionURL:"oceania"}].map((function(n){var a=n.region,r=n.regionURL;return Object(c.jsx)(m.b,{to:r,className:"".concat(U.a.link," ").concat(t?U.a.darkTheme:""," ").concat(r===e?U.a.show:U.a.hide),id:a,children:a},a)}))})})},S=function(){var e=Object(r.useContext)(u).darkTheme,t=Object(O.g)(),n=Object(r.useState)(""),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push("".concat(t.location.pathname,"?search=").concat(s)),i("")},children:Object(c.jsx)("input",{className:"".concat(U.a.input," ").concat(e?U.a.darkTheme:null),type:"text",placeholder:"Search for a country...",onChange:function(e){i(e.target.value)},value:s})})})},A=n(28),I=n.n(A),P=[{region:"All",regionURL:"all"},{region:"Africa",regionURL:"africa"},{region:"Americas",regionURL:"americas"},{region:"Asia",regionURL:"asia"},{region:"Europe",regionURL:"europe"},{region:"Ocenia",regionURL:"oceania"}],B=n(21),E=n.n(B),M=function(e){var t=e.action,n=e.text,a=Object(r.useContext)(u).darkTheme;return Object(c.jsx)("button",{className:"".concat(E.a.button," ").concat(a?E.a.darkTheme:null),onClick:t,children:n})},D=n(22),F=n.n(D),W=function(e){var t=e.children;return Object(c.jsx)("p",{className:F.a.errorInfo,children:t})},G=function(e){var t=e.setLoading,n=Object(O.i)(),a=n.id,r=n.type,s=Object(O.h)().search,o=Object(O.g)(),i=new URLSearchParams(s).get("search");return i?Object(c.jsxs)(W,{className:F.a.errorInfo,children:["Can't find country named ",Object(c.jsx)("b",{children:i})," ",Object(c.jsx)(M,{action:function(){return o.replace("/".concat(a))},text:"Go Back"}),"to region list"]}):P.some((function(e){return e.regionURL===a}))?Object(c.jsxs)(W,{children:["Can't find country named ",Object(c.jsx)("b",{children:r})," ",Object(c.jsx)(M,{action:function(){return o.replace("/".concat(a))},text:"Go Back"}),"to region list"]}):Object(c.jsxs)(W,{children:["Can't find region named ",Object(c.jsx)("b",{children:a})," choose from the list below",Object(c.jsx)("br",{}),P.map((function(e){return Object(c.jsxs)("span",{children:[Object(c.jsx)(M,{action:function(){o.push("/".concat(e.regionURL)),t()},text:e.region})," "]})}))]})},H=n(29),J=n.n(H),q=function(){return Object(c.jsx)("h2",{className:J.a.loadingHeader,children:"Loading..."})},Q=function(){var e=Object(r.useContext)(l).countries,t=Object(O.i)().id,n=Object(O.h)().search,a=new URLSearchParams(n).get("search"),s=Object(r.useState)(e),i=Object(o.a)(s,2),j=i[0],u=i[1],d=Object(r.useState)(e),h=Object(o.a)(d,2),b=(h[0],h[1]),m=Object(r.useState)(!0),x=Object(o.a)(m,2),g=x[0],_=x[1];Object(r.useEffect)((function(){if(null!==a)return f(a),void _(!1);f(),_(!1)}),[t,n]);var f=function(n){if(void 0===t||"all"===t){if(n){var c=n.toLowerCase();return b(e),void u(e.filter((function(e){return e.name.official.toLowerCase().includes(c)})))}u(e),b(e)}else{var a=e.filter((function(e){return e.regionURL===t}));if(n){var r=n.toLowerCase();return b(a),void u(a.filter((function(e){return e.name.official.toLowerCase().includes(r)})))}b(a),u(a)}};return g?Object(c.jsx)(q,{}):j.length?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:I.a.searchForCountry,children:[Object(c.jsx)(w,{}),Object(c.jsx)(S,{})]}),Object(c.jsx)(y,{list:j})]}):Object(c.jsx)(G,{setLoading:function(){return _(!0)}})},X=function(e,t,n){var a=e;return Array.isArray(e)||(a=Object.values(e)),1!==a.length?Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{children:[t,": "]}),a.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[e.name?e.name:e,a.length-1!==t&&","," "]})}))]}):Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{children:[n,": "]}),a[0].name?a[0].name:a[0]]})},V=n(6),Z=n.n(V),z=function(){var e=Object(O.i)(),t=e.type,n=e.id,a=Object(r.useContext)(l).countries,s=Object(r.useContext)(u).darkTheme,i=Object(O.g)(),j=Object(r.useState)(),d=Object(o.a)(j,2),h=d[0],b=d[1],x=Object(r.useState)(),g=Object(o.a)(x,2),_=g[0],f=g[1],p=Object(r.useState)(!0),v=Object(o.a)(p,2),k=v[0],N=v[1];return Object(r.useEffect)((function(){var e;e=a.find((function(e){return e.URL===t})),b(e),e?(f((function(){if(e&&Array.isArray(e.borders))return e.borders.map((function(e){return a.filter((function(t){return e===t.cca3&&e===t.cca3}))})).flat()})),N(!1)):N(!1)}),[t,n,a]),k?Object(c.jsx)(q,{}):h?Object(c.jsxs)("div",{className:"".concat(Z.a.countryPage," ").concat(s?Z.a.darkTheme:null),children:[Object(c.jsx)(M,{action:function(){return i.goBack()},text:"Back"}),Object(c.jsx)("div",{className:Z.a.flagContainer,children:Object(c.jsx)("img",{className:Z.a.flagImg,src:h.flags.svg,alt:""})}),Object(c.jsxs)("div",{className:Z.a.details,children:[Object(c.jsx)("h2",{children:h.name.common}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Native Name:"})," ",h.name.nativeName["".concat(Object.keys(h.name.nativeName)[0])].official]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Population:"})," ",h.population]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Region:"})," ",h.region]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Sub Region:"})," ",h.subregion]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Capital:"})," ",h.capital]}),Array.isArray(h.tld)&&Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:Z.a.span,children:"Top Level Domain:"})," ",h.tld[0]]}),X(h.currencies,"Currencies","Currency"),X(h.languages,"Languages","Language")]}),Array.isArray(_)&&Object(c.jsxs)("div",{className:Z.a.borderCountries,children:[Object(c.jsx)("h3",{children:"Border Countries:"}),_.map((function(e){return Object(c.jsx)(m.b,{className:"".concat(Z.a.borderButton," ").concat(s?Z.a.darkTheme:null),to:{pathname:"/".concat(e.regionURL,"/").concat(e.URL),state:h.name.common},children:e.name.common},e.name.common)}))]})]}):Object(c.jsx)(G,{})},K=function(){return Object(c.jsxs)(m.a,{basename:"/",children:[Object(c.jsx)(v,{}),Object(c.jsxs)(O.d,{children:[Object(c.jsx)(O.b,{path:"/:id",exact:!0,render:function(){return Object(c.jsx)(Q,{})}}),Object(c.jsx)(O.b,{path:"/:id/:type",exact:!0,render:function(){return Object(c.jsx)(z,{})}}),Object(c.jsx)(O.a,{from:"/",exact:!0,to:"/all"})]})]})},Y=function(){var e=Object(r.useContext)(u).darkTheme,t=Object(r.useContext)(l).loading;return Object(c.jsx)("div",{className:e?b.a.darkTheme:null,children:t?Object(c.jsx)(q,{}):Object(c.jsx)(K,{})})};Object(a.render)(Object(c.jsx)(j,{children:Object(c.jsx)(d,{children:Object(c.jsx)(Y,{})})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.20edf89d.chunk.js.map