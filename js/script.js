window.onload = () => {
  const submitButton = document.getElementById("submit");
  const inputLoc = document.getElementById("inputBox");
  const ul = document.getElementById("toDoList");

  submitButton.onclick = function () {
    const inputValue = inputLoc.value;
    if (inputValue != "") {
      const newLi = document.createElement("li");
      newLi.innerText = inputValue;
      newLi.classList = "newLi";

      const newX = document.createElement("span");
      newX.innerText = "❌";
      newX.className = "close";

      newLi.appendChild(newX);

      ul.appendChild(newLi);

      newX.onclick = function (e) {
        const toRemove = e.target;
        toRemove.parentNode.remove();
      };
      const list = document.querySelector("ul");

      const checked = function (e) {
        e.target.classList.toggle("strikethrough");
      };
      list.addEventListener("click", checked);
    }
  };
};
