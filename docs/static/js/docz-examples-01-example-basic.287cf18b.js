(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docz/examples/01-example-basic.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var a=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),o=t.n(a),r=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),i=t.n(r),s=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),l=t.n(s),d=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=t.n(d),u=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=t.n(u),p=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(p),h=t("./node_modules/react/index.js"),_=t.n(h),f=t("./node_modules/@mdx-js/tag/dist/index.js"),y=t("./docz/utils/Playground.jsx"),j=t("./src/material-table.js"),g=function(e){function n(e){var t;return i()(this,n),(t=m()(this,c()(n).call(this,e))).layout=null,t}return b()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=o()(e,["components"]);return _.a.createElement(f.MDXTag,{name:"wrapper",components:n},_.a.createElement(f.MDXTag,{name:"h2",components:n,props:{id:"basic-example"}},"Basic Example"),_.a.createElement(y.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Basic\"\n  options={{\n    toolbar: false,\n    paging: false,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:y.a,MaterialTable:j.b}},_.a.createElement(j.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Basic",options:{toolbar:!1,paging:!1}})))}}]),n}(_.a.Component);g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.m.js"),o=t("./node_modules/codemirror/lib/codemirror.js");t.n(o).a.defaults.viewportMargin=1/0,n.a=a.e}}]);
//# sourceMappingURL=docz-examples-01-example-basic.d65feb96c432a952ef9f.js.map