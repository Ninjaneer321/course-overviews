!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);n(0);var a=function(e){return{width:e.innerWidth||-1,height:e.innerHeight||-1}},r=function(e){return{width:e.screen&&e.screen.width||-1,height:e.screen&&e.screen.height||-1}},i=window,o=top;function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"log",null),u(this,"warn",null),u(this,"error",null),i.diagPixSentCodes=i.diagPixSentCodes||{},this.log=this.logger.bind(this,"log"),this.warn=this.logger.bind(this,"warn"),this.error=this.logger.bind(this,"error")}var t,n,a;return t=e,(n=[{key:"getAnid",value:function(){return i.__iasPET.pubId||""}},{key:"getSessionId",value:function(){return i.__iasPET.sessionId||""}},{key:"resetDiagPixSentCodes",value:function(){i.diagPixSentCodes={}}},{key:"buildQueryString",value:function(e,t){var n="";return e&&(n=Object.keys(e).reduce(function(n,a){return n.push([a,e[a]].join(t)),n},[]).join("&")),n}},{key:"getQueryParamByName",value:function(e){var t,n,a,r,o=i.location.search&&i.location.search.toLowerCase(),s=o&&o.indexOf(e);return-1!==s&&(t=o.indexOf("=",s)+1,n=-1===(a=o.indexOf("&",t))?void 0:a,r=decodeURIComponent(o.slice(t,n))),r}},{key:"diagPix",value:function(e,t){var n,a,r,o;if(!i.diagPixSentCodes[e])try{n=this.getAnid(),a=this.getSessionId(),i.diagPixSentCodes[e]=!0,r={code:"pet_"+e,anid:n,sessionId:a},t&&(r.err=encodeURIComponent(t.message)),o=this.buildQueryString(r,":"),(new i.Image).src="//pixel.adsafeprotected.com/jsdiagnostic?"+o}catch(e){c.error(e)}}},{key:"logger",value:function(e,t){var n="background-color: ",a=i.console&&"function"==typeof i.console.error,r=this.getQueryParamByName("iasdebug"),o=r&&"TRUE"===r.toUpperCase();"log"===e?n+="lightgreen":"error"===e?n+="pink":"warn"===e&&(n+="lightyellow"),a&&o&&console.log("%cIAS_DEBUG: "+t,n)}}])&&s(t.prototype,n),a&&s(t,a),e}()),l="gpt",f="longreq",d="m",g="na",h="profile",y="x",p="xe",m="xt";function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"sendXHR",value:function(e,t,n,a){var r,i;try{(r=new XMLHttpRequest)&&(i=encodeURI(e+"?"+t),r.open("GET",i),r.onreadystatechange=function(){var e;if(4===r.readyState&&200===r.status)if((e=r.responseText).code)c.error("XMLHttpRequest failure code: "+e.code+", message: "+e.message);else if(n)try{n.call({},e||{})}catch(e){c.error("Error firing the XMLHttpRequest callback: "+e.message)}},a&&(r.timeout=a),r.ontimeout=function(){c.error("XMLHttpRequest timeout event is fired."),c.diagPix(m,{message:"timeout:"+a})},r.onerror=function(e){c.error("XMLHttpRequest error event is fired."),c.diagPix(p,e)},r.send())}catch(e){c.error("Error sending XMLHttpRequest: "+e.message),c.diagPix(y,e)}}},{key:"forIn",value:function(e,t){var n;for(n in e)e.hasOwnProperty(n)&&t(n,e[n])}},{key:"getUID",value:function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"extend",value:function(e,t){return t&&Object.keys(t).forEach(function(n){e[n]=t[n]}),e}},{key:"isArray",value:function(e){return e instanceof Array}},{key:"isDef",value:function(e){return void 0!==e}},{key:"isFn",value:function(e){return"function"==typeof e}},{key:"isObj",value:function(e){return"object"===v(e)}},{key:"isEmptyObj",value:function(e){return 0===Object.getOwnPropertyNames(e).length}},{key:"now",value:function(){return(new Date).getTime()}},{key:"chance",value:function(e){return 100*Math.random()<e}}])&&S(t.prototype,n),a&&S(t,a),e}()),_=function(e){var t,n,a,r,i,o,s,u,c={},l=function(e){return e&&e.replace(/[^\w-_.>\/]/g,"")};t=l((i=e.adSlotId)&&i.replace(/\//g,"")),n=e.size&&e.size instanceof Array&&e.size.join("."),a=l(e.adUnitPath),r=function(t){var n="display";return void 0!==e.type&&null!=t&&"video"==l(t)&&(n="video"),n}(e.type),c.id=t,(c=b.extend(c,(o=e.size,u={},b.isArray(o)&&(o.every(b.isArray)?(s=o.map(function(e){return e.join(".")}).join(","),u.ss="["+s+"]"):u.s=o.join(".")),u))).p=a,c.t=r;return{toString:function(){var e,t=[];for(e in c)t.push(e+":"+c[e]);return"slot={"+t.join(",")+"}"},isValid:function(){return t&&n&&a}}};function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var A=new(function(){function e(){var t,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=[],(n="list")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}var t,n,a;return t=e,(n=[{key:"add",value:function(e){new _(e).isValid()?this.list.push(new _(e)):c.error("Missing ad slot id, slot size and/or ad unit path.")}},{key:"setAdSlots",value:function(e){var t=e.adSlots,n=this;t&&(t instanceof Array?t.forEach(function(e){n.add(e)}):b.isObj(t)&&this.add(t))}},{key:"clear",value:function(){this.list=[]}},{key:"stringify",value:function(){return this.list.join("&")}},{key:"isEmpty",value:function(){return 0===this.list.length}}])&&E(t.prototype,n),a&&E(t,a),e}());function I(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),D(this,"cachedPageData",{}),D(this,"cachedSlotsData",{}),D(this,"cachedCustomData",{}),D(this,"BRAND_SAFETY_OBJECT_FIELD_NAME","brandSafety"),D(this,"FRAUD_FIELD_NAME","fr"),D(this,"SLOTS_OBJECT_FIELD_NAME","slots"),D(this,"CUSTOM_FIELD_NAME","custom")}var t,n,a;return t=e,(n=[{key:"updateData",value:function(e){var t=JSON.parse(e),n=t[this.BRAND_SAFETY_OBJECT_FIELD_NAME],a=t[this.SLOTS_OBJECT_FIELD_NAME],r=t[this.CUSTOM_FIELD_NAME];t[this.FRAUD_FIELD_NAME]&&(this.cachedPageData[this.FRAUD_FIELD_NAME]=t[this.FRAUD_FIELD_NAME]);var i=function(e,t){b.forIn(e,function(e,n){t[e]=n})};i(n,this.cachedPageData),i(a,this.cachedSlotsData),i(r,this.cachedCustomData)}},{key:"clearCaches",value:function(){this.cachedPageData={},this.cachedSlotsData={},this.cachedCustomData={}}},{key:"setTargetingWrapper",value:function(e,t){e&&b.isFn(e.setTargeting)&&b.forIn(t,function(t,n){c.log("setting targeting: {"+t+": "+n+"}"),e.setTargeting(t,n)})}},{key:"setSlotLevelData",value:function(){var e,t=this,n=i.googletag.pubads().getSlots();n?n.forEach(function(n){(e=b.isFn(n.getSlotElementId)&&n.getSlotElementId())&&t.setTargetingWrapper(n,t.cachedSlotsData[e])}):c.error("GPT slots have to be defined before setting slot level keyword targeting")}},{key:"setPageLevelData",value:function(){this.setTargetingWrapper(i.googletag.pubads(),this.cachedPageData)}},{key:"setCustomLevelData",value:function(){this.setTargetingWrapper(i.googletag.pubads(),this.cachedCustomData)}},{key:"setTargeting",value:function(){var e=this;return function(){i.googletag?i.googletag.cmd.push(function(){e.setPageLevelData(),e.setSlotLevelData(),e.setCustomLevelData()}):(c.error("googletag is not available. Cannot set keyword targeting for GPT."),c.diagPix(l))}}}])&&I(t.prototype,n),a&&I(t,a),e}());function T(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"cachedPageData",{}),P(this,"cachedSlotsData",{}),P(this,"cachedCustomData",{}),P(this,"BRAND_SAFETY_OBJECT_FIELD_NAME","brandSafety"),P(this,"FRAUD_FIELD_NAME","fr"),P(this,"SLOTS_OBJECT_FIELD_NAME","slots"),P(this,"CUSTOM_FIELD_NAME","custom")}var t,n,a;return t=e,(n=[{key:"updateData",value:function(e){var t=JSON.parse(e),n=t[this.BRAND_SAFETY_OBJECT_FIELD_NAME],a=t[this.SLOTS_OBJECT_FIELD_NAME],r=t[this.CUSTOM_FIELD_NAME];t[this.FRAUD_FIELD_NAME]&&(this.cachedPageData[this.FRAUD_FIELD_NAME]=t[this.FRAUD_FIELD_NAME]);var i=function(e,t){b.forIn(e,function(e,n){t[e]=n})};i(n,this.cachedPageData),i(a,this.cachedSlotsData),i(r,this.cachedCustomData)}},{key:"clearCaches",value:function(){this.cachedPageData={},this.cachedSlotsData={},this.cachedCustomData={}}},{key:"setTargeting",value:function(){var e=this;return function(){if(i.apntag&&i.apntag.requests&&i.apntag.requests.tags){var t=apntag.requests.tags;Object.keys(t).map(function(t){apntag.setKeywords(t,e.cachedPageData),apntag.setKeywords(t,e.cachedSlotsData[t]),apntag.setKeywords(t,e.cachedCustomData)})}else c.error("apntag is not available. Cannot set keyword targeting for AppNexus.")}}}])&&T(t.prototype,n),a&&T(t,a),e}());function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var C=function(){function e(){var t,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a={},(n="requestStatusDict")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}var t,n,o;return t=e,(n=[{key:"reportLongRequest",value:function(e){var t=this;return setTimeout(function(){t.requestStatusDict[e]||(c.diagPix(f,{message:"threshold:2000"}),c.warn("Long PET request that exceeds 2000ms."))},2e3)}},{key:"reportResponseTime",value:function(e){var t,n,a=this,r=c.getQueryParamByName("iasprofileprobability")||10,i={};b.chance(r)&&setTimeout(function(){t=a.requestStatusDict[e],n=t&&t-e,i.responsetime=n,i.probability=r,c.diagPix(h,{message:c.buildQueryString(i,":")})},2e3)}},{key:"send",value:function(e,t){var n,a,r,i=this,o=!1,s=c.getQueryParamByName("iasendpoint")||"//pixel.adsafeprotected.com/services/pub",u=this.buildQueryStrings(),l=b.isFn(e);u&&(n=function(t){o=b.now(),c.log("PET response "+t),i.requestStatusDict[a]=o,w.updateData(t),k.updateData(t),l&&e(t),clearTimeout(r)},a=b.now(),this.requestStatusDict[a]=!1,b.sendXHR(s,u,n,t),r=this.reportLongRequest(a),this.reportResponseTime(a),A.clear())}},{key:"stringifySize",value:function(e){return e.width+"."+e.height}},{key:"buildQueryStrings",value:function(){var e=[],t=i.__iasPET.pubId,n=this.stringifySize(a(i)),o=this.stringifySize(r(i)),s=i.__iasPET.sessionId;if(!A.isEmpty()&&t)return e.push("anId="+t),e.push(A.stringify()),e.push("wr="+n),e.push("sr="+o),e.push("sessionId="+s),e.push("url="+encodeURIComponent(window.location.href)),c.log("ad slots set: "+JSON.stringify(A)),c.log("anid set: "+t),e.join("&");A.isEmpty()&&c.error("Expected valid ad slot configuration."),t||c.error("Expecting valid IAS publisher id."),c.diagPix(d)}}])&&x(t.prototype,n),o&&x(t,o),e}();function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"timeout",null),R(this,"dataHandler",null),R(this,"outputManager",null),R(this,"commands",null),this.outputManager=new C,this.commands=this.commands||i.__iasPET.queue;var t=this;this.commands.push=function(e){var n;try{if(b.isFn(e))n=e();else{if(!b.isObj(e))throw Error("Items pushed into the queue must be a function or object");n=e}}catch(e){c.error("Error processing queued command: "+e.message)}t.setFromConfig(n),t.outputManager.send(t.dataHandler,t.timeout)}}var t,n,a;return t=e,(n=[{key:"executeCommands",value:function(){var e,t;if(this.commands=this.commands||i.__iasPET.queue,this.commands&&this.commands.length){for(e=0;e<this.commands.length;++e){try{b.isFn(this.commands[e])?t=this.commands[e]():b.isObj(this.commands[e])&&(t=this.commands[e])}catch(e){c.error("Error processing queued command: "+e.message)}this.setFromConfig(t)}this.outputManager.send(this.dataHandler,this.timeout)}}},{key:"setFromConfig",value:function(e){e&&(this.dataHandler=b.isFn(e.dataHandler)?e.dataHandler:this.dataHandler,this.timeout=e.timeout||this.timeout,A.setAdSlots(e))}}])&&O(t.prototype,n),a&&O(t,a),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(){var e,t,n;function a(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),F(this,"adServer",void 0),F(this,"iframesHtmlContents",{}),F(this,"topRequests",[{id:"isRefreshable",handler:function(e,t){var n=e.identifyAdServer(e.adServerList);t.source.postMessage(JSON.stringify(n),t.origin)}},{id:"recordAdSlotImpression",handler:function(e,t,n){try{var a=e.getAdServer(),r=a.getAllAdSlots();a.findAdSlotByAdUnitId(r,n.adUnitId,function(a,r){!a&&r?e.recordAdSlotImpression(t,n.asid,n.adUnitId,r,n.cacheId):c.warn("Unable to find adSlot by adUnitId",a)},e.getIframesHtmlContents(),n.cacheId)}catch(e){c.error(e)}}},{id:"refreshAd",handler:function(e,t,n){try{var a=e.getAdServer(),r=n&&n.adUnitId;a.refresh(a.findAdSlotByCacheId(n.cacheId),r)}catch(e){c.error(e)}}}]),F(this,"adServerList",[{adServerName:"GPT",available:function(){return!!(i.googletag&&i.googletag.apiReady&&i.googletag.pubads&&"function"==typeof i.googletag.pubads)},findAdSlotByCacheId:function(e){var t=Object.keys(o.__IntegralASExec.adSlotData).filter(function(t){return o.__IntegralASExec.adSlotData[t].adSlot.cacheId===e})[0];return o.__IntegralASExec&&o.__IntegralASExec.adSlotData&&o.__IntegralASExec.adSlotData[t]&&o.__IntegralASExec.adSlotData[t].adSlot||null},getAdSlot:function(e){return o.__IntegralASExec&&o.__IntegralASExec.adSlotData&&o.__IntegralASExec.adSlotData[e]&&o.__IntegralASExec.adSlotData[e].adSlot||null},getAllAdSlots:function(){var e=i.googletag.pubads&&"function"==typeof i.googletag.pubads&&i.googletag.pubads();return e&&"function"==typeof e.getSlots&&e.getSlots()},isAdUnitIdInSlot:function(e,t,n){var a=null,r=new RegExp("&chanId=".concat(t,"&"),"g"),i=new RegExp("".concat(n),"gim"),o=e&&e.iasHtml&&"string"==typeof e.iasHtml&&e.iasHtml||null,s=r.test(o),u=i.test(o);return o&&s&&u&&(a=e),a},matchAdSlotHtml:function(e,t){if(!e)return null;var n,a,r,i=Object.keys(t).map(function(e){return t[e]});return e.forEach(function(e){n=e.getEscapedQemQueryId(),r=new RegExp("".concat(n),"g"),e.iasHtml=i.filter(function(e){return r.test(e)})[0]||null,e.iasHtml||(a=new RegExp("".concat(e.getSlotId().toString()),"g"),Object.keys(t).forEach(function(n){a.test(n)&&(e.iasHtml=t[n])}))}),e},findAdSlotByAdUnitId:function(e,t,n,a,r){var i=this.matchAdSlotHtml(e,a);if(i&&Array.isArray(i)){var o,s=null;for(o=0;o<i.length;o+=1)if(s=this.isAdUnitIdInSlot(i[o],t,r)){n(null,s);break}s||n(new Error("Ad Slot Not Found"))}else n(new Error("slots or ad unit id missing from request"))},refresh:function(e,t){var n=i.googletag&&i.googletag.cmd,a=i.googletag&&i.googletag.pubads&&"function"==typeof i.googletag.pubads&&i.googletag.pubads();n&&a&&"function"==typeof a.refresh&&e&&!this.isAdSlotExcluded(e,t)&&(this.setRefreshTargeting(e,t),n.push(function(){a.refresh([e])}))},setRefreshTargeting:function(e,t){var n="AD_UNIT_".concat(t,"__").concat(e.getSlotId().toString());i.__iasAdRefreshConfig.refreshTargeting&&i.__iasAdRefreshConfig.refreshTargeting.enabled&&i.__IntegralASExec.adSlotData.hasOwnProperty(n)&&("string"==typeof i.__iasAdRefreshConfig.refreshTargeting.targetingKey&&i.__iasAdRefreshConfig.refreshTargeting.targetingKey.trim()?e.setTargeting(i.__iasAdRefreshConfig.refreshTargeting.targetingKey.trim(),i.__IntegralASExec.adSlotData[n].refreshCount+1):c.warn("Invalid refresh targeting key specficied in config"))},buildAndValidateExtras:function(e,t,n){var a=!1;if("adSize"===e){var r=t.map(function(e){return"&campId=".concat(e,"&")});a=new RegExp("(".concat(r.join("|"),")"),"g").test(n)}if(/^custom/.test(e)){var i=t.map(function(t){return"&".concat(e,"=").concat(t)});a=new RegExp("(".concat(i.join("|"),")"),"g").test(n)}return a},isAdSlotExcluded:function(e,t){var n=this,a=e.getResponseInformation(),r=i.__iasAdRefreshConfig.excludeList?JSON.parse(JSON.stringify(i.__iasAdRefreshConfig.excludeList)):null,o=!1;return a.adUnitId=NaN!==Number(t)?Number(t):t,a.chanId=a.adUnitId,r&&Object.keys(r).forEach(function(t){Array.isArray(r[t])||"object"===j(r[t])||(r[t]=[r[t]]),a.hasOwnProperty(t)&&r[t].indexOf(a[t])>-1&&(o=!0),("adSize"===t||/^custom/.test(t))&&(o=n.buildAndValidateExtras(t,r[t],e.iasHtml))}),o}}]);var e=this;i.__iasAdRefreshConfig=i.__iasAdRefreshConfig||{},o.addEventListener("message",function(t){e.setIframesHtmlContents(),/requestTop/g.test(t.data)&&e.handleTopRequests(t)})}return e=a,(t=[{key:"getAdServer",value:function(){return this.adServer}},{key:"setAdServer",value:function(e){this.adServer=e}},{key:"identifyAdServer",value:function(e){for(var t=0;t<e.length;t+=1)if(e[t].adServerName&&e[t].available&&"function"==typeof e[t].available&&e[t].available())return this.setAdServer(e[t]),{isRefreshable:!0,adServerName:e[t].adServerName};return{isRefreshable:!1,adServerName:null}}},{key:"findAdServerByName",value:function(e){for(var t=0;t<this.adServerList.length;t+=1)if(this.adServerList[t].adServerName===e)return this.adServerList[t];return null}},{key:"getTopRequestById",value:function(e){for(var t=null,n=0;n<this.topRequests.length;n+=1)if(e===this.topRequests[n].id){t=this.topRequests[n];break}return t}},{key:"handleTopRequests",value:function(e){var t,n=JSON.parse(e.data);n&&n.requestTop&&(t=this.getTopRequestById(n.requestTop))&&t.handler&&"function"==typeof t.handler&&t.handler(this,e,n)}},{key:"getAdSlotDataIdForAdUnitId",value:function(e){return"AD_UNIT_"+e}},{key:"recordAdSlotImpression",value:function(e,t,n,a,r){try{var i="".concat(this.getAdSlotDataIdForAdUnitId(n),"__").concat(a.getSlotId().toString());a.cacheId=r,o.__IntegralASExec=o.__IntegralASExec||{},o.__IntegralASExec.adSlotData=o.__IntegralASExec.adSlotData||{},o.__IntegralASExec.adSlotData.hasOwnProperty(i)?o.__IntegralASExec.adSlotData[i].refreshCount+=1:o.__IntegralASExec.adSlotData[i]={refreshCount:0,refreshSessionId:t,adSlot:a},this.sendRefreshSession(e,o.__IntegralASExec.adSlotData[i],i)}catch(e){c.error("Unable to record ad slot impression",e)}}},{key:"sendRefreshSession",value:function(e,t){var n={requestId:"refreshSession",refreshCount:t.refreshCount,refreshSessionId:t.refreshSessionId};e.source.postMessage(JSON.stringify(n),e.origin)}},{key:"setIframesHtmlContents",value:function(){var e=this;o.ampInaboxIframes&&o.ampInaboxIframes.forEach(function(t){try{var n;Boolean(t.getAttribute("data-is-safeframe"))||Boolean(t.getAttribute("sandbox"))||(n=t.contentDocument||t.contentWindow&&t.contentWindow.document),n?e.iframesHtmlContents[t.id]=n.body.innerHTML:(Boolean(t.getAttribute("data-is-safeframe"))||Boolean(t.getAttribute("sandbox")))&&t.name&&(e.iframesHtmlContents[t.id]=t.name)}catch(e){c.warn("Unable to access the iframe html contents",e)}})}},{key:"getIframesHtmlContents",value:function(){return this.iframesHtmlContents}}])&&L(e.prototype,t),n&&L(e,n),a}();var q=function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.__iasPET.queue=i.__iasPET.queue||[],i.__iasPET.VERSION="1.16.16",i.__iasPET.setTargetingForGPT=w.setTargeting(),i.__iasPET.setTargetingForAppNexus=k.setTargeting(),"undefined"!=typeof XMLHttpRequest){i.__iasPET.sessionId=b.getUID(),(new N).executeCommands();new M}else c.diagPix(g)};n.d(t,"start",function(){return U});var U=function(){try{new q}catch(e){c.error(e.message)}};i.__iasPET=window.__iasPET||{},i.__iasPET.start=window.__iasPET.start||U,i.__iasPET.start()}]);