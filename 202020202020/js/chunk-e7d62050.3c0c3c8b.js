(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7d62050"],{"10ad":function(t,e,a){},"5d56":function(t,e,a){},"8fca":function(t,e,a){},ac9f:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))},b9b6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"tab clearfix"},[a("li",{staticClass:"item",class:{current:1==t.num},on:{click:function(e){return t.change(1)}}},[t._v("悬赏任务")]),a("li",{staticClass:"item",class:{current:2==t.num},on:{click:function(e){return t.change(2)}}},[t._v("我的任务")])]),a("div",{staticClass:"content"},[a("RewardTask",{directives:[{name:"show",rawName:"v-show",value:1==t.num,expression:"num == 1"}]}),a("MyTask",{directives:[{name:"show",rawName:"v-show",value:2==t.num,expression:"num == 2"}]})],1)])},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{attrs:{data:t.table,height:"440",border:"","row-style":{height:"34px",padding:"0px",lineHeight:"34px"},"cell-style":{padding:"0"},"header-cell-style":{background:"#F1F5FE",padding:"0px",lineHeight:"40px"}}},[a("af-table-column",{attrs:{prop:"id",label:"编号",align:"center",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),a("af-table-column",{attrs:{prop:"cname",label:"所属企业",align:"center"}}),a("af-table-column",{attrs:{prop:"jobname",label:"职位名称",align:"center"}}),a("af-table-column",{attrs:{prop:"address",label:"工作地点",align:"center"}}),a("af-table-column",{attrs:{prop:"working",label:"工作经验",align:"center"}}),a("af-table-column",{attrs:{prop:"record",label:"学历要求",align:"center"}}),a("af-table-column",{attrs:{prop:"jpetime",label:"竞聘结束日期",align:"center"}}),a("af-table-column",{attrs:{prop:"mstime",label:"面试时间",align:"center"}}),a("af-table-column",{attrs:{prop:"aiMoenyOutside",label:"到场所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.rdMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"rdMoenyOutside",label:"面过所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.aiMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"name",label:"操作",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.share(e.$index,e.row)}}},[t._v("分享")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{class:t._f("addclassStatus")(e.row.state),attrs:{type:"text",size:"small",disabled:t._f("isClick")(e.row.state)},on:{click:function(a){return t.getTask(e.$index,e.row)}}},[t._v(t._s(t._f("taskState")(e.row.state)))]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"}},[t._v("查看")])]}}])})],1)],1),a("div",{staticClass:"block",staticStyle:{width:"520px",margin:"15px auto","text-align":"center"}},[a("el-pagination",{attrs:{"current-page":t.lists.limit,"page-size":t.lists.curr,layout:"prev, pager, next, jumper",total:t.rows},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.lists,"limit",e)},"update:current-page":function(e){return t.$set(t.lists,"limit",e)}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogShare,width:"30%"},on:{"update:visible":function(e){t.dialogShare=e}}},[t.dialogShare?a("vueVshare"):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogShare=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogShare=!1}}},[t._v("确 定")])],1)],1)],1)},l=[],r=a("e44e"),o=a("52bb"),c=a("4260"),u={name:"RewardTask",components:{vueVshare:r["a"]},data:function(){return{rows:1,table:[{id:"",cname:"",jobname:"",address:"",working:"",record:"",mstime:"",jpetime:"",aiMoenyOutside:"",rdMoenyOutside:"",msid:"",state:""}],lists:{guid:"ssc-token",tel:"tel",limit:1,curr:10},cities:[{value:"zhinan",label:"广东省",children:[{value:"guangzhoushi",label:"广州市",children:[{value:"haizhiqu",label:"海珠区"},{value:"baiyunqu",label:"白云区"},{value:"yuexiuqu",label:"越秀区"},{value:"tianhequ",label:"天河区"}]},{value:"shenzhenshi",label:"深圳市",children:[{value:"nanshanqu",label:"南山区"},{value:"baoanqu",label:"宝安区"}]}]}],guilds:[{value:"zhinan",label:"广东省"}],dialogShare:!1,defaultConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{bdUrl:""},share:[{bdSize:24}],slide:!1,image:!1,selectShare:!1},disabled:!1}},created:function(){this.lists.guid=Object(c["b"])(this.lists.guid),this.lists.tel=Object(c["a"])(this.lists.tel),this.jobList()},filters:{taskState:function(t){switch(t){case 1:return"领任务";case 2:return"已领任务";default:return t}},addclassStatus:function(t){switch(t){case 1:return"StatusTypeColorA";case 2:return"StatusTypeColorB";default:return t}},isClick:function(t){switch(t){case 1:return!1;case 2:return!0;default:return t}}},methods:{jobList:function(){var t=this;Object(o["g"])(this.lists).then((function(e){t.table=e.data.data,t.rows=e.data.listcount}))},share:function(t){var e=this;this.dialogShare=!0,Object(o["o"])({msid:this.table[t].msid,guid:this.lists.guid,tel:this.lists.tel}).then((function(t){e.$store.commit("SAVE_URL",t.data.data.urlpath),e.dialogShare=!0}))},getTask:function(t,e){var a=this;Object(o["f"])({tel:this.lists.tel,guid:this.lists.guid,msid:this.table[t].msid}).then((function(t){(t.data.Message="success")&&(a.disabled=!0,a.$alert("领取任务成功",{confirmButtonText:"确定",center:!0,callback:function(t){a.$message({type:"info",message:"action: ".concat(t)})}}))}))},handleSizeChange:function(t){this.lists.curr=t||this.lists.curr,this.jobList()},handleCurrentChange:function(t){this.lists.limit=t||this.lists.limit,this.jobList()}}},d=u,h=(a("eac6"),a("623f")),f=Object(h["a"])(d,n,l,!1,null,"62334e84",null),g=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{attrs:{data:t.table,height:"440",border:"","row-style":{height:"34px",padding:"0px",lineHeight:"34px"},"cell-style":{padding:"0"},"header-cell-style":{background:"#F1F5FE",padding:"0px",lineHeight:"40px"}}},[a("af-table-column",{attrs:{prop:"id",label:"编号",align:"center",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),a("af-table-column",{attrs:{prop:"cname",label:"所属企业",align:"center"}}),a("af-table-column",{attrs:{prop:"jobname",label:"职位名称",align:"center"}}),a("af-table-column",{attrs:{prop:"address",label:"工作地点",align:"center"}}),a("af-table-column",{attrs:{prop:"working",label:"工作经验",align:"center"}}),a("af-table-column",{attrs:{prop:"record",label:"学历要求",align:"center"}}),a("af-table-column",{attrs:{prop:"jpetime",label:"竞聘结束日期",align:"center"}}),a("af-table-column",{attrs:{prop:"mstime",label:"面试时间",align:"center"}}),a("af-table-column",{attrs:{prop:"rdMoenyOutside",label:"到场所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.rdMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"aiMoenyOutside",label:"面过所获佣金",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.aiMoenyOutside)+" ")]}}])}),a("af-table-column",{attrs:{prop:"name",label:"操作",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"},on:{click:function(a){return t.share(e.$index,e.row)}}},[t._v("分享")]),a("span",{staticClass:"commonColor",staticStyle:{margin:"0 5px","font-size":"12px"}},[t._v("|")]),a("el-button",{staticClass:"commonColor",attrs:{type:"text",size:"small"}},[t._v("查看")])]}}])})],1)],1),a("div",{staticClass:"block",staticStyle:{width:"520px",margin:"15px auto","text-align":"center"}},[a("el-pagination",{attrs:{"current-page":t.lists.limit,"page-size":t.lists.curr,layout:"prev, pager, next, jumper",total:t.rows},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.lists,"limit",e)},"update:current-page":function(e){return t.$set(t.lists,"limit",e)}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogShare,width:"30%"},on:{"update:visible":function(e){t.dialogShare=e}}},[t.dialogShare?a("vueVshare"):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogShare=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogShare=!1}}},[t._v("确 定")])],1)],1)],1)},p=[],b={name:"MyTask",components:{vueVshare:r["a"]},data:function(){return{rows:1,table:[{id:"",cname:"",jobname:"",address:"",working:"",record:"",mstime:"",jpetime:"",aiMoenyOutside:"",rdMoenyOutside:"",msid:""}],lists:{guid:"ssc-token",tel:"tel",limit:1,curr:10},dialogShare:!1,defaultConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{bdUrl:""},share:[{bdSize:24}],slide:!1,image:!1,selectShare:!1}}},created:function(){this.lists.guid=Object(c["b"])(this.lists.guid),this.lists.tel=Object(c["a"])(this.lists.tel),this.competeList()},methods:{competeList:function(){var t=this;Object(o["d"])(this.lists).then((function(e){t.table=e.data.data,t.rows=e.data.listcount}))},getTask:function(t){Object(o["f"])({guid:this.lists.guid,tel:this.lists.tel,msid:this.table[t].msid}).then((function(t){}))},share:function(t,e){var a=this;this.dialogShare=!0,Object(o["o"])({msid:this.table[t].msid,guid:this.lists.guid,tel:this.lists.tel}).then((function(t){a.$store.commit("SAVE_URL",t.data.data.urlpath),a.dialogShare=!0}))},handleSizeChange:function(t){this.lists.curr=t||this.lists.curr,this.jobList()},handleCurrentChange:function(t){this.lists.limit=t||this.lists.limit,this.jobList()}}},v=b,C=(a("d1c0"),Object(h["a"])(v,m,p,!1,null,"570a864a",null)),w=C.exports,_={name:"Task",components:{RewardTask:g,MyTask:w},data:function(){return{num:1}},methods:{change:function(t){this.num=t}}},y=_,S=(a("dec4"),Object(h["a"])(y,i,s,!1,null,"5acc6bdc",null));e["default"]=S.exports},d1c0:function(t,e,a){"use strict";var i=a("10ad"),s=a.n(i);s.a},dec4:function(t,e,a){"use strict";var i=a("5d56"),s=a.n(i);s.a},e44e:function(t,e,a){"use strict";var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bdsharebuttonbox"},t._l(t.defaultConfig.shareList,(function(t){return a("a",{key:t.id,class:"bds_"+t,attrs:{"data-cmd":t}})})),0)},n=[],l=a("ac9f"),r=(i={props:{JobUrl:String},data:function(){return{defaultConfig:{shareList:["more","qzone","tsina","tqq","renren","weixin"],common:{bdUrl:this.$store.state.url},share:[{bdSize:24}],slide:!1,image:!1,selectShare:!1}}}},Object(l["a"])(i,"props",["vshareConfig"]),Object(l["a"])(i,"mounted",(function(){console.log(this.vshareConfig),console.log("index###",this.defaultConfig.common.bdUrl),this.vshareConfig&&(this.vshareConfig.shareList&&(this.defaultConfig.shareList=this.vshareConfig.shareList),this.vshareConfig.shareList,this.vshareConfig.share&&(this.defaultConfig.share=this.vshareConfig.share),this.vshareConfig.slide&&(this.defaultConfig.slide=this.vshareConfig.slide),this.vshareConfig.image&&(this.defaultConfig.image=this.vshareConfig.image),this.vshareConfig.selectShare&&(this.defaultConfig.selectShare=this.vshareConfig.selectShare)),window._bd_share_config=this.defaultConfig,document.getElementsByTagName("body")[0].appendChild(document.createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion="+~(-new Date/36e5)})),i),o=r,c=a("623f"),u=Object(c["a"])(o,s,n,!1,null,null,null);e["a"]=u.exports},eac6:function(t,e,a){"use strict";var i=a("8fca"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-e7d62050.3c0c3c8b.js.map