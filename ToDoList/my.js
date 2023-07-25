function addTodo() {
  let elementDiv = document.getElementById("data");
  let input = document.getElementById("todoInput");
  let valueInput = input.value;
  if (valueInput) {
    let divWrapper = document.createElement("div");
    if (fonColor) {
      divWrapper.className = "wrapperDiv";
      divWrapper.style.background = fonColor;
    } else {
      divWrapper.className = "wrapperDiv";
    }

    let div = document.createElement("div");
    div.innerText = valueInput;
    div.className = "textDiv";

    let button = document.createElement("button");
    button.className = "deleteButton";
    button.innerText = "delete";

    divWrapper.appendChild(div);
    divWrapper.appendChild(button);
    document.body.appendChild(divWrapper);

    input.value = "";
    elementDiv.innerText = "";
    elementDiv.innerText = "Успешно добавлено";
    elementDiv.className = "greenHide";
    elementDiv.classList.add("green");
    setTimeout(function () {
      elementDiv.classList.remove("green");
    }, 2000);

    button.addEventListener("click", function () {
      divWrapper.remove(); // Удаляем родительский блок при нажатии на кнопку
      elementDiv.innerText = "Удалено успешно";
      elementDiv.classList.remove("greenHide");
      elementDiv.className = "greenHide";
      elementDiv.classList.add("green");
      setTimeout(function () {
        elementDiv.classList.remove("green");
      }, 2000);
    });
  } else {
    elementDiv.innerText = "Поле для ввода не заполнено";
    elementDiv.classList.remove("greenHide");
    elementDiv.classList.add("red");

    setTimeout(function () {
      elementDiv.classList.add("redHide");
    }, 2000);
    elementDiv.classList.remove("redHide");
  }
}



let btn = document.getElementById("button");
btn.addEventListener("click", addTodo);




let btnSeting = document.getElementById("seting");
btnSeting.addEventListener("click", function () {
  let divWrapSeting = document.getElementById("wrapperSetting");
  divWrapSeting.style.visibility = "visible";
});





let fonColor;
let btnSave = document.getElementById("save");
btnSave.addEventListener("click", function () {
  let select = document.getElementById("backgroundColor");
  let selectValue = select.value;
  fonColor = selectValue;
  let divWrapSeting = document.getElementById("wrapperSetting");
  divWrapSeting.style.visibility = 'hidden'
});



