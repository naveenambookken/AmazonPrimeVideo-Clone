(this["webpackJsonpamazon-prime-video"]=this["webpackJsonpamazon-prime-video"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(30),n=a.n(i),r=(a(39),a(3)),l=(a(40),a.p+"static/media/Logo.3b38eec4.png"),o=a.p+"static/media/searchbtn.d581c06f.ico",j=a(34),d=a(0);var b=function(e){var t=e.activeIndex,a=e.onclick,c=e.sliderImage;return Object(d.jsx)("div",{className:"all-dots",children:c.map((function(e,c){return Object(d.jsx)("span",{className:"".concat(t===c?"dot active-dot":"dot"),onClick:function(){return a(c)}},c)}))})};var h=function(e){var t=e.prevSlide,a=e.nextSlide;return Object(d.jsxs)("div",{className:"arrows",children:[Object(d.jsx)("span",{className:"prev",onClick:t,children:"\u276e"}),Object(d.jsx)("span",{className:"next",onClick:a,children:"\u276f"})]})},m=(a(42),"150331ad17b3dd037244036566d271b3"),v="http://image.tmdb.org/t/p/w500",u=a(12),O=a.n(u),p=O.a.create({baseURL:"https://api.themoviedb.org/3"});var x=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)([]),n=Object(r.a)(i,2),l=n[0],o=n[1];Object(c.useEffect)((function(){var e=setInterval((function(){s(a===v?0:a+1)}),5e3);return function(){return clearInterval(e)}}),[a]),Object(c.useEffect)((function(){p.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(m,"&language=en-US")).then((function(e){o(Object(j.a)(e.data.results))}))}),[]);var v=l.length-1;return Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)("section",{children:l.map((function(e,t){return Object(d.jsxs)("div",{className:t===a?"slides active":"inactive",children:[Object(d.jsx)("img",{className:"slide-image",src:"https://image.tmdb.org/t/p/original"+e.backdrop_path,alt:"slider"}),Object(d.jsx)("h2",{className:"slide-title",children:e.name?e.name:e.title}),Object(d.jsx)("h5",{className:"slide-text",children:e.overview})]},t)}))}),Object(d.jsx)(h,{prevSlide:function(){return s(a<1?v:a-1)},nextSlide:function(){return s(a===v?0:a+1)}}),Object(d.jsx)(b,{activeIndex:a,sliderImage:l,onclick:function(e){return s(e)}})]})},g=(a(60),a.p+"static/media/playbtn2.6f076243.png");a(61);var f=function(e){return e.trigger?Object(d.jsxs)("div",{className:"popupbody",children:[Object(d.jsx)("span",{class:"close",onClick:function(){return e.setTrigger(!1)},children:"\xd7"}),e.children]}):""},N=a(15);var k=function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(!1),l=Object(r.a)(n,2),o=l[0],j=l[1],b=Object(c.useState)(),h=Object(r.a)(b,2),u=h[0],O=h[1];return Object(c.useEffect)((function(){p.get(e.url).then((function(e){i(e.data.results)}))}),[]),Object(d.jsxs)("div",{className:"mainsection",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("div",{className:"posters",children:s.map((function(e,t){return Object(d.jsxs)("div",{className:"poster-content",children:[Object(d.jsx)("img",{className:"poster",src:v+e.poster_path,alt:"poster"}),Object(d.jsx)("img",{onClick:function(){return t=e.id,j(!0),void p.get("movie/".concat(t,"/videos?api_key=").concat(m,"&language=en-US")).then((function(e){0!==e.data.results.length?O(e.data.results[0]):alert("Trailer not available")}));var t},className:"playbtnimg",src:g,alt:"play"}),Object(d.jsxs)("div",{className:"poster-view",children:[Object(d.jsx)("p",{className:"movie-name",children:e.title?e.title:e.name}),Object(d.jsx)("p",{className:"movie-year",children:e.release_date}),Object(d.jsx)("div",{className:"plusbtn",children:Object(d.jsx)("p",{className:"plusbtntext",children:"+"})})]})]})}))})]}),Object(d.jsx)("div",{className:"popupwindow",children:u&&Object(d.jsx)(f,{trigger:o,setTrigger:j,children:Object(d.jsx)(N.a,{videoId:u.key,opts:{height:"500vh",width:"100%",playerVars:{autoplay:0}},onReady:function(e){e.target.pauseVideo()}})})})]})},y="https://api.themoviedb.org/3/discover/tv?api_key=".concat(m,"&with_networks=213"),w="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=28"),S="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=35"),_="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=27"),C="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=10749"),T="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=99");a(75);var I=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"seemore",children:Object(d.jsx)("p",{className:"seemore-text",children:"see more"})}),Object(d.jsx)("div",{className:"backtotop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(d.jsx)("p",{className:"backtotop-text",children:"Back to top"})}),Object(d.jsx)("div",{className:"footer"})]})};var V=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(k,{title:"Watch next Tv and movies",url:y}),Object(d.jsx)(k,{title:"Action",url:w,small:!0}),Object(d.jsx)(k,{title:"Comedy",url:S,small:!0}),Object(d.jsx)(k,{title:"Horror",url:_,small:!0}),Object(d.jsx)(k,{title:"Romance",url:C,small:!0}),Object(d.jsx)(k,{title:"Documentaries",url:T,small:!0}),Object(d.jsx)(I,{})]})};a(76);var E=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){p.get("https://api.themoviedb.org/3/genre/tv/list?api_key=".concat(m,"&language=en-US")).then((function(e){s(e.data.genres)}))}),[]);var i="http://api.themoviedb.org/3/discover/tv?api_key=".concat(m,"&sort_by=popularity.desc&with_genres=");return Object(d.jsxs)("div",{className:"tvshow",children:[Object(d.jsx)("h1",{children:"Tv Shows"}),a.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(k,{title:e.name,url:i+e.id})})})),Object(d.jsx)(I,{})]})};var U=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){p.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(m,"&language=en-US")).then((function(e){s(e.data.genres)}))}),[]);var i="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&with_genres=");return Object(d.jsxs)("div",{className:"movies",children:[Object(d.jsx)("h1",{children:"Movies"}),a.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(k,{title:e.name,url:i+e.id})})})),Object(d.jsx)(I,{})]})};var z=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){p.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(m,"&language=en-US")).then((function(e){s(e.data.genres)}))}),[]);var i="https://api.themoviedb.org/3/discover/movie?api_key=".concat(m,"&include_adult=false&with_genres=");return Object(d.jsxs)("div",{className:"kids",children:[Object(d.jsx)("h1",{children:"Kids"}),a.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(k,{title:e.name,url:i+e.id})})})),Object(d.jsx)(I,{})]})},M=a(10),P=a(2);a(77),a(78);var A=function(e){return Object(d.jsxs)("div",{className:"sk-chase ".concat(e.className),children:[Object(d.jsx)("div",{className:"sk-chase-dot"}),Object(d.jsx)("div",{className:"sk-chase-dot"}),Object(d.jsx)("div",{className:"sk-chase-dot"}),Object(d.jsx)("div",{className:"sk-chase-dot"}),Object(d.jsx)("div",{className:"sk-chase-dot"}),Object(d.jsx)("div",{className:"sk-chase-dot"})]})};var K=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(),l=Object(r.a)(n,2),o=l[0],j=l[1];return Object(d.jsxs)("div",{className:"searchwindow",children:[Object(d.jsx)("h5",{className:"heading-search",children:"Search"}),Object(d.jsxs)("div",{className:"searchbody",children:[Object(d.jsx)(A,{className:" ".concat(e.loading?"show":"hide")}),e.array.map((function(e,t){return Object(d.jsxs)("div",{className:"poster-body",children:[Object(d.jsx)("img",{className:"poster",src:v+e.poster_path,alt:"poster"}),Object(d.jsx)("img",{onClick:function(){return t=e.id,i(!0),void p.get("movie/".concat(t,"/videos?api_key=").concat(m,"&language=en-US")).then((function(e){0!==e.data.results.length?j(e.data.results[0]):alert("Trailer not available")}));var t},className:"playbtnimg",src:g,alt:"play"}),Object(d.jsxs)("div",{className:"poster-view",children:[Object(d.jsx)("p",{className:"movie-name",children:e.title?e.title:e.name}),Object(d.jsx)("p",{className:"movie-year",children:e.release_date}),Object(d.jsx)("div",{className:"plusbtn",children:Object(d.jsx)("p",{className:"plusbtntext",children:"+"})})]})]})})),Object(d.jsx)("div",{className:"popupwindow",children:o&&Object(d.jsx)(f,{trigger:s,setTrigger:i,children:Object(d.jsx)(N.a,{videoId:o.key,opts:{height:"500vh",width:"100%",playerVars:{autoplay:0}},onReady:function(e){e.target.pauseVideo()}})})})]}),e.message&&Object(d.jsx)("p",{className:"message",children:e.message})]})};var R=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),n=Object(r.a)(i,2),j=n[0],b=n[1],h=Object(c.useState)(!1),v=Object(r.a)(h,2),u=v[0],p=v[1],x=Object(c.useState)(""),g=Object(r.a)(x,2),f=g[0],N=g[1],k="";return Object(d.jsxs)(M.a,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"main-body",children:Object(d.jsx)("div",{className:"nav-bar",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bgcolor",children:[Object(d.jsx)("div",{className:"prime-logo",children:Object(d.jsx)(M.b,{to:"/AmazonPrimeVideo-Clone",children:Object(d.jsx)("img",{className:"logo",src:l,alt:"Logo"})})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent",children:Object(d.jsxs)("div",{className:"nav-primary",children:[Object(d.jsx)("div",{className:"left-section",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)(M.b,{className:"active","aria-current":"page",to:"/AmazonPrimeVideo-Clone",children:["Home",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(M.b,{className:"active",to:"/Tvshows",children:"TV Shows"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(M.b,{className:"active",to:"/Movies",children:"Movies"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(M.b,{className:"active",to:"/Kids",children:"Kids"})})]})}),Object(d.jsx)("div",{className:"right-section",children:Object(d.jsx)(M.b,{to:"/Search",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("img",{type:"submit",className:"search-button",onClick:function(){p(!0),N(""),k&&k.cancel(),k=O.a.CancelToken.source(),O.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(m,"&query=").concat(j),{cancelToken:k.token}).then((function(e){var t=e.data.length?"":"There are no more search results. Please try a new search.";s(e.data.results),N(t),p(!1)})).catch((function(e){(O.a.isCancel(e)||e)&&(p(!1),N("Failed to fetch results.Please check network"))}))},src:o,alt:"button"}),Object(d.jsx)("input",{className:"search-bar",type:"search",placeholder:"Search",value:j,"aria-label":"Search",onChange:function(e){var t=e.target.value;b(t),N(""),e.preventDefault()}})]})})})]})})]})})})}),Object(d.jsx)("div",{children:Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{exact:!0,path:"/",children:Object(d.jsx)(V,{})}),Object(d.jsx)(P.a,{exact:!0,path:"/AmazonPrimeVideo-Clone",children:Object(d.jsx)(V,{})}),Object(d.jsx)(P.a,{path:"/Tvshows",children:Object(d.jsx)(E,{})}),Object(d.jsx)(P.a,{path:"/Movies",children:Object(d.jsx)(U,{})}),Object(d.jsx)(P.a,{path:"/Kids",children:Object(d.jsx)(z,{})}),Object(d.jsx)(P.a,{path:"/Search",children:Object(d.jsx)(K,{array:a,message:f,loading:u})})]})})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.03bf2ed4.chunk.js.map