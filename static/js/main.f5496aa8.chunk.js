(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{25:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),s=n.n(o),c=(n(30),n(31),n(21)),l=n(24),i=n(3),u=n(4),m=n(6),d=n(5),p=n(7),f=(n(32),n(1)),v=function(e){var t=e.error,n=e.onClose,a=void 0===n?function(e){return e}:n;return r.a.createElement("div",{className:"popup-alert",style:{display:t?"inline":"none",fontSize:"1rem"}},r.a.createElement("div",null,r.a.createElement(f.b,{style:{color:"red",fontSize:"x-large"}}),r.a.createElement("p",null,"Task was not entered in text field")),r.a.createElement("button",{className:"alert-btn",onClick:a},"OK"))},E=r.a.forwardRef((function(e,t){var n=e.alert,a=e.error,o=e.onChange,s=void 0===o?function(e){return e}:o,c=e.onSubmit,l=void 0===c?function(e){return e}:c;return r.a.createElement("div",{className:"list-form"},r.a.createElement("div",{className:"alert-message",style:{display:n?"inline":"none"}},r.a.createElement(f.b,null)," Enter a task"),r.a.createElement("form",{className:"add-form",onSubmit:l},r.a.createElement("input",{ref:t,type:"text",placeholder:"Add task",onChange:s,style:{display:a?"border: 1px solid red":"border: 1px solid slategray"}}),r.a.createElement("button",{className:"add",type:"submit"},r.a.createElement(f.e,null))))})),h=r.a.forwardRef((function(e,t){var n=e.alert,a=e.error,o=e.onChange,s=void 0===o?function(e){return e}:o,c=e.onClose,l=void 0===c?function(e){return e}:c,i=e.onSubmit,u=void 0===i?function(e){return e}:i,m=e.renderTasks,d=void 0===m?function(e){return e}:m;return r.a.createElement("div",{className:"List"},r.a.createElement("div",{className:"list-header"},"To Do List"),r.a.createElement(E,{alert:n,error:a,onChange:s,onSubmit:u}),r.a.createElement("div",{className:"list-items"},d()),r.a.createElement(v,{error:a,onClose:l}))})),b=(n(33),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={editing:!1,checked:!1},n.toggleCheck=function(){n.setState({checked:!n.state.checked})},n.edit=function(){n.setState({editing:!0})},n.remove=function(){n.props.onRemove(n.props.item)},n.save=function(e){e.preventDefault(),n.props.onChange(n._newText.value,n.props.item),n.setState({editing:!1})},n.cancel=function(e){e.preventDefault(),n.setState({editing:!1})},n.renderForm=function(){return r.a.createElement("div",{id:n.props.item,className:"ListItem"},r.a.createElement("form",{className:"edit-form"},r.a.createElement("textarea",{ref:function(e){return n._newText=e},defaultValue:n.props.children}),r.a.createElement("span",null,r.a.createElement("button",{className:"save",onClick:n.save},r.a.createElement(f.g,null)),r.a.createElement("button",{className:"cancel",onClick:n.cancel},r.a.createElement(f.h,null)))))},n.renderDisplay=function(){var e;return e=n.state.checked?r.a.createElement(f.a,null):r.a.createElement(f.f,null),r.a.createElement("div",{id:n.props.item,className:"ListItem"},r.a.createElement("button",{className:"status status-btn",onClick:n.toggleCheck},e," ",r.a.createElement("span",{style:{textDecoration:n.state.checked?"line-through":"none"}},r.a.createElement("span",{className:"status-font"},n.props.children))),r.a.createElement("span",{className:"button-div"},r.a.createElement("button",{className:"edit",onClick:n.edit},r.a.createElement(f.d,null)),r.a.createElement("button",{className:"remove",onClick:n.remove},r.a.createElement(f.i,null))))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),t}(a.Component)),k=n(22),g=n.n(k),y=n(23),N=n.n(y);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],userInput:"",alert:!1,error:!1},n.handleUserInput=function(e){n.setState({alert:!1,userInput:e.target.value})},n.add=function(e){e.preventDefault(),n.state.userInput?(n.setState((function(e){return{tasks:[].concat(Object(l.a)(e.tasks),[{id:N.a.v4(),task:n.state.userInput}]),userInput:"",alert:!1,error:!1}})),n.inputEl.value=""):n.setState({alert:!0,error:!0})},n.update=function(e,t){n.setState((function(n){return{tasks:n.tasks.map((function(n){return n.id!==t?n:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{task:e})}))}}))},n.remove=function(e){n.setState((function(t){return{tasks:t.tasks.filter((function(t){return t.id!==e}))}}))},n.closeError=function(){n.setState({error:!1})},n.renderTasks=function(){return n.state.tasks.map((function(e){return r.a.createElement(b,{key:e.id,item:e.id,onChange:n.update,onRemove:n.remove},e.task)}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){var n=t.data.map((function(e){return{id:e.id,task:e.title}}));e.setState({tasks:n})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h,{ref:function(t){return e.inputEl=t},alert:this.state.alert,error:this.state.error,onChange:this.handleUserInput,onSubmit:this.add,onClose:this.closeError,renderTasks:this.renderTasks})}}]),t}(a.Component),w=(n(8),function(){return r.a.createElement("div",{className:"phone"},r.a.createElement("div",{style:{width:"94%",display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{className:"phone-camera1"}),r.a.createElement("div",{className:"phone-camera2"})),r.a.createElement("div",{className:"phone-screen"}))}),C=function(){return r.a.createElement("div",{className:"passport"},r.a.createElement("div",{className:"passport-book"},r.a.createElement("div",null,"PASSPORT"),r.a.createElement("div",{className:"passport-globe"},r.a.createElement(f.c,null))),r.a.createElement("div",{className:"passport-ticket"},r.a.createElement("div",{className:"passport-stripe"})))},S=function(){return r.a.createElement("div",{className:"background-items"},r.a.createElement(w,null),r.a.createElement(C,null))},D=function(){return r.a.createElement("div",{className:"Desktop"},r.a.createElement(j,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.f5496aa8.chunk.js.map