(self.webpackChunkwebsubmission=self.webpackChunkwebsubmission||[]).push([[179],{935:(n,r,e)=>{"use strict";var t=e(379),o=e.n(t),i=e(795),a=e.n(i),c=e(569),s=e.n(c),p=e(565),l=e.n(p),u=e(216),d=e.n(u),f=e(589),h=e.n(f),g=e(982),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,e(685);var m=e(429),v=e.n(m);document.getElementById("slide").innerHTML='\n <div id="card-slider" class="splide">\n\t<div class="splide__slider">\n\t\t<div class="splide__track">\n\t\t\t<ul class="splide__list">\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n',setTimeout((function(){new(v())("#card-slider",{type:"loop",perPage:3,height:"300px",heightRatio:.5,cover:!0,breakpoints:{600:{perPage:1}}}).mount()}),800);var y=e(634),w=e.n(y),x=(e(288),e(292),e(511)),k="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=27d5a4725e46e1a8985cb31476773406",_="https://image.tmdb.org/t/p/w500",E=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:10749,name:"Romance"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"}],j=document.getElementById("main"),L=document.getElementById("form"),O=document.getElementById("search"),T=document.getElementById("tags"),S=document.querySelector(".splide__list"),R=document.querySelector(".header"),I=document.getElementById("prev"),M=document.getElementById("next"),P=document.getElementById("current"),B=[];function F(){T.innerHTML="",E.forEach((function(n){var r=document.createElement("div");r.classList.add("tag"),r.id=n.id,r.innerText=n.name,r.addEventListener("click",(function(){0==B?B.push(n.id):B.includes(n.id)?B.forEach((function(r,e){r==n.id&&B.splice(e,1)})):B.push(n.id),H(k+"&with_genres="+encodeURI(B.join(","))),document.querySelectorAll(".tag").forEach((function(n){n.classList.remove("highlight")})),function(){var n=document.getElementById("clear");if(n)n.classList.add("highlight");else{var r=document.createElement("div");r.classList.add("tag","highlight"),r.id="clear",r.innerText="Clear",r.addEventListener("click",(function(){B=[],F(),H(k)})),T.append(r)}}(),0!==B.length&&B.forEach((function(n){document.getElementById(n).classList.add("highlight")}))})),T.append(r)}))}function H(n){A=n,fetch(n).then((function(n){return n.json()})).then((function(n){0!==n.results.length?(function(n){j.innerHTML="",n.forEach((function(n){var r,e=n.title,t=n.poster_path,o=n.vote_average,i=n.overview,a=document.createElement("div");a.classList.add("movie"),a.innerHTML="\n        <img src='".concat(t?_+t:"https://via.placeholder.com/300x450","' alt='").concat(e,"'>\n        <div class='movie-info'>\n            <h3>").concat(e,"</h3>\n            <span class='").concat((r=o,r>=8?"green":r>=5?"orange":"red"),"'>").concat(o,"</span>\n        </div>\n        <div class='overview'>\n            <h3>Overview</h3>\n            ").concat(i,"\n        </div>"),j.appendChild(a)}))}(n.results),C=n.page,Z=C+1,z=C-1,D=n.total_pages,P.innerText=C,C<=1?(I.classList.add("disabled"),M.classList.remove("disabled")):C>=D?(M.classList.add("disabled"),I.classList.remove("disabled")):(M.classList.remove("disabled"),I.classList.remove("disabled"))):j.innerHTML="<h1 class='notFound'> No Results Found </h1>"}))}L.addEventListener("submit",(function(n){n.preventDefault();var r=O.value;B=[],F(),r?(H("https://api.themoviedb.org/3/search/movie?api_key=27d5a4725e46e1a8985cb31476773406&query="+r),j.scrollIntoView()):H(k)}));var C=1,Z=1,z=1,A="",D=M.addEventListener("click",(function(){Z<=D&&q(Z)}));function q(n){var r=A.split("?"),e=r[1].split("&"),t=e[e.length-1].split("=");if("page"!=t[0])H(A+"&page="+n),T.scrollIntoView();else{t[1]=n.toString();var o=t.join("=");e[e.length-1]=o;var i=e.join("&");H(r[0]+"?"+i),T.scrollIntoView()}}I.addEventListener("click",(function(){z>0&&q(z)})),w()(document).ready((function(){var n;(n=document.createElement("img")).src=x,R.prepend(n),F(),H(k),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=27d5a4725e46e1a8985cb31476773406").then((function(n){return n.json()})).then((function(n){0!==n.results.length?function(n){S.innerHTML="";var r=[];n.every((function(n){var e=n.title,t=n.backdrop_path,o=n.overview,i=n.release_date,a=document.createElement("li");return a.classList.add("splide__slide"),a.innerHTML="\n        <img src='".concat(t?_+t:"https://via.placeholder.com/300x450","' alt='").concat(e,"'>\n        <div class='overview'>\n            <h3>").concat(e,"</h3>\n            ").concat(o,"\n            <br><br>\n            <span class='date'>").concat(i,"</span>\n        </div>"),S.appendChild(a),r.push(1),9!=r.length}))}(n.results):j.innerHTML="<h1 class='notFound'> No Results Found </h1>"}))}))},288:()=>{function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function e(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function t(r,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r)}function o(n){var r="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return i(n,arguments,s(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),c(t,n)})(n)}function i(n,r,e){return(i=a()?Reflect.construct:function(n,r,e){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(n,t));return e&&c(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,r){return(c=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&c(n,r)}(d,n);var o,i,p,l,u=(o=d,i=a(),function(){var n,r=s(o);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return t(this,n)});function d(){return r(this,d),u.apply(this,arguments)}return p=d,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n            <div class="wrapper">\n                <a href="https://www.facebook.com/bryanrinaldoo" class="icon facebook" target="_blank"\n                    rel="noopener noreferrer">\n                    <div class="tooltip">Facebook</div>\n                    <span><i class="fab fa-facebook-f"></i></span>\n                </a>\n                <a href="https://twitter.com/bryanrinaldoo" class="icon twitter" target="_blank"\n                    rel="noopener noreferrer">\n                    <div class="tooltip">Twitter</div>\n                    <span><i class="fab fa-twitter"></i></span>\n                </a>\n                <a href="https://twitter.com/bryanrinaldoo" class="icon instagram" target="_blank"\n                    rel="noopener noreferrer">\n                    <div class="tooltip">Instagram</div>\n                    <span><i class="fab fa-instagram"></i></span>\n                </a>\n                <a href="https://github.com/bryanrinaldoo" class="icon github" target="_blank"\n                    rel="noopener noreferrer">\n                    <div class="tooltip">Github</div>\n                    <span><i class="fab fa-github"></i></span>\n                </a>\n\n                <a href="https://www.linkedin.com/in/bryanrinaldoo/" class="icon linkedin" target="_blank"\n                    rel="noopener noreferrer">\n                    <div class="tooltip">LinkedIn</div>\n                    <span><i class="fab fa-linkedin-in"></i></span>\n                </a>\n            </div>\n        \n        '}}])&&e(p.prototype,l),d}(o(HTMLElement));customElements.define("my-footer",p)},292:()=>{function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function e(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function t(r,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r)}function o(n){var r="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return i(n,arguments,s(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),c(t,n)})(n)}function i(n,r,e){return(i=a()?Reflect.construct:function(n,r,e){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(n,t));return e&&c(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,r){return(c=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&c(n,r)}(d,n);var o,i,p,l,u=(o=d,i=a(),function(){var n,r=s(o);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return t(this,n)});function d(){return r(this,d),u.apply(this,arguments)}return p=d,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="page" id="prev">Prev</div>\n        <div class="current" id="current">1</div>\n        <div class="page" id="next">Next</div>\n        '}}])&&e(p.prototype,l),d}(o(HTMLElement));customElements.define("pagination-bar",p)},308:(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var t=e(929),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,'footer my-footer{\r\n    display: grid;\r\n    place-items: center;\r\n    margin-bottom: 50px;\r\n}\r\nmy-footer{\r\n    min-height: 100%;\r\n}\r\n.wrapper {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.wrapper .icon {\r\n    margin: 0 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.wrapper img {\r\n    height: 35px;\r\n    margin-top: 13px;\r\n    cursor: pointer;\r\n}\r\n\r\n.wrapper .icon span i {\r\n    line-height: 60px;\r\n    font-size: 25px;\r\n}\r\n\r\n.wrapper .icon:hover span i {\r\n    color: white;\r\n}\r\n\r\n.wrapper .icon span {\r\n    height: 60px;\r\n    width: 60px;\r\n    display: block;\r\n    background: rgb(241, 241, 241);\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);\r\n    margin-right: 50px;\r\n}\r\n\r\n.wrapper .icon .tooltip {\r\n    position: absolute;\r\n    top: 0px;\r\n    background: rgb(241, 241, 241);\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 10px 18px;\r\n    border-radius: 25px;\r\n    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    margin-right: 50px;\r\n}\r\n\r\n.wrapper .icon:hover .tooltip {\r\n    top: -70px;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\r\n\r\n.wrapper .icon .tooltip:before {\r\n    position: absolute;\r\n    content: "";\r\n    height: 15px;\r\n    width: 15px;\r\n    background: rgb(241, 241, 241);\r\n    top: 30px;\r\n    left: 50%;\r\n    transform: translateX(-50%) rotate(45deg);\r\n    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n.wrapper .icon:hover span,\r\n.wrapper .icon:hover .tooltip {\r\n    text-shadow: 0px -1px 0px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.wrapper .facebook:hover span,\r\n.wrapper .facebook:hover .tooltip,\r\n.wrapper .facebook:hover .tooltip::before {\r\n    background: #3b5999;\r\n}\r\n\r\n.wrapper .twitter:hover span,\r\n.wrapper .twitter:hover .tooltip,\r\n.wrapper .twitter:hover .tooltip::before {\r\n    background: #46c1f6;\r\n}\r\n\r\n.wrapper .instagram:hover span,\r\n.wrapper .instagram:hover .tooltip,\r\n.wrapper .instagram:hover .tooltip::before {\r\n    background: #e1306c;\r\n}\r\n.wrapper .github:hover span,\r\n.wrapper .github:hover .tooltip,\r\n.wrapper .github:hover .tooltip::before {\r\n    background: #333;\r\n}\r\n\r\n.wrapper .linkedin:hover span,\r\n.wrapper .linkedin:hover .tooltip,\r\n.wrapper .linkedin:hover .tooltip::before {\r\n    background: #0e76a8 \r\n}\r\n\r\nfooter {\r\n    padding: 100px 0;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    background: #202020;\r\n}\r\n\r\nfooter h4 {\r\n    text-align: center;\r\n    text-shadow: 0px -1px 0px rgba(0, 0, 0, .4);\r\n    margin-bottom: 0;\r\n    margin-top: 20px;\r\n    color: white;\r\n    align-self: end;\r\n}\r\n\r\n.warna {\r\n    padding: 100px 0;\r\n    padding-bottom: 20px;\r\n}\r\nmy-footer a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n@media (max-width: 871px) {\r\n    .wrapper .icon span {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .wrapper .icon .tooltip {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .footer-wave-box {\r\n\r\n        height: 0px;\r\n        background: rgb(255, 95, 162);\r\n        background: linear-gradient(90deg, rgba(255, 95, 162, 1) 0%, rgba(252, 200, 155, 1) 87%);\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n@media (max-width: 418px) {\r\n    .wrapper .icon span {\r\n        margin: 25px;\r\n    }\r\n\r\n    .wrapper .icon .tooltip {\r\n        margin: 25px;\r\n    }\r\n}',""]);const i=o},943:(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var t=e(929),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"pagination-bar{\r\n    display: flex;\r\n    margin: 10px 30px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n}\r\n\r\n.page{\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.page.disabled{\r\n    cursor: not-allowed;\r\n    color: gray;\r\n}\r\n\r\n.current{\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    border: 5px solid orange;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}",""]);const i=o},982:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(929),o=e.n(t),i=e(308),a=e(943),c=o()((function(n){return n[1]}));c.i(i.Z),c.i(a.Z),c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap);"]),c.push([n.id,":root {\r\n\r\n    --first-color: #292929; \r\n    --second-color: #202020;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody{\r\n    background-color: var(--first-color);\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\nheader{\r\n    padding: 16px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--second-color);\r\n}\r\nheader img{\r\n    height: 35px;\r\n    justify-self: flex-start;\r\n    margin-left: 20px;\r\n}\r\n.search{\r\n    background-color: transparent;\r\n    border: 2px solid var(--first-color);\r\n    padding: 8px 16px;\r\n    border-radius: 30px;\r\n    font-size: 16px;\r\n    color: white;\r\n    font-family: inherit;\r\n}\r\n\r\n.search:focus{\r\n    outline: 0;\r\n    background-color: var(--first-color);\r\n}\r\n\r\n.search::placeholder{\r\n    color: #fff;\r\n}\r\n\r\nsection{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.movie{\r\n    width: 300px;\r\n    margin: 16px;\r\n    border-radius: 5px;\r\n    box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);\r\n    background-color: var(--second-color);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.movie img{\r\n    width: 100%;\r\n}\r\n\r\n.movie-info{\r\n    color: #eee;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 8px 16px 16px;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.movie-info h3{\r\n    margin-top: 0;\r\n}\r\n\r\n.movie-info span{\r\n    background-color: var(--first-color);\r\n    padding: 6px 9px;\r\n    border-radius: 3px;\r\n    font-weight: bold;\r\n}\r\n\r\n.movie-info span.green{\r\n    color: lightgreen;\r\n}\r\n.movie-info span.orange{\r\n    color: orange;\r\n}\r\n.movie-info span.red{\r\n    color: red;\r\n}\r\n\r\n.overview{\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: white;\r\n    padding: 16px;\r\n    max-height: 100%;\r\n    transform: translateY(101%);\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.movie:hover .overview{\r\n    transform: translateY(0);\r\n}\r\n\r\n\r\n#tags{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 10px auto;\r\n}\r\n\r\n.tag{\r\n    color: white;\r\n    padding: 10px 20px;\r\n    background-color: #4e4e4e;\r\n    border-radius: 30px;\r\n    margin: 5px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n\r\n.tag.highlight{\r\n    background-color: #b6b6b6;\r\n}\r\n\r\n.notFound{\r\n    color: white;\r\n}\r\n\r\n#slide{\r\n    margin: 30px;\r\n}\r\n#card-slider{\r\n    max-width: 100%;\r\n}\r\n.splide__list{\r\n    max-width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.splide__slide{\r\n    border-radius: 10px;\r\n    margin-right: 10px;\r\n}\r\n.splide__slide:hover .overview{\r\n    transform: translateY(0);\r\n}\r\n.overview .date{\r\n    float: right;\r\n    font-weight: 700;\r\n}\r\nh1{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* END OF CSS */",""]);const s=c},511:(n,r,e)=>{"use strict";n.exports=e.p+"93ae2d43bc40fc3440eb.png"}},n=>{n.O(0,[335,233,928,738],(()=>(935,n(n.s=935)))),n.O()}]);