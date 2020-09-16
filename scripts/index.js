var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}

li.addEventListener("click", function() {
    // creates a boolean that toggles the done class on li
    // if the list item is clicked this toggles the done class
    var finished = this.classList.toggle("done");
    // creates a remove button for the finished item:
    var removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");

    // if the list item is clicked (li and event listener) then
    // finish is true
    if (finished) {
        removeButton.appendChild(document.createTextNode("remove"));
        removeButton.classList = "deleteButton";
        li.appendChild(removeButton);

        removeButton.addEventListener("click",function() {
            this.parentElement.remove();
        });
    } else {
        this.getElementByClassName("deleteButton")[0].remove();
    }
});
// revert input value back to nothing
input.value = "";
}

function addListAfterCick() {
    if (inputLength() > 0) {
        
    }
}