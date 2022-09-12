"use strict";
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
