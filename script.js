// var btn_shiro_minus = document.getElementById("btn_shiro_minus");
// var btn_shiro_plus = document.getElementById("btn_shiro_plus");

const element_number_platte = document.getElementById("number_platte");
const element_number_bier = document.getElementById("number_bier");
const element_number_tip = document.getElementById("number_tip");

const element_cost_platte = document.getElementById("price_platte");
const element_cost_bier = document.getElementById("price_bier");

const element_sum = document.getElementById("sum");

const element_input = document.querySelector("input");

var num_platte = 1;
var num_bier = 1;
var num_tip = 20;

window.addEventListener("load", (event) => {
  Calculate();
});

element_input.addEventListener("input", updateValue);
function updateValue(e) {
  Calculate();
}

function function_platte_mimus() {
  if (num_platte > 0) {
    num_platte--;
  }
  Calculate();
}

function function_platte_plus() {
  num_platte++;
  Calculate();
}

function function_bier_mimus() {
  if (num_bier > 0) {
    num_bier--;
  }
  Calculate();
}

function function_bier_plus() {
  num_bier++;
  Calculate();
}

function function_tip_mimus() {
  if (num_tip > 0) {
    num_tip--;
  }
  Calculate();
}

function function_tip_plus() {
  num_tip++;
  Calculate();
}

function function_read_tip() {
  num_tip = parseFloat(element_number_tip.value);
  Calculate();
}

function Calculate() {
  element_number_platte.innerHTML = num_platte;
  element_number_bier.innerHTML = num_bier;
  element_number_tip.value = num_tip;

  const cost_platte = parseFloat(element_cost_platte.value);
  const cost_bier = parseFloat(element_cost_bier.value);

  var sum =
    (cost_platte * num_platte + cost_bier * num_bier) * (1 + num_tip / 100);

  sum = sum.toFixed(2);

  element_sum.innerHTML = sum + " €";
}
