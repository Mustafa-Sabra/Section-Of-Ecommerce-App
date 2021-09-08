let selectBox = document.querySelectorAll(".select-box .options-box");
let category = document.querySelectorAll(".select-box .label");

category.forEach((label) => {
  label.addEventListener("click", () => {
    label.nextElementSibling.classList.toggle("active");
    if (label.nextElementSibling.classList.contains("active")) {
      label.lastElementChild.setAttribute("style", "transform:rotate(180deg)");
    } else {
      label.lastElementChild.setAttribute("style", "transform:rotate(0deg)");
    }
  });
});
