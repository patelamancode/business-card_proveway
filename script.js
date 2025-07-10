const boxes = document.querySelectorAll(".option-box");
const radios = document.querySelectorAll('input[type="radio"][name="unit"]');

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    setActiveBox(box);
  });

  //   prevent event bubbling
  const inputs = box.querySelectorAll("select, input");
  inputs.forEach((el) => {
    el.addEventListener("click", (e) => e.stopPropagation());
  });
});

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedBox = radio.closest(".option-box");
    setActiveBox(selectedBox);
  });
});

function setActiveBox(boxToActivate) {
  boxes.forEach((box) => box.classList.remove("active"));
  const radio = boxToActivate.querySelector('input[type="radio"]');
  radio.checked = true;
  boxToActivate.classList.add("active");
}
