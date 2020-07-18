console.log("Hello world!");

// load data/excuses.json
loadData("/data/excuses.json");

// interactivity functions



function addOption(listId, optionString) {
    // Adds an element to the document
    let list = document.getElementById(listId);
    let newOptionElement = document.createElement("option");
    newOptionElement.innerHTML = optionString;
    newOptionElement.setAttribute("value", optionString);
    // newOptionElement.value = optionString;
    list.appendChild(newOptionElement);
}

/**
 * Loads a json file and returns a json object.
 * @param {string} jsonPath - location of json file to load
 */
function loadData(requestURL) {
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const  excuse_types = request.response;
        displayData(excuse_types);
  }

}

/**
 * Puts the contents of the excuses json into HTML elements
 * @param {Object} The excuses json object
 */
function displayData(excuses) {
    console.log(excuses.excuse_types.length);
    for(let i=0;i<excuses.excuse_types.length;i++){
        addOption("excuse_type", excuses.excuse_types[i]);
    }
    for(let j=0;j<excuses.excuse_medium.length;j++){
        addOption("excuse_medium", excuses.excuse_medium[j]);
    }
}