(()=>{{let e=!1;document.getElementById("nav-search-btn").addEventListener("click",(function(){e||(e=!0,document.getElementById("search-form-wrap").classList.add("on"),setTimeout(()=>{e=!1,document.getElementById("search-input").focus()},200))}),{passive:!0}),document.getElementById("nav-search-btn").addEventListener("focusin",()=>{e||(e=!0,document.getElementById("search-form-wrap").classList.add("on"),setTimeout(()=>{e=!1,document.getElementById("search-input").focus()},200))},{passive:!0}),document.getElementById("search-input").addEventListener("focusout",()=>{document.getElementById("search-form-wrap").classList.remove("on"),setTimeout(()=>{e=!1},200)},{passive:!0})}{let e=!1;const t=()=>{if(!e&&window.matchMedia("(max-width: 479px)").matches){e=!0;let t=!1,s=!1;const o=document.getElementById("mobile-nav"),n=document.getElementById("header-inner-category"),i=document.getElementById("sub-nav"),d=document.getElementById("header-title"),a=()=>{n.style.willChange="background",n.classList.add("on"),i.classList.add("off"),o.removeAttribute("hidden"),setTimeout(()=>{o.classList.add("on"),n.classList.add("show"),i.style.display="none",d.classList.add("off"),setTimeout(()=>{t=!1,s=!0},200)},300)},c=()=>{o.classList.remove("on"),d.classList.remove("off"),i.style.display="block",n.classList.remove("show"),setTimeout(()=>{n.classList.remove("on"),i.classList.remove("off"),o.setAttribute("hidden","true"),setTimeout(()=>{t=!1,s=!1,n.style.willChange="auto"},200)},300)};document.getElementById("main-nav-toggle").addEventListener("click",(function(){t||(t=!0,s?c():a())}),{passive:!0}),document.getElementById("header").addEventListener("mouseleave",(function(){!t&&s&&c()}),{passive:!0})}};t(),window.addEventListener("orientationchange",t,{passive:!0})}window.goToTop=function(){const e=document.querySelector("a.gotop");var t=null;window.addEventListener("scroll",()=>{null===t&&(t=setTimeout(()=>{window.scrollY>300?e.classList.add("show"):e.classList.remove("show"),t=null},200))},{passive:!0})},"loading"!==document.readyState?setTimeout(()=>window.goToTop(),1):document.addEventListener("DOMContentLoaded",()=>window.goToTop(),{passive:!0,once:!0});{const e=document.querySelector("footer#footer");((t=e)=>{const s=e=>{e.offsetTop+e.offsetHeight<=window.innerHeight||e.offsetParent.scrollHeight<=window.innerHeight?e.style.cssText="position:fixed;left:0;bottom:0":e.style.cssText=""};"complete"===document.readyState?setTimeout(()=>s(t),1):window.addEventListener("load",()=>s(t),{passive:!0,once:!0}),window.addEventListener("orientationchange",()=>s(t),{passive:!0})})()}{let t=!1,s=!1;const o=document.getElementById("dropdown-whole-control"),n=Array.from(document.querySelectorAll(".to-be-active")),i=document.getElementById("drop");let d=!1;const a=o.querySelector(".current.dropdown-item");o.addEventListener("mouseenter",()=>{t=!0},{passive:!0}),o.addEventListener("mouseleave",()=>{t=!1,setTimeout(()=>{s||(i.classList.remove("active"),e())},200)},{passive:!0}),n.forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("active")},{passive:!0}),e.addEventListener("mouseleave",()=>{e.classList.remove("active")},{passive:!0})});const c=Array.from(o.querySelectorAll(".dropdown-item:not(.current)"));o.addEventListener("focusin",()=>{t=!0},{passive:!0}),c.forEach(o=>{o.addEventListener("focus",()=>{t=!0,o.classList.add("active")},{passive:!0}),o.addEventListener("blur",()=>{o.classList.remove("active"),t=!1,setTimeout(()=>{s||t||(i.classList.remove("active"),e())},1)},{passive:!0})});let l=window.matchMedia("(max-width: 1330px)").matches?"flex":"block";const r=()=>{s=!0,o.style.display=l,a.classList.add("show"),c.forEach((e,t)=>{setTimeout(()=>{e.classList.add("show")},80*t)}),!1===d&&("flex"!==l?(o.style.top=i.offsetTop+12-a.offsetTop+"px",o.style.left=i.clientWidth-2+"px"):(o.style.top=i.offsetTop-a.offsetTop-5+"px",o.style.left=o.clientWidth-a.offsetLeft+"px",i.style.paddingRight=o.clientWidth-a.offsetLeft-54+"px"),d=!0)};i.addEventListener("mouseenter",()=>{r()},{passive:!0}),i.addEventListener("focus",()=>{r()},{passive:!0});const m=o=>{s=!1,i.classList.add("active"),setTimeout(()=>{t||(i.classList.remove("active"),e())},o)};function e(){o.style.display="none",Array.from(o.querySelectorAll(".dropdown-item")).forEach(e=>{e.classList.remove("show")})}i.addEventListener("mouseleave",()=>{m(200)},{passive:!0}),i.addEventListener("blur",()=>{m(1)},{passive:!0})}})();