writeRandomQuote = function () {
    let quotes = [
    "Patience is bitter, but its fruit is sweet - Aristotle",
    "Difficult things in the world, must have their beginnings in the easy. - Lao Tzu",
    "The two most powerful warriors are patience and time. - Leo Tolstoy",
    ]
    let rand = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText = quotes[rand];
  }

function copyDate() {
  let footer = document.getElementById("copyright")
  let copyrightText = "Copyright Josue Ponce ©" + new Date().getFullYear()
  footer.innerText = copyrightText
}

copyDate();
writeRandomQuote();