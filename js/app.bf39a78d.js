(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);L&&L(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/conferences/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var L=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1fbd":function(t,e,n){var r={"./Conferences.vue":"cd06","./HeaderComponents.vue":"81f7","./HoverBtn.vue":"74ad","./SelectorBtn.vue":"bab5","./ValuePerUnit.vue":"7020"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="1fbd"},2285:function(t,e,n){"use strict";n("a8aa")},"2bbe":function(t,e,n){},"2e17":function(t,e,n){"use strict";n("f577")},"463d":function(t,e,n){"use strict";n("bda6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d81d"),n("d3b7"),n("ddb0"),n("b0c0");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("conferences")],1)},s=[],i=n("2877"),o={},l=Object(i["a"])(o,a,s,!1,null,null,null),c=l.exports,L=n("8c4f");r["a"].use(L["a"]);var u=[{path:"/",name:""},{path:"/",name:""}],f=new L["a"]({mode:"history",base:"/conferences/",routes:u}),d=f,p=n("2f62");r["a"].use(p["a"]);var v=new p["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("fb98"),_=n.n(h);r["a"].config.productionTip=!1;var b=n("1fbd");b.keys().map((function(t){(b(t).default||{}).name&&r["a"].component(b(t).default.name,b(t).default)})),new r["a"]({router:d,store:v,mainStyle:_.a,render:function(t){return t(c)}}).$mount("#app")},7020:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"value-per-unit"},[n("span",{staticClass:"value-per-unit__value"},[t._v(t._s(t.value))]),n("span",{staticClass:"value-per-unit__unit",domProps:{innerHTML:t._s(t.unit)}})])},a=[],s=(n("a9e3"),{name:"value-per-unit",props:{value:{type:[String,Number],required:!0},unit:{type:[String,Number],required:!0}}}),i=s,o=(n("2285"),n("2877")),l=Object(o["a"])(i,r,a,!1,null,"5756df06",null);e["default"]=l.exports},"74ad":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hover-wrapper"},[t._t("default"),n("div",{staticClass:"hover-element"},[n("button",{staticClass:"hover-element-btn"},[n("span",{staticClass:"hover-element-btn-text"},[t._v("детальнее")]),n("svg",{staticClass:"hover-element-btn-svg",attrs:{width:"102",height:"104",viewBox:"0 0 102 104",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M89.0489 31.0514L94.9929 36.009L92.5095 50.342L89.0489 31.0514ZM88.8827 30.1248L95.6488 35.7681L92.8219 52.0834L95.7461 68.384L89.0126 74.0682L87.5085 82.7495L71.9654 88.4591L59.3111 99.1415L51.0221 96.1524L42.7512 99.1905L30.0341 88.5838L14.457 82.9665L12.9013 74.2941L6.13427 68.6501L8.96154 52.3326L6.03777 36.0343L12.7702 30.351L14.2745 21.6687L29.8194 15.9585L42.4727 5.27695L50.7611 8.26583L59.0318 5.22767L71.7486 15.8341L87.3268 21.4518L88.8827 30.1248ZM73.1073 16.9674L86.7929 21.9025L88.1598 29.5219L73.1073 16.9674ZM71.443 16.3672L88.3259 30.4484L92.2074 52.0853L88.454 73.7479L71.6566 87.9278L51.0201 95.5084L30.3399 88.0509L13.458 73.9705L9.57598 52.3307L13.3288 30.6713L30.1283 16.4897L50.7629 8.90976L71.443 16.3672ZM70.0843 15.234L58.9125 5.91612L51.6466 8.58517L70.0843 15.234ZM49.8774 8.59042L42.5961 5.9647L31.4802 15.3484L49.8774 8.59042ZM28.4675 17.0997L14.8111 22.1162L13.4895 29.7438L28.4675 17.0997ZM12.6095 31.2785L6.69507 36.2713L9.26359 50.5893L12.6095 31.2785ZM9.27393 54.074L6.79014 68.4092L12.7351 73.3675L9.27393 54.074ZM13.6242 74.8971L14.9909 82.5159L28.6755 87.4507L13.6242 74.8971ZM31.6986 89.184L42.8705 98.502L50.1365 95.833L31.6986 89.184ZM51.9058 95.8278L59.1878 98.4537L70.3046 89.0691L51.9058 95.8278ZM73.3174 87.3178L86.9719 82.3019L88.2933 74.6754L73.3174 87.3178ZM89.1734 73.1406L95.0888 68.147L92.5198 53.8267L89.1734 73.1406Z",fill:"white","fill-opacity":"0.1"}}),n("path",{attrs:{d:"M95.7966 35.7937L95.8113 35.7083L95.7448 35.6529L89.0207 30.0446L87.4744 21.4253L87.4592 21.3401L87.3777 21.3107L71.8244 15.702L59.1279 5.11248L59.0614 5.05701L58.9801 5.08687L50.7606 8.1062L42.5235 5.13584L42.4421 5.10646L42.3759 5.16233L29.7429 15.8268L14.2228 21.5279L14.1415 21.5577L14.1267 21.6431L12.6317 30.2716L5.94102 35.9197L5.87484 35.9756L5.89013 36.0608L8.80923 52.333L5.98647 68.6245L5.97169 68.7098L6.03819 68.7653L12.7633 74.3743L14.3094 82.993L14.3247 83.0783L14.4061 83.1077L29.9584 88.716L42.6552 99.3057L42.7217 99.3612L42.803 99.3314L51.0226 96.312L59.2602 99.2826L59.3417 99.3119L59.4079 99.2561L72.0419 88.5908L87.5602 82.8903L87.6415 82.8604L87.6563 82.7751L89.1511 74.1476L95.8428 68.4987L95.909 68.4428L95.8937 68.3575L92.9742 52.083L95.7966 35.7937ZM94.8303 36.0687L92.5069 49.4782L89.2693 31.4305L94.8303 36.0687ZM86.6605 22.0142L87.9393 29.1427L73.8567 17.397L86.6605 22.0142ZM71.3673 16.4993L88.1879 30.5287L92.0551 52.0857L88.3156 73.6685L71.5801 87.7961L51.0197 95.3488L30.4157 87.9188L13.596 73.8903L9.72829 52.3303L13.4673 30.7507L30.2048 16.6213L50.7634 9.06939L71.3673 16.4993ZM69.3349 14.8043L52.0852 8.58386L58.8829 6.08678L69.3349 14.8043ZM32.227 14.9143L42.6266 6.13518L49.4388 8.59173L32.227 14.9143ZM27.7207 17.5338L13.7077 29.3633L14.9441 22.2272L27.7207 17.5338ZM12.3913 31.659L9.26102 49.7255L6.85801 36.3301L12.3913 31.659ZM6.95273 68.3495L9.2765 54.9378L12.5146 72.9884L6.95273 68.3495ZM27.9262 87.021L15.1233 82.4042L13.8446 75.2763L27.9262 87.021ZM49.6979 95.8343L42.9001 98.3314L32.4479 89.6137L49.6979 95.8343ZM69.5578 89.5032L59.1572 98.2832L52.3443 95.8265L69.5578 89.5032ZM86.8389 82.191L74.0642 86.8836L88.0752 75.0559L86.8389 82.191ZM92.5224 54.6905L94.9258 68.0883L89.3915 72.7602L92.5224 54.6905Z",stroke:"white","stroke-opacity":"0.1","stroke-width":"0.3"}})]),n("svg",{attrs:{width:"44",height:"24",viewBox:"0 0 44 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9999 5.15137L41.8484 11.9999L34.9999 18.8484L34.1514 17.9999L40.1514 11.9999L34.1514 5.9999L34.9999 5.15137Z",fill:"white"}}),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.40039 11.3999L40.6004 11.3999V12.5999L2.40039 12.5999V11.3999Z",fill:"white"}})])])])],2)},a=[],s={name:"hover-btn",props:{color:String}},i=s,o=(n("463d"),n("2877")),l=Object(o["a"])(i,r,a,!1,null,"af95a89a",null);e["default"]=l.exports},"81f7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-component"},[n("svg",{staticClass:"header-component__icon",attrs:{width:"56",height:"10",viewBox:"0 0 56 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 5C5.33333 8.46667 16.8 12.52 28 1C31.5 5.4 41.8 12.36 55 5C50.5 1.8 38.8 -1.88 28 9C24.5 4.73333 14.2 -2.04 1 5Z",stroke:"#09192F","stroke-opacity":"0.1"}})]),n("span",{staticClass:"header-component__title"},[t._v(t._s(t.title))])])},a=[],s={name:"header-components",props:{title:String}},i=s,o=(n("cf2f"),n("2877")),l=Object(o["a"])(i,r,a,!1,null,"6cc98ea0",null);e["default"]=l.exports},"8b9b":function(t,e,n){},a8aa:function(t,e,n){},bab5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selector-btn"},[n("button",{staticClass:"selector-btn__left-arrow"}),n("button",{staticClass:"selector-btn__arrow_right selector-btn__arrow_right_long"})])}],s={name:"selector-btn"},i=s,o=(n("2e17"),n("2877")),l=Object(o["a"])(i,r,a,!1,null,"5999a9a4",null);e["default"]=l.exports},bda6:function(t,e,n){},cc29:function(t,e,n){t.exports=n.p+"img/photo-1607128295148-ec1ddc314455.3000c3dd.png"},cd06:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"conferences"},[r("header-components",{staticClass:"conferences__header",attrs:{title:"Конференции"}}),t._m(0),r("div",{staticClass:"conferences__hall hall"},[r("div",{staticClass:"hall__aditional-info"},[r("div",{staticClass:"hall__aditional-info-photo-wrapper"},[r("hover-btn",[r("img",{staticClass:"hall__aditional-info-photo",attrs:{src:n("cc29"),alt:""}})]),r("span",{staticClass:"slash"},[t._v("01")])],1)]),r("div",{staticClass:"hall__info"},[r("div",{staticClass:"hall__info-photo-wrapper"},[r("hover-btn",[r("img",{staticClass:"hall__info-photo",attrs:{src:n("cc29"),alt:""}})]),r("span",{staticClass:"slash"},[t._v("01")])],1),r("div",{staticClass:"hall__title"},[t._v(" Зал «Синай» ")]),r("div",{staticClass:"hall__short-description"},[t._v(" Современная кухня - оригинальное меню с креативной подачей и необычными вкусовыми качествами. ")]),r("div",{staticClass:"hall__roominess"},[r("value-per-unit",{attrs:{value:"329",unit:"чел."}}),r("value-per-unit",{attrs:{value:"452.9",unit:"м<sup>2</sup>"}})],1),r("selector-btn",{staticClass:"hall__selector"})],1)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"conferences__description"},[n("span",{staticClass:"conferences__title"},[t._v("Совершенные условия для организации ваших мероприятий")]),n("span",{staticClass:"conferences__subtitle"},[t._v(" Ежедневно, открывая свои двери тысячам посетителей, представителям международных организаций, жителям и гостям города, центр стал не только платформой для межнационального культурного обмена. ")])])}],s={name:"conferences"},i=s,o=(n("ddc5"),n("2877")),l=Object(o["a"])(i,r,a,!1,null,"9c5c9d9a",null);e["default"]=l.exports},cf2f:function(t,e,n){"use strict";n("8b9b")},ddc5:function(t,e,n){"use strict";n("2bbe")},f577:function(t,e,n){},fb98:function(t,e,n){}});
//# sourceMappingURL=app.bf39a78d.js.map