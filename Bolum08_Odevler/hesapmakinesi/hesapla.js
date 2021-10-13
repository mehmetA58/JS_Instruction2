let selectedOperator = "";
const sonuc = document.querySelector(".ekran");

document.querySelector("#bir").onclick = function () {
  sonuc.value += 1;
};
document.querySelector("#iki").onclick = function () {
  sonuc.value += 2;
};
document.querySelector("#uc").onclick = function () {
  sonuc.value += 3;
};
document.querySelector("#dort").onclick = function () {
  sonuc.value += 4;
};
document.querySelector("#bes").onclick = function () {
  sonuc.value += 5;
};
document.querySelector("#alti").onclick = function () {
  sonuc.value += 6;
};
document.querySelector("#yedi").onclick = function () {
  sonuc.value += 7;
};
document.querySelector("#sekiz").onclick = function () {
  sonuc.value += 8;
};
document.querySelector("#dokuz").onclick = function () {
  sonuc.value += 9;
};
document.querySelector("#sifir").onclick = function () {
  document.querySelector(".ekran").value += 0;
};
document.querySelector("#arti").onclick = function () {
  sonuc.value += `+`;
  selectedOperator = this.value;
};
document.querySelector("#eksi").onclick = function () {
  sonuc.value += `-`;
  selectedOperator = this.value;
};
document.querySelector("#carpi").onclick = function () {
  sonuc.value += `*`;
  selectedOperator = this.value;
};
document.querySelector("#bolu").onclick = function () {
  sonuc.value += `/`;
  selectedOperator = this.value;
};
document.querySelector("#esittir").onclick = function () {
  sonuc.value = eval(sonuc.value);
};
document.querySelector("#ce").onclick = function () {
  sonuc.value = ``;
};
document.querySelector("#nokta").onclick = function () {
  sonuc.value += `.`;
};
