!function(){var t=null,e=document.querySelector("button[data-start]");document.querySelector("button[data-stop]").addEventListener("click",(function(){e.removeAttribute("disabled","true"),clearInterval(t)}));var n=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t=setInterval(n,1e3)}))}();
//# sourceMappingURL=01-color-switcher.9fdcd250.js.map
