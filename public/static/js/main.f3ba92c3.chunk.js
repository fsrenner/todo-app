(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(59)},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(13),c=n.n(r),l=n(4),i=n(29),u=n(6),d=n(2),s=n(5),m=n.n(s),h=function(){return function(t){return m.a.get("http://localhost:3000/todos").then(function(e){var n=Array.isArray(e.data)?e.data:[e.data];t({type:"FETCH_TODOS",todos:n})})}},p=function(t,e){return function(n){var o="http://localhost:3000/todo/".concat(t,"/").concat(e);return m.a.put(o).then(function(t){var e=Array.isArray(t.data)?t.data:[t.data];n({type:"TOGGLE_MULTIPLE_TODOS",todos:e})})}},f=function(t){var e="http://localhost:3000/todo/".concat(t);return console.log(e),function(t){return m.a.delete(e).then(function(e){var n=Array.isArray(e.data)?e.data:[e.data];t({type:"DELETE_TODOS",todos:n})})}},b={todos:[],selectedItems:[]},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_SELECTED":return Object(d.a)({},t,{selectedItems:e.selectedItems});case"FETCH_TODOS":case"ADD_TODO":case"SHOW_COMPLETED":case"TOGGLE_ALL_TODOS":case"TOGGLE_MULTIPLE_TODOS":case"DELETE_TODOS":case"CLEAR_LIST":return Object(d.a)({},t,{todos:e.todos});default:return Object(d.a)({},t)}},O=(n(57),n(8)),y=n(9),T=n(11),v=n(10),g=n(12),A=function(){return a.a.createElement("h1",null,"Welcome to the Todo Application")},j=n(30),k=n(14),C=function(t){function e(){var t,n;Object(O.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(T.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(a)))).state={item:""},n.handleInput=function(t){n.setState(Object(k.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e=n.props,o=e.todos,a=e.addTodo,r=n.state.item,c="undefined"!==typeof o?o.map(function(t){return t.id}):[0];a({id:0===o.length?1:Math.max.apply(Math,Object(j.a)(c))+1,item:r,completed:!1})},n}return Object(g.a)(e,t),Object(y.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{action:"",onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"item",id:"item",className:"item",placeholder:"Enter Todo Item",required:!0,onChange:this.handleInput}),a.a.createElement("button",{type:"submit"},"Add Todo"))}}]),e}(a.a.Component),D=Object(l.b)(function(t){return{todos:t.todos.todos}},function(t){return{addTodo:function(e){t(function(t){return function(e){return m.a.post("http://localhost:3000/todo",t).then(function(t){var n=Array.isArray(t.data)?t.data:[t.data];e({type:"ADD_TODO",todos:n})})}}(e))}}})(C),L=function(t){function e(){var t,n;Object(O.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(T.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(a)))).state={options:[]},n.onChange=function(t){var e=n.state.options;if(t.target.checked)e.push(t.target.name);else{var o=e.indexOf(t.target.name);e.splice(o,1)}n.setState({options:e}),console.log(e)},n}return Object(g.a)(e,t),Object(y.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.todos,o=e.showCompleted,r=e.dispatchFetchTodos,c=e.toggleTodos,l=e.toggleAllTodos,i=e.deleteTodos,u=e.clearList,d=this.state.options;return a.a.createElement("div",{id:"todoLower"},a.a.createElement("form",{id:"todoList"},0===n.length?a.a.createElement("p",null,"Enter a task to complete"):n.map(function(e){return a.a.createElement("div",{key:e._id,className:e.completed?"checkbox":"checkbox completed"},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",className:"todo-item",id:e._id,name:e._id,value:e._id,onChange:t.onChange}),e.id," ",e.item))})),a.a.createElement("button",{type:"button",id:"toggleTodo",onClick:function(){return c(d,!0)}},"Mark as Done"),a.a.createElement("button",{type:"button",id:"toggleTodo",onClick:function(){return c(d,!1)}},"Mark as Not Done"),a.a.createElement("button",{type:"button",id:"toggleAllTodos",onClick:function(){return l(!0)}},"Mark all as Done"),a.a.createElement("button",{type:"button",id:"toggleAllTodos",onClick:function(){return l(!1)}},"Mark all as Not Done"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",id:"showCompleted",onClick:function(){return o(!0)}},"Show Done"),a.a.createElement("button",{type:"button",id:"showActive",onClick:function(){return o(!1)}},"Show Not Done"),a.a.createElement("button",{type:"button",id:"showCompleted",onClick:function(){return r()}},"Show All"),a.a.createElement("br",null),a.a.createElement("button",{type:"button",id:"removeTodo",onClick:function(){return i(d)}},"Remove Item"),a.a.createElement("button",{type:"button",id:"clearList",onClick:function(){return u()}},"Remove All Items"))}}]),e}(a.a.Component),w=Object(l.b)(function(t){return{todos:t.todos.todos,selectedItems:t.todos.selectedItems}},function(t){return{showCompleted:function(e){return t(function(t){return function(e){return m.a.get("http://localhost:3000/todos").then(function(n){var o=(Array.isArray(n.data)?n.data:[n.data]).filter(function(e){return e.completed===t});e({type:"SHOW_COMPLETED",todos:o})})}}(e))},dispatchFetchTodos:function(){return t(h())},toggleAllTodos:function(e){return t(function(t){var e="http://localhost:3000/todos/all/".concat(t);return function(t){return m.a.put(e).then(function(e){var n=Array.isArray(e.data)?e.data:[e.data];t({type:"TOGGLE_ALL_TODOS",todos:n})})}}(e))},toggleTodos:function(e,n){for(var o=0;o<e.length;o++)t(p(e[o],n))},deleteTodos:function(e){for(var n=0;n<e.length;n++)t(f(e[n]))},clearList:function(){return t(function(t){return m.a.delete("http://localhost:3000/todos/all").then(function(e){var n=Array.isArray(e.data)?e.data:[e.data];t({type:"CLEAR_LIST",todos:n})})})}}})(L),_=(n(58),function(t){function e(){return Object(O.a)(this,e),Object(T.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(y.a)(e,[{key:"componentWillMount",value:function(){(0,this.props.dispatchFetchTodos)()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement(A,null)),a.a.createElement("main",null,a.a.createElement(D,null),a.a.createElement(w,null)),a.a.createElement("footer",null))}}]),e}(a.a.Component)),S=Object(l.b)(null,function(t){return{dispatchFetchTodos:function(){return t(h())}}})(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(u.c)({todos:E}),M=Object(u.e)(I,Object(u.d)(Object(u.a)(i.a)));c.a.render(a.a.createElement(l.a,{store:M},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f3ba92c3.chunk.js.map