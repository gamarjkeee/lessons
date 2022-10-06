{
  var btnContainer = document.getElementById("menu");

  var btns = btnContainer.getElementsByClassName("menu__link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("menu__link-active");
      current[0].className = current[0].className.replace(
        " menu__link-active",
        ""
      );
      this.className += " menu__link-active";
    });
  }
}

{
  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (even) => {
      even.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

{
  const swiper = new Swiper(".swiper", {
    // Optional parameters

    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
