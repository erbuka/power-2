/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={402:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(645),s=i.n(n),r=i(667),o=i.n(r),a=i(591),h=s()((function(t){return t[1]})),c=o()(a.Z);h.push([t.id,'@font-face {\r\n  font-family: "Kanit";\r\n  src: url('+c+') format("truetype");\r\n  font-weight: 700;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n \r\ncanvas {\r\n  display: block;\r\n}',""]);const u=h},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);n&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},591:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n=i.p+"15483ed759d0819429c48f1caa0e1c77.ttf"},840:(t,e,i)=>{var n;!function(s,r,o,a){"use strict";var h,c=["","webkit","Moz","MS","ms","o"],u=r.createElement("div"),l=Math.round,p=Math.abs,f=Date.now;function d(t,e,i){return setTimeout(S(t,i),e)}function v(t,e,i){return!!Array.isArray(t)&&(m(t,i[e],i),!0)}function m(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function g(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=s.console&&(s.console.warn||s.console.log);return r&&r.call(s.console,n,i),t.apply(this,arguments)}}h="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==a&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e}:Object.assign;var y=g((function(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&t[n[s]]===a)&&(t[n[s]]=e[n[s]]),s++;return t}),"extend","Use `assign`."),T=g((function(t,e){return y(t,e,!0)}),"merge","Use `assign`.");function w(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&h(n,i)}function S(t,e){return function(){return t.apply(e,arguments)}}function E(t,e){return"function"==typeof t?t.apply(e&&e[0]||a,e):t}function b(t,e){return t===a?e:t}function x(t,e,i){m(I(e),(function(e){t.addEventListener(e,i,!1)}))}function C(t,e,i){m(I(e),(function(e){t.removeEventListener(e,i,!1)}))}function A(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function M(t,e){return t.indexOf(e)>-1}function I(t){return t.trim().split(/\s+/g)}function z(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function _(t,e,i){for(var n=[],s=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];z(s,o)<0&&n.push(t[r]),s[r]=o,r++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}function D(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),r=0;r<c.length;){if((n=(i=c[r])?i+s:e)in t)return n;r++}return a}var R=1;function O(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var N="ontouchstart"in s,F=D(s,"PointerEvent")!==a,k=N&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Y="touch",X="mouse",q=["x","y"],L=["clientX","clientY"];function W(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){E(t.options.enable,[t])&&i.handler(e)},this.init()}function G(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,r=1&e&&n-s==0,o=12&e&&n-s==0;i.isFirst=!!r,i.isFinal=!!o,r&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=H(e)),s>1&&!i.firstMultiple?i.firstMultiple=H(e):1===s&&(i.firstMultiple=!1);var r=i.firstInput,o=i.firstMultiple,h=o?o.center:r.center,c=e.center=j(n);e.timeStamp=f(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=Z(h,c),e.distance=$(h,c),function(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};1!==e.eventType&&4!==r.eventType||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}(i,e),e.offsetDirection=V(e.deltaX,e.deltaY);var u,l,d=U(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=p(d.x)>p(d.y)?d.x:d.y,e.scale=o?(u=o.pointers,$((l=n)[0],l[1],L)/$(u[0],u[1],L)):1,e.rotation=o?function(t,e){return Z(e[1],e[0],L)+Z(t[1],t[0],L)}(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,s,r,o=t.lastInterval||e,h=e.timeStamp-o.timeStamp;if(8!=e.eventType&&(h>25||o.velocity===a)){var c=e.deltaX-o.deltaX,u=e.deltaY-o.deltaY,l=U(h,c,u);n=l.x,s=l.y,i=p(l.x)>p(l.y)?l.x:l.y,r=V(c,u),t.lastInterval=e}else i=o.velocity,n=o.velocityX,s=o.velocityY,r=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=r}(i,e);var v=t.element;A(e.srcEvent.target,v)&&(v=e.srcEvent.target),e.target=v}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function H(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:l(t.pointers[i].clientX),clientY:l(t.pointers[i].clientY)},i++;return{timeStamp:f(),pointers:e,center:j(e),deltaX:t.deltaX,deltaY:t.deltaY}}function j(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:l(i/e),y:l(n/e)}}function U(t,e,i){return{x:e/t||0,y:i/t||0}}function V(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:16}function $(t,e,i){i||(i=q);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function Z(t,e,i){i||(i=q);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}W.prototype={handler:function(){},init:function(){this.evEl&&x(this.element,this.evEl,this.domHandler),this.evTarget&&x(this.target,this.evTarget,this.domHandler),this.evWin&&x(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(O(this.element),this.evWin,this.domHandler)}};var B={mousedown:1,mousemove:2,mouseup:4},K="mousedown",J="mousemove mouseup";function Q(){this.evEl=K,this.evWin=J,this.pressed=!1,W.apply(this,arguments)}w(Q,W,{handler:function(t){var e=B[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:X,srcEvent:t}))}});var tt={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},et={2:Y,3:"pen",4:X,5:"kinect"},it="pointerdown",nt="pointermove pointerup pointercancel";function st(){this.evEl=it,this.evWin=nt,W.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(it="MSPointerDown",nt="MSPointerMove MSPointerUp MSPointerCancel"),w(st,W,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=tt[n],r=et[t.pointerType]||t.pointerType,o=r==Y,a=z(e,t.pointerId,"pointerId");1&s&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):12&s&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(a,1))}});var rt={touchstart:1,touchmove:2,touchend:4,touchcancel:8},ot="touchstart",at="touchstart touchmove touchend touchcancel";function ht(){this.evTarget=ot,this.evWin=at,this.started=!1,W.apply(this,arguments)}function ct(t,e){var i=P(t.touches),n=P(t.changedTouches);return 12&e&&(i=_(i.concat(n),"identifier",!0)),[i,n]}w(ht,W,{handler:function(t){var e=rt[t.type];if(1===e&&(this.started=!0),this.started){var i=ct.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Y,srcEvent:t})}}});var ut={touchstart:1,touchmove:2,touchend:4,touchcancel:8},lt="touchstart touchmove touchend touchcancel";function pt(){this.evTarget=lt,this.targetIds={},W.apply(this,arguments)}function ft(t,e){var i=P(t.touches),n=this.targetIds;if(3&e&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,r,o=P(t.changedTouches),a=[],h=this.target;if(r=i.filter((function(t){return A(t.target,h)})),1===e)for(s=0;s<r.length;)n[r[s].identifier]=!0,s++;for(s=0;s<o.length;)n[o[s].identifier]&&a.push(o[s]),12&e&&delete n[o[s].identifier],s++;return a.length?[_(r.concat(a),"identifier",!0),a]:void 0}function dt(){W.apply(this,arguments);var t=S(this.handler,this);this.touch=new pt(this.manager,t),this.mouse=new Q(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function vt(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,mt.call(this,e)):12&t&&mt.call(this,e)}function mt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),2500)}}function gt(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],r=Math.abs(e-s.x),o=Math.abs(i-s.y);if(r<=25&&o<=25)return!0}return!1}w(pt,W,{handler:function(t){var e=ut[t.type],i=ft.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Y,srcEvent:t})}}),w(dt,W,{handler:function(t,e,i){var n=i.pointerType==Y,s=i.pointerType==X;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)vt.call(this,e,i);else if(s&&gt.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var yt=D(u.style,"touchAction"),Tt=yt!==a,wt="compute",St="auto",Et="manipulation",bt="none",xt="pan-x",Ct="pan-y",At=function(){if(!Tt)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){t[i]=!e||s.CSS.supports("touch-action",i)})),t}();function Mt(t,e){this.manager=t,this.set(e)}Mt.prototype={set:function(t){t==wt&&(t=this.compute()),Tt&&this.manager.element.style&&At[t]&&(this.manager.element.style[yt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,(function(e){E(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(M(t,bt))return bt;var e=M(t,xt),i=M(t,Ct);return e&&i?bt:e||i?e?xt:Ct:M(t,Et)?Et:St}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,s=M(n,bt)&&!At.none,r=M(n,Ct)&&!At["pan-y"],o=M(n,xt)&&!At["pan-x"];if(s){var a=1===t.pointers.length,h=t.distance<2,c=t.deltaTime<250;if(a&&h&&c)return}if(!o||!r)return s||r&&6&i||o&&24&i?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var It=32;function zt(t){this.options=h({},this.defaults,t||{}),this.id=R++,this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Pt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function _t(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function Dt(t,e){var i=e.manager;return i?i.get(t):t}function Rt(){zt.apply(this,arguments)}function Ot(){Rt.apply(this,arguments),this.pX=null,this.pY=null}function Nt(){Rt.apply(this,arguments)}function Ft(){zt.apply(this,arguments),this._timer=null,this._input=null}function kt(){Rt.apply(this,arguments)}function Yt(){Rt.apply(this,arguments)}function Xt(){zt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function qt(t,e){return(e=e||{}).recognizers=b(e.recognizers,qt.defaults.preset),new Lt(t,e)}function Lt(t,e){this.options=h({},qt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new(this.options.inputClass||(F?st:k?pt:N?dt:Q))(this,G),this.touchAction=new Mt(this,this.options.touchAction),Wt(this,!0),m(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Wt(t,e){var i,n=t.element;n.style&&(m(t.options.cssProps,(function(s,r){i=D(n.style,r),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}zt.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Dt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)||(t=Dt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===z(e,t=Dt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Dt(t,this);var e=z(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+Pt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+Pt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=It},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!E(this.options.enable,[this,e]))return this.reset(),void(this.state=It);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},w(Rt,zt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=6&e,s=this.attrTest(t);return n&&(8&i||!s)?16|e:n||s?4&i?8|e:2&e?4|e:2:It}}),w(Ot,Rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(Ct),24&t&&e.push(xt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(6&e.direction?(s=0===r?1:r<0?2:4,i=r!=this.pX,n=Math.abs(t.deltaX)):(s=0===o?1:o<0?8:16,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Rt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=_t(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),w(Nt,Rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),w(Ft,zt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[St]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||12&t.eventType&&!s)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return It},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),w(kt,Rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),w(Yt,Rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return 30&i?e=t.overallVelocity:6&i?e=t.overallVelocityX:24&i&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=_t(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),w(Xt,zt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Et]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&s&&i){if(4!=t.eventType)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||$(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return It},failTimeout:function(){return this._timer=d((function(){this.state=It}),this.options.interval,this),It},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),qt.VERSION="2.0.7",qt.defaults={domEvents:!1,touchAction:wt,enable:!0,inputTarget:null,inputClass:null,preset:[[kt,{enable:!1}],[Nt,{enable:!1},["rotate"]],[Yt,{direction:6}],[Ot,{direction:6},["swipe"]],[Xt],[Xt,{event:"doubletap",taps:2},["tap"]],[Ft]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Lt.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,s=e.curRecognizer;(!s||s&&8&s.state)&&(s=e.curRecognizer=null);for(var r=0;r<n.length;)i=n[r],2===e.stopped||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&14&i.state&&(s=e.curRecognizer=i),r++}},get:function(t){if(t instanceof zt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=z(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return m(I(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this}},off:function(t,e){if(t!==a){var i=this.handlers;return m(I(t),(function(t){e?i[t]&&i[t].splice(z(i[t],e),1):delete i[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=r.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&Wt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(qt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:It,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Lt,Input:W,TouchAction:Mt,TouchInput:pt,MouseInput:Q,PointerEventInput:st,TouchMouseInput:dt,SingleTouchInput:ht,Recognizer:zt,AttrRecognizer:Rt,Tap:Xt,Pan:Ot,Swipe:Yt,Pinch:Nt,Rotate:kt,Press:Ft,on:x,off:C,each:m,merge:T,extend:y,assign:h,inherit:w,bindFn:S,prefixed:D}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=qt,(n=function(){return qt}.call(e,i,e,t))===a||(t.exports=n)}(window,document)},379:(t,e,i)=>{"use strict";var n,s=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),r=[];function o(t){for(var e=-1,i=0;i<r.length;i++)if(r[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],s=0;s<t.length;s++){var a=t[s],h=e.base?a[0]+e.base:a[0],c=i[h]||0,u="".concat(h," ").concat(c);i[h]=c+1;var l=o(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(r[l].references++,r[l].updater(p)):r.push({identifier:u,updater:v(p,e),references:1}),n.push(u)}return n}function h(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,d=0;function v(t,e){var i,n,s;if(e.singleton){var r=d++;i=f||(f=h(e)),n=l.bind(null,i,r,!1),s=l.bind(null,i,r,!0)}else i=h(e),n=p.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=o(i[n]);r[s].references--}for(var h=a(t,e),c=0;c<i.length;c++){var u=o(i[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=h}}}}},e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{"use strict";class t{constructor(t){this.size=t,this.count=t*t,this.data=new Array(t*t);for(let e=0;e<t*t;e++)this.data[e]=-1}init(){let t=this.count,e=Array.iota(0,t-1);for(let t=0;t<this.size/2;t++){let t=e.fish();this.data[t]=1}this.computeNext()}computeNext(){let t=Math.random();for(let e=this.getHighestPower();e>=1;e--)if(t<Math.pow(1/e,3))return void(this.next=e);throw"This shouldn't be thrown"}clone(){let e=new t(this.size);return e.data=this.data.map((t=>t)),e}randomFreeSpot(){return this.data.map(((t,e)=>[t,e])).filter((t=>-1===t[0])).fish()[1]}get(t,e){return t<0||t>=this.size||e<0||e>=this.size?null:this.data[e*this.size+t]}set(t,e,i){this.data[e*this.size+t]=i}getScore(t){let e=0;for(let t of this.data)t>1&&(e+=Math.pow(3,t-1));return e}canMove(){if(this.data.find((t=>-1==t)))return!0;for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++){let i=this.get(t,e);if(i===this.get(t+1,e)||i===this.get(t,e+1))return!0}return!1}move(t){let e=[],i="left"===t||"up"===t,n="left"===t||"right"===t,s=this.clone(),r=i?Array.iota(0,this.size-2):Array.iota(this.size-1,1),o=i?1:-1;for(let t of r)for(let i=0;i<this.size;i++){let r=n?t:i,a=n?i:t,h=n?r+o:r,c=n?a:a+o,u=s.get(r,a),l=s.get(h,c);-1===u?(s.set(r,a,l),s.set(h,c,-1),-1!==l&&e.push([r,a,h,c])):u===l&&(s.set(r,a,u+1),s.set(h,c,-1),e.push([r,a,h,c]))}return e.length>0&&(s.data[s.randomFreeSpot()]=this.next),s.computeNext(),{moves:e,state:s}}getHighestPower(){let t=-1;return this.data.forEach((e=>t=Math.max(t,e))),t}}const e=i.p+"d50e4d4642c991ab7752938c2ac26649.mp3";var n=i(840);class s{constructor(){this.colors=[],this.animatedSquares=[],this.highScore=parseInt(localStorage.getItem("highscore"))||0;for(let t=0;t<1440;t+=75)this.colors.push(`hsl(${t%360}, 50%, 50%)`)}start(){this.state=2,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sound={swipe:new Audio(e)};let t=new n(this.canvas);t.get("swipe").set({direction:n.DIRECTION_ALL}),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.input.bind(this)),t.on("swipeleft",this.input.bind(this)),t.on("swiperight",this.input.bind(this)),t.on("swipeup",this.input.bind(this)),t.on("swipedown",this.input.bind(this)),t.on("tap",this.input.bind(this)),document.body.appendChild(this.canvas),this.resize(),this.startTime=this.prevTime=Date.now(),window.requestAnimationFrame(this.update.bind(this))}input(t){let e=t.keyCode&&13===t.keyCode||t.type&&"tap"===t.type,i=t.keyCode&&37===t.keyCode||t.type&&"swipeleft"===t.type,n=t.keyCode&&39===t.keyCode||t.type&&"swiperight"===t.type,s=t.keyCode&&38===t.keyCode||t.type&&"swipeup"===t.type,r=t.keyCode&&40===t.keyCode||t.type&&"swipedown"===t.type;if(2===this.state&&e&&this.newGame(),3===this.state&&e&&(this.state=2),1===this.state){if(this.animatedSquares.length>0)return;let t=null;i?t=this.game.move("left"):n?t=this.game.move("right"):s?t=this.game.move("up"):r&&(t=this.game.move("down")),t&&t.moves.length>0&&(this.nextGame=t.state,this.animatedSquares.push(...t.moves.map((t=>({type:"move",value:this.nextGame.get(t[0],t[1]),fromX:t[2],fromY:t[3],toX:t[0],toY:t[1],delta:0,speed:10})))),this.sound.swipe.play(),this.nextGame.canMove()||(this.currentGameScore=this.nextGame.getScore(),this.highScore=Math.max(this.highScore,this.currentGameScore),localStorage.setItem("highscore",this.highScore),this.state=3))}}resize(){this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.fontSize={normal:Math.round(this.height/20),big:Math.round(this.height/5)}}drawCenteredText(t,e,i,n){let s=this.ctx,r=s.measureText(t);i&&s.fillText(t,(this.width-r.width)/2,e),n&&s.strokeText(t,(this.width-r.width)/2,e)}update(){window.requestAnimationFrame(this.update.bind(this));let t=Date.now(),e=(t-this.prevTime)/1e3,i=(t-this.startTime)/1e3;this.prevTime=t;let n=this.canvas,s=n.width,r=n.height,o=this.ctx,a=this.fontSize.big,h=this.fontSize.normal;if(o.fillStyle="#F6F9EC",o.fillRect(0,0,s,r),1===this.state&&this.drawGame(e),2===this.state&&(o.save(),this.setFont(a),this.setShadow(),o.fillStyle="#fff",this.drawCenteredText("Power 2",this.height/3,!0),o.restore(),o.save(),this.setFont(h),this.setShadow(),o.fillStyle="rgba(255,255,255,"+(Math.sin(10*i)+1)/2,this.drawCenteredText("Press ENTER to Start",this.height/1.5,!0),o.fillStyle="#fff",this.drawCenteredText(`Highscore: ${this.highScore}`,this.height/1.5+1.5*h,!0),o.restore()),3===this.state){let t=(this.height+a)/2;o.save(),this.setShadow(),o.fillStyle="#fff",this.setFont(a),this.drawCenteredText("Game Over!",t,!0),this.setFont(h),this.drawCenteredText(`Your score is ${this.currentGameScore}`,t+1.5*h,!0),o.restore()}}setFont(t){this.ctx.font=`700 ${t}px Kanit`}setShadow(){let t=this.ctx;t.shadowOffsetX=1,t.shadowOffsetY=1,t.shadowBlur=4,t.shadowColor="rgba(0,0,0,0.25)"}roundedRect(t,e,i,n,s){let r=this.ctx;r.beginPath(),r.moveTo(t,e+s),r.lineTo(t,e+n-s),r.arcTo(t,e+n,t+s,e+n,s),r.lineTo(t+i-s,e+n),r.arcTo(t+i,e+n,t+i,e+n-s,s),r.lineTo(t+i,e+s),r.arcTo(t+i,e,t+i-s,e,s),r.lineTo(t+s,e),r.arcTo(t,e,t,e+s,s)}drawGame(t){let e=this.width,i=this.height,n=this.game,s=this.ctx,r=this.height/(1.25*this.game.size),o=r/10,a=r/10,h=Math.round(r/4),c=r*n.size+o*(n.size+1),u=t=>-c/2+t*r+(t+1)*o,l=t=>-c/2+t*r+(t+1)*o,p=(t,e,i)=>{if(-1!==i){let n=Math.pow(2,i),o=s.measureText(n),c=this.colors[i%this.colors.length];s.save(),s.translate(t+r/2,e+r/2),this.setShadow(),s.fillStyle=c,this.roundedRect(-r/2,-r/2,r,r,a),s.fill(),s.fillStyle="#fff",s.fillText(n,-o.width/2,h/2),s.restore()}};this.setFont(h),s.save(),s.translate(e/2,i/2),s.save(),this.setShadow(),s.fillStyle="#d3e59e",this.roundedRect(-c/2,-c/2,c,c,a),s.fill(),s.restore();for(let t=0;t<n.size;t++)for(let e=0;e<n.size;e++){if(s.fillStyle="rgba(255,255,255,0.5)",this.roundedRect(u(t),l(e),r,r,a),s.fill(),this.nextGame&&this.animatedSquares.find((i=>i.fromX===t&&i.fromY===e)))continue;let i=n.get(t,e);p(u(t),l(e),i)}if(this.nextGame){for(let e of this.animatedSquares)"move"===e.type&&p(u(e.fromX)*(1-e.delta)+u(e.toX)*e.delta,l(e.fromY)*(1-e.delta)+l(e.toY)*e.delta,e.value),e.delta=Math.min(1,e.delta+e.speed*t);this.animatedSquares=this.animatedSquares.filter((t=>t.delta<1)),0===this.animatedSquares.length&&(this.game=this.nextGame,this.nextGame=null)}s.restore(),s.save();{let t=this.fontSize.normal;this.setShadow(),this.setFont(t),s.fillStyle="#fff",s.fillText("Score",this.height/10,this.height/10),s.fillStyle=this.colors[this.game.getHighestPower()%this.colors.length],s.fillText(this.game.getScore(),this.height/10,this.height/10+1.25*t),s.fillStyle="#fff",s.fillText("Next",this.height/10,this.height/10+3.75*t),p(this.height/10,this.height/10+4.5*t,this.game.next)}}newGame(){this.animatedSquares=[],this.nextGame=null,this.game=new t(4),this.game.init(),this.state=1}}var r=i(379),o=i.n(r),a=i(402);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,window.addEventListener("load",(function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js").then((t=>{console.log("SW registered: ",t)})).catch((t=>{console.log("SW registration failed: ",t)})),(new s).start()}))})(),Math.randomRange=function(t,e){return t+Math.random()*(e-t)},Array.prototype.fish=function(){if(0==this.length)return null;let t=Math.floor(Math.randomRange(0,this.length)),e=this[t];return this.splice(t,1),e},Array.prototype.random=function(){return 0==this.length?null:this[Math.floor(Math.randomRange(0,this.length))]},Array.iota=function(t,e){let i=(e-t)/Math.abs(e-t),n=[];for(let s=t;s!==e+i;s+=i)n.push(s);return n},Array.prototype.shuffle=function(){let t=Array.iota(0,this.length-1),e=[];for(;t.length>0;){let i=t.fish();e.push(this[i])}return e}})();