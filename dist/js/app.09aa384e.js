(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],p=0,m=[];p<o.length;p++)i=o[p],n[i]&&m.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64");a["a"].use(n["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:"",dark:""}},[r("v-toolbar-title",{staticClass:"headline"},[r("span",[e._v("Search Github Repositories")])]),r("v-spacer")],1),r("v-content",[r("router-view")],1),r("v-footer",{attrs:{app:"",dark:"",height:"50"}},[r("div",[e._v("  l0rem1psum © 2019")]),r("v-spacer"),r("v-btn",{attrs:{flat:"",icon:"",color:"white",to:"/"}},[r("v-icon",[e._v("home")])],1)],1)],1)},i=[],o={name:"App"},l=o,u=r("2877"),c=r("6544"),p=r.n(c),m=r("7496"),v=r("8336"),f=r("549c"),d=r("553a"),h=r("132d"),b=r("9910"),V=r("71d9"),_=r("2a7f"),L=Object(u["a"])(l,s,i,!1,null,null,null),g=L.exports;p()(L,{VApp:m["a"],VBtn:v["a"],VContent:f["a"],VFooter:d["a"],VIcon:h["a"],VSpacer:b["a"],VToolbar:V["a"],VToolbarTitle:_["a"]});var x=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("SearchBar")],1)},N=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("form",{on:{submit:function(e){e.preventDefault()}}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Github Username",outline:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{block:"",color:"secondary",dark:"",to:{name:"search",params:{userName:e.userName}}},on:{click:function(t){return e.$emit("get-userslist",e.userName)}}},[e._v("Search")])],1)],1)],1)])},T=[],R={name:"SearchBar",data:function(){return{userName:""}}},O=R,j=r("a523"),S=r("0e8f"),C=r("a722"),$=r("2677"),U=Object(u["a"])(O,w,T,!1,null,null,null),k=U.exports;p()(U,{VBtn:v["a"],VContainer:j["a"],VFlex:S["a"],VLayout:C["a"],VTextField:$["a"]});var E={name:"HomeView",components:{SearchBar:k}},F=E,B=Object(u["a"])(F,y,N,!1,null,null,null),M=B.exports;p()(B,{VContainer:j["a"]});var P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("SearchBar",{on:{"get-userslist":e.getUsersList}}),r("UsersList",{attrs:{usersList:e.usersList}})],1)},D=[],A=r("bc3a"),q=r.n(A),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[r("v-card",[r("v-list",{attrs:{subheader:""}},[r("v-subheader",[e._v("Displaying top "+e._s(e.usersList.length)+" result(s)")]),e._l(e.usersList,function(t){return r("v-list-tile",{key:t.id,attrs:{avatar:"",to:{name:"repositories",params:{userName:t.login}}}},[r("v-list-tile-avatar",[r("img",{attrs:{src:t.avatar_url}})]),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.login))])],1)],1)})],2)],1)],1)],1)],1)},H=[],J={name:"UsersList",components:{},props:["usersList"]},I=J,z=r("b0af"),K=r("8860"),Q=r("ba95"),W=r("c954"),X=r("5d23"),Y=r("e0c7"),Z=Object(u["a"])(I,G,H,!1,null,null,null),ee=Z.exports;p()(Z,{VCard:z["a"],VContainer:j["a"],VFlex:S["a"],VLayout:C["a"],VList:K["a"],VListTile:Q["a"],VListTileAvatar:W["a"],VListTileContent:X["a"],VListTileTitle:X["c"],VSubheader:Y["a"]});var te={name:"SearchResultsView",components:{UsersList:ee,SearchBar:k},data:function(){return{userName:"",usersList:[]}},created:function(){var e=this;this.userName=this.$route.params.userName,q.a.get("https://api.github.com/search/users?q=".concat(this.userName)).then(function(t){e.usersList=t.data.items})},methods:{getUsersList:function(e){var t=this;q.a.get("https://api.github.com/search/users?q=".concat(e)).then(function(e){t.usersList=e.data.items})}}},re=te,ae=Object(u["a"])(re,P,D,!1,null,null,null),ne=ae.exports;p()(ae,{VContainer:j["a"]});var se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("RepositoriesList",{attrs:{repositoriesList:e.repositoriesList}})],1)},ie=[],oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[r("v-card",[r("v-list",{attrs:{subheader:"","three-line":""}},[r("v-subheader",[e._v("The user has "+e._s(e.repositoriesList.length)+" repositories")]),r("v-divider"),e._l(e.repositoriesList,function(t){return r("v-list-tile",{key:t.id,attrs:{to:{name:"readme",params:{repoName:t.full_name}}}},[r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.full_name))]),r("v-list-tile-sub-title",[e._v(e._s(t.description))])],1)],1)})],2)],1)],1)],1)],1)},le=[],ue={name:"RepositoriesList",props:["repositoriesList"]},ce=ue,pe=r("ce7e"),me=Object(u["a"])(ce,oe,le,!1,null,null,null),ve=me.exports;p()(me,{VCard:z["a"],VContainer:j["a"],VDivider:pe["a"],VFlex:S["a"],VLayout:C["a"],VList:K["a"],VListTile:Q["a"],VListTileContent:X["a"],VListTileSubTitle:X["b"],VListTileTitle:X["c"],VSubheader:Y["a"]});var fe={name:"RepositoriesView",components:{RepositoriesList:ve},data:function(){return{userName:"",userRepositoryURL:"",repositoriesList:[]}},created:function(){var e=this;this.userName=this.$route.params.userName,this.userRepositoryURL="https://api.github.com/users/".concat(this.userName,"/repos"),q.a.get(this.userRepositoryURL).then(function(t){e.repositoriesList=t.data})}},de=fe,he=Object(u["a"])(de,se,ie,!1,null,null,null),be=he.exports;p()(he,{VContainer:j["a"]});var Ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("Readme",{attrs:{readme:e.readme}})],1)},_e=[],Le=(r("7f7f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("span",{domProps:{innerHTML:e._s(e.readme)}})])],1)],1)}),ge=[],xe={name:"Readme",props:["readme"]},ye=xe,Ne=Object(u["a"])(ye,Le,ge,!1,null,null,null),we=Ne.exports;p()(Ne,{VContainer:j["a"],VFlex:S["a"],VLayout:C["a"]});var Te=r("0e54"),Re={name:"ReadmeView",components:{Readme:we},data:function(){return{repoName:"",contentURL:"",repoFiles:[],readme:""}},created:function(){var e=this;this.repoName=this.$route.params.repoName,this.contentURL="https://api.github.com/repos/".concat(this.repoName,"/contents/"),q.a.get(this.contentURL).then(function(t){e.repoFiles=t.data;for(var r=0;r<e.repoFiles.length;r++)if("README.MD"===e.repoFiles[r].name.toUpperCase())return void q.a.get(e.repoFiles[r].download_url).then(function(t){e.readme=Te(t.data)});e.readme=Te("### The current repository does not have a read me file")})}},Oe=Re,je=Object(u["a"])(Oe,Ve,_e,!1,null,null,null),Se=je.exports;p()(je,{VContainer:j["a"]}),a["a"].use(x["a"]);var Ce=new x["a"]({routes:[{path:"/",name:"home",component:M},{path:"/search/:userName",name:"search",component:ne},{path:"/repositories/:userName",name:"repositories",component:be},{path:"/readme/:repoName",name:"readme",component:Se}]});a["a"].config.productionTip=!1,new a["a"]({router:Ce,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.09aa384e.js.map