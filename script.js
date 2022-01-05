function print(x) {
  var y = document.getElementById(x).innerHTML;
  document.getElementById("display").innerHTML += y;
}
function answer(x) {
  let y = document.getElementById(x).innerHTML.toString();

  document.getElementById("display").innerHTML = eval(y);
}
function clearscreen() {
  document.getElementById("display").innerHTML = "";
}
function square(x) {
  let a = document.getElementById(x).innerHTML;
  let b = a * a;
  document.getElementById("display").innerHTML = b;
}
function absolute(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.abs(a);
  document.getElementById("display").innerHTML = b;
}
function expo(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.exp(a);
  document.getElementById("display").innerHTML = b;
}
function naturallog(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.log(a);
  document.getElementById("display").innerHTML = b;
}
function log(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.log10(a);
  document.getElementById("display").innerHTML = b;
}
function pi() {
  let b = Math.PI;
  document.getElementById("display").innerHTML = b;
}
function root(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.sqrt(a);
  document.getElementById("display").innerHTML = b;
}
function power10(x) {
  let a = document.getElementById(x).innerHTML;
  let b = Math.pow(10, a);
  document.getElementById("display").innerHTML = b;
}
function fact(x) {
  var i, num, f;
  f = 1;
  num = document.getElementById(x).innerHTML;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  document.getElementById("display").innerHTML = f;
}
function del(x) {
  let a = document.getElementById(x).innerHTML.toString();
  let b = a.slice(0, -1);
  document.getElementById("display").innerHTML = b;
}
