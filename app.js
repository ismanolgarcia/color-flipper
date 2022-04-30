const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const color = document.querySelector(".color");
const randomColor = document.getElementById("randomColor");

randomColor.addEventListener("click", () => {
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    colorHex += hex[getRandomNumber()];
  }
  color.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
