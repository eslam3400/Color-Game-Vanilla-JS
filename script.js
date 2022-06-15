let color
let cards
let level = 'e'
let tries

const newGame = () => {
  cards = []
  color = generateColor()
  tries = 0
  document.getElementById("goal-color").innerHTML = `${color.seg1},${color.seg2},${color.seg3}`
  generateCards()
}

const generateColor = () => {
  return {
    seg1: Math.floor(Math.random() * 256),
    seg2: Math.floor(Math.random() * 256),
    seg3: Math.floor(Math.random() * 256),
  }
}

const generateCards = () => {
  let goalCard

  if (level === 'e') {
    goalCard = Math.floor(Math.random() * 3)
    for (let i = 0; i < 3; i++) {
      if (i === goalCard) cards.push(color)
      else cards.push(generateColor())
    }
  } else {
    goalCard = Math.floor(Math.random() * 6)
    for (let i = 0; i < 6; i++) {
      if (i === goalCard) cards.push(color)
      else cards.push(generateColor())
    }
  }

  renderCards()
}

const setLevel = (_level) => {
  _level === "e" ? level = "e" : level = "h"
  newGame()
}

const select = (e) => {
  if (e.style.backgroundColor === `rgb(${color.seg1}, ${color.seg2}, ${color.seg3})`) {
    alert(`Bingo! you guessed it right after ${tries} times Champ :D`)
    newGame()
  }
  else tries++
}

const renderCards = () => {
  let innerHTML = ``
  cards.forEach(card => innerHTML += `<div class="game-card" onclick="select(this)" style="background-color: rgb(${card.seg1},${card.seg2},${card.seg3})"></div>`);
  document.getElementById("game-cards").innerHTML = innerHTML
}


newGame()

// var card1 = document.querySelector(".card1");
// var card2 = document.querySelector(".card2");
// var card3 = document.querySelector(".card3");
// var card4 = document.querySelector(".card4");
// var card5 = document.querySelector(".card5");
// var card6 = document.querySelector(".card6");
// var cardGroup1 = document.querySelector(".cardGroup1");
// var cardGroup2 = document.querySelector(".cardGroup2");
// var newColor = document.querySelector(".newColors");
// var easy = document.querySelector(".easy");
// var hard = document.querySelector(".hard");
// var cardGroup = [card1, card2, card3, card4, card5, card6];
// var cardSelected = false;
// var colorValue;
// var firstIndexValue = Math.floor(Math.random() * 256);
// var secondIndexValue = Math.floor(Math.random() * 256);
// var thirdIndexValue = Math.floor(Math.random() * 256);
// var randomCard = Math.floor(Math.random() * 6)

// //New Color Events

// newColor.addEventListener("click", function () {
//   firstIndexValue = Math.floor(Math.random() * 256);
//   secondIndexValue = Math.floor(Math.random() * 256);
//   thirdIndexValue = Math.floor(Math.random() * 256);
//   randomCard = Math.floor(Math.random() * 6)
//   colorValue = "rgb(" + firstIndexValue + ", " + secondIndexValue + ", " + thirdIndexValue + ")"
//   document.querySelector(".color").innerHTML = colorValue;
//   if (!cardSelected) {
//     for (var i = 0; i < cardGroup.length; i++) {
//       cardGroup[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
//     }
//     cardGroup[randomCard].style.backgroundColor = "rgb(" + firstIndexValue + ", " + secondIndexValue + ", " + thirdIndexValue + ")";
//   }
// })
// newColor.addEventListener("mouseenter", function () {
//   newColor.style.backgroundColor = "dodgerblue";
//   newColor.style.color = "white";
// })
// newColor.addEventListener("mouseleave", function () {
//   newColor.style.backgroundColor = "white";
//   newColor.style.color = "dodgerblue";
// })

// //Easy Events

// easy.addEventListener("click", function () {
//   hard.style.backgroundColor = "white";
//   easy.style.backgroundColor = "dodgerblue";
//   cardGroup2.style.visibility = "hidden";
//   easy.style.color = "white";
//   hard.style.color = "dodgerblue";
// })

// //Hard Events

// hard.addEventListener("click", function () {
//   easy.style.backgroundColor = "white";
//   hard.style.backgroundColor = "dodgerblue";
//   cardGroup2.style.visibility = "visible";
//   hard.style.color = "white";
//   easy.style.color = "dodgerblue";
// })

// //Cards On Click Events

// card1.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {
//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })
// card2.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {

//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })
// card3.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {
//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })
// card4.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {
//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })
// card5.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {
//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })
// card6.addEventListener("click", function () {
//   if (this.style.backgroundColor == colorValue)
//     alert("bingo")
//   else {
//     this.style.backgroundColor = "darkslategray"
//     this.style.border = "none"
//   }
// })