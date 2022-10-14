var card = document.getElementById("depoimento-slide");

var arr = [
  "url('./img/Depoimentos/Depoimento 1.JPG')",
  "url('./img/Depoimentos/Depoimento 2.JPG')",
  "url('./img/Depoimentos/Depoimento 3.JPG')",
  "url('./img/Depoimentos/Depoimento 4.JPG')",
  "url('./img/Depoimentos/Depoimento 5.JPG')",
  "url('./img/Depoimentos/Depoimento 6.JPG')",
];

var interval = 3000;

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
  setTimeout("slide6()", interval);
}

function slide6() {
  card.style.backgroundImage = arr[5];
  setTimeout("slide1()", interval);
}
