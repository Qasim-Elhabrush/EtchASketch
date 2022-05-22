for (let i = 0; i < 256; i++) {
    let item = document.createElement('div');
    item.className = "gridItem";
    document.querySelector(".gridContainer").appendChild(item);
}
let elements = document.getElementsByClassName("gridItem");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', () => {
        elements[i].style.backgroundColor = "black";
    });
}