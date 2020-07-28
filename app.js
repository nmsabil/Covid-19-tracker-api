const countries = document.querySelector("datalist");
const search = document.querySelector("#search");
const date = document.querySelector("#date");
const nameCountry = document.querySelector("#name-country");
const confirmed = document.querySelector(".confirmed");
const deaths = document.querySelector(".deaths");
const recovered = document.querySelector(".recovered");
const chart = document.querySelector(".chart");

let dataChart = [];

const API_URL = "https://api.covid19api.com/summary";

async function covid() {
  const res = await fetch(API_URL);
  console.log(res);
}
covid();
