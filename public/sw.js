if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6N0mdD6U23Wcf3F9WmzT7/_buildManifest.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/6N0mdD6U23Wcf3F9WmzT7/_ssgManifest.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/7f13179a3cbe98c1999a22a03a987114c59a03ce.9a8c3ac34b3b3fee6ea9.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/bc6f0379ef776f032a764a2f7c2024eed1bc19eb.5ff94d16993e71295f47.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.f4ced7fba52e5faa2afc.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/framework.0c239260661ae1d12aa2.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/main-e7058192552863527ad3.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/pages/_app-c1732dfe717d644e60c3.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/pages/_documents-bc089948cb7a81f6f99d.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/pages/_error-6ae3f0d38fdf75981156.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/pages/index-09079271d497a93b370f.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"6N0mdD6U23Wcf3F9WmzT7"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"2b19621eb00c338ee252b1c8dda19b2a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));