"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[452],{452:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(861),s=r(439),a=r(757),i=r.n(a),c=r(791),u=r(689),o=r(87),l="MovieList_movie-list__vTqZL",m="MovieList_movies-list-item__UUofe",v="MovieList_movies-list-item-link__3uxsT",f=r(184),h=function(e){var t=e.movies,r=(0,u.TH)();return(0,f.jsx)("div",{className:l,children:(0,f.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,f.jsx)("li",{className:m,children:(0,f.jsx)(o.rU,{className:v,to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})})},_="SearchBox_search-form__ajx4g",d="SearchBox_search-input__dpMsB",p="SearchBox_search-btn__VwKKo",x=function(e){var t=e.onSubmit,r=(0,o.lr)(),n=(0,s.Z)(r,1)[0],a=(0,c.useState)(""),i=(0,s.Z)(a,2),u=i[0],l=i[1];(0,c.useEffect)((function(){var e;l(null!==(e=n.get("query"))&&void 0!==e?e:"")}),[n]);return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:_,onSubmit:t,children:[(0,f.jsx)("input",{name:"searchField",value:u,className:d,type:"text",onChange:function(e){l(e.currentTarget.value)},placeholder:"Movie search",autoComplete:"off",autoFocus:!0}),(0,f.jsx)("button",{className:p,type:"submit",children:"Search"})]})})},j=r(94),b=r(526),k="Movies_search-page__jVo-t",S=function(){var e=(0,c.useState)(null),t=(0,s.Z)(e,2),r=t[0],a=t[1],u=(0,o.lr)(),l=(0,s.Z)(u,2),m=l[0],v=l[1],_=m.get("query");(0,c.useEffect)((function(){if(null!==_){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.o3)(_);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,j.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);return(0,f.jsxs)("main",{className:k,children:[(0,f.jsx)(x,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchField.value;v({query:t})}}),(0,f.jsx)(h,{movies:r})]})}}}]);
//# sourceMappingURL=452.97646d5f.chunk.js.map