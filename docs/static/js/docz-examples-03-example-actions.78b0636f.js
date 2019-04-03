(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docz/examples/03-example-actions.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return k});var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),o=t.n(a),r=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=t.n(r),l=t("./node_modules/@babel/runtime/helpers/createClass.js"),c=t.n(l),s=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=t.n(s),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),d=t.n(m),h=t("./node_modules/@babel/runtime/helpers/inherits.js"),p=t.n(h),b=t("./node_modules/react/index.js"),f=t.n(b),_=t("./node_modules/@mdx-js/tag/dist/index.js"),y=t("./docz/utils/Playground.jsx"),C=t("./src/material-table.js"),Y=t("./node_modules/@material-ui/core/colors/red.js"),w=t.n(Y),k=function(e){function n(e){var t;return i()(this,n),(t=u()(this,d()(n).call(this,e))).layout=null,t}return p()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=o()(e,["components"]);return f.a.createElement(_.MDXTag,{name:"wrapper",components:n},f.a.createElement(_.MDXTag,{name:"h1",components:n,props:{id:"actions-examples"}},"Actions Examples"),f.a.createElement(_.MDXTag,{name:"h2",components:n,props:{id:"default-actions"}},"Default Actions"),f.a.createElement(_.MDXTag,{name:"p",components:n},"Table has export, column show/hide actions by default."),f.a.createElement(y.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Default Actions\"\n  options={{\n    columnsButton: true,\n    exportButton: true,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:y.a,MaterialTable:C.b,red:w.a}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Default Actions",options:{columnsButton:!0,exportButton:!0}})),f.a.createElement(_.MDXTag,{name:"h2",components:n,props:{id:"custom-actions"}},"Custom Actions"),f.a.createElement(_.MDXTag,{name:"p",components:n},"You can add your custom actions. "),f.a.createElement(y.a,{__codesandbox:"undefined",__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Custom Actions\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n    rowData => ({\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      disabled: rowData.birthYear >= 2000,\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    }),\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n      iconProps: {\n        style: {\n          fontSize: 30,\n          color: 'green',\n        },\n      },\n    },\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:y.a,MaterialTable:C.b,red:w.a}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Custom Actions",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)}},function(e){return{icon:"account_circle",tooltip:"Show User Info",disabled:e.birthYear>=2e3,onClick:function(e,n){alert("You clicked user "+n.name)}}},{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)},iconProps:{style:{fontSize:30,color:"green"}}}]})),f.a.createElement(_.MDXTag,{name:"h2",components:n,props:{id:"actions-with-column-index"}},"Actions with Column Index"),f.a.createElement(_.MDXTag,{name:"p",components:n},"You can change place of actions."),f.a.createElement(y.a,{__codesandbox:"undefined",__position:2,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Actions with Column Index\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n    rowData => ({\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      disabled: rowData.birthYear >= 2000,\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    }),\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n      iconProps: {\n        style: {\n          fontSize: 30,\n          color: 'green',\n        },\n      },\n    },\n  ]}\n  options={{\n    actionsColumnIndex: -1,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:y.a,MaterialTable:C.b,red:w.a}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Actions with Column Index",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)}},function(e){return{icon:"account_circle",tooltip:"Show User Info",disabled:e.birthYear>=2e3,onClick:function(e,n){alert("You clicked user "+n.name)}}},{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)},iconProps:{style:{fontSize:30,color:"green"}}}],options:{actionsColumnIndex:-1}})))}}]),n}(f.a.Component);k.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.m.js"),o=t("./node_modules/codemirror/lib/codemirror.js");t.n(o).a.defaults.viewportMargin=1/0,n.a=a.e}}]);
//# sourceMappingURL=docz-examples-03-example-actions.8b931bfa0501a62c41e0.js.map