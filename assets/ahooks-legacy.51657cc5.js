!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}System.register(["./vendor-legacy.16b09c67.js"],(function(e){"use strict";var n,r,i;return{setters:[function(t){n=t.c,r=t.R,i=t.r}],execute:function(){e("u",(function(t){var e=V(B((function(){var e=q(t);return{width:(e||{}).clientWidth,height:(e||{}).clientHeight}})),2),n=e[0],r=e[1];return i.exports.useLayoutEffect((function(){var e=q(t);if(!e)return function(){};var n=new A((function(t){t.forEach((function(t){r({width:t.target.clientWidth,height:t.target.clientHeight})}))}));return n.observe(e),function(){n.disconnect()}}),[t]),n}));var o=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),s="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,c="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(c):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],f="undefined"!=typeof MutationObserver,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){u(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){s&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),f?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){s&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),d=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||c},v=w(0,0,0,0);function p(t){return parseFloat(t)||0}function b(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function y(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return v;var r=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),u=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=b(r,"left","right")+o),Math.round(u+s)!==n&&(u-=b(r,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var a=Math.round(c+o)-e,f=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(f)&&(u-=f)}return w(i.left,i.top,c,u)}var _="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return s?_(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):y(t):v}function w(t,e,n,r){return{x:t,y:e,width:n,height:r}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),E=function(t,e){var n,r,i,o,s,c,u,a=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(c.prototype),d(u,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),u);d(this,{target:t,contentRect:a})},O=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new o,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new E(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),x="undefined"!=typeof WeakMap?new WeakMap:new o,M=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),r=new O(e,n,this);x.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){M.prototype[t]=function(){var e;return(e=x.get(this))[t].apply(e,arguments)}}));var A=e("i",void 0!==c.ResizeObserver?c.ResizeObserver:M),j="object"==t(n)&&n&&n.Object===Object&&n,S="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self;j||S||Function("return this")();var R="object"==t(n)&&n&&n.Object===Object&&n,L="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self;function T(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState}R||L||Function("return this")();var k=[],D=!1;if("undefined"!=typeof window&&window.addEventListener&&!D){var F=function(){if(T()&&(void 0===navigator.onLine||navigator.onLine))for(var t=0;t<k.length;t++){(0,k[t])()}};window.addEventListener("visibilitychange",F,!1),window.addEventListener("focus",F,!1),D=!0}var z=[],C=!1;if("undefined"!=typeof window&&window.addEventListener&&!C){window.addEventListener("visibilitychange",(function(){if(T())for(var t=0;t<z.length;t++){(0,z[t])()}}),!1),C=!0}var W=r.createContext({});W.displayName="UseRequestConfigContext";function q(t,e){return t?"function"==typeof t?t():"current"in t?t.current:t:e}W.Provider;var H=function(t){var e=function(t){var e=i.exports.useRef(t);e.current=t;var n=i.exports.useRef();return n.current||(n.current=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.current.apply(this,t)}),n.current}(t);i.exports.useEffect((function(){return function(){"function"==typeof e&&e()}}),[])},G=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s},B=function(t){var e=i.exports.useRef(0),n=G(i.exports.useState(t),2),r=n[0],o=n[1],s=i.exports.useCallback((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){o(t)}))}),[]);return H((function(){cancelAnimationFrame(e.current)})),[r,s]},V=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}}}}))}();