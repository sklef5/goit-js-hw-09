function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");function l(t,n){const r=Math.random()>.3;new Promise(((e,o)=>{setInterval((()=>{r?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}))}({formData:document.querySelector("form")}).formData.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.elements.delay.value),n=Number(e.currentTarget.elements.step.value),r=Number(e.currentTarget.elements.amount.value);let o=t;for(let e=0;e<r;e++)l(e+1,o),o+=n}));
//# sourceMappingURL=03-promises.2d96b49e.js.map
