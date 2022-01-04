dark.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})


function increaseFontSizeBy5px () {
    txt = document.getElementsByTagName("html")[0]
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 5) + 'px';
}

plus.addEventListener("click", increaseFontSizeBy5px)


function decreaseFontSizeBy5px () {
    txt = document.getElementsByTagName("html")[0]
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 5) + 'px';
}

minus.addEventListener("click", decreaseFontSizeBy5px)