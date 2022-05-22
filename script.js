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



//function to create random number from 0-> chosen maximum number
const randomNumber = function(maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    }
    //creates random color based on random number
const randomColor = function(numPassed) {
    lightness = 100 - 10 * numPassed
    let h = randomNumber(360);
    let s = randomNumber(100);
    let l = randomNumber(lightness);
    return `hsl(${h},${s}%,${l}%)`;

}

//turns the box a random color when hovered on and increases darkness of box after each pass
let elements = document.getElementsByClassName("gridItem");
for (let i = 0; i < elements.length; i++) {
    let passes = 0;
    elements[i].addEventListener('mouseenter', () => {
        if (elements[i].style.backgroundColor == 'lightBlue') {
            elements[i].style.backgroundColor = randomColor();
        } else {
            passes++
            elements[i].style.backgroundColor = randomColor(passes);
        }
    });
}