(window.webpackJsonpgaloe=window.webpackJsonpgaloe||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(2),i=t.n(r),c=(t(13),t(3)),s=t(4),u=t(6),l=t(5),h=t(7),p=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(o)))).state={data:[]},t}return Object(h.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=meera+nair&format=json&origin=*").then((function(n){return n.json()})).then((function(e){n.setState({data:e})}))}},{key:"render",value:function(){var n=this.state.data.map((function(n,e){return o.a.createElement("li",{key:e},n)}));return o.a.createElement("ul",null,n)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},8:function(n,e,t){n.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.295ebec4.chunk.js.map