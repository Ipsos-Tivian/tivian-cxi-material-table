(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docz/examples/15-example-editable.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=n("./node_modules/react/index.js"),u=n.n(d),m=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./docz/utils/Playground.jsx"),p=n("./src/material-table.js"),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).layout=null,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=Object(a.a)(e,["components"]);return u.a.createElement(m.MDXTag,{name:"wrapper",components:t},u.a.createElement(m.MDXTag,{name:"h1",components:t,props:{id:"editable-examples"}},"Editable Examples"),u.a.createElement(c.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  editable={{\n    onRowAdd: newData =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* const data = this.state.data;\n        data.push(newData);\n        this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n    onRowUpdate: (newData, oldData) =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* const data = this.state.data;\n    const index = data.indexOf(oldData);\n    data[index] = newData;                \n    this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n    onRowDelete: oldData =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* let data = this.state.data;\n    const index = data.indexOf(oldData);\n    data.splice(index, 1);\n    this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n  }}\n/>",__scope:{props:this?this.props:n,Playground:c.a,MaterialTable:p.b},__codesandbox:"undefined"},u.a.createElement(p.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],editable:{onRowAdd:function(e){return new Promise(function(e,t){setTimeout(function(){e()},1e3)})},onRowUpdate:function(e,t){return new Promise(function(e,t){setTimeout(function(){e()},1e3)})},onRowDelete:function(e){return new Promise(function(e,t){setTimeout(function(){e()},1e3)})}}})))}}]),t}(u.a.Component);b.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,t,n){"use strict";var a=n("./node_modules/docz/dist/index.esm.js"),o=n("./node_modules/codemirror/lib/codemirror.js");n.n(o).a.defaults.viewportMargin=1/0,t.a=a.c}}]);
//# sourceMappingURL=docz-examples-15-example-editable.333f4eaa71a8b50a63aa.js.map