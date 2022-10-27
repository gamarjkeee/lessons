"use strict";
window.onload = function () {
  const parallax = document.querySelector(".gunkan");
  if (parallax) {
    const item = document.querySelector(".parallax__item--1");
    const item2 = document.querySelector(".parallax__item--2");
    const item3 = document.querySelector(".parallax__item--3");
    const item4 = document.querySelector(".parallax__item--4");
    const item5 = document.querySelector(".parallax__item--5");
    const item6 = document.querySelector(".parallax__item--6");
    const forItem = 10;

    const speed = 0.1;
    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      item.style.cssText = `transform: translate(${positionX / forItem}%,${
        positionY / forItem
      }%);`;
      item2.style.cssText = `transform: translate(${positionX / forItem}%,${
        positionY / forItem
      }%);`;
      item3.style.cssText = `transform: translate(${
        (positionX / forItem) * 3
      }%,${(positionY / forItem) * 3}%);`;
      item4.style.cssText = `transform: translate(${
        (positionX / forItem) * 3
      }%,${(positionY / forItem) * 3}%);`;
      item5.style.cssText = `transform: translate(${
        (positionX / forItem) * 6
      }%,${(positionY / forItem) * 6}%);`;
      item6.style.cssText = `transform: translate(${
        (positionX / forItem) * 6
      }%,${(positionY / forItem) * 6}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteration: false,
  },
  speed: 1000,
});

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

{
  let btnContainer = document.getElementById("menu");

  let btns = btnContainer.getElementsByClassName("bottom-header__link");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
