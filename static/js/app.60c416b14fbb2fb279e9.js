webpackJsonp([1],{"+skl":function(t,e){},"4o9w":function(t,e){},"E+KX":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("BackTop",{attrs:{right:20,bottom:20,duration:2e3}})],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(t){n("4o9w")},null,null).exports,a=n("/ocq"),r={name:"Content",data:function(){return{isShows:[{isShow:!1},{isShow:!1},{isShow:!1},{isShow:!1}]}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){for(var t=document.querySelectorAll(".box"),e=t.length,n=0;n<e;n++){var i=t[n],o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=i.getBoundingClientRect()&&i.getBoundingClientRect().top,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;s<=o-.75*i.clientHeight&&(this.isShows[n].isShow||(this.isShows[n].isShow=!0));var r=0==a?0:(a+o)/document.body.clientHeight*100;this.$Loading.update(r)}}},watch:{}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"},attrs:{id:"introduce"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[0].isShow?n("div",{attrs:{id:"message"}},[n("p",[t._v("Hi! I'm Ji Yuanhao「吉元昊」,")]),t._v(" "),n("p",[t._v("I graduated from "),n("strong",[t._v("Liaocheng University")]),t._v(" majoring in software engineering, now I am a\n          graduate student of "),n("strong",[t._v("Xidian University.")])])]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[1].isShow?n("h3",[t._v("Loading . . .")]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[2].isShow?n("h3",[t._v("Loading . . .")]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[3].isShow?n("h3",[t._v("Loading . . .")]):t._e()])],1)])},staticRenderFns:[]};var d={name:"Home",data:function(){return{clientHeight:"",showTitle:!1}},components:{Content:n("VU/8")(r,c,!1,function(t){n("E+KX")},"data-v-e9756a60",null).exports},mounted:function(){var t=this;this.clientHeight=document.documentElement.clientHeight,window.onresize=function(){t.clientHeight=document.documentElement.clientHeight};try{this.showHeader=!0,document.body.removeChild(document.getElementById("appLoading")),document.getElementById("app").style.display="block"}catch(t){console.log(t)}this.showTitle=!0,this.$Loading.update(this.progress)},methods:{changeFixed:function(t){this.$refs.homePage.style.height=t+"px"}},watch:{clientHeight:function(){this.changeFixed(this.clientHeight)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("header",{ref:"homePage"},[e("transition",{attrs:{name:"fade"}},[this.showTitle?e("h2",{attrs:{id:"title"}},[this._v("You're unique,"),e("br"),this._v("nothing can replace you.")]):this._e()])],1),this._v(" "),e("Content")],1)},staticRenderFns:[]};var h=n("VU/8")(d,l,!1,function(t){n("eJj9")},"data-v-df9593c6",null).exports;i.default.use(a.a);var u=new a.a({routes:[{path:"/",name:"Home",component:h}]}),m=n("BTaQ"),g=n.n(m);n("+skl");i.default.use(g.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:u,components:{App:s},template:"<App/>"})},eJj9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.60c416b14fbb2fb279e9.js.map