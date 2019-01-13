cordova.define("es6-promise-plugin.Promise",function(t,e,n){!function r(e,n,o){function i(u,c){if(!n[u]){if(!e[u]){var f="function"==typeof t&&t;if(!c&&f)return f(u,!0);if(s)return s(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=n[u]={exports:{}};e[u][0].call(a.exports,function(t){var n=e[u][1][t];return i(n?n:t)},a,a.exports,r,e,n,o)}return n[u].exports}for(var s="function"==typeof t&&t,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(t){void 0===window.Promise&&t("es6-promise").polyfill()},{"es6-promise":2}],2:[function(t,e,n){(function(r,o){!function(t,r){"object"==typeof n&&"undefined"!=typeof e?e.exports=r():"function"==typeof define&&define.amd?define(r):t.ES6Promise=r()}(this,function(){"use strict";function e(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function i(t){R=t}function s(t){V=t}function u(){return function(){return r.nextTick(d)}}function c(){return"undefined"!=typeof Q?function(){Q(d)}:l()}function f(){var t=0,e=new $(d),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function a(){var t=new MessageChannel;return t.port1.onmessage=d,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(d,1)}}function d(){for(var t=0;J>t;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}J=0}function h(){try{var e=t,n=e("vertx");return Q=n.runOnLoop||n.runOnContext,c()}catch(r){return l()}}function p(t,e){var n=arguments,r=this,o=new this.constructor(w);void 0===o[ot]&&F(o);var i=r._state;return i?!function(){var t=n[i-1];V(function(){return O(i,o,t,r._result)})}():T(r,o,t,e),o}function v(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(w);return j(n,t),n}function w(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function y(){return new TypeError("A promises callback cannot return that same promise.")}function m(t){try{return t.then}catch(e){return ct.error=e,ct}}function b(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function g(t,e,n){V(function(t){var r=!1,o=b(n,e,function(n){r||(r=!0,e!==n?j(t,n):x(t,n))},function(e){r||(r=!0,P(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,P(t,o))},t)}function A(t,e){e._state===st?x(t,e._result):e._state===ut?P(t,e._result):T(e,void 0,function(e){return j(t,e)},function(e){return P(t,e)})}function E(t,e,r){e.constructor===t.constructor&&r===p&&e.constructor.resolve===v?A(t,e):r===ct?(P(t,ct.error),ct.error=null):void 0===r?x(t,e):n(r)?g(t,e,r):x(t,e)}function j(t,n){t===n?P(t,_()):e(n)?E(t,n,m(n)):x(t,n)}function S(t){t._onerror&&t._onerror(t._result),M(t)}function x(t,e){t._state===it&&(t._result=e,t._state=st,0!==t._subscribers.length&&V(M,t))}function P(t,e){t._state===it&&(t._state=ut,t._result=e,V(S,t))}function T(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+st]=n,o[i+ut]=r,0===i&&t._state&&V(M,t)}function M(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?O(n,r,o,i):o(i);t._subscribers.length=0}}function C(){this.error=null}function k(t,e){try{return t(e)}catch(n){return ft.error=n,ft}}function O(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if(s=k(r,o),s===ft?(f=!0,u=s.error,s.error=null):c=!0,e===s)return void P(e,y())}else s=o,c=!0;e._state!==it||(i&&c?j(e,s):f?P(e,u):t===st?x(e,s):t===ut&&P(e,s))}function L(t,e){try{e(function(e){j(t,e)},function(e){P(t,e)})}catch(n){P(t,n)}}function Y(){return at++}function F(t){t[ot]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(w),this.promise[ot]||F(this.promise),H(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&x(this.promise,this._result))):P(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function K(t){return new I(this,t).promise}function N(t){var e=this;return new e(H(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function U(t){var e=this,n=new e(w);return P(n,t),n}function W(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(t){this[ot]=Y(),this._result=this._state=void 0,this._subscribers=[],w!==t&&("function"!=typeof t&&W(),this instanceof z?L(this,t):q())}function B(){var t=void 0;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=z}var G=void 0;G=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var H=G,J=0,Q=void 0,R=void 0,V=function(t,e){nt[J]=t,nt[J+1]=e,J+=2,2===J&&(R?R(d):rt())},X="undefined"!=typeof window?window:void 0,Z=X||{},$=Z.MutationObserver||Z.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof r&&"[object process]"==={}.toString.call(r),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),rt=void 0;rt=tt?u():$?f():et?a():void 0===X&&"function"==typeof t?h():l();var ot=Math.random().toString(36).substring(16),it=void 0,st=1,ut=2,ct=new C,ft=new C,at=0;return I.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===it&&t>n;n++)this._eachEntry(e[n],n)},I.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===v){var o=m(t);if(o===p&&t._state!==it)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===z){var i=new n(w);E(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},I.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===it&&(this._remaining--,t===ut?P(r,n):this._result[e]=n),0===this._remaining&&x(r,this._result)},I.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){return n._settledAt(st,e,t)},function(t){return n._settledAt(ut,e,t)})},z.all=K,z.race=N,z.resolve=v,z.reject=U,z._setScheduler=i,z._setAsap=s,z._asap=V,z.prototype={constructor:z,then:p,"catch":function(t){return this.then(null,t)}},z.polyfill=B,z.Promise=z,z})}).call(this,t("/usr/local/share/npm/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"/usr/local/share/npm/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":3}],3:[function(t,e){var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[1])});