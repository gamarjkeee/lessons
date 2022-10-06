const tabNavItems = document.querySelectorAll(".body-benefirs__button");
const tabItems = document.querySelectorAll(".item-tabs");
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".body-benefirs__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
      tabNavItem.classList.remove("active");
    });

    targetElement.classList.add("active");
    tabItems[newActiveIndex].classList.add("active");
    tabItems[currentActiveIndex].classList.remove("active");
  }
});
