function getId(id) {
  return document.getElementById(id);
}

var dernier = 0;

getId("calcul").innerHTML = dernier;

function plus(id) {
  var val = getId("nombre").value;
  last_opr();
  var dernier1 = dernier;
  dernier = dernier + parseInt(val);
  var p = "<p>" + dernier1 + "+" + val + "=" + dernier + "</p>";
  getId("calcul").innerHTML += p;
  getId("nombre").value = "";
  getId("nombre").focus();
}

function division(id) {
  var val = getId("nombre").value;
  last_opr();
  if (val != 0) {
    var dernier1 = dernier;
    dernier = (dernier / parseInt(val)).toFixed(2);
    var p = "<p>" + dernier1 + "÷" + val + "=" + dernier + "</p>";
    getId("calcul").innerHTML += p;
    getId("nombre").value = "";
  } else {
    alert("Division par 0!!!!! Pas permis !!!!");
  }
  getId("nombre").focus();
}

function mult(id) {
  var val = getId("nombre").value;
  last_opr();
  var dernier1 = dernier;
  dernier = dernier * parseInt(val);
  var p = "<p>" + dernier1 + "*" + val + "=" + dernier + "</p>";
  getId("calcul").innerHTML += p;
  getId("nombre").value = "";
  getId("nombre").focus();
}

function moins(id) {
  var val = getId("nombre").value;
  last_opr();
  var dernier1 = dernier;
  dernier = dernier - parseInt(val);
  var p = "<p>" + dernier1 + "-" + val + "=" + dernier + "</p>";
  getId("calcul").innerHTML += p;
  getId("nombre").value = "";
  getId("nombre").focus();
}

function last_opr() {
  var val = getId("nombre").value;
  getId("last_opr").innerHTML = "<p>" + val + "</p>";
}

function check() {
  var val = getId("nombre").value;
  if (val == "") {
    alert("NaN!!!");
    return 0;
  }
  return 1;
}

function chg_color() {
  var x = getId("calcul");
  if (x.style.backgroundColor != "black") {
    getId("calcul").style.backgroundColor = "black";
    getId("calcul").style.color = "white";
  } else {
    getId("calcul").style.backgroundColor = "white";
    getId("calcul").style.color = "black";
  }
}
