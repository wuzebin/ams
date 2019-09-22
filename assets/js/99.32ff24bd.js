(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1197:function(e,t,o){"use strict";o.r(t);var r=o(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"案例教程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#案例教程","aria-hidden":"true"}},[e._v("#")]),e._v(" 案例教程")]),e._v(" "),o("p",[e._v("本页将会手把手教你构建一个SPA单页面应用，涉及区块包含"),o("router-link",{attrs:{to:"/block/router.html#/"}},[e._v("Router")]),e._v("、"),o("router-link",{attrs:{to:"/block/list.html"}},[e._v("List")]),e._v("、"),o("router-link",{attrs:{to:"/block/form.html"}},[e._v("Form")]),e._v("、"),o("router-link",{attrs:{to:"/block/dialog.html"}},[e._v("Dialog")])],1),e._v(" "),o("h2",{attrs:{id:"第一步：配置资源"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第一步：配置资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 第一步：配置资源")]),e._v(" "),o("p",[e._v("这一步首先设置"),o("router-link",{attrs:{to:"/api/resource.html"}},[e._v("resource")]),e._v("，api的接口规范可以查看"),o("router-link",{attrs:{to:"/api/api.html#通用数据结构"}},[e._v("接口api规范")]),e._v("，这里可以看到设置了用于接口的api和字段的属性fields")],1),e._v(" "),o("ClientOnly",[o("try-demo-spa-demo",{attrs:{blockName:"demoResource"}})],1),e._v(" "),o("h2",{attrs:{id:"第二步：基础列表"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第二步：基础列表","aria-hidden":"true"}},[e._v("#")]),e._v(" 第二步：基础列表")]),e._v(" "),o("p",[e._v("开始配置可以展示的列表页（基础展示）")]),e._v(" "),o("p",[e._v("使用"),o("router-link",{attrs:{to:"/block/list.html"}},[e._v("list")]),e._v("可以配置一个列表页的区块，这里通过区块list的resource参数名字对应注册resource的名字，即可在list区块中使用字段的属性，所以可以看到表头都是resource的label")],1),e._v(" "),o("p",[e._v("这里的"),o("router-link",{attrs:{to:"/api/action.html"}},[e._v("events")]),e._v("设置了"),o("code",[e._v("{ init: '@list' }")]),e._v("。在初始化block时，会自动执行events中的init事件，这里执行的是"),o("code",[e._v("@list")]),e._v("，会匹配注册resource中名为"),o("code",[e._v("demoResource")]),e._v("中，自动加载"),o("code",[e._v("prefix")]),e._v("+"),o("code",[e._v("list")]),e._v("的链接，即发送"),o("code",[e._v("https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/getList")]),e._v("请求，拿到数据后会设置在区块list的"),o("code",[e._v("data")]),e._v("中")],1),e._v(" "),o("ClientOnly",[o("try-demo-spa-demo",{attrs:{blockName:"demoBlock1",onlineDemo:"https://codepen.io/w3cmark/pen/GRKdpzo"}})],1),e._v(" "),o("h2",{attrs:{id:"第三步：搜索与删除"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第三步：搜索与删除","aria-hidden":"true"}},[e._v("#")]),e._v(" 第三步：搜索与删除")]),e._v(" "),o("p",[e._v("搜索的功能需要涉及配置"),o("router-link",{attrs:{to:"/api.html#operations"}},[e._v("operations")]),e._v("，将"),o("code",[e._v("slot")]),e._v("设置为"),o("code",[e._v("searchs")]),e._v("，就会展示在搜索栏中。如果搜索项太多可以试试type为"),o("code",[e._v("dropdown")]),e._v("的类型")],1),e._v(" "),o("p",[e._v("打开控制台，点击删除的时候，实际是从"),o("code",[e._v("operations")]),e._v("的"),o("code",[e._v("removeItem")]),e._v("中触发动作，会先查找"),o("code",[e._v("events")]),e._v("中的同名事件，此时可以找到"),o("code",[e._v('"removeItem": "@confirm:确认删除吗? @deleteAction @delete init"')]),e._v("（如果action的方法设置了async则支持同步执行），可以看到会先弹出"),o("code",[e._v("确认删除吗?")]),e._v("的弹窗，点击确认后执行"),o("code",[e._v("deleteAction")]),e._v("的action，在方法里会同时带上该行数据和前一个方法返回的数据，所以在控制台能捕获到删除的id，然后执行"),o("code",[e._v("@delete")]),e._v("方法，会去查找注册resource中配置的delete，匹配结果会发起"),o("code",[e._v("https://easy-mock.com/mock/5d4a8b0d51c7b6461eb9f898/ams-page-demo/delete")]),e._v("的请求，最后执行"),o("code",[e._v("@init")]),e._v("，也就是刷新列表")]),e._v(" "),o("ClientOnly",[o("try-demo-spa-demo",{attrs:{blockName:"demoBlock2",onlineDemo:"https://codepen.io/w3cmark/pen/qBWYbWe"}})],1),e._v(" "),o("h2",{attrs:{id:"第四步：新增与编辑"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第四步：新增与编辑","aria-hidden":"true"}},[e._v("#")]),e._v(" 第四步：新增与编辑")]),e._v(" "),o("p",[e._v("继续完善列表页，让它带有查询、删除按钮、新增按钮、编辑按钮，点击"),o("code",[e._v("新增按钮")]),e._v("的时候可以弹出一个空的弹窗，点击"),o("code",[e._v("编辑按钮")]),e._v("的时候，可以带上列表的内容。在新增弹窗是，因为没有"),o("code",[e._v("id")]),e._v(" "),o("code",[e._v("create_time")]),e._v(" "),o("code",[e._v("update_time")]),e._v("三个字段，所以我们用了"),o("router-link",{attrs:{to:"/block/api.html#fields"}},[e._v("fields")]),e._v("的配置，可以重写注册resource对应的field配置")],1),e._v(" "),o("ClientOnly",[o("try-demo-spa-demo",{attrs:{blockName:"demoBlock3",onlineDemo:"https://codepen.io/w3cmark/pen/KKPRVpo"}})],1),e._v(" "),o("h2",{attrs:{id:"第五步：配置导航"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第五步：配置导航","aria-hidden":"true"}},[e._v("#")]),e._v(" 第五步：配置导航")]),e._v(" "),o("p",[e._v("将上面完善的列表放入"),o("router-link",{attrs:{to:"/block/router.html#/"}},[e._v("导航Router")]),e._v("中，成为导航一个页面，点击首页可加载列表页面")],1),e._v(" "),o("ClientOnly",[o("try-demo-spa-demo",{attrs:{blockName:"demoBlock4",onlineDemo:"https://codepen.io/w3cmark/pen/zYOjrGb"}})],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);