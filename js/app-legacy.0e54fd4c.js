(function(e){function t(t){for(var a,o,i=t[0],s=t[1],d=t[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1456:function(e){e.exports=JSON.parse('{"en":{"error":"Error","productNotFound":"We weren\'t able to find that product.","loading":"Loading","viewOnOpenFoodFacts":"View on OpenFoodFacts...","productCategories":{"vegan":"vegan","vegetarian":"vegetarian (not vegan)","vegetarianUnknown":"possibly vegetarisch","veganUnknown":"possibly vegan","notVegan":"not vegan","labeledAs":"The product is labeled as {label}.","analysedAs":"The product was categorized as {label} by an automatic ingredient analysis."}},"de":{"error":"Fehler","productNotFound":"Wir konnten das Produkt nicht finden.","loading":"Lädt","viewOnOpenFoodFacts":"Auf OpenFoodFacts ansehen...","productCategories":{"vegan":"vegan","vegetarian":"vegetarisch (nicht vegan)","vegetarianUnknown":"nicht sicher vegetarisch","veganUnknown":"nicht sicher vegan","notVegan":"nicht vegan","labeledAs":"Das Produkt ist als {label} gekennzeichnet.","analysedAs":"Die automatische Zutatenanalyse ergab, dass das Produkt {label} ist."}}}')},"1d54":function(e,t,n){"use strict";n("c770")},"3ac5":function(e,t,n){},"443c":function(e,t,n){"use strict";n("3ac5")},a47f:function(e,t,n){},c770:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var i=Object(a["t"])("CameraView"),s=Object(a["t"])("ProductView");return Object(a["p"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(i,{onCode:e.receivedCode},null,8,["onCode"]),Object(a["h"])(s,{code:e.code,panelHidden:e.panelHidden},null,8,["code","panelHidden"])],64)}var c=n("da22"),o=n.n(c),i=Object(a["w"])("data-v-98984d4a");Object(a["r"])("data-v-98984d4a");var s={ref:"video"},d={key:0,class:"fixed top-0 right-0 p-4"},u=Object(a["h"])("img",{src:o.a,class:"h-6 w-6"},null,-1);Object(a["q"])();var l=i((function(e,t,n,r,c,o){return Object(a["p"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("video",s,null,512),e.cams>1?(Object(a["p"])(),Object(a["e"])("div",d,[Object(a["h"])("div",{class:"bg-white rounded-full shadow-md p-2",onClick:t[1]||(t[1]=function(){return e.changeCamera.apply(e,arguments)})},[u])])):Object(a["f"])("",!0)],64)})),b=(n("7db0"),n("e588")),p=Object(a["i"])({data:function(){return{codeReader:new b["BrowserMultiFormatReader"],camIndex:0,cams:0}},mounted:function(){var e=localStorage.getItem("camid");this.setupScanner(e||void 0)},methods:{setupScanner:function(e){var t=this;this.codeReader=new b["BrowserMultiFormatReader"],this.codeReader.listVideoInputDevices().then((function(n){if(0===n.length)return t.$emit("no-cameras");var a="";a=n.find((function(t){return t.deviceId===e}))?e:n[t.camIndex].deviceId,t.cams=n.length,localStorage.setItem("camid",a),t.codeReader.decodeFromVideoDevice(a,t.$refs.video,(function(e,n){e&&t.$emit("code",e.getText()),!n||n instanceof b["NotFoundException"]||console.error(n)}))})).catch((function(e){console.error(e)}))},changeCamera:function(){console.log(this.codeReader),this.codeReader.reset(),this.camIndex++,this.camIndex>=this.cams&&(this.camIndex=0),this.setupScanner()}}});n("443c");p.render=l,p.__scopeId="data-v-98984d4a";var f=p,v=Object(a["w"])("data-v-2732bc68");Object(a["r"])("data-v-2732bc68");var g={key:0,class:"flex absolute inset-0 justify-center text-center flex-col bg-white"},h={class:"text-3xl mb-1"},O={key:0},j={key:1,class:"flex absolute inset-0 justify-center text-center flex-col bg-white"},m={class:"flex"},w={class:"flex-1"},y={class:"text-3xl mb-1"},x=Object(a["g"])(" ");Object(a["q"])();var k=v((function(e,t,n,r,c,o){var i=Object(a["t"])("i18n-t");return Object(a["p"])(),Object(a["e"])("div",{class:["panel",{gone:e.panelHidden,"overflow-hidden":e.loading}]},[e.error?(Object(a["p"])(),Object(a["e"])("div",g,[Object(a["h"])("h2",h,Object(a["u"])(e.$t("error")),1),e.error instanceof e.errors.ProductNotFoundError?(Object(a["p"])(),Object(a["e"])("p",O,Object(a["u"])(e.$t("productNotFound")),1)):(Object(a["p"])(),Object(a["e"])("p",{key:1,textContent:e.error.message},null,8,["textContent"]))])):Object(a["f"])("",!0),e.loading?(Object(a["p"])(),Object(a["e"])("div",j,[Object(a["h"])("p",null,Object(a["u"])(e.$t("loading"))+" "+Object(a["u"])(e.code)+"...",1)])):Object(a["f"])("",!0),Object(a["h"])("div",m,[Object(a["h"])("div",w,[Object(a["h"])("h2",y,Object(a["u"])(e.title),1),Object(a["h"])("p",null,[Object(a["h"])(i,{keypath:"productCategories.".concat(e.category)},{label:v((function(){return[Object(a["h"])("strong",null,Object(a["u"])(e.label),1)]})),_:1},8,["keypath"]),x,Object(a["h"])("a",{href:"https://world.openfoodfacts.org/product/".concat(e.code),target:"_blank"},Object(a["u"])(e.$t("viewOnOpenFoodFacts")),9,["href"])])]),Object(a["h"])("div",null,[Object(a["h"])("img",{src:e.image,class:"h-16"},null,8,["src"])])])],2)})),F=(n("caad"),n("d3b7"),n("2532"),n("ddb0"),n("96cf"),n("1da1")),_=n("d4ec"),C=n("262e"),P=n("2caf"),I=n("9072"),R=function(e){Object(C["a"])(n,e);var t=Object(P["a"])(n);function n(){return Object(_["a"])(this,n),t.apply(this,arguments)}return n}(Object(I["a"])(Error)),S=Object(a["i"])({props:{panelHidden:Boolean,code:String},data:function(){return{isVegan:void 0,title:"",category:"",label:"",image:"",loading:!1,error:!1,errors:{ProductNotFoundError:R}}},watch:{code:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,o,i,s,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.prev=3,t.next=6,fetch("https://world.openfoodfacts.org/api/v0/product/".concat(e.code,".json")).then((function(e){return e.json()}));case 6:if(n=t.sent,"product found"===n.status_verbose){t.next=9;break}throw new R;case 9:a={"en:vegan":"vegan","en:vegetarian":"vegetarisch","en:vegetarian-status-unknown":"vegetarianUnknown","en:vegan-status-unknown":"veganUnknown","en:non-vegan":"notVegan"},r={labels_tags:"labeledAs",ingredients_analysis_tags:"analysedAs"},c=!1,t.t0=regeneratorRuntime.keys(r);case 13:if((t.t1=t.t0()).done){t.next=29;break}o=t.t1.value,i=r[o],t.t2=regeneratorRuntime.keys(a);case 17:if((t.t3=t.t2()).done){t.next=27;break}if(s=t.t3.value,d=a[s],!n.product[o].includes(s)){t.next=25;break}return e.category=i,e.label=d,c=!0,t.abrupt("break",29);case 25:t.next=17;break;case 27:t.next=13;break;case 29:if(c){t.next=31;break}throw new R;case 31:e.title=n.product.product_name_de,e.image=n.product.image_thumb_url,e.error=!1,t.next=39;break;case 36:t.prev=36,t.t4=t["catch"](3),e.error=t.t4;case 39:return t.prev=39,e.loading=!1,t.finish(39);case 42:case"end":return t.stop()}}),t,null,[[3,36,39,42]])})))()}}});n("d481");S.render=k,S.__scopeId="data-v-2732bc68";var V=S,A=n("84a2"),N=n.n(A),$=Object(a["i"])({name:"App",components:{CameraView:f,ProductView:V},setup:function(){var e=Object(a["s"])(!0),t=Object(a["s"])("0");function n(n){e.value=!1,t.value=n}var r=N()(n,1e3);return{receivedCode:r,code:t,panelHidden:e}}});n("1d54");$.render=r;var H=$,M=n("ab42"),U=n("1456"),E=Object(M["a"])({locale:navigator.language,fallbackLocale:"en",messages:U}),T=n("9483");Object(T["a"])("".concat("/","service-worker.js")),Object(a["d"])(H).use(E).mount("#app")},d481:function(e,t,n){"use strict";n("a47f")},da22:function(e,t,n){e.exports=n.p+"img/camera-flip.824534fa.svg"}});
//# sourceMappingURL=app-legacy.0e54fd4c.js.map