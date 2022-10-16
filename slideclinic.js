var arrClinic = [
  "./img/Clinica/consultório.jpeg",
  "./img/Clinica/consultório 2.jpeg",
  "./img/Clinica/consultório 3.jpeg",
  "./img/Clinica/consultório 4.jpeg",
];
var cardClinic = document.getElementById("clinic");
var interval = 3000;

function slideclinic1() {
  cardClinic.src = arrClinic[0];
  setTimeout("slideclinic2()", interval);
}

function slideclinic2() {
  cardClinic.src = arrClinic[1];
  setTimeout("slideclinic3()", interval);
}

function slideclinic3() {
  cardClinic.src = arrClinic[2];
  setTimeout("slideclinic4()", interval);
}

function slideclinic4() {
  cardClinic.src = arrClinic[3];
  setTimeout("slideclinic1()", interval);
}
