if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let r={};const c=e=>o(e,t),a={module:{uri:t},exports:r,require:c};i[t]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-24a98665"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-8afe5732.css",revision:null},{url:"assets/index-99f6f274.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"f83c310a096755eda4c8316e1f614b0b"},{url:"favicon.svg",revision:"ccef19382c1689a2e9e743aa4661629d"},{url:"icon-192.png",revision:"1c62c2326f9ba7492cd18807d9183b3d"},{url:"icon-512.png",revision:"69c2d91cb6dd5ac48a3f3fb93ec75b82"},{url:"fonts/chivo/Chivo-Italic[wght].ttf",revision:"81b5b8c8cdc073e16f2634777e09a4d7"},{url:"fonts/chivo/Chivo[wght].ttf",revision:"f7c6cd0c2dec6b505ee1e79310a256e8"},{url:"fonts/chivo/OFL.txt",revision:"9e202679ebd39badca87c6a6a33cbfc6"},{url:"fonts/jetbrains-mono/JetBrainsMono-Italic[wght].woff2",revision:"57eb8a9eff24819176d3e9020e764a99"},{url:"fonts/jetbrains-mono/JetBrainsMono[wght].woff2",revision:"aac0d356bc8119aaba375427edb06b52"},{url:"fonts/jetbrains-mono/OFL.txt",revision:"43dc1a748ef82aa746d6a645d52578a9"},{url:"manifest.webmanifest",revision:"8018fdaefd7b51012901d5c7b0d29628"}],{}),e.cleanupOutdatedCaches()}));
