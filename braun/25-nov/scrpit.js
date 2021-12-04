function test() {
  const p = document.getElementById("cpt");
  p.innerText = parseInt(p.innerText) + 1;
}

function ajout() {
  var a = prompt("ajouter qui ? ");
  if (a.trim() != "") {
    const p = document.querySelector("#list");
    p.innerHTML = p.innerHTML + `<li>${a}</li>`;
  } else {
    alert("veuillez saisir un prenom correct");
  }
}

function zero() {
  const p = document.getElementById("cpt");
  p.innerText = 0;
}

function double() {
  const p = document.getElementById("cpt");
  if (p < 100) {
    p.innerText *= 2;
  } else zero();
}
