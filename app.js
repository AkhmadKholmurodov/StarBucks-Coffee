"use strict";
document.addEventListener ( "DOMContentLoaded",() => {
    const thumb2 = document.querySelector('.thumb1');
    // const thumb3 = thumb1.nextElementSibling;
    const thumb3 = document.querySelector(".thumb3");
    const thumb1 = thumb2.nextElementSibling;
    const img = document.querySelector(".imgBox img");

//     function imgSlider (anything) {
//     document.querySelector('.starbucks').src = anything;
// }


thumb1.addEventListener("click" , () => {
    img.src = '/img/img1.png';
});
thumb2.addEventListener("click" , () => {
    img.src = '/img/img2.png';
});
thumb3.addEventListener("click" , () => {
    img.innerHTML.src = '/img/img3.png';
});

});