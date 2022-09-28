"use strict";

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
  document.addEventListener("DOMContentLoaded", function () {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2022, 9, 10);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[
        num % 100 > 4 && num % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
      ];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? "0" + days : days;
      $hours.textContent = hours < 10 ? "0" + hours : hours;
      $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
      $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
      $days.dataset.title = declensionNum(days, ["Days", "Days", "Days"]);
      $hours.dataset.title = declensionNum(hours, ["Hours", "Hours", "Hours"]);
      $minutes.dataset.title = declensionNum(minutes, ["Mins", "Mins", "Mins"]);
      $seconds.dataset.title = declensionNum(seconds, ["Sec", "Sec", "Sec"]);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector(".timer-discount__days");
    const $hours = document.querySelector(".timer-discount__hours");
    const $minutes = document.querySelector(".timer-discount__minutes");
    const $seconds = document.querySelector(".timer-discount__seconds");
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
}

{
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
{
  const swiper = new Swiper(".swiper", {
    // Optional parameters

    loop: true,

    // If we need pagination
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
