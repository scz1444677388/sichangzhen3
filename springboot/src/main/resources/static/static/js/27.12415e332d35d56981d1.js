webpackJsonp([27],{"0eFs":function(a,t){},"5apE":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{loading:!1,key:null,allExam:null,pagination:{current:1,total:null,size:6}}},created:function(){this.getExamInfo(),this.loading=!0},methods:{getExamInfo:function(){var a=this;this.$axios("/api/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(t){a.pagination=t.data.data,a.loading=!1,console.log(a.pagination)}).catch(function(a){console.log(a)})},handleSizeChange:function(a){this.pagination.size=a,this.getExamInfo()},handleCurrentChange:function(a){this.pagination.current=a,this.getExamInfo()},search:function(){var a=this;this.$axios("/api/exams").then(function(t){if(200==t.data.code){var e=t.data.data.filter(function(t){return t.source.includes(a.key)});a.pagination.records=e}})},toExamMsg:function(a){this.$router.push({path:"/examMsg",query:{examCode:a}}),console.log(a)}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"myExam"}},[e("div",{staticClass:"title"},[a._v("我的练习")]),a._v(" "),e("div",{staticClass:"wrapper"},[e("ul",{staticClass:"top"},[e("li",{staticClass:"order"},[e("el-badge",{staticClass:"item",attrs:{value:12,type:"primary"}},[e("span",[a._v("全部")])])],1),a._v(" "),e("li",{staticClass:"order"},[e("el-badge",{staticClass:"item",attrs:{value:1,type:"primary"}},[e("span",[a._v("未开始")])])],1),a._v(" "),e("li",{staticClass:"order"},[e("el-badge",{staticClass:"item",attrs:{value:2,type:"primary"}},[e("span",[a._v("已开始")])])],1),a._v(" "),e("li",{staticClass:"order"},[e("el-badge",{staticClass:"item",attrs:{value:1}},[e("span",[a._v("已过期")])])],1),a._v(" "),e("li",{staticClass:"search-li"},[e("div",{staticClass:"icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.key,expression:"key"}],staticClass:"search",attrs:{type:"text",placeholder:"试卷名称"},domProps:{value:a.key},on:{input:function(t){t.target.composing||(a.key=t.target.value)}}}),e("i",{staticClass:"el-icon-search"})])]),a._v(" "),e("li",[e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.search()}}},[a._v("搜索试卷")])],1)]),a._v(" "),e("ul",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"paper"},a._l(a.pagination.records,function(t,i){return e("li",{key:i,staticClass:"item"},[e("h4",{on:{click:function(e){a.toExamMsg(t.examCode)}}},[a._v(a._s(t.source))]),a._v(" "),e("p",{staticClass:"name"},[a._v(a._s(t.source)+"-"+a._s(t.description))]),a._v(" "),e("div",{staticClass:"info"},[e("i",{staticClass:"el-icon-loading"}),e("span",[a._v(a._s(t.examDate.substr(0,10)))]),a._v(" "),e("i",{staticClass:"iconfont icon-icon-time"}),null!=t.totalTime?e("span",[a._v("限时"+a._s(t.totalTime)+"分钟")]):a._e(),a._v(" "),e("i",{staticClass:"iconfont icon-fenshu"}),e("span",[a._v("满分"+a._s(t.totalScore)+"分")])])])}),0),a._v(" "),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":a.pagination.current,"page-sizes":[6,10,20,40],"page-size":a.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:a.pagination.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1)])])},staticRenderFns:[]};var n=e("VU/8")(i,s,!1,function(a){e("0eFs")},"data-v-038bb41b",null);t.default=n.exports}});