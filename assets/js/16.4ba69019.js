(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{166:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"lifecycle-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-hooks","aria-hidden":"true"}},[t._v("#")]),t._v(" Lifecycle Hooks")]),t._v(" "),s("p",[t._v("Vuex ORM fires several lifecycle hooks while dispatching actions, allowing you to hook into the particular points in a query lifecycle. Lifecycle hooks allows you to easily execute code each time a specific record is saved or updated in the database.")]),t._v(" "),s("p",[t._v("Supported lifecycle hooks are as follows.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("beforeCreate")])]),t._v(" "),s("li",[s("code",[t._v("afterCreate")])]),t._v(" "),s("li",[s("code",[t._v("beforeUpdate")])]),t._v(" "),s("li",[s("code",[t._v("afterUpdate")])]),t._v(" "),s("li",[s("code",[t._v("beforeDelete")])]),t._v(" "),s("li",[s("code",[t._v("afterDelete")])])]),t._v(" "),s("p",[t._v("To get started with lifecycle hooks, you can define the action with one of each name listed above.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("beforeCreate")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" record"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Do something.")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{attrs:{class:"token function"}},[t._v("afterDelete")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" record"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Do something.")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The first argument passed to the action is the action context that contains usual "),s("code",[t._v("state")]),t._v(", "),s("code",[t._v("commit")]),t._v(" or "),s("code",[t._v("dispatch")]),t._v(". The second argument is the record that is to be created or has been created. Note that the "),s("code",[t._v("record")]),t._v(" is an instance of a model.")]),t._v(" "),s("h2",{attrs:{id:"modify-the-record-to-be-saved"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-record-to-be-saved","aria-hidden":"true"}},[t._v("#")]),t._v(" Modify the Record to be Saved")]),t._v(" "),s("p",[t._v("When in "),s("code",[t._v("beforeCreate")]),t._v(" or "),s("code",[t._v("beforeUpdate")]),t._v(", you can modify the record directly.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("beforeCreate")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    model"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("published "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"cancel-the-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cancel-the-mutation","aria-hidden":"true"}},[t._v("#")]),t._v(" Cancel the Mutation")]),t._v(" "),s("p",[t._v("If you return false from "),s("code",[t._v("before")]),t._v(" hooks, that record will not be persisted to the state.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("beforeCreate")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" record"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doNotModify"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);