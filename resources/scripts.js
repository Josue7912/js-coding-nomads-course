writeRandomQuote = function () {
    let quotes = [
    "Patience is bitter, but its fruit is sweet - Aristotle",
    "Difficult things in the world, must have their beginnings in the easy. - Lao Tzu",
    "The two most powerful warriors are patience and time. - Leo Tolstoy",
    "It is easier to find men who will volunteer to die. Than to find those who are willing to endure pain with patience. - Julius Caesar"
  ]
    let rand = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText = quotes[rand];
  }

function copyDate() {
  let footer = document.getElementById("copyright")
  let copyrightText = "Copyright [YOUR_NAME] ©" + new Date().getFullYear()
  footer.innerText = copyrightText
}

copyDate();
writeRandomQuote();