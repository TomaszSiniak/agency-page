"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function n(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var o=e.scrollTo=function(t,n,o){return e(window).scrollTo(t,n,o)};return o.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,c){"object"===(void 0===i?"undefined":_typeof(i))&&(c=i,i=0),"function"==typeof c&&(c={onAfter:c}),"max"===r&&(r=9e9),c=e.extend({},o.defaults,c),i=i||c.duration;var l=c.queue&&1<c.axis.length;return l&&(i/=2),c.offset=n(c.offset),c.over=n(c.over),this.each(function(){function s(t){var n=e.extend({},c,{queue:!0,duration:i,complete:t&&function(){t.call(f,m,c)}});d.animate(y,n)}if(null!==r){var u,a=t(this),f=a?this.contentWindow||window:this,d=e(f),m=r,y={};switch(void 0===m?"undefined":_typeof(m)){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=n(m);break}m=a?e(m):e(m,f);case"object":if(0===m.length)return;(m.is||m.style)&&(u=(m=e(m)).offset())}var p=e.isFunction(c.offset)&&c.offset(f,m)||c.offset;e.each(c.axis.split(""),function(e,t){var n="x"===t?"Left":"Top",r=n.toLowerCase(),i="scroll"+n,v=d[i](),h=o.max(f,t);u?(y[i]=u[r]+(a?0:v-d.offset()[r]),c.margin&&(y[i]-=parseInt(m.css("margin"+n),10)||0,y[i]-=parseInt(m.css("border"+n+"Width"),10)||0),y[i]+=p[r]||0,c.over[r]&&(y[i]+=m["x"===t?"width":"height"]()*c.over[r])):(n=m[r],y[i]=n.slice&&"%"===n.slice(-1)?parseFloat(n)/100*h:n),c.limit&&/^\d+$/.test(y[i])&&(y[i]=0>=y[i]?0:Math.min(y[i],h)),!e&&1<c.axis.length&&(v===y[i]?y={}:l&&(s(c.onAfterFirst),y={}))}),s(c.onAfter)}})},o.max=function(n,o){var r="scroll"+(i="x"===o?"Width":"Height");if(!t(n))return n[r]-e(n)[i.toLowerCase()]();var i="client"+i,c=(l=n.ownerDocument||n.document).documentElement,l=l.body;return Math.max(c[r],l[r])-Math.min(c[i],l[i])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var n=this.get(t);if(t.options.interrupt&&t._last&&t._last!==n)return e(t.elem).stop();var o=Math.round(t.now);n!==o&&(e(t.elem)[t.prop](o),t._last=this.get(t))}},o}),document.addEventListener("DOMContentLoaded",function(){function e(e){var t=document.querySelectorAll(".member"),n=document.querySelectorAll(".member-details");e>t.length&&(l=1),e<1&&(l=t.length);for(var o=0;o<t.length;o++)t[o].style.opacity="0.6";for(var r=0;r<n.length;r++)n[r].style.display="none";t[l-1].style.opacity="1",n[l-1].style.display="block"}function t(){for(var e=document.querySelectorAll(".opinion-container"),t=document.querySelectorAll(".list__item"),n=0;n<e.length;n++)e[n].style.display="none",t[n].style.opacity="0.5";e[m-1].style.display="block",t[m-1].style.opacity="1"}var n=document.querySelector(".burger-container");n.addEventListener("click",function(){n.classList.toggle("open")});var o=document.querySelector(".burger-container"),r=document.querySelector(".nav");o.addEventListener("click",function(){r.classList.toggle("show")});var i=document.querySelector(".fa-search"),c=document.querySelector(".icons input");i.addEventListener("click",function(){c.classList.toggle("show")});var l=2;e();var s=document.querySelector(".arrow-right"),u=document.querySelector(".arrow-left");s.addEventListener("click",function(){e(l+=1)}),u.addEventListener("click",function(){e(l-=1)});var a=document.querySelector(".member-ter"),f=document.querySelector(".member-sus"),d=document.querySelector(".member-mel");a.addEventListener("click",function(){e(l=1)}),f.addEventListener("click",function(){e(l=2)}),d.addEventListener("click",function(){e(l=3)});var m=1;t();var y=document.querySelector(".list__item-jess"),p=document.querySelector(".list__item-melissa"),v=document.querySelector(".list__item-alissa");y.addEventListener("click",function(){t(m=1)}),p.addEventListener("click",function(){t(m=2)}),v.addEventListener("click",function(){t(m=3)}),$(function(e){e("#homeLink").click(function(){e.scrollTo(e(".main-header"),500)}),e("#aboutLink").click(function(){e.scrollTo(e(".aboutUs"),800)}),e("#servicesLink").click(function(){e.scrollTo(e(".whatWeDo"),1200)}),e("#processLink").click(function(){e.scrollTo(e(".work-style"),1600)}),e("#teamLink").click(function(){e.scrollTo(e(".team"),1200)}),e("#clientsLink").click(function(){e.scrollTo(e(".client-opinion"),2e3)}),e("#contactLink").click(function(){e.scrollTo(e(".contact"),2e3)})})});