webpackJsonp([9],{GMSl:function(t,e){},mog1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),l={data:function(){return{pagination:{current:1,total:null,size:6},dialogVisible:!1,form:{}}},created:function(){this.getStudentInfo()},methods:{getStudentInfo:function(){var t=this;this.$axios("/api/students/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getStudentInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getStudentInfo()},checkGrade:function(t){var e=this;this.dialogVisible=!0,this.$axios("/api/student/"+t).then(function(t){e.form=t.data.data})},deleteById:function(t){var e=this;this.$confirm("确定删除当前学生吗？删除后无法恢复","Warning",{confirmButtonText:"确定删除",cancelButtonText:"算了,留着吧",type:"danger"}).then(function(){e.$axios({url:"/api/student/"+t,method:"delete"}).then(function(t){e.getStudentInfo()})}).catch(function(){})},submit:function(){var t=this;this.dialogVisible=!1,this.$axios({url:"/api/student",method:"put",data:i()({},this.form)}).then(function(e){console.log(e),200==e.data.code&&t.$message({message:"更新成功",type:"success"}),t.getStudentInfo()})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("el-table",{attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"studentName",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"学院",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"major",label:"专业",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"clazz",label:"班级",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tel",label:"联系方式",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.checkGrade(e.row.studentId)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteById(e.row.studentId)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[6,10],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"编辑试卷信息",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("section",{staticClass:"update"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.form.studentName,callback:function(e){t.$set(t.form,"studentName",e)},expression:"form.studentName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{model:{value:t.form.institute,callback:function(e){t.$set(t.form,"institute",e)},expression:"form.institute"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{model:{value:t.form.major,callback:function(e){t.$set(t.form,"major",e)},expression:"form.major"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"年级"}},[a("el-input",{model:{value:t.form.grade,callback:function(e){t.$set(t.form,"grade",e)},expression:"form.grade"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"班级"}},[a("el-input",{model:{value:t.form.clazz,callback:function(e){t.$set(t.form,"clazz",e)},expression:"form.clazz"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-input",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"电话号码"}},[a("el-input",{model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submit()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var s=a("VU/8")(l,o,!1,function(t){a("GMSl")},"data-v-d9d7cdd2",null);e.default=s.exports}});