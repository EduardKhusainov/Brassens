const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// скрипт для смены цвета фона
var scroll = function (element, style, positions, value) {
  // Превращаю значение цветов в массив
  var colorsVal = [],
    val;

  (colorsVal[0] = value[0].split(",").map(Number)),
    (colorsVal[1] = value[1].split(",").map(Number));

  element.style[style] = "rgb(" + colorsVal[0].join(",") + ")";

  window.onscroll = function () {
    var scrollTop = window.pageYOffset,
      // Высчитываю процент того, на сколько нужно изменить цвет
      pct = (window.pageYOffset - positions[0]) / positions[1],
      currentColor = [];

    // Проверяю, не выходит ли scroll за рамки
    if (
      window.pageYOffset <= positions[1] &&
      window.pageYOffset >= positions[0]
    ) {
      for (var i = 0; i < colorsVal[0].length; i++) {
        // Проверяю, какое значение цвета больше
        if (colorsVal[0][i] < colorsVal[1][i]) {
          // Высчитываю текущее значение цвета
          val = (colorsVal[1][i] - colorsVal[0][i]) * pct + colorsVal[0][i];
          // Устанавливаю текущее значение цвета
          currentColor[i] = Math.round(val);
        } else {
          // Высчитываю текущее значение цвета
          val = colorsVal[0][i] - (colorsVal[0][i] - colorsVal[1][i]) * pct;
          // Устанавливаю текущее значение цвета
          currentColor[i] = Math.round(val);
        }
      }
      // Применяю цвет фона к элементу
      element.style[style] = "rgb(" + currentColor.join(",") + ")";
    }
  };
};

(function () {
  var obj = document.querySelector("body");
  scroll(obj, "background-color", [0, 1000], ["43,43,43", "131,131,208"]);
})();
