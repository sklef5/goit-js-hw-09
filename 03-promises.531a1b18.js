function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var l=r("7Y9D8");function a(t,n){const o=Math.random()>.3;new Promise(((e,r)=>{setInterval((()=>{o?e({position:t,delay:n}):r({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}))}({formData:document.querySelector("form")}).formData.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.elements.delay.value),n=Number(e.currentTarget.elements.step.value),o=Number(e.currentTarget.elements.amount.value);let r=t;for(i=0;i<o;i++)a(i+1,r),r+=n,console.log(r)}));
//# sourceMappingURL=03-promises.531a1b18.js.map
