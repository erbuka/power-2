!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){t.exports=i.p+"ef0ec5c01566a985e62e1f82b71610ae.mp3"},function(t,e,i){i(8),t.exports=i(7)},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(5)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(4)(!1)).push([t.i,"body,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n \r\ncanvas {\r\n  display: block;\r\n}",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(o=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(h," */")),s=n.sources.map(function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")});return[i].concat(s).concat([r]).join("\n")}var o,a,h;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(i,"}"):i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(var o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="(".concat(a[2],") and (").concat(i,")")),e.push(a))}},e}},function(t,e,i){var n,r,s={},o=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),h=null,l=0,f=[],c=i(6);function u(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o],e))}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o],e));s[n.id]={id:n.id,refs:1,parts:a}}}}function d(t,e){for(var i=[],n={},r=0;r<t.length;r++){var s=t[r],o=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}function p(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),f.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,i);i.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function y(t,e){var i,n,r,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var o=l++;i=h||(h=g(e)),n=S.bind(null,i,o,!1),r=S.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),n=function(t,e,i){var n=i.css,r=i.sourceMap,s=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||s)&&(n=c(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,i,e),r=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),r=function(){m(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=d(t,e);return u(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r];(a=s[o.id]).refs--,n.push(a)}t&&u(d(t,e),e);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete s[a.id]}}}};var w,b=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e){Math.randomRange=function(t,e){return t+Math.random()*(e-t)},Array.prototype.fish=function(){if(0==this.length)return null;let t=Math.floor(Math.randomRange(0,this.length)),e=this[t];return this.splice(t,1),e},Array.prototype.random=function(){if(0==this.length)return null;return this[Math.floor(Math.randomRange(0,this.length))]},Array.iota=function(t,e){let i=(e-t)/Math.abs(e-t),n=[];for(let r=t;r!==e+i;r+=i)n.push(r);return n},Array.prototype.shuffle=function(){let t=Array.iota(0,this.length-1),e=[];for(;t.length>0;){let i=t.fish();e.push(this[i])}return e}},function(t,e,i){"use strict";i.r(e);class n{constructor(t){this.size=t,this.count=t*t,this.data=new Array(t*t);for(let e=0;e<t*t;e++)this.data[e]=-1}init(){let t=this.count,e=Array.iota(0,t-1);for(let t=0;t<this.size/2;t++){let t=e.fish();this.data[t]=1}this.computeNext()}computeNext(){let t=Math.random();for(let e=this.getHighestPower();e>=1;e--)if(t<Math.pow(1/e,3))return void(this.next=e);throw"This shouldn't be thrown"}clone(){let t=new n(this.size);return t.data=this.data.map(t=>t),t}randomFreeSpot(){return this.data.map((t,e)=>[t,e]).filter(t=>-1===t[0]).fish()[1]}get(t,e){return t<0||t>=this.size||e<0||e>=this.size?null:this.data[e*this.size+t]}set(t,e,i){this.data[e*this.size+t]=i}getScore(t){let e=0;for(let t of this.data)t>1&&(e+=Math.pow(3,t-1));return e}canMove(){if(this.data.find(t=>-1==t))return!0;for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++){let i=this.get(t,e);if(i===this.get(t+1,e)||i===this.get(t,e+1))return!0}return!1}move(t){let e=[],i="left"===t||"up"===t,n="left"===t||"right"===t,r=this.clone(),s=i?Array.iota(0,this.size-2):Array.iota(this.size-1,1),o=i?1:-1;for(let t of s)for(let i=0;i<this.size;i++){let s=n?t:i,a=n?i:t,h=n?s+o:s,l=n?a:a+o,f=r.get(s,a),c=r.get(h,l);-1===f?(r.set(s,a,c),r.set(h,l,-1),-1!==c&&e.push([s,a,h,l])):f===c&&(r.set(s,a,f+1),r.set(h,l,-1),e.push([s,a,h,l]))}return e.length>0&&(r.data[r.randomFreeSpot()]=this.next),r.computeNext(),{moves:e,state:r}}getHighestPower(){let t=-1;return this.data.forEach(e=>t=Math.max(t,e)),t}}var r=i(0),s=i.n(r);const o={Loading:0,Playing:1,MainMenu:2,Score:3},a={GameTitle:"Power 2",NewGame:"Press ENTER to Start"};class h{constructor(){this.colors=[],this.animatedSquares=[],this.highScore=parseInt(localStorage.getItem("highscore"))||0;for(let t=0;t<1440;t+=75)this.colors.push(`hsl(${t%360}, 50%, 50%)`)}start(){this.state=o.MainMenu,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),document.body.appendChild(this.canvas),this.resize(),this.startTime=this.prevTime=Date.now(),window.requestAnimationFrame(this.update.bind(this))}keyup(t){if(this.state===o.MainMenu&&13==t.keyCode&&this.newGame(),this.state===o.Score&&13==t.keyCode&&(this.state=o.MainMenu),this.state===o.Playing){if(this.animatedSquares.length>0)return;let e=null;switch(t.keyCode){case 37:e=this.game.move("left");break;case 39:e=this.game.move("right");break;case 38:e=this.game.move("up");break;case 40:e=this.game.move("down")}e&&e.moves.length>0&&(this.nextGame=e.state,this.animatedSquares.push(...e.moves.map(t=>({type:"move",value:this.nextGame.get(t[0],t[1]),fromX:t[2],fromY:t[3],toX:t[0],toY:t[1],delta:0,speed:10}))),new Audio(s.a).play(),this.nextGame.canMove()||(this.currentGameScore=this.nextGame.getScore(),this.highScore=Math.max(this.highScore,this.currentGameScore),localStorage.setItem("highscore",this.highScore),this.state=o.Score))}}resize(){this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.fontSize={normal:Math.round(this.height/20),big:Math.round(this.height/5)}}drawCenteredText(t,e,i,n){let r=this.ctx,s=r.measureText(t);i&&r.fillText(t,(this.width-s.width)/2,e),n&&r.strokeText(t,(this.width-s.width)/2,e)}update(){window.requestAnimationFrame(this.update.bind(this));let t=Date.now(),e=(t-this.prevTime)/1e3,i=(t-this.startTime)/1e3;this.prevTime=t;let n=this.canvas,r=n.width,s=n.height,h=this.ctx,l=this.fontSize.big,f=this.fontSize.normal;if(h.fillStyle="#F6F9EC",h.fillRect(0,0,r,s),this.state===o.Playing&&this.drawGame(e),this.state===o.MainMenu&&(h.save(),this.setFont(l),this.setShadow(),h.fillStyle="#fff",this.drawCenteredText(a.GameTitle,this.height/3,!0),h.restore(),h.save(),this.setFont(f),this.setShadow(),h.fillStyle=`rgba(255,255,255,${(Math.sin(10*i)+1)/2}`,this.drawCenteredText(a.NewGame,this.height/1.5,!0),h.fillStyle="#fff",this.drawCenteredText(`Highscore: ${this.highScore}`,this.height/1.5+1.5*f,!0),h.restore()),this.state===o.Score){let t=(this.height+l)/2;h.save(),this.setShadow(),h.fillStyle="#fff",this.setFont(l),this.drawCenteredText("Game Over!",t,!0),this.setFont(f),this.drawCenteredText(`Your score is ${this.currentGameScore}`,t+1.5*f,!0),h.restore()}}setFont(t){this.ctx.font=`700 ${t}px Kanit`}setShadow(){let t=this.ctx;t.shadowOffsetX=1,t.shadowOffsetY=1,t.shadowBlur=4,t.shadowColor="rgba(0,0,0,0.25)"}roundedRect(t,e,i,n,r){let s=this.ctx;s.beginPath(),s.moveTo(t,e+r),s.lineTo(t,e+n-r),s.arcTo(t,e+n,t+r,e+n,r),s.lineTo(t+i-r,e+n),s.arcTo(t+i,e+n,t+i,e+n-r,r),s.lineTo(t+i,e+r),s.arcTo(t+i,e,t+i-r,e,r),s.lineTo(t+r,e),s.arcTo(t,e,t,e+r,r)}drawGame(t){let e=this.width,i=this.height,n=this.game,r=this.ctx,s=this.height/(1.25*this.game.size),o=s/10,a=s/10,h=Math.round(s/4),l=s*n.size+o*(n.size+1),f=t=>-l/2+t*s+(t+1)*o,c=t=>-l/2+t*s+(t+1)*o,u=(t,e,i)=>{if(-1!==i){let n=Math.pow(2,i),o=r.measureText(n),l=this.colors[i%this.colors.length];r.save(),r.translate(t+s/2,e+s/2),this.setShadow(),r.fillStyle=l,this.roundedRect(-s/2,-s/2,s,s,a),r.fill(),r.fillStyle="#fff",r.fillText(n,-o.width/2,h/2),r.restore()}};this.setFont(h),r.save(),r.translate(e/2,i/2),r.save(),this.setShadow(),r.fillStyle="#d3e59e",this.roundedRect(-l/2,-l/2,l,l,a),r.fill(),r.restore();for(let t=0;t<n.size;t++)for(let e=0;e<n.size;e++){if(r.fillStyle="rgba(255,255,255,0.5)",this.roundedRect(f(t),c(e),s,s,a),r.fill(),this.nextGame&&this.animatedSquares.find(i=>i.fromX===t&&i.fromY===e))continue;let i=n.get(t,e);u(f(t),c(e),i)}if(this.nextGame){for(let e of this.animatedSquares){if("move"===e.type){u(f(e.fromX)*(1-e.delta)+f(e.toX)*e.delta,c(e.fromY)*(1-e.delta)+c(e.toY)*e.delta,e.value)}e.delta=Math.min(1,e.delta+e.speed*t)}this.animatedSquares=this.animatedSquares.filter(t=>t.delta<1),0===this.animatedSquares.length&&(this.game=this.nextGame,this.nextGame=null)}r.restore(),r.save();{let t=this.fontSize.normal;this.setShadow(),this.setFont(t),r.fillStyle="#fff",r.fillText("Score",this.height/10,this.height/10),r.fillStyle=this.colors[this.game.getHighestPower()%this.colors.length],r.fillText(this.game.getScore(),this.height/10,this.height/10+1.25*t),r.fillStyle="#fff",r.fillText("Next",this.height/10,this.height/10+3.75*t),u(this.height/10,this.height/10+4.5*t,this.game.next)}}newGame(){this.animatedSquares=[],this.nextGame=null,this.game=new n(4),this.game.init(),this.state=o.Playing}}i(2);window.addEventListener("load",function(){let t=new h;t.start(),window.app=t})}]);