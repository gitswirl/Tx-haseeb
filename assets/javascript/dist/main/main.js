window.addEventListener("DOMContentLoaded",()=>{function e(){window.scrollBy(0,1)}function a(){$("#body").addClass("bodyScript")}function o(){$("#body").removeClass("bodyScript")}e(),a(),$(".preloader").addClass("preloader__Script"),setTimeout(()=>{var t,r,n;o(),t=document.getElementById("AnimateTextInThisElement"),function o(a){t.textContent="";for(var e=0;e<a.length;e++)setTimeout((e=>function(){t.textContent+=a[e]})(e),160*e);setTimeout(function(){var a=setInterval(function(){var e;0<t.textContent.length?(e=t.textContent.slice(0,-1),t.textContent=e):(clearInterval(a),o(r[n=(n+1)%r.length]))},160)},160*a.length+3e3)}((r=["Haseeb Arshad","programming pro","script sensei","code sage"])[n=0])},4200);var t=new Swiper(".swiper1",{slidesPerView:7,allowSlideNext:!1,allowSlidePrev:!1});let r=new Swiper(".swiper2",{loop:!1,speed:800,effect:"fade",parallax:!0,thumbs:{swiper:t},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function n(){$(".navigationAnimation__toggler").toggleClass("navigationAnimation__toggler__SCRIPT"),$(".header__innerContainer").toggleClass("header__innerContainer__Script"),$(".header__nav").toggleClass("header__nav__Script");var e=document.querySelector(".togglePlay_audio__1"),a=document.querySelector(".togglePlay_audio__2");$(".navigationAnimation__toggler").hasClass("navigationAnimation__toggler__SCRIPT")?(e.play(),s()):a.play()}function i(){$(".FloatWindowContainer").addClass("FloatWindowContainer__Script"),$(".closeFloatWindow").addClass("closeFloatWindow__Script"),a(),s()}function s(){$(".BackToTop__Btn").removeClass("BackToTop__Btn__Script")}$(".bulletFocusAnimation1").addClass("bulletFocusAnimation__Script"),r.on("slideChange",function(){switch($(".bulletFocusAnimation").removeClass("bulletFocusAnimation__Script"),r.realIndex){case 0:$(".bulletFocusAnimation1").addClass("bulletFocusAnimation__Script");break;case 1:$(".bulletFocusAnimation2").addClass("bulletFocusAnimation__Script");break;case 2:$(".bulletFocusAnimation3").addClass("bulletFocusAnimation__Script");break;case 3:$(".bulletFocusAnimation4").addClass("bulletFocusAnimation__Script");break;case 4:$(".bulletFocusAnimation5").addClass("bulletFocusAnimation__Script");break;case 5:$(".bulletFocusAnimation6").addClass("bulletFocusAnimation__Script");break;case 6:$(".bulletFocusAnimation7").addClass("bulletFocusAnimation__Script")}0===r.realIndex?($(".swiper-button-prev").addClass("swiper-button-prev-SCRIPT"),$(".swiper-button-next").removeClass("swiper-button-next-SCRIPT")):6===r.realIndex?($(".swiper-button-next").addClass("swiper-button-next-SCRIPT"),$(".swiper-button-prev").removeClass("swiper-button-prev-SCRIPT")):(0<r.realIndex||r.realIndex<6)&&($(".swiper-button-prev").removeClass("swiper-button-prev-SCRIPT"),$(".swiper-button-next").removeClass("swiper-button-next-SCRIPT"))}),jarallax(document.querySelectorAll(".jarallax"),{speed:.4}),jarallax(document.querySelectorAll(".jarallax"),{disableParallax:/iPad|iPhone|iPod|Android/,disableVideo:/iPad|iPhone|iPod|Android/}),$("a.scrollToElem").smoothScroll({offset:1,direction:"top",scrollTarget:null,autoFocus:!1,delegateSelector:null,beforeScroll:function(){},afterScroll:function(){e()},easing:"easeInOutQuint",speed:1800,preventDefault:!0}),$(".currentYear").text((new Date).getFullYear()+" "),$(".navigationAnimation__toggler").click(n),$(".Links_Ul__responsive li a").click(n),$(".BackToTop__Btn .scrollToElem").click(()=>!!$(".navigationAnimation__toggler").hasClass("navigationAnimation__toggler__SCRIPT")&&n()),window.addEventListener("scroll",()=>{50<=window.scrollY?($(".fixedNavBar").addClass("fixedNavBar__Script"),$(".staticNavBar").addClass("staticNavBar__Script")):($(".fixedNavBar").removeClass("fixedNavBar__Script"),$(".staticNavBar").removeClass("staticNavBar__Script"));var e=window.scrollY;e<$("#About").offset().top?($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_HomeAncor").addClass("hdrNav__Ancor_Script")):e>=$("#About").offset().top&&e<$("#Resume").offset().top?($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_AboutAncor").addClass("hdrNav__Ancor_Script")):e>=$("#Resume").offset().top&&e<$("#works").offset().top?($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_ResumeAncor").addClass("hdrNav__Ancor_Script")):e>=$("#works").offset().top&&e<$("#Reviews").offset().top?($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_WorksAncor").addClass("hdrNav__Ancor_Script")):e>=$("#Reviews").offset().top&&e<$("#jumpToContact").offset().top?($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_ReviewsAncor").addClass("hdrNav__Ancor_Script")):e>=$("#jumpToContact").offset().top&&($(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script"),$(".hdrNav_ContactAncor").addClass("hdrNav__Ancor_Script")),50<=e?$(".BackToTop__Btn").addClass("BackToTop__Btn__Script"):s()}),$(".closeFloatWindow__icon").click(()=>{$(".FloatWindowContainer").removeClass("FloatWindowContainer__Script"),$(".closeFloatWindow").removeClass("closeFloatWindow__Script"),o(),$(".FloatWindow").remove($(".personalVideo__container")),$(".personalVideo__container").removeClass("personalVideo__container__Script"),$(".personalVideo__iframe").attr("src",""),$(".personalVideo__iframeWrap").removeClass("personalVideo__iframeWrap__Script"),$(".personalVideo__placeHolder").removeClass("personalVideo__placeHolder__Script"),$(".FloatWindow").remove($(".HireMe__container")),$(".HireMe__container").removeClass("HireMe__container__Script"),$(".HireMe__container__inner").removeClass("HireMe__container__inner__Script"),$(".FloatWindow").remove($(".MakeReviewContainer")),$(".MakeReviewContainer").removeClass("MakeReviewContainer__Script"),$(".MakeReviewContainer__Inner").removeClass("MakeReviewContainer__Inner__Script")}),$(".heroWatchVideoIcon").click(()=>{i(),$(".FloatWindow").append($(".personalVideo__container")),$(".personalVideo__container").addClass("personalVideo__container__Script"),$(".personalVideo__iframeWrap").removeClass("personalVideo__iframeWrap__Script"),$(".personalVideo__placeHolder").removeClass("personalVideo__placeHolder__Script"),$(".personalVideo__iframe").attr("src","https://www.youtube.com/embed/WG5ikvJ2TKA?si=OTwG3Pdx5F-y_FoE"),$(".personalVideo__iframe").on("load",function(){$(".personalVideo__iframeWrap").addClass("personalVideo__iframeWrap__Script"),$(".personalVideo__placeHolder").addClass("personalVideo__placeHolder__Script")})}),$(".hireMeAncor").click(()=>{i(),$(".FloatWindow").append($(".HireMe__container")),$(".HireMe__container").addClass("HireMe__container__Script"),$(".HireMe__container__inner").addClass("HireMe__container__inner__Script")}),$(".MakeReviewAncor").click(function(){i(),$(".FloatWindow").append($(".MakeReviewContainer")),$(".MakeReviewContainer").addClass("MakeReviewContainer__Script"),$(".MakeReviewContainer__Inner").addClass("MakeReviewContainer__Inner__Script")}),window.addEventListener("scroll",()=>{var e=$("body").height(),e=(window.scrollY+window.innerHeight)/e*100;$(".customScrollbar").css({height:e+"%"})}),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:150,delay:50,duration:1e3,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"});var l=document.getElementById("HireMe_form");async function _(e){e.preventDefault();var a=new FormData(e.target);fetch(e.target.action,{method:l.method,body:a,headers:{Accept:"application/json"}}).then(e=>{e.ok?(alert("Thanks for your submission!"),l.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?alert(e.errors.map(e=>e.message).join(", ")):alert("Oops! There was a problem submitting your form")})}).catch(e=>{alert("Oops! There was a problem submitting your form",e)})}l.addEventListener("submit",_);var c=document.getElementById("HireMe_form");async function _(e){e.preventDefault();var a=new FormData(e.target);fetch(e.target.action,{method:c.method,body:a,headers:{Accept:"application/json"}}).then(e=>{e.ok?(alert("Thanks for your submission!"),c.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?alert(e.errors.map(e=>e.message).join(", ")):alert("Oops! There was a problem submitting your form")})}).catch(e=>{alert("Oops! There was a problem submitting your form",e)})}c.addEventListener("submit",_)});
//# sourceMappingURL=main.js.map
