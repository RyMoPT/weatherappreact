(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},15:function(e,a,t){},16:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),i=t.n(r),o=(t(15),t(6)),s=(t(16),t(8),t(4)),l=t(2),m="576c98edd5621b7fe8cacfa5506e9654",d="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),h=u[0],p=u[1];return c.a.createElement("div",{className:"undefined"!=typeof h.main?"Clouds"===h.weather[0].main?"app clouds":"Rain"===h.weather[0].main?"app rain":"Thunderstorm"===h.weather[0].main?"app thunderstorm":"Clear"===h.weather[0].main?"app":"Mist"===h.weather[0].main?"app mist":"Haze"===h.weather[0].main?"app haze":"Snow"===h.weather[0].main?"app snow":"app":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"searchBox"},c.a.createElement("input",{type:"search",id:"searchbarplz",className:"searchBar",placeholder:"Location?",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(t,"&units=metric&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){p(e),r(""),console.log(e)}))}})),"undefined"!=typeof h.main?c.a.createElement("div",{className:"locationBox"},c.a.createElement("div",{className:"location"},h.name,", ",h.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c," ")}(new Date)),c.a.createElement("div",{className:"weatherBox"},c.a.createElement("div",{className:"temp"},Math.round(h.main.temp),"\xb0C"),c.a.createElement("div",{className:"feelsLike"},"Feels like ",Math.round(h.main.feels_like),"\xb0C"),c.a.createElement("div",{className:"additionalStats"},c.a.createElement("div",{className:"wind"},c.a.createElement(s.a,{icon:l.b,size:"2x"}),c.a.createElement("div",{className:"windValue"},h.wind.speed,"km/h")),c.a.createElement("div",{className:"humidity"},c.a.createElement(s.a,{icon:l.a,size:"2x"}),c.a.createElement("div",{className:"humidityValue"}),h.main.humidity,"%")),c.a.createElement("div",{className:"weather"},h.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.efdbdad1.chunk.js.map