(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{22:function(e,t,n){var i=n(32);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(18)(i,a);i.locals&&(e.exports=i.locals)},31:function(e,t,n){"use strict";n(22)},32:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n.display-icon svg {\n  width: 4rem;\n  height: 4rem;\n}\n.display-icon i {\n  font-size: 4rem;\n}\n.display-icon:hover .close-icon {\n  display: block;\n}\n.close-icon {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  opacity: 0.75;\n  cursor: pointer;\n\n  transition: all 0.2s ease-in-out;\n\n  transform: translate(50%, -50%);\n}\n.close-icon:hover {\n  opacity: 1;\n}\n.close-icon svg {\n  width: 1.5rem !important;\n  height: 1.5rem !important;\n}\n.close-icon i {\n  font-size: 1.5rem !important;\n}\n.svg-inline--fa.fa-w-12 > path,\n.svg-inline--fa.fa-w-14 > path,\n.svg-inline--fa.fa-w-16 > path,\n.svg-inline--fa.fa-w-18 > path,\n.svg-inline--fa.fa-w-20 > path {\n  fill: #3c4655;\n}\n.svg-inline--fa.fa-w-12,\n.svg-inline--fa.fa-w-14,\n.svg-inline--fa.fa-w-16,\n.svg-inline--fa.fa-w-18,\n.svg-inline--fa.fa-w-20 {\n  width: 1.75em;\n  height: 2em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 2.5em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 2.25em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 2em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 1.5em;\n}\n.fontawesome-modal > div:first-child {\n  flex-basis: 0;\n  height: 100%;\n  flex-direction: column;\n}\n.fontawesome-modal > div:first-child > div {\n  position: relative;\n  max-height: 80%;\n  overflow: hidden;\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-grow: 1;\n}\n.fontawesome-modal > div:first-child > div > div {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  height: 100%;\n}\n.fontawesome-inner {\n  height: 80%;\n  overflow: scroll;\n}\n.fontawesome-close {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 1.5rem;\n  font-size: 1.5rem;\n  color: #3c4655;\n}\n.icon-name {\n  display: block;\n  font-size: 12px;\n  margin-top: 0.5em;\n  background: #fafafa;\n  padding: 0.2em;\n}\n",""])},4:function(e,t,n){"use strict";n.r(t);var i=n(30),a={mixins:[i.FormField,i.HandlesValidationErrors],props:["resourceName","resourceId","field"],data:function(){return{loading:!1,library:{},icons:[],value:"",definitions:[],modalOpen:!1,defaultIconObj:{},filter:{type:"",search:""}}},beforeMount:function(){var e={},t=n(6).library,i=n(7).fab;if(this.pro){var a=n(8).fas,s=n(9).far,o=n(10).fal,l=n(11).fad;n(12);t.add(a,s,i,o,l),e.far=s,e.fas=a,e.fab=i,e.fal=o,e.fad=l}else{var r=n(13).fas,c=n(14).far;n(15);t.add(r,c,i),e.far=c,e.fas=r,e.fab=i}for(var f in e)for(var d in this.definitions.push(this.definitionToString(f)),e[f]){var u=e[f][d];this.canShowIcon(u)&&(u.show=!0,this.icons.push(u))}},mounted:function(){var e=this;if(this.icons.sort((function(e,t){return e.iconName>t.iconName?1:t.iconName>e.iconName?-1:0})),this.defaultIcon&&this.defaultIconType){var t=this.icons.filter((function(t){return t.prefix===e.defaultIconType&&t.iconName===e.defaultIcon}));t[0]&&(this.defaultIconObj=t[0])}},computed:{pro:function(){return this.field.pro||!1},defaultIcon:function(){return this.field.default_icon||""},defaultIconType:function(){return this.field.default_icon_type||""},addButtonText:function(){return this.field.add_button_text||"Add Icon"},enforceDefaultIcon:function(){return this.field.enforce_default_icon||!1},defaultIconOutput:function(){return this.defaultIconType+" fa-"+this.defaultIcon}},methods:{canShowIcon:function(e){return(void 0===this.field.only||-1!==this.field.only.indexOf(e.iconName))&&!(!e.iconName||!e.prefix||"font-awesome-logo-full"===e.iconName)},clear:function(){this.enforceDefaultIcon&&this.defaultIcon&&this.defaultIconType&&this.defaultIconObj.iconName?(this.value=this.defaultIconOutput,this.saveIcon(this.defaultIconObj)):this.value="",this.clearFilter()},clearFilter:function(){this.filter.type="",this.filter.search=""},closeModal:function(){this.modalOpen=!1,this.clearFilter()},toggleModal:function(){this.modalOpen=!this.modalOpen,this.clearFilter()},saveIcon:function(e){this.$el.getElementsByClassName("js-icon").length>0&&this.$el.getElementsByClassName("js-icon")[0].setAttribute("class","js-icon "+e.prefix+" fa-"+e.iconName),this.value=e.prefix+" fa-"+e.iconName,this.filter.type="",this.filter.search="",this.closeModal()},definitionToString:function(e){switch(e){case"far":return"Regular";case"fas":return"Solid";case"fab":return"Brands";case"fal":return"Light";case"fad":return"Duotone"}},stringToDefinition:function(e){switch(e){case"Regular":return"far";case"Solid":return"fas";case"Brands":return"fab";case"Light":return"fal";case"Duotone":return"fad"}},setInitialValue:function(){this.value=this.field.value||this.defaultIconOutput},fill:function(e){e.append(this.field.attribute,this.value||this.defaultIconOutput)},handleChange:function(e){this.value=e},search:function(){var e=this.filter.search.toUpperCase();for(var t in this.icons)if(""==e)this.icons[t].show=!0;else{var n=e.replace("-"," "),i=this.icons[t].iconName.toUpperCase(),a=i.replace("-"," ");i.includes(e)||-1!==i.indexOf(e)||a.includes(n)||-1!==a.indexOf(n)?this.icons[t].show=!0:this.icons[t].show=!1}this.$nextTick((function(){this.loading=!1}))}},watch:{"filter.search":{handler:function(e){this.loading=!0,this.search()}},"filter.type":{handler:function(e){this.loading=!0,this.$nextTick((function(){this.loading=!1}))}}}},s=(n(31),n(19)),o=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("default-field",{attrs:{field:e.field}},[n("template",{slot:"field"},[e.value?n("div",{staticClass:"display-icon mb-4"},[n("span",{staticClass:"relative inline-block p-8 border",staticStyle:{"border-color":"#e0e0e0"}},[n("i",{class:e.value+" js-icon"}),e._v(" "),n("span",{staticClass:"close-icon",on:{click:e.clear}},[n("i",{staticClass:"fa fa-times-circle"})])])]):e._e(),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"w-full form-control form-input form-input-bordered",class:e.errorClasses,attrs:{id:e.field.name,type:"hidden",placeholder:e.field.name},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.modalOpen?n("modal",{staticClass:"fontawesome-modal",on:{close:e.closeModal}},[n("div",{staticClass:"bg-white rounded-lg shadow-lg"},[n("div",{staticClass:"px-8 py-6 border-b relative",staticStyle:{"border-color":"#e0e0e0"}},[n("heading",{staticClass:"mb-0",attrs:{level:2}},[e._v(e._s(e.__("Select Icon")))]),e._v(" "),n("a",{staticClass:"fontawesome-close",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}},[n("i",{staticClass:"fa fa-times"})])],1),e._v(" "),n("div",{staticClass:"px-8 py-4 border-b",staticStyle:{"border-color":"#e0e0e0",background:"#fafafa"}},[n("div",{staticClass:"flex flex-wrap -mx-4"},[n("div",{staticClass:"w-1/3 px-4"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.type,expression:"filter.type"}],staticClass:"w-full form-control form-select",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"type",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",disabled:"disabled"}},[e._v("Select a type")]),e._v(" "),n("option",{attrs:{value:"all"}},[e._v("All")]),e._v(" "),e._l(e.definitions,(function(t){return n("option",{domProps:{value:e.stringToDefinition(t),innerHTML:e._s(t)}})}))],2)]),e._v(" "),n("div",{staticClass:"w-2/3 px-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.search,expression:"filter.search"}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{type:"text",id:"search",placeholder:"Search icons"},domProps:{value:e.filter.search},on:{input:function(t){t.target.composing||e.$set(e.filter,"search",t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"px-8 py-6 fontawesome-inner"},[e.loading?n("div",[e._v("Loading...")]):e.icons.length>0&&!e.loading?n("div",{staticClass:"flex flex-wrap items-stretch -mx-2"},e._l(e.icons,(function(t){return""!=e.filter.type&&"all"!=e.filter.type&&e.filter.type!=t.prefix||!t.show?e._e():n("div",{staticClass:"flex items-center justify-center text-center px-2 w-1/4 cursor-pointer mb-4",staticStyle:{outline:"1px solid #e0e0e0","outline-offset":"-.5rem"},on:{click:function(n){return e.saveIcon(t)}}},[n("div",{staticClass:"p-4",attrs:{"data-class":t.prefix+" fa-"+t.iconName}},[n("i",{class:t.prefix+" fa-"+t.iconName}),e._v(" "),n("span",{staticClass:"icon-name",domProps:{innerHTML:e._s(t.iconName)}})])])})),0):e._e()])])]):e._e()],1),e._v(" "),n("button",{staticClass:"btn btn-default btn-primary",domProps:{textContent:e._s(e.addButtonText)},on:{click:function(t){return t.preventDefault(),e.toggleModal(t)}}}),e._v(" "),e.hasError?n("p",{staticClass:"my-2 text-danger"},[e._v(e._s(e.firstError))]):e._e()],1)],2)}),[],!1,null,null,null);t.default=o.exports}}]);