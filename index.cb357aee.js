document.addEventListener("DOMContentLoaded",(function(){let e,t=document.querySelector(".control-btn_start"),n=document.querySelector(".control-btn_reset"),r=document.querySelector(".timer__second-arrow"),a=document.querySelector(".minutes"),o=document.querySelector(".seconds"),l=document.querySelector(".milliseconds"),s=!1;function c(){let t=Date.now();e=setInterval((function(){let e=Date.now()-t;r.style.transform="rotate("+e/1e3*6+"deg)",function(e){let t=Math.floor(e/6e4);a.innerHTML=t<10?"0"+t:""+t;let n=Math.floor(e%6e4/1e3);o.innerHTML=n<10?"0"+n:""+n;let r=e%1e3;l.innerHTML=r<10?("0"+r).substring(0,2):(""+r).substring(0,2)}(e)}),10)}!function(){let e=document.querySelector(".timer__basel");for(var t=.25;t<=60;t+=1/4){let n=document.createElement("div");if(n.classList.add("trait"),t%5==0){let r=document.createElement("div");r.classList.add("trait_value"),r.innerText=t,r.style.transform="translate(-50%, -50%) rotate("+6*t+"deg) translateY(-125px) rotate("+6*-t+"deg)",e.append(r),n.classList.add("trait_major")}t%1==0?(n.classList.add("trait_whole"),n.style.transform="translate(-50%, -50%) rotate("+6*t+"deg) translateY(-145px)"):(n.classList.add("trait_quarter"),n.style.transform="translate(-50%, -50%) rotate("+6*t+"deg) translateY(-147px)"),e.append(n)}}(),t.addEventListener("click",(function(){s||(c(),s=!0)})),n.addEventListener("click",(function(){clearInterval(e),s=!1,r.style.transform="rotate(0deg)",a.innerHTML="00",o.innerHTML="00",l.innerHTML="00"}))}));
//# sourceMappingURL=index.cb357aee.js.map
