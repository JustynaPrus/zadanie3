(this["webpackJsonptext-app"]=this["webpackJsonptext-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),s=n(3),r=n.n(s),a=(n(12),n(4)),i=n(5),u=n(7),j=n(6),h=(n(13),n(0)),b=function(t){return Object(h.jsx)("button",{onClick:t.click,children:"Poka\u017c cytat"})},d=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.quotes.quote}),Object(h.jsx)("p",{children:t.quotes.author})]})},l=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={texts:[],randomQuote:[],quotesList:[]},t.randomize=function(){var e=t.state.texts,n=(t.setState((function(t){return{quotesList:t.randomQuote}})),Math.floor(Math.random()*e.length));t.setState({randomQuote:e[n]})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(e){return t.setState({texts:e})}))}},{key:"render",value:function(){var t=this.state.randomQuote,e=this.state.quotesList;return console.log(t),console.log(e),Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{click:this.randomize}),t?Object(h.jsx)(d,{quotes:t}):t,Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e.quote}),Object(h.jsx)("p",{children:e.author})]})]})}}]),n}(o.Component),f=l;r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4b5ee7d0.chunk.js.map