let e;function t(e){return e&&e.__esModule?e.default:e}var r,n="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},i={},a={},s=n.parcelRequire0573;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},n.parcelRequire0573=s),s.register,Object.assign(s.i??={},{cPzGy:"icons.9717e574.svg"});var o=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var s,o,c,l,u=Object.create((r&&r.prototype instanceof _?r:_).prototype);return i(u,"_invoke",{value:(s=e,o=n,c=new S(a||[]),l=h,function(e,r){if(l===p)throw Error("Generator is already running");if(l===g){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?f:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),f);var s=d(a,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,f;var o=s.arg;return o?o.done?(n[r.resultName]=o.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,f)}(n,c);if(i){if(i===f)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===h)throw l=g,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=p;var a=d(s,o,c);if("normal"===a.type){if(l=c.done?g:"suspendedYield",a.arg===f)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(l=g,c.method="throw",c.arg=a.arg)}})}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",g="completed",f={};function _(){}function v(){}function y(){}var m={};l(m,s,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(M([])));w&&w!==r&&n.call(w,s)&&(m=w);var k=y.prototype=_.prototype=Object.create(m);function $(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;i(this,"_invoke",{value:function(i,a){function s(){return new t(function(r,s){!function r(i,a,s,o){var c=d(e[i],e,a);if("throw"===c.type)o(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,s,o)},function(e){r("throw",e,s,o)}):t.resolve(u).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,o)})}}(i,a,r,s)})}return r=r?r.then(s,s):s()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(null!=e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},$(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var s=new E(u(t,r,n,i),a);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},$(k),l(k,c,"Generator"),l(k,s,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);else if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return(s.type=e,s.arg=t,a)?(this.method="next",this.next=a.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}let c="https://forkify-api.herokuapp.com/api/v2/recipes/",l="<YOUR KEY>",u=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},h=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},p=async function(e){try{let t=await u(`${c}${e}?key=${l}`);d.recipe=h(t),d.bookmarks.some(t=>t.id===e)?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1}catch(e){throw console.error(e),e}},g=async function(e){try{d.search.query=e;let t=await u(`${c}?search=${e}&key=${l}`);d.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),d.search.page=1}catch(e){throw console.error(e),e}},f=function(e=d.search.page){d.search.page=e;let t=(e-1)*d.search.resultsPerPage,r=e*d.search.resultsPerPage;return d.search.results.slice(t,r)},_=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings}),d.recipe.servings=e},v=function(){localStorage.setItem("bookmarks",JSON.stringify(d.bookmarks))},y=function(e){d.bookmarks.push(e),e.id===d.recipe.id&&(d.recipe.bookmarked=!0),v()},m=function(e){let t=d.bookmarks.findIndex(t=>t.id===e);d.bookmarks.splice(t,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),v()};(e=localStorage.getItem("bookmarks"))&&(d.bookmarks=JSON.parse(e));let b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Invalid ingredient format. Please use the format: Quantity,Unit,Description");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await u(`${c}?key=${l}`,r);d.recipe=h(n),y(d.recipe)}catch(e){throw e}};var w={};r="cPzGy",w=new URL("./"+(r=s.i?.[r]||r),import.meta.url).toString();class k{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${t(w)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${t(w)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${t(w)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var $={};function E(e,t,r,n,i){var a,s,o,c;let l=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let u=0,d=e,h=t;for(;u<=l.length;)d%l[u]==0&&h%l[u]==0?(l[u],d/=l[u],h/=l[u]):u++;return a=h,s=d,o=r,c=n,1===a&&1===s?(o=`${c}${(parseInt(o)+1).toString()}`,`${o}`):0===s?`${c}${o}`:"0"==o?`${c}${s}/${a}`:`${c}${o} ${s}/${a}`}$=function(e){var t,r,n,i,a,s,o,c;let l,u;if(e<0?(e=Math.abs(e),l="-"):l="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${l}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${l}${e}`;if(e<1e-6)return"0";let d=e.toString(),h=d.split("."),p=h[0];if("0"==u&&"0"!==p)return p;if("0"==u&&"0"==p)return"0";if("99"==(u=d.length>=17?h[1].slice(0,h[1].length-1):h[1])&&"0"!==p)return`${p} 99/100`;if("99"==u&&"0"==p)return"99/100";if(1-parseFloat(`.${u}`)<.0011&&(u="999"),void 0==u)return p;let g=u.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!g||!(u.length>2)){return t=u,r=p,n=l,E(parseInt(t,10),Math.pow(10,t.length),r,n,!1)}{let e,t,r,n,d=g[0].split("").reverse().join(""),h=g[1].split("").reverse().join("");if(h.length>1){let e=h.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(h=e[0])}return h.length>1&&h.length%2==0&&(h=parseInt(h.slice(0,h.length/2),10)-parseInt(h.slice(h.length/2,h.length),10)==0?h.slice(0,h.length/2):h),i=u,a=h,s=d,o=p,c=l,t=Math.pow(10,e=i.length-s.length>=1?i.length-s.length:1),E(Math.round(((r=parseFloat(`0.${i}`))*(n=Math.pow(10,a.length))-r)*Math.pow(10,e)),(n-1)*t,o,c,!0)}};class L extends k{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${t(w)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${t(w)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${t(w)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${t(w)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${t(w)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${t(w)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${t(w)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?(t($))(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var x=new L;class S{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var M=new S,j=new class extends k{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${t(w)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class q extends k{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again.";_message="";_generateMarkup(){return this._data.map(e=>j.render(e,!1)).join("")}}var P=new q;class H extends k{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&r>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===r&&r>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<r?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var O=new H;class T extends k{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Bookmark a recipe to access it quickly.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>j.render(e,!1)).join("")}}var N=new T;class A extends k{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded.";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var I=new A;let R=async function(){try{let e=window.location.hash.slice(1);if(!e)return;x.renderSpinner(),P.update(f()),N.update(d.bookmarks),await p(e),x.render(d.recipe)}catch(e){x.renderError(),console.error(e)}},F=async function(){try{P.renderSpinner();let e=M.getQuery();if(!e)return;await g(e),P.render(f()),O.render(d.search)}catch(e){console.error(e)}},U=async function(e){try{I.renderSpinner(),await b(e),x.render(d.recipe),I.renderMessage(),N.render(d.bookmarks),window.history.pushState(null,"",`#${d.recipe.id}`),setTimeout(function(){I.toggleWindow()},2500)}catch(e){console.error(e),I.renderError(e.message)}};N.addHandlerRender(function(){N.render(d.bookmarks)}),x.addHandlerRender(R),x.addHandlerUpdateServings(function(e){_(e),x.update(d.recipe)}),x.addHandlerAddBookmark(function(){d.recipe.bookmarked?m(d.recipe.id):y(d.recipe),x.update(d.recipe),N.render(d.bookmarks)}),M.addHandlerSearch(F),O.addHandlerClick(function(e){P.render(f(e)),O.render(d.search)}),I.addHandlerUpload(U);
//# sourceMappingURL=final.088d708f.js.map
