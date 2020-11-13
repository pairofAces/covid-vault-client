(this["webpackJsonpcovid-vault"]=this["webpackJsonpcovid-vault"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/empty-heart.0984040e.svg"},102:function(e,t,a){e.exports=a.p+"static/media/filled-heart.88bf2af2.svg"},111:function(e,t,a){e.exports=a(222)},116:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(116),a(63),a(31)),s=a(94),i=a.n(s);var u=function(){return r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/covid-vault"},r.a.createElement("img",{src:i.a,className:"top-nav-icon",alt:"icon"})),r.a.createElement("div",{className:"nav-links"},r.a.createElement(o.b,{to:"/about",style:{color:"white",textDecoration:"none",fontWeight:"bold"}},r.a.createElement("li",null,"About")),r.a.createElement(o.b,{to:"/tracker",style:{color:"white",textDecoration:"none",fontWeight:"bold"}},r.a.createElement("li",null,"Tracker")),r.a.createElement(o.b,{to:"/graph",style:{color:"white",textDecoration:"none",fontWeight:"bold"}},r.a.createElement("li",null,"Graph"))))},m=a(95),d=a.n(m);var f=function(){return r.a.createElement("div",{className:"home-column"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{className:"image",src:d.a,alt:"title"})),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/tracker"},r.a.createElement("div",{className:"pulse"},r.a.createElement("span",null),r.a.createElement("span",null))))},v=a(96),h=a.n(v);var p=function(){return r.a.createElement("div",{className:"about_header"},r.a.createElement("h1",null,"About Page"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-left"},r.a.createElement("img",{src:h.a,alt:"karan"})),r.a.createElement("div",{className:"card-right"},r.a.createElement("h2",null,"What is Covid-Vault?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Covid-Vault is an app that tracks and visualizes data regarding the Covid-19 Pandemic."),r.a.createElement("br",null),r.a.createElement("li",null,"A user is able to view data regarding active covid-19 cases, recovered cases, and deaths, by country."),r.a.createElement("br",null),r.a.createElement("li",null,"The tracker shows data in a worldwide map view."),r.a.createElement("br",null),r.a.createElement("li",null,"The graph displays data in a table, listing countries and how many total live cases they have, from greatest to least."),r.a.createElement("br",null),r.a.createElement("li",null,"The graph also shows a line graph with data regarding the additional new active cases, recovered cases, or deaths per day, over the past 120 days."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"As a student in Flatiron's fulltime immersive software engineering program, I had a lot of fun building this project. I always had an idea about this since day 1 and it feels great to see it come to fruition."))))},E=a(21),b=a.n(E),g=a(35),y=a(14),j=a(254),w=a(255),O=a(256),x=(a(122),a(2)),N=(a(123),a(248)),C=a(252),k=a(253);var S=function(e){var t=e.title,a=e.cases,n=e.active,c=e.total,l=Object(x.a)(e,["title","cases","active","total"]);return r.a.createElement(N.a,{className:"infoBox ".concat(n&&"infoBox--selected"),onClick:l.onClick},r.a.createElement(C.a,null,r.a.createElement(k.a,{className:"infoBox_title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox_cases"},a),r.a.createElement(k.a,{className:"infoBox_total",color:"textSecondary"},"Total Cases: ",c)))},D=a(259),_=a(260),I=(a(124),a(23)),A=a(24),T=a.n(A),R=a(257),W=a(258),B={cases:{hex:"#de6b23",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#CC1034",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},J=function(e){var t=Object(I.a)(e);return t.sort((function(e,t){return e.favorite&&t.favorite||!e.favorite&&!t.favorite?t.cases-e.cases:e.favorite?-1:1})),t},M=function(e){return e?"+".concat(T()(e).format("0.0a")):"+0"};var z=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(D.a,{center:n,zoom:c},r.a.createElement(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(R.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:B[t].hex,fillColor:B[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*B[t].multiplier},r.a.createElement(W.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",T()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",T()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",T()(e.deaths).format("0,0")))))}))}(t,a)))};a(125);var F=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("worldwide"),o=Object(y.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)({}),m=Object(y.a)(u,2),d=m[0],f=m[1],v=Object(n.useState)([]),h=Object(y.a)(v,2),p=(h[0],h[1]),E=Object(n.useState)({lat:34.80746,lng:-40.4796}),x=Object(y.a)(E,2),N=x[0],C=x[1],k=Object(n.useState)(4),D=Object(y.a)(k,2),_=D[0],I=(D[1],Object(n.useState)([])),A=Object(y.a)(I,2),T=A[0],R=A[1],W=Object(n.useState)("cases"),B=Object(y.a)(W,2),F=B[0],V=B[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=J(e);p(a),R(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,i(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){i(a),f(e),C("worldwide"===a?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long])}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app_tracker"},r.a.createElement("div",{className:"app_left"},r.a.createElement("div",{className:"app_header"},r.a.createElement("h1",null,"COVID TRACKER"),r.a.createElement(j.a,{className:"app_dropdown"},r.a.createElement(w.a,{variant:"outlined",value:s,onChange:L},r.a.createElement(O.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(O.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app_stats"},r.a.createElement(S,{active:"cases"===F,onClick:function(e){return V("cases")},title:"Active Coronavirus Cases",cases:M(d.todayCases),total:M(d.cases)}),r.a.createElement(S,{active:"recovered"===F,onClick:function(e){return V("recovered")},title:"Recovered",cases:M(d.todayRecovered),total:M(d.recovered)}),r.a.createElement(S,{active:"deaths"===F,onClick:function(e){return V("deaths")},title:"Deaths",cases:M(d.todayDeaths),total:M(d.deaths)})),r.a.createElement(z,{casesType:F,countries:T,center:N,zoom:_})))},V=a(59),L=a(32),P=a(105),Y=a(104),q=(a(126),a(101)),G=a.n(q),K=a(102),$=a.n(K),H=function(e){Object(P.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;return Object(V.a)(this,a),(n=t.call(this,e)).getCountriesData=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){if(e.forEach((function(e){e.favorite=!1})),!localStorage.getItem("favorites")){localStorage.setItem("favorites",JSON.stringify([]))}JSON.parse(localStorage.getItem("favorites")).forEach((function(t){e.forEach((function(e){t===e.country&&(e.favorite=!0)}))}));var t=J(e);n.setState({tableData:t})}));case 2:case"end":return e.stop()}}),e)}))),n.setAsFav=function(e){return function(){var t=JSON.parse(localStorage.getItem("favorites"));t.push(e),localStorage.setItem("favorites",JSON.stringify(t));var a=n.state.tableData;a.forEach((function(t){t.country===e&&(t.favorite=!t.favorite)})),a=J(a),n.setState({tableData:a})}},n.state={tableData:[]},n}return Object(L.a)(a,[{key:"componentDidMount",value:function(){this.getCountriesData()}},{key:"render",value:function(){var e=this,t=this.state.tableData;return r.a.createElement("div",{className:"table"},t.map((function(t){var a=t.country,n=t.cases,c=t.countryInfo,l=t.favorite;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("div",{className:"flag-info"},r.a.createElement("img",{src:c.flag,style:{height:"26px",width:"38px"}}))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("img",{src:l?$.a:G.a,onClick:e.setAsFav(a)}))),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("strong",null,T()(n).format("0,0"))))})))}}]),a}(r.a.Component),Q=a(103),U={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return T()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return T()(e).format("0a")}}}]}},X={cases:{hex:"#de6b23",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#CC1034",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},Z=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var ee=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(x.a)(e,["casesType"]),l=Object(n.useState)({}),o=Object(y.a)(l,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=Z(e,a);i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:c.className},(null===s||void 0===s?void 0:s.length)>0&&r.a.createElement(Q.Line,{data:{datasets:[{backgroundColor:X[a].hex,borderColor:X[a].half_op,data:s}]},options:U}))};function te(){var e=Object(n.useState)({}),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("cases"),o=Object(y.a)(l,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"app_stats"},r.a.createElement(S,{active:"cases"===s,onClick:function(e){return i("cases")},title:"Active Coronavirus Cases",cases:M(a.todayCases),total:M(a.cases)}),r.a.createElement(S,{active:"recovered"===s,onClick:function(e){return i("recovered")},title:"Recovered",cases:M(a.todayRecovered),total:M(a.recovered)}),r.a.createElement(S,{active:"deaths"===s,onClick:function(e){return i("deaths")},title:"Deaths",cases:M(a.todayDeaths),total:M(a.deaths)})),r.a.createElement("div",null,r.a.createElement(N.a,{className:"app_right"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(H,null),r.a.createElement("h3",null,"Worldwide new ",s),r.a.createElement(ee,{className:"app_graph",casesType:s})))))}var ae=a(11);var ne=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(u,null)),r.a.createElement("div",{className:"app"},r.a.createElement(ae.c,null,r.a.createElement(ae.a,{path:"/covid-vault",exact:!0,component:f}),r.a.createElement(ae.a,{path:"/about",component:p}),r.a.createElement(ae.a,{path:"/tracker",component:F}),r.a.createElement(ae.a,{path:"/graph",component:te}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/covid-19.4b69b94a.png"},95:function(e,t,a){e.exports=a.p+"static/media/CovidVault.650b82f2.png"},96:function(e,t,a){e.exports=a.p+"static/media/me.897083e4.jpg"}},[[111,1,2]]]);
//# sourceMappingURL=main.d7369da2.chunk.js.map