"use strict";var precacheConfig=[["/index.html","c8df8d4a371f42cae548a378671e42d7"],["/static/css/main.00cf8852.css","8242b06a900f2511ead43751a3d5972d"],["/static/js/main.af9eb1aa.js","ab2ea41b1053cbc4d9907c5d2f821ebf"],["/static/media/arrow.c9c311e0.svg","c9c311e06271c58390857eec10610bfb"],["/static/media/bg-home-softars.92c1669b.png","92c1669b45266103e38fc619e2c6ce89"],["/static/media/brand-icon-angular.5a7fab35.svg","5a7fab3586e9fd38b02579580bac10d7"],["/static/media/brand-icon-bootstrap.d476ca77.svg","d476ca77e58e91543d5bf16b2ab1d65b"],["/static/media/brand-icon-javascript.ed6cf72d.svg","ed6cf72d089a1d3746f8f0e6e3b832b8"],["/static/media/brand-icon-larave.45aaa1d6.svg","45aaa1d69d79b92a606253546c19c461"],["/static/media/brand-icon-nodejs.86ce0a39.svg","86ce0a39841d6e0608548e1459b0faf8"],["/static/media/brand-icon-react.bd7dce9a.svg","bd7dce9a8f6f3d95881872f8327cd253"],["/static/media/engine-icon-corona.b6b85ecc.svg","b6b85ecc7a1ae642109d259f293a9e23"],["/static/media/engine-icon-defold.d7c5d76a.svg","d7c5d76a8e10645318ea79c18b546897"],["/static/media/engine-icon-godot.ac0cdc4b.svg","ac0cdc4b8807ae2c706ccb9aee7d44cf"],["/static/media/engine-icon-unity.31280211.svg","3128021183ae525762ea9d604ddabfd2"],["/static/media/engine-icon-unreal.7d4ddef9.svg","7d4ddef9474dd2e0b80bf9fde0b680fc"],["/static/media/home_codebars.b737c0f2.gif","b737c0f23d17e009e7f94b8c75f7d0b6"],["/static/media/icon-chat-bubble.e2db8285.svg","e2db82855c001a321d177b5467318d5a"],["/static/media/logo-softars.b4151b4c.svg","b4151b4ccc3b3537284cc8c2c4839b06"],["/static/media/social-icon-facebook.f98cf7e8.svg","f98cf7e88a0bd5ba9e17f59769fc061e"],["/static/media/social-icon-instagram.53dac7b0.svg","53dac7b019f643f0195eec4fb0c36794"],["/static/media/social-icon-linkedin.a212aeb0.svg","a212aeb07236e6adac752da646d764c3"],["/static/media/social-icon-twitter.1cc975a6.svg","1cc975a6b8dd75558142fd41255b7c64"],["/static/media/team.64626019.png","646260191fe1eebd812256a5062b4fee"],["/static/media/title-icon-gamedev.b6fa7a30.svg","b6fa7a309724188801ae3344e7f3c847"],["/static/media/title-icon-system.0c466d94.svg","0c466d94241d7b3ae60097a4f3bf278d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});