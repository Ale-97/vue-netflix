(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],g=0,f=[];g<o.length;g++)s=o[g],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0183":function(t,e,n){t.exports=n.p+"img/Netflix.5b57d7e0.png"},"15ea":function(t,e,n){},2176:function(t,e,n){t.exports=n.p+"img/fr.86ede2d0.png"},"229c":function(t,e,n){t.exports=n.p+"img/su.59b789e3.png"},2559:function(t,e,n){t.exports=n.p+"img/es.47f1c5c3.png"},"2c0b":function(t,e,n){t.exports=n.p+"img/ko.47c16d06.png"},3883:function(t,e,n){},"4f90":function(t,e,n){t.exports=n.p+"img/hu.605c88ae.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b"),n("15f5");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Header",{staticClass:"row",on:{search:t.query}}),n("Main",{staticClass:"row",attrs:{FilmList:t.filmList,TVList:t.TVList}})],1)])},r=[],s=(n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("bc3a")),o=n.n(s),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header d-flex align-items-center justify-content-between"},[t._m(0),n("div",{staticClass:"col-3 d-flex align-items-center justify-content-end"},[n("div",{staticClass:"d-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{type:"text",placeholder:"Cerca"},domProps:{value:t.searchString},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search",t.searchString)},input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),n("button",{on:{click:function(e){return t.$emit("search",t.searchString)}}},[n("i",{staticClass:"fas fa-search"})])]),n("div",[t._v("BAMBINI")]),n("i",{staticClass:"fas fa-bell"}),t._m(1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col d-flex align-items-center"},[a("img",{attrs:{src:n("0183"),alt:""}}),a("ul",{staticClass:"d-flex"},[a("li",[a("a",{attrs:{href:""}},[t._v("Home")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Serie TV")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Film")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Originali")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Aggiunti di recente")])]),a("li",[a("a",{attrs:{href:""}},[t._v("La mia lista")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex"},[a("img",{attrs:{src:n("7b04"),alt:""}}),a("i",{staticClass:"fas fa-sort-down"})])}],u={name:"Header",data:function(){return{searchString:""}}},g=u,f=(n("8935"),n("2877")),d=Object(f["a"])(g,c,l,!1,null,"3899bc20",null),p=d.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Main"},[t._m(0),n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},t._l(t.FilmList,(function(t){return n("Card",{key:t.id,staticClass:"col-2",attrs:{backgroundImage:t.poster_path,title:t.title,originalTitle:t.original_title,language:t.original_language,vote:t.vote_average}})})),1)]),t._m(1),n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},t._l(t.TVList,(function(t){return n("Card",{key:t.id,staticClass:"col-2",attrs:{backgroundImage:t.poster_path,title:t.name,originalTitle:t.original_name,language:t.original_language,vote:t.vote_average}})})),1)])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("h3",[t._v("ORIGINALI NETFLIX")]),n("h5",[t._v("Film")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("h5",[t._v("Serie TV")])])}],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=this.backgroundImage?n("div",{staticClass:"Card"},[n("div",{staticClass:"container-card"},[n("img",{attrs:{src:t.IMG,alt:"not found"}}),n("div",{staticClass:"contentCard"},[this.title!==this.originalTitle?n("div",[n("div",[t._v(t._s(this.title))]),n("div",[t._v(t._s(this.originalTitle))])]):n("div",[n("div",[t._v(t._s(this.title))])]),n("img",{staticClass:"flag",attrs:{src:t.flag(this.language),alt:""}}),n("div",{staticClass:"d-flex"},t._l(this.numberStar,(function(e){return n("div",{key:e.id},[t.star()>=e?n("i",{staticClass:"fas fa-star star"}):n("i",{staticClass:"fas fa-star"})])})),0)])])]):t._e()},m=[],C=(n("a9e3"),{name:"Card",data:function(){return{IMG:"http://image.tmdb.org/t/p/w500/"+this.backgroundImage,icon:"",numberStar:[1,2,3,4,5]}},props:{backgroundImage:String,title:String,originalTitle:String,language:String,vote:Number},methods:{star:function(){var t=this.vote/2;return this.icon=Math.ceil(t),this.icon},flag:function(t){return n("61f4")("./"+t+".png")}}}),b=C,B=(n("c122"),Object(f["a"])(b,v,m,!1,null,"673461fd",null)),Q=B.exports,E={name:"Main",components:{Card:Q},props:{FilmList:Array,TVList:Array}},y=E,K=(n("69fc"),Object(f["a"])(y,A,h,!1,null,"befb1de0",null)),S=K.exports,F={name:"App",components:{Header:p,Main:S},data:function(){return{filmList:[],TVList:[],querySearch:""}},created:function(){this.query("")},methods:{query:function(t){var e=this;if(t.length>0){var n=t.split(" ").filter((function(t){return t}));if(this.querySearch=n[0],n.length>1)for(var a=1;a<n.length;a++)this.querySearch+="%2B"+n[a];o.a.get("https://api.themoviedb.org/3/search/movie?api_key=f3e38786a7566bd6e81d253fd6cbc4b4&language=en-US&query="+this.querySearch+"&page=1&include_adult=false").then((function(t){e.filmList=t.data.results})),o.a.get("https://api.themoviedb.org/3/search/tv?api_key=f3e38786a7566bd6e81d253fd6cbc4b4&language=it-IT&page=1&query="+this.querySearch+"&include_adult=false").then((function(t){e.TVList=t.data.results}))}else o.a.get("https://api.themoviedb.org/3/movie/popular?api_key=f3e38786a7566bd6e81d253fd6cbc4b4&language=en-US&page=1&include_adult=false").then((function(t){e.filmList=t.data.results})),o.a.get("https://api.themoviedb.org/3/tv/popular?api_key=f3e38786a7566bd6e81d253fd6cbc4b4&language=it-IT&page=1&include_adult=false").then((function(t){e.TVList=t.data.results}))}}},U=F,O=(n("5c0b"),Object(f["a"])(U,i,r,!1,null,null,null)),w=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"61f4":function(t,e,n){var a={"./de.png":"e489","./en.png":"d615","./es.png":"2559","./fr.png":"2176","./hu.png":"4f90","./it.png":"e9d6","./ko.png":"2c0b","./su.png":"229c","./sv.png":"a460","./tr.png":"cbed"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="61f4"},"66f7":function(t,e,n){},"69fc":function(t,e,n){"use strict";n("15ea")},"7b04":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAAM1BMVEX////89PH56eL239T01Mbxybfuvqnrs5roqYzlnn7ik2/fiGHdfVPackTXaDbUXSfRUhlM9YsdAAALIElEQVR4nO2d26KiOBBFBRFQQfz/rx1Rj6OQSyU7hILe63GmD4ZFLpVKAoe7leNBI0VVNW177QZ7wbNysP6fem1VE8qqPXd9RjUyrAIvawv7omrOXU4pIdgE9sXa1l6U9VlfrfvGJlBDB1jW11tWGTFYBJ7XllecLvrljZgFDus24KK+ZtYQj1ngmiNwUevu9CYYBd7W07ehuvfCKLBdyV551hIeyzEKLFfRd1Ib67kwCbyuoa/exqA7wySwyW6vaDeqzyywyu2v2V7X98EkMLO+rTbeFwaBQ1Z91SaHjv8xCOwy6ivO+W85LZhAdMZ32nDn9wZpwiUY7xRbm3WYAAaRZsDinWr71e8OhDFlB+Zs2uz3uggmgZJk4Bi6IVn/YuOD7weTQH8neHxmnICs9XFTKSsXxmSCp28rLs9/1QP+dtH9PTEKHFzpmKJ933181rXejz9LRtpeuT767vfoIaTOdncZsCwqWcaHL33xSa9d+bMua14N9et4+f4XsS14X/7sOxNuk2iwbCYDZ2TaekfjxxP73ph73/w5Kk/nWcopcgwud+bPJXCke2AO2eKW3ovdxH9/eATaOUUJ3EP64JdogVFBTJOy6DqIFRi19r63AWQkVmBU2np3HeA9XmDM5oWdJLB+iRUYkUutkhZcC7ECw9eOi02vXlrJJ3AvGdQJ2QRufv3SQi6BO0sh/E8mgfscQEbyCNxjBP0mi8Ad+8sSSO/ZX7TAgDXhXfvLkEzYt7/4dJZ0VX1PS5gmogUKM9K7TCB8Ey1QtLNoFxvY3EQLlAwjx33mD36IF+hfFdl98x0BBA7ucaT6B6rfHRJ4HxzTkXL/vd8LRKB9PlJe/H+7EzCB995UCU//Su0bAQXe791kk1E13wWya2CBD7r2VB3HN+LU7U7z9g5SCPynoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgSZCuym9KsUayXe93xtpzTVH1MfU4HOT8W98H/259Kecz6IvhPc+APvhQbB3fsECj7aevYWRPb56yLVh9elX9v2XugacZHpfxAU5uQtSCm7oaNYkRvp17a9jaDxX6Oc/s1UoKAwhfeOhDdUyx05kVScEe/n7gTNb9ZqpgIln/72PclOeEP+vkCG9Gvbvo+lSq4zu8ZsFBZcxFdzhN9u9jcpKcIuw9fnSrqC2Tcv552in8Lz1W/vd3PflwmS5KL2/9gTT7klz2H22caZQMmQ5v70qCQYGPEPRlIk/Y6/3JKrzB/6TKBgJJoPRQvcTgjSR+Zuw5IKOH/oM4GiIc3Z/QvGsicJP2Iq/UnXHEDUc89vfCZQ9DQLx81Lx+BUUaD45g/OKngrJBeYj3vz8Fz0NO0lGYRDYrIg5nn3wt+0/6jne+dvDH3XXKAsrreGMtIRMWULlrfhwhY6yYptuOu5wF5WFItB6QiStAXL27DNoPCxG+Yyhhm2sA0aDYr9JW3BAW3YaPAmrMCmyNUgUBLIjBxnRRnE7TdxCxYH7yPtNJ4+i8aPg7nOGAQK2/B4wR+FQystyCFlFP1CXvUfFan9enq3VjrqmbMRpiSZ/IqHY3N9Shy6c0AdsJQFIqDQD8pT217ObXsK+TPj3NMkUNwjx+Oey8QgTQoCNFKB0pkRgC+zFE6GQhu7bWOeO2AsiMOXz4lh8UKbJw9GgdLZWDTpK2BIJBOJeSJtXmmRLtPE4o1h+u7Rw7en6tHXt9IFvYWroKXbNgtcuAo6U9rDpZnFtVUrkLhwFbRk3yxrfYtWQUcPOJxtk4Ky8VbbRaugLW6wCFy0Clp7wN6toPIs6csyUpHYAlfbavOCVdBWAW/+36zctXDBWNCav7MJlM/ngjF3JoNsCu4cv8W5yHCsld+632GxDsX8LHvpvc9TGF9Il9iDsQ97VoHDUh2KUUBALqBwTaPDJuTy37QPe/YdNws9TWMbDKvujuW8hR6745k5tiwt8jSNiejQ7sIRRy7y2F25N4fAJZ6mMaMe3t06DC7Qd5eumbtr09wCwaCp9YXkQl3XeSFbXgvCOQty7jpMHleZak5cwGQ32KduOO4dFO5tm4nbg6kDjIzdrOuTyRuOZy+aW2Da9mDsS6RLWFOO9o4ppk+w4lu88WwcTmnQWGniZzzGBPuLhF2P4zmJBCY0aG50wJzbkVpI1vV4/fkP2qQyaPaH9FeuhalEBv3+BCeV0hjEtlSYcSUWYrvWH2rB0o3gqNeQILVl8YctpTmXphKMJI5eNkhgggZhawrgXTpzWx0YDxayHbSyw4YXrDDWptA9z2NVdty/696mLt0yZMaZNgsWCBVG+ChDuXWd79Qe0BE20pVr8XHXkJ1DP3jS8IvSRaaoj/4DlX/IzwvfotJbRdp9gKEE7Rj7lDmkyYQcuO7Ch2NJILAst9ARsJjtH3QSdmI9UGEtbb3d7KCvk6Ayhyksz4GPPPTI/62WtonCvxL+ISwlE3zKU7yJsg7fthjxzoTrSeDwdAl6kkE5hZhR6ep98EVgkd/EvXTiOt++AhYlIKSOPWbct9YOqKha+bj7S/RbO4aurQ0Fqupz3ClWcQoK2lvYX9rTT3ReVU3bIYEW+tqTrzc9XLyBrRNpV59md/UjDE8Tnyp6b0z0YaFVUSRQZDDtAacEaBIoMCjIcGZGlUCvQX3+lAn0RDMK/WkT6EyDahs/nmgTaF9AcG5rWw91Ah/THGMlDMuR5EOhQEMSLzDFlBONAsezIl9z7WOjs/G+0Cnw/pxrj1y/poe9RpFqBc65FkucUUTZjsAxXSNa6s7LVgR2r05xxRU+CzoF9pPDhZe/4FBfLK1T4GNOXNbn5znXvmu/lxCglOMSqBToOB+Q6sW1yVAp0JVS0PZea5UCXavP2npBjQLdR8+VDcQaBbrfW6MsFtQo0L2VTtl0RKFA38sjltluGItCgb43T+lamFMo0LsPUdUwolCgz98i7z2KRp9A/5Hp9K9+A9AnULAzXNNsRJ/AJJ+EyYc6gZLDS5rGYXUCRccPFcXS6gSKNloqWl1SJ1B0GkXRfFidQNF+ekWdoDqBEn+CL5xlQ1FRngjPO+hZGtEmUPgOAD2RoDaBwpeA6xlFtAkUHhfRszi3UYF68gkbFain2HpK8oICQaQC1cQxFAiiTaD0XVAUaEH6QnwKtCE8nE+BNoTHhinQhjCboGZtWJ1A4eur1y7lBz0l+UP0+up0X8dG0Sfw9z3GlXmVk8kEF99fmKzMgaGe3R0aBT6iwab4mDLuVFAzCCsVeB/f7VMdDmVrfi2Uni5Qr8D/MQQ2elrwFgTOTz24PvGemy0InKVoFFXAbQiczO/0xDD3rQj8acW6Xn6yEYH3/hNQi9+vm4etCHy/97EUv1U0F9sRqBQKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoE+Q/EJjp2aMdwwgAAAABJRU5ErkJggg=="},8935:function(t,e,n){"use strict";n("66f7")},"9c0c":function(t,e,n){},a460:function(t,e,n){t.exports=n.p+"img/sv.deddd097.png"},c122:function(t,e,n){"use strict";n("3883")},cbed:function(t,e,n){t.exports=n.p+"img/tr.b2d56225.png"},d615:function(t,e,n){t.exports=n.p+"img/en.ec9dbf19.png"},e489:function(t,e,n){t.exports=n.p+"img/de.7d74d8e5.png"},e9d6:function(t,e,n){t.exports=n.p+"img/it.e1b5ae58.png"}});
//# sourceMappingURL=app.7ba50a84.js.map