(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1051:function(e,a,l){"use strict";l.r(a);var t=l(155),r=(l(164),l(128)),i=(l(127),l(158)),o={blocks:{echartLineBlock:{type:"chart",style:{width:"100%",height:"500px"},data:{title:"折线图表",legend:["邮件营销","联盟广告"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series1:[120,132,101,134,90,230,210]},options:{BASE:"LINE",series:[{name:"邮件营销",stack:"总量",data:"data.series1"},{name:"联盟广告",stack:"总量",data:[220,182,191,234,290,330,310]}]},events:{}}}},s={data:function(){return{init:!1}},mounted:function(){if(r.default&&r.default.blocks&&r.default.blocks["chart-line"])this.init=!0;else{["text","inputnumber","select"].reduce((function(e,a){return Object.assign(e,Object(t.a)({},a,i.b[a]))}),{});r.default.block("chart-line",o),this.init=!0}}},b=l(1),p=Object(b.a)(s,(function(){var e=this.$createElement,a=this._self._c||e;return this.init?a("ams-block",{staticClass:"demo",attrs:{name:"chart-line"}}):this._e()}),[],!1,null,null,null);a.default=p.exports},127:function(e,a,l){"use strict";var t=l(0),r=(l(134),l(132)),i=l.n(r),o=l(128),s=l(139),b=l(135),p=l.n(b),u=(l(136),l(137)),c=l.n(u),n=l(138),d=l.n(n);t.default.use(i.a),t.default.use(o.default),console.log("ams init config"),t.default.use(c.a),t.default.use(d.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(s.a,{languages:{javascript:p.a}}),o.default.config({resource:{api:{withCredentials:!1}}})},158:function(e,a,l){"use strict";l.d(a,"a",(function(){return t})),l.d(a,"b",(function(){return r}));var t={id:1,text:"双11活动",date:1539792e6,time:"11:23",datetime:1539772664e3,switch:1,password:"abcdefg",textarea:"双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动",color:"#f00",rate:3.7,radio:"d",checkbox:"b,c",select:"a,b,c",cascader:"zujian,form,checkbox",transfer:"b,c",datetimerange:"1547568120000,1551290400000",slider:55,progress:80,number:28,union:"aaa",inputnumber:1,image:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",headimage:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",file:"http://b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",video:"https://1251962819.vod2.myqcloud.com/54067453vodtransgzp125",audio:"https://a.vpimg2.com/upload/upimg2/i/9b0e909ed263b25c.mp3",simpleObject:{text:"2",date:15438528e5},multiObject:{date:15444576e5,checkbox:"1",ArrayArray:[["4","324","234"]],ArrayObject:[{text:"2342",date:15457536e5},{text:"234",date:15451488e5}]},simpleArray:["3","1","2"],ArrayArray:[["23","23"]],editor:"<h1>Editor 编辑器</h1><h2>二级标题</h2><h3>三级标题</h3><h4>四级标题</h4><p>普通段落</p>",markdown:"# Markdown 编辑器",tag:[{id:"2001",name:"aaaa.bbb"}]},r={id:{type:"text",label:"id"},text:{type:"text",label:"文本",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{"suffix-icon":"el-icon-service"}},date:{type:"date",label:"日期"},time:{type:"time",label:"时间"},datetime:{type:"datetime",label:"日期时间"},switch:{type:"switch",label:"开关"},password:{type:"password",label:"密码"},textarea:{type:"textarea",label:"文本框"},color:{type:"color",label:"颜色"},rate:{type:"rate",label:"评分"},radio:{type:"radio",label:"单选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},checkbox:{type:"checkbox",label:"多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},cascader:{type:"cascader",label:"级联选择",props:{options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},transfer:{type:"transfer",label:"穿梭框",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]}},datetimerange:{type:"datetimerange",label:"时间范围",props:{type:"datetimerange"}},slider:{type:"slider",label:"滑块"},progress:{type:"progress",label:"进度"},inputnumber:{type:"inputnumber",label:"数字输入"},image:{type:"image",label:"图片上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},headimage:{type:"headimage",label:"头像",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},file:{type:"file",label:"文件上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},video:{type:"video",label:"视频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},audio:{type:"audio",label:"音频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},editor:{type:"editor",label:"富文本"},markdown:{type:"markdown",label:"内容"},simpleObject:{type:"object",label:"simpleObject",fields:{text:{type:"text",label:"rule2",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}},multiObject:{type:"object",label:"multiObject",fields:{date:{type:"date",label:"date"},checkbox:{type:"checkbox",label:"checkbox",props:{options:{1:"黄金屋"}}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},ArrayObject:{type:"array",label:"ArrayObject",field:{type:"object",label:"object",fields:{text:{type:"text",label:"text",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}}}}},simpleArray:{type:"array",label:"simpleArray",field:{type:"text",label:"text"}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},union:{type:"union",label:"union",current:"text",fields:{date:{type:"timerange",label:"timerange1"},text:{type:"text",label:"text1",default:"sss"}}},tag:{type:"tag",label:"标签",props:{placeholder:"请输入标签",action:"https://www.easy-mock.com/mock/5a0023effbbb09615044cb82/tag",successCode:200,closable:!0}}}},164:function(e,a,l){"use strict";var t=l(64),r=l(165);t(t.P+t.F*!l(153)([].reduce,!0),"Array",{reduce:function(e){return r(this,e,arguments.length,arguments[1],!1)}})},165:function(e,a,l){var t=l(69),r=l(67),i=l(68),o=l(66);e.exports=function(e,a,l,s,b){t(a);var p=r(e),u=i(p),c=o(p.length),n=b?c-1:0,d=b?-1:1;if(l<2)for(;;){if(n in u){s=u[n],n+=d;break}if(n+=d,b?n<0:c<=n)throw TypeError("Reduce of empty array with no initial value")}for(;b?n>=0:c>n;n+=d)n in u&&(s=a(s,u[n],n,p));return s}}}]);