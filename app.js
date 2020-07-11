console.log("Hello world!");

// load data/excuses.json

// populate list boxes
addOption("excuse_type", "Financial");
addOption("excuse_type", "Health");



function addOption(listId, optionString) {
    // Adds an element to the document
    var list = document.getElementById(listId);
    console.log(list); // print what it gets
    var newOptionElement = document.createElement("option");
    newOptionElement.innerHTML = optionString;
    newOptionElement.setAttribute("value", optionString);
    // newOptionElement.value = optionString;
    list.appendChild(newOptionElement);
} 