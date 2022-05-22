//asks the user how many boxes they want (width/height)
let squares = 0;
const Prompt = function(type) {
    if (type == "initial") {
        squares = prompt("How many squares would you like on both sides? (The limit is 100)")
        if (squares > 100) {
            Prompt();
        }
    } else {
        squares = prompt("The amount you requested was too large.  Please try again ")
        if (squares > 100) {
            Prompt();
        }
    }
}
Prompt("initial")

//creates the amount of boxes/divs that the user selected
let wh = Math.pow(squares, 2);
for (let i = 0; i < wh; i++) {
    let item = document.createElement('div');
    item.className = "gridItem";
    document.querySelector(".gridContainer").appendChild(item);
}

//Sets amount of columns/rows
document.documentElement.style.setProperty('--columns', squares);
document.documentElement.style.setProperty('--rows', squares);

//turns the box black if the mouse enters the box/div
let elements = document.getElementsByClassName("gridItem");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', () => {
        elements[i].style.backgroundColor = "black";
    });
}