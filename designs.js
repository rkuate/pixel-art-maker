// Select color input

//Select the form element
const formElement = document.body.querySelector("#sizePicker");

// When size is submitted by the user, call makeGrid()
//console.log(colorValue);
function makeGrid() {
  const colorValue = document.body.querySelector("#colorPicker").value;
  // Select size input
  const heightValue = document.body.querySelector("#inputHeight").value;
  const widthValue = document.body.querySelector("#inputWidth").value;
  //Get the table element
  const tableElement = document.body.querySelector("table");
  for (let rows = 1 ; rows <= heightValue ; rows++){
    console.log(rows);
    const rowElement = document.createElement("tr");
    tableElement.appendChild(rowElement);
    for (let columns = 1 ; columns <= widthValue ; columns++){
      console.log(rows);
      console.log(columns);
      const columnElement = document.createElement("td");
      columnElement.style.color = "colorValue";
      rowElement.appendChild(columnElement);
    }
  }
}

formElement.addEventListener("submit" , makeGrid());
formElement.removeEventListener("submit" , makeGrid());
