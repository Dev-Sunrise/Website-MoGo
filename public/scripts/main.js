"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var progress=document.querySelector(".progress"),menuToggle=(window.addEventListener("scroll",function(){var e=window.pageYOffset,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;progress.style.width=e/t*100+"%"}),document.querySelector(".header-toggle")),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand",accordionHeader=(menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)}),document.querySelectorAll(".wedo-item-header")),bottom=document.querySelectorAll(".wedo-item-bottom");function handleClickAccordion(e){var t=e.target.nextElementSibling,t=(t.style.height=t.scrollHeight+"px",t.classList.toggle("is-active"),t.classList.contains("is-active")||(t.style.height="0px"),e.target.querySelector(".icon"));t.classList.toggle("fa-angle-down"),t.classList.toggle("fa-angle-up")}[].concat(_toConsumableArray(accordionHeader)).forEach(function(e){return e.addEventListener("click",handleClickAccordion)}),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});