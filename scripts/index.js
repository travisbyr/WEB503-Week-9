var button = document.getElementById("enter")                   // Create button bariable called 'enter
var input = document.getElementById("input")                    // Create input variable as 'input'
var ul = document.querySelector("ul")                           // Create ul variable as 'ul'

function inputLength() {                                        // Create function
    return input.nodeValue.length;                              // Return the length of input
}

function createListElemnet() {                                  // Create function
    var li = document.createElement("li");                      // Create li variable as li element
    li.appendChild(document.createTextNode(input.value));       // Append value of input variable to li variable
    ul.appendChild(li);                                         // Append li variable to ul variable

    li.addEventListener("click", function () {                   // Create li event listener
        var finished = this.classList.toggle("done")
        var removeButton = document.createElement("button");     // Create button remove variable
        removeButton.classList.add("deleteButton");              // Assign classlist to remove button variable

        if (finished) {                                                     // If finished
            removeButton.appendChild(document.createTextNode("remove"))     // 
            removeButton.classList = "deleteButton"
            li.appendChild(removeButton)
            removeButton.addEventListener("click", function () {
                this.parentElement.remove()
            })

        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });
    input.value = "";
}

function addListAfterPress() {      // Create function
    if (inputLength() > 0) {        // If lenegth is 0
        createListElement();        // Create item list
    }
}

function addListAfterPress(event) {                         // Create event function
    if (inputLength() > 0 && event.keyCode == 13) {         // If Input lengeht is greater 0 and event key code equals 13
        createListElement();                                // Create a item list
    }
}