(function(e){function t(t){for(var n,i,s=t[0],l=t[1],d=t[2],u=0,g=[];u<s.length;u++)i=s[u],r[i]&&g.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(g.length)g.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hypotheek/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n,r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"berekeningsimulatie"},[a("div",{staticClass:"rij bs"},[a("div",{staticClass:"bs-form"},[e._m(0),e.teBerekenenIsLening?a("BerekeningSimulatieBedrag"):a("BerekeningSimulatieMaand")],1),a("Resultaat")],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bs-form__question__div"},[a("div",{staticClass:"rij bs-form__slider__div"})])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("form",{attrs:{action:""}},[a("div",{staticClass:"bs-form__question__div"},[a("h2",[e._v("Hoeveel wil je per maand afbetalen?")]),a("div",{staticClass:"rij bs-form__input__div"},[a("button",{on:{click:function(t){return t.preventDefault(),e.reduceMonthlyAmount()}}},[e._v("-")]),a("div",[a("label",{attrs:{for:""}},[e._v("EUR")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.bedrag,expression:"bedrag",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.bedrag},on:{click:e.selectAllNumbers,input:function(t){t.target.composing||(e.bedrag=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("button",{on:{click:function(t){return t.preventDefault(),e.increaseMonthlyAmount()}}},[e._v("+")])])]),a("div",{staticClass:"bs-form__question__div"},[a("h2",{attrs:{for:""}},[e._v("Voor een periode van")]),a("div",{staticClass:"rij bs-form__input__div"},[a("button",{on:{click:function(t){return t.preventDefault(),e.reduceYears()}}},[e._v("-")]),a("div",[a("label",{attrs:{for:""}},[e._v("MAAND(EN)")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.jaar,expression:"jaar",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.jaar},on:{click:e.selectAllNumbers,input:function(t){t.target.composing||(e.jaar=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("button",{on:{click:function(t){return t.preventDefault(),e.increaseYears()}}},[e._v("+")])])]),!0===e.mobile?a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#element",expression:"'#element'"}],staticClass:"bs-form__bereken",attrs:{id:"element",type:"submit"},on:{click:function(t){t.preventDefault(),e.calculate(),e.berekeningIsDone(),e.calculateNotarisK(),e.calculateJkp(),e.calculateInterest()}}},[e._v("Berekenen")]):a("button",{staticClass:"bs-form__bereken",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.calculate(),e.berekeningIsDone(),e.calculateNotarisK(),e.calculateJkp(),e.calculateInterest()}}},[e._v("Berekenen")])])])},l=[],d={name:"BerekeningSimulatieMaand",props:{},data:function(){return{mobile:!1}},computed:{berekendTotaalBedrag:function(){return this.$store.state.berekendTotaalBedrag},bedrag:{get:function(){return this.$store.state.maandelijksBedrag},set:function(e){this.$store.commit("updateMaandelijksBedrag",e)}},jaar:{get:function(){return this.$store.state.jaarFull},set:function(e){this.$store.commit("updateYear",e)}}},mounted:function(){var e=this,t=function(t){t.matches?e.mobile=!0:e.mobile=!1},a=window.matchMedia("(max-width: 700px)");t(a),a.addListener(t)},methods:{reduceMonthlyAmount:function(){this.$store.commit("reduceMonthlyAmount")},increaseMonthlyAmount:function(){this.$store.commit("increaseMonthlyAmount")},reduceYears:function(){this.$store.commit("reduceYears"),this.$store.commit("calculateTotaalBedrag"),this.$store.commit("check_te_lenen_bedrag")},increaseYears:function(){this.$store.commit("increaseYears"),this.$store.commit("calculateTotaalBedrag"),this.$store.commit("check_te_lenen_bedrag")},calculate:function(){this.$store.commit("calculateTotaalBedrag")},berekeningIsDone:function(){this.$store.commit("berekeningIsDone")},calculateJkp:function(){this.$store.commit("calculateJkp")},calculateNotarisK:function(){this.$store.commit("calculateNotarisK")},selectAllNumbers:function(e){e.target.select(),e.target.focus()},calculateInterest:function(){this.$store.commit("calculateInterest")}}},c=d,u=a("2877"),g=Object(u["a"])(c,s,l,!1,null,null,null),m=g.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("form",{attrs:{action:""}},[a("div",{staticClass:"selectArea"},[a("label",{staticClass:"loan__title",attrs:{for:"lening"}},[e._v("Wat is het doel van jouw lening?")]),a("v-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("div",{staticClass:"bs-form__question__div"},[a("h2",{staticClass:"loan__title"},[e._v("Voer het bedrag in dat u wilt lenen")]),a("div",{staticClass:"rij bs-form__input__div"},[a("button",{on:{click:function(t){return t.preventDefault(),e.reduceTotalAmount()}}},[e._v("-")]),a("div",[a("label",{attrs:{for:""}},[e._v("EUR")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.bedrag,expression:"bedrag",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.bedrag},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},blur:[e.check,function(t){return e.$forceUpdate()}],click:e.selectAllNumbers,input:function(t){t.target.composing||(e.bedrag=e._n(t.target.value))}}})]),a("button",{on:{click:function(t){return t.preventDefault(),e.increaseTotalAmount()}}},[e._v("+")])])]),a("div",{staticClass:"bs-form__question__div"},[a("h2",{staticClass:"loan__title",attrs:{for:""}},[e._v("Voor een periode van")]),a("div",{staticClass:"rij bs-form__input__div"},[a("button",{on:{click:function(t){return t.preventDefault(),e.reduceYears()}}},[e._v("-")]),a("div",[a("label",{attrs:{for:""}},[e._v("MAANDEN")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.jaar,expression:"jaar",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.jaar},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},blur:[e.check,function(t){return e.$forceUpdate()}],click:e.selectAllNumbers,input:function(t){t.target.composing||(e.jaar=e._n(t.target.value))}}})]),a("button",{on:{click:function(t){return t.preventDefault(),e.increaseYears()}}},[e._v("+")])])]),e.error?a("div",{staticClass:"error_msg"},[e._v("Er is geen simulatie mogelijk voor dit kredietbedrag en aantal maanden. Probeer een ander kredietbedrag / periode.")]):e._e(),a("div",{staticClass:"bereken-container"},[!0===e.mobile?a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#element",expression:"'#element'"}],staticClass:"bs-form__bereken",class:{buttonError:e.error},attrs:{disabled:e.error,id:"element",type:"submit"},on:{click:function(t){t.preventDefault(),e.calculate(),e.showCalculation()}}},[e._v("Berekenen jouw lening")]):a("button",{staticClass:"bs-form__bereken",class:{buttonError:e.error},attrs:{disabled:e.error,type:"submit"},on:{click:function(t){t.preventDefault(),e.calculate(),e.showCalculation()}}},[e._v("Berekenen jouw lening")])])])])},h=[],v={name:"BerekeningSimulatieMaand",props:{},data:function(){return{mobile:!1,options:["gezinsuitgaven","auto","renovatie","vakantie","huwelijk","hergroeperen"]}},computed:{error:function(){return this.$store.state.error},berekendBedragPerMaand:function(){return this.$store.state.berekendBedragPerMaand},selected:{get:function(){return this.$store.state.typeLening},set:function(e){this.$store.commit("updateLening",e),this.$store.commit("check")}},bedrag:{get:function(){return this.$store.state.totaalBedrag},set:function(e){this.$store.commit("updateTotaalBedrag",e)}},jaar:{get:function(){return this.$store.state.jaarMonth},set:function(e){this.$store.commit("updateYear",e)}}},mounted:function(){var e=this,t=function(t){t.matches?e.mobile=!0:e.mobile=!1},a=window.matchMedia("(max-width: 700px)");t(a),a.addListener(t),this.createSelect()},methods:{createSelect:function(){var e,t,a,n,r,o,i;for(e=document.getElementsByClassName("custom-select"),t=0;t<e.length;t++){for(n=e[t].getElementsByTagName("select")[0],r=document.createElement("DIV"),r.setAttribute("class","select-selected"),r.innerHTML=n.options[n.selectedIndex].innerHTML,e[t].appendChild(r),o=document.createElement("DIV"),o.setAttribute("class","select-items select-hide"),a=1;a<n.length;a++)i=document.createElement("DIV"),i.innerHTML=n.options[a].innerHTML,i.addEventListener("click",function(e){var t,a,n,r,o;for(r=this.parentNode.parentNode.getElementsByTagName("select")[0],o=this.parentNode.previousSibling,a=0;a<r.length;a++)if(r.options[a].innerHTML==this.innerHTML){for(r.selectedIndex=a,o.innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),n=0;n<t.length;n++)t[n].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()}),o.appendChild(i);e[t].appendChild(o),r.addEventListener("click",function(e){e.stopPropagation(),closeAllSelect(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}},showCalculation:function(){this.$store.commit("berekeningIsDone")},check:function(){this.calculate()},reduceTotalAmount:function(){this.$store.commit("reduceTotalAmount"),this.calculate()},increaseTotalAmount:function(){this.$store.commit("increaseTotalAmount"),this.calculate()},reduceYears:function(){this.$store.commit("reduceYears"),this.calculate()},increaseYears:function(){this.$store.commit("increaseYears"),this.calculate()},calculate:function(){this.$store.commit("check"),this.$store.commit("calculateRente"),this.$store.commit("calculatePerMonth"),this.$store.commit("calculateInterestMaand")},selectAllNumbers:function(e){e.target.select(),e.target.focus()}}},f=v,_=Object(u["a"])(f,p,h,!1,null,null,null),b=_.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bs-uitkomst",class:{"bs-uitkomst--active":e.isBerekeningDone}},[e.isBerekeningDone?e._e():a("div",[a("svg",{staticClass:"loan__svg",attrs:{width:"104px",height:"98px",viewBox:"0 0 104 98",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("title",[e._v("Group 14")]),a("desc",[e._v("Created with Sketch.")]),a("g",{attrs:{id:"Desktop",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"01a-Home",transform:"translate(-969.000000, -729.000000)",stroke:"#222222"}},[a("g",{attrs:{id:"Keuze",transform:"translate(136.000000, 648.000000)"}},[a("g",{staticClass:"svg-stroke",attrs:{id:"Lening-button",transform:"translate(600.000000, 0.000000)"}},[a("g",{attrs:{id:"Group-14",transform:"translate(233.000000, 83.000000)"}},[a("g",{attrs:{id:"Group-11","stroke-width":"2.5"}},[a("polyline",{attrs:{id:"Stroke-1","stroke-linejoin":"round",points:"59.8695652 89.9898453 59.8695652 26.3384913 77.6086957 26.3384913 77.6086957 41.7026112"}}),a("polyline",{attrs:{id:"Stroke-3","stroke-linejoin":"round",points:"33.2608696 89.9898453 33.2608696 0 51 0 51 89.9898453"}}),a("polyline",{attrs:{id:"Stroke-5","stroke-linejoin":"round",points:"6.65217391 89.9898453 6.65217391 43.8974855 24.3913043 43.8974855 24.3913043 89.9898453"}}),a("path",{attrs:{d:"M0,94.3795938 L99.7826087,94.3795938",id:"Stroke-7","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M66.2554304,48.8616326 C69.6458217,47.092564 73.5085174,46.0917013 77.6084739,46.0917013 C91.0791261,46.0917013 101.999778,56.9014571 101.999778,70.2353183 C101.999778,77.6474088 98.6271261,84.2803188 93.3142565,88.7073802",id:"Stroke-9"}})]),a("path",{staticClass:"svg-fill",attrs:{d:"M77.9664357,80.7708073 C80.8764957,80.7708073 84.0670856,79.3443972 85.4916055,75.4690873 C85.8280256,74.6350573 85.5380455,74.0478073 84.9318956,73.9306274 L84.6829555,73.8766286 C84.1186557,73.7667384 83.7789957,74.0046083 83.5632655,74.5629681 C82.6223153,77.246768 80.5959653,78.705578 77.9664353,78.705578 C74.3146853,78.705578 71.9232951,76.0987279 71.6505949,71.575148 L77.0292651,71.575148 C77.655665,71.575148 77.9664349,71.201738 77.9664349,70.6150281 C77.9664349,69.995648 77.655665,69.6692181 77.0292651,69.6692181 L71.6611249,69.6692181 C71.9848551,65.295488 74.4170151,62.7067279 77.9664353,62.7067279 C80.5419653,62.7067279 82.5556253,64.0718478 83.4968453,66.6913879 C83.6982655,67.252178 84.0792355,67.4587279 84.6432655,67.3485678 L84.9048956,67.2945678 C85.5140155,67.1760378 85.7913056,66.7367477 85.5785455,66.1354576 C84.1704957,62.1259576 80.9615455,60.6558077 77.9664357,60.6558077 C73.8616257,60.6558077 69.8915459,63.4211476 69.5030159,69.6692177 L69.0718259,69.6692177 C68.4691857,69.6692177 68.1346557,69.9956476 68.1346557,70.6150277 C68.1346557,71.2017376 68.4705358,71.5751476 69.0718259,71.5751476 L69.4943757,71.5751476 C69.8267457,78.0629775 73.8281456,80.7708073 77.9664357,80.7708073 Z",id:"€","stroke-width":"0.5",fill:"#222222","fill-rule":"nonzero"}})])])])])])]),a("p",{staticClass:"loan__text"},[e._v("Vul de simulator in en bereken jouw lening.\n      Am volutpat malesuada nisi ullamcorper pulvinar. Nam rhoncus ultrices risus.")])]),e.isBerekeningDone&&!1===e.showJkpInfo?a("BerekeningResultaat"):e.isBerekeningDone?a("Legal"):e._e()],1)},B=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[!0===e.isBerekeningDone&&!0===e.teBerekenenIsLening?a("div",["0,00"!==e.berekendTotaalBedrag?a("div",{staticClass:"bs-uitkomst__resultaat"},[a("p",[e._v("Je kan op "),a("span",{staticClass:"bs-uitkomst__resultaat-color"},[e._v(e._s(e.jaarFull)+" maand(en)")]),e._v(" een lening aangaan van")]),a("div",{staticClass:"bs-uitkomst__resultaat__bedrag__wrap"},[a("p",{staticClass:"bs-uitkomst__resultaat__bedrag"},[e._v(e._s(e.berekendTotaalBedrag))]),a("p",{staticClass:"bs-uitkomst__resultaat__eur"},[e._v("EUR")])])]):e._e(),a("form",{attrs:{action:"https://www.hypotheek.be/nl/uw-lening-aanvragen",method:"get"}},[a("input",{staticClass:"hidden",attrs:{type:"text",name:"amount"},domProps:{value:!0===e.teBerekenenIsLening?e.berekendTotaalBedragCijfers:e.totaalBedrag}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"duration"},domProps:{value:!0===e.teBerekenenIsLening?e.jaarFull:e.jaarMonth}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"taeg"},domProps:{value:!0===e.teBerekenenIsLening?e.jkpFull:e.jkpMonthCijfer}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"monthlyrepayment"},domProps:{value:!0===e.teBerekenenIsLening?e.maandelijksBedrag:e.berekendBedragPerMaand}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"repayment"},domProps:{value:!0===e.teBerekenenIsLening?e.totaalbedragInterest:e.totaalbedragInterestMaand}}),a("input",{staticClass:"hidden",attrs:{type:"text",value:"lening-op-afbetaling",name:"krediet-type"}}),a("button",{staticClass:"bs-uitkomst__aanvragen btn-simulator",attrs:{type:"submit"}},[e._v("Lening aanvragen")])]),a("form",{staticClass:"form__extra",attrs:{action:"https://www.hypotheek.be/nl/contactformulier-consument/een-afspraak-maken",method:"get"}},[a("input",{staticClass:"hidden",attrs:{type:"text",name:"bedrag"},domProps:{value:e.berekendTotaalBedrag}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"periode"},domProps:{value:e.jaarFull}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"simulator"},domProps:{value:!0}}),a("input",{staticClass:"hidden",attrs:{type:"text",value:"lening-op-afbetaling",name:"krediet-type"}}),a("button",{staticClass:"bs-uitkomst__aanvragen submit__formulier",attrs:{type:"submit"}},[e._v("Of vraag een gepersonaliseerde simulatie")])])]):e.isBerekeningDone?a("div",["0,00"!==e.berekendBedragPerMaand?a("div",{staticClass:"bs-uitkomst__resultaat"},[a("p",[e._v("Maandelijks te betalen bedrag over een periode van "),a("span",{staticClass:"bs-uitkomst__resultaat-color"},[e._v(e._s(e.jaarMonth)+" maand(en)")])]),a("div",{staticClass:"bs-uitkomst__resultaat__bedrag__wrap"},[a("p",{staticClass:"bs-uitkomst__resultaat__bedrag"},[e._v(e._s(e.berekendBedragPerMaandLocal))]),a("p",{staticClass:"bs-uitkomst__resultaat__eur"},[e._v("EUR")])])]):e._e(),a("form",{attrs:{action:"https://www.hypotheek.be/nl/uw-lening-aanvragen",method:"get"}},[a("input",{staticClass:"hidden",attrs:{type:"text",name:"amount"},domProps:{value:!0===e.teBerekenenIsLening?e.berekendTotaalBedragCijfers:e.totaalBedrag}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"duration"},domProps:{value:!0===e.teBerekenenIsLening?e.jaarFull:e.jaarMonth}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"taeg"},domProps:{value:!0===e.teBerekenenIsLening?e.jkpFull:e.jkpMonthCijfer}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"monthlyrepayment"},domProps:{value:!0===e.teBerekenenIsLening?e.maandelijksBedrag:e.berekendBedragPerMaand}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"repayment"},domProps:{value:!0===e.teBerekenenIsLening?e.totaalbedragInterest:e.totaalbedragInterestMaand}}),a("input",{staticClass:"hidden",attrs:{type:"text",value:"lening-op-afbetaling",name:"krediet-type"}}),a("button",{staticClass:"bs-uitkomst__aanvragen btn-simulator",attrs:{type:"submit"}},[e._v("Lening aanvragen")])]),a("form",{staticClass:"form__extra",attrs:{action:"https://www.hypotheek.be/nl/contactformulier-consument/een-afspraak-maken",method:"get"}},[a("input",{staticClass:"hidden",attrs:{type:"text",name:"bedrag"},domProps:{value:e.totaalBedrag}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"periode"},domProps:{value:e.jaarMonth}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"simulator"},domProps:{value:!0}}),a("input",{staticClass:"hidden",attrs:{type:"text",name:"lalalaa"},domProps:{value:!0}}),a("input",{staticClass:"hidden",attrs:{type:"text",value:"lening-op-afbetaling",name:"krediet-type"}}),a("button",{staticClass:"bs-uitkomst__aanvragen submit__formulier",attrs:{type:"submit"}},[e._v("Of vraag een gepersonaliseerde simulatie")])])]):e._e(),e.isBerekeningDone?a("div",{staticClass:"bs-uitkomst__uitleg"},[a("p",[e._v("\n    \n      Dit is een simulatie, geen kredietaanbod, voor een lening op afbetaling met een JKP (jaarlijks kostenpercentage) van "+e._s(e.rente)+"% (vaste jaarlijkse debetrente van "+e._s(e.rente)+"%).\n    ")])]):e._e(),a("a",{staticClass:"bs-uitkomst__jkp__info",on:{click:e.toggleJkpInfo}},[e._v("Detail van je lening")])])},M=[],C={name:"BerekeningResultaat",computed:{berekendTotaalBedrag:function(){var e=this.$store.state.berekendTotaalBedrag;return e.toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})},berekendTotaalBedragCijfers:function(){var e=this.$store.state.berekendTotaalBedrag;return e},berekendBedragPerMaand:function(){var e=this.$store.state.berekendBedragPerMaand;return e.toFixed(2)},berekendBedragPerMaandLocal:function(){var e=this.$store.state.berekendBedragPerMaand;return e.toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})},totaalBedrag:function(){return this.$store.state.totaalBedrag},jaarFull:function(){return this.$store.state.jaarFull},jaarMonth:function(){return this.$store.state.jaarMonth},teBerekenenIsLening:function(){return this.$store.state.teBerekenenIsLening},isBerekeningDone:function(){return this.$store.state.isBerekeningDone},jkpFull:function(){var e=this.$store.state.jkpFull;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e},jkpMonth:function(){var e=this.$store.state.jkpMonth;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e},jkpMonthCijfer:function(){var e=this.$store.state.jkpMonth;return e*=100,e.toFixed(2)},rente:function(){var e=this.$store.state.rente;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e},maandelijksBedrag:function(){return this.$store.state.maandelijksBedrag},test:function(){return this.$store.state.test},totaalbedragInterest:function(){var e=this.$store.state.interest,t=this.$store.state.berekendTotaalBedrag,a=e+t;return a.toFixed(2)},totaalbedragInterestMaand:function(){var e=this.$store.state.interestMaand,t=this.$store.state.totaalBedrag,a=e+t;return a.toFixed(2)}},methods:{toggleJkpInfo:function(){this.$store.commit("toggleJkpInfo",!0)}}},y=C,x=Object(u["a"])(y,j,M,!1,null,null,null),$=x.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"simulation-legal"},[a("div",[a("div",[a("h2",[e._v("Detail van je lening")]),a("div",{staticClass:"loan-detail__container flex"},[a("div",{staticClass:"loan-detail__item loan-detail__color  loan-detail__title"},[e._v("\n          Kredietbedrag\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__color loan-detail__value"},[e._v("\n          "+e._s(e.totaalBedrag)+" €\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          Looptijd van de lening\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          "+e._s(e.jaarMonth)+" maand(en)\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__color loan-detail__title"},[e._v("\n          Mensualiteit\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__color loan-detail__title"},[e._v("\n          "+e._s(e.berekendBedragPerMaand)+" €\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          Debetrentevoet\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          "+e._s(e.rente)+"%\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__color loan-detail__title"},[e._v("\n          JKP\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__color loan-detail__title"},[e._v("\n          "+e._s(e.rente)+"%\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          Totaal terug te betalen\n        ")]),a("div",{staticClass:"loan-detail__item loan-detail__title"},[e._v("\n          "+e._s(e.totaalbedragInterestMaand)+" €\n        ")])]),a("p"),a("ul"),a("p",[e._v("\n        Deze berekening houdt geen rekening met de premie voor een schuldsaldoverzekering. We weten niet of je zo een verzekering wenst af te sluiten en hoe je die wenst te betalen. Onze medewerker zal nog ene grondige analyse doorvoeren.\n        Deze simulatie is louter indicatief en engageert ons tot niets.\n        ")])]),e._m(0)]),a("div",{staticClass:"simulation-legal__exit"},[a("button",{staticClass:"bs-form__bereken",on:{click:e.toggleJkpInfo}},[e._v("x")])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Representatief voorbeeld:")]),a("p",[e._v("\n        Lening op afbetaling voor gezinsuitgaven van 8.000 €, jaarlijks kostenpercentage (JKP) van 9,40% (vaste jaarlijkse debetrente : 9,40%)."),a("br"),e._v("\n        Maandelijkse afbetaling van 199,14 €/maand in 48 maanden. Totaal te betalen bedrag 9.558,72 €. JKP geldig op 01/12/2019. \n        Dit voorbeeld houdt geen rekening met bijkomende kosten voor de betaling van een premie schuldsaldoverzekering.\n\n        ")])])}],I=a("bd86"),D={name:"Legal",computed:(n={berekendBedragPerMaand:function(){var e=this.$store.state.berekendBedragPerMaand;return e.toFixed(2)},totaalBedrag:function(){return this.$store.state.totaalBedrag},berekendTotaalBedrag:function(){var e=this.$store.state.berekendTotaalBedrag;return e.toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})}},Object(I["a"])(n,"totaalBedrag",function(){var e=this.$store.state.totaalBedrag;return e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"notariskosten",function(){var e=this.$store.state.notariskosten;return e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"jaarFull",function(){return this.$store.state.jaarFull}),Object(I["a"])(n,"jaarMonth",function(){return this.$store.state.jaarMonth}),Object(I["a"])(n,"teBerekenenIsLening",function(){return this.$store.state.teBerekenenIsLening}),Object(I["a"])(n,"jkpFull",function(){var e=this.$store.state.jkpFull;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"jkpMonth",function(){var e=this.$store.state.jkpMonth;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"rente",function(){var e=this.$store.state.rente;return e*=100,e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"interest",function(){var e=this.$store.state.interest;return e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"interestMaand",function(){var e=this.$store.state.interestMaand;return e=e.toLocaleString("nl-BE",{maximumFractionDigits:2}),e}),Object(I["a"])(n,"totaalbedragInterest",function(){var e=this.$store.state.interest,t=this.$store.state.berekendTotaalBedrag,a=e+t;return a=a.toLocaleString("nl-BE",{maximumFractionDigits:2}),a}),Object(I["a"])(n,"totaalbedragInterestMaand",function(){var e=this.$store.state.interestMaand,t=this.$store.state.totaalBedrag;console.log("interest = ".interest);var a=e+t;return a=a.toLocaleString("nl-BE",{maximumFractionDigits:2}),a}),n),methods:{toggleJkpInfo:function(){this.$store.commit("toggleJkpInfo",!1)}}},P=D,T=Object(u["a"])(P,L,w,!1,null,null,null),F=T.exports,E={name:"Resultaat",components:{BerekeningResultaat:$,Legal:F},computed:{showJkpInfo:function(){return this.$store.state.showJkpInfo},isBerekeningDone:function(){return this.$store.state.isBerekeningDone}},methods:{}},S=E,O=Object(u["a"])(S,k,B,!1,null,null,null),A=O.exports,N={name:"app",components:{BerekeningSimulatieBedrag:m,BerekeningSimulatieMaand:b,Resultaat:A},computed:{teBerekenenIsLening:function(){return this.$store.state.teBerekenenIsLening}},methods:{changeTab:function(e){this.$store.commit("changeTab",e)},berekeningIsDone:function(){this.$store.commit("berekeningIsDone")}}},J=N,Y=(a("5c0b"),Object(u["a"])(J,o,i,!1,null,null,null)),z=Y.exports,R=a("2f62");r["a"].use(R["a"]);var K=new R["a"].Store({state:{message:"hello",totaalBedrag:12500,maandelijksBedrag:750,jaarFull:20,jaarMonth:60,jkpFull:0,jkpMonth:0,rente:.0215,minBedrag:1500,maxBedrag:75e3,typeLening:"gezinsuitgaven",berekendBedragPerMaand:0,berekendTotaalBedrag:0,teBerekenenIsLening:!1,isBerekeningDone:!1,showJkpInfo:!1,notariskosten:0,interest:0,interestMaand:0,error:!1,periode:{gezinsuitgaven:[24,30,36,42,48,60,72,84,96,120],huwelijk:[24,30,36,42,48,60,72,84,96,120],vakantie:[24,30,36,42,48,60,72,84,96,120],hergroeperen:[24,30,36,42,48,60,72,84,96,120],renovatie:[24,30,36,42,48,60,72,84,96,120],auto:[24,30,36,42,48,60]}},mutations:{check:function(e){var t=e.jaarMonth,a=e.periode[e.typeLening].reduce(function(e,a){return Math.abs(a-t)<Math.abs(e-t)?a:e});return e.jaarMonth=a,e.totaalBedrag<e.minBedrag&&(e.totaalBedrag=e.minBedrag),e.totaalBedrag>e.maxBedrag&&(e.totaalBedrag=e.maxBedrag),e.totaalBedrag>=1500&&e.totaalBedrag<=2500&&e.jaarMonth>24?(e.error=!0,console.log("Maximale afbetalingsperiode is 36 maanden")):e.totaalBedrag>=2501&&e.totaalBedrag<=3701&&e.jaarMonth>30?(e.error=!0,console.log("Maximale afbetalingsperiode is 36 maanden")):e.totaalBedrag>=3701&&e.totaalBedrag<=5600&&e.jaarMonth>36?(e.error=!0,console.log("Maximale afbetalingsperiode is 36 maanden")):e.totaalBedrag>=5601&&e.totaalBedrag<=7500&&e.jaarMonth>42?(e.error=!0,console.log("Maximale afbetalingsperiode is 42 maanden")):e.totaalBedrag>=7501&&e.totaalBedrag<=1e4&&e.jaarMonth>48?(e.error=!0,console.log("Maximale afbetalingsperiode is 48 maanden")):e.totaalBedrag>=10001&&e.totaalBedrag<=15e3&&e.jaarMonth>60?(e.error=!0,console.log("Maximale afbetalingsperiode is 60 maanden")):e.totaalBedrag>=15001&&e.totaalBedrag<=2e4&&e.jaarMonth>84?(e.error=!0,console.log("Maximale afbetalingsperiode is 84 maanden")):e.totaalBedrag>=200001&&e.totaalBedrag<=37e3&&e.jaarMonth>120?(e.error=!0,console.log("Maximale afbetalingsperiode is 120 maanden")):e.totaalBedrag>=37e3&&e.jaarMonth>240?(e.error=!0,console.log("Maximale afbetalingsperiode is 240 maanden")):e.error=!1,e.error},updateMessage:function(e,t){e.message=t},updateYear:function(e,t){!0===e.teBerekenenIsLening?e.jaarFull=t:e.jaarMonth=t},updateTotaalBedrag:function(e,t){e.totaalBedrag=t},updateLening:function(e,t){e.typeLening,e.minBedrag=2500,e.typeLening=t,e.totaalBedrag=12500,e.jaarMonth=60},reduceTotalAmount:function(e){e.totaalBedrag-=1e3},increaseTotalAmount:function(e){e.totaalBedrag+=1e3},updateMaandelijksBedrag:function(e,t){e.maandelijksBedrag=t},reduceMonthlyAmount:function(e){e.maandelijksBedrag>50?e.maandelijksBedrag-=50:e.maandelijksBedrag},increaseMonthlyAmount:function(e){e.maandelijksBedrag+=50},reduceYears:function(e){var t=e.jaarMonth,a=e.periode[e.typeLening].reduce(function(e,a){return Math.abs(a-t)<Math.abs(e-t)?a:e}),n=e.periode[e.typeLening].indexOf(a);n=n-=1,e.jaarMonth=e.periode[e.typeLening][n]},increaseYears:function(e){var t=e.jaarMonth,a=e.periode[e.typeLening].reduce(function(e,a){return Math.abs(a-t)<Math.abs(e-t)?a:e}),n=e.periode[e.typeLening].indexOf(a);n=n==e.periode[e.typeLening].length-1?n:n+=1,e.jaarMonth=e.periode[e.typeLening][n],console.log(n)},calculateFirst:function(e){e.jaar+=5},calculateRente:function(e){e.typeLening,console.log("Gezinsuitgaven"),e.totaalBedrag>1500&&e.totaalBedrag<=5e3&&24==e.jaarMonth&&(e.rente=.125),e.totaalBedrag>5e3&&e.totaalBedrag<=75e3&&24==e.jaarMonth&&(e.rente=.0999),e.totaalBedrag>2500&&e.totaalBedrag<=5e3&&30==e.jaarMonth&&(e.rente=.125),e.totaalBedrag>5e3&&e.totaalBedrag<=75e3&&30==e.jaarMonth&&(e.rente=.0999),e.totaalBedrag>3700&&e.totaalBedrag<=5e3&&36==e.jaarMonth&&(e.rente=.125),e.totaalBedrag>5e3&&e.totaalBedrag<=75e3&&36==e.jaarMonth&&(e.rente=.0999),e.totaalBedrag>5600&&e.totaalBedrag<=75e3&&42==e.jaarMonth&&(e.rente=.0999),e.totaalBedrag>7500&&e.totaalBedrag<=75e3&&48==e.jaarMonth&&(e.rente=.0745),e.totaalBedrag>1e4&&e.totaalBedrag<=75e3&&60==e.jaarMonth&&(e.rente=.0745,console.log("> 10000 60 maand --- gezinsuitgaven")),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&72==e.jaarMonth&&(e.rente=.0745),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&84==e.jaarMonth&&(e.rente=.0745),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&96==e.jaarMonth&&(e.rente=.0745),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&120==e.jaarMonth&&(e.rente=.0745),"auto"===e.typeLening&&(console.log("auto"),e.totaalBedrag>=2500&&e.totaalBedrag<=75e3&&24==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>2500&&e.totaalBedrag<=75e3&&30==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>3700&&e.totaalBedrag<=75e3&&36==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>5600&&e.totaalBedrag<=75e3&&42==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>7500&&e.totaalBedrag<=75e3&&48==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>1e4&&e.totaalBedrag<=75e3&&54==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>1e4&&e.totaalBedrag<=75e3&&60==e.jaarMonth&&(e.rente=.0239),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&72==e.jaarMonth&&(e.rente=.0289),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&84==e.jaarMonth&&(e.rente=.0289)),"renovatie"===e.typeLening&&(console.log("renovatie"),e.totaalBedrag>=2500&&e.totaalBedrag<=75e3&&24==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>2500&&e.totaalBedrag<=75e3&&30==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>3700&&e.totaalBedrag<=75e3&&36==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>5600&&e.totaalBedrag<=75e3&&42==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>7500&&e.totaalBedrag<=75e3&&48==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>1e4&&e.totaalBedrag<=75e3&&60==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&72==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&84==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&96==e.jaarMonth&&(e.rente=.0225),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&120==e.jaarMonth&&(e.rente=.0225)),"hergroeperen"===e.typeLening&&(console.log("hergroeperen"),e.totaalBedrag>1500&&e.totaalBedrag<=5e3&&24==e.jaarMonth&&(e.interest=.125),e.totaalBedrag>5e3&&e.totaalBedrag<=75e3&&24==e.jaarMonth&&(e.interest=.0999),e.totaalBedrag>2500&&e.totaalBedrag<=5e3&&30==e.jaarMonth&&(e.interest=.125),e.totaalBedrag>7500&&e.totaalBedrag<=75e3&&30==e.jaarMonth&&(e.interest=.0999),e.totaalBedrag>3700&&e.totaalBedrag<=5e3&&36==e.jaarMonth&&(e.interest=.125),e.totaalBedrag>5e3&&e.totaalBedrag<=75e3&&36==e.jaarMonth&&(e.interest=.0999),e.totaalBedrag>5600&&e.totaalBedrag<=75e3&&42==e.jaarMonth&&(e.interest=.0999),e.totaalBedrag>7500&&e.totaalBedrag<=75e3&&48==e.jaarMonth&&(e.interest=.0895),e.totaalBedrag>1e4&&e.totaalBedrag<=75e3&&60==e.jaarMonth&&(e.interest=.0895,console.log("> 10000 60 maand --- hergroeperen"),console.log(e.interest)),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&72==e.jaarMonth&&(e.interest=.0895),e.totaalBedrag>15e3&&e.totaalBedrag<=75e3&&84==e.jaarMonth&&(e.interest=.0895),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&96==e.jaarMonth&&(e.interest=.0895),e.totaalBedrag>2e4&&e.totaalBedrag<=75e3&&120==e.jaarMonth&&(e.interest=.0895)),console.log(e.rente)},calculatePerMonth:function(e){var t=e.jaarMonth,a=e.rente+1;a=Math.pow(a,1/12),a-=1;var n=1+a;n=Math.pow(n,-t),n=a/(1-n),n=e.totaalBedrag*n,e.berekendBedragPerMaand=n},calculateTotaalBedrag:function(e){var t=e.jaarFull,a=e.rente+1;a=Math.pow(a,1/12),a-=1;var n=e.maandelijksBedrag,r=n*(1-Math.pow(1+a,-t))/a;e.berekendTotaalBedrag=r},calculateJkp:function(e){var t=0,a=0;t=!0===e.teBerekenenIsLening?e.maandelijksBedrag:e.berekendBedragPerMaand,a=!0===e.teBerekenenIsLening?e.berekendTotaalBedrag:e.totaalBedrag;var n=0;n=!0===e.teBerekenenIsLening?e.jaarFull:e.jaarMonth;var r=n,o=500,i=250,s=e.notariskosten,l=o+i+s,d=1.3,c=1,u=1e-10,g=0;while(Math.abs(c)>u){for(var m=0,p=1;p<=r;p++)m+=Math.pow(d,p);m-=(a-l)/t;for(var h=0,v=1;v<=r;v++)h+=v*Math.pow(d,v-1);c=m/h,d-=c}g=Math.pow(d,-12)-1;var f=g;!0===e.teBerekenenIsLening?e.jkpFull=f:e.jkpMonth=f},calculateNotarisK:function(e){var t=0;t=!0===e.teBerekenenIsLening?e.berekendTotaalBedrag:e.totaalBedrag;var a=1.1*t,n=.01*a,r=.003*a,o=555;o=a>=3e5?900:210;var i=1370.5,s=n+r+o+i;e.notariskosten=s},changeTab:function(e,t){e.teBerekenenIsLening=t},berekeningIsDone:function(e){!0===e.error?(e.isBerekeningDone=!1,console.log("er is een error")):(e.isBerekeningDone=!0,console.log("geen error"))},toggleJkpInfo:function(e,t){e.showJkpInfo=t},calculateInterest:function(e){e.interest=0;var t=e.berekendTotaalBedrag,a=12*e.jaarFull;console.log("periodeInMaanden ".concat(a));var n=e.rente+1;n=Math.pow(n,1/12),n-=1;for(var r=e.maandelijksBedrag,o=0;o<=a;o++){var i=t*n,s=r-i;t-=s,e.interest=e.interest+i}},calculateInterestMaand:function(e){e.interestMaand=0;var t=e.totaalBedrag,a=e.jaarMonth;console.log("periodeInMaanden ".concat(a));var n=e.rente+1;n=Math.pow(n,1/12),n-=1;for(var r=e.berekendBedragPerMaand,o=0;o<=a;o++){var i=t*n,s=r-i;t-=s,e.interestMaand=e.interestMaand+i}}}}),H=a("f13c"),U=a.n(H),V=a("4a7a"),q=a.n(V);a("6dfc");r["a"].component("v-select",q.a),r["a"].use(U.a),r["a"].use(U.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),r["a"].config.productionTip=!1,new r["a"]({store:K,render:function(e){return e(z)}}).$mount("#simuleer_hypothecair_krediet")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){}});
//# sourceMappingURL=app.js.map