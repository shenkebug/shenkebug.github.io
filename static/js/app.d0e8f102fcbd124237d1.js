webpackJsonp([1],{0:function(e,t){},BZHB:function(e,t){},"DP+P":function(e,t){},Ef4L:function(e,t){},"IB+u":function(e,t){},ICar:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v(this._s(this.title))])])},staticRenderFns:[]};var o=n("VU/8")({name:"Header",data:function(){return{title:"Third Vue CLI Project By Shenke"}},props:{},components:{},methods:{},computed:{},watch:{}},r,!1,function(e){n("DP+P")},"data-v-0bae2fe5",null).exports,a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{on:{click:this.toHello}},[t("p",[this._v(this._s(this.copyright))])])},staticRenderFns:[]};var i=n("VU/8")({name:"Footer",data:function(){return{copyright:"Copyright 2019 shenke"}},props:{},components:{},methods:{toHello:function(){this.$router.push({name:"hello",params:{message:"the message from footer"}})}},computed:{},watch:{}},a,!1,function(e){n("nQEx")},"data-v-1cdb8a61",null).exports,c={name:"Users",data:function(){return{}},props:{users:{type:Array}},components:{},methods:{toHello:function(e,t){this.$router.push({path:"/helloworld",query:{index:e,username:t}})}},computed:{},watch:{}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[n("ul",e._l(e.users,function(t,s){return n("li",{key:s,on:{click:function(n){return e.toHello(s,t.name)}}},[n("div",[e._v(e._s(t.name)+", "+e._s(t.email))])])}),0)])},staticRenderFns:[]};var h={name:"Home",data:function(){return{users:[]}},props:{},components:{Header:o,Users:n("VU/8")(c,u,!1,function(e){n("Ef4L")},"data-v-08969e40",null).exports,Footer:i},methods:{showComments:function(){var e=this;console.log("showComments"),this.$axios.get("http://jsonplaceholder.typicode.com/comments").then(function(t){200==t.status?(e.users=[],e.users=t.data):alert("axios get comments error")}).catch(function(e){alert(e)})}},computed:{},watch:{},created:function(){var e=this;this.$http.get("http://jsonplaceholder.typicode.com/users").then(function(t){200==t.status?e.users=t.data:alert("get users error")}).catch(function(e){alert(e)})}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("div",{on:{click:this.showComments}},[t("Header")],1),this._v(" "),t("Users",{attrs:{users:this.users}}),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var d=n("VU/8")(h,l,!1,function(e){n("VrgF")},"data-v-acf28768",null).exports,m={name:"App",components:{Home:d},comments:{}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"Home"}},[t("router-view")],1)],1)},staticRenderFns:[]};var f=n("VU/8")(m,p,!1,function(e){n("ICar")},null,null).exports,v=n("/ocq"),_={name:"HelloWorld",data:function(){return{index:-1,username:void 0}},mounted:function(){this.index=this.$route.query.index,this.username=this.$route.query.username}},g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"hello"}},[this._v("\n  helloworld, 第"+this._s(this.index+1)+"位用户："+this._s(this.username)+"\n")])},staticRenderFns:[]};var x=n("VU/8")(_,g,!1,function(e){n("IB+u")},"data-v-3fc0419f",null).exports,w={name:"Hello",data:function(){return{message:void 0}},props:{},components:{},methods:{},computed:{},watch:{},created:function(){this.message=this.$route.params.message}},H={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{},[this._v("\n  "+this._s(this.message)+"\n")])},staticRenderFns:[]};var $=n("VU/8")(w,H,!1,function(e){n("BZHB")},"data-v-b4256a76",null).exports;s.a.use(v.a);var y=new v.a({routes:[{path:"/",component:d},{path:"/helloworld",name:"helloworld",component:x},{path:"/hello",name:"hello",component:$}]}),F=n("8+8L"),E=n("mtWM"),U=n.n(E);s.a.prototype.$axios=U.a,s.a.config.productionTip=!1,s.a.use(F.a),new s.a({el:"#app",router:y,components:{App:f},template:"<App/>"})},VrgF:function(e,t){},nQEx:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d0e8f102fcbd124237d1.js.map