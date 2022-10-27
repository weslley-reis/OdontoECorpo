var card = document.getElementById("depoimento-slide");

var arr = [
  "url('./img/Depoimentos/Depoimento 1.jpg')",
  "url('./img/Depoimentos/Depoimento 2.jpg')",
  "url('./img/Depoimentos/Depoimento 3.jpg')",
  "url('./img/Depoimentos/Depoimento 4.jpg')",
  "url('./img/Depoimentos/Depoimento 5.jpg')",
  "url('./img/Depoimentos/Depoimento 6.jpg')",
];

var interval = 5000;

function slide1() {
  card.style.backgroundImage = arr[0];
  setTimeout("slide2()", interval);
}

function slide2() {
  card.style.backgroundImage = arr[1];
  setTimeout("slide3()", interval);
}

function slide3() {
  card.style.backgroundImage = arr[2];
  setTimeout("slide4()", interval);
}

function slide4() {
  card.style.backgroundImage = arr[3];
  setTimeout("slide5()", interval);
}

function slide5() {
  card.style.backgroundImage = arr[4];
  setTimeout("slide1()", interval);
}
