if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let r={};const a=e=>o(e,t),c={module:{uri:t},exports:r,require:a};i[t]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(s(...e),r)))}}define(["./workbox-24a98665"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-358abab4.css",revision:null},{url:"assets/index-be0e40e4.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"922c033cb9f714197934a038bf4814d6"},{url:"favicon.svg",revision:"7aed1d7edcc514293cd033d3d9b838c9"},{url:"icon-192.png",revision:"4a911f5f594d647a2531b88f1ba995ed"},{url:"icon-512.png",revision:"19e3c98a07853f2be405f035038a60f6"},{url:"fonts/chivo/Chivo-Italic[wght].ttf",revision:"81b5b8c8cdc073e16f2634777e09a4d7"},{url:"fonts/chivo/Chivo[wght].ttf",revision:"f7c6cd0c2dec6b505ee1e79310a256e8"},{url:"fonts/chivo/OFL.txt",revision:"9e202679ebd39badca87c6a6a33cbfc6"},{url:"fonts/jetbrains-mono/JetBrainsMono-Italic[wght].woff2",revision:"57eb8a9eff24819176d3e9020e764a99"},{url:"fonts/jetbrains-mono/JetBrainsMono[wght].woff2",revision:"aac0d356bc8119aaba375427edb06b52"},{url:"fonts/jetbrains-mono/OFL.txt",revision:"43dc1a748ef82aa746d6a645d52578a9"},{url:"manifest.webmanifest",revision:"500aa4dec34f325077e5d0d53984c6be"}],{}),e.cleanupOutdatedCaches()}));
