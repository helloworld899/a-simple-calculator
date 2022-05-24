let result_window = document.querySelector("#result_window"); //display på miniräknaren
let buttons = document.querySelectorAll(".btn");
let result_box = document.querySelector("#result_box");
let multiBtn = document.querySelector("#multiBtn");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let equalBtn = document.querySelector("#equalBtn");
let operators = document.querySelector("#opBtn");
let isEvaluated = false;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {

    if (isEvaluated) {   //m.h.a. denna if-sats kan vi se till att ställa om miniräknaren efter att man slagit in = tecknet.
      result_window.textContent = "";

      isEvaluated = false;
    }

    if (result_window === "" && buttons[i].textContent === "*") {
    } else {
      if (
        (stopMultiOp(result_window.textContent) &&
          buttons[i].textContent === "+") ||
        (stopMultiOp(result_window.textContent) &&
          buttons[i].textContent === "-") ||
        (stopMultiOp(result_window.textContent) &&
          buttons[i].textContent === "*")
      ) {
      } else {
        result_window.textContent += buttons[i].textContent;
      }
    }
    equalSign(buttons[i].textContent);

    clearButton(buttons[i].textContent);
  });
}

  //vi ger ett valfritt namn i argument(equalsign) och i parametern(buttonValue)
function equalSign(buttonValue) {


  console.log(buttonValue);

  if (buttonValue === "=") {
    let calculate = result_window.textContent.slice(0, -1);
    let resultatet = eval(calculate);

    isEvaluated = true;

    let ul = document.querySelector(".unlisted");

    let li = document.createElement("li");
    
    li.textContent = result_window.textContent + resultatet;

    ul.append(li);

    //Här nedan ser vi till att skapa en button som då ska ingå i li-listan.
    let listBtn = document.createElement("button");

    li.append(listBtn);
    listBtn.textContent = "Delete";

    // Vi gör så att just denna delete knapp kan klickas.
    listBtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
  }
}

function clearButton(buttonClear) {
  if (buttonClear === "C") {
    result_window.textContent = "";
  }
}

function stopMultiOp(textString) {
  lastButton = textString.slice(-1);
  if (lastButton === "+" || lastButton === "-" || lastButton === "*") {
    return true;
  } else {
    return false;
  }
}