(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc3bdc0a"],{"13a1":function(t,e,a){},"4ac7":function(t,e,a){"use strict";var l=a("c649"),s=a.n(l);s.a},5276:function(t,e,a){"use strict";var l=a("d007"),s=a.n(l);s.a},"9cb9":function(t,e,a){"use strict";var l=a("13a1"),s=a.n(l);s.a},b9b6:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"tab clearfix"},[a("li",{staticClass:"item",class:{current:1==t.num},on:{click:function(e){return t.change(1)}}},[t._v("悬赏任务")]),a("li",{staticClass:"item",class:{current:2==t.num},on:{click:function(e){return t.change(2)}}},[t._v("我的任务")])]),a("div",{staticClass:"content"},[a("ShareTable",{directives:[{name:"show",rawName:"v-show",value:1==t.num,expression:"num == 1"}]}),a("CompeteTable",{directives:[{name:"show",rawName:"v-show",value:2==t.num,expression:"num == 2"}]})],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-form"},[a("el-row",[a("el-form",{attrs:{inline:!0,"label-width":"80px"}},[a("el-col",{staticClass:"card",attrs:{xs:24,sm:24,md:12,lg:8,xl:7}},[a("el-form-item",{staticStyle:{width:"380px"},attrs:{label:"区域筛选"}},[a("el-cascader",{staticStyle:{width:"280px"},attrs:{placeholder:"选择区域",options:t.cities,filterable:""}})],1)],1),a("el-col",{staticClass:"card",attrs:{xs:24,sm:24,md:12,lg:8,xl:7}},[a("el-form-item",{staticStyle:{width:"380px"},attrs:{label:"企业筛选"}},[a("el-cascader",{staticStyle:{width:"280px"},attrs:{placeholder:"企业行业",options:t.guilds,filterable:""}})],1)],1),a("el-col",{staticClass:"card",attrs:{xs:24,sm:24,md:12,lg:8,xl:7}},[a("el-form-item",{staticStyle:{width:"380px"},attrs:{label:"职位筛选"}},[a("el-cascader",{staticStyle:{width:"280px"},attrs:{placeholder:"选择职位",options:t.guilds,filterable:""}})],1)],1)],1)],1)],1),a("div",[a("el-table",{attrs:{data:t.table,height:"250",border:"","row-style":{height:"34px",padding:"0px",lineHeight:"34px"},"cell-style":{padding:"0"},"header-cell-style":{background:"#F1F5FE",padding:"0px",lineHeight:"40px"}}},[a("af-table-column",{attrs:{prop:"id",label:"编号",align:"center"}}),a("af-table-column",{attrs:{prop:"cname",label:"所属企业",align:"center"}}),a("af-table-column",{attrs:{prop:"jobname",label:"职位名称",align:"center"}}),a("af-table-column",{attrs:{prop:"address",label:"工作地点",align:"center"}}),a("af-table-column",{attrs:{prop:"working",label:"工作经验",align:"center"}}),a("af-table-column",{attrs:{prop:"record",label:"学历要求",align:"center"}}),a("af-table-column",{attrs:{prop:"mstime",label:"竞聘结束日期",align:"center"}}),a("af-table-column",{attrs:{prop:"jpetime",label:"面试时间",align:"center"}}),a("af-table-column",{attrs:{prop:"aiMoenyOutside",label:"到场所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.aiMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"rdMoenyOutside",label:"面过所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.rdMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.share(e.$index,e.row)}}},[t._v("分享")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.getTask(e.$index,e.row)}}},[t._v("领任务")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"}},[t._v("查看")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogShare,width:"30%"},on:{"update:visible":function(e){t.dialogShare=e}}},[a("div",{staticClass:"share"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vshareConfig.share[0].bdUrl,expression:"vshareConfig.share[0].bdUrl"}],attrs:{type:"text"},domProps:{value:t.vshareConfig.share[0].bdUrl},on:{input:function(e){e.target.composing||t.$set(t.vshareConfig.share[0],"bdUrl",e.target.value)}}})]),a("vshare",{attrs:{vshareConfig:t.vshareConfig}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogShare=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogShare=!1}}},[t._v("确 定")])],1)],1)],1)},n=[],r=a("52bb"),o=a("b810"),c=a("4260"),u={name:"ShareTable",data:function(){return{table:[{id:"",cname:"",jobname:"",address:"",working:"",record:"",mstime:"",jpetime:"",aiMoenyOutside:"",rdMoenyOutside:"",msid:""}],lists:{guid:"",tel:"tel",limit:"1",curr:"5"},cities:[{value:"zhinan",label:"广东省",children:[{value:"guangzhoushi",label:"广州市",children:[{value:"haizhiqu",label:"海珠区"},{value:"baiyunqu",label:"白云区"},{value:"yuexiuqu",label:"越秀区"},{value:"tianhequ",label:"天河区"}]},{value:"shenzhenshi",label:"深圳市",children:[{value:"nanshanqu",label:"南山区"},{value:"baoanqu",label:"宝安区"}]}]}],guilds:[{value:"zhinan",label:"广东省"}],dialogShare:!1,vshareConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{},share:[{bdUrl:""}],tableIndex:""}}},created:function(){this.jobList()},methods:{jobList:function(){var t=this;this.lists.guid=Object(o["a"])(),this.lists.tel=Object(c["a"])(this.lists.tel),Object(r["g"])(this.lists).then((function(e){t.table=e.data.data}))},getTask:function(t){Object(r["f"])({guid:this.lists.guid,tel:this.lists.tel,msid:this.table[t].msid}).then((function(t){}))},share:function(t){var e=this;this.dialogShare=!0,Object(r["o"])({msid:this.table[t].msid,guid:this.lists.guid,tel:this.lists.tel}).then((function(t){e.vshareConfig.share[0].bdUrl=t.data.data.urlpath}))}}},d=u,h=(a("4ac7"),a("623f")),b=Object(h["a"])(d,i,n,!1,null,"4a08c967",null),m=b.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{attrs:{data:t.table,height:"250",border:"","row-style":{height:"34px",padding:"0px",lineHeight:"34px"},"cell-style":{padding:"0"},"header-cell-style":{background:"#F1F5FE",padding:"0px",lineHeight:"40px"}}},[a("af-table-column",{attrs:{prop:"id",label:"编号",align:"center"}}),a("af-table-column",{attrs:{prop:"cname",label:"所属企业",align:"center"}}),a("af-table-column",{attrs:{prop:"jobname",label:"职位名称",align:"center"}}),a("af-table-column",{attrs:{prop:"address",label:"工作地点",align:"center"}}),a("af-table-column",{attrs:{prop:"working",label:"工作经验",align:"center"}}),a("af-table-column",{attrs:{prop:"record",label:"学历要求",align:"center"}}),a("af-table-column",{attrs:{prop:"mstime",label:"竞聘结束日期",align:"center"}}),a("af-table-column",{attrs:{prop:"jpetime",label:"面试时间",align:"center"}}),a("af-table-column",{attrs:{prop:"aiMoenyOutside",label:"到场所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.aiMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"rdMoenyOutside",label:"面过所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.rdMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.share(e.$index,e.row)}}},[t._v("分享")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.getTask(e.$index,e.row)}}},[t._v("领任务")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"}},[t._v("查看")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogShare,width:"30%"},on:{"update:visible":function(e){t.dialogShare=e}}},[a("div",{staticClass:"share"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vshareConfig.share[0].bdUrl,expression:"vshareConfig.share[0].bdUrl"}],attrs:{type:"text"},domProps:{value:t.vshareConfig.share[0].bdUrl},on:{input:function(e){e.target.composing||t.$set(t.vshareConfig.share[0],"bdUrl",e.target.value)}}})]),a("vshare",{attrs:{vshareConfig:t.vshareConfig}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogShare=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogShare=!1}}},[t._v("确 定")])],1)],1)],1)},f=[],g={name:"CompeteTable",data:function(){return{table:[{id:"",cname:"",jobname:"",address:"",working:"",record:"",mstime:"",jpetime:"",aiMoenyOutside:"",rdMoenyOutside:"",msid:""}],lists:{guid:"",tel:"tel",limit:"1",curr:"5"},dialogShare:!1,vshareConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{},share:[{bdUrl:""}],tableIndex:""}}},created:function(){this.jobList()},methods:{jobList:function(){var t=this;this.lists.guid=Object(o["a"])(),this.lists.tel=Object(c["a"])(this.lists.tel),Object(r["g"])(this.lists).then((function(e){t.table=e.data.data,console.log(e)}))},getTask:function(t){Object(r["f"])({guid:this.lists.guid,tel:this.lists.tel,msid:this.table[t].msid}).then((function(t){console.log(t)}))},share:function(t,e){var a=this;this.dialogShare=!0,Object(r["o"])({msid:this.table[t].msid,guid:this.lists.guid,tel:this.lists.tel}).then((function(t){a.vshareConfig.share[0].bdUrl=t.data.data.urlpath,console.log(a.vshareConfig.share[0].bdUrl)}))}}},v=g,x=(a("9cb9"),Object(h["a"])(v,p,f,!1,null,"7d77b6ff",null)),C=x.exports,y={name:"Task",components:{ShareTable:m,CompeteTable:C},data:function(){return{num:1}},methods:{change:function(t){this.num=t}}},w=y,_=(a("5276"),Object(h["a"])(w,l,s,!1,null,"74a455d5",null));e["default"]=_.exports},c649:function(t,e,a){},d007:function(t,e,a){}}]);
//# sourceMappingURL=chunk-cc3bdc0a.55ce687c.js.map