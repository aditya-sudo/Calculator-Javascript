function print(x) {
  var y = document.getElementById(x).innerText;
  display.innerText += y;
}
function answer(x) {
  let y = document.getElementById(x).innerText.toString();
  y = y.replace("^", "**");
  y = y.replace("×", "*");
  y = y.replace("÷", "/");
  document.getElementById("display").innerText = eval(y);
}
function clearscreen() {
  document.getElementById("display").innerHTML = "";
}
function square() {
  let a = display.innerText;
  display.innerText = a * a;
}
function absolute() {
  display.innerText = Math.abs(display.innerText);
}
function expo() {
  display.innerText = Math.exp(display.innerText);
}
function naturallog() {
  display.innerText = Math.log(display.innerText);
}
function log() {
  display.innerText = Math.log10(display.innerText);
}
function pi() {
  display.innerText = Math.PI;
}
function root() {
  display.innerText = Math.sqrt(display.innerText);
}
function power10() {
  print("ten");
  print("upon");
}
function power() {
  print("upon");
}
function fact() {
  var i, num, f;
  f = 1;
  num = display.innerText;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  display.innerText = f;
}
function del(x) {
  let a = document.getElementById(x).innerText.toString();
  let b = a.slice(0, -1);
  document.getElementById("display").textContent = b;
}
function signchange() {
  display.innerText = display.innerText * -1;
}
function inverse() {
  display.innerText = 1 / display.innerText;
}
function radtodeg() {
  display.innerText = display.innerText * (180 / 3.14159);
}
function cosine() {
  display.innerText = Math.cos(display.innerText);
}
function sin() {
  display.innerText = Math.sin(display.innerText);
}
function tan() {
  display.innerText = Math.tan(display.innerText);
}
function ceil() {
  display.innerText = Math.ceil(display.innerText);
}
function floor() {
  display.innerText = Math.floor(display.innerText);
}
function round() {
  display.innerText = Math.round(display.innerText);
}
function expo() {
  display.innerText = Number.parseFloat(display.innerText).toExponential(3);
}
var memoryRegister = [];
function memorysave() {
  var num = Number(display.innerText);
  if (Number.isNaN(num)) return;
  memoryRegister.push(num);
}
function memoryclear() {
  memoryRegister = [];
}
function memory() {
  for (i = 0; i < memoryRegister.length; i++) {
    display.innerText = display.innerText + " , " + memoryRegister.pop();
  }
}
function memoryminus() {
  memoryRegister.pop();
}
