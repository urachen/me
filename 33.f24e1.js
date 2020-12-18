(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5NJp":function(t,a,s){},"66UK":function(t,a,s){t.exports=s.p+"img/project-b54dd.jpg"},PO9i:function(t,a,s){"use strict";var e=s("5NJp");s.n(e).a},clni:function(t,a,s){t.exports=s.p+"img/profile-sub-75a80.jpg"},lhfo:function(t,a,s){"use strict";s.r(a);var e={name:"Main",components:{MainHeader:s("3CpC").a},data:function(){return{profileImgUrl:s("8857"),profileSubImgUrl:s("clni"),projectImgUrl:s("66UK"),aboutMe:"<p>我是陳鈺青，個性正向樂觀，做事思考周全且態度積極，面對新的工作環境及事物能快速適應、學習力強，在團隊合作中具備良好的溝通能力。</p><p>喜愛旅行與攝影，藉由旅行探索未知，開闊自己的眼界，而攝影培養觀察力、美感的直覺與眼光。</p>",aboutMeDeveloper:"我是一名網頁前端工程師，因樂於研究UX使用者體驗，在開發過程中除追求美觀易讀的介面外，亦以優質友善的使用者體驗為目標。擁有後端開發經驗，在規畫制定API時，可與後端工程師合作，解決多數業務邏輯並減低前後端溝通問題。",skills:[{title:"網頁語言 / 框架",icon:"ant-design:code-outlined",contents:["HTML","CSS","JavaScript","-","Vue","Element UI","Bootstrap"],memo:"-學習中: React / Material UI"},{title:"Library / Standard",icon:"la:laptop-code",contents:["NPM","AXIOS","Webpack","Lodash","ESLint","Restful API"],memo:""},{title:"開發工具 / DevOps",icon:"la:dev",contents:["GIT","VS code","Figma","Docker","Jenkins"],memo:""}],project:"主要內容為"}},methods:{closeDialog:function(t){_.find(this.projects,(function(a){return a.key===t})).show=!1},clickProject:function(){this.$router.push({name:"Project"})},clickResume:function(){this.$router.push({name:"ResumeIndex"})}}},i=(s("PO9i"),s("KHd+")),l=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("el-row",[s("el-col",{attrs:{span:24}},[s("main-header")],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:10,xl:7,xs:24}},[s("el-image",{staticClass:"block",attrs:{src:t.profileImgUrl,fit:"cover"}})],1),t._v(" "),s("el-col",{attrs:{span:14,xl:17,xs:24}},[s("el-row",{staticClass:"profile-aboutme-top",attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:16}},[s("div",[s("div",{staticClass:"aboutme-title"},[t._v("ABOUT ME")]),t._v(" "),s("div",{staticClass:"aboutme-divider",attrs:{"data-aos":"fade-left","data-aos-duration":"2000"}}),t._v(" "),s("div",{staticClass:"normal-text",domProps:{innerHTML:t._s(t.aboutMe)}}),t._v(" "),s("el-button",{staticClass:"aboutme-btn",attrs:{plain:""},on:{click:t.clickResume}},[t._v("Download Resume")])],1)])],1),t._v(" "),s("el-row",{staticClass:"profile-aboutme-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:16}},[s("div",{staticClass:"aboutme-icon"},[s("a",{attrs:{href:"https://www.linkedin.com/in/ura-chen-7839a01b5/",target:"_blank"}},[s("i",{staticClass:"iconify",attrs:{"data-icon":"ant-design:linkedin-filled"}})]),t._v(" "),s("a",{attrs:{href:"https://www.facebook.com/yuching.chen.925/",target:"_blank"}},[s("i",{staticClass:"iconify",attrs:{"data-icon":"ant-design:facebook-filled"}})]),t._v(" "),s("a",{attrs:{href:"https://www.instagram.com/chingchenn/",target:"_blank"}},[s("i",{staticClass:"iconify",attrs:{"data-icon":"ant-design:instagram-filled"}})])])])],1)],1)],1),t._v(" "),s("el-row",{staticClass:"aboutme-sub block"},[s("el-col",{staticClass:"left-divider block fade-in",attrs:{span:3,xs:1}},[s("div")]),t._v(" "),s("el-col",{attrs:{span:21,xs:23}},[s("el-row",{staticClass:"aboutme-sub-img parallax",style:{backgroundImage:"url("+t.profileSubImgUrl+")"},attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{staticClass:"aboutme-sub-content",attrs:{span:16,xs:24}},[s("div",[s("span",{staticClass:"aboutme-sub-title"},[t._v("I am a frontend developer")]),t._v(" "),s("span",{staticClass:"normal-text"},[t._v(t._s(t.aboutMeDeveloper))])])])],1)],1)],1),t._v(" "),s("el-row",{staticClass:"skill block"},[s("el-col",{attrs:{span:24,xs:24}},[s("el-row",{attrs:{type:"flex",justify:"space-around",align:"center"}},[s("el-col",{attrs:{span:8}}),t._v(" "),s("el-col",{staticClass:"title skill-title",attrs:{span:8,xs:24}},[s("span",{attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("SKILLS")])]),t._v(" "),s("el-col",{staticClass:"row-divider",attrs:{span:8,"data-aos":"fade-left","data-aos-duration":"2000"}})],1),t._v(" "),s("el-row",{staticClass:"skill-card-group"},t._l(t.skills,(function(a){return s("el-col",{key:a.title,attrs:{span:8,xs:24,sm:24,md:12}},[s("el-card",{staticClass:"skill-card"},[s("div",{staticClass:"skill-card-content"},[s("i",{staticClass:"iconify skill-icon",attrs:{"data-icon":a.icon}}),t._v(" "),s("h3",[t._v(t._s(a.title))]),t._v(" "),t._l(a.contents,(function(a){return s("ul",{key:a,staticClass:"skill-list"},[s("li",[t._v(t._s(a))])])})),t._v(" "),s("span",{staticClass:"skill-list-memo"},[t._v(t._s(a.memo))])],2)])],1)})),1)],1)],1),t._v(" "),s("el-row",{staticClass:"project"},[s("el-col",{attrs:{span:10,offset:2,xs:{span:24,offset:0}}},[s("el-image",{staticClass:"project-image",attrs:{src:t.projectImgUrl,fit:"cover"}})],1),t._v(" "),s("el-col",{attrs:{span:9,xs:23}},[s("div",{staticClass:"project-content"},[s("span",{staticClass:"title project-title",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("PORTFOLIO")]),t._v(" "),s("div",{staticClass:"normal-text",domProps:{innerHTML:t._s(t.project)}}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.clickProject}},[t._v("Read More")])],1)]),t._v(" "),s("el-col",{staticClass:"right-divider",attrs:{span:3,xs:1,"data-aos":"fade-up","data-aos-duration":"2000"}})],1),t._v(" "),s("el-row",{staticClass:"contact"},[s("el-row",{attrs:{type:"flex",justify:"space-around",align:"center"}},[s("el-col",{staticClass:"row-divider",attrs:{span:8,"data-aos":"fade-right","data-aos-duration":"2000"}}),t._v(" "),s("el-col",{staticClass:"title contact-title",attrs:{span:8,xs:24}},[s("span",{attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("CONTACT")])]),t._v(" "),s("el-col",{attrs:{span:8}})],1),t._v(" "),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"text-gray-light text-center text-block"},[t._v("X")]),t._v(" "),s("div",{staticClass:"text-gray-light text-center"},[t._v("Feel free to contact me")])])],1),t._v(" "),s("el-row",{staticClass:"contact-list"},[s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"contact-text text-center"},[s("span",{staticClass:"contact-icon iconify",attrs:{"data-icon":"bx:bx-mobile-vibration"}}),t._v("0921-793318\n        ")])]),t._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"contact-text text-center"},[s("span",{staticClass:"contact-icon iconify",attrs:{"data-icon":"carbon:email"}}),t._v("\n          nai0225@gmail.com\n        ")])]),t._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"contact-text text-center"},[t._v("\n          Follow Me On\n          "),s("i",{staticClass:"iconify",attrs:{"data-icon":"ant-design:facebook-filled"}}),t._v(" "),s("i",{staticClass:"iconify",attrs:{"data-icon":"ant-design:instagram-filled"}})])])],1)],1)],1)}),[],!1,null,"11eb029c",null);a.default=l.exports}}]);