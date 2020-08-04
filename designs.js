// Get color input element
const colorElement = document.body.querySelector("#colorPicker");

//Get the form element
const formElement = document.body.querySelector("#sizePicker");

//Get the table element
const tableElement = document.body.querySelector("table");

//Check whether to submit the form ot reset the form
var reset = false;

/*
* @description Build the grid
* @constructor
* @param {object} colorElement - The color input element
* @param {object} tableElement - The table element
*/
function makeGrid(colorElement , tableElement) {
  // Select size input
  const heightValue = document.body.querySelector("#inputHeight").value;
  const widthValue = document.body.querySelector("#inputWidth").value;

  for (let rows = 1 ; rows <= heightValue ; rows++){
    //Create a <tr> element
    const rowElement = document.createElement("tr");
    tableElement.appendChild(rowElement);
    for (let columns = 1 ; columns <= widthValue ; columns++){
      //Create a <td>
      const columnElement = document.createElement("td");
      columnElement.style.backgroundColor = colorElement.value;
      rowElement.appendChild(columnElement);
    }
  }
}

/*
* @description Change the color of an element
* @constructor
* @param {object} colorElement - The color input element
* @param {object} elementToModify - The element which has been clicked
*/
function changeColor(colorElement , elementToModify){
  elementToModify.style.backgroundColor = colorElement.value;
}

//Make a grid when the submit button is clicked
formElement.addEventListener("submit" , function(event){
  event.preventDefault();
  if (!reset){
    makeGrid(colorElement, tableElement);
    reset = !reset;
  }else{
    // Collect all the <tr> elements in our grid
    const trElements = tableElement.querySelectorAll('tr');
    console.log(trElements);
    //Remove the previous grid
    for (tableChildElement = 0 ; tableChildElement < trElements.length ; tableChildElement++){
      tableElement.removeChild(trElements[tableChildElement]);
    }
    //Build a new grid
    makeGrid(colorElement, tableElement);
  }

});

//Change the color af an element
tableElement.addEventListener("click" , function(event){
  //Get the element which fires the event
  const elementToModify = event.target;
  changeColor(colorElement, elementToModify);
})
