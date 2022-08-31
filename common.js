const nav_wrap = document.querySelector("#nav-wrap");
const booking_btn = document.querySelector("#request-booking-btn");
const stickPosition = 50;
const bookingBtnPosition = 600;
const stickClassName = "sticky";

window.onscroll = function() {
    if (window.scrollY >= stickPosition || window.pageYOffset >= stickPosition) {
        nav_wrap.classList.add(stickClassName);
    } else {
        nav_wrap.classList.remove(stickClassName);
    }
    
    if (window.scrollY >= bookingBtnPosition || window.pageYOffset >= bookingBtnPosition) {
        booking_btn.classList.add("active");
    } else {
        booking_btn.classList.remove("active");
    }
};

document.querySelector(".btn-nav-open").addEventListener("click", function(){
    document.querySelector(".mobile-nav-overlay").classList.add("active");
    document.querySelector("body").classList.add("noscroll");
});
document.querySelector(".btn-nav-close").addEventListener("click", function(){
    document.querySelector(".mobile-nav-overlay").classList.remove("active");
    document.querySelector("body").classList.remove("noscroll");
});
