var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
    },
    autoplay: {
      delay: 3000,
    },
});


function addZero(num){
  return (num > 9) ? num : '0' + num;
}
