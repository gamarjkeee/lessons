"use strict";
// Get the container element
{
  var btnContainer = document.getElementById("menu");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("menu__link");

  // Loop through the buttons and add the active class to the current/clicked button
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
