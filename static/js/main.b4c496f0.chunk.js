(this["webpackJsonptext-app"]=this["webpackJsonptext-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(3),a=n.n(r),s=(n(12),n(4)),u=n(5),i=n(7),b=n(6),h=(n(13),n(0)),j=function(t){return Object(h.jsx)("button",{onClick:t.click,children:"Poka\u017c cytat"})},f=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.quotes.quote}),Object(h.jsx)("p",{children:t.quotes.author})]})},d=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={texts:[],randomQuote:[]},t.randomize=function(){var e=t.state.texts,n=Math.floor(Math.random()*e.length);t.setState({randomQuote:e[n]})},t.previousQuote=function(){},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(e){return t.setState({texts:e})}))}},{key:"render",value:function(){var t=this.state.randomQuote;return console.log(t),Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{click:this.randomize}),t?Object(h.jsx)(f,{quotes:t}):t]})}}]),n}(c.Component),l=d;a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b4c496f0.chunk.js.map