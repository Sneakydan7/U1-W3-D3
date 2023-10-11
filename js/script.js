window.onload = () => {
  const submitButton = document.getElementById("submit");
  const inputLoc = document.getElementById("inputBox");
  const ul = document.getElementById("toDoList");

  submitButton.onclick = function () {
    const inputValue = inputLoc.value;
    const checked = function (e) {
      e.target.classList.toggle("strikethrough");
    };

    if (inputValue != "") {
      const newLi = document.createElement("li");
      newLi.classList = "newLi";
      const liSpan = document.createElement("span");
      liSpan.innerText = inputValue;
      liSpan.addEventListener("click", checked);

      newLi.appendChild(liSpan);
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
      console.log("LIST", list);
    }
  };
};
