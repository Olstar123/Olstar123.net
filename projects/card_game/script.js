// school card game with no name :)

//def functions
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

// game setup
const cards = ["R1","R2","R3","R4","R5","R6","R7","R8","R9","R10","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","Y1","Y2","Y3","Y4","Y5","Y6","Y7","Y8","Y9","Y10"];

// main game
let size = cards.length;
console.log(size);
console.log(cards.toString());
shuffle(cards);
console.log(cards.toString());

document.getElementById("toptext").innerText = "test";
document.getElementById("toptext").style.opacity = "1";