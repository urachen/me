(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0oCu":function(t,e,n){},TH8k:function(t,e,n){"use strict";n.r(e);var a=n("OfUI"),s=n("OhUg"),o={name:"hello",components:{Cv:a.default,Autobiography:s.default},data:function(){return{tabs:[{name:"Cv",displayName:"Resume"},{name:"Autobiography",displayName:"Autobiography"}],currentTab:"Cv"}},methods:{onClose:function(){this.$router.go(-1)},onPrint:function(){this.printClick=!0,document.getElementById("btn_group").setAttribute("style","display:none;"),document.getElementsByClassName("el-tabs__header")[0].setAttribute("style","display:none;"),window.print(),document.getElementById("btn_group").setAttribute("style","display:block;"),document.getElementsByClassName("el-tabs__header")[0].setAttribute("style","display:block;")}}},r=(n("mqv9"),n("KHd+")),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center",attrs:{id:"btn_group"}},[n("el-button",{attrs:{plain:""},on:{click:t.onClose}},[t._v("Close")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.onPrint}},[t._v("Print")])],1),t._v(" "),n("div",{staticClass:"resume-tab",attrs:{id:"resume"}},[n("el-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabs,(function(e,a){return n("el-tab-pane",{key:a,attrs:{label:e.displayName,name:e.name}},[n(t.currentTab,{tag:"component",attrs:{id:"resume-content"}})],1)})),1)],1)])}),[],!1,null,"5e2adeed",null);e.default=l.exports},mqv9:function(t,e,n){"use strict";var a=n("0oCu");n.n(a).a}}]);