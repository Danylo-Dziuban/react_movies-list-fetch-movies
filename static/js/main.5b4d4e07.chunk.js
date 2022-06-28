(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(14),c(9)),a=c(2),l=c(1),r=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:null===t||void 0===t?void 0:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:null===t||void 0===t?void 0:t.Title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"content",children:[null===t||void 0===t?void 0:t.Plot,Object(r.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbID)}))})},j=(c(19),c(8)),m=c(6),u=c.n(m);function b(){return(b=Object(j.a)(u.a.mark((function e(t){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=d1e7cc14&t=".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if("False"!==(i=e.sent).Response){e.next=8;break}throw new Error("movie does not exist");case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.onAdd,c=e.movies,i=Object(l.useState)(!1),s=Object(a.a)(i,2),n=s[0],d=s[1],j=Object(l.useState)(null),m=Object(a.a)(j,2),u=m[0],v=m[1],h=Object(l.useState)(""),O=Object(a.a)(h,2),x=O[0],f=O[1],p=function(){(function(e){return b.apply(this,arguments)})(x).then((function(e){v(e),d(!1)})).catch((function(e){console.log("error",e),d(!0)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),u&&!c.some((function(e){return e.imdbID===(null===u||void 0===u?void 0:u.imdbID)}))?(t(u),v(null)):v(null),f("")},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",value:x,onChange:function(e){return f(e.target.value)},id:"movie-title",placeholder:"Enter a title to search",className:n?"input is-danger":"input"})}),n?Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}):null]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){v(null),p()},"data-cy":"find",children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:"button is-primary","data-cy":"add",children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),u&&Object(r.jsx)(o,{movie:u})]})]})},h=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(v,{onAdd:function(e){i((function(t){return[].concat(Object(n.a)(t),[e])}))},movies:c})})]})};s.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5b4d4e07.chunk.js.map