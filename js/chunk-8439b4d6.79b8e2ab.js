(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8439b4d6"],{"0481":function(e,t,a){"use strict";var s=a("23e7"),r=a("a2bf"),i=a("7b0b"),n=a("50c4"),o=a("a691"),l=a("65f0");s({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),a=n(t.length),s=l(t,0);return s.length=r(s,t,t,a,0,void 0===e?1:o(e)),s}})},4069:function(e,t,a){var s=a("44d2");s("flat")},"615b":function(e,t,a){},"6ece":function(e,t,a){},8801:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-section",{attrs:{id:"pro-features"}},[s("v-img",{staticClass:"mx-auto mb-8",attrs:{src:a("9b19"),"max-width":"128"}}),s("base-section-heading",{attrs:{title:"COMPARACIÓN DE CARACTERÍSTICAS"}},[e._v(" Get the PRO version of "),s("strong",[e._v("Zero")]),e._v(" and level up your theme"),s("br"),e._v("with additional components, pages, and Free updates. ")]),s("v-container",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"7"}},[s("v-simple-table",[s("thead",[s("tr",[s("th"),s("th",{staticClass:"text-body-1 font-weight-bold text-center"},[e._v(" What's in the Demo? ")]),s("th",{staticClass:"text-body-1 font-weight-bold text-center"},[e._v(" What's in the PRO version? ")])])]),s("tbody",{staticClass:"text-body-1"},e._l(e.features,(function(t,a){var r=t[0],i=t[1],n=t[2];return s("tr",{key:a},[s("td",{domProps:{textContent:e._s(r)}}),s("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof i?[s("v-icon",{attrs:{color:i?"success":"error"}},[e._v(" mdi-"+e._s(i?"check":"close")+" ")])]:[e._v(" "+e._s(i)+" ")]],2),s("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof n?[s("v-icon",{attrs:{color:n?"success":"error"}},[e._v(" mdi-"+e._s(n?"check":"close")+" ")])]:[e._v(" "+e._s(n)+" ")]],2)])})),0)])],1),s("v-col",{attrs:{cols:"12",md:"5"}},[s("div",{staticClass:"grey--text mb-3"},[s("br"),s("h4",[e._v(" Vista de puntos de interes en el mapa")]),s("v-divider",{staticClass:"mx-4"})],1),s("v-card",{attrs:{elevation:"12"}},[s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus",allowfullscreen:"",frameborder:"0",height:"350",width:"100%"}})]),s("div",{staticClass:"text-center"})],1)],1)],1)],1)},r=[],i={name:"SectionProChart",data:function(){return{features:[["Components",5,"40+"],["Example Pages",3,"10+"],["Vue CLI Support",!0,!0],["Bugfixes and Issues",!1,!0],["6 Months Free Updates",!1,!0],["Supports Vuetify",!1,!0],["Price","Free","$59"]]}}},n=i,o=a("0c7c"),l=a("6544"),c=a.n(l),d=a("b0af"),h=a("62ad"),u=a("a523"),f=a("ce7e"),v=a("132d"),g=a("adda"),m=a("0fd9"),p=(a("a9e3"),a("5530")),b=(a("8b37"),a("80d2")),_=a("7560"),y=a("58df"),C=Object(y["a"])(_["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(p["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(b["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),x=Object(o["a"])(n,s,r,!1,null,null,null);t["default"]=x.exports;c()(x,{VCard:d["a"],VCol:h["a"],VContainer:u["a"],VDivider:f["a"],VIcon:v["a"],VImg:g["a"],VRow:m["a"],VSimpleTable:C})},"8b37":function(e,t,a){},"9b19":function(e,t,a){e.exports=a.p+"img/logo.376fe171.svg"},a2bf:function(e,t,a){"use strict";var s=a("e8b5"),r=a("50c4"),i=a("0366"),n=function(e,t,a,o,l,c,d,h){var u,f=l,v=0,g=!!d&&i(d,h,3);while(v<o){if(v in a){if(u=g?g(a[v],v,t):a[v],c>0&&s(u))f=n(e,t,u,r(u.length),f,c-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=u}f++}v++}return f};e.exports=n},a452:function(e,t,a){"use strict";var s=a("ade3"),r=a("2b0e");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(s["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(s["a"])({},e,(function(e){this.internalLazyValue=e}))})}var n=i();t["a"]=n},b0af:function(e,t,a){"use strict";a("0481"),a("4069"),a("a9e3");var s=a("5530"),r=(a("615b"),a("10d2")),i=a("2b0e"),n=(a("c7cd"),a("ade3")),o=(a("6ece"),a("0789")),l=a("90a2"),c=a("a9ad"),d=a("fe6c"),h=a("a452"),u=a("7560"),f=a("80d2"),v=a("58df"),g=Object(v["a"])(c["a"],Object(d["b"])(["absolute","fixed","top","bottom"]),h["a"],u["a"]),m=g.extend({name:"v-progress-linear",directives:{intersect:l["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.isReversed?"right":"left",Object(f["d"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(f["d"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["a"]:o["b"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(f["d"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(f["i"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),a=t.width;this.internalValue=e.offsetX/a*100}},onObserve:function(e,t,a){this.isVisible=a},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=m,b=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),_=a("1c87");t["a"]=Object(v["a"])(b,_["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},_["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var e=Object(s["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=b.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-8439b4d6.79b8e2ab.js.map