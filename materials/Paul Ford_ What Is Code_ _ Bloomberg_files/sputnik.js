!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e){e.exports=JSON.parse('{"abbaId":"abba-id","moduleId":"module","moduleTitle":"module-title","storyId":"story","pageviewId":"pageview-id"}')},function(e){e.exports=JSON.parse('{"abbaExperiments":"abex","abbaId":"abid","count":"cnt","pageviewId":"pvid","parentId":"pid","positionX":"px","positionY":"py","timezoneOffset":"tzo","trackingTitle":"mttl","type":"ty","viewportHeight":"vh","viewportWidth":"vw"}')},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var u=(e=e||{}).random||(e.rng||r)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var a=0;a<16;++a)t[i+a]=u[a];return t||o(u)}},function(e){e.exports=JSON.parse('{"a":"1.4.2"}')},function(e,t,n){e.exports=n(7)},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var a=/^(impression|click)$/,c=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"queue",new Set),u(this,"defaultProperties",{}),this.defaultProperties=r,n.forEach((function(e){return t.push(e)}))}return i(e,[{key:"size",get:function(){return this.queue.size}}]),i(e,[{key:"push",value:function(e){this._assertType(e)&&this.queue.add(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},this.defaultProperties))}},{key:"flush",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=-1*Math.min(Math.abs(t),this.queue.size),r=Array.from(this.queue),o=r.slice(n);return n?(o.forEach((function(t){return e.queue.delete(t)})),new Set(o)):(this.queue.clear(),new Set(r))}},{key:"_assertType",value:function(e){var t=e.eventType;return a.test(t)}}]),e}(),s={interval:500,timer:null,stopped:!1,start:function(e,t){if("function"!=typeof e)return null;this.interval=isNaN(t)?this.interval:t,this.stopped=!1,this._onTick=e,this.timer=setTimeout(this._tick.bind(this),this.interval)},stop:function(){this.stopped=!0,clearTimeout(this.timer),this.timer=null},_tick:function(){this.stopped||(this._onTick(),this.timer=setTimeout(this._tick.bind(this),this.interval))}};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"maxUrlLength",2e3),l(this,"decorators",[]),l(this,"fields",[]),this.fields=t.fields||[]}var t,n,r;return t=e,(n=[{key:"addDecorator",value:function(e){"function"==typeof e&&this.decorators.push(e)}},{key:"getFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.fields.reduce((function(t,n){return n in e&&(t[n]=e[n]),t}),{})}},{key:"prepare",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getFields(e);return this.decorators.length?this.decorators.reduce((function(e,t){return t(e)}),t):t}},{key:"checkUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.length>this.maxUrlLength&&console.warn("Sputnik: Url exceeds maximum recommended length")}},{key:"send",value:function(){throw new Error("Unimplemented method")}}])&&f(t.prototype,n),r&&f(t,r),e}();function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,r){var o=t[r]?t[r]:r,i=e[r];return function(e){return null!=e&&""!==e}(i)&&n.push(function(e,t){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))}(o,i)),n}),[])}function y(e,t){return b(e,t).join(",")}var d="abbaExperiments,abbaId,count,id,parentId,positionX,positionY,timezoneOffset,trackingTitle,type,viewportHeight,viewportWidth,pageviewId".split(","),h="action,category,pageviewId,data".split(","),v=n(0);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T={transport:"beacon"},x=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=k(this,S(t).call(this,w({fields:h},n)))).opt=w({},T,{},n),e.ga=window.ga,e.addDecorator(t._decorator),e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,o=[{key:"_decorator",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.data,o=m(e,["category","action","data"]),i=y(w({},r,{},o),v);if(!t||!n)throw new Error("Sputnik: Required parameters category and action are not specified");return i.length>500&&console.warn("Sputnik: eventLabel limit is exceeded!"),{eventCategory:t,eventAction:n,eventLabel:i}}}],(r=[{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ga)return null;var t=this.prepare(e);this.ga("send","event",w({},this.opt,{},t))}}])&&P(n.prototype,r),o&&P(n,o),t}(p),E=n(1);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=z(this,q(t).call(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fields:d},e)))).baseUrl=e.baseUrl,n.addDecorator((function(e){return function(e,t){return b(e,t).join("&")}(e,E)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"send",value:function(e){var t=this.prepare(e),n="".concat(this.baseUrl,"?").concat(t);this.checkUrl(n),this._isBeaconSupported()?navigator.sendBeacon(n):(new Image).src=n}},{key:"_isBeaconSupported",value:function(){return navigator&&"function"==typeof navigator.sendBeacon}}])&&C(n.prototype,r),o&&C(n,o),t}(p);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M,Q,A,L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"sendBulk",value:function(t){t.forEach((function(t){var n=t.eventType,r="click"===n?e.transports[n]:e.transports.default;r&&r.send(t)}))}}])&&B(t.prototype,n),r&&B(t,r),e}();M=L,Q="transports",A={default:new R({baseUrl:"https://tracking.bloomberg.com/imp/pixel.gif"}),click:new x},Q in M?Object.defineProperty(M,Q,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[Q]=A;var V=n(2),J=n(3);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=function(){function e(t,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,"eventQueue",null),X(this,"transmitter",null),X(this,"pageviewId",V()),X(this,"timezoneOffset",60*(new Date).getTimezoneOffset()*1e3),X(this,"version",J.a),r instanceof e?r:(o=navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack||null,1===parseInt(o)||"yes"===o?(console.warn("Tracking is disabled due to user request (DNT)"),this):(this.eventQueue=new c(r,{pageviewId:this.pageviewId,timezoneOffset:this.timezoneOffset}),this.transmitter=new L(t),this._onDocumentUnload=this._onDocumentUnload.bind(this),this._onPeriodicSync=this._onPeriodicSync.bind(this),t.addEventListener("beforeunload",this._onDocumentUnload),s.start(this._onPeriodicSync),void(n.cookie="__sppvid=".concat(this.pageviewId,";domain=.bloomberg.com;"))));var o}var t,n,r;return t=e,(n=[{key:"push",value:function(e){this.eventQueue&&e&&this.eventQueue.push(H({},e))}},{key:"trackClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.push(H({},e,{eventType:"click"}))}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.push(H({},e,{eventType:"impression"}))}},{key:"_onDocumentUnload",value:function(){s.stop(),this.transmitter.sendBulk(this.eventQueue.flush())}},{key:"_onPeriodicSync",value:function(){this.transmitter.sendBulk(this.eventQueue.flush(20))}}])&&W(t.prototype,n),r&&W(t,r),e}();window.bbeep=new Y(window,document,window.bbeep)}]);