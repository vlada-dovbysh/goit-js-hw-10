import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector("[data-start]"),r=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let u=null,a=null;o.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(y.error({timeout:4e3,message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"rgb(255, 255, 255)"}),o.disabled=!0):(a=t,o.disabled=!1)}};h(r,C);o.addEventListener("click",()=>{a&&(o.disabled=!0,r.disabled=!0,u=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(u),c({days:0,hours:0,minutes:0,seconds:0}),r.disabled=!1;return}const n=D(t);c(n)},1e3))});function c({days:e,hours:t,minutes:n,seconds:d}){p.textContent=s(e),S.textContent=s(t),b.textContent=s(n),g.textContent=s(d)}function s(e){return String(e).padStart(2,"0")}function D(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=1-timer.js.map
